"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiHeaders = exports.getNewApiUrl = exports.getCsrfToken = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.regexp.match");

var _axios = _interopRequireDefault(require("axios"));

var _app = require("@healthifyme/constants/lib/app/app.constants");

var _api = require("@healthifyme/constants/lib/api/api.endpoints");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/* global process:true */

/**
 * @returns {Cookie} csrf
 * @description function return csrf Cookie
 */
var getCsrfToken = function getCsrfToken() {
  var csrf = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
  return csrf ? csrf.pop() : '';
};
/**
 * @param {string} url
 * @returns {string}
 * @description this function will check weather env is proxy to stage or not.
 * if proxy is to stage it will append and return new url with api key authentication
 */


exports.getCsrfToken = getCsrfToken;

var getNewApiUrl = function getNewApiUrl(url) {
  // proxy origin will only be defined when developing and pointing to stage
  // it should be undefined when deploying
  if (!_app.PROXY_TO) {
    return url;
  }

  var auth;
  var newUrl = url;

  if (_app.PROXY_TO === 'staging') {
    auth = _app.STAGE_ACCESS;

    if (url.indexOf('?') === -1) {
      newUrl = "".concat(newUrl, "?").concat(auth);
    } else {
      newUrl = "".concat(newUrl, "&").concat(auth);
    }

    return newUrl;
  }

  return newUrl;
};
/**
 * @returns {object}
 * @description return api headers required for the apis,
 * ex csrf token
 */


exports.getNewApiUrl = getNewApiUrl;

var getApiHeaders = function getApiHeaders() {
  return {
    'X-CSRFToken': getCsrfToken()
  };
}; // will allow login only when we are proxying to stage and is on Dev url


exports.getApiHeaders = getApiHeaders;

if (process.env.NODE_ENV === 'development') {
  window.attemptLogin = function () {
    return _axios.default.post(_api.APP_LOGIN, {
      username: _app.USER_ONE_NAME,
      password: _app.USER_ONE_PAS
    }).then(function () {
      console.log('login'); // eslint-disable-line
    });
  };
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCsrfToken, "getCsrfToken", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js");
  reactHotLoader.register(getNewApiUrl, "getNewApiUrl", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js");
  reactHotLoader.register(getApiHeaders, "getApiHeaders", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js");
  leaveModule(module);
})();

;