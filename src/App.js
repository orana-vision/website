import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";
import TeamScreen from "./Screens/TeamScreen";
import ThankYouContactScreen from "./Screens/ThankYouContactScreen";
import { useState } from "react";

function App() {
    const [language, setLanguage] = useState("en");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen setLanguage={setLanguage} language={language} />} />
                <Route path="/team" element={<TeamScreen setLanguage={setLanguage} language={language} />} />
                <Route path="/thank-you" element={<ThankYouContactScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
