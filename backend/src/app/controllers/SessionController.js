import * as Yup from 'yup';
import axios from 'axios';
import qs from 'querystring';

import authConfig from '../../config/auth';

class SessionController {
  async login(req, res) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Usuário ou senha inválidos' });
    }

    const {
      keycloakBaseUrl,
      keycloakRealm,
      keycloakTokenPath,
      keycloakClientId,
    } = authConfig;

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const { username, password, refresh_token } = req.body;

    const requestBody = refresh_token
      ? {
          client_id: keycloakClientId,
          grant_type: 'refresh_token',
          refresh_token,
        }
      : {
          client_id: keycloakClientId,
          grant_type: 'password',
          username,
          password,
        };

    try {
      const response = await axios.post(
        `${keycloakBaseUrl}/${keycloakRealm}/${keycloakTokenPath}`,
        qs.stringify(requestBody),
        config
      );
      return res.status(200).json(response.data);
    } catch (error) {
      if (refresh_token) {
        return res.status(400).json({ error: 'Sua sessão expirou' });
      }
      return res.status(400).json({ error: 'Usuário ou senha incorretos' });
    }
  }
}

export default new SessionController();
