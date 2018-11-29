"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var AppIcon = function AppIcon(_ref) {
  var type = _ref.type,
      style = _ref.style;
  return _react.default.createElement(_icon.default, {
    type: type,
    style: style
  });
};

AppIcon.propTypes = {
  type: _propTypes.default.string.isRequired,
  style: _propTypes.default.object
};
AppIcon.defaultProps = {
  style: {}
};
var _default = AppIcon;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppIcon, "AppIcon", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Icon/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Icon/index.jsx");
  leaveModule(module);
})();

;