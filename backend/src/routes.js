import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleswares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ Hello: 'World' });
});

routes.post('/login', SessionController.login);

/**
 * All routes below this middleware will have the user info injected into
 * req.params.userInfo and the token injected into req.params.sessionToken
 */
routes.use(authMiddleware);

routes.post('/logout', SessionController.logout);

export default routes;
