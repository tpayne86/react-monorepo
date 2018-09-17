/* eslint-env node */
const path = require('path');
const fs = require('fs');

const packageJSON = fs.readFileSync('./package.json', 'utf8');
const appServerConfig = JSON.parse(packageJSON)['app-config'];

module.exports = {
  publicPath: appServerConfig['public-path'],
  distPath: path.resolve(__dirname, '../', `dist/public/${appServerConfig['public-path']}`),
  appTitle: appServerConfig['app-title'],
  srcPath: path.resolve(__dirname, '../', 'src'),
  packagesPath: path.resolve(__dirname, '../', 'node_modules/@healthifyme'),
  nodeModules: path.resolve(__dirname, '../', 'node_modules'),
  rootPath: path.resolve(__dirname, '../'),
  cleanOptions: {
    root: path.resolve(__dirname, '../'),
    exclude: [],
    verbose: true,
    dry: false,
  },
};
