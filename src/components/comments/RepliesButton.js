import "./PostComments.css";

const RepliesButton = ({replyId}) => {
    return (<details 
        id={replyId + "button"}
        className="repliesButton" 
        onClick={() => handleClick(replyId)} 
        >
        <summary></summary>
        </details>)
};

const handleClick = (target) =>{
const shortTarget = document.getElementById(target+"replies")
const display = shortTarget.style.display;
    if(display !== "block"){
         shortTarget.style.display = "block";
    } else {
        shortTarget.style.display= "none";
    }
 
};


export default RepliesButton;