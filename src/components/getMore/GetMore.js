import React from 'react';
import { Button } from 'components/common/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getMorePosts } from 'store/slices/userPosts/asyncThunks/getPosts';
import './GetMore.css';

const TYPE = 'hot'; // HACK: Hard code now but I will be building a category selector soon

export const GetMoreBtn = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPosts.posts);
  let lastPosts = '';
  if (posts[0]) lastPosts += posts[posts.length - 1].id;

  const handleClick = () => {
    const metaData = {
      type: TYPE, // NOTE: Change this when category selector is implemented
      after: lastPosts,
      count: 10,
    };
    dispatch(getMorePosts(metaData));
  };

  return (
    <>
      <Button
        handleClick={handleClick}
        isLoading={false}
        _className='btn--get-more btn--primary'
      >
        Get more
      </Button>
    </>
  );
};
