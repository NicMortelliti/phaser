import React, { useState } from "react";
import { StepBtn } from "../styles/Buttons.styled";

const Step = ({ instrument, bar, step }) => {
  const [buttonIsSelected, setButtonIsSelected] = useState(false);

  return (
    <StepBtn
      selected={buttonIsSelected}
      onClick={() => setButtonIsSelected(!buttonIsSelected)}>
      {buttonIsSelected}
    </StepBtn>
  );
};

export default Step;
