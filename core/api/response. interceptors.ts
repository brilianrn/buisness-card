import { http } from './api';

http.interceptors.response.use(async (config) => {
  return config;
});
