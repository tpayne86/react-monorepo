/* eslint-env node */
const Dotenv = require("dotenv");
const webpackMerge = require("webpack-merge");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const commonConfig = require("./webpack-config/webpack.commons");
const commongPlugins = require("./webpack-config/webpack.commons.plugins");
const prodConfig = require("./webpack-config/webpack.production");
const devConfig = require("./webpack-config/webpack.development");
const bundleanalyzer = require("./webpack-config/addons/webpack.bundleanalyzer");
const bundleBuddy = require("./webpack-config/addons/webpack.bundlebuddy");
const fileReader = require("./webpack-config/readFiles");
// gets all env variables set in .env file in the root.
Dotenv.config();

/**
 * get app manifest to read all the registered apps.
 */
const appManifest = fileReader("manifest.json");
const { env:ENV } = process;

/**
 * why env variables are extracted into a seperage object is because
 * we will be passing this env in all webpack configs.
 * i find it easy to not to reference process.env everytime when ever i need
 * to access env variables. its better for my usecase to create a env object
 * and pass it around as a function parameter. because i have split
 * my webpack config in different files and as function wich return partial configs
 * which then can be merged with webpack-merge tool. i have more control of
 * what partial config to load based on what env i am building.
 * in future i can add mobile env and mobile build etc.
 *
 * if you want these variables or some variables to be avaiable in the
 * browser build js you have to pass them in
 * webpack.development.js
 * webpack.productions.js
 * which is inside webpack-config folder. so we can pass diff env variables to diff
 * environments. its easy to manage it in place of if else cases.
 *
*/

const envObjectForWebpack = {
  NODE_ENV: ENV.NODE_ENV,
  PROXY_ORIGIN: ENV.PROXY_ORIGIN,
  API_KEY_AUTH: ENV.API_KEY_AUTH,
  DEV_PROXY_URL: ENV.DEV_PROXY_URL,
  STAGE_PROXY_URL: ENV.STAGE_PROXY_URL,
  LOGIN_USER_NAME: ENV.LOGIN_USER_NAME,
  LOGIN_USER_PASSWORD: ENV.LOGIN_USER_PASSWORD,
  FIREBASE_TOKEN: ENV.FIREBASE_TOKEN,
  FIREBASE_LOGIN: ENV.FIREBASE_LOGIN,
  DEVSERVER_PORT:ENV.DEVSERVER_PORT
};

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
    env.appConfig = appManifest.applications[app];
    return build(env);
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
