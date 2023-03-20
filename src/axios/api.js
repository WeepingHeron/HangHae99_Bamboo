import axios from 'axios';

const instance = axios.create({
  // baseURL: process.env.REACT_APP_JSON_SERVER_URL,
  baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
  // baseURL: process.env.REACT_APP_ONLY_AUTH_SERVER_URL,
});

instance.interceptors.request.use(
  request => {
    console.log('인터셉트 요청 성공!');
    console.log(request);
    return request;
  },
  error => {
    console.log('인터셉트 요청 오류!');
    console.error(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    console.log('인터넵트 응답 받았어요!');
    console.log(response);
    return response;
  },
  error => {
    console.log('인터셉트 응답 못받았어요...ㅠㅠ');
    console.error(error);
    return Promise.reject(error);
  }
);

export default instance;
