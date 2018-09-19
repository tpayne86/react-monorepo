/* eslint-env node */
const webpackMerge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const commonConfig = require('./webpack-config/webpack.commons');
const commongPlugins = require('./webpack-config/webpack.commonPlugins');
const prodConfig = require('./webpack-config/webpack.production');
const devConfig = require('./webpack-config/webpack.development');
const bundleanalyzer = require('./webpack-config/addons/webpack.bundleanalyzer');
const bundleBuddy = require('./webpack-config/addons/webpack.bundlebuddy');
const fileReader = require('./webpack-config/readFiles');

function getWebpackConfig(env) {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  const envConfig = isProd ? prodConfig(env) : devConfig(env);
  const baseConfig = webpackMerge(commonConfig(env), commongPlugins(env), envConfig);

  let webpackConfig = null;
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
module.exports = (env) => {
  const appManifest = fileReader('manifest.json');
  const { proxy } = fileReader('package.json');
  env.appProxy = proxy; //eslint-disable-line
  env.port = 9000; //eslint-disable-line
  if (!env.app) {
    throw new Error('app name is required');
  }
  if (env.app !== '*') {
    const app = appManifest.applications[env.app];
    if (!app) {
      throw new Error(`${env.app} is not a valid app`);
    } else {
      env.appConfig = app; //eslint-disable-line
      console.log(`
             ${JSON.stringify(env, null, 4)}
      `);
      return getWebpackConfig(env);
    }
  }
  return Object.keys(appManifest.applications).map((app) => {
    env.appConfig = appManifest.applications[app]; //eslint-disable-line
    return getWebpackConfig(env);
  });
};
