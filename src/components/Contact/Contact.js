import React, { useState } from "react";
import "./Contact.css";

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
                <div className="form-title">Let's Talk</div>
                <form action="https://public.herotofu.com/v1/f4554bf0-31d1-11ed-8988-6185f597c7d8" method="post">
                    <div>
                        <label for="name">Your Name</label>
                        <input name="Name" id="name" type="text" required />
                    </div>
                    <div>
                        <label for="email">Your Email</label>
                        <input name="Email" id="email" type="email" required />
                    </div>
                    <div>
                        <select name="Product" id="product" required>
                            <option value="Websites">Websites</option>
                            <option value="E-shops">E-shops</option>
                            <option value="Mobile Apps">Mobile Apps</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <input type="text" name="Message" id="message" />
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
