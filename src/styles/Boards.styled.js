import styled from 'styled-components';

export const SBoards = styled.div`
  /* width: 100vw; */
  height: 90vh;
  margin: 92px 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
`;

export const SOneBoard = styled.div`
  border-radius: 10px;
  padding: 30px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  & > h1 {
    margin-bottom: 30px;
    font-size: 28px;
  }

  & > p {
    font-size: 20px;
  }
`;
