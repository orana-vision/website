import React, { useState } from "react";
import "./Header.css";
import LOGO from "../../assets/orana-logo.png";
import { data } from "../../data";
import PROJ from "../../assets/header-demo.png";
import VerticalCarousel from "./VerticalCarousel";

const Header = () => {
    const [imageHover, setImageHover] = useState(false);

    const handleMouseOut = () => {
        setImageHover(false);
    };

    const handleMouseOver = () => {
        setImageHover(true);
    };

    return (
        <section id="header">
            <div className="row">
                <div className="logo-container">
                    <img src={LOGO} alt="logo" className="logo" />
                    <h1 className="typewriter">the New Vision.</h1>
                </div>

                <div className="info">
                    <VerticalCarousel />
                </div>
            </div>
            <div className="bottom-container">
                <div className="buttons-container">
                    <button className="neomorphism filled">
                        <a href="#experience">See Projects</a>
                    </button>
                    <button className="neomorphism">
                        <a href="#contact">Let's talk</a>
                    </button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#e8e4e4"
                        fill-opacity="1"
                        d="M0,256L48,224C96,192,192,128,288,117.3C384,107,480,149,576,176C672,203,768,213,864,202.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            {/* <a href="#experience">
                <div className="project-demo" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div id="desc">{data.headerDemo.name}</div>
                    <img src={PROJ} alt={data.headerDemo.name} className={imageHover ? "open" : "close"}></img>
                    {data.headerDemo.name}
                </div>
            </a> */}
        </section>
    );
};

export default Header;
