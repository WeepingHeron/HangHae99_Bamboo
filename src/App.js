import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "./redux/modules/posts";

const App = () => {
  console.log('hello');
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );

};

export default App;