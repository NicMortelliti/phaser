import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempo: 90,
  bass: [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  snare: [
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

const patternSlice = createSlice({
  name: "pattern",
  initialState,
  reducers: {
    resetPattern: () => initialState,
    updatePattern: (state, action) => {
      const { instrument, step } = action.payload;
      state[instrument][step] = !state[instrument][step];
    },
  },
});

export const { resetPattern, updatePattern } = patternSlice.actions;
export default patternSlice.reducer;
