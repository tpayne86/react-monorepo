/* eslint-env node */
const webpack = require('webpack');
const SystemBellPlugin = require('system-bell-webpack-plugin');
// plugins which are used in both prod and dev
module.exports = () => ({
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SystemBellPlugin(),
  ],
});
