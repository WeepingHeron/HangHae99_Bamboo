import React from 'react';
import useInput from 'src/hooks/useInput';
import api from 'src/axios/api';
import { signInValidation } from 'src/utils/validation';
import { redirect } from 'react-router-dom';
import {
  SSignIn,
  SSignInForm,
  SSignInH1,
  SSignInSubmit,
  SSignInWrap,
} from 'src/styles/SignIn.styled';

function SigninForm() {
  const [id, onChangeIdHandler] = useInput('');
  const [pw, onChangePwHandler] = useInput('');

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!id || !pw) {
      alert('아이디나 비밀번호를 입력해주세요!');
      return;
    }

    const check = signInValidation(id, pw);
    if (check) sendRequest();
  };

  const sendRequest = async () => {
    const body = { email: id, password: pw };

    const response = await api
      .post('/auth/signin', body)
      .catch(error => console.error(error));

    const token = response.headers.authorization.split(' ')[1];

    localStorage.setItem('jwt', token);
    redirect('/');
  };

  return (
    <SSignIn>
      <SSignInForm>
        <SSignInH1>로그인</SSignInH1>
        <SSignInWrap>
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={onChangeIdHandler}
            required
          />
        </SSignInWrap>
        <SSignInWrap>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={pw}
            onChange={onChangePwHandler}
            required
          />
        </SSignInWrap>
        <SSignInSubmit type="submit" value="로그인" onClick={onSubmitHandler} />
      </SSignInForm>
    </SSignIn>
  );
}

export default SigninForm;
