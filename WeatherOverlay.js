import React, { useEffect, useState } from "react";
import { Circle, Popup } from "react-leaflet";

const WeatherOverlay = ({ apiKey }) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const regions = [
                { name: "Morogoro", lat: -6.82, lon: 37.66 },
                { name: "Mbeya", lat: -8.91, lon: 33.46 },
                { name: "Mwanza", lat: -2.52, lon: 32.93 },
            ];

            const promises = regions.map((region) =>
                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${region.lat}&lon=${region.lon}&units=metric&appid=${apiKey}`
                ).then((res) => res.json())
            );

            const data = await Promise.all(promises);
            setWeatherData(data);
        };

        fetchWeatherData();
    }, [apiKey]);

    return weatherData.map((weather, index) => (
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
                Temperature: {weather.main.temp}°C
                <br />
                Rainfall: {weather.rain ? weather.rain["1h"] || 0 : 0} mm/h
            </Popup>
        </Circle>
    ));
};

export default WeatherOverlay;