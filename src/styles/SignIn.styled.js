import styled from 'styled-components';

export const SSignIn = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SSignInForm = styled.form`
  /* border: 1px solid black; */
  background-color: darkgray;
  color: white;
  border-radius: 10px;
  padding: 40px;
`;

export const SSignInH1 = styled.h1`
  margin-bottom: 20px;
`;

export const SSignInWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;

  & > label {
    margin-right: 30px;
  }

  & > input {
    font-size: 20px;
    border-radius: 5px;
  }
`;

export const SSignInSubmit = styled.input`
  background-color: salmon;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: inherit;
  cursor: pointer;
`;
