const { env: ENV } = process;
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

module.exports = {
  NODE_ENV: ENV.NODE_ENV,
  PROXY_ORIGIN: ENV.PROXY_ORIGIN,
  API_KEY_AUTH: ENV.API_KEY_AUTH,
  DEV_PROXY_URL: ENV.DEV_PROXY_URL,
  STAGE_PROXY_URL: ENV.STAGE_PROXY_URL,
  LOGIN_USER_NAME: ENV.LOGIN_USER_NAME,
  LOGIN_USER_PASSWORD: ENV.LOGIN_USER_PASSWORD,
  FIREBASE_TOKEN: ENV.FIREBASE_TOKEN,
  FIREBASE_LOGIN: ENV.FIREBASE_LOGIN,
  DEVSERVER_PORT: ENV.DEVSERVER_PORT,
};
