import React, { useEffect, useState } from "react";
import "./Nav.css";
import { RiHomeLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const Nav = ({ setLanguage, language }) => {
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

    const [changeToLang, setChangeToLang] = useState("English");
    const handleLanguage = () => {
        // going to translate in greek
        if (language === "en") {
            setChangeToLang("English");
            setLanguage("gr");
        } else if (language === "gr") {
            setChangeToLang("Ελληνικά");
            setLanguage("en");
        }
    };

    return (
        <nav id="nav" className={scroll ? "nav-test" : "nav-modern"}>
            {scroll ? (
                <>
                    <a href="#header">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">FAQ</a>
                    <a href="#contact">Contact</a>
                    <button className="button-language" onClick={handleLanguage}>
                        {changeToLang}
                    </button>
                    <div className="selector" id="selector">
                        <button
                            className="selector-button"
                            onClick={() =>
                                document.getElementById("dropdown").style.display === "none"
                                    ? (document.getElementById("dropdown").style.display = "block")
                                    : (document.getElementById("dropdown").style.display = "none")
                            }>
                            <FaBars />
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
                            {/* <button onClick={handleLanguage}>{changeToLang}</button> */}
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
                            onClick={() =>
                                document.getElementById("dropdown").style.display === "none"
                                    ? (document.getElementById("dropdown").style.display = "block")
                                    : (document.getElementById("dropdown").style.display = "none")
                            }>
                            <FaBars />
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
