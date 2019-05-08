import axios from 'axios';
import { Message } from 'element-ui';
// import store from '../store';
// import { getToken } from '@/utils/auth';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 5000,
});

// service.interceptors.request.use(
//   (config) => {
//     if (store.getters.token) {
//       config.headers['X-Token'] = getToken();
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
