import React, { useRef, useState } from "react";
import useIsInViewport from "../../utils/inViewport";
import "./Contact.css";
import translate from "../../utils/translations";

const ContactForm = ({ language }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  const containerRef = useRef();
  return (
    <section id="contact">
      <div ref={containerRef} className="container">
        <div className={useIsInViewport(containerRef) ? "form-container form-container-animation" : "form-container"}>
          <div className="form-title"></div>
          <div className="contact-box">
            <div className="form-box">
              <form className="form-content" action="https://public.herotofu.com/v1/f4554bf0-31d1-11ed-8988-6185f597c7d8" method="post">
                <div className="form-input">
                  <input name="Name" id="name" type="text" placeholder={translate(language).contact.form_name} required />
                </div>
                <div className="form-input">
                  <input name="Email" id="email" type="email" placeholder="E-mail" required />
                </div>
                <div className="selection-box">
                  <select className="form-input" name="Product" id="product" required>
                    <option value="Website">Website</option>
                    <option value="E-shop">E-shop</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Custom">{translate(language).contact.other}</option>
                  </select>
                </div>
                <div className="messagebox-container">
                  <textarea className="form-message" type="textarea" name="Message" id="message" placeholder={translate(language).contact.write_message} />
                </div>
                <div className="button-container">
                  {/* <button className="neomorphism-contact" type="submit" value="Send"> */}
                  <input className="neomorphism-contact" type="submit" value={translate(language).contact.send_button} />
                  {/* </button> */}
                </div>
              </form>
            </div>
            <div className="contact-else">
              <div className="title">{translate(language).contact.wish}</div>
              <div className="paragraph">{translate(language).contact.orana_quote}</div>
              <div className="signature">- Orana</div>
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </div>
    </section>
  );
};

export default ContactForm;
