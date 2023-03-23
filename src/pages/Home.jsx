// We can read data from the store with useSelector, and dispatch actions using useDispatch.
// Now, any time you click the 'addPost' and 'deletePost' buttons:
// * The corresponding Redux actoin will be dispatched to the store
// * The post slice reducer will see the actions and update its state
// * The <App> component will see the new state value from the store and re-render itself with the new data

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost, getPostsThunk } from "../redux/modules/postSlice";
import Modal from "./Modal";

function Home() {

    const dispatch = useDispatch()    // useDispatch로 전달

    useEffect(() => {
        dispatch(getPostsThunk());
    }, [dispatch])

    const posts = useSelector((state) => state.postSlice.posts)   // useSelector로 꺼내서

    const onDeletePost = (postId) => {
        axios
        .delete(`http://localhost:3001/posts/${postId}`)
        .then (function(){dispatch(deletePost(postId))})
        .catch(function(error){console.error(error)});
    };            

    const [post, setPost] = useState({    // useState 이용해 상태 관리
        id: 0,
        title: '',
        content:''
    })
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
        if (post.title.trim() === "" || post.content.trim() === "") return;
    
        axios
          .post("http://localhost:3001/posts", {
            title: post.title,
            content: post.content,
          })
          .then(function (response) {
            console.log(response);
            dispatch(addPost({ ...response.data, id: posts.length + 1 }));
            setTitle("");
            setContent("");
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    
      
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => setModalOpen(false)


    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <label>제목</label>
            <input
                type='text'
                name='title'
                value={title}
                onChange={onChangeHandler}
            />
            <label>내용</label>
                <input
                type='text'
                name='content'
                value={content}
                onChange={onChangeHandler}
                />
                <button type="submit">
                    게시하기
            </button>
                <div>
            {posts?.map((post) => {
                return (    // useSelector로 redux에서 꺼내 온 기존 글
                    <div key={post.id}>
                    <h2 className="post-title">{post.title}</h2>
                    <div>{post.content}</div>
                        <button
                            onClick={()=>setModalOpen(true)}>
                                수정하기
                            </button>
                            {modalOpen &&
                            <Modal closeHandler={closeModal} closeLabel='닫기'></Modal>}
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