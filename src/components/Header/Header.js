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
            <div className="flex-header container">
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
                    <div className="waves-container">
                        <Waves />
                    </div>
                    <div className="buttons-container">
                        <button className="neomorphism filled">
                            <a href="#experience">Συχνές ερωτήσεις</a>
                        </button>
                        <button className="neomorphism">
                            <a href="#contact">Επικοινωνία</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
