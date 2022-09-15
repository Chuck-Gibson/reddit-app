import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "store/slices/userPosts/asyncThunks/getPosts";
import {selectTrendingPosts} from "../../store/slices/trending/trendingslice";

const Trending = () =>{
    const dispatch = useDispatch();
    const trendingPosts = useSelector(selectTrendingPosts);

    useEffect(() =>{
        dispatch(getPosts("rising"));
        
    },[dispatch]);
    return (
        <div classname="trending">

        </div>
    )
};

export default Trending;