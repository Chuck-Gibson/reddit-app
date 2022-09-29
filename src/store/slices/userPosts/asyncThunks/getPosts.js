import { FETCH_URL } from '../../constant';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
  'allPosts/getPosts',
  async (postType) => {
    /**
     * @params {string} postType: available types are: hot, top, rising, new
     * return []: an array of json object, each object is an individual post
     */
    let fetchingUrl = FETCH_URL;
    fetchingUrl += `/posts/${postType}`;
    try {
      const allPosts = await fetch(fetchingUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await allPosts.json();
    } catch (error) {
      console.log(error);
      return []; // return an empty array if an error is thrown
    }
  }
);

export const getMorePosts = createAsyncThunk(
  'allPosts/more',
  async ({ type, after, count }) => {
    /**
     * @params {type, after, count: string}: object recieved by action caller.
     * `type`: allowed types are - hot, rising, new, top
     * `after`: the id of the very last post in store state.
     * `type` and `after` are required
     *
     */
    if (!type || !after) {
      return new Error('Missing queries: type, after');
    }

    let fetchingUrl = `${FETCH_URL}/posts/more`;
    fetchingUrl += `?type=${type}`;
    fetchingUrl += `&after=${after}`;
    if (count) fetchingUrl += `&count=${count}`;

    try {
      const morePosts = await fetch(fetchingUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await morePosts.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);
