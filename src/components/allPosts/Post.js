import { useSelector } from "react-redux";
import { Img } from "components/common/Img/Img";
import "./allPosts.css";

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
  const getImages = () => {
    if (url.isImage) {
      // return <img alt="" src={url.contentUrl} loading="lazy" />;
      return <Img src={url.contentUrl} />;
    }
    return null;
  };

  const getMedia = () => {
    if (media) {
      return (
        <video controls>
          <source src={media.contentUrl} />
        </video>
      );
    }
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

      {getImages()}

      {getMedia()}

      <section className="post--action">
        <Vote voteScore={voteScore} />
        <Comment commentCount={commentCount} />
      </section>
    </div>
  );
};
