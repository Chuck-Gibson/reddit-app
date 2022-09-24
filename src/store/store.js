import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./slices/userPosts/userPosts.js";
import trendingsliceReducer from "./slices/trending/trendingslice.js";
import commentsSliceReducer from "./slices/comments/commentsSlice";


const store = configureStore({
  reducer: {
    allPosts: postsSliceReducer,
    comments: commentsSliceReducer,
    trendingPosts: trendingsliceReducer,
  },
});


export default store;
