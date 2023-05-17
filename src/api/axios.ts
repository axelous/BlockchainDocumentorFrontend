import axios from 'axios';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'consts/localStorage';

export const axiosInstance = axios.create({ baseURL: 'http://127.0.0.1:8000/' });

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)}`;
    return config;
});
