/* eslint-env node */
require('dotenv').config()

const webpackMerge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const commonConfig = require('./webpack-config/webpack.commons');
const commongPlugins = require('./webpack-config/webpack.commonPlugins');
const prodConfig = require('./webpack-config/webpack.production');
const devConfig = require('./webpack-config/webpack.development');
const bundleanalyzer = require('./webpack-config/addons/webpack.bundleanalyzer');
const bundleBuddy = require('./webpack-config/addons/webpack.bundlebuddy');
const fileReader = require('./webpack-config/readFiles');

console.log(process.env);

/**
 * get app manifest to read all the registered apps.
 * get proxy server urls for staging and dev servers.
 * set portal port.
 */
const appManifest = fileReader('manifest.json');
const { proxy } = fileReader('package.json');
const portalPort = 9000;

const configureWebpack = (env) => {
  env.appProxy = proxy;
  env.port = portalPort;
  if (!env.app) {
    throw new Error('app name is required');
  }
  if (env.app !== '*') {
    // search for app name in manifest.
    const app = appManifest.applications[env.app];
    if (!app) {
      throw new Error(`${env.app} is not a valid app`);
    } else {
      env.appConfig = app;
      // eslint-disable-next-line
      console.log(`
             ${JSON.stringify(env, null, 4)}
      `);
      return getWebpackConfig(env);
    }
  }
  /**
   * if runnig for all apps. use webpack config array syntax.
   * which starts each build in a new thread
   */
  return Object.keys(appManifest.applications).map((app) => {
    env.appConfig = appManifest.applications[app];
    return getWebpackConfig(env);
  });
};

function getWebpackConfig(env) {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  const envConfig = isProd ? prodConfig(env) : devConfig(env);
  const baseConfig = webpackMerge(
    commonConfig(env),
    commongPlugins(env),
    envConfig,
  );

  let webpackConfig = null;
  // confug based on addonds. these addons can add. each time
  // a new swtich case should be added.
  switch (env.addons) {
    case 'bundleanalyzer':
      webpackConfig = webpackMerge(baseConfig, bundleanalyzer);
      break;
    case 'bundlebuddy':
      webpackConfig = webpackMerge(baseConfig, bundleBuddy);
      break;
    case 'speedmeasure':
      {
        const smp = new SpeedMeasurePlugin();
        webpackConfig = webpackMerge(baseConfig);
        webpackConfig = smp.wrap(webpackConfig);
      }
      break;
    default:
      webpackConfig = baseConfig;
  }
  return webpackConfig;
}
module.exports = configureWebpack;
