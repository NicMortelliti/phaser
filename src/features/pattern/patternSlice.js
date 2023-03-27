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
    resetPattern: (state) => (state = initialState),
    updatePattern: (state, action) => {
      const { id, instrument, value } = action.payload;
      return {
        ...state,
        [instrument]: state[instrument].map((bar, barIndex) =>
          barIndex === id[0]
            ? bar.map((step, stepIndex) => (stepIndex === id[1] ? value : step))
            : bar
        ),
      };
    },
  },
});
export const { resetPattern, updatePattern } = patternSlice.actions;
export default patternSlice.reducer;
