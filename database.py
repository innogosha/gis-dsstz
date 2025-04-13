from sqlalchemy import create_engine, MetaData

DATABASE_URL = "postgresql://username:password@hostname:5432/database_name"

# Create the database connection
engine = create_engine(DATABASE_URL)
metadata = MetaData()

# Initialize the database connection
try:
    with engine.connect() as connection:
        print("Database connected successfully!")
except Exception as e:
    print("Database connection failed:", str(e))