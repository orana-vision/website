import React, { useEffect } from "react";
import ME from "../../assets/me.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Horgos.css";
import git from "../../assets/github.png";

const Gkountras = ({ setSelected }) => {
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
        window.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            })
        );
    } catch (e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    // call this to Disable
    function disableScroll() {
        window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
        window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener("DOMMouseScroll", preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener("touchmove", preventDefault, wheelOpt);
        window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    }
    useEffect(() => {
        disableScroll();
    }, []);
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ipsum ut nunc
                            cursus, vel efficitur quam imperdiet. Sed dolor mauris, viverra quis turpis ac, pretium
                            molestie velit. Duis lacus sem, euismod id lectus in, pharetra fringilla tortor. Nulla ac
                            diam condimentum, placerat urna sed, dictum dolor. Donec maximus erat ut nisl dapibus, a
                            vestibulum ante eleifend. Curabitur elementum dictum mi ut rhoncus. Nunc lobortis orci sem,
                            et sagittis massa ullamcorper auctor. Etiam pellentesque cursus venenatis. Suspendisse
                            tortor nibh, finibus varius sollicitudin id, cursus nec quam. Vivamus ultricies lectus eget
                            leo viverra, eu tincidunt quam venenatis. Nam at ex mattis, porta nisl ac, tincidunt ligula.
                            Nulla at hendrerit nibh, id semper nunc.
                        </p>
                    </p>
                </div>
                <a
                    className="next"
                    href="#n2"
                    onClick={() => {
                        enableScroll();
                        setSelected(2);
                        disableScroll();
                    }}>
                    <AiOutlineArrowDown />
                </a>
            </div>
        </section>
    );
};

export default Gkountras;
