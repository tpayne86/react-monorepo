"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var AppMessage = function AppMessage(type, messageText) {
  return _message2.default[type](messageText);
};

var _default = AppMessage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppMessage, "AppMessage", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Message/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Message/index.jsx");
  leaveModule(module);
})();

;