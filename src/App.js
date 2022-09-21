import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";
import TeamScreen from "./Screens/TeamScreen";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/team" element={<TeamScreen />} />
                {/*<div className="App">
            <header className="App-header">
              <Header />
              <About />
              <Experience />
              <Contact />
              <Footer />
              <Nav />
            </header>
  </div>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
