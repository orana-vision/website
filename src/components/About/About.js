import React, { useState } from "react";
import { BsGlobe2, BsPhone } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import "./About.css";
import websiteSvg from "../../assets/undraw_add_color_re_buro.svg";
import mobileSvg from "../../assets/undraw_mobile_analytics_72sr.svg";
import eshopSvg from "../../assets/undraw_online_test_re_kyfx.svg";
import HORGOS from "../../assets/horgos.jpg";
import GKOUNTRAS from "../../assets/me.jpg";
import cursorSvg from "../../assets/cursor.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



import Members from "./Members";


const About = () => {
  const [hover, setHover] = useState({ phoneHover: false, webHover: false, eshopHover: false });
  const [value, setValue] = React.useState(0);


    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [animateMember, setAnimateMember] = useState("default");
    // console.log(mousePosition);

    const [eshopPos, setEshopPos] = useState({ top: 0, left: 0 });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const mouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleInHover = (icon) => {
        // console.log("IN");
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
        // console.log("OUT");
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

    const eshopMouseMove = (e) => {
        setEshopPos({ ...eshopPos, top: e.screenY, left: e.screenX });
    };

    const variants = {
        default: {
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
            opacity: 0,
        },
        hover: {
            x: mousePosition.x - "25%",
            y: mousePosition.y - "25%",
            // filter: "brightness(0.2) sepia(1) hue-rotate(180deg) saturate(5)",
            opacity: 1,
        },
    };

    return (
        <section className="container" id="about">
            <div className="about-text">About</div>
            <div className="services-container">
                <div
                    className="service"
                    onMouseEnter={() => handleInHover("phone")}
                    onMouseLeave={() => handleOutHover("phone")}>
                    {/* <div className={hover.phoneHover ? "icons flip-in" : "icons"}>
                        <BsPhone style={{ color: "#06A77D" }} className="img-phone" />
                    </div> */}
                    <img className="mobile-svg" src={mobileSvg} alt="horgos" />
                    <div className="text">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service"
                    onMouseEnter={() => handleInHover("web")}
                    onMouseLeave={() => handleOutHover("web")}>
                    {/* <div className={hover.webHover ? "icons flip-in" : "icons"}>
                        <BsGlobe2 style={{ color: "#9395D3" }} />
                    </div> */}
                    <img className="svg-icon" src={websiteSvg} alt="horgos" />
                    <div className="text">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service"
                    onMouseEnter={() => handleInHover("eshop")}
                    onMouseLeave={() => handleOutHover("eshop")}>
                    {/* <div className={hover.eshopHover ? "icons flip-in" : "icons"}>
                        <AiOutlineShopping style={{ color: "#F1A208" }} />
                    </div> */}
                    <img
                        onMouseMove={eshopMouseMove}
                        className="svg-icon"
                        style={{ ...eshopPos }}
                        src={eshopSvg}
                        alt="horgos"
                    />
                    <div className="text">We develop custom mobile apps that can help your bussiness.</div>
                </div>
            </div>
            <div>Meet Orana Team</div>
            <div className="members-container">
                <Members />
            </div>
        </section>
    );
};

export default About;
