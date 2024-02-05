import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    duration: 25,
  },
  reducers: null
})

export default sessionSlice;