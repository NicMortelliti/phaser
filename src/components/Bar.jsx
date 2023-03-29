import React from "react";

import { BarCont } from "../styles/Layout.styled";
import Step from "./Step";

const Bar = ({ instrument, bar }) => {
  // Render bar 4 times ( 4 steps per bar
  //                      4 bars in a pattern
  //                      16 steps per pattern)
  const RenderStepFourTimes = () => {
    return Array.from({ length: 4 }, (_, i) => (
      //  0           1           2              3
      // [1, 2, 3, 4][5, 6, 7, 8][9, 10, 11, 12][13, 14, 15, 16]
      <Step key={i} instrument={instrument} step={bar * 4 + i} />
    ));
  };

  return (
    <BarCont>
      <RenderStepFourTimes />
    </BarCont>
  );
};

export default Bar;
