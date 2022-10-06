import React from "react";
import "./Team.css";

import MEImg from "../../assets/me.jpg";
import HORGOSImg from "../../assets/horgos.jpg";
import KemalImg from "../../assets/kemalidis.jpg";

import translate from "../../utils/translations";
import TeamMember from "./TeamMember";
import OranaLogo from "../../assets/orana-logo.png";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import Footer from "../Footer/Footer";

const linkedin_1 = "https://www.linkedin.com/in/ioannis-s-horgos-b5889a21a/";
const github_1 = "https://github.com/giannishorgos";
const linkedin_2 = "https://www.linkedin.com/in/ioannis-gkountras-25245723b/";
const github_2 = "https://github.com/giannisgkountras";
const linkedin_3 = "https://www.linkedin.com/in/harrys-kemalidis-35774521a/";
const github_3 = "https://github.com/Bobotsalos";

export default function Team({ language }) {
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
              {/* <Gkountras /> */}
              <TeamMember
                find_me={translate(language).team_member.find_me}
                name={translate(language).team_member.name_2}
                imgsrc={MEImg}
                bio={translate(language).team_member.bio_2}
                linkedin_link={linkedin_2}
                github_link={github_2}
              />
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
              {/* <Seba /> */}
              <TeamMember
                find_me={translate(language).team_member.find_me}
                name={translate(language).team_member.name_1}
                imgsrc={HORGOSImg}
                bio={translate(language).team_member.bio_1}
                linkedin_link={linkedin_1}
                github_link={github_1}
              />
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
              {/* <Kemal /> */}
              <TeamMember
                find_me={translate(language).team_member.find_me}
                name={translate(language).team_member.name_3}
                imgsrc={KemalImg}
                bio={translate(language).team_member.bio_3}
                linkedin_link={linkedin_3}
                github_link={github_3}
              />
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
