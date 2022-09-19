import React, { useEffect, useState } from "react";
import "./Team.css";
import Gkountras from "./Gkountras";
import Horgos from "./Horgos";
import Xaris from "./Xaris";
import Seba from "./Seba";
import Kemal from "./Kemal";
import TeamNav from "../teamNav/TeamNav";
import OranaLogo from "../../assets/orana-logo.png";
import { Link } from "react-router-dom";
import Flickity from "react-flickity-component";
import "./flickity.css";
const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: 5000,
};

export default function Team() {
  const [selected, setSelected] = useState(1);
  return (
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
  );
}
