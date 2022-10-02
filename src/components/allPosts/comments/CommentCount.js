import { ReactComponent as CommentIcon } from 'assets/comment.svg';
import '../allPosts.css';

export const CommentCount = ({ commentCount, postId, handleClick }) => {
  return (
    <div
      aria-label='show comment'
      onClick={() => handleClick(postId)}
      className='comment btn'
    >
      <span className='comment--icon btn'>
        <CommentIcon />
      </span>
      <span className='comment--count'>{commentCount}</span>
    </div>
  );
};
