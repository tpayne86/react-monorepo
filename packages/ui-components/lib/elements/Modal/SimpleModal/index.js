"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var SimpleModal = function SimpleModal(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      title = _ref.title;
  return _react.default.createElement(_modal.default, {
    title: title,
    visible: visible,
    onOk: onOk,
    onCancel: onCancel
  }, children);
};

SimpleModal.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired,
  visible: _propTypes.default.bool.isRequired,
  onOk: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  title: _propTypes.default.string.isRequired
};
SimpleModal.defaultProps = {
  onOk: function onOk() {},
  onCancel: function onCancel() {}
};
var _default = SimpleModal;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SimpleModal, "SimpleModal", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Modal/SimpleModal/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Modal/SimpleModal/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();