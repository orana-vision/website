import React, { useEffect, useState } from "react";
import "./VerticalCarousel.css";

const VerticalCarousel = () => {
    const [services, setServices] = useState({ first: "E-shop", second: "Websites", third: "Mobile App" });
    const [isHovering, setIsHovering] = useState(false);
    console.log("hober " + isHovering);
    const [angle, setAngle] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedOpacity, setSelectedOpacity] = useState(1);

    // let selectedIndex = 0;
    var carousel = document.querySelector(".carousel");
    var cellCount = 3;
    var cellSize = 120;
    var theta = 360 / cellCount;
    var radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
    function rotateCarousel() {
        console.log(radius);
    }
    useEffect(() => {
        setAngle(theta * selectedIndex * -1);
        console.log(selectedOpacity);
    }, [selectedIndex]);

    return (
        <>
            <div className="scene">
                <div
                    onMouseEnter={() => {
                        setSelectedIndex(selectedIndex + 1);
                        setSelectedOpacity((prev) => {
                            switch (prev) {
                                case 3:
                                    return 1;
                                default:
                                    return prev + 1;
                            }
                        });
                    }}
                    className="carousel"
                    style={{ transform: `translateZ(${-radius}px) rotateX(${angle}deg)` }}>
                    <div className={selectedOpacity === 1 ? "carousel__cell cell_selected" : "carousel__cell"}>
                        E-shop
                    </div>
                    <div className={selectedOpacity === 2 ? "carousel__cell cell_selected" : "carousel__cell"}>
                        Websites
                    </div>
                    <div className={selectedOpacity === 3 ? "carousel__cell cell_selected" : "carousel__cell"}>
                        Mobile App
                    </div>
                </div>
            </div>
            {/* <p>
                <button
                    onClick={() => {
                        setSelectedIndex(selectedIndex - 1);
                        // rotateCarousel();
                        // setAngle(theta * selectedIndex-- * -1);
                    }}
                    className="previous-button">
                    Previous
                </button>
                <button
                    onClick={() => {
                        setSelectedIndex(selectedIndex + 1);
                        // setAngle(theta * selectedIndex++ * -1);
                        // rotateCarousel();
                    }}
                    className="next-button">
                    Next
                </button>
            </p> */}
        </>
    );
};

export default VerticalCarousel;
