import React, { useState } from "react";

import { StepBtn } from "../styles/Buttons.styled";

const Step = () => {
  const [selected, setSelected] = useState(false);

  return (
    <StepBtn selected={selected} onClick={() => setSelected(!selected)}>
      Step
    </StepBtn>
  );
};

export default Step;
