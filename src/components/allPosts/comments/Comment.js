import React from 'react';

export const Comment = ({ id, author, body, voteScore, replies }) => {
  // JSX
  return (
    <section className='post--comment'>
      <h1>{author}</h1>

      <p>{body}</p>

      <section>
        <div>{voteScore}</div>
      </section>
    </section>
  );
};
