import React from 'react';
import { SBoards } from 'src/styles/Boards.styled';
import OneBoard from 'src/components/OneBoard';

function Boards() {
  const props = { title: '항해99 너무 힘들어요', content: '라고 할뻔' };
  return (
    <SBoards>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
      <OneBoard {...props}></OneBoard>
    </SBoards>
  );
}

export default Boards;
