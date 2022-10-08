import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";
import TeamScreen from "./Screens/TeamScreen";
import ThankYouContactScreen from "./Screens/ThankYouContactScreen";
import { useState } from "react";
import Error404Screen from "./Screens/Error404Screen";

function App() {
    const [language, setLanguage] = useState("gr");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen setLanguage={setLanguage} language={language} />} />
                <Route path="/team" element={<TeamScreen setLanguage={setLanguage} language={language} />} />
                <Route path="/thank-you" element={<ThankYouContactScreen language={language} />} />
                <Route path="*" element={<Error404Screen language={language} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
