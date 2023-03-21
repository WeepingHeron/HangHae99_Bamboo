// We can read data from the store with useSelector, and dispatch actions using useDispatch.
// Now, any time you click the 'addPost' and 'deletePost' buttons:
// * The corresponding Redux actoin will be dispatched to the store
// * The post slice reducer will see the actions and update its state
// * The <App> component will see the new state value from the store and re-render itself with the new data

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "../redux/modules/postSlice";
import { getPostsThunk } from "../redux/modules/postSlice";
import { Link } from "react-router-dom";

function Home() {
  const posts = useSelector((state) => state)
  const dispatch = useDispatch()

  const [post, setPost] = useState({
    id: 0,
    title: '',
    content:''
  })
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPost({...post, [name]: value});
  }
  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   if (post.title.trim() === '' || post.body.trim() === '') return;

  //   dispatch(addPost({...post, }));
  //   setPost({
  //     id: 0,
  //     title: '',
  //     content: ''
    // })
  // }

  useEffect (() => {
    dispatch(getPostsThunk())
  }, [dispatch])

  return (
    <>
      <form>
        <label>제목</label>
          <input
            type='text'
            name='title'
            value={post.title}
            onChange={onChangeHandler}
          />
        <label>내용</label>
          <input
            type='text'
            name='content'
            value={post.content}
            onChange={onChangeHandler}
          />
          <button>게시하기</button>
      </form>
    </>
  )
}

export default Home;

// useEffect