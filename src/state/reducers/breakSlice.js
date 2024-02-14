import { createSlice } from "@reduxjs/toolkit";

const breakSlice = createSlice({
  name: 'break',
  initialState: {
    duration: 5,
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
    setBreakTime: (state, action) => {
      state.isBreakTime = true
    }
  }
});

export const { increaseBreak, decreaseBreak, setBreakTime } = breakSlice.actions;
export default breakSlice;