"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var AppButton = function AppButton(_ref) {
  var disabled = _ref.disabled,
      url = _ref.url,
      icon = _ref.icon,
      shape = _ref.shape,
      loading = _ref.loading,
      type = _ref.type,
      onClick = _ref.onClick,
      label = _ref.label,
      meta = _ref.meta;
  return _react.default.createElement(_button.default, {
    disabled: disabled,
    url: url,
    icon: icon,
    loading: loading,
    shape: shape,
    type: type,
    onClick: onClick,
    "data-meta": meta
  }, label);
};

AppButton.defaultProps = {
  disabled: false,
  url: null,
  icon: null,
  loading: false,
  shape: null,
  type: 'primary',
  meta: null
};
AppButton.propTypes = {
  disabled: _propTypes.default.bool,
  url: _propTypes.default.string,
  icon: _propTypes.default.string,
  type: _propTypes.default.string,
  loading: _propTypes.default.bool,
  shape: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  meta: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = AppButton;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppButton, "AppButton", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Button/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Button/index.jsx");
  leaveModule(module);
})();

;