import { useSelector } from 'react-redux';
import { Post } from './Post';
import './allPosts.css';
import { GetMoreBtn } from 'components/getMore/GetMore';

export const AllPostsContainer = () => {
  const { posts, status } = useSelector((state) => state.allPosts);
  const getPosts = () => {
    return posts.map((post) => {
      return (
        <Post
          key={post.id}
          type={post.type} // NOTE: may not need this, for scalability
          id={post.id}
          title={post.title}
          subreddit={post.subreddit}
          voteScore={post.voteScore}
          url={post.url}
          author={post.author}
          commentCount={post.commentCount}
          isVideo={post.isVideo}
          media={post.media}
        />
      );
    });
  };
  if (status === 'pending') return <div className='loader'></div>;
  return (
    <>
      {getPosts()}
      <GetMoreBtn />
    </>
  );
};
