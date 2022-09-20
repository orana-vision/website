import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import "./Footer.css";
const Footer = () => {
  return (
    <section id="footer">
      <div className="info">
        <div className="footer-childs">
          <div className="contact-icon">
            <p className="section-title">
              Contact Us!
              <RiContactsFill />
            </p>
          </div>
          <div className="contact-info">
            <span>
              <BsFillTelephoneFill className="footer-icons" />
              <p>6946930146</p>
            </span>
            <a href="mailto:orana.vision@gmail.com">
              <span>
                <MdEmail className="footer-icons" /> <p>orana.vision@gmail.com</p>
              </span>
            </a>
            <a href="https://www.linkedin.com/company/orana-vision/" target="_blank" rel="noreferrer">
              <span>
                <BsLinkedin className="footer-icons" /> <p>LinkedIn</p>
              </span>
            </a>
          </div>
        </div>
        <div className="footer-childs">
          <p className="section-title">Navigate</p>
          <div className="contact-info">
            <span>
              <a href="#header">Home</a>
            </span>
            <span>
              <a href="#about">About</a>
            </span>
            <span>
              <a href="#experience">Experience</a>
            </span>
            <span>
              <a href="#contact">Contact</a>
            </span>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="line-separator"></div>
        <div className="details">© 2022 Orana - the New Vision, All rights reserved.</div>
      </div>
    </section>
  );
};

export default Footer;
