import React from "react";
import "./Header.css";
import LOGO from "../../assets/orana-logo.png";
import VerticalCarousel from "./VerticalCarousel";
import Waves from "./Waves";
import translate from "../../utils/translations";

const Header = ({ language }) => {
  return (
    <section id="header">
      <div className="flex-header container">
        <div className="row">
          <div className="logo-container">
            <img src={LOGO} alt="logo" className="logo" />
            <h1 className="typewriter">the New Vision.</h1>
          </div>

          <div className="info-header">
            {/* <p>Κατασκευάζουμε </p> */}
            <VerticalCarousel />
          </div>
        </div>
        <div className="bottom-container">
          <div className="waves-container">
            <Waves />
          </div>
          <div className="buttons-container">
            <button className="neomorphism filled">
              <a href="#experience">{translate(language).header.faq}</a>
            </button>
            <button className="neomorphism">
              <a href="#contact">{translate(language).header.contact}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
