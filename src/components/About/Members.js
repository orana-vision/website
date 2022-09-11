import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import "./Members.css";
import { motion } from "framer-motion";

import src from "../../assets/horgos.jpg";
import { CursorContext } from "./CursorManager";

const MembersItem = () => {
    const ref = useRef(null);
    const mouseContext = useContext(CursorContext);

    const isInViewPort = useIsInViewport(ref);

    const [clipMaskRadius, setClipMaskRadius] = useState(0);
    const [clipMask, setClipMask] = useState({ x: 0, y: 0 });
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setReveal(true);
        }, 100);
    }, []);

    useEffect(() => {
        function getCoordinates(mouse) {
            const imagePosition = {
                posX: ref.current.offsetLeft,
                posY: ref.current.offsetTop,
            };

            const posX = mouse.pageX - imagePosition.posX;
            const posY = mouse.pageY - imagePosition.posY;

            setClipMask({
                x: (posX / ref.current.clientWidth) * 100,
                y: (posY / ref.current.clientHeight) * 100,
            });
        }

        ref.current.addEventListener("mousemove", (mouse) => {
            window.requestAnimationFrame(() => {
                getCoordinates(mouse);
            });
        });
    }, []);

    return (
        <div
            className="gallery-item-wrapper"
            ref={ref}
            onMouseEnter={() => {
                setClipMaskRadius(25);
                mouseContext.setSize("hide");
            }}
            onMouseLeave={() => {
                setClipMaskRadius(0);
                mouseContext.setSize("small");
            }}>
            <div className={!isInViewPort ? "gallery-animate-start gallery-item" : "gallery-item gallery-animate-end"}>
                <div className="gallery-item-image sepia" style={{ backgroundImage: `url(${src})` }}></div>
                <div
                    className="gallery-item-image masked"
                    style={{
                        backgroundImage: `url(${src})`,
                        clipPath: `circle(${clipMaskRadius}% at ${clipMask.x}% ${clipMask.y}%)`,
                    }}></div>
            </div>
        </div>
    );
};

const Members = () => {
    const images = ["../../assets/horgos.jpg", "../../assets/horgos.jpg", "../../assets/horgos.jpg"];
    let key = 0;
    return (
        <div className="gallery">
            {images.map((member) => (
                <MembersItem key={key++} />
            ))}
        </div>
    );
};

function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), []);

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}

export default Members;
