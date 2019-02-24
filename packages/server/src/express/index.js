import express from 'express';
import config from './config';
// import proxy from './proxy';
import routes from './routes';
import { appConfig } from '../config';
import { serverListener } from '../utility/listener';

const app = () => {
  if (!appConfig.NODE_ENV) {
    throw new Error('NODE_ENV is not set in environment variables');
  }
  const expressApp = express();
  config(expressApp);
  // proxy(expressApp);
  routes(expressApp);
  if (appConfig.PORTAL_PORT) {
    expressApp.listen(appConfig.PORTAL_PORT, serverListener);
  } else {
    throw new Error('Portal port invalid');
  }
};

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // mandatory (as per the Node docs)
});
export default app;
