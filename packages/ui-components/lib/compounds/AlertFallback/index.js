"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Alert = _interopRequireDefault(require("../../elements/Alert"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var AlertFallback = function AlertFallback(_ref) {
  var hasAlert = _ref.hasAlert,
      children = _ref.children,
      type = _ref.type,
      alertTitle = _ref.alertTitle,
      alertDescription = _ref.alertDescription,
      closable = _ref.closable,
      onClose = _ref.onClose;
  return _react.default.createElement(_react.default.Fragment, null, hasAlert === true ? _react.default.createElement("div", {
    className: "flex flex--center padding padding--lg"
  }, _react.default.createElement(_Alert.default, {
    message: alertTitle,
    description: alertDescription,
    type: type,
    closable: closable,
    onClose: onClose
  })) : children);
};

AlertFallback.propTypes = {
  hasAlert: _propTypes.default.bool.isRequired,
  children: _propTypes.default.node.isRequired,
  type: _propTypes.default.string,
  alertTitle: _propTypes.default.string,
  alertDescription: _propTypes.default.string,
  closable: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
AlertFallback.defaultProps = {
  type: 'error',
  alertTitle: 'Some Error Occured. Please try again',
  alertDescription: '',
  closable: false,
  onClose: function onClose() {}
};
var _default = AlertFallback;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AlertFallback, "AlertFallback", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AlertFallback/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AlertFallback/index.jsx");
  leaveModule(module);
})();

;