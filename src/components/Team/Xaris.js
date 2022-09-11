import React from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

import "./Gkountras.css";

const Xaris = ({ setSelected }) => {
  return (
    <section id="n3">
      <a className="next" href="#n2" onClick={() => setSelected(2)}>
        <AiOutlineArrowUp />
      </a>
      <div className="headerContainer">
        <div className="nameContainer">
          <div class="img-hover-zoom img-hover-zoom--quick-zoom">
            <img
              src={"https://thumbs.dreamstime.com/z/person-gray-photo-placeholder-man-shirt-white-background-person-gray-photo-placeholder-man-132818487.jpg"}
              alt="giannis-gkountras"
              width="400"
              height="400"
              className="profileImage"
            />
          </div>
          <p className="myName">
            Xaris Kemal <br />
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

export default Xaris;
