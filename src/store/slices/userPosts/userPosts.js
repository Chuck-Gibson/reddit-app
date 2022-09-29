import { createSlice } from '@reduxjs/toolkit';
import { getPosts, getMorePosts } from './asyncThunks/getPosts';
import { searchPosts } from './asyncThunks/searchPosts';

const allPosts = createSlice({
  name: 'allPosts',
  initialState: {
    posts: [],
    status: 'idle', // idle, pending, ok, error
    getMore_status: 'ok', // only ok and pending, this state is for the getMore button
  },
  reducers: {
    addTrending: (state, action) => {
      const included = state.posts.find(
        (post) => post.id === action.payload.id
      );
      if (included) {
        console.log('already added');
        window.scroll({ top: 0, behavior: 'smooth' });
      } else {
        state.posts = [action.payload, ...state.posts];
        return window.scroll({ top: 0, behavior: 'smooth' });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Initial posts
      .addCase(getPosts.pending, (state, _) => {
        state.status = 'pending';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'ok';
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, _) => {
        state.status = 'error';
      })
      // User searched posts
      .addCase(searchPosts.pending, (state, _) => {
        state.status = 'pending';
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.status = 'ok';
        state.posts = action.payload;
      })
      .addCase(searchPosts.rejected, (state, _) => {
        state.status = 'error';
      })
      // More posts
      .addCase(getMorePosts.pending, (state, _) => {
        state.getMore_status = 'pending';
      })
      .addCase(getMorePosts.fulfilled, (state, action) => {
        state.getMore_status = 'ok';
        state.posts = [...state.posts, ...action.payload]; // append to the end of the posts state
      })
      .addCase(getMorePosts.rejected, (state, _) => {
        state.getMore_status = 'ok';
      });
  },
});

export const { addTrending } = allPosts.actions;
export default allPosts.reducer;
