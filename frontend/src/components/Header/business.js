import api from '../../services/api';
import { getTokens } from '../../services/userInfo';

const logout = () => {
  const { refreshToken } = getTokens();
  return api.post('logout', {
    refresh_token: refreshToken,
  });
};

export default logout;
