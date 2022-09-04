import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/nav/Nav";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import "../App.css";
export default function MainScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Experience />
        <Contact />
        <Footer />
        <Nav />
      </header>
    </div>
  );
}
