import { appConfig } from '../config';
import { apiProxy, staticProxy } from '../proxy';

const proxy = (app) => {
  // proxy all apis to localhost if node env is dev.
  if (appConfig.NODE_ENV === 'development') {
    app.use('/api', apiProxy);
    app.use('/static', staticProxy);
  }
};

export default proxy;
