import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "", name: "", description: "" };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
  },
});

const postsReducer = postsSlice.reducer;
const { setFilter, setName, setDescription } = postsSlice.actions;

export { postsReducer, setFilter, setName, setDescription };
