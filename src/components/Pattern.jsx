import React from "react";

import Bar from "./Bar";
import { PatternCont } from "../styles/Layout.styled";

const Pattern = () => {
  // Render bar 4 times ( 4 steps per bar
  //                      4 bars in a pattern
  //                      16 steps per pattern)
  const RenderBarFourTimes = () => {
    return Array.from({ length: 4 }, (_, i) => <Bar key={i} bar={i} />);
  };

  return (
    <PatternCont>
      <RenderBarFourTimes />
    </PatternCont>
  );
};

export default Pattern;
