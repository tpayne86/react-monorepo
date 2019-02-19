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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbImZvbnQiLCJzaXplIiwiY3NzIiwidmFyaWFibGVzIiwidGV4dCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFnQjtBQUFBLE1BQWZDLElBQWUsdUVBQVIsR0FBUTtBQUNsQyxhQUFPQyxxQkFBUCxxQkFDZUMsU0FBUyxDQUFDRixJQUFELENBRHhCO0FBR0QsQ0FKTTs7OztBQU1BLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBVTtBQUM1QixhQUFPSCxxQkFBUCxzQkFDZ0JHLElBRGhCO0FBR0QsQ0FKTTs7O2VBS1FMLEk7Ozs7Ozs7Ozs7OzswQkFYRkEsSTswQkFNQUksSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tICcuLi92YXJpYWJsZXMnO1xuXG5leHBvcnQgY29uc3QgZm9udCA9IChzaXplID0gJ00nKSA9PiB7XG4gIHJldHVybiBjc3NgXG4gICAgZm9udC1zaXplOiAke3ZhcmlhYmxlc1tzaXplXX07XG4gIGA7XG59O1xuXG5leHBvcnQgY29uc3QgdGV4dCA9ICh0eXBlKSA9PiB7XG4gIHJldHVybiBjc3NgXG4gICAgdGV4dC1hbGlnbjogJHt0eXBlfTtcbiAgYDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb250O1xuIl19