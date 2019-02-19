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