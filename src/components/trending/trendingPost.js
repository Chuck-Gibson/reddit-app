import React from "react";
import "./trending.css";
import PropTypes from "prop-types";

const TrendingPost = ({ 
  title, 
  content, 
  subreddit,
  url
}) => {
  
  const shortTitle = (str) => { // truncate title to prevent overflowing the box
    if(str.length > 100){
      return (str.slice(0,99)+ "...")
    } else { return str };
  }
  
  /* <img src={url} alt="trending post"></img> code for adding image for future use */
  return (
    <div className="TrendingPost">
      
      <p id="subreddit">{subreddit}</p>
      <p id="title">{shortTitle(title)}</p>
      {content === true? <img src={content} alt={title}></img> : null}
    </div>
  );
};

export default TrendingPost;

TrendingPost.propType = {
  title: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  url: PropTypes.string,
  content: PropTypes.object,
}