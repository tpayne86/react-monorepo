import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { isDev } from '@healthifyme/constants';
import reducer from './combinedReducer';
import logger from './logger';
import rootSaga from '../App/sagas';


const sagaMiddleWare = createSagaMiddleware();
const history = createHashHistory();
const rootReducer = connectRouter(history)(reducer);
const middleWares = [sagaMiddleWare, routerMiddleware(history)];

if (isDev) {
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
  if (isDev) {
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
