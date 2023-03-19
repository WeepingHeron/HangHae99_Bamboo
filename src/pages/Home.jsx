// We can read data from the store with useSelector, and dispatch actions using useDispatch.
// Now, any time you click the 'addPost' and 'deletePost' buttons:
// * The corresponding Redux actoin will be dispatched to the store
// * The post slice reducer will see the actions and update its state
// * The <App> component will see the new state value from the store and re-render itself with the new data

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost,deletePost } from "../redux/modules/postSlice";

function Home() {
  const post = useSelector((state) => state.post.title)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button
          aria-label="addPost"
          onClick={() => dispatch(addPost())}
        >
          addPost
        </button>
        <span>{post}</span>
        <button
          aria-label="deletePost"
          onClick={() => dispatch(deletePost())}
        >
          deletePost
        </button>
      </div>
    </>
  )
}

export default Home;