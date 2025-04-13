from sqlalchemy import Table, Column, Integer, String, Float
from database import engine, metadata

# Define a table to store crop data
crops = Table(
    "crops", metadata,
    Column("id", Integer, primary_key=True),
    Column("name_en", String),  # Crop name in English
    Column("name_sw", String),  # Crop name in Swahili
    Column("soil_type", String),  # Suitable soil type
    Column("climate", String),  # Suitable climate
    Column("water_requirement", Float),  # Water requirement (L/ha)
    Column("region", String),  # Suitable region in Tanzania
)

# Create the table
metadata.create_all(engine)