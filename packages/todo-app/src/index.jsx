import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'Store';
import App from './App.hot';

const reduxStore = configureStore();
ReactDOM.render(<App store={reduxStore} />, document.getElementById('root'));
