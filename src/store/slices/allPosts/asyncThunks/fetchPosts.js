import { FETCH_URL } from "../../constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "allPosts/getPosts",
  async (postType) => {
    /**
     * @params {string} postType: available types are: hot, top, rising, new
     * return []: an array of json object, each object is an individual post
     */
    let fetchingUrl = FETCH_URL;
    fetchingUrl += postType;
    try {
      const allPosts = await fetch(fetchingUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return allPosts;
    } catch (error) {
      console.log(error);
      return []; // return an empty array if an error is thrown
    }
  }
);
