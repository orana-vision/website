import React from "react";
import "./ThankYou.css";
import OranaLogo from "../../assets/orana-logo.png";
import translate from "../../utils/translations";

export default function ThankYou({ language }) {
  return (
    <>
      <div className="top">
        <a href="/">
          <img src={OranaLogo} className="top-logo" alt="Orana" height={"45"} />
        </a>
      </div>
      <div className="thankyou-container">
        <h1>{translate(language).thank_you.thank_you_title}</h1>
        <p>{translate(language).thank_you.thank_you_p}</p>
        <div className="thankyou-buttons-container">
          <button className="button-28">
            <a href="/team">{translate(language).thank_you.thank_you_meet}</a>
          </button>
          <button className="button-28">
            <a href="/">{translate(language).thank_you.thank_you_back}</a>
          </button>
        </div>
      </div>
    </>
  );
}
