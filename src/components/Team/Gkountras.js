import React from "react";
import ME from "../../assets/me.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Gkountras.css";

const Gkountras = ({ setSelected }) => {
  return (
    <section id="n1">
      <div className="headerContainer">
        <div className="nameContainer">
          <div class="img-hover-zoom img-hover-zoom--quick-zoom">
            <img src={ME} alt="giannis-gkountras" width="400" height="400" className="profileImage" />
          </div>
          <div>
            <p className="myName">
              Ioannis Gkountras <br />
              <p className="subtitle">Electrical and Computer Engineering student</p>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>
          <br />
        </p>
      </div>
      <a className="next" href="#n2" onClick={() => setSelected(2)}>
        <AiOutlineArrowDown />
      </a>
    </section>
  );
};

export default Gkountras;
