import { ReactComponent as CommentIcon } from "assets/comment.svg";
import { useDispatch } from "react-redux";
import { getComments } from "store/slices/comments/asyncThunks/getComments";
import "./allPosts.css";
import { ShowComments } from "../comments/PostComments";



export const Comment = ({ commentCount,postId }) => {
  const dispatch = useDispatch();
  let commentsShown = false;
  
  const handleClick = (postId,commentCount) =>{
    if(commentCount > 0){
      //ShowComments(postId);
      if (!commentsShown){
       commentsShown = true;
      dispatch(getComments(postId)) 
    } 
    }
  }
  

  return (
    
    <div className="comment">
      <span className="comment--icon btn" onClick={() => handleClick(postId,commentCount)}>
        <CommentIcon />
      </span>
      <span className="comment--count">{commentCount}</span>
    </div>
  );
};
