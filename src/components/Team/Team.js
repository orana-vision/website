import React from "react";
import "./Team.css";
import Gkountras from "./Gkountras";

import Seba from "./Seba";
import Kemal from "./Kemal";

import OranaLogo from "../../assets/orana-logo.png";

import Flickity from "react-flickity-component";
import "./flickity.css";
import Footer from "../Footer/Footer";
const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: 4000,
};

export default function Team() {
  return (
    <>
      <div className="top">
        <a href="/">
          <img src={OranaLogo} className="top-logo" alt="Orana" height={"45"} />
        </a>
      </div>
      <div className="carousel-container-big">
        <div className="carousel-container">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <div class="carousel-cell">
              <Gkountras />
            </div>
            <div class="carousel-cell">
              <Seba />
            </div>
            <div class="carousel-cell">
              <Kemal />
            </div>
          </Flickity>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
