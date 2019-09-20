import api from '../../services/api';

const login = async (username, password) => {
  return api.post(`login`, {
    username,
    password,
  });
};

export { login };
