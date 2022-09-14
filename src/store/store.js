import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./slices/userPosts/userPosts.js";

const store = configureStore({
  reducer: {
    allPosts: postsSliceReducer,
  },
});

export default store;
