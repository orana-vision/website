import React from "react";
import "./Team.css";
import Gkountras from "./Gkountras";

import Seba from "./Seba";
import Kemal from "./Kemal";

import OranaLogo from "../../assets/orana-logo.png";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import Footer from "../Footer/Footer";

export default function Team() {
  return (
    <>
      <div className="top">
        <a href="/">
          <img src={OranaLogo} className="top-logo" alt="Orana" height={"45"} />
        </a>
      </div>
      <div className="carousel-container-big">
        <div className="carousel-container">
          <div className="carousel-slide">
            <div class="carousel-cell" id="cell-1">
              <button
                className="next"
                onClick={() => {
                  document.getElementById("cell-1").classList.add("invisible");
                  document.getElementById("cell-3").classList.remove("invisible");
                  document.getElementById("cell-3").classList.add("opacity-trans");
                  window.scrollTo(0, 0);
                }}
              >
                <FiArrowLeft />
              </button>
              <Gkountras />
              <button
                className="next"
                onClick={() => {
                  document.getElementById("cell-1").classList.add("invisible");
                  document.getElementById("cell-2").classList.remove("invisible");
                  document.getElementById("cell-2").classList.add("opacity-trans");
                  window.scrollTo(0, 0);
                }}
              >
                <FiArrowRight />
              </button>
            </div>
            <div class="carousel-cell invisible" id="cell-2">
              <button
                className="next"
                onClick={() => {
                  document.getElementById("cell-2").classList.add("invisible");
                  document.getElementById("cell-1").classList.remove("invisible");
                  document.getElementById("cell-1").classList.add("opacity-trans");
                  window.scrollTo(0, 0);
                }}
              >
                <FiArrowLeft />
              </button>
              <Seba />
              <button
                className="next"
                onClick={() => {
                  document.getElementById("cell-2").classList.add("invisible");
                  document.getElementById("cell-3").classList.remove("invisible");
                  document.getElementById("cell-3").classList.add("opacity-trans");
                  window.scrollTo(0, 0);
                }}
              >
                <FiArrowRight />
              </button>
            </div>
            <div class="carousel-cell invisible" id="cell-3">
              <button
                className="next"
                onClick={() => {
                  document.getElementById("cell-3").classList.add("invisible");
                  document.getElementById("cell-2").classList.remove("invisible");
                  document.getElementById("cell-2").classList.add("opacity-trans");
                  window.scrollTo(0, 0);
                }}
              >
                <FiArrowLeft />
              </button>
              <Kemal />
              <button
                className="next"
                onClick={() => {
                  document.getElementById("cell-3").classList.add("invisible");
                  document.getElementById("cell-1").classList.remove("invisible");
                  document.getElementById("cell-1").classList.add("opacity-trans");
                  window.scrollTo(0, 0);
                }}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
