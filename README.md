# GIS Decision Support System for Tanzania (GIS-DSS-TZ)

**GIS Decision Support System for Tanzania** is a web-based platform that provides farmers and agricultural stakeholders with actionable insights to optimize crop productivity. The system integrates GIS mapping, real-time weather data, and region-specific crop recommendations tailored to Tanzania's diverse climates and soil types.

---

## Features

- **Interactive Map**: Visualize region-specific crop suitability and real-time weather data.
- **Crop Recommendations**: Get personalized crop suggestions based on soil, climate, and water availability.
- **Dual Language Support**: Available in English and Swahili to support local farmers.
- **Real-Time Weather Integration**: Displays temperature, rainfall, and other weather conditions.
- **User Location Detection**: Allows users to mark or automatically locate their farm.

---

## Demo

Visit the live demo:
- **Frontend**: [Netlify Frontend URL](https://your-frontend.netlify.app)
- **Backend**: [Render Backend URL](https://your-backend.onrender.com)

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
3. [Deployment](#deployment)
4. [Contributing](#contributing)
5. [License](#license)

---

## Technologies Used

- **Frontend**: React, Leaflet.js
- **Backend**: FastAPI, PostgreSQL, OpenWeatherMap API
- **Map Integration**: OpenStreetMap, GeoJSON

---

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/innogosha/gis-dsstz.git
   cd gis-dsstz/backend
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv env
   source env/bin/activate  # For Linux/Mac
   env\Scripts\activate     # For Windows
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the `backend` folder with the following:
     ```plaintext
     DATABASE_URL=postgresql://username:password@hostname:5432/database_name
     WEATHER_API_KEY=7c1c588e1c105bd97eca94234d61660e
     ```

5. **Run the backend server**:
   ```bash
   uvicorn main:app --reload
   ```

6. **Access the API documentation**:
   Open [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) in your browser.

---

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Update the backend URL**:
   - Open `src/components/RecommendationForm.js` and `src/components/MapView.js`.
   - Replace `http://localhost:8000` with your backend's deployed URL.

4. **Run the frontend development server**:
   ```bash
   npm start
   ```

5. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

### Backend Deployment (Render)

1. Push your backend code to a GitHub repository.
2. Log in to [Render](https://render.com/).
3. Create a new **Web Service** and connect your repository.
4. Configure the service:
   - **Environment**: Python 3.x.
   - **Build Command**: `pip install -r requirements.txt`.
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port 8000`.
5. Add environment variables:
   - `DATABASE_URL`
   - `WEATHER_API_KEY`
6. Deploy the service.

### Frontend Deployment (Netlify)

1. Push your frontend code to the same GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/).
3. Create a new site and connect your repository.
4. Configure the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build/`
5. Deploy the site.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
