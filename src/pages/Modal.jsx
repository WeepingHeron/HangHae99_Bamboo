import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editPost, getPostByID } from "../redux/modules/postSlice";
import axios from "axios";


const Modal = ({ closeHandler, closeLabel, postId }) => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.postSlice.post);
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
    useEffect(() => {
          dispatch(getPostByID(postId));
      }, [dispatch, postId]);

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }, [post]);

    useEffect(() => {
        if (!post) {
          dispatch(getPostByID({ id: postId }));
        }
      }, [dispatch, post, postId]);
      

    const onEditPost = () => {
        axios
            .put(`http://localhost:3001/posts/${postId}`, {
                title: title,
                content: content
            })
            .then(function (response) {
                console.log(response)
                dispatch(editPost({ id:postId, title: title, content: content }));
            })
            .catch(function(error){
                console.log(error);
            });
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'content') {
            setContent(value);
        }
    };


    return (
    <div key={postId}>
        <Dimmed onClick={!closeLabel ? closeHandler : ()=>{}} />
            <StContainer className={'modal'}>
                <section>
                    {/* <main>{children}</main>
                    <div>
                        <>
                        <div className="post-title">{post ? post.title : ''}</div>
                        <div>{post ? post.content : ''}</div>
                        </>
                    </div> */}
                    <label>제목</label>
                        <input
                        type='text'
                        name='title'
                        value={title || postId?.title || ""}
                        onChange={onChangeHandler}
                        />
                    <label>내용</label>
                        <input
                        type='text'
                        name='content'
                        value={content || postId?.content || ""}
                        onChange={onChangeHandler}
                        />
                    <footer>
                        {closeLabel && (
                        <StButton className="close" onClick={closeHandler}>
                            {/* "모달 닫기" */}
                            {closeLabel}
                        </StButton>
                        )}
                        <StButton2 className="editButton" onClick={onEditPost}
                        >
                            수정하기
                        </StButton2>
                    </footer>
                </section>
            </StContainer>        
    </div>        
    );
};

export default Modal;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  z-index: 1;
  opacity: 0.8;
`


const StContainer = styled.div`
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 12px;
    padding: 24px;
    z-index: 999;
`;


const StButton = styled.button`
border: none;
cursor: pointer;
border-radius: 8px;
height: 40px;
width: 100px;
background-color: rgb(250, 177, 160);
margin: 5px;
color: rgb(214, 48,49);
bottom: 12px;
right: 117px;
position: absolute;
`;

const StButton2 = styled.button`
border: none;
cursor: pointer;
border-radius: 8px;
border: 3px solid rgb(85, 239, 196);
background-color: #fff;
height: 40px;
width: 100px;
margin: 5px;
bottom: 12px;
right: 10px;
position: absolute;
`;