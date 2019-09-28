import jwt from 'jsonwebtoken';

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
    const decoded = jwt.decode(token);

    res.locals.userInfo = decoded;
    res.locals.sessionToken = token;

    return next();
  } catch (error) {a6
    return res.status(401).json({ error: 'Usuário não está logado' });
  }
};
