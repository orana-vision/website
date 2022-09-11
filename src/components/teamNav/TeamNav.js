import React from "react";
import "./TeamNav.css";
import { BsDot } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";

const TeamNav = ({ selected, setSelected }) => {
  return (
    <nav className="team">
      <a href="#n1" onClick={() => setSelected(1)}>
        {selected === 1 ? <VscCircleFilled /> : <BsDot />}
      </a>
      <a href="#n2" onClick={() => setSelected(2)}>
        {selected === 2 ? <VscCircleFilled /> : <BsDot />}
      </a>
      <a href="#n3" onClick={() => setSelected(3)}>
        {selected === 3 ? <VscCircleFilled /> : <BsDot />}
      </a>
    </nav>
  );
};

export default TeamNav;
