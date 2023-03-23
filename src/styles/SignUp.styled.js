import styled from 'styled-components';

export const SSignUp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SSignUpForm = styled.form`
  /* border: 1px solid black; */
  background-color: #84b64e;
  color: white;
  border-radius: 10px;
  padding: 40px;
`;

export const SSignUpH1 = styled.h1`
  margin-bottom: 20px;
`;

export const SSignUpWrap = styled.div`
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

export const SSignUpSubmit = styled.input`
  background-color: salmon;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: inherit;
  cursor: pointer;
`;
