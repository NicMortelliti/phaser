import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tempo: 90,
  bass: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
  },
  snare: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
  },
};

export const patternSlice = createSlice({
  name: "pattern",
  initialState,
  reducers: {
    resetPattern: (state) => (state = initialState),
    updatePattern: (state, action) => {},
  },
});

export default patternSlice.reducer;
