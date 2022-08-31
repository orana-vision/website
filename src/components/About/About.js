import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi";
import { BsGlobe2, BsPhone } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import "./About.css";

const About = () => {
    return (
        <section id="about">
            About
            <div className="services-container">
                <div className="service-app">
                    <BsPhone />
                    <div className="text-app">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div className="service-websites">
                    <BsGlobe2 />
                    <div className="text-websites">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div className="service-eshop">
                    <AiOutlineShopping />
                    <div className="text-eshop">We develop custom mobile apps that can help your bussiness.</div>
                </div>
            </div>
        </section>
    );
};

export default About;
