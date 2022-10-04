import { useSelector } from "react-redux";
import { selectComments } from "store/slices/comments/commentsSlice";
import RepliesButton from "./RepliesButton";
import "./PostComments.css";
import { MdNoEncryption } from "react-icons/md";

const findComments = (allComments,postId) =>{
    const foundComments = allComments.find(post => post[0] === postId);
    if(foundComments){
        return foundComments[1];
    }
}

export const sortComments = (comments, depth) =>{
    let replyDepth = (depth >= 0? depth+1 : 0); // to tell if its the first reply
    return comments.map((comment) => {
     if(comment.replies && comment.replies !== "" && replyDepth < 1){
        return (
            <div className="post-comment-reply--container" key={comment.id} id={comment.id}>
                <div className="post-comment">
                
                    <div className="post-content">
                        <span>
                            <p className="commentAuthor">{comment.author}</p>
                            <p className="commentSubreddit">{comment.voteScore}</p>
                        </span>
                    <p>{comment.body}</p>
                    </div>    
                </div>
                <RepliesButton replyId={comment.replies[0].id}/>
                <div className="post-comment-reply" id={comment.replies[0].id+"replies"}  style={{display:"none"}}>{sortComments(comment.replies,1)}</div>
            </div>
            
        );
    }else if(comment.replies && comment.replies !== "" && replyDepth > 1 && replyDepth <= 4){
            return (
                <div className="post-comment-reply--container" key={comment.id} id={comment.id}>
                    <div className="post-comment">
                    
                        <div className="post-content">
                            <span>
                                <p className="commentAuthor">{comment.author}</p>
                                <p className="commentSubreddit">{comment.voteScore}</p>
                            </span>
                        <p>{comment.body}</p>
                        </div>
                    </div>
                    <div className="post-comment-reply">{sortComments(comment.replies,replyDepth)}</div>
                </div>
                
            );
        } else if(comment.author){
    return (
        <div className="post-comment" key={comment.id} id={comment.id} >
           <div className="post-content">
                        <span>
                            <p className="commentAuthor">{comment.author}</p>
                            <p className="commentSubreddit">{comment.voteScore}</p>
                        </span>
                    <p>{comment.body}</p>
                    </div>
        </div>
        )}
            else{ 
                return <div><p>No comments</p></div>
            }}
    )
};




const PostComments = ({postId, id}) => {
    const isLoading =  useSelector(selectComments).status;
    const allComments =  useSelector(selectComments).comments;
    const commentsArr = findComments(allComments,postId);

   if(isLoading === "pending"){
    return <div className="loader" id={id}></div>
   }
    else if (isLoading === "ok" && commentsArr){
       return  sortComments(commentsArr);
    }; 
   }; 




   

export const ShowComments = (target) =>{
    const id = target + "comments"
    const display = document.getElementById(id).style.display;
    
        if(display === "flex"){
             return document.getElementById(id).style.display = "none"
       } else {
          return document.getElementById(id).style.display = "flex"} 
} 

export default PostComments;
