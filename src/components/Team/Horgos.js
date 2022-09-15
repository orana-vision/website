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
        <div className="nameContainer" id="horgosText">
          <p className="myName">
            Ioannis Horgos <br />
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ipsum ut nunc cursus, vel efficitur quam imperdiet. Sed dolor mauris, viverra quis turpis ac, pretium
              molestie velit. Duis lacus sem, euismod id lectus in, pharetra fringilla tortor. Nulla ac diam condimentum, placerat urna sed, dictum dolor. Donec maximus erat ut nisl dapibus, a
              vestibulum ante eleifend. Curabitur elementum dictum mi ut rhoncus. Nunc lobortis orci sem, et sagittis massa ullamcorper auctor. Etiam pellentesque cursus venenatis. Suspendisse tortor
              nibh, finibus varius sollicitudin id, cursus nec quam. Vivamus ultricies lectus eget leo viverra, eu tincidunt quam venenatis. Nam at ex mattis, porta nisl ac, tincidunt ligula. Nulla at
              hendrerit nibh, id semper nunc.
            </p>
          </p>
        </div>
        <div class="img-hover-zoom img-hover-zoom--quick-zoom">
          <img src={HORGOS} alt="giannis-gkountras" width="500" height="500" className="profileImage" />
        </div>
      </div>

      <a className="next" href="#n3" onClick={() => setSelected(3)}>
        <AiOutlineArrowDown />
      </a>
    </section>
  );
};

export default Horgos;
