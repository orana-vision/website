import React, { useRef } from "react";
import "./About.css";
import websiteSvg from "../../assets/website.svg";
import mobileSvg from "../../assets/mobile.svg";
import eshopSvg from "../../assets/eshop.svg";
import Members from "./Members";
import { AiOutlineArrowDown } from "react-icons/ai";

import useIsInViewport from "../../utils/inViewport.js";
import translate from "../../utils/translations";

const About = ({ language }) => {
  const serviceRef = useRef();
  const membersRef = useRef();
  const aboutTxtRef = useRef();
  const meetTeamTxtRef = useRef();
  const inner1 = useRef();
  const inner2 = useRef();
  const inner3 = useRef();

  const back = useRef();

  return (
    <section className="container" id="about">
      <div className="flex-about container">
        <div ref={aboutTxtRef} className="about-text">
          <span className={useIsInViewport(aboutTxtRef) ? "about-txt-animation" : ""}>{translate(language).about.about_title}</span>
        </div>
        <div ref={serviceRef} className="services-container">
          <div
            className={useIsInViewport(serviceRef) ? "service service-animation flip-card" : "service"}
            onClick={() => {
              inner1.current.classList.toggle("flip-trans");
            }}
          >
            <div className="flip-card-inner" ref={inner1}>
              <div className="flip-card-front" title="Κάντε κλικ για λεπτομέρειες">
                <img className="mobile-svg" src={mobileSvg} alt="mobile-apps" />
                <div className="text">{translate(language).about.mobile_card_front}</div>
                <AiOutlineArrowDown className="text" />
              </div>
              <div className="text details flip-card-back " ref={back}>
                {translate(language).about.mobile_card_back}
              </div>
            </div>
          </div>
          <div
            className={useIsInViewport(serviceRef) ? "service service-animation flip-card" : "service"}
            onClick={() => {
              inner2.current.classList.toggle("flip-trans");
            }}
          >
            <div className="flip-card-inner" ref={inner2}>
              <div className="flip-card-front" title="Κάντε κλικ για λεπτομέρειες">
                <img className="svg-icon" src={websiteSvg} alt="websites" />
                <div className="text">{translate(language).about.website_card_front} </div>
                <AiOutlineArrowDown className="text" />
              </div>
              <div className="text details flip-card-back ">{translate(language).about.website_card_back}</div>
            </div>
          </div>
          <div
            className={useIsInViewport(serviceRef) ? "service service-animation flip-card" : "service"}
            onClick={() => {
              inner3.current.classList.toggle("flip-trans");
            }}
          >
            <div className="flip-card-inner" ref={inner3}>
              <div className="flip-card-front" title="Κάντε κλικ για λεπτομέρειες">
                <img className="svg-icon" src={eshopSvg} alt="eshops" />
                <div className="text">{translate(language).about.eshop_card_front}</div>
                <AiOutlineArrowDown className="text" />
              </div>
              <div className="text details flip-card-back">{translate(language).about.eshop_card_back}</div>
            </div>
          </div>
        </div>
        <div ref={meetTeamTxtRef} className="meet-our-team">
          <span className={useIsInViewport(meetTeamTxtRef) ? "meet-team-txt-animation meet-team-text" : "meet-team-text"}>{translate(language).about.meet_out_team}</span>
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
