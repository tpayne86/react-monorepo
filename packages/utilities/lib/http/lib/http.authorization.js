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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCsrfToken, "getCsrfToken", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js");
  reactHotLoader.register(getNewApiUrl, "getNewApiUrl", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js");
  reactHotLoader.register(getApiHeaders, "getApiHeaders", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odHRwL2xpYi9odHRwLmF1dGhvcml6YXRpb24uanMiXSwibmFtZXMiOlsiZ2V0Q3NyZlRva2VuIiwiY3NyZiIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJwb3AiLCJnZXROZXdBcGlVcmwiLCJ1cmwiLCJQUk9YWV9UTyIsImF1dGgiLCJuZXdVcmwiLCJTVEFHRV9BQ0NFU1MiLCJpbmRleE9mIiwiZ2V0QXBpSGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIndpbmRvdyIsImF0dGVtcHRMb2dpbiIsImF4aW9zIiwicG9zdCIsIkFQUF9MT0dJTiIsInVzZXJuYW1lIiwiVVNFUl9PTkVfTkFNRSIsInBhc3N3b3JkIiwiVVNFUl9PTkVfUEFTIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUdBOzs7Ozs7O0FBTEE7O0FBT0E7Ozs7QUFJTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxLQUFoQixDQUFzQixvQ0FBdEIsQ0FBYjtBQUNBLFNBQU9ILElBQUksR0FBR0EsSUFBSSxDQUFDSSxHQUFMLEVBQUgsR0FBZ0IsRUFBM0I7QUFDRCxDQUhNO0FBS1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDbkM7QUFDQTtBQUNBLE1BQUksQ0FBQ0MsYUFBTCxFQUFlO0FBQUUsV0FBT0QsR0FBUDtBQUFhOztBQUM5QixNQUFJRSxJQUFKO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxHQUFiOztBQUNBLE1BQUlDLGtCQUFhLFNBQWpCLEVBQTRCO0FBQzFCQyxJQUFBQSxJQUFJLEdBQUdFLGlCQUFQOztBQUNBLFFBQUlKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUExQixFQUE2QjtBQUMzQkYsTUFBQUEsTUFBTSxhQUFNQSxNQUFOLGNBQWdCRCxJQUFoQixDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDLE1BQUFBLE1BQU0sYUFBTUEsTUFBTixjQUFnQkQsSUFBaEIsQ0FBTjtBQUNEOztBQUNELFdBQU9DLE1BQVA7QUFDRDs7QUFDRCxTQUFPQSxNQUFQO0FBQ0QsQ0FoQk07QUFpQlA7Ozs7Ozs7OztBQUtPLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxTQUFPO0FBQ2xDLG1CQUFlYixZQUFZO0FBRE8sR0FBUDtBQUFBLENBQXRCLEMsQ0FHUDs7Ozs7QUFDQSxJQUFJYyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixhQUE3QixFQUE0QztBQUMxQ0MsRUFBQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCO0FBQUEsV0FBTUMsZUFBTUMsSUFBTixDQUFXQyxjQUFYLEVBQXNCO0FBQ2hEQyxNQUFBQSxRQUFRLEVBQUVDLGtCQURzQztBQUN2QkMsTUFBQUEsUUFBUSxFQUFFQztBQURhLEtBQXRCLEVBR3pCQyxJQUh5QixDQUdwQixZQUFNO0FBQ1JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFEUSxDQUNhO0FBQ3hCLEtBTHlCLENBQU47QUFBQSxHQUF0QjtBQU1EOzs7Ozs7Ozs7OzswQkE1Q1k1QixZOzBCQVdBTSxZOzBCQXNCQU8sYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBwcm9jZXNzOnRydWUgKi9cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBVU0VSX09ORV9OQU1FLCBVU0VSX09ORV9QQVMsIFNUQUdFX0FDQ0VTUywgUFJPWFlfVE8sXG59IGZyb20gJ0BoZWFsdGhpZnltZS9jb25zdGFudHMvbGliL2FwcC9hcHAuY29uc3RhbnRzJztcbmltcG9ydCB7IEFQUF9MT0dJTiB9IGZyb20gJ0BoZWFsdGhpZnltZS9jb25zdGFudHMvbGliL2FwaS9hcGkuZW5kcG9pbnRzJztcblxuLyoqXG4gKiBAcmV0dXJucyB7Q29va2llfSBjc3JmXG4gKiBAZGVzY3JpcHRpb24gZnVuY3Rpb24gcmV0dXJuIGNzcmYgQ29va2llXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDc3JmVG9rZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNzcmYgPSBkb2N1bWVudC5jb29raWUubWF0Y2goJyhefDspXFxcXHMqY3NyZnRva2VuXFxcXHMqPVxcXFxzKihbXjtdKyknKTtcbiAgcmV0dXJuIGNzcmYgPyBjc3JmLnBvcCgpIDogJyc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiBAZGVzY3JpcHRpb24gdGhpcyBmdW5jdGlvbiB3aWxsIGNoZWNrIHdlYXRoZXIgZW52IGlzIHByb3h5IHRvIHN0YWdlIG9yIG5vdC5cbiAqIGlmIHByb3h5IGlzIHRvIHN0YWdlIGl0IHdpbGwgYXBwZW5kIGFuZCByZXR1cm4gbmV3IHVybCB3aXRoIGFwaSBrZXkgYXV0aGVudGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE5ld0FwaVVybCA9ICh1cmwpID0+IHtcbiAgLy8gcHJveHkgb3JpZ2luIHdpbGwgb25seSBiZSBkZWZpbmVkIHdoZW4gZGV2ZWxvcGluZyBhbmQgcG9pbnRpbmcgdG8gc3RhZ2VcbiAgLy8gaXQgc2hvdWxkIGJlIHVuZGVmaW5lZCB3aGVuIGRlcGxveWluZ1xuICBpZiAoIVBST1hZX1RPKSB7IHJldHVybiB1cmw7IH1cbiAgbGV0IGF1dGg7XG4gIGxldCBuZXdVcmwgPSB1cmw7XG4gIGlmIChQUk9YWV9UTyA9PT0gJ3N0YWdpbmcnKSB7XG4gICAgYXV0aCA9IFNUQUdFX0FDQ0VTUztcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcbiAgICAgIG5ld1VybCA9IGAke25ld1VybH0/JHthdXRofWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1VybCA9IGAke25ld1VybH0mJHthdXRofWA7XG4gICAgfVxuICAgIHJldHVybiBuZXdVcmw7XG4gIH1cbiAgcmV0dXJuIG5ld1VybDtcbn07XG4vKipcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKiBAZGVzY3JpcHRpb24gcmV0dXJuIGFwaSBoZWFkZXJzIHJlcXVpcmVkIGZvciB0aGUgYXBpcyxcbiAqIGV4IGNzcmYgdG9rZW5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFwaUhlYWRlcnMgPSAoKSA9PiAoe1xuICAnWC1DU1JGVG9rZW4nOiBnZXRDc3JmVG9rZW4oKSxcbn0pO1xuLy8gd2lsbCBhbGxvdyBsb2dpbiBvbmx5IHdoZW4gd2UgYXJlIHByb3h5aW5nIHRvIHN0YWdlIGFuZCBpcyBvbiBEZXYgdXJsXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgd2luZG93LmF0dGVtcHRMb2dpbiA9ICgpID0+IGF4aW9zLnBvc3QoQVBQX0xPR0lOLCB7XG4gICAgdXNlcm5hbWU6IFVTRVJfT05FX05BTUUsIHBhc3N3b3JkOiBVU0VSX09ORV9QQVMsXG4gIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4nKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfSk7XG59XG4iXX0=