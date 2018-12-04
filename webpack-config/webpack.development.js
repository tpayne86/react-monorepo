/* eslint-env node */
const webpack = require('webpack');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const appModule = require('./webpack.modules');
const devServer = require('./webpack.devserver');
const { webpackDevEnvironmentVariableForBrowser } = require('./webpack.env');

// only dev config
module.exports = env => ({
  module: appModule(env).module,
  plugins: [
    webpackDevEnvironmentVariableForBrowser(),
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
    // new HardSourceWebpackPlugin(),
  ],
  devServer: devServer(env),
});
