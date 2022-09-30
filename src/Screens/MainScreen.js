import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/nav/Nav";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import "../App.css";
export default function MainScreen({ setLanguage, language }) {
    return (
        <div className="App">
            <header className="App-header">
                <Header language={language} />
                <About language={language} />
                <Experience language={language} />
                <Contact language={language} />
                <Footer language={language} />
                <Nav setLanguage={setLanguage} language={language} />
            </header>
        </div>
    );
}
