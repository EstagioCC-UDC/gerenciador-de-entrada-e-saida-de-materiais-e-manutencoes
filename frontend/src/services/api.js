import axios from 'axios';
import env from '../config/env';
import { getTokens } from './userInfo';

const token = getTokens().accessToken;

export default axios.create({
  baseURL: env[process.env.NODE_ENV].backendUrl,
  headers: { Authorization: `Bearer ${token}` },
});
