import axios from 'axios';

const instance = axios.create({
    baseURL: "heroku-api-URL"
});

export default instance;