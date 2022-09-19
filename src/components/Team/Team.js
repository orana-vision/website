import React, { useEffect, useState } from "react";
import "./Team.css";
import Gkountras from "./Gkountras";
import Horgos from "./Horgos";
import Xaris from "./Xaris";
import TeamNav from "../teamNav/TeamNav";
import OranaLogo from "../../assets/orana-logo.png";
import { Link } from "react-router-dom";
import Flickity from "react-flickity-component";
import "./flickity.css";
const flickityOptions = {
  initialIndex: 2,
};

export default function Team() {
  const [selected, setSelected] = useState(1);
  return (
    // <div class="team-container">
    //   <div className="top">
    //     <a href="/">
    //       <img src={OranaLogo} className="top-logo" alt="Orana" height={"45"} />
    //     </a>
    //   </div>
    //   <TeamNav setSelected={setSelected} selected={selected} />

    //   <div className="personCard">
    //     <Gkountras setSelected={setSelected} />
    //   </div>
    //   <div>
    //     <Horgos setSelected={setSelected} />
    //   </div>
    //   <div>
    //     <Xaris setSelected={setSelected} />
    //   </div>
    // </div>
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="../../assets.gkountras.jpg" />
      <img src="../../assets.gkountras.jpg" />
      <img src="../../assets.gkountras.jpg" />
    </Flickity>
  );
}
