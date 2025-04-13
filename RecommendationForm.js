import React, { useState } from "react";
import axios from "axios";

const RecommendationForm = ({ lang }) => {
    const [soilType, setSoilType] = useState("");
    const [climate, setClimate] = useState("");
    const [waterAvailability, setWaterAvailability] = useState("");
    const [recommendations, setRecommendations] = useState(null);

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8000/recommendations/", {
                soil_type: soilType,
                climate: climate,
                water_availability: parseFloat(waterAvailability),
            }, {
                params: { lang },
            });
            setRecommendations(response.data.recommendations);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };

    return (
        <div>
            <h2>{lang === "en" ? "Get Recommendations" : "Pata Mapendekezo"}</h2>
            <label>{lang === "en" ? "Soil Type:" : "Aina ya Udongo:"}</label>
            <input type="text" value={soilType} onChange={(e) => setSoilType(e.target.value)} />

            <label>{lang === "en" ? "Climate:" : "Hali ya Hewa:"}</label>
            <input type="text" value={climate} onChange={(e) => setClimate(e.target.value)} />

            <label>{lang === "en" ? "Water Availability (L/ha):" : "Upatikanaji wa Maji (L/ha):"}</label>
            <input type="number" value={waterAvailability} onChange={(e) => setWaterAvailability(e.target.value)} />

            <button onClick={handleSubmit}>{lang === "en" ? "Submit" : "Tuma"}</button>

            {recommendations && (
                <div>
                    <h3>{lang === "en" ? "Recommendations" : "Mapendekezo"}</h3>
                    <ul>
                        {recommendations.map((rec, index) => (
                            <li key={index}>
                                {rec.crop} ({lang === "en" ? "Region" : "Eneo"}: {rec.region})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RecommendationForm;