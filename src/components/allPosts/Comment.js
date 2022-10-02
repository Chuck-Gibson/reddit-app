import { ReactComponent as CommentIcon } from 'assets/comment.svg';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getComments } from 'store/slices/comments/asyncThunks/getComments';
import './allPosts.css';

export const Comment = ({ commentCount, postId }) => {
  const handleClick = (postId) => {
    return null;
  };

  return (
    <div className='comment'>
      <span
        className='comment--icon btn'
        onClick={() => handleClick(postId)}
      >
        <CommentIcon />
      </span>
      <span className='comment--count'>{commentCount}</span>
    </div>
  );
};
