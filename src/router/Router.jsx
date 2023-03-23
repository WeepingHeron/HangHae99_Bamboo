import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Board from 'src/pages/Board';
import Main from 'src/pages/Main';
import SignIn from 'src/pages/SignIn';
import SignUp from 'src/pages/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
