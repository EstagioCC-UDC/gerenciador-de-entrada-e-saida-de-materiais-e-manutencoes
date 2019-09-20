import 'dotenv/config';

import express from 'express';
import Youch from 'youch';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import corsConfig from './config/cors';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    const corsWhitelist = corsConfig.frontendCorsUrl.split(',');
    const corsOptions = {
      origin: function(origin, callback){
        if(corsWhitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      }
    }
    this.server.use(cors(corsOptions));
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, res).toJSON();

        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal Server Error' });
    });
  }
}

export default new App().server;
