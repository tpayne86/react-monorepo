import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.hot';
import configureStore from 'Store';

const reduxStore = configureStore();
ReactDOM.render(<App store={reduxStore} />, document.getElementById('root'));
