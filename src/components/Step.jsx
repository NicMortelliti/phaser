import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StepBtn } from "../styles/Buttons.styled";

const Step = () => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const { pattern } = useSelector((state) => state.pattern);

  return (
    <StepBtn selected={selected} onClick={() => setSelected(!selected)}>
      Step
    </StepBtn>
  );
};

export default Step;
