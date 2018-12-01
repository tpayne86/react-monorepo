/* eslint-env node */
const webpack = require('webpack'); // eslint-disable-line
const SystemBellPlugin = require('system-bell-webpack-plugin'); // eslint-disable-line
const AntdScssThemePlugin = require('antd-scss-theme-plugin'); // eslint-disable-line

// plugins which are used in both prod and dev
module.exports = env => ({
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SystemBellPlugin(),
    new AntdScssThemePlugin(`./${env.appConfig.folderSrc}/src/Styles/themes/anttheme.scss`),
  ],
});
