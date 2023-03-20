import React from 'react';
import useInput from 'src/hooks/useInput';
import api from 'src/axios/api';
import { signInValidation } from 'src/utils/validation';

function SignIn() {
  const [id, onChangeIdHandler] = useInput('');
  const [pw, onChangePwHandler] = useInput('');

  const onSubmitHandler = e => {
    e.preventDefault();
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
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <h1>로그인</h1> */}
      <form>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={onChangeIdHandler}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={pw}
            onChange={onChangePwHandler}
          />
        </div>
        <input
          type="submit"
          value="로그인"
          onClick={onSubmitHandler}
        />
      </form>
    </div>
  );
}

export default SignIn;
