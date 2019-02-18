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
  var data = (0, _taggedTemplateLiteral2.default)(["\n   text-align: ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", "\n  "]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbImZvbnQiLCJzaXplIiwiY3NzIiwidmFyaWFibGVzIiwidGV4dCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFnQjtBQUFBLE1BQWZDLElBQWUsdUVBQVIsR0FBUTtBQUNsQyxhQUFPQyxxQkFBUCxxQkFDZUMsU0FBUyxDQUFDRixJQUFELENBRHhCO0FBR0QsQ0FKTTs7OztBQU1BLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBUztBQUMzQixhQUFPSCxxQkFBUCxzQkFDZUcsSUFEZjtBQUdELENBSk07OztlQUtRTCxJOzs7Ozs7Ozs7Ozs7MEJBWEZBLEk7MEJBTUFJLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nzc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgdmFyaWFibGVzIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5cbmV4cG9ydCBjb25zdCBmb250ID0gKHNpemUgPSAnTScpID0+IHtcbiAgcmV0dXJuIGNzcyBgXG4gICAgZm9udC1zaXplOiAke3ZhcmlhYmxlc1tzaXplXX1cbiAgYFxufVxuXG5leHBvcnQgY29uc3QgdGV4dCA9ICh0eXBlKSA9PntcbiAgcmV0dXJuIGNzcyBgXG4gICB0ZXh0LWFsaWduOiAke3R5cGV9XG4gIGBcbn1cbmV4cG9ydCBkZWZhdWx0IGZvbnRcbiJdfQ==