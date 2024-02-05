import { combineReducers, configureStore } from "@reduxjs/toolkit";
import breakSlice from "./reducers/breakSlice";
import studySlice from "./reducers/studySlice";
import sessionSlice from "./reducers/sessionSlice";

const reducer = combineReducers({
  break: breakSlice.reducer,
  study: studySlice.reducer,
  session: sessionSlice.reducer
})

export const store = configureStore({ reducer });