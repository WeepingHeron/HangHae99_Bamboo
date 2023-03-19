// creates a Redux store, and also automatically configure the Redux Devtools extension so that you can inspect the sore while developing.

import { configureStore } from "@reduxjs/toolkit";
import postSlice from '../modules/postSlice';

const store = configureStore({
    reducer: { postSlice: postSlice },
});

export default store;