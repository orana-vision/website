import React, { useState } from "react";
import "./Team.css";
import Gkountras from "./Gkountras";
import Horgos from "./Horgos";
import Xaris from "./Xaris";
import TeamNav from "../teamNav/TeamNav";
export default function Team() {
  const [selected, setSelected] = useState(1);
  return (
    <div class="container">
      <TeamNav setSelected={setSelected} selected={selected} />
      <div className="personCard">
        <Gkountras setSelected={setSelected} />
      </div>
      <div>
        <Horgos setSelected={setSelected} />
      </div>
      <div>
        <Xaris setSelected={setSelected} />
      </div>
    </div>
  );
}
