// Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
// However, RTK's createSlice and createReducer APIs use Immer inside to allow us to write 'muatating' update logic that becomes correct immutable updates.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    post: {
        id: '0',
        title: '',
        type: '',
        content: '',
    },
};

const asyncUpFetch = createAsyncThunk(                                                     // action creator, 2개의 parameter 필요 (action type, 실제로 일을 할 함수 )
    'postSlice/asyncupFetch',
    async () => {
        const resp = await fetch('http://localhost:3000')
        const data = await resp.json();
        return data.value;
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {                                                                             // 동기 작업, toolkit이 자동으로 action creator 만들어줌
        addPost: (state, action) => {
            state.post = [...state.post, action.payload]
        },

        deletePost: (state, action) => {
            state.post = state.post.filter((post) => post.id !== action.payload)
        },

        // editPost: (state, action) => {
        //     state.post = 
        // },
    },
    });

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
export { asyncUpFetch };