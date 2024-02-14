import { createSlice } from "@reduxjs/toolkit";

const studySlice = createSlice({
  name: 'study',
  initialState: {
    duration: 25,
    isRunning: false,
  },
  reducers: {
    increaseStudy: (state, action) => {
      state.duration++;
    },
    decreaseStudy: (state, action) => {
      state.duration = state.duration > 0 ? state.duration - 1 : 0;
    },
    startTimer: state => {
      state.isRunning = true;
    },
    pauseTimer: state => {
      state.isRunning = false;
    },
    resetTimer: state => {
      state.isRunning = false;
      state.duration = 25
    },
  }
});

export const { increaseStudy, decreaseStudy, startTimer, pauseTimer, resetTimer } = studySlice.actions;
export default studySlice;
