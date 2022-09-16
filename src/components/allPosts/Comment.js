import { ReactComponent as CommentIcon } from "assets/comment.svg";

export const Comment = ({ commentCount }) => {
  console.log(commentCount);
  return (
    <div className="comment">
      <span className="comment--icon">
        <CommentIcon />
      </span>
      <span className="comment--count">{commentCount}</span>
    </div>
  );
};
