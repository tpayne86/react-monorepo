import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reducer from './combinedReducer';
import logger from './logger';
import rootSaga from '../App/sagas';

import { DEV_ORIGIN } from '../Constants/app/app.constants';

const sagaMiddleWare = createSagaMiddleware();
const history = createBrowserHistory();
const rootReducer = connectRouter(history)(reducer);
const middleWares = [sagaMiddleWare, routerMiddleware(history)];
const { location: { origin } } = window;

if (process.env.NODE_ENV === 'development' && origin === DEV_ORIGIN) {
  middleWares.push(logger);
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares),
  );
  sagaMiddleWare.run(rootSaga);
  /* global module:true */
  /* global process:true */
  if (process.env.NODE_ENV === 'developmemnt') {
    if (module.hot) {
      module.hot.accept('./combinedReducer', () => {
              const nextReducer = require('./combinedReducer').default; // eslint-disable-line
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
}

export {
  configureStore, history,
};
