"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.text = exports.font = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var variables = _interopRequireWildcard(require("../variables"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    text-align: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var font = function font() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'M';
  return (0, _styledComponents.css)(_templateObject(), variables[size]);
};

exports.font = font;

var text = function text(type) {
  return (0, _styledComponents.css)(_templateObject2(), type);
};

exports.text = text;
var _default = font;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(font, "font", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/text/index.js");
  reactHotLoader.register(text, "text", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/text/index.js");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/text/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();