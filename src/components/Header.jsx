import React from 'react';
import { Link, redirect } from 'react-router-dom';
import {
  SHeader,
  SHeaderButton,
  SHeaderUl,
  SHeaderWrap,
} from 'src/styles/Header.styled';

function Header() {
  const isJwt = localStorage.getItem('jwt');

  const onSignOutHandler = () => {
    localStorage.removeItem('jwt');
    console.log('jwt 토큰 삭제됨');
    redirect('/');
  };

  return (
    <SHeader>
      <SHeaderWrap>
        <Link to="/">
          <h1>항해 대나무숲</h1>
        </Link>
        <nav>
          <SHeaderUl>
            <li>
              <Link to="/board">대나무숲</Link>
            </li>
            <li>
              {isJwt ? (
                <SHeaderButton onClick={onSignOutHandler}>
                  로그아웃
                </SHeaderButton>
              ) : (
                <Link to="/signin">로그인</Link>
              )}
            </li>
          </SHeaderUl>
        </nav>
      </SHeaderWrap>
    </SHeader>
  );
}

/* */

export default Header;

// Header.propTypes = {};
