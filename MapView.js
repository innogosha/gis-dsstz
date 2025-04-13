import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Circle, Popup, LayersControl, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import tanzaniaRegions from "../data/tanzaniaRegions.json"; // GeoJSON data for Tanzanian regions

const MapView = ({ lang, weatherApiKey }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [userLocation, setUserLocation] = useState(null);

    // Fetch weather data for Tanzanian regions
    useEffect(() => {
        const fetchWeatherData = async () => {
            const regions = [
                { name: "Morogoro", lat: -6.82, lon: 37.66 },
                { name: "Mbeya", lat: -8.91, lon: 33.46 },
                { name: "Mwanza", lat: -2.52, lon: 32.93 },
            ];
            const promises = regions.map((region) =>
                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${region.lat}&lon=${region.lon}&units=metric&appid=${weatherApiKey}`
                ).then((res) => res.json())
            );
            const data = await Promise.all(promises);
            setWeatherData(data);
        };
        fetchWeatherData();
    }, [weatherApiKey]);

    // Handle user location
    const locateUser = () => {
        const map = useMap();
        map.locate().on("locationfound", (e) => {
            setUserLocation(e.latlng);
            map.flyTo(e.latlng, 13);
        });
    };

    const onEachRegion = (region, layer) => {
        const { name, crops } = region.properties;
        layer.bindPopup(
            `<strong>${lang === "en" ? "Region" : "Eneo"}: ${name}</strong><br />
            ${lang === "en" ? "Crops" : "Mazao"}: ${crops
                .map((crop) => (lang === "en" ? crop.name_en : crop.name_sw))
                .join(", ")}`
        );
    };

    return (
        <MapContainer center={[-6.82, 37.66]} zoom={7} style={{ height: "600px", width: "100%" }}>
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay checked name={lang === "en" ? "Crop Suitability" : "Mazao Yanayofaa"}>
                    <GeoJSON data={tanzaniaRegions} onEachFeature={onEachRegion} />
                </LayersControl.Overlay>
                <LayersControl.Overlay name={lang === "en" ? "Weather Data" : "Hali ya Hewa"}>
                    {weatherData.map((weather, index) => (
                        <Circle
                            key={index}
                            center={[weather.coord.lat, weather.coord.lon]}
                            radius={20000} // 20 km radius
                            color="blue"
                            fillOpacity={0.3}
                        >
                            <Popup>
                                <strong>{weather.name}</strong>
                                <br />
                                {lang === "en" ? "Temperature" : "Joto"}: {weather.main.temp}°C
                                <br />
                                {lang === "en" ? "Rainfall" : "Mvua"}:{" "}
                                {weather.rain ? weather.rain["1h"] || 0 : 0} mm/h
                            </Popup>
                        </Circle>
                    ))}
                </LayersControl.Overlay>
            </LayersControl>
            <button
                onClick={locateUser}
                style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 1000,
                    padding: "10px",
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            >
                {lang === "en" ? "Locate Me" : "Nipate"}
            </button>
            {userLocation && <Marker position={userLocation} />}
        </MapContainer>
    );
};

export default MapView;