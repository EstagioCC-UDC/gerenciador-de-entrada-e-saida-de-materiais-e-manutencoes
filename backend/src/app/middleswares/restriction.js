import restrictions, { VIEW, MANIPULATE } from '../../config/restriction';
import auth from '../../config/auth';

const ADMIN = 'ADMIN';
const USER = 'USER';
const VIEWER = 'VIEWER';

/**
 * Verifies if the given role has access to the path with the given method
 * @param {String} path
 * @param {String} method
 * @param {String} role
 */
const verifyAccess = (path, method, role) => {
  const type = method === 'GET' ? VIEW : MANIPULATE;

  return (
    restrictions[role].filter(
      resource =>
        resource.path === path &&
        (resource.type === MANIPULATE || resource.type === type)
    ).length > 0
  );
};

/**
 * Verifies if the token has expires and if user has permission on endpoint
 */
export default function (req, res, next) {
  const now = Math.floor(Date.now() / 1000);
  if (now > res.locals.userInfo.exp) {
    return res.status(401).send({ error: 'Sua sessão expirou' });
  }

  const { roles } = res.locals.userInfo.resource_access[auth.keycloakClientId];

  if (roles.includes(ADMIN)) return next();
  if (roles.includes(USER)) {
    return verifyAccess(req.path, req.method, USER)
      ? next()
      : res
          .status(403)
          .json({ error: 'Seu usuário não possui acesso a este recurso' });
  }
  if (roles.includes(VIEWER)) {
    return verifyAccess(req.path, req.method, VIEWER)
      ? next()
      : res
          .status(403)
          .json({ error: 'Seu usuário não possui acesso a este recurso' });
  }
  return res
    .status(403)
    .json({ error: 'Seu usuário não possui a este recurso' });
};
