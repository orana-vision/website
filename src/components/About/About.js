import React, { useState } from "react";
import { BsGlobe2, BsPhone } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import "./About.css";

const About = () => {
    const [hover, setHover] = useState({ phoneHover: false, webHover: false, eshopHover: false });

    const handleInHover = (icon) => {
        switch (icon) {
            case "phone":
                setHover({ ...hover, phoneHover: true });
                break;
            case "web":
                setHover({ ...hover, webHover: true });
                break;
            case "eshop":
                setHover({ ...hover, eshopHover: true });
        }
    };
    const handleOutHover = (icon) => {
        switch (icon) {
            case "phone":
                setHover({ ...hover, phoneHover: false });
                break;
            case "web":
                setHover({ ...hover, webHover: false });
                break;
            case "eshop":
                setHover({ ...hover, eshopHover: false });
        }
    };

    return (
        <section id="about">
            About
            <div className="services-container">
                <div
                    className="service-app"
                    onMouseOver={() => handleInHover("phone")}
                    onMouseOut={() => handleOutHover("phone")}>
                    <div className={hover.phoneHover ? "icons flip-in" : "icons flip-out"}>
                        <BsPhone style={{ color: "#06A77D" }} className="img-phone" />
                    </div>
                    <div className="text-app">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service-websites"
                    onMouseOver={() => handleInHover("web")}
                    onMouseOut={() => handleOutHover("web")}>
                    <div className={hover.webHover ? "icons flip-in" : "icons flip-out"}>
                        <BsGlobe2 style={{ color: "#9395D3" }} />
                    </div>
                    <div className="text-websites">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service-eshop"
                    onMouseOver={() => handleInHover("eshop")}
                    onMouseOut={() => handleOutHover("eshop")}>
                    <div className={hover.eshopHover ? "icons flip-in" : "icons flip-out"}>
                        <AiOutlineShopping style={{ color: "#F1A208" }} />
                    </div>
                    <div className="text-eshop">We develop custom mobile apps that can help your bussiness.</div>
                </div>
            </div>
        </section>
    );
};

export default About;
