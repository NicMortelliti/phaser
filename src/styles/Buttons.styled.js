import styled from "styled-components";

export const StepBtn = styled.button`
  border: 1px solid black;
  background-color: ${({ selected }) => (selected ? "pink" : "lightgray")};
  width: 40px;
  height: 80px;

  :hover {
    background-color: ${({ selected }) => (selected ? "pink" : "gray")};
  }

  :active {
    background-color: pink;
  }
`;
