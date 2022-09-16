import { useSelector } from "react-redux";

import { Vote } from "./Vote";
import { Comment } from "./Comment";

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
  if (status === "pending") {
    return <div> isLoading component would go here</div>;
  }
  const getImage = () => {
    if (url.isImage) {
      return (
        <img
          style={{ width: "15em" }} // FIX: delete this when getting started with css
          alt=""
          src={url.contentUrl}
          loading="lazy"
        />
      );
    }
    return null;
  };
  // JSX
  return (
    <div className="post">
      <section className="post--info">
        <div className="post--info-meta">
          <h1>{title}</h1>
          <div className="post--info-meta-author">u/{author}</div>
        </div>
        <div className="post--info-subreddit">{subreddit}</div>
      </section>

      {getImage()}

      <section className="post--action">
        <Vote voteScore={voteScore} />
        <Comment commentCount={commentCount} />
      </section>
    </div>
  );
};
