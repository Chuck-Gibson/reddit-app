import React from 'react';
import { Comment } from './Comment';

export const AllComments = ({ comments }) => {
  const getComments = () => {
    return comments.map((comment) => {
      return (
        <Comment
          key={comment.id}
          id={comment.id}
          author={comment.author}
          body={comment.body}
          voteScore={comment.voteScore}
          replies={comment.replies}
        />
      );
    });
  };

  return <>{getComments()}</>;
};
