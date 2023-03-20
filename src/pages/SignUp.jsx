import React from 'react';
import useInput from 'src/hooks/useInput';
import api from 'src/axios/api';
import { signUpValidation } from 'src/utils/validation';

function SignUp() {
  const [id, onChangeIdHandler] = useInput('');
  const [pw, onChangePwHandler] = useInput('');
  const [username, onChangeUsernameHandler] = useInput('');
  const [type, onChangeTypeHandler] = useInput('');

  // 이름 리팩토링 필요 : 이건 요청만 다루는 작업이잖아
  const onSubmitEventHandler = async () => {
    const body = {
      email: id,
      password: pw,
      username: username,
      admin: type === 'admin' ? true : false,
      adminToken: '',
    };
    // console.log(body);

    const response = await api
      .post('/auth/signup', body)
      .catch(error => console.error(error.response.data));

    // error시 response 형식
    // {
    //    "errorMessage": "중복된 username 입니다.",
    //    "httpStatus": "BAD_REQUEST"
    // }

    // 구현할 로직
    // 정상 응답 : 로그인 페이지로 리다이렉트
    // 오류 응답 : 유저에게 알림

    // 오류 메시지를 알려주면 좋을텐데.. 이거 하려면 또 정규식 필요하고 또 테스트 필요한데
    // 오류 메시지는 알았는데 유효성 검증 어차피 해야되네?

    console.log(response);
  };

  // email, 패스워드 검증 필요
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <h1>회원가입</h1> */}
      <form>
        <div>
          <label htmlFor="">아이디</label>
          <input
            type="email"
            value={id}
            onChange={onChangeIdHandler}
            required
            maxLength="50"
            minLength="6"
          />
        </div>
        <div>
          <label htmlFor="">패스워드</label>
          <input
            type="password"
            value={pw}
            onChange={onChangePwHandler}
            required
            maxLength="15"
            minLength="8"
          />
        </div>
        <div>
          <label htmlFor="">닉네임</label>
          <input
            type="text"
            value={username}
            onChange={onChangeUsernameHandler}
            required
            maxLength="10"
            minLength="4"
          />
        </div>
        <div>
          <label htmlFor="">회원 종류</label>
          <input
            type="text"
            value={type}
            onChange={onChangeTypeHandler}
            required
          />
        </div>
        <input
          type="submit"
          value="회원가입"
          onClick={e => {
            e.preventDefault();
            const check = signUpValidation(id, pw, username);
            if (check) onSubmitEventHandler();
          }}
        />
      </form>
    </div>
  );
}

export default SignUp;
