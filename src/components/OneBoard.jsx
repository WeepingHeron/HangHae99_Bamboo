import React from 'react';
import { SOneBoard } from 'src/styles/Boards.styled';

function OneBoard({ title, content }) {
  return (
    <SOneBoard>
      <h1>{title}</h1>
      <p>{content}</p>
    </SOneBoard>
  );
}

export default OneBoard;
