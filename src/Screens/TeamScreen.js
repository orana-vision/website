import React, { useLayoutEffect } from "react";
import Team from "../components/Team/Team";

export default function TeamScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return <Team />;
}
