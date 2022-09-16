import { FETCH_URL } from "../../constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrendingPosts = createAsyncThunk(
  "trending/getTrendingPosts",
  async (postType) => {
        postType = "hot";
    /** @params {string} postType: available types are: hot, top, rising, new
     * return []: an array of json object, each object is an individual post
     */
    let fetchingUrl = FETCH_URL;
    fetchingUrl += `/posts/${postType}`;
    try {
      const trendingPosts = await fetch(fetchingUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await trendingPosts.json();
    } catch (error) {
      console.log(error);
      return []; // return an empty array if an error is thrown
    }
  }
);
