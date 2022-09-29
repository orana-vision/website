import React, { useEffect, useState } from "react";
import "./VerticalCarousel.css";

const VerticalCarousel = () => {
    const [angle, setAngle] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedOpacity, setSelectedOpacity] = useState(1);
    let isFirstTime = true;

    let cellCount = 3;
    let cellSize = 120;
    let theta = 360 / cellCount;
    let radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));

    useEffect(() => {
        setTimeout(() => {
            setSelectedIndex(selectedIndex + 1);
            setAngle(theta * selectedIndex * -1);
            // console.log(selectedOpacity);
        }, 1500);
    }, [angle]);

    useEffect(() => {
        // console.log("opacity " + selectedOpacity);
        setSelectedOpacity((prev) => {
            switch (prev) {
                case 3:
                    return 1;
                default:
                    return prev + 1;
            }
        });
    }, [angle]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSelectedIndex(selectedIndex + 1);
    //         setSelectedOpacity((prev) => {
    //             switch (prev) {
    //                 case 3:
    //                     return 1;
    //                 default:
    //                     return prev + 1;
    //             }
    //         });
    //     }, 2000);
    // }, [selectedOpacity]);

    return (
        <div className="scene">
            <div className="carousel" style={{ transform: `translateZ(${-radius}px) rotateX(${angle}deg)` }}>
                <div className={selectedOpacity === 1 ? "carousel__cell cell_selected" : "carousel__cell"}>E-shops</div>
                <div className={selectedOpacity === 2 ? "carousel__cell cell_selected" : "carousel__cell"}>
                    Websites
                </div>
                <div className={selectedOpacity === 3 ? "carousel__cell cell_selected" : "carousel__cell"}>
                    Mobile Apps
                </div>
            </div>
        </div>
    );
};

export default VerticalCarousel;
