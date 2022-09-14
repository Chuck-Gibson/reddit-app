import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "store/slices/userPosts/asyncThunks/getPosts";

const AllPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getPosts("hot")); // get all post on mount
  });

  return (
    <div>
      BRB gotta figure out how to attach the comments of each post to the json
      you are getting back
    </div>
  );
};

export default AllPosts;
