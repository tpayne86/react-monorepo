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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1eC9sb2dnZXIuanMiXSwibmFtZXMiOlsibG9nZ2VyIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImdyb3VwIiwidHlwZSIsImluZm8iLCJyZXR1cm5WYWx1ZSIsImdyb3VwRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNlLFNBQVNBLE1BQVQsT0FBOEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDM0MsU0FBTyxVQUFBQyxJQUFJO0FBQUEsV0FBSSxVQUFDQyxNQUFELEVBQVk7QUFDekJDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixvQkFBMEJGLE1BQU0sQ0FBQ0csSUFBakMsR0FEeUIsQ0FDaUI7O0FBQzFDRixNQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSxzQkFBYixFQUFxQyxnQkFBckMsRUFBdUROLFFBQVEsRUFBL0QsRUFGeUIsQ0FFMkM7O0FBQ3BFRyxNQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSx5QkFBYixFQUF3QyxnQkFBeEMsRUFBMERKLE1BQTFELEVBSHlCLENBRzBDO0FBQ25FOztBQUNBLFVBQU1LLFdBQVcsR0FBR04sSUFBSSxDQUFDQyxNQUFELENBQXhCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhLGtCQUFiLEVBQWlDLGdCQUFqQyxFQUFtRE4sUUFBUSxFQUEzRCxFQU55QixDQU11QztBQUNoRTtBQUNBOztBQUNBRyxNQUFBQSxPQUFPLENBQUNLLFFBQVIsR0FUeUIsQ0FTTjs7QUFDbkIsYUFBT0QsV0FBUDtBQUNELEtBWFU7QUFBQSxHQUFYO0FBWUQ7Ozs7Ozs7Ozs7OzBCQWJ1QlIsTSIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nZ2VyKHsgZ2V0U3RhdGUgfSkge1xuICByZXR1cm4gbmV4dCA9PiAoYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5ncm91cChgQWN0aW9uIDogJHthY3Rpb24udHlwZX1gKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY29uc29sZS5pbmZvKCclYyBQcmV2aW91cyBTdGF0ZSA6ICcsICdjb2xvcjogIzNmNTFiNScsIGdldFN0YXRlKCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmluZm8oJyVjIEFjdGlvbiBEaXNwYXRjaGVkIDogJywgJ2NvbG9yOiAjMDA5Njg4JywgYWN0aW9uKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgLy8gQ2FsbCB0aGUgbmV4dCBkaXNwYXRjaCBtZXRob2QgaW4gdGhlIG1pZGRsZXdhcmUgY2hhaW4uXG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuZXh0KGFjdGlvbik7XG4gICAgY29uc29sZS5pbmZvKCclYyBOZXh0IFN0YXRlIDogJywgJ2NvbG9yOiAjNzk1NTQ4JywgZ2V0U3RhdGUoKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgYmUgdGhlIGFjdGlvbiBpdHNlbGYsIHVubGVzc1xuICAgIC8vIGEgbWlkZGxld2FyZSBmdXJ0aGVyIGluIGNoYWluIGNoYW5nZWQgaXQuXG4gICAgY29uc29sZS5ncm91cEVuZCgpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG59XG4iXX0=