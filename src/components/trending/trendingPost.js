import React from "react";
import "./trending.css"

const TrendingPost = ({title,content,subreddit,url}) =>{
    console.log(title)

    return (
        <div className="TrendingPost">
            <p id="subreddit">{subreddit}</p>
            <p id="title"><a href={url}>{title}</a></p>
            {content === true && <img src={content} alt={title}></img>}
            </div>
    )
};

export default TrendingPost;