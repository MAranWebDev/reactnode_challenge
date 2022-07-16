import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
