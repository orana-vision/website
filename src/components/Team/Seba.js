import React from "react";
import HORGOS from "../../assets/horgos.jpg";

import "./Gkountras.css";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/github.png";

const Gkountras = () => {
  return (
    <div className="gkountras-container">
      <div className="details">
        <div class="img-hover-zoom img-hover-zoom--quick-zoom">
          <img src={HORGOS} alt="giannis-horgos" width="400" height="400" className="profileImage" />
        </div>
        {/* <div className="find">Βρείτε με και εδώ:</div> */}
        <div className="socials find">
          Βρείτε με και εδώ:
          <div className="socials-bg">
            <a href="https://www.linkedin.com/in/ioannis-s-horgos-b5889a21a/" target="_blank" rel="noreferrer">
              <img src={linkedin} width={"40"} alt="linkedin" />
            </a>
            <a href="https://github.com/giannishorgos" target="_blank" rel="noreferrer">
              <img src={git} width={"40"} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="details">
        <p className="title">Γιάννης Χόργκος</p>

        <p className="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ipsum ut nunc cursus, vel efficitur quam imperdiet. Sed dolor mauris, viverra quis turpis ac, pretium molestie
          velit. Duis lacus sem, euismod id lectus in, pharetra fringilla tortor. Nulla ac diam condimentum, placerat urna sed, dictum dolor. Donec maximus erat ut nisl dapibus, a vestibulum ante
          eleifend. Curabitur elementum dictum mi ut rhoncus. Nunc lobortis orci sem, et sagittis massa ullamcorper auctor. Etiam pellentesque cursus venenatis. Suspendisse tortor nibh, finibus varius
          sollicitudin id, cursus nec quam. Vivamus ultricies lectus eget leo viverra, eu tincidunt quam venenatis. Nam at ex mattis, porta nisl ac, tincidunt ligula. Nulla at hendrerit nibh, id
          semper nunc.
        </p>
      </div>
    </div>
  );
};

export default Gkountras;
