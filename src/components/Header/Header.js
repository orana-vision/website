import React, { useState } from "react";
import "./Header.css";
import LOGO from "../../assets/orana-logo.png";
import { data } from "../../data";
import PROJ from "../../assets/header-demo.png";
import VerticalCarousel from "./VerticalCarousel";
import Waves from "./Waves";

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
            <div classNfame="row">
                <div className="logo-container">
                    <img src={LOGO} alt="logo" className="logo" />
                    <h1 className="typewriter">the New Vision.</h1>
                </div>

                <div className="info">
                    <VerticalCarousel />
                </div>
            </div>
            <div className="bottom-container">
                <div className="child buttons-container">
                    <button className="neomorphism filled">
                        <a href="#experience">See Projects</a>
                    </button>
                    <button className="neomorphism">
                        <a href="#contact">Let's talk</a>
                    </button>
                </div>
                <div className="child waves">
                    <Waves />
                </div>
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
