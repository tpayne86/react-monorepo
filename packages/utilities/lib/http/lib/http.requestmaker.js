"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpPost = exports.httpGet = void 0;

require("core-js/modules/es6.promise");

var _axios = _interopRequireDefault(require("axios"));

var _http = require("./http.authorization");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/**
 * @param {String} url
 * @description generated a http get request for the specified url.
 * @returns {Promise}
 */
var httpGet = function httpGet(url) {
  return new Promise(function (resolve, reject) {
    (0, _axios.default)({
      url: (0, _http.getNewApiUrl)(url),
      method: 'GET',
      headers: (0, _http.getApiHeaders)()
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (err) {
      if (err.response) {
        reject({
          //eslint-disable-line
          data: err.response.data,
          status: err.response.status,
          statusText: err.response.statusText
        }); //eslint-disable-line
      } else {
        reject({
          // eslint-disable-line
          data: {
            reason: 'Bad Request'
          },
          status: 400,
          statusText: 'Bad Request'
        });
      }
    });
  });
};
/**
 * @param {String} url
 * @param {Object} data
 * @description generated a http get request for the specified url with post data.
 * @returns {Promise}
 */


exports.httpGet = httpGet;

var httpPost = function httpPost(url, data) {
  return new Promise(function (resolve, reject) {
    (0, _axios.default)({
      url: (0, _http.getNewApiUrl)(url),
      method: 'POST',
      headers: (0, _http.getApiHeaders)(),
      data: data
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (err) {
      if (err.response) {
        reject({
          //eslint-disable-line
          data: err.response.data,
          status: err.response.status,
          statusText: err.response.statusText
        }); //eslint-disable-line
      } else {
        reject({
          // eslint-disable-line
          data: {
            reason: 'Bad Request'
          },
          status: 400,
          statusText: 'Bad Request'
        });
      }
    });
  });
};

exports.httpPost = httpPost;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(httpGet, "httpGet", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.requestmaker.js");
  reactHotLoader.register(httpPost, "httpPost", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.requestmaker.js");
  leaveModule(module);
})();

;