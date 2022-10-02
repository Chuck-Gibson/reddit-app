import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './allPosts.css';
import PropTypes from 'prop-types';
import { Vote } from './Vote';
import { CommentCount } from './comments/CommentCount';
import { CommentContainer } from './comments/CommentContainer';
import { getImage } from './util/getImage';
import { getMedia } from './util/getMedia';

export const Post = ({
  type,
  id,
  title,
  subreddit,
  voteScore,
  url,
  author,
  commentCount,
  isVideo,
  media,
}) => {
  const [showComments, setShowComments] = useState(false);
  const getComments = () => {
    setShowComments((show) => !show);
  };
  useEffect(() => {
    console.log(showComments);
  }, [showComments]); // BUG: delete when done

  const status = useSelector((state) => state.allPosts.status);

  if (status === 'pending') {
    return <div> isLoading component would go here</div>;
  }

  // JSX
  return (
    <div
      data-testid='allPosts-component--Post'
      className='post'
    >
      <section className='post--info'>
        <div className='post--info-meta'>
          <h1>{title}</h1>
          <div className='post--info-meta-author'>u/{author}</div>
        </div>

        <div className='post--info-subreddit'>{subreddit}</div>
      </section>

      {getImage(url)}

      {getMedia(media)}

      <section className='post--action'>
        <Vote voteScore={voteScore} />
        {/* called from Post.js Component*/}
        <CommentCount
          commentCount={commentCount}
          postId={id}
          handleClick={getComments}
        />
      </section>

      {showComments && commentCount > 0 && <CommentContainer postId={id} />}
      {/* NOTE: If auth 2 takes off, this needs to be changed */}
    </div>
  );
};

Post.propType = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  url: PropTypes.string,
  author: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  isVideo: PropTypes.bool.isRequired,
  media: PropTypes.object,
};
