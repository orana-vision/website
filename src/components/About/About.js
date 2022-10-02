import React, { useRef } from "react";
import "./About.css";
import websiteSvg from "../../assets/website.svg";
import mobileSvg from "../../assets/mobile.svg";
import eshopSvg from "../../assets/eshop.svg";
import Members from "./Members";
import { AiOutlineArrowDown } from "react-icons/ai";

import useIsInViewport from "../../utils/inViewport.js";

const About = () => {
  const serviceRef = useRef();
  const membersRef = useRef();
  const aboutTxtRef = useRef();
  const meetTeamTxtRef = useRef();
  const serviceWebsite = useRef();
  const serviceEshop = useRef();
  const serviceApp = useRef();
  const inner1 = useRef();
  const inner2 = useRef();
  const inner3 = useRef();

  const back = useRef();

  return (
    <section className="container" id="about">
      <div className="flex-about container    ">
        <div ref={aboutTxtRef} className="about-text">
          <span className={useIsInViewport(aboutTxtRef) ? "about-txt-animation" : ""}>Ποιοί είμαστε</span>
        </div>
        <div ref={serviceRef} className="services-container">
          <div
            ref={serviceWebsite}
            className={useIsInViewport(serviceRef) ? "service service-animation flip-card" : "service"}
            onClick={() => {
              //   serviceWebsite.current.classList.toggle("flip-trans");
              inner1.current.classList.toggle("flip-trans");
              //   back.current.classList.toggle("flip-trans");
              //   serviceEshop.current.classList.toggle("invisible");
              //   serviceApp.current.classList.toggle("invisible");
            }}
          >
            <div className="flip-card-inner" ref={inner1}>
              <div className="flip-card-front" title="Κάντε κλικ για λεπτομέρειες">
                <img className="mobile-svg" src={mobileSvg} alt="mobile-apps" />
                <div className="text">Κατασκευάζουμε mobile εφαρμογές που θα απογείώσουν την επιχείρηση σας</div>
                <AiOutlineArrowDown className="text" />
              </div>
              <div className="text details flip-card-back" ref={back}>
                Θέλετε η επιχείρηση σας να είναι εύκολα προσβάσιμη από το κινητό; Μετατρέπουμε την ιστοσελίδα ή το e-shop σας σε mobile app που μπορούν να εγκαταστήσουν στα κινητά τους οι πελάτες σας!
              </div>
            </div>
          </div>
          <div
            ref={serviceEshop}
            className={useIsInViewport(serviceRef) ? "service service-animation flip-card" : "service"}
            onClick={() => {
              inner2.current.classList.toggle("flip-trans");
              //   serviceWebsite.current.classList.toggle("invisible");
              //   serviceEshop.current.classList.remove("invisible");
              //   serviceApp.current.classList.toggle("invisible");
            }}
          >
            <div className="flip-card-inner" ref={inner2}>
              <div className="flip-card-front" title="Κάντε κλικ για λεπτομέρειες">
                <img className="svg-icon" src={websiteSvg} alt="websites" />
                <div className="text">Δημιουργούμε την ιστοσελίδα που θα σας κάνει να ξεχωρίσετε από τους υπόλοιπους</div>
                <AiOutlineArrowDown className="text" />
              </div>
              <div className="text details flip-card-back">
                Η ιστοσελίδα δίνει κύρος στην επιχείρηση σας και εμπνέει εμπιστοσύνη στους πελάτες. Είναι αυτό που θα σας κάνει να ξεχωρίσετε από τους υπόλοιπους και να γίνετε η πρώτη επιλογή.
              </div>
            </div>
          </div>
          <div
            ref={serviceApp}
            className={useIsInViewport(serviceRef) ? "service service-animation flip-card" : "service"}
            onClick={() => {
              inner3.current.classList.toggle("flip-trans");
              //   serviceWebsite.current.classList.toggle("invisible");
              //   serviceEshop.current.classList.toggle("invisible");
              //   serviceApp.current.classList.remove("invisible");
            }}
          >
            <div className="flip-card-inner" ref={inner3}>
              <div className="flip-card-front" title="Κάντε κλικ για λεπτομέρειες">
                <img className="svg-icon" src={eshopSvg} alt="eshops" />
                <div className="text">Κατασκευάζουμε το δικό σας e-shop ώστε η επιχείρηση σας να λειτουργεί 24 ώρες το 24ωρο</div>
                <AiOutlineArrowDown className="text" />
              </div>
              <div className="text details flip-card-back">
                Θέλετε η επιχείρηση σας να είναι εύκολα προσβάσιμη από το κινητό; Μετατρέπουμε την ιστοσελίδα ή το e-shop σας σε mobile app που μπορούν να εγκαταστήσουν στα κινητά τους οι πελάτες σας!
              </div>
            </div>
          </div>
        </div>
        <div ref={meetTeamTxtRef} className="meet-our-team">
          <span className={useIsInViewport(meetTeamTxtRef) ? "meet-team-txt-animation meet-team-text" : "meet-team-text"}>Γνωρίστε την ομάδα μας:</span>
        </div>
        <div ref={membersRef} className="members-container">
          <div className={useIsInViewport(membersRef) ? "members-animation" : ""}>
            <Members />
            {/* <div>asdsa</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
