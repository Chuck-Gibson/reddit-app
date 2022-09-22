import { createSlice } from '@reduxjs/toolkit';
import { getPosts } from './asyncThunks/getPosts';
import { searchPosts } from './asyncThunks/searchPosts';

const allPosts = createSlice({
  name: 'allPosts',
  initialState: {
    posts: [],
    status: 'idle', // idle, pending, ok, error
  },
  reducers: {
    addTrending : (state,action) => {
        const included = state.posts.find(post => post.id === action.payload.id)
      if (included){
        console.log('already added');
        window.scroll({top:0, behavior: 'smooth'})
      } else {
        state.posts = [action.payload, ...state.posts]
        return window.scroll({top:0, behavior: 'smooth'})
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'ok';
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'error';
      })

      .addCase(searchPosts.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.status = 'ok';
        state.posts = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export const {addTrending} = allPosts.actions; 
export default allPosts.reducer;
