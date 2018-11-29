"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleApiStoreStates = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var simpleApiStoreStates = function simpleApiStoreStates(state, objectName, properties) {
  //eslint-disable-line
  // strictly to be used only for simple api state

  /**
   * ex :
   * defaultState = {
   *   someProp : {
   *     loading:false;
   *     data: null | [] | 0
   *     error: null
   *   }
   *  }
   */
  var tempObject = (0, _objectSpread3.default)({}, state[objectName]);
  Object.keys(tempObject).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(properties, key)) {
      tempObject[key] = properties[key];
    }
  });
  return (0, _objectSpread3.default)({}, state, (0, _defineProperty2.default)({}, objectName, tempObject));
};

exports.simpleApiStoreStates = simpleApiStoreStates;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(simpleApiStoreStates, "simpleApiStoreStates", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/generics/index.js");
  leaveModule(module);
})();

;