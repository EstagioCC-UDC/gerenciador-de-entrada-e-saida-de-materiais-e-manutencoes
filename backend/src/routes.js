import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleswares/auth';
import restrictionMiddleware from './app/middleswares/restriction';

const routes = new Router();

routes.post('/login', SessionController.login);

/**
 * All routes below this middleware will have the user info injected into
 * req.params.userInfo and the token injected into req.params.sessionToken
 */
routes.use(authMiddleware);

routes.post('/logout', SessionController.logout);

routes.use(restrictionMiddleware);

routes.get('/teste', (req, res) => res.json({ deu: 'bom' }));

export default routes;
