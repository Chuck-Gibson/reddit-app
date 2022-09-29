import { useSelector } from "react-redux";
import { selectComments } from "store/slices/comments/commentsSlice";
import "./PostComments.css";

const findComments = (allComments,postId) =>{
    const foundComments = allComments.find(post => post[0] === postId);
    if(foundComments){
        return foundComments[1];
    }
}

const sortComments = (comments) =>{
return comments.map((comment) => {
    if(comment.replies && comment.replies !== ""){
        return (
            <div className="post-comment-reply--container" key={comment.id}>
                <div className="post-comment">
                
                    <div className="post-content">
                        <span>
                            <p className="commentAuthor">{comment.author}</p>
                            <p className="commentSubreddit">{comment.voteScore}</p>
                        </span>
                    <p>{comment.body}</p>
                    </div>
                </div>
                <div className="post-comment-reply">{sortComments(comment.replies)}</div>
            </div>
            
        );
    }else {
    return (
        <div className="post-comment" key={comment.id} >
           <div className="post-content">
                        <span>
                            <p className="commentAuthor">{comment.author}</p>
                            <p className="commentSubreddit">{comment.voteScore}</p>
                        </span>
                    <p>{comment.body}</p>
                    </div>
        </div>
        )}}
    )
};



const PostComments = ({postId, id}) => {
    const isLoading =  useSelector(selectComments).status;
    const allComments =  useSelector(selectComments).comments;
    const comments = findComments(allComments,postId);

   if(isLoading === "pending"){
    return <div className="loader" id={id}></div>
   }
    else if (isLoading === "ok" && comments){
       return  sortComments(comments);
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
