import { FETCH_URL } from "../../constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (postId)  => {;
    /** @params {string} postId: Id number of the post
     * return []: an array of json object, each object is an individual post
     */
    let fetchingUrl = FETCH_URL;
    fetchingUrl += `/comments/${postId}`;
    console.log(fetchingUrl)
    try {
      const comments = await fetch(fetchingUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await comments.json();
    } catch (error) {
      console.log(error);
      return []; // return an empty array if an error is thrown
    }
  }
);