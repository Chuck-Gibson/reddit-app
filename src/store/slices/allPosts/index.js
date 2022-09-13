import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./asyncThunks/fetchPosts";

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
        console.log(action.payload);
        state.posts.concat(action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "error";
        console.log(action.payload);
      });
  },
});

export default allPosts.reducer;
