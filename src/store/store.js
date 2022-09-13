import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./slices/allPosts";

const store = configureStore({
  reducer: {
    allPosts: postsSliceReducer,
  },
});

export default store;
