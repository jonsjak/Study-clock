import { createSlice } from "@reduxjs/toolkit";

const studySlice = createSlice({
  name: 'study',
  initialState: {
    duration: 5,  // change to minutes
    isRunning: false,
    isReset: false
  },
  reducers: {
    increaseStudy: (state, action) => {
      state.duration++;
    },
    decreaseStudy: (state, action) => {
      state.duration = state.duration > 0 ? state.duration - 1 : 0;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    }
    ,
    startStopTimer: state => {
      state.isRunning = !state.isRunning;
    },
    resetTimer: state => {
      state.isRunning = false;
      state.isReset = true;
      state.duration = 5;
    },
  }
});

export const { increaseStudy, decreaseStudy, startStopTimer, resetTimer, setDuration } = studySlice.actions;
export default studySlice;
