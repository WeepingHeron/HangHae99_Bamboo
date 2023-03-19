import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});


instance.defaults.headers.common['Authorization'] = 'Bearer9k3kljnslkdj_34lk2j34lks09sv';

export default instance;