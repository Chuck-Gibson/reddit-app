import Reply from "./Replys";
import { useSelector } from "react-redux";
import { selectComments } from "store/slices/comments/commentsSlice";





const PostComments = ({postId}) => {
    const comments =  useSelector(selectComments).comments.slice(0,5)
    
       return sortComments(comments);
        
    }


    const sortComments = (comments) =>{
        console.log(comments);
    return comments.map((comment) => {
        if(comment.replies && comment.replies !== ""){
            return (
                <div className="post-comment-reply--container">
                    <div className="post-comment">
                    <p className="comment-Spacer" style={{"border-top": "1px dashed white"}}></p><p>{comment.body}</p>
                    </div>
                    <div className="post-comment-reply" style={{"padding-left":"1.5rem"}}>{sortComments(comment.replies)}</div>
                </div>
                
            );
        }else {
        return (
            <div className="post-comment" >
                <p className="comment-Spacer"  style={{"border-top": "1px dashed white"}} ></p><p>{comment.body}</p>
            </div>
            )}}
        )
};

 export const ShowComments = (target) =>{
    const id = target + "postComments"
    console.log(id)
    const display = document.getElementById(id).style.display;
        if(display === "flex"){
            document.getElementById(id).style.display = "none"
       } else {
          document.getElementById(id).style.display = "flex"} 
} 

export default PostComments;
