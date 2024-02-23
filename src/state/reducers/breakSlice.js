import { createSlice } from "@reduxjs/toolkit";

const breakSlice = createSlice({
  name: 'break',
  initialState: {
    duration: 5, // time in minutes
    isBreakTime: false
  },
  reducers: {
    increaseBreak: (state, action) => {
      state.duration++
    },
    decreaseBreak: (state, action) => {
      // decrease limited to 0 (no negatives)
      state.duration = state.duration > 0 ? state.duration - 1 : 0
    },
    setItIsBreakTime: (state, action) => {
      state.isBreakTime = true;
    },
    resetBreak: (state, action) => {
      state.duration = 5;
      state.isBreakTime = false;
    }
  }
});

export const { increaseBreak, decreaseBreak, setItIsBreakTime, resetBreak } = breakSlice.actions;
export default breakSlice;