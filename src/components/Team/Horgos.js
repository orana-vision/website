import React from "react";
import HORGOS from "../../assets/horgos.jpg";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import "./Horgos.css";

const Horgos = ({ setSelected }) => {
  return (
    <section id="n2">
      <a className="next" href="#n1" onClick={() => setSelected(1)}>
        <AiOutlineArrowUp />
      </a>
      <div className="headerContainer">
        <div className="nameContainer">
          <p className="myName">
            Ioannis Horgos <br />
            <p className="subtitle">Electrical and Computer Engineering student</p>
          </p>
          <div class="img-hover-zoom img-hover-zoom--quick-zoom">
            <img src={HORGOS} alt="giannis-gkountras" width="400" height="400" className="profileImage" />
          </div>
        </div>
      </div>
      <div>
        <p>
          <br />
        </p>
      </div>
      <a className="next" href="#n3" onClick={() => setSelected(3)}>
        <AiOutlineArrowDown />
      </a>
    </section>
  );
};

export default Horgos;
