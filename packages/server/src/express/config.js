import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import { static as expressStatic } from 'express';
import path from 'path';

const appConfig = (app) => {
  app.use('/static', expressStatic(path.resolve(__dirname, '../public')));
  app.use(morgan('common'));
  app.use(compression());
  app.use(helmet());
};

export default appConfig;
