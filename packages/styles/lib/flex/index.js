"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.justifyAround = exports.justifyBetween = exports.itemStart = exports.itemCenter = exports.flexCenter = exports.flexCol = exports.flexWrap = exports.flex = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  justify-content: space-around;\n  align-content: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  justify-content: space-between;\n  align-content: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  align-items: flex-start;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var flex = (0, _styledComponents.css)(_templateObject());
exports.flex = flex;
var flexWrap = (0, _styledComponents.css)(_templateObject2());
exports.flexWrap = flexWrap;
var flexCol = (0, _styledComponents.css)(_templateObject3());
exports.flexCol = flexCol;
var flexCenter = (0, _styledComponents.css)(_templateObject4());
exports.flexCenter = flexCenter;
var itemCenter = (0, _styledComponents.css)(_templateObject5());
exports.itemCenter = itemCenter;
var itemStart = (0, _styledComponents.css)(_templateObject6());
exports.itemStart = itemStart;
var justifyBetween = (0, _styledComponents.css)(_templateObject7());
exports.justifyBetween = justifyBetween;
var justifyAround = (0, _styledComponents.css)(_templateObject8());
exports.justifyAround = justifyAround;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(flex, "flex", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
  reactHotLoader.register(flexWrap, "flexWrap", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
  reactHotLoader.register(flexCol, "flexCol", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
  reactHotLoader.register(flexCenter, "flexCenter", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
  reactHotLoader.register(itemCenter, "itemCenter", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
  reactHotLoader.register(itemStart, "itemStart", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
  reactHotLoader.register(justifyBetween, "justifyBetween", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
  reactHotLoader.register(justifyAround, "justifyAround", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/flex/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();