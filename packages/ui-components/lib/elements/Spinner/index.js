"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var Spinner = function Spinner(_ref) {
  var visible = _ref.visible,
      size = _ref.size;
  return _react.default.createElement(_react.default.Fragment, null, visible && _react.default.createElement(_spin.default, {
    size: size
  }));
};

Spinner.propTypes = {
  visible: _propTypes.default.bool.isRequired,
  size: _propTypes.default.string
};
Spinner.defaultProps = {
  size: 'default'
};
var _default = Spinner;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Spinner/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Spinner/index.jsx");
  leaveModule(module);
})();

;