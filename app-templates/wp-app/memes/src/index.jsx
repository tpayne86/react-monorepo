import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from '@nikaah/utilities/lib/redux';
import App from './App.hot';
import rootReducer from './App/reducer';
import rootSaga from './App/sagas';

import 'antd/dist/antd.min.css'; // dev
// import 'antd/dist/antd.less'; // prod

const reduxStore = initStore(rootReducer, rootSaga);
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, document.getElementById('root'),
);
