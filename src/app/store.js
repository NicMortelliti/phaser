import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { patternReducer } from "../features/pattern/patternSlice";
const store = configureStore({
  reducer: {
    pattern: patternReducer,
  },
});
