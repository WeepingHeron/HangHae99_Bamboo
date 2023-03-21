// Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
// However, RTK's createSlice and createReducer APIs use Immer inside to allow us to write 'muatating' update logic that becomes correct immutable updates.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getPostsThunk = createAsyncThunk('getPosts', async(payload, thunk) => {
    //서버에서 가져오는 로직
    const data = await axios.get('http://localhost:3001/posts')
    console.log(data.data)
    // 서버에서 가져온 posts를 store에 넣기
    return thunk.fulfillWithValue(data.data)
})

const initialState = {
    posts: [], post:{}
};

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPostsThunk.fulfilled]: (state, action) => {state.posts = action.payload}
    }
    });

export default postSlice;
export const { addPost, deletePost } = postSlice.actions;