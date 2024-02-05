import { configureStore } from "@reduxjs/toolkit";
import breakSlice from "./breakSlice";
import studySlice from ""
import sessionSlice from "./sessionSlice";

export const store = configureStore({
  reducers: {
    break: breakSlice,
    study: studySlice,
    session: sessionSlice
  }
});