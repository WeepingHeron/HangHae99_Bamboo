import React from 'react';
import useInput from 'src/hooks/useInput';

function Signin() {
  const [id, onChangeIdHandler] = useInput('');
  const [pw, onChangePwHandler] = useInput('');
  const [username, onChangeUsernameHandler] = useInput('');
  const [type, onChangeTypeHandler] = useInput('');

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
      <form>
        <div>
          <label htmlFor="">아이디</label>
          <input
            type="email"
            value={id}
            onChange={onChangeIdHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="">패스워드</label>
          <input
            type="password"
            value={pw}
            onChange={onChangePwHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="">닉네임</label>
          <input
            type="text"
            value={username}
            onChange={onChangeUsernameHandler}
            required
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
          onClick={e => {
            e.preventDefault();
            console.log(id, pw, username, type);
          }}
        />
      </form>
    </div>
  );
}

export default Signin;
