import React from "react";
import "./ThankYou.css";
import OranaLogo from "../../assets/orana-logo.png";
export default function ThankYou() {
  return (
    <>
      <div className="top">
        <a href="/">
          <img src={OranaLogo} className="top-logo" alt="Orana" height={"45"} />
        </a>
      </div>
      <div className="thankyou-container">
        <h1>Ευχαριστούμε που επικοινωνήσατε μαζί μας!</h1>
        <p>Θα απαντήσουμε το συντομότερο δυνατό!</p>
        <div className="thankyou-buttons-container">
          <button className="button-28">
            <a href="/team">Γνωρίστε την ομάδα μας</a>
          </button>
          <button className="button-28">
            <a href="/">Πίσω στην Orana</a>
          </button>
        </div>
      </div>
    </>
  );
}
