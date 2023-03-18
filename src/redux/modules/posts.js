import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [
        {
            id: '5',
            title: '게시글5',
            type: '공지',
            content: '내용5',
        },
    ],
    post: {
        id: '0',
        title: '',
        type: '',
        content: '',
    },
};

export const __getPost = createAsyncThunk(
    'post/getPost',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('/api/posts');
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },

        // editPost: (state, action) => {
        //     state.posts = 
        // }
    },
});

export const { addPost, deletePost } = posts.actions;
export default posts.reducer;