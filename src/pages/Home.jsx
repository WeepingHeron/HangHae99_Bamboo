// We can read data from the store with useSelector, and dispatch actions using useDispatch.
// Now, any time you click the 'addPost' and 'deletePost' buttons:
// * The corresponding Redux actoin will be dispatched to the store
// * The post slice reducer will see the actions and update its state
// * The <App> component will see the new state value from the store and re-render itself with the new data

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "../redux/modules/postSlice";
import { getPostsThunk } from "../redux/modules/postSlice";

function Home() {

  const dispatch = useDispatch()    // useDispatch로 전달

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch])

  const posts = useSelector((state) => state.posts)   // useSelector로 꺼내서

  const onDeletePost = (id) => {
    dispatch(deletePost(id));       // action 함수를 reducer로 전달
  };

const onAddPost = () => {
    axios.post('http://localhost:3001/posts', {     // post 요청을 보낸다
      id: 0,
      title: post.title,
      content: post.content
    })
    .then(function (response) {
      console.log(response);    // 추가된 게시물을 Redux store에 추가한다
      dispatch(addPost(response.data));
      setPost({     // 입력폼 초기화
        id: 0,
        title: '',
        content:''
      });
      setID(id + 1);
    })
    .catch(function (error) {
      console.log(error);
    });
  };  

  const [post, setPost] = useState({    // useState 이용해 상태 관리
    id: 0,
    title: '',
    content:''
  })
  const [id, setID] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
        setTitle(value);
        setPost({...post, title: value});
    } else if (name === 'content') {
        setContent(value);
        setPost({...post, content: value});
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (post.title.trim() === '' || post.content.trim() === '') return;

    dispatch(addPost({ id: 0, title, content}));   // onChangeHandler에서 setPost 받아서 사용중
    setTitle('');
    setContent('');
  };


  return (
    <>
      <form onSubmit={onSubmitHandler}>
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
            <button
            onClick={() => onAddPost(post.id)}
            >
                게시하기
        </button>
        <div>
        {posts?.map((post) => {
            return (    // useSelector로 redux에서 꺼내 온 기존 글
                <div key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <div>{post.content}</div>
                    <button
                        onClick={() => onDeletePost(post.id)}
                    >
                        삭제하기
                    </button>
                </div>
            )
        })}
        </div>
      </form>
    </>
  )
}

export default Home;

// posts가 undefined인지 - if문: 조건부 렌더링
// -옵셔널 체이닝