import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./asyncThunks/getPosts";

const allPosts = createSlice({
  name: "allPosts",
  initialState: {
    posts: [],
    status: "idle", // idle, pending, ok, error
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "ok";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default allPosts.reducer;
