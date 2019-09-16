import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Usuário não está logado' });
  }

  const [, token] = authHeader.split(' ');

  const decoded = jwt.decode(token);

  req.params.userInfo = decoded;
  req.params.sessionToken = token;

  next();
};
