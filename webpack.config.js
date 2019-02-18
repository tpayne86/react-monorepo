/* eslint-env node */
const Dotenv = require("dotenv");
Dotenv.config();
// gets all env variables set in .env file in the root.

const webpackMerge = require("webpack-merge");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const commonConfig = require("./webpack-config/webpack.commons");
const commongPlugins = require("./webpack-config/webpack.commons.plugins");
const prodConfig = require("./webpack-config/webpack.production");
const devConfig = require("./webpack-config/webpack.development");
const bundleanalyzer = require("./webpack-config/addons/webpack.bundleanalyzer");
const bundleBuddy = require("./webpack-config/addons/webpack.bundlebuddy");
const fileReader = require("./webpack-config/readFiles");
const { envObjectForWebpack } = require("./webpack-config/webpack.env");

/**
 * get app manifest to read all the registered apps.
 */
const appManifest = fileReader("manifest.json");

/**
 * @description configureWebpack is a default function called by webpack with a env param
 * which contain all the info passed in webpack scripsts ex --env.app=something.
 * this app can be accessed by env.app in this function.
 * this is a bootstrap function which will start the webpack process and based on these env
 * variables the webpack will build. it can build a single project or multiple projects based
 * on the params passed in env.app. this function will call webpack directly. but first compute
 * what app to be build and the initiate the webpack build.
 * @requires {object} manifest.json which is placed in the root must contain the app info which
 * can be build by webpack
 * @param {object} env
 * @returns {object} webpack config object
 */
const configureWebpack = env => {
  env = { ...env, ...envObjectForWebpack };
  if (!env.app) {
    throw new Error("app name is required");
  }
  if (env.app !== "*") {
    // search for app name in manifest.
    const app = appManifest.applications[env.app];
    if (!app) {
      throw new Error(`${env.app} is not a valid app`);
    } else {
      // every package has a ant-theme.json file which defines all less variables in there.
      env.appConfig = app;
      console.log(env);
      return build(env);
    }
  }
  console.log(env);
  /**
   * if runnig for all apps. use webpack config array syntax.
   * which starts each build in a new thread
   */
  return Object.keys(appManifest.applications).map(app => {
    // deep copy env for each itration.
    const copyEnv = {
      ...env,
      appConfig: {
        ...env.appConfig,
      }
    }
    copyEnv.appConfig = appManifest.applications[app];
    console.log(copyEnv);
    return build(copyEnv);
  });
};

/**
 * @description build is function which will merge all different webpack configurations
 * based on env etc and start a webpack build. it will recieve env argunment
 * which has all the environment related info and will be passed to all
 * partial configurations.
 * @param {object} env
 * @returns {object} webpack config
 */
function build(env) {
  const isProd = env.NODE_ENV.trim().toLowerCase() === "production";
  const envConfig = isProd ? prodConfig(env) : devConfig(env);
  const baseConfig = webpackMerge(
    commonConfig(env),
    commongPlugins(env),
    envConfig
  );

  let webpackConfig = null;
  // confug based on addonds. these addons can add. each time
  // a new swtich case should be added.
  switch (env.addons) {
    case "bundleanalyzer":
      webpackConfig = webpackMerge(baseConfig, bundleanalyzer);
      break;
    case "bundlebuddy":
      webpackConfig = webpackMerge(baseConfig, bundleBuddy);
      break;
    case "speedmeasure":
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
