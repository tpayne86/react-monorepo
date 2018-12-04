import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';

import { NODE_ENV, PORTAL_PORT } from './config';
import { apiProxy, staticProxy } from './proxy';
import staticRouter from './routes';
import { serverListener } from './utility/listener';

import api from './api';


const appConfig = (app) => {
  app.use('/', express.static(path.resolve(__dirname, './public')));
  app.use(morgan('common'));
  app.use(compression());
  app.use(helmet());
};
const appRroutes = (app) => {
  app.use('/apiv2', api);
  app.use('', staticRouter);
};
const appProxy = (app) => {
  // proxy all apis to localhost if node env is dev.
  if (NODE_ENV === 'development') {
    app.use('/api', apiProxy);
    app.use('/static', staticProxy);
  }
};
const bootstrapExpressApp = () => {
  if (!NODE_ENV) {
    throw new Error('NODE_ENV is not set in environment variables');
  }
  const expressApplication = express();
  appConfig(expressApplication);
  appProxy(expressApplication);
  appRroutes(expressApplication);
  if (PORTAL_PORT) {
    expressApplication.listen(PORTAL_PORT, serverListener);
  } else {
    throw new Error('Portal port invalid');
  }
};
bootstrapExpressApp();
