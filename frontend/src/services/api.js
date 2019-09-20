import axios from 'axios';
import env from '../config/env';

console.log(env[process.env.NODE_ENV].backendUrl);

export default axios.create({ baseURL: env[process.env.NODE_ENV].backendUrl });
