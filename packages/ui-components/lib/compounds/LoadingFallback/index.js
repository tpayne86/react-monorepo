"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spinner = _interopRequireDefault(require("../../elements/Spinner"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var LoadingFallback = function LoadingFallback(_ref) {
  var loading = _ref.loading,
      children = _ref.children,
      size = _ref.size;
  return _react.default.createElement(_react.default.Fragment, null, loading === true ? _react.default.createElement("div", {
    className: "flex flex--center padding padding--lg"
  }, _react.default.createElement(_Spinner.default, {
    visible: loading,
    size: size
  })) : children);
};

LoadingFallback.propTypes = {
  loading: _propTypes.default.bool.isRequired,
  children: _propTypes.default.node.isRequired,
  size: _propTypes.default.string
};
LoadingFallback.defaultProps = {
  size: 'default'
};
var _default = LoadingFallback;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadingFallback, "LoadingFallback", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/LoadingFallback/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/LoadingFallback/index.jsx");
  leaveModule(module);
})();

;