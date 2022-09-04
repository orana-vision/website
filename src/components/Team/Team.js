import React from "react";
import "./Team.css";
import Gkountras from "./Gkountras";
import Horgos from "./Horgos";
import Xaris from "./Xaris";
export default function Team() {
  return (
    <div class="container">
      <div>
        <Gkountras />
      </div>
      <div>
        <Horgos />
      </div>
      <div>
        <Xaris />
      </div>
    </div>
  );
}
