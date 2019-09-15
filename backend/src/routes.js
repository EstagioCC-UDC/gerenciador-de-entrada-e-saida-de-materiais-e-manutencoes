import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ Hello: 'World' });
});

routes.post('/login', SessionController.login);

export default routes;
