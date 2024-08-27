import axios from 'axios';

export const Api = axios.create({
    baseURL: __API__,
    headers: {},
});
