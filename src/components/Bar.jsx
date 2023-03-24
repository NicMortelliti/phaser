import React from "react";

import { BarCont } from "../styles/Layout.styled";
import Step from "./Step";

const Bar = () => {
  return (
    <BarCont>
      <Step />
      <Step />
      <Step />
      <Step />
    </BarCont>
  );
};

export default Bar;
