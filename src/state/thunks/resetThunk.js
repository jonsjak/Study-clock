import { resetTimer } from "../reducers/studySlice";
import { resetBreak } from "../reducers/breakSlice";

export const resetThunk = () => {
  return (dispatch) => {
    dispatch(resetTimer());
    dispatch(resetBreak());
  }
};