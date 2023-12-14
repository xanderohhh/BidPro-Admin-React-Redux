import { createSlice } from "@reduxjs/toolkit";

//Uses immer library for immutability
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const selectCount = (state) => state.counter.value;
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
