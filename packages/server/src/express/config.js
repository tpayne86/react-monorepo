import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';

import { static as expressStatic } from 'express';
import path from 'path';
import { appConfig as appConfiguration } from '../config';
import { testConnection } from '../database';
import { serverError } from '../utility/http';

const appConfig = (app) => {
  app.use('/', expressStatic(path.resolve(__dirname, '../public')));
  app.use(morgan('common'));
  app.use(compression());
  app.use(helmet());
  app.use(
    cors({
      origin: '*',
      withCredentials: false,
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Accept',
        'Origin',
      ],
    }),
  );
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  if (appConfiguration.NODE_ENV) {
    testConnection();
  }
  app.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json(serverError(err));
  });
};

export default appConfig;
