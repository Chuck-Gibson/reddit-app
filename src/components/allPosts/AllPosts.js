import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from 'store/slices/userPosts/asyncThunks/getPosts';
import { AllPostsContainer } from './AllPostsContainer';
import './allPosts.css';

const AllPosts = () => {
  // Fetch post
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts('rising')); // get all post on mount
  });

  return (
    <section
      data-testid='component--allPosts'
      id='all-posts'
    >
      <AllPostsContainer />
    </section>
  );
};

export default AllPosts;
