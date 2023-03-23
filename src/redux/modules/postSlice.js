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
        },

        editPost: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },

        getPostByID: (state, action) => {
            const postId = action.payload;
            state.post = state.posts.find((post) => post.id === postId);
          },
          
        
    },
    extraReducers: {
        [getPostsThunk.fulfilled]: (state, action) => {
          return { ...state, posts: action.payload };
        }
      }
      
    });

export default postSlice;
export const { addPost, deletePost, editPost, getPostByID } = postSlice.actions;

// 1. 화면에 addPost로 해서 내용 띄우기

/* 
    1) DB에 get 요청을 보내서 데이터를 받아온다
    2) 받아온 데이터를 화면에 렌더링한다

    태훈님 의견
    1. post 요청을 보낸다
    2. get 요청으로 받아서
    3. 리렌더링한다 <<< 리덕스로 상태 변화

    제 의견
    1. post 요청을 보낸다
    2. 리렌더링한다 <<< 리덕스로 상태 변화

    2 바뀐 데이터를 어떻게 반영시켜서 렌더링을 시켜야 하나?
        0. 리렌더링
            상태 = 객체 => a = { b : 1 }  a => &20, value &30(b의 주소)  b => &40, value : 1
            
        1. 어떻게 하면 변수(객체를 담은)의 주소값을 바꿀 수 있을까
            - 원래 post 객체
                const a = {
                    id: 0,
                    title: '',
                    content:''
                }
            - 안의 내용은 같은데 변수 주소값만 바꾸는 방법 : 안의 내용만 가져와서 새 객체에 할당만 해주면 됩니다
                const b = a << 
                결론 : 주소값이 달라져야 한다. 새 객체로 할당해서
        
        2. 리렌더링 이해, 상태 변화 감지를 어떻게 하는지 알았다. -> 그래서 어떻게 반영해?

        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },

        redux -> store, reducer, state, dispatch, action, useSelect

        store(data) => useSelect : 꺼내쓰는거
        변화가 일어나면 -> dispatch()를 이용해서 reducer에 전달
        dispatch 함수는 action 함수를 reducer로 전달

        reducer에는 action 함수 : 어떤 동작을 할 지 정의하는 친구,

            reducers: {
                addPost: (state, action) => {
                    state.posts = [...state.posts, action.payload]
                },

                deletePost: (state, action) => {
                    state.posts = state.posts.filter((post) => post.id !== action.payload)
                }
            },


        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        }, -> 정상적으로 주소값이 바뀌었는지 check

        dispatch(액션함수) -> 이런식으로 상태가 변화됐을 때 이 함수를 사용하고 있는지 check

        목표 : 새로 작성된 글을 기존 글 목록에 반영하고 싶다

        0. 반영하려면 = 보이려면 렌더링을 다시 해야한다

        1. 리렌더링 -> 상태의 주소값이 변화되면 일어난다

        2. 우리는 주소값을 변화시켜야 한다 (상태의 값은 기본이고)

        3. 새로 작성된 글 관련 상태의 데이터는 있다. 

        4. 원래 기존 글 목록을 보여줄때는 리덕스에서 꺼내서 보여준다

        5. 리덕스 상태를 변화시키는 게 목표 : 얘는 dispatch, action func를 이용해 변화

             addPost: (state, action) => {
                state.posts = [...state.posts, action.payload]
            }, -> 정상적으로 주소값이 바뀌었는지 check

            dispatch(액션함수) -> 이런식으로 상태가 변화됐을 때 이 함수를 사용하고 있는지 check

        6. reducer에 액션 함수를 먼저 정의한다
            - 새로운 글이 생겼을 때 / 기존 글 목록에 새로운 글을 넣는다
            
            새로운 글이 생겼을 때 = addPost
            기존 글 목록에 새로운 글을 넣는다 = (state, action) => {
                    state.posts = [...state.posts, action.payload]
                },

            - 어떤 동작이 일어났을 때, 무엇을 한다

        7. 글(상태)이 변화하면 dispatch(액션 함수)를 이용해 리듀서에 알려준다

        dispatch(addPost(obj))

        addPost : reducer에 기재된 액션 함수
        addPost의 인수 obj : action 객체 = type, payload
        
*/

// 2. 게시글 수정 기능

/* 
    절차 : 기존 글 목록 > 상세 내용 확인 > 수정

    상세 내용 확인에서 이 글의 데이터를 확인할 수 있다

    가지고 있는 데이터를 수정만 하면 된다


    방법

    1. 글 데이터가 있다

    2. 데이터를 화면에 수정가능하도록 보여주는 거

    3. 유저가 무언가를 수정한다 

    4. 수정한 내용을 저장 버튼을 눌렀을 때 반영이 되어야 한다

      - dispatch로 액션 함수를 보내서 반영하면 된다 : 같은 id를 찾아서 해당 내용을 넣는다 + 주소값 바뀌어야 한다

    경우 1. 제목과 내용이 보이는 글 -> 기존 화면에 글 리렌더링이 일어나야 되는 경우
    경우 2. 제목만 보이는 글, 눌러서 내용을 확인해야 하는 글 (기존 글 목록 > 상세 내용 확인 > 수정 절차를 지키는 게시판) -> 수정에서 내용을 보여주는게 아니죠. 상세 내용 확인에서 보여주죠. 또는, 기존 글 목록에서 보여줍니다.


    우리 경우 : 제목과 내용이 보이는 글 -> 기존 화면에 글 리렌더링이 일어나야 되는 경우 = 1번과 동일

    목표 : 수정된 내용이 기존 화면에 반영되어야 하는 거

        0. 반영하려면 = 보이려면 렌더링을 다시 해야한다

        1. 리렌더링 -> 상태의 주소값이 변화되면 일어난다

        2. 우리는 주소값을 변화시켜야 한다 (상태의 값은 기본이고)

        3. 수정된 글 관련 상태의 데이터는 있다. 
            <<<< 새로운 페이지(수정 페이지)로 가서 데이터를 뽑아낸다 : 모달이 안되면 이쪽으로 가자.
            <<<< 기존 페이지에서 데이터를 뽑아낸다 O

            <<<< 우리가 필요한건 수정된 글의 데이터

            <<<< 결론적으로 기존 페이지에서 글을 수정할 수 있는 UI를 보여줘야해요
            <<<< 모달(o) 또는 기존 글 컴포넌트의 형태를 바꿔서 할 수 있겠죠 (X)

            <<<< 모달을 쓰면 된다

         => 3번까지는 처음 질문과 동일.

        4. 제목과 내용들(=글들)을 보여줄때는 (서버로 받아서 리덕스에 저장) 리덕스에서 꺼내서 보여준다

        5. 리덕스 상태를 변화시키는 게 목표 : 얘는 dispatch, action func를 이용해 변화

        6. reducer에 액션 함수를 먼저 정의한다

            editPost: (state, action) => {
                1. 글 하나니까 해당 글을 찾는게 우선
                  - id를 이용해서 수정된 글의 아이디를 찾으면 해당 글을 찾는다 <<<< 할 수 있다
                2. 수정된 내용을 원래 상태에 반영 <<< 할 수 있다
                3. 주소값 변경 <<< 할 수 있다
            }, 

            => 상태 변경, 액션 함수가 일어나면 리렌더링된다

        7. 글(상태)이 변화하면 dispatch(액션 함수)를 이용해 리듀서에 알려준다

        => 그러면 모든게 해피엔딩 

*/