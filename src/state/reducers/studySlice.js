import { createSlice } from "@reduxjs/toolkit";

const studySlice = createSlice({
  name: 'study',
  initialState: {
    duration: 25
  },
  reducers: {
    increaseStudy: (state, action) => {
      state.duration++
    },
    decreaseStudy: (state, action) => {
      // decrease limited to 0 (no negatives)
      state.duration > 0 ? state.duration-- : state.duration = 0
    }
  }
});

export const { increaseStudy, decreaseStudy } = studySlice.actions;
export default studySlice;