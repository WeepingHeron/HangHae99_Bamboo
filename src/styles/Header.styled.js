import styled from 'styled-components';

export const SHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 10px 20px;
  box-sizing: border-box;

  & h1 {
    font-size: 36px;
    color: #84b64e;
  }
`;

export const SHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SHeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > li {
    margin-left: 20px;
  }
`;

export const SHeaderButton = styled.button``;
