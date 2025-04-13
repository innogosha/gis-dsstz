import React, { useState } from "react";
import RecommendationForm from "./components/RecommendationForm";
import RecommendationList from "./components/RecommendationList";
import MapView from "./components/MapView";
import LanguageToggle from "./components/LanguageToggle";
import cropData from "./data/cropData";

function App() {
    const [lang, setLang] = useState("en");

    return (
        <div className="App">
            <header>
                <h1>{lang === "en" ? "Tanzania Agricultural Decision Support System" : "Mfumo wa Usaidizi wa Maamuzi ya Kilimo Tanzania"}</h1>
                <LanguageToggle currentLang={lang} setLang={setLang} />
            </header>
            <main>
                <RecommendationForm lang={lang} />
                <RecommendationList lang={lang} />
                <MapView cropData={cropData} lang={lang} />
            </main>
        </div>
    );
}

export default App;