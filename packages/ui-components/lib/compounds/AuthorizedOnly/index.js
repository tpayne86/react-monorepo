"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var AuthorizeOnly = function AuthorizeOnly(_ref) {
  var children = _ref.children,
      allowedRoles = _ref.allowedRoles,
      user = _ref.user;
  return allowedRoles.includes(user.role) && _react.default.createElement(_react.default.Fragment, null, children);
};

AuthorizeOnly.propTypes = {
  children: _propTypes.default.node.isRequired,
  allowedRoles: _propTypes.default.array.isRequired,
  user: _propTypes.default.object.isRequired
};
var _default = AuthorizeOnly;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthorizeOnly, "AuthorizeOnly", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedOnly/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedOnly/index.jsx");
  leaveModule(module);
})();

;