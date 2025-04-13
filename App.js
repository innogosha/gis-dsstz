import React, { useState } from "react";
import RecommendationForm from "./components/RecommendationForm";
import LanguageToggle from "./components/LanguageToggle";

function App() {
    const [lang, setLang] = useState("en");

    return (
        <div className="App">
            <header>
                <h1>{lang === "en" ? "GIS Decision Support System" : "Mfumo wa Usaidizi wa Maamuzi wa GIS"}</h1>
                <LanguageToggle currentLang={lang} setLang={setLang} />
            </header>
            <main>
                <RecommendationForm lang={lang} />
            </main>
        </div>
    );
}

export default App;