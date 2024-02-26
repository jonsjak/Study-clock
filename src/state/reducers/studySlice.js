import { createSlice } from "@reduxjs/toolkit";

const studySlice = createSlice({
  name: 'study',
  initialState: {
    duration: 25,
    isRunning: false,
    isResetting: false
  },
  reducers: {
    increaseStudy: (state) => {
      state.duration++;
    },
    decreaseStudy: (state) => {
      state.duration = state.duration > 0 ? state.duration - 1 : 0;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    }
    ,
    startStopTimer: (state) => {
      state.isRunning = !state.isRunning;
    },
    restartTimer: (state) => {
      state.isRunning = true;
      state.isResetting = false;
      state.duration = 25;
    },
    resetTimer: (state) => {
      state.isResetting = true;
      state.duration = 25;
    },
    resetIsDone: (state) => {
      state.isResetting=false
    }
  }
});

export const { increaseStudy, decreaseStudy, startStopTimer, restartTimer, resetTimer, setDuration, resetIsDone } = studySlice.actions;
export default studySlice;
