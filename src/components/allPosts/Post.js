import { useSelector } from 'react-redux';
import './allPosts.css';
import PropTypes from 'prop-types';
import { selectComments } from '../../store/slices/comments/commentsSlice';
import { Vote } from './Vote';
import { Comment } from './Comment';
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
  const status = useSelector((state) => state.allPosts.status);

  if (status === 'pending') {
    return <div> isLoading component would go here</div>;
  }

  const commentsPostId = id + 'postComments';
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

      {getImage(url.isImage, url.contentUrl)}

      {getMedia(media)}

      <section className='post--action'>
        <Vote voteScore={voteScore} />
        {/* called from Post.js Component*/}
        <Comment
          commentCount={commentCount}
          postId={id}
        />
      </section>
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
