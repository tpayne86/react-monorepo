const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.history = exports.initStore = void 0;

const _redux = require('redux');

const _reduxSaga = _interopRequireDefault(require('redux-saga'));

const _connectedReactRouter = require('connected-react-router');

const _history = require('history');

const _app = require('@healthifyme/constants/lib/app/app.constants');

const _logger = _interopRequireDefault(require('./logger'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
const sagaMiddleWare = (0, _reduxSaga.default)();
const history = (0, _history.createHashHistory)();
exports.history = history;
const middleWares = [
  sagaMiddleWare,
  (0, _connectedReactRouter.routerMiddleware)(history),
];

if (_app.isDev) {
  middleWares.push(_logger.default);
}

const initStore = function initStore(reducer, rootSaga) {
  if (!reducer || !rootSaga) {
    throw new Error('Please Provide valid arguments');
  }

  const store = (0, _redux.createStore)(
    reducer(history),
    _redux.applyMiddleware.apply(void 0, middleWares),
  );
  sagaMiddleWare.run(rootSaga);
  /* global module:true */

  /* global process:true */

  if (_app.isDev) {
    if (module.hot) {
      module.hot.accept(reducer, function() {
        var nextReducer = require(reducer).default; // eslint-disable-line

        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
};

exports.initStore = initStore;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    sagaMiddleWare,
    'sagaMiddleWare',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js',
  );
  reactHotLoader.register(
    history,
    'history',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js',
  );
  reactHotLoader.register(
    middleWares,
    'middleWares',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js',
  );
  reactHotLoader.register(
    initStore,
    'initStore',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1eC9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYWdhTWlkZGxlV2FyZSIsImhpc3RvcnkiLCJtaWRkbGVXYXJlcyIsImlzRGV2IiwicHVzaCIsImxvZ2dlciIsImluaXRTdG9yZSIsInJlZHVjZXIiLCJyb290U2FnYSIsIkVycm9yIiwic3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJuZXh0UmVkdWNlciIsInJlcXVpcmUiLCJkZWZhdWx0IiwicmVwbGFjZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7QUFMc0Q7QUFDUDtBQUNZO0FBQ2Q7QUFJN0MsSUFBTUEsY0FBYyxHQUFHLHlCQUF2QjtBQUNBLElBQU1DLE9BQU8sR0FBRyxpQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUIsNENBQWlCQyxPQUFqQixDQUFqQixDQUFwQjs7QUFFQSxJQUFJRSxVQUFKLEVBQVc7QUFDVEQsRUFBQUEsV0FBVyxDQUFDRSxJQUFaLENBQWlCQyxlQUFqQjtBQUNEOztBQUVELElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUN2QyxNQUFJLENBQUNELE9BQUQsSUFBWSxDQUFDQyxRQUFqQixFQUEyQjtBQUN6QixVQUFNLElBQUlDLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsTUFBTUMsS0FBSyxHQUFHLHdCQUFZSCxPQUFPLENBQUNOLE9BQUQsQ0FBbkIsRUFBOEJVLHFDQUFtQlQsV0FBbkIsQ0FBOUIsQ0FBZDtBQUVBRixFQUFBQSxjQUFjLENBQUNZLEdBQWYsQ0FBbUJKLFFBQW5CO0FBQ0E7O0FBQ0E7O0FBQ0EsTUFBSUwsVUFBSixFQUFXO0FBQ1QsUUFBSVUsTUFBTSxDQUFDQyxHQUFYLEVBQWdCO0FBQ2RELE1BQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxNQUFYLENBQWtCUixPQUFsQixFQUEyQixZQUFNO0FBQ3pCLFlBQU1TLFdBQVcsR0FBR0MsT0FBTyxDQUFDVixPQUFELENBQVAsQ0FBaUJXLE9BQXJDLENBRHlCLENBQ3FCOzs7QUFDcERSLFFBQUFBLEtBQUssQ0FBQ1MsY0FBTixDQUFxQkgsV0FBckI7QUFDRCxPQUhEO0FBSUQ7QUFDRjs7QUFFRCxTQUFPTixLQUFQO0FBQ0QsQ0FuQkQ7Ozs7Ozs7Ozs7OzswQkFSTVYsYzswQkFDQUMsTzswQkFDQUMsVzswQkFNQUksUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBjcmVhdGVIYXNoSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBpc0RldiB9IGZyb20gJ0BoZWFsdGhpZnltZS9jb25zdGFudHMvbGliL2FwcC9hcHAuY29uc3RhbnRzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG5jb25zdCBzYWdhTWlkZGxlV2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoKTtcbmNvbnN0IG1pZGRsZVdhcmVzID0gW3NhZ2FNaWRkbGVXYXJlLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXTtcblxuaWYgKGlzRGV2KSB7XG4gIG1pZGRsZVdhcmVzLnB1c2gobG9nZ2VyKTtcbn1cblxuY29uc3QgaW5pdFN0b3JlID0gKHJlZHVjZXIsIHJvb3RTYWdhKSA9PiB7XG4gIGlmICghcmVkdWNlciB8fCAhcm9vdFNhZ2EpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBQcm92aWRlIHZhbGlkIGFyZ3VtZW50cycpO1xuICB9XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcihoaXN0b3J5KSwgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZVdhcmVzKSk7XG5cbiAgc2FnYU1pZGRsZVdhcmUucnVuKHJvb3RTYWdhKTtcbiAgLyogZ2xvYmFsIG1vZHVsZTp0cnVlICovXG4gIC8qIGdsb2JhbCBwcm9jZXNzOnRydWUgKi9cbiAgaWYgKGlzRGV2KSB7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHJlZHVjZXIsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV4dFJlZHVjZXIgPSByZXF1aXJlKHJlZHVjZXIpLmRlZmF1bHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IHsgaW5pdFN0b3JlLCBoaXN0b3J5IH07XG4iXX0=
