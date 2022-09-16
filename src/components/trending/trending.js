import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingPosts } from "store/slices/trending/asyncThunks/getTrendingPosts";
import {selectTrendingPosts} from "../../store/slices/trending/trendingslice";
import TrendingPost from "./trendingPost";
import "./trending.css";


const Trending = () =>{
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getTrendingPosts());

    },[dispatch]);

    const trendingPosts = useSelector(selectTrendingPosts).posts;
    console.log(trendingPosts);
    return (
        <div className="Trending">
            {trendingPosts.length > 0 && <TrendingPost
                title={trendingPosts[0].title} 
                content={trendingPosts[0].media === true && trendingPosts[0].media.contentUrl  }
                subreddit={trendingPosts[0].subreddit }
                url={trendingPosts[0].url}>
            </TrendingPost>}
        </div>
    )
};

export default Trending;