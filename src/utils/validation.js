// email: '길이 6 ~ 50',
// password: '길이 8 ~ 15, 알파벳 대소문자(a~z, A~Z), 숫자(0~9), 특수문자',
// username: '길이 4 ~ 10, 알파벳 소문자(a~z), 숫자(0~9)',

const idRegex = new RegExp('[\\w-\\.]+@([\\w]+\\.)+[\\w.]{2,4}');
const pwRegex = new RegExp(
  '[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?]+'
);
const usernameRegex = new RegExp('^[a-z0-9]+');

const Validation = {
  email: id => idRegex.test(id),
  username: username => usernameRegex.test(username),
  password: pw => pwRegex.test(pw),
};

const signUpValidation = (id, pw, username) => {
  if (!Validation.email(id)) return false;
  if (!Validation.password(pw)) return false;
  if (!Validation.username(username)) return false;
  console.log('회원가입 유효성 검증을 통과했습니다.');
  return true;
};

const signInValidation = (id, pw) => {
  if (!Validation.email(id)) return false;
  if (!Validation.password(pw)) return false;
  console.log('로그인 유효성 검증을 통과했습니다.');
  return true;
};

export { Validation, signUpValidation, signInValidation };
