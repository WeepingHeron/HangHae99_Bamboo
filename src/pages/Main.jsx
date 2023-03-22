import React from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import {
  SMainButton,
  SMainComponent,
  SMainH1,
  SMainP,
} from 'src/styles/Main.styled';

import panda from 'src/assets/home-panda.png';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <Header />
      <SMainComponent>
        <div>
          <SMainH1>항해 대나무숲</SMainH1>
          <SMainP>항해99 선원들을 위한 익명 커뮤니티 서비스</SMainP>
          <Link to="/board">
            <SMainButton>대나무숲 이용하기</SMainButton>
          </Link>
        </div>
        <img src={panda} alt="홈이미지" />
      </SMainComponent>
      <Footer />
    </>
  );
}

export default Main;
