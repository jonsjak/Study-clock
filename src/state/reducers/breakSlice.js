import { createSlice } from "@reduxjs/toolkit";

const breakSlice = createSlice({
  name: 'break',
  initialState: {
    duration: 5
  },
  reducers: {
    increaseBreak: (state, action) => {
      state.duration++
    },
    decreaseBreak: (state, action) => {
      // decrease limited to 0 (no negatives)
      state.duration > 0 ? state.duration-- : state.duration = 0
    }
  }
});

export const { increaseBreak, decreaseBreak } = breakSlice.actions;
export default breakSlice;