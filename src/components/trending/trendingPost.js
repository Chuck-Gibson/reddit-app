import React from "react";
import "./trending.css";
import PropTypes from "prop-types";
import {addTrending} from "../../store/slices/userPosts/userPosts"
import { useDispatch} from "react-redux";

const TrendingPost = ({ 
  title, 
  content, 
  subreddit,
  url,
  id,
  post
}) => {
  const dispatch = useDispatch();
  const shortTitle = (str) => { // truncate title to prevent overflowing the box
    if(str.length > 100){
      return (str.slice(0,99)+ "...")
    } else { return str };
  }

 
  return (
    <div data-testid="TrendingPosts-component--Post" 
          className="TrendingPost" 
          onClick={() => dispatch(addTrending(post))} >
      {/*<img src={url} alt="trending post"></img> code for adding image for future use */}
      <p className="trendingPost--info-subreddit">{subreddit}</p>
      <p className="trendingPost--info-title">{shortTitle(title)}</p>
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