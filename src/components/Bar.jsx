import React from "react";

import { BarCont } from "../styles/Layout.styled";
import Step from "./Step";

const Bar = ({ instrument, bar }) => {
  // Render bar 4 times ( 4 steps per bar
  //                      4 bars in a pattern
  //                      16 steps per pattern)
  const RenderStepFourTimes = () => {
    return Array.from({ length: 4 }, (_, i) => (
      <Step key={i} instrument={instrument} bar={bar} step={i} />
    ));
  };

  return (
    <BarCont>
      <RenderStepFourTimes />
    </BarCont>
  );
};

export default Bar;
