import { FETCH_URL } from '../../constant';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchPosts = createAsyncThunk(
  'allPosts/searchPosts',
  async (searchData) => {
    /**
     * @params {object} searchData: seach params
     * return []: an array of json object, each object is an individual post
     */
    try {
      const { search, type } = searchData;

      let fetchingUrl = FETCH_URL;
      fetchingUrl += '/search';
      fetchingUrl += `?search=${search}`;
      fetchingUrl += `&type=${type}`;

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
