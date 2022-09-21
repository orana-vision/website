import React, { useState } from "react";
import "./Nav.css";
import { RiHomeLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";

const Nav = () => {
    return (
        <nav className="floating">
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
        </nav>
    );
};

export default Nav;
