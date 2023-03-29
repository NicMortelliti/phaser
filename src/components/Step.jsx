import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePattern } from "../features/pattern/patternSlice";
import { StepBtn } from "../styles/Buttons.styled";

const Step = ({ instrument, step }) => {
  const dispatch = useDispatch();
  const pattern = useSelector((state) => state.pattern);

  const handleClick = () => {
    dispatch(
      updatePattern({
        payload: { instrument: instrument, step: step },
      })
    );
  };

  return (
    <StepBtn selected={false} onClick={() => handleClick()}>
      {step + 1}
    </StepBtn>
  );
};

export default Step;
