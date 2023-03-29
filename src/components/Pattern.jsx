import React from "react";

import Bar from "./Bar";
import { PatternCont } from "../styles/Layout.styled";

const Pattern = ({ instrument }) => {
  // 16 steps per pattern
  // 4 bars per pattern
  // 4 steps per
  const RenderBarFourTimes = () => {
    return Array.from({ length: 4 }, (_, i) => (
      <Bar key={i} instrument={instrument} bar={i} />
    ));
  };

  return (
    <PatternCont>
      <RenderBarFourTimes />
    </PatternCont>
  );
};

export default Pattern;
