import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./slices/userPosts/userPosts.js";
import trendingsliceReducer from "./slices/trending/trendingslice.js";

const store = configureStore({
  reducer: {
    allPosts: postsSliceReducer,
    trendingPosts: trendingsliceReducer,
  },
});

export default store;
