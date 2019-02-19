"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logger;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function logger(_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      console.group("Action : ".concat(action.type)); //eslint-disable-line

      console.info('%c Previous State : ', 'color: #3f51b5', getState()); // eslint-disable-line no-console

      console.info('%c Action Dispatched : ', 'color: #009688', action); // eslint-disable-line no-console
      // Call the next dispatch method in the middleware chain.

      var returnValue = next(action);
      console.info('%c Next State : ', 'color: #795548', getState()); // eslint-disable-line no-console
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.

      console.groupEnd(); // eslint-disable-line

      return returnValue;
    };
  };
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(logger, "logger", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/logger.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();