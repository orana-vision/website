import React, { useEffect, useMemo, useState, useRef } from "react";
import "./About.css";
import websiteSvg from "../../assets/website.svg";
import mobileSvg from "../../assets/mobile.svg";
import eshopSvg from "../../assets/eshop.svg";
import Members from "./Members";

import useIsInViewport from "../../utils/inViewport.js";

const About = () => {
    const serviceRef = useRef();
    const membersRef = useRef();
    const aboutTxtRef = useRef();
    const meetTeamTxtRef = useRef();

    return (
        <section className="container" id="about">
            <div className="flex-about container    ">
                <div ref={aboutTxtRef} className="about-text">
                    <span className={useIsInViewport(aboutTxtRef) ? "about-txt-animation" : ""}>Ποιοί είμαστε</span>
                </div>
                <div ref={serviceRef} className="services-container">
                    <div className={useIsInViewport(serviceRef) ? "service service-animation" : "service"}>
                        <img className="mobile-svg" src={mobileSvg} alt="mobile-apps" />
                        <div className="text">
                            Κατασκευάζουμε mobile εφαρμογές που θα απογείώσουν την επιχείρηση σας
                        </div>
                    </div>
                    <div className={useIsInViewport(serviceRef) ? "service service-animation" : "service"}>
                        <img className="svg-icon" src={websiteSvg} alt="websites" />
                        <div className="text">
                            Δημιουργούμε την ιστοσελίδα που θα σας κάνει να ξεχωρίσετε από τους υπόλοιπους
                        </div>
                    </div>
                    <div className={useIsInViewport(serviceRef) ? "service service-animation" : "service"}>
                        <img className="svg-icon" src={eshopSvg} alt="eshops" />
                        <div className="text">
                            Κατασκευάζουμε το δικό σας e-shop ώστε η επιχείρηση σας να λειτουργεί 24 ώρες το 24ωρο
                        </div>
                    </div>
                </div>
                <div ref={meetTeamTxtRef} className="meet-our-team">
                    <span
                        className={
                            useIsInViewport(meetTeamTxtRef)
                                ? "meet-team-txt-animation meet-team-text"
                                : "meet-team-text"
                        }>
                        Γνωρίστε την ομάδα μας:
                    </span>
                </div>
                <div ref={membersRef} className="members-container">
                    <div className={useIsInViewport(membersRef) ? "members-animation" : ""}>
                        <Members />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
