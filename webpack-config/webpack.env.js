const webpack = require('webpack');

const { env: ENV } = process;

const envObjectForWebpack = {
  NODE_ENV: ENV.NODE_ENV,
  PROXY_URL: ENV.PROXY_URL,
  DEVSERVER_PORT: ENV.DEVSERVER_PORT,
};

const webpackDevEnvironmentVariableForBrowser = () =>
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(ENV.NODE_ENV),
      PROXY_ORIGIN: JSON.stringify(ENV.PROXY_ORIGIN),
      API_KEY: JSON.stringify(ENV.API_KEY_AUTH),
      PROXY_USER: JSON.stringify(ENV.LOGIN_USER_NAME),
      PROXY_USER_META: JSON.stringify(ENV.LOGIN_USER_PASSWORD),
    },
  });

const webpackProdEnvironmentVariableForBrowser = () =>
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(ENV.NODE_ENV),
    },
  });

module.exports = {
  envObjectForWebpack,
  webpackDevEnvironmentVariableForBrowser,
  webpackProdEnvironmentVariableForBrowser,
};
