"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALERT_TYPES = exports.USER_ROLES = exports.TIME_SLOTS = exports.TIME_PARAMS = exports.MONTH_NAMES = exports.ROUTE_ERROR = exports.PROXY_TO = exports.isProd = exports.isDev = exports.USER_ONE_PAS = exports.USER_ONE_NAME = exports.STAGE_ACCESS = void 0;

require("core-js/modules/es6.string.trim");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

/* global process:true */
var _process$env = process.env,
    API_KEY = _process$env.API_KEY,
    PROXY_USER = _process$env.PROXY_USER,
    PROXY_USER_META = _process$env.PROXY_USER_META,
    NODE_ENV = _process$env.NODE_ENV,
    PROXY_ORIGIN = _process$env.PROXY_ORIGIN;
var STAGE_ACCESS = window.atob(API_KEY || '');
exports.STAGE_ACCESS = STAGE_ACCESS;
var USER_ONE_NAME = window.atob(PROXY_USER || '');
exports.USER_ONE_NAME = USER_ONE_NAME;
var USER_ONE_PAS = window.atob(PROXY_USER_META || '');
exports.USER_ONE_PAS = USER_ONE_PAS;
var isDev = NODE_ENV.trim() === 'development';
exports.isDev = isDev;
var isProd = NODE_ENV.trim() === 'production';
exports.isProd = isProd;
var PROXY_TO = PROXY_ORIGIN;
exports.PROXY_TO = PROXY_TO;
var ROUTE_ERROR = {
  INVALID_ROUTE: 'INVALID_ROUTE',
  FORBIDDEN: 'FORBIDDEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND'
};
exports.ROUTE_ERROR = ROUTE_ERROR;
var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.MONTH_NAMES = MONTH_NAMES;
var TIME_PARAMS = {
  AM: 'AM',
  PM: 'PM'
};
exports.TIME_PARAMS = TIME_PARAMS;
var TIME_SLOTS = {
  MORNING: 'Morning Slot',
  AFTERNOON: 'Afternoon Slot',
  EVENING: 'Evening Slot',
  LATE_EVENING: 'Late Evening Slot'
};
exports.TIME_SLOTS = TIME_SLOTS;
var USER_ROLES = {
  CSM: 'csm,',
  USER: 'user',
  ADMIN: 'admin',
  EXPERT: 'expert'
};
exports.USER_ROLES = USER_ROLES;
var ALERT_TYPES = {
  DANGER: 'DANGER',
  WARNING: 'WARNING',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  DISABLE: 'DISABLE'
};
exports.ALERT_TYPES = ALERT_TYPES;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_KEY, "API_KEY", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_USER, "PROXY_USER", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_USER_META, "PROXY_USER_META", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(NODE_ENV, "NODE_ENV", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_ORIGIN, "PROXY_ORIGIN", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(STAGE_ACCESS, "STAGE_ACCESS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(USER_ONE_NAME, "USER_ONE_NAME", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(USER_ONE_PAS, "USER_ONE_PAS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(isDev, "isDev", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(isProd, "isProd", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_TO, "PROXY_TO", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(ROUTE_ERROR, "ROUTE_ERROR", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(MONTH_NAMES, "MONTH_NAMES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(TIME_PARAMS, "TIME_PARAMS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(TIME_SLOTS, "TIME_SLOTS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(USER_ROLES, "USER_ROLES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(ALERT_TYPES, "ALERT_TYPES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();