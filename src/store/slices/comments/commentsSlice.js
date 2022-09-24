import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "./asyncThunks/getComments";


const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments:[{comment : "test comment"}],
        status: "ok"
    },
    reducers:{
        handleClick: (postId) =>{
            getComments(postId)
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(getComments.pending, (state, action) => {
            state.status = "pending"
        })
        .addCase(getComments.fulfilled, (state,action) => {
            state.status = "ok"
            if(!state.comments.includes(action.payload[0].postId)){
                 const payload = {
                    postId:action.payload[0].postId,
                    comments:action.payload
                    };
                state.comments = [payload, ...state.comments]
            }
        })
        .addCase(getComments.rejected, (state, action) =>{
            state.status = "error";
        })
    },
})

export const selectComments = (state) => state.comments;
export const {handleClick} = commentsSlice.actions;
export default commentsSlice.reducer;