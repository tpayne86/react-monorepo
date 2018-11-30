/* eslint-env node */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const appModule = require('./webpack.modules');
const devServer = require('./webpack.devserver');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


module.exports = env => ({
  module: appModule(env).module,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
        PROXY_ORIGIN: JSON.stringify(env.PROXY_ORIGIN),
        API_KEY: JSON.stringify(env.API_KEY_AUTH),
        PROXY_USER: JSON.stringify(env.LOGIN_USER_NAME),
        PROXY_USER_META: JSON.stringify(env.LOGIN_USER_PASSWORD),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: env.appConfig.appHTMLTitle,
      filename: 'index.html',
      template: `./${env.appConfig.folderSrc}/src/index.ejs`,
      publicPath: env.appConfig.publicPath,
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: false,
      options: {
        context: './',
      },
    }),
    new ErrorOverlayPlugin(),
  ],
  devServer: devServer(env),
});
