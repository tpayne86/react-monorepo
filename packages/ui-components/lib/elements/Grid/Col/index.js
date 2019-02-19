"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var GridCol = function GridCol(_ref) {
  var size = _ref.size,
      children = _ref.children,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl;
  return _react.default.createElement(_col.default, {
    span: size,
    xs: xs || size,
    sm: sm || size,
    md: md || size,
    lg: lg || size,
    xl: xl || size
  }, children);
};

GridCol.defaultProps = {
  size: 24,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0
};
GridCol.propTypes = {
  size: _propTypes.default.number,
  children: _propTypes.default.node.isRequired,
  xs: _propTypes.default.number,
  sm: _propTypes.default.number,
  md: _propTypes.default.number,
  lg: _propTypes.default.number,
  xl: _propTypes.default.number
};
var _default = GridCol;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GridCol, "GridCol", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Col/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Col/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();