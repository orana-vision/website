import React from "react";
import ME from "../../assets/me.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Horgos.css";

const Gkountras = ({ setSelected }) => {
  return (
    <section id="n1">
      <div className="headerContainer">
        <div class="img-hover-zoom img-hover-zoom--quick-zoom">
          <img src={ME} alt="giannis-gkountras" width="500" height="500" className="profileImage" />
        </div>

        <div className="nameContainer">
          <p className="myName">
            <p>Ioannis Gkountras</p>

            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ipsum ut nunc cursus, vel efficitur quam imperdiet. Sed dolor mauris, viverra quis turpis ac, pretium
              molestie velit. Duis lacus sem, euismod id lectus in, pharetra fringilla tortor. Nulla ac diam condimentum, placerat urna sed, dictum dolor. Donec maximus erat ut nisl dapibus, a
              vestibulum ante eleifend. Curabitur elementum dictum mi ut rhoncus. Nunc lobortis orci sem, et sagittis massa ullamcorper auctor. Etiam pellentesque cursus venenatis. Suspendisse tortor
              nibh, finibus varius sollicitudin id, cursus nec quam. Vivamus ultricies lectus eget leo viverra, eu tincidunt quam venenatis. Nam at ex mattis, porta nisl ac, tincidunt ligula. Nulla at
              hendrerit nibh, id semper nunc.
            </p>
          </p>
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
