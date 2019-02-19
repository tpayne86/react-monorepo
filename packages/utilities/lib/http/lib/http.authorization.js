const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getApiHeaders = exports.getNewApiUrl = exports.getCsrfToken = void 0;

require('core-js/modules/es6.array.index-of');

require('core-js/modules/es6.regexp.match');

const _axios = _interopRequireDefault(require('axios'));

const _app = require('@healthifyme/constants/lib/app/app.constants');

const _api = require('@healthifyme/constants/lib/api/api.endpoints');

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

/* global process:true */

/**
 * @returns {Cookie} csrf
 * @description function return csrf Cookie
 */
const getCsrfToken = function getCsrfToken() {
  const csrf = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
  return csrf ? csrf.pop() : '';
};
/**
 * @param {string} url
 * @returns {string}
 * @description this function will check weather env is proxy to stage or not.
 * if proxy is to stage it will append and return new url with api key authentication
 */

exports.getCsrfToken = getCsrfToken;

const getNewApiUrl = function getNewApiUrl(url) {
  // proxy origin will only be defined when developing and pointing to stage
  // it should be undefined when deploying
  if (!_app.PROXY_TO) {
    return url;
  }

  let auth;
  let newUrl = url;

  if (_app.PROXY_TO === 'staging') {
    auth = _app.STAGE_ACCESS;

    if (url.indexOf('?') === -1) {
      newUrl = ''.concat(newUrl, '?').concat(auth);
    } else {
      newUrl = ''.concat(newUrl, '&').concat(auth);
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

const getApiHeaders = function getApiHeaders() {
  return {
    'X-CSRFToken': getCsrfToken(),
  };
}; // will allow login only when we are proxying to stage and is on Dev url

exports.getApiHeaders = getApiHeaders;

if (process.env.NODE_ENV === 'development') {
  window.attemptLogin = function() {
    return _axios.default
      .post(_api.APP_LOGIN, {
        username: _app.USER_ONE_NAME,
        password: _app.USER_ONE_PAS,
      })
      .then(function() {
      console.log('login'); // eslint-disable-line
      });
  };
}

(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    getCsrfToken,
    'getCsrfToken',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js',
  );
  reactHotLoader.register(
    getNewApiUrl,
    'getNewApiUrl',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js',
  );
  reactHotLoader.register(
    getApiHeaders,
    'getApiHeaders',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.authorization.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odHRwL2xpYi9odHRwLmF1dGhvcml6YXRpb24uanMiXSwibmFtZXMiOlsiZ2V0Q3NyZlRva2VuIiwiY3NyZiIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJwb3AiLCJnZXROZXdBcGlVcmwiLCJ1cmwiLCJQUk9YWV9UTyIsImF1dGgiLCJuZXdVcmwiLCJTVEFHRV9BQ0NFU1MiLCJpbmRleE9mIiwiZ2V0QXBpSGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIndpbmRvdyIsImF0dGVtcHRMb2dpbiIsImF4aW9zIiwicG9zdCIsIkFQUF9MT0dJTiIsInVzZXJuYW1lIiwiVVNFUl9PTkVfTkFNRSIsInBhc3N3b3JkIiwiVVNFUl9PTkVfUEFTIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQU1BOzs7Ozs7O0FBUkE7O0FBVUE7Ozs7QUFJTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxLQUFoQixDQUFzQixvQ0FBdEIsQ0FBYjtBQUNBLFNBQU9ILElBQUksR0FBR0EsSUFBSSxDQUFDSSxHQUFMLEVBQUgsR0FBZ0IsRUFBM0I7QUFDRCxDQUhNO0FBS1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDbkM7QUFDQTtBQUNBLE1BQUksQ0FBQ0MsYUFBTCxFQUFlO0FBQ2IsV0FBT0QsR0FBUDtBQUNEOztBQUNELE1BQUlFLElBQUo7QUFDQSxNQUFJQyxNQUFNLEdBQUdILEdBQWI7O0FBQ0EsTUFBSUMsa0JBQWEsU0FBakIsRUFBNEI7QUFDMUJDLElBQUFBLElBQUksR0FBR0UsaUJBQVA7O0FBQ0EsUUFBSUosR0FBRyxDQUFDSyxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQzNCRixNQUFBQSxNQUFNLGFBQU1BLE1BQU4sY0FBZ0JELElBQWhCLENBQU47QUFDRCxLQUZELE1BRU87QUFDTEMsTUFBQUEsTUFBTSxhQUFNQSxNQUFOLGNBQWdCRCxJQUFoQixDQUFOO0FBQ0Q7O0FBQ0QsV0FBT0MsTUFBUDtBQUNEOztBQUNELFNBQU9BLE1BQVA7QUFDRCxDQWxCTTtBQW1CUDs7Ozs7Ozs7O0FBS08sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFNBQU87QUFDbEMsbUJBQWViLFlBQVk7QUFETyxHQUFQO0FBQUEsQ0FBdEIsQyxDQUdQOzs7OztBQUNBLElBQUljLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQTdCLEVBQTRDO0FBQzFDQyxFQUFBQSxNQUFNLENBQUNDLFlBQVAsR0FBc0I7QUFBQSxXQUNwQkMsZUFDR0MsSUFESCxDQUNRQyxjQURSLEVBQ21CO0FBQ2ZDLE1BQUFBLFFBQVEsRUFBRUMsa0JBREs7QUFFZkMsTUFBQUEsUUFBUSxFQUFFQztBQUZLLEtBRG5CLEVBS0dDLElBTEgsQ0FLUSxZQUFNO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFEVSxDQUNXO0FBQ3RCLEtBUEgsQ0FEb0I7QUFBQSxHQUF0QjtBQVNEOzs7Ozs7Ozs7OzswQkFqRFk1QixZOzBCQVdBTSxZOzBCQXdCQU8sYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBwcm9jZXNzOnRydWUgKi9cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBVU0VSX09ORV9OQU1FLFxuICBVU0VSX09ORV9QQVMsXG4gIFNUQUdFX0FDQ0VTUyxcbiAgUFJPWFlfVE8sXG59IGZyb20gJ0BoZWFsdGhpZnltZS9jb25zdGFudHMvbGliL2FwcC9hcHAuY29uc3RhbnRzJztcbmltcG9ydCB7IEFQUF9MT0dJTiB9IGZyb20gJ0BoZWFsdGhpZnltZS9jb25zdGFudHMvbGliL2FwaS9hcGkuZW5kcG9pbnRzJztcblxuLyoqXG4gKiBAcmV0dXJucyB7Q29va2llfSBjc3JmXG4gKiBAZGVzY3JpcHRpb24gZnVuY3Rpb24gcmV0dXJuIGNzcmYgQ29va2llXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDc3JmVG9rZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNzcmYgPSBkb2N1bWVudC5jb29raWUubWF0Y2goJyhefDspXFxcXHMqY3NyZnRva2VuXFxcXHMqPVxcXFxzKihbXjtdKyknKTtcbiAgcmV0dXJuIGNzcmYgPyBjc3JmLnBvcCgpIDogJyc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiBAZGVzY3JpcHRpb24gdGhpcyBmdW5jdGlvbiB3aWxsIGNoZWNrIHdlYXRoZXIgZW52IGlzIHByb3h5IHRvIHN0YWdlIG9yIG5vdC5cbiAqIGlmIHByb3h5IGlzIHRvIHN0YWdlIGl0IHdpbGwgYXBwZW5kIGFuZCByZXR1cm4gbmV3IHVybCB3aXRoIGFwaSBrZXkgYXV0aGVudGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE5ld0FwaVVybCA9ICh1cmwpID0+IHtcbiAgLy8gcHJveHkgb3JpZ2luIHdpbGwgb25seSBiZSBkZWZpbmVkIHdoZW4gZGV2ZWxvcGluZyBhbmQgcG9pbnRpbmcgdG8gc3RhZ2VcbiAgLy8gaXQgc2hvdWxkIGJlIHVuZGVmaW5lZCB3aGVuIGRlcGxveWluZ1xuICBpZiAoIVBST1hZX1RPKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBsZXQgYXV0aDtcbiAgbGV0IG5ld1VybCA9IHVybDtcbiAgaWYgKFBST1hZX1RPID09PSAnc3RhZ2luZycpIHtcbiAgICBhdXRoID0gU1RBR0VfQUNDRVNTO1xuICAgIGlmICh1cmwuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgbmV3VXJsID0gYCR7bmV3VXJsfT8ke2F1dGh9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VXJsID0gYCR7bmV3VXJsfSYke2F1dGh9YDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1VybDtcbiAgfVxuICByZXR1cm4gbmV3VXJsO1xufTtcbi8qKlxuICogQHJldHVybnMge29iamVjdH1cbiAqIEBkZXNjcmlwdGlvbiByZXR1cm4gYXBpIGhlYWRlcnMgcmVxdWlyZWQgZm9yIHRoZSBhcGlzLFxuICogZXggY3NyZiB0b2tlblxuICovXG5leHBvcnQgY29uc3QgZ2V0QXBpSGVhZGVycyA9ICgpID0+ICh7XG4gICdYLUNTUkZUb2tlbic6IGdldENzcmZUb2tlbigpLFxufSk7XG4vLyB3aWxsIGFsbG93IGxvZ2luIG9ubHkgd2hlbiB3ZSBhcmUgcHJveHlpbmcgdG8gc3RhZ2UgYW5kIGlzIG9uIERldiB1cmxcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cuYXR0ZW1wdExvZ2luID0gKCkgPT5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoQVBQX0xPR0lOLCB7XG4gICAgICAgIHVzZXJuYW1lOiBVU0VSX09ORV9OQU1FLFxuICAgICAgICBwYXNzd29yZDogVVNFUl9PTkVfUEFTLFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luJyk7Ly8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgfSk7XG59XG4iXX0=
