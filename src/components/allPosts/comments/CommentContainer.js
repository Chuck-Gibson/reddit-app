import React, { useEffect, useState } from 'react';
import { AllComments } from './AllComments';
import { FETCH_URL } from 'store/slices/constant';
import '../allPosts.css';

export const CommentContainer = ({ postId }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // Fetching comment data on mount
    const fetchFunction = async () => {
      let fetchingUrl = FETCH_URL;
      fetchingUrl += '/comments';
      fetchingUrl += `/${postId}`;

      const commentRequested = await fetch(fetchingUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const commentJson = await commentRequested.json();
      setComments(() => commentJson);
    };
    fetchFunction();
  }, []);

  // JSX
  return (
    <section className='posts--comment-container'>
      <AllComments comments={comments} />
    </section>
  );
};
