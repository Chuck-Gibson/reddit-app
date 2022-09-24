import { ReactComponent as CommentIcon } from "assets/comment.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getComments } from "store/slices/comments/asyncThunks/getComments";
import "./allPosts.css";
import { ShowComments } from "../comments/PostComments";



export const Comment = ({ commentCount,postId }) => {
  const dispatch = useDispatch()
  let commentsShown = false;
  
  const handleClick = (postId) =>{
    ShowComments(postId);
    if (!commentsShown){
      dispatch(getComments(postId))
       commentsShown = true; 
    } 
    
  }
  

  return (
    
    <div className="comment">
      <span className="comment--icon btn" onClick={() => handleClick(postId)}>
        <CommentIcon />
      </span>
      <span className="comment--count">{commentCount}</span>
    </div>
  );
};
