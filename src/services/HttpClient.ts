import { BACKEND_API_URL } from './api/constants';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: BACKEND_API_URL,
  timeout: 9000 * 10,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.request.use(config => {
  const idToken = localStorage.getItem('token');
  config.headers.Authorization = idToken ? `Bearer ${idToken}` : '';
  return config;
});

axiosClient.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(error)
);

export default axiosClient;
