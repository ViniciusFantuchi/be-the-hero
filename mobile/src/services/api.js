import axios from 'axios';

const newLocal = 'http://192.168.0.16:3333';

const api = axios.create({
    baseURL: newLocal
})

export default api;