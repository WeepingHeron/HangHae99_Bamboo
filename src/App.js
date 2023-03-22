import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsThunk } from './redux/modules/postSlice'
import Home from './pages/Home'

const App = () => {
  const posts = useSelector((state) => state)
  const dispatch = useDispatch();
  console.log(posts)
  return <div>
    <button onClick={() => dispatch(getPostsThunk())}>dsfas</button>
    <Home />
    </div>
}

export default App