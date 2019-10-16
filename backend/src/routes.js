import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import MaterialController from './app/controllers/MaterialController';
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

routes.get('/materiais', MaterialController.index);
routes.post('/materiais', MaterialController.store);
routes.put('/materiais/:id', MaterialController.update);
routes.delete('/materiais/:id', MaterialController.delete);

export default routes;
