import React from "react";

import Bar from "./Bar";
import { PatternCont } from "../styles/Layout.styled";

const Pattern = () => {
  return (
    <PatternCont>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </PatternCont>
  );
};

export default Pattern;
