import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import "./Members.css";

import horgosPhoto from "../../assets/horgos.jpg";
import gkountrasPhoto from "../../assets/gkountras.jpg";
import kemalidisPhoto from "../../assets/kemalidis.jpg";

import { CursorContext } from "./CursorManager";
import { Link } from "react-router-dom";

const MembersItem = ({ src }) => {
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
    const images = ["../../assets/gkountras.jpg", "../../assets/horgos.jpg", "../../assets/horgos.jpg"];

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
            <Link to="/team">
                <div
                    className={
                        !isInViewPort ? "gallery-animate-start gallery-item" : "gallery-item gallery-animate-end"
                    }>
                    <div className="gallery-item-image sepia" style={{ backgroundImage: `url(${src})` }}></div>
                    <div
                        className="gallery-item-image masked"
                        style={{
                            backgroundImage: `url(${src})`,
                            clipPath: `circle(${clipMaskRadius}% at ${clipMask.x}% ${clipMask.y}%)`,
                        }}
                        onMouseLeave={() => {
                            setClipMaskRadius(0);
                            mouseContext.setSize("small");
                        }}>
                        <Link to="/team">
                            <div
                                className={
                                    !isInViewPort
                                        ? "gallery-animate-start gallery-item"
                                        : "gallery-item gallery-animate-end"
                                }>
                                <div
                                    className="gallery-item-image sepia"
                                    style={{ backgroundImage: `url(${src})` }}></div>
                                <div
                                    className="gallery-item-image masked"
                                    style={{
                                        backgroundImage: `url(${src})`,
                                        clipPath: `circle(${clipMaskRadius}% at ${clipMask.x}% ${clipMask.y}%)`,
                                    }}>
                                    <span className="member-name">Iwannhs</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Link>

            {/* <h1 className="onomata">ti leei negro mou</h1> */}
        </div>
    );
};

const Members = () => {
    const images = [horgosPhoto, gkountrasPhoto, kemalidisPhoto];
    let key = 0;
    return (
        <div className="gallery">
            {images.map((member) => (
                <MembersItem key={key++} src={member} />
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
