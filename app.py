from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI()

# Define the data model for recommendations
class RecommendationRequest(BaseModel):
    soil_type: str
    climate: str
    water_availability: float

# Define the crop recommendations
crop_recommendations = {
    "sandy": {"dry": "millet", "wet": "maize", "temperate": "wheat"},
    "clay": {"dry": "sorghum", "wet": "rice", "temperate": "barley"},
    "loamy": {"dry": "pearl millet", "wet": "sugarcane", "temperate": "oats"}
}

@app.get("/")
def read_root():
    return {"message": "Welcome to the GIS-Based DSS API"}

@app.post("/recommendations/")
def get_recommendations(req: RecommendationRequest):
    soil = req.soil_type.lower()
    climate = req.climate.lower()
    water = req.water_availability

    # Simple recommendation logic
    crop = crop_recommendations.get(soil, {}).get(climate, "generic crops")
    return {
        "soil_type": soil,
        "climate": climate,
        "water_availability": water,
        "recommendation": f"Based on your input, consider planting {crop}."
    }

@app.get("/weather/")
def get_weather(location: str):
    # Mock weather data
    return {
        "location": location,
        "temperature": random.uniform(20, 35),
        "humidity": random.uniform(40, 70),
        "precipitation": random.uniform(0, 100)
    }