import axios from 'axios';
import env from '../config/env';

export default axios.create({ baseURL: env[process.env.NODE_ENV].backendUrl });
