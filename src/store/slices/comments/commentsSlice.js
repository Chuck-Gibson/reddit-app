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
            const payload = [action.payload[0].postId, action.payload]
                let stateCopy = state.comments.slice(); 
            const newState = stateCopy.filter((item) => item[0] !== payload[0])
                newState.push(payload)
                state.comments = newState;
                state.status = "ok"
        })
        .addCase(getComments.rejected, (state, action) =>{
            state.status = "error";
            console.log(state.status)
        })
    },
})

export const selectComments = (state) => state.comments;
export const {handleClick} = commentsSlice.actions;
export default commentsSlice.reducer;