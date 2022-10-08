import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import LOGO from "../../assets/orana-logo copy.png";
import "./Footer.css";
import translate from "../../utils/translations";

const Footer = ({ language }) => {
  const phone_numbers = ["694 693 0146", "694 695 8343", "694 798 1537"];

  return (
    <section id="footer">
      <div className="info container">
        <div className="footer-childs">
          <div className="contact-icon">
            <p className="section-title">
              <div>{translate(language).footer.section_contact_title}</div>
              <RiContactsFill />
            </p>
          </div>
          <div className="contact-info">
            <span>
              <BsFillTelephoneFill className="footer-icons" />
              <div className="telephons">
                {phone_numbers.map((phone_number) => (
                  <a key={phone_number} href={`tel:${phone_number}`}>
                    {phone_number}
                  </a>
                ))}
              </div>
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
        <div className="footer-childs logo">
          <img className="logo-spin" src={LOGO} alt="orana website company" />
        </div>
        <div className="footer-childs">
          <p className="section-title">
            <HiMenu />
            <div> {translate(language).footer.section_navigate_title} </div>
          </p>
          <div className="contact-info">
            <span>
              <a href="/">{translate(language).footer.home}</a>
            </span>
            <span>
              <a href="/#about">{translate(language).footer.about}</a>
            </span>
            <span>
              <a href="/#experience">{translate(language).footer.faq}</a>
            </span>
            <span>
              <a href="/#contact">{translate(language).footer.contact}</a>
            </span>
            <span>
              <a href="/team">{translate(language).footer.team}</a>
            </span>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="line-separator"></div>
        <div className="details center">© 2022 Orana - the New Vision, All rights reserved.</div>
      </div>
    </section>
  );
};

export default Footer;
