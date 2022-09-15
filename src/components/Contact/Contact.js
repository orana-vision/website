import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import LOGO from "../../assets/orana-logo copy.png";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <section id="contact">
            <div className="form-container">
                <div className="form-title">
                    Let's Talk
                    <image src={LOGO} />
                </div>
                <form
                    className="form-content"
                    action="https://public.herotofu.com/v1/f4554bf0-31d1-11ed-8988-6185f597c7d8"
                    method="post">
                    <div>
                        <input className="form-input" name="Name" id="name" type="text" placeholder="Name" required />
                    </div>
                    <div>
                        <input
                            className="form-input"
                            name="Email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <select className="form-input" name="Product" id="product" required>
                            <option value="" disabled>
                                Product
                            </option>
                            <option value="Websites">Websites</option>
                            <option value="E-shops">E-shops</option>
                            <option value="Mobile Apps">Mobile Apps</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            className="form-input message-box"
                            type="textarea"
                            name="Message"
                            id="message"
                            placeholder="Message"
                        />
                    </div>
                    <div>
                        {/* <button className="neomorphism-contact" type="submit" value="Send"> */}
                        <input className="neomorphism-contact" type="submit" value="Send" />
                        {/* </button> */}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
