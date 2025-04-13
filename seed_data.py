from database import engine
from models import crops

# Insert crop data into the database
crop_data = [
    {"name_en": "Maize", "name_sw": "Mahindi", "soil_type": "Loamy", "climate": "Temperate", "water_requirement": 500, "region": "Dodoma"},
    {"name_en": "Cassava", "name_sw": "Muhogo", "soil_type": "Sandy", "climate": "Dry", "water_requirement": 300, "region": "Mwanza"},
    {"name_en": "Rice", "name_sw": "Mchele", "soil_type": "Clay", "climate": "Wet", "water_requirement": 1000, "region": "Mbeya"},
    {"name_en": "Banana", "name_sw": "Ndizi", "soil_type": "Loamy", "climate": "Wet", "water_requirement": 800, "region": "Kilimanjaro"},
    {"name_en": "Coffee", "name_sw": "Kahawa", "soil_type": "Loamy", "climate": "Temperate", "water_requirement": 600, "region": "Arusha"},
]
with engine.connect() as connection:
    connection.execute(crops.insert(), crop_data)