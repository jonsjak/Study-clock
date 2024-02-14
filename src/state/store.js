import { combineReducers, configureStore } from "@reduxjs/toolkit";
import breakSlice from "./reducers/breakSlice";
import studySlice from "./reducers/studySlice";

const reducer = combineReducers({
  break: breakSlice.reducer,
  study: studySlice.reducer
})

export const store = configureStore({ reducer });