import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, history } from './Store';
import App from './App.hot';

import 'antd/dist/antd.min.css'; // dev
// import 'antd/dist/antd.less'; // prod

const reduxStore = configureStore();
ReactDOM.render(<App store={reduxStore} history={history} />, document.getElementById('root'));
