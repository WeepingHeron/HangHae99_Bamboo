import styled from 'styled-components';

export const SBoards = styled.div`
  /* width: 100vw; */
  height: 90vh;
  margin: 92px 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;

export const SOneBoard = styled.div`
  border-radius: 10px;
  padding: 30px;
  max-width: 400px;
  border-radius: 10px;
  background-color: lightpink;

  & > h1 {
    margin-bottom: 30px;
    font-size: 36px;
  }

  & > p {
    font-size: 24px;
  }
`;
