import axios from 'axios';
import env from '../config/env';
import { getTokens, clearUserInfoAndTokens } from './userInfo';
import history from './history';

function createAxiosInstance() {
  const token = getTokens().accessToken;

  const config = {
    baseURL: env[process.env.NODE_ENV].backendUrl,
    headers: { Authorization: `Bearer ${token}` },
  };

  const api = axios.create(config);

  api.interceptors.response.use(
    response => {
      return Promise.resolve(response);
    },
    error => {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data.error).finally(() => {
          clearUserInfoAndTokens();
          history.push('/login');
        });
      }

      return error.response.data.error &&
        typeof error.response.data.error === 'string'
        ? Promise.reject(error.response.data.error)
        : Promise.reject('Erro interno do servidor: 500');
    }
  );

  return api;
}

export default createAxiosInstance;
