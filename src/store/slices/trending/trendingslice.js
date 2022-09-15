import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../userPosts/asyncThunks/getPosts.js";

const trendingPosts = createSlice({
    name:'trendingPosts',
    initialState: {
        posts:[],
        status: "idle"
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "ok";
        state.posts = [...state.posts, ...action.payload];
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "error";
        console.log(action.payload);
      });
  },
});

export const selectTrendingPosts = (state) => state.trendingPosts;
export default trendingPosts.reducer;