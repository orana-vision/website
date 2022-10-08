import React from "react";
import "./Error404.css";
import OranaLogo from "../../assets/orana-logo.png";
import translate from "../../utils/translations";

const Error404 = ({ language }) => {
    return (
        <>
            <div className="top">
                <a href="/">
                    <img src={OranaLogo} className="top-logo" alt="Orana" height={"45"} />
                </a>
            </div>
            <div className="thankyou-container">
                <h1>{translate(language).error404.title}</h1>
                <p>{translate(language).error404.p}</p>
                <div className="thankyou-buttons-container">
                    <button className="button-28">
                        <a href="/team">{translate(language).error404.meet}</a>
                    </button>
                    <button className="button-28">
                        <a href="/">{translate(language).error404.back}</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Error404;
