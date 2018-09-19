/* eslint-env node */
const webpack = require('webpack'); // eslint-disable-line
const SystemBellPlugin = require('system-bell-webpack-plugin'); // eslint-disable-line
const AntdScssThemePlugin = require('antd-scss-theme-plugin'); // eslint-disable-line

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SystemBellPlugin(),
    new AntdScssThemePlugin('./src/Styles/themes/anttheme.scss'),
  ],
};
