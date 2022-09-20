import React, { useEffect, useState } from "react";
import "./Nav.css";
import { RiHomeLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY < 500);
    });
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (window.scrollY < 500) {
      document.getElementById("nav").style.width = "100%";
    } else {
      document.getElementById("nav").style.width = "25%";
    }
  }

  return (
    <nav id="nav" className={scroll ? "nav-test" : "nav-modern"}>
      {scroll ? (
        <>
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#experience">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="#footer">Info</a>{" "}
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
        </>
      )}
    </nav>
  );
};

export default Nav;
