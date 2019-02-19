require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = logger;

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

function logger(_ref) {
  const getState = _ref.getState;
  return function(next) {
    return function(action) {
      console.group("Action : ".concat(action.type)); //eslint-disable-line

      console.info('%c Previous State : ', 'color: #3f51b5', getState()); // eslint-disable-line no-console

      console.info('%c Action Dispatched : ', 'color: #009688', action); // eslint-disable-line no-console
      // Call the next dispatch method in the middleware chain.

      const returnValue = next(action);
      console.info('%c Next State : ', 'color: #795548', getState()); // eslint-disable-line no-console
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.

      console.groupEnd(); // eslint-disable-line

      return returnValue;
    };
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
    logger,
    'logger',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/logger.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1eC9sb2dnZXIuanMiXSwibmFtZXMiOlsibG9nZ2VyIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImdyb3VwIiwidHlwZSIsImluZm8iLCJyZXR1cm5WYWx1ZSIsImdyb3VwRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsT0FBOEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDM0MsU0FBTyxVQUFDQyxJQUFEO0FBQUEsV0FBVSxVQUFDQyxNQUFELEVBQVk7QUFDM0JDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixvQkFBMEJGLE1BQU0sQ0FBQ0csSUFBakMsR0FEMkIsQ0FDZTs7QUFDMUNGLE1BQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhLHNCQUFiLEVBQXFDLGdCQUFyQyxFQUF1RE4sUUFBUSxFQUEvRCxFQUYyQixDQUV5Qzs7QUFDcEVHLE1BQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhLHlCQUFiLEVBQXdDLGdCQUF4QyxFQUEwREosTUFBMUQsRUFIMkIsQ0FHd0M7QUFDbkU7O0FBQ0EsVUFBTUssV0FBVyxHQUFHTixJQUFJLENBQUNDLE1BQUQsQ0FBeEI7QUFDQUMsTUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWEsa0JBQWIsRUFBaUMsZ0JBQWpDLEVBQW1ETixRQUFRLEVBQTNELEVBTjJCLENBTXFDO0FBQ2hFO0FBQ0E7O0FBQ0FHLE1BQUFBLE9BQU8sQ0FBQ0ssUUFBUixHQVQyQixDQVNSOztBQUNuQixhQUFPRCxXQUFQO0FBQ0QsS0FYTTtBQUFBLEdBQVA7QUFZRDs7Ozs7Ozs7Ozs7MEJBYnVCUixNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nZ2VyKHsgZ2V0U3RhdGUgfSkge1xuICByZXR1cm4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmdyb3VwKGBBY3Rpb24gOiAke2FjdGlvbi50eXBlfWApOyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zb2xlLmluZm8oJyVjIFByZXZpb3VzIFN0YXRlIDogJywgJ2NvbG9yOiAjM2Y1MWI1JywgZ2V0U3RhdGUoKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuaW5mbygnJWMgQWN0aW9uIERpc3BhdGNoZWQgOiAnLCAnY29sb3I6ICMwMDk2ODgnLCBhY3Rpb24pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAvLyBDYWxsIHRoZSBuZXh0IGRpc3BhdGNoIG1ldGhvZCBpbiB0aGUgbWlkZGxld2FyZSBjaGFpbi5cbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG5leHQoYWN0aW9uKTtcbiAgICBjb25zb2xlLmluZm8oJyVjIE5leHQgU3RhdGUgOiAnLCAnY29sb3I6ICM3OTU1NDgnLCBnZXRTdGF0ZSgpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgLy8gVGhpcyB3aWxsIGxpa2VseSBiZSB0aGUgYWN0aW9uIGl0c2VsZiwgdW5sZXNzXG4gICAgLy8gYSBtaWRkbGV3YXJlIGZ1cnRoZXIgaW4gY2hhaW4gY2hhbmdlZCBpdC5cbiAgICBjb25zb2xlLmdyb3VwRW5kKCkgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcbn1cbiJdfQ==
