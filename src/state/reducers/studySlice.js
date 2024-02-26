import { createSlice } from "@reduxjs/toolkit";

const studySlice = createSlice({
  name: 'study',
  initialState: {
    duration: 25,  // time in seconds
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
    resetTimer: (state) => {
      /* state.isRunning = false; */
      state.isResetting = true;
      state.duration = 25;
    },
    resetIsDone: (state) => {
      state.isResetting=false
    }
  }
});

export const { increaseStudy, decreaseStudy, startStopTimer, resetTimer, setDuration, resetIsDone } = studySlice.actions;
export default studySlice;
