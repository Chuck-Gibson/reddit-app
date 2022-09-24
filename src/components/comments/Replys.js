import React from "react";
import Comment from "./PostComments";


const Reply = ({comments}) =>{

    return (
        <Comment comments={comments}/>
    )
}

export default Reply;