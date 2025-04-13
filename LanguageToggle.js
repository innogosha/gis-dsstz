import React from "react";

const LanguageToggle = ({ currentLang, setLang }) => {
    return (
        <div>
            <button onClick={() => setLang("en")} disabled={currentLang === "en"}>
                English
            </button>
            <button onClick={() => setLang("sw")} disabled={currentLang === "sw"}>
                Kiswahili
            </button>
        </div>
    );
};

export default LanguageToggle;