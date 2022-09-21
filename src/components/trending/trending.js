import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingPosts } from "store/slices/trending/asyncThunks/getTrendingPosts";
import { selectTrendingPosts } from "../../store/slices/trending/trendingslice";
import TrendingPost from "./trendingPost";
import "./trending.css";
import { ReactComponent as TrendingUp } from "../../assets/Trending-up.svg";

const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingPosts());
  }, [dispatch]);

  const isLoading = useSelector(selectTrendingPosts).status;
  const trendingPosts = useSelector(selectTrendingPosts).posts;


  if (isLoading === "pending") {
    return <div className="loader"></div>;
  } 
  else {

  return (
    <div data-testid="component--trending" id="Trending">
      <div id="title-container"><h2>Trending</h2>
      <div className="trending-icon"><TrendingUp/></div>
      </div>
    {trendingPosts.map((post) => {
    return(
    <div className="Trending-post-container">
      {trendingPosts.length > 0 && (
        <a href={post.url}>
          <TrendingPost
          title={post.title}
          content={post.media === true? post.media.contentUrl : post.media}
          subreddit={post.subreddit}
          url={post.url}
        ></TrendingPost></a>
      )}
    </div>
    )
  })}</div>
  );
};
};

export default Trending;
