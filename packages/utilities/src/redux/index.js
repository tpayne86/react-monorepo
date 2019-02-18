import { createStore, applyMiddleware } from 'redux'; // eslint-disable-line
import createSagaMiddleware from 'redux-saga'; // eslint-disable-line
import { routerMiddleware } from 'connected-react-router'; // eslint-disable-line
import { createHashHistory } from 'history'; // eslint-disable-line
import { isDev } from '@healthifyme/constants/lib/app/app.constants';
import logger from './logger';


const sagaMiddleWare = createSagaMiddleware();
const history = createHashHistory();
const middleWares = [sagaMiddleWare, routerMiddleware(history)];

if (isDev) {
  middleWares.push(logger);
}


const initStore = (reducer, rootSaga) => {
  if (!reducer || !rootSaga) {
    throw new Error('Please Provide valid arguments');
  }
  const store = createStore(
    reducer(history),
    applyMiddleware(...middleWares),
  );

  sagaMiddleWare.run(rootSaga);
  /* global module:true */
  /* global process:true */
  if (isDev) {
    if (module.hot) {
      module.hot.accept(reducer, () => {
              const nextReducer = require(reducer).default; // eslint-disable-line
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
};

export {
  initStore, history,
};
