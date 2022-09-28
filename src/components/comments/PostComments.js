import Reply from "./Replys";
import { useSelector } from "react-redux";
import { selectComments } from "store/slices/comments/commentsSlice";





const PostComments = ({postId, id}) => {
    return
   // const comments =  useSelector(selectComments).comments
    /*comments.map((post) => {
        if(postId === post.postId ){
            console.log("test")
                 post.comments.map((comment) => {
            if(comment.replies && comment.replies !== ""){
                return (
                <div className="post-comment-reply--container">
                    <div className="post-comment">
                    <p className="comment-Spacer" style={{"border-top": "1px dashed white"}}></p><p>{comment.body}</p>
                    </div>
                    
                </div>
                
            );
        }else {
            return (
                
            <div className="post-comment" >
                <p className="comment-Spacer"  style={{"border-top": "1px dashed white"}} ></p><p>{comment.body}</p>
            </div>
            )}}
        )} else {
            return <div></div>
        } 
        
} 
)*/};




   

export const ShowComments = (target) =>{
    const id = target + "postComments"
    const display = document.getElementById(id).style.display;
    console.log(document.getElementById(id))
        if(display === "flex"){
             return document.getElementById(id).style.display = "none"
       } else {
          return document.getElementById(id).style.display = "flex"} 
} 

export default PostComments;
