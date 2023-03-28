import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempo: 90,
  bass: [
    [0, 0, 0, 0],
    [0, 1, 0, 0], // ! Test if step 2 in bar 2 is selected
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ],
  snare: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

const patternSlice = createSlice({
  name: "pattern",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
  },
});
export const { resetPattern, updatePattern } = patternSlice.actions;
export default patternSlice.reducer;
