import api from '../api';
import staticRouter from '../routes';

const routes = (app) => {
  app.use('/apiv2', api);
  app.use('', staticRouter);
};

export default routes;
