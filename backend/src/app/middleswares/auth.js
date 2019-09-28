import jwt from 'jsonwebtoken';

/**
 * Injects user info in the http request
 */
export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Usuário não está logado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.decode(token);

    req.userInfo = decoded;
    req.sessionToken = token;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Usuário não está logado' });
  }
};
