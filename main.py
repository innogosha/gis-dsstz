from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import select
from database import engine
from models import crops

app = FastAPI()

# Request model for recommendations
class RecommendationRequest(BaseModel):
    soil_type: str
    climate: str
    water_availability: float

@app.get("/")
def read_root():
    return {"message": "Karibu kwenye Mfumo wa Usaidizi wa Maamuzi wa GIS!"}

@app.post("/recommendations/")
def get_recommendations(req: RecommendationRequest, lang: str = "en"):
    soil = req.soil_type.lower()
    climate = req.climate.lower()
    water = req.water_availability

    # Query the crop database
    with engine.connect() as connection:
        query = crops.select().where(
            crops.c.soil_type == soil,
            crops.c.climate == climate,
            crops.c.water_requirement <= water
        )
        result = connection.execute(query).fetchall()

    if not result:
        return {
            "error": "No suitable crops found for the given conditions."
            if lang == "en"
            else "Hakuna mazao yanayofaa yaliyopatikana kwa hali uliyopewa."
        }

    # Format the recommendations in the selected language
    recommendations = [
        {
            "crop": row.name_sw if lang == "sw" else row.name_en,
            "region": row.region,
        }
        for row in result
    ]
    return {
        "soil_type": soil,
        "climate": climate,
        "water_availability": water,
        "recommendations": recommendations,
    }