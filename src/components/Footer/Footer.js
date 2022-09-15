import React from "react";
import { RiContactsFill } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
    return (
        <section id="footer">
            <div>
                <div className="contact-icon">
                    Contact Us!
                    <RiContactsFill />
                </div>
                <div className="contact-info">
                    <span>Mobile</span>
                    <span>Email</span>
                    <span>Social Media</span>
                </div>
            </div>
            <div>2</div>
            <div>3</div>
        </section>
    );
};

export default Footer;
