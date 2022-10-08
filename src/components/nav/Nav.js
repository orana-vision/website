import React, { useEffect, useState } from "react";
import "./Nav.css";
import { RiHomeLine } from "react-icons/ri";
import { BsPerson, BsGlobe } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

// import { FiInfo } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import translate from "../../utils/translations";

const Nav = ({ setLanguage, language }) => {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [changeToLang, setChangeToLang] = useState("English");

  // const [displayLang, setDisplayLang] = useState("English");
  // let greekInUse = false;

  // useEffect(() => {
  //     setDisplayLang(greekInUse ? "Ελληνικά" : "English");
  //     greekInUse = !greekInUse;
  // }, [changeToLang]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY < 400);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY < 400);
    });
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (window.scrollY < 400) {
      document.getElementById("nav").style.width = "100%";
    } else if (window.scrollY >= 400) {
      document.getElementById("nav").style.width = "25%";
    }
  }

  // useEffect(() => {
  //     if (language === "en") {
  //     } else if (language === "gr") {
  //     }
  // }, [language]);

  const handleLanguage = () => {
    // going to translate in greek
    if (language === "en") {
      // setChangeToLang("English");
      setChangeToLang("English");
      setLanguage("gr");
    } else if (language === "gr") {
      // setChangeToLang("Ελληνικά");
      setChangeToLang("Ελληνικά");
      setLanguage("en");
    }
  };

  return (
    <nav id="nav" className={scroll ? "nav-test" : "nav-modern"}>
      {scroll ? (
        <>
          <a href="#header">{translate(language).nav.home}</a>
          <a href="#about">{translate(language).nav.about}</a>
          <a href="#experience">{translate(language).nav.faq}</a>
          <a href="#contact">{translate(language).nav.contact}</a>

          {/* <button className="button-language" onClick={handleLanguage}>
            {changeToLang} */}
          {/* {displayLang} */}
          {/* </button> */}

          <div className="dropdown" id="language-dropdown">
            <button className="dropbtn">Language/Γλώσσα</button>
            <div className="dropdown-content" id="dropdown-content">
              <button onClick={() => setLanguage("gr")}>Ελληνικά</button>
              <button onClick={() => setLanguage("en")}>English</button>
            </div>
          </div>

          <div className="selector" id="selector">
            <button
              className="selector-button"
              onClick={() => {
                if (document.getElementById("dropdown").style.display === "none") {
                  document.getElementById("dropdown").style.display = "block";
                  setClicked(true);
                } else {
                  document.getElementById("dropdown").style.display = "none";
                  setClicked(false);
                }
              }}
            >
              {clicked ? <AiOutlineClose /> : <FaBars />}
            </button>
            <ul id="dropdown">
              <li>
                <a href="#header">{translate(language).nav.home}</a>
              </li>
              <li>
                <a href="#about">{translate(language).nav.about}</a>
              </li>
              <li>
                <a href="#experience">{translate(language).nav.faq}</a>
              </li>
              <li>
                <a href="#contact">{translate(language).nav.contact}</a>
              </li>
              <li>
                <button className="button-language" onClick={handleLanguage}>
                  {changeToLang}
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <a href="#header">
            <RiHomeLine />
          </a>
          <a href="#about">
            <BsPerson />
          </a>
          <a href="#experience">
            <AiOutlineAppstore />
          </a>
          <a href="#contact">
            <HiOutlineMail />
          </a>

          <button /*className="button-language"*/ className="dropbtn" id="language-main-button" onClick={handleLanguage}>
            <BsGlobe />
          </button>

          {/* <FiInfo /> */}

          <div className="selector" id="selector">
            <button
              className="selector-button"
              onClick={() => {
                if (document.getElementById("dropdown").style.display === "none") {
                  document.getElementById("dropdown").style.display = "block";
                  setClicked(true);
                } else {
                  document.getElementById("dropdown").style.display = "none";
                  setClicked(false);
                }
              }}
            >
              {clicked ? <AiOutlineClose /> : <FaBars />}
            </button>
            <ul id="dropdown">
              <li>
                <a href="#header">{translate(language).nav.home}</a>
              </li>
              <li>
                <a href="#about">{translate(language).nav.about}</a>
              </li>
              <li>
                <a href="#experience">{translate(language).nav.faq}</a>
              </li>
              <li>
                <a href="#contact">{translate(language).nav.contact}</a>
              </li>
              <li>
                <button className="button-language" onClick={handleLanguage}>
                  {changeToLang}
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
