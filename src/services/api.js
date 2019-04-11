import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-manoel.herokuapp.com'
});

export default api;