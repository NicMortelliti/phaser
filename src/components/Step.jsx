import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePattern } from "../features/pattern/patternSlice";
import { StepBtn } from "../styles/Buttons.styled";

const Step = ({ instrument, bar, step }) => {
  const dispatch = useDispatch();
  const pattern = useSelector((state) => state.pattern);

  const stepIsSelected = pattern[instrument][bar][step];

  const handleClick = () => {
    dispatch(
      updatePattern({
        id: [step, bar],
        instrument: instrument,
        value: stepIsSelected == 1 ? 0 : 1,
      })
    );
  };

  return (
    <StepBtn selected={stepIsSelected} onClick={() => handleClick()}>
      {stepIsSelected}
    </StepBtn>
  );
};

export default Step;
