import { ReactComponent as CommentIcon } from "assets/comment.svg";
import "./allPosts.css";

export const Comment = ({ commentCount }) => {
  return (
    <div className="comment">
      <span className="comment--icon btn">
        <CommentIcon />
      </span>
      <span className="comment--count">{commentCount}</span>
    </div>
  );
};
