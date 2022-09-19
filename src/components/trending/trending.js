import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingPosts } from "store/slices/trending/asyncThunks/getTrendingPosts";
import { selectTrendingPosts } from "../../store/slices/trending/trendingslice";
import TrendingPost from "./trendingPost";
import "./trending.css";

const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingPosts());
  }, [dispatch]);

  const isLoading = useSelector(selectTrendingPosts).status;
  const trendingPosts = useSelector(selectTrendingPosts).posts;
  // console.log(trendingPosts);
 if (isLoading === "pending") {
    return <div> Loading trending</div>;
  } 
  else {

  return (trendingPosts.map((post) => {
    return(
    <div className="Trending">
      {trendingPosts.length > 0 && (
        <TrendingPost
          title={post.title}
          content={post.media === true && post.media.contentUrl}
          subreddit={post.subreddit}
          url={post.url}
        ></TrendingPost>
      )}
    </div>
    )
  }));
};
};

export default Trending;
