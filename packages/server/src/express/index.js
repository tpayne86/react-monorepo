import express from 'express';
import config from './config';
import routes from './routes';
import { NODE_ENV, PORTAL_PORT } from '../config';
import { serverListener } from '../utility/listener';

const app = () => {
  if (!NODE_ENV) {
    throw new Error('NODE_ENV is not set in environment variables');
  }
  const expressApp = express();
  config(expressApp);
  routes(expressApp);
  if (PORTAL_PORT) {
    expressApp.listen(PORTAL_PORT, serverListener);
  } else {
    throw new Error('Portal port invalid');
  }
};

export default app;
