import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type PostsType = { id: string; name: string; description: string }[];

const initialState = {
  filter: "",
  name: "",
  description: "",
  posts: [] as PostsType,
};

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
    setPosts: (state, action: PayloadAction<PostsType>) => {
      state.posts = action.payload;
    },
  },
});

const postsReducer = postsSlice.reducer;
const { setFilter, setName, setDescription, setPosts } = postsSlice.actions;

export { postsReducer, setFilter, setName, setDescription, setPosts };
