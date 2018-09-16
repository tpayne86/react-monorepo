/* eslint-env node */
const path = require('path');
const fs = require('fs');

const packageJSON = fs.readFileSync('./package.json', 'utf8');
const appServerConfig = JSON.parse(packageJSON)['app-config'];

module.exports = {
  publicPath: appServerConfig['public-path'],
  distPath: path.resolve(__dirname, '../../../', 'dist/public/meme-dashboard'),
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
  pathAliases: {
    App: path.resolve(__dirname, '../', './src/App'),
    Modules: path.resolve(__dirname, '../', './src/App/Modules'),
    Router: path.resolve(__dirname, '../', './src/App/Router'),
    Constants: path.resolve(__dirname, '../', './src/App'),
    Services: path.resolve(__dirname, '../', './src/Services'),
    Store: path.resolve(__dirname, '../', './src/Store'),
    Styles: path.resolve(__dirname, '../', './src/Styles'),
    Assets: path.resolve(__dirname, '../', './src/Assets'),
  },
};
