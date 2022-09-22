import { createSlice } from "@reduxjs/toolkit";
import { getTrendingPosts } from "./asyncThunks/getTrendingPosts";


const trendingPosts = createSlice({
    name:'trendingPosts',
    initialState: {
        posts:[],
        status: "idle"
    },

    reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingPosts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getTrendingPosts.fulfilled, (state, action) => {
        state.status = "ok";
        state.posts = action.payload;
      })
      .addCase(getTrendingPosts.rejected, (state, action) => {
        state.status = "error";
        console.log(action.payload);
      });
  },
});

export const selectTrendingPosts = (state) => state.trendingPosts;
export default trendingPosts.reducer;
