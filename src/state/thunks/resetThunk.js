import { resetTimer } from "../reducers/studySlice";
import { resetBreak } from "../reducers/breakSlice";

export const resetThunk = (dispatch) => {
  dispatch(resetTimer());
  dispatch(resetBreak());
};