import React from "react";
import ME from "../../assets/me.jpg";

import "./Gkountras.css";

const Horgos = () => {
  return (
    <section id="header">
      <div className="headerContainer">
        <div className="nameContainer">
          <div class="img-hover-zoom img-hover-zoom--quick-zoom">
            <img src={ME} alt="giannis-gkountras" width="500" height="500" className="profileImage" />
          </div>
          <p className="myName">
            Ioannis Gkountras <br />
            <p className="subtitle">Electrical and Computer Engineering student</p>
          </p>
        </div>
      </div>
      <div>
        <p>
          <br />
        </p>
      </div>
    </section>
  );
};

export default Horgos;
