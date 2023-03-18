import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

{
    "access_token": "9k3kljnslkdj_34lk2j34lks09sv",
    "userId": 123
}

instance.defaults.headers.common['Authorization'] = USER_TOKEN;

export default instance;