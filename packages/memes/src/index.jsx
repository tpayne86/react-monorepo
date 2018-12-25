import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './Store';

import App from './App.hot';

import 'antd/dist/antd.min.css'; // dev
// import 'antd/dist/antd.less'; // prod

const reduxStore = configureStore();
// ReactDOM.render(<App store={reduxStore} history={history} />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, document.getElementById('root'),
);
