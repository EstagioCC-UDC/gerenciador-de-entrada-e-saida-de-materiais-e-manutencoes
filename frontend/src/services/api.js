import axios from 'axios';
import env from '../config/env';
import { getTokens } from './userInfo';

const token = getTokens().accessToken;

const api = axios.create({
  baseURL: env[process.env.NODE_ENV].backendUrl,
  headers: { Authorization: `Bearer ${token}` },
});

api.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    return error.response.data.error
      ? Promise.reject(error.response.data.error)
      : Promise.reject('Erro interno do servidor: 500');
  }
);

export default api;
