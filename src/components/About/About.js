import React, { useState } from "react";
import { BsGlobe2, BsPhone } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import "./About.css";
import websiteSvg from "../../assets/undraw_add_color_re_buro.svg";
import mobileSvg from "../../assets/undraw_mobile_analytics_72sr.svg";
import eshopSvg from "../../assets/undraw_online_test_re_kyfx.svg";
import HORGOS from "../../assets/horgos.jpg";

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const About = () => {
    const [hover, setHover] = useState({ phoneHover: false, webHover: false, eshopHover: false });
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInHover = (icon) => {
        console.log("IN");
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
        console.log("OUT");

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
            <div className="about-header">About</div>
            <div className="services-container">
                <div
                    className="service"
                    onMouseEnter={() => handleInHover("phone")}
                    onMouseLeave={() => handleOutHover("phone")}>
                    {/* <div className={hover.phoneHover ? "icons flip-in" : "icons"}>
                        <BsPhone style={{ color: "#06A77D" }} className="img-phone" />
                    </div> */}
                    <img src={mobileSvg} className="svg-icon mobile-svg" />

                    <div className="text">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service"
                    onMouseEnter={() => handleInHover("web")}
                    onMouseLeave={() => handleOutHover("web")}>
                    {/* <div className={hover.webHover ? "icons flip-in" : "icons"}>
                        <BsGlobe2 style={{ color: "#9395D3" }} />
                    </div> */}
                    <img src={websiteSvg} className="svg-icon" />

                    <div className="text">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service"
                    onMouseEnter={() => handleInHover("eshop")}
                    onMouseLeave={() => handleOutHover("eshop")}>
                    {/* <div className={hover.eshopHover ? "icons flip-in" : "icons"}>
                        <AiOutlineShopping style={{ color: "#F1A208" }} />
                    </div> */}
                    <img src={eshopSvg} className="svg-icon" />
                    <div className="text">We develop custom mobile apps that can help your bussiness.</div>
                </div>
            </div>
            <div className="meet-team-container">
                <div className="team-member">
                    <img src={HORGOS} alt="horgos" />
                    <span>Giannis Horgos</span>
                </div>
                <div className="team-member">
                    <img src={HORGOS} alt="horgos" />
                </div>
                <div className="team-member">
                    <img src={HORGOS} alt="horgos" />
                </div>
            </div>
        </section>
    );
};

export default About;
