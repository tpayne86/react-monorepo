import api from '../api';
import staticRouter from '../routes';

const routes = (app) => {
  app.use('/api', api);
  app.use('', staticRouter);
};

export default routes;
