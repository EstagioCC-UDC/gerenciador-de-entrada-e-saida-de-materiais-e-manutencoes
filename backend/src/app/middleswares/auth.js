import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import formatKey from '../utils/auth';

/**
 * Injects user info in the http request
 */
export default function(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Usuário não está logado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { keycloakPublicKey } = authConfig;
    const publicKey = formatKey(keycloakPublicKey);
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
      ignoreExpiration: true,
    });

    res.locals.userInfo = decoded;
    res.locals.sessionToken = token;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Usuário não está logado' });
  }
}
