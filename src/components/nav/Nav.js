import React, { useEffect, useState } from "react";
import "./Nav.css";
import { RiHomeLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY < 500);
    });
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (window.scrollY < 100) {
      document.getElementById("nav").style.width = "100%";
      // } else if (window.scrollY < 300) {
      //   document.getElementById("nav").style.width = "82%";
      // } else if (window.scrollY < 400) {
      //   document.getElementById("nav").style.width = "75%";
      // } else if (window.scrollY < 500) {
      //   document.getElementById("nav").style.width = "50%";
    } else if (window.scrollY > 400) {
      document.getElementById("nav").style.width = "25%";
    }
  }
  const [x, setX] = useState(0);
  function myFunction() {
    if (x === 0) {
      document.getElementById("dropdown").style.display = "none";
      setX(1);
      console.log(x);
    } else {
      document.getElementById("dropdown").style.display = "block";
      setX(0);
      console.log(x);
    }
    console.log(x);
  }

  return (
    <nav id="nav" className={scroll ? "nav-test" : "nav-modern"}>
      {scroll ? (
        <>
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#experience">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="#footer">Info</a>
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
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#footer">Info</a>
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
          <a href="#footer">
            <FiInfo />
          </a>
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
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#footer">Info</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
