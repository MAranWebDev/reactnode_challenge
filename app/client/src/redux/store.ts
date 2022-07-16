import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/postsSlice";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export { type RootState, type AppDispatch, store };
