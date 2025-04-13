import React, { useEffect, useState } from "react";
import axios from "axios";

const RecommendationList = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get("http://localhost:8000/recommendations/");
                setRecommendations(response.data);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };
        fetchRecommendations();
    }, []);

    return (
        <div>
            <h2>Previous Recommendations</h2>
            <ul>
                {recommendations.map((rec) => (
                    <li key={rec.id}>
                        <strong>Crop:</strong> {rec.crop} | <strong>Soil:</strong> {rec.soil_type} | <strong>Climate:</strong> {rec.climate} | <strong>Water:</strong> {rec.water_availability} L/ha
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationList;