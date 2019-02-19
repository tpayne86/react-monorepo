"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/alert/style");

var _alert = _interopRequireDefault(require("antd/lib/alert"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var AppAlert = function AppAlert(_ref) {
  var message = _ref.message,
      description = _ref.description,
      type = _ref.type,
      closable = _ref.closable,
      onClose = _ref.onClose;
  return _react.default.createElement("div", null, _react.default.createElement(_alert.default, {
    message: message,
    description: description,
    type: type,
    closable: closable === true,
    onClose: onClose,
    showIcon: true
  }));
};

AppAlert.propTypes = {
  message: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  type: _propTypes.default.string,
  closable: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
AppAlert.defaultProps = {
  closable: false,
  onClose: function onClose() {},
  type: 'error',
  description: ''
};
var _default = AppAlert;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppAlert, "AppAlert", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Alert/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Alert/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();