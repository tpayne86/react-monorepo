"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = exports.initStore = void 0;

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _connectedReactRouter = require("connected-react-router");

var _history = require("history");

var _app = require("@healthifyme/constants/lib/app/app.constants");

var _logger = _interopRequireDefault(require("./logger"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
var sagaMiddleWare = (0, _reduxSaga.default)();
var history = (0, _history.createHashHistory)();
exports.history = history;
var middleWares = [sagaMiddleWare, (0, _connectedReactRouter.routerMiddleware)(history)];

if (_app.isDev) {
  middleWares.push(_logger.default);
}

var initStore = function initStore(reducer, rootSaga) {
  if (!reducer || !rootSaga) {
    throw new Error('Please Provide valid arguments');
  }

  var store = (0, _redux.createStore)(reducer(history), _redux.applyMiddleware.apply(void 0, middleWares));
  sagaMiddleWare.run(rootSaga);
  /* global module:true */

  /* global process:true */

  if (_app.isDev) {
    if (module.hot) {
      module.hot.accept(reducer, function () {
        var nextReducer = require(reducer).default; // eslint-disable-line


        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
};

exports.initStore = initStore;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaMiddleWare, "sagaMiddleWare", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js");
  reactHotLoader.register(history, "history", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js");
  reactHotLoader.register(middleWares, "middleWares", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js");
  reactHotLoader.register(initStore, "initStore", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/redux/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1eC9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYWdhTWlkZGxlV2FyZSIsImhpc3RvcnkiLCJtaWRkbGVXYXJlcyIsImlzRGV2IiwicHVzaCIsImxvZ2dlciIsImluaXRTdG9yZSIsInJlZHVjZXIiLCJyb290U2FnYSIsIkVycm9yIiwic3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJuZXh0UmVkdWNlciIsInJlcXVpcmUiLCJkZWZhdWx0IiwicmVwbGFjZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7QUFMc0Q7QUFDUDtBQUNZO0FBQ2Q7QUFLN0MsSUFBTUEsY0FBYyxHQUFHLHlCQUF2QjtBQUNBLElBQU1DLE9BQU8sR0FBRyxpQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUIsNENBQWlCQyxPQUFqQixDQUFqQixDQUFwQjs7QUFFQSxJQUFJRSxVQUFKLEVBQVc7QUFDVEQsRUFBQUEsV0FBVyxDQUFDRSxJQUFaLENBQWlCQyxlQUFqQjtBQUNEOztBQUdELElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUN2QyxNQUFJLENBQUNELE9BQUQsSUFBWSxDQUFDQyxRQUFqQixFQUEyQjtBQUN6QixVQUFNLElBQUlDLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsTUFBTUMsS0FBSyxHQUFHLHdCQUNaSCxPQUFPLENBQUNOLE9BQUQsQ0FESyxFQUVaVSxxQ0FBbUJULFdBQW5CLENBRlksQ0FBZDtBQUtBRixFQUFBQSxjQUFjLENBQUNZLEdBQWYsQ0FBbUJKLFFBQW5CO0FBQ0E7O0FBQ0E7O0FBQ0EsTUFBSUwsVUFBSixFQUFXO0FBQ1QsUUFBSVUsTUFBTSxDQUFDQyxHQUFYLEVBQWdCO0FBQ2RELE1BQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxNQUFYLENBQWtCUixPQUFsQixFQUEyQixZQUFNO0FBQ3pCLFlBQU1TLFdBQVcsR0FBR0MsT0FBTyxDQUFDVixPQUFELENBQVAsQ0FBaUJXLE9BQXJDLENBRHlCLENBQ3FCOzs7QUFDcERSLFFBQUFBLEtBQUssQ0FBQ1MsY0FBTixDQUFxQkgsV0FBckI7QUFDRCxPQUhEO0FBSUQ7QUFDRjs7QUFFRCxTQUFPTixLQUFQO0FBQ0QsQ0F0QkQ7Ozs7Ozs7Ozs7OzswQkFUTVYsYzswQkFDQUMsTzswQkFDQUMsVzswQkFPQUksUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBjcmVhdGVIYXNoSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBpc0RldiB9IGZyb20gJ0BoZWFsdGhpZnltZS9jb25zdGFudHMvbGliL2FwcC9hcHAuY29uc3RhbnRzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG5cbmNvbnN0IHNhZ2FNaWRkbGVXYXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeSgpO1xuY29uc3QgbWlkZGxlV2FyZXMgPSBbc2FnYU1pZGRsZVdhcmUsIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldO1xuXG5pZiAoaXNEZXYpIHtcbiAgbWlkZGxlV2FyZXMucHVzaChsb2dnZXIpO1xufVxuXG5cbmNvbnN0IGluaXRTdG9yZSA9IChyZWR1Y2VyLCByb290U2FnYSkgPT4ge1xuICBpZiAoIXJlZHVjZXIgfHwgIXJvb3RTYWdhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgUHJvdmlkZSB2YWxpZCBhcmd1bWVudHMnKTtcbiAgfVxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIoaGlzdG9yeSksXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZVdhcmVzKSxcbiAgKTtcblxuICBzYWdhTWlkZGxlV2FyZS5ydW4ocm9vdFNhZ2EpO1xuICAvKiBnbG9iYWwgbW9kdWxlOnRydWUgKi9cbiAgLyogZ2xvYmFsIHByb2Nlc3M6dHJ1ZSAqL1xuICBpZiAoaXNEZXYpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQocmVkdWNlciwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXh0UmVkdWNlciA9IHJlcXVpcmUocmVkdWNlcikuZGVmYXVsdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQge1xuICBpbml0U3RvcmUsIGhpc3RvcnksXG59O1xuIl19