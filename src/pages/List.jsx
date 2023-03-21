// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPost, deletePost } from "../redux/modules/postSlice";
// import { Link } from "react-router-dom";

// const List = () => {
//     const dispatch = useDispatch();
//     const post = useSelector((state) => state.post);

//     const onAddPost = (id) => {
//         dispatch(addPost(id));
//     };

//     const onDeletePost = (id) => {
//         dispatch(deletePost(id));
//     };

//     return (
//         <div>
//             <h2>목록</h2>
//             <div>
//                 {post.map((post) => {
//                     return (
//                         <div key={post}>
//                             <Link to={`/${post.id}`} key={post.id}>
//                                 <div>상세보기</div>
//                             </Link>
//                             <div>
//                                 <h2 className="post-title">{post.title}</h2>
//                                 <div>{post.content}</div>
//                         </div>
//                     )
//                 })
//             </div>
//         </div>
//     )
// }

// export default  List;