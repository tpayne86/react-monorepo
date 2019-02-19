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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppMessage, "AppMessage", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Message/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Message/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9NZXNzYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBcHBNZXNzYWdlIiwidHlwZSIsIm1lc3NhZ2VUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBT0MsV0FBUDtBQUFBLFNBQXVCLGtCQUFRRCxJQUFSLEVBQWNDLFdBQWQsQ0FBdkI7QUFBQSxDQUFuQjs7ZUFDZUYsVTs7Ozs7Ozs7Ozs7OzBCQURUQSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBBcHBNZXNzYWdlID0gKHR5cGUsIG1lc3NhZ2VUZXh0KSA9PiBtZXNzYWdlW3R5cGVdKG1lc3NhZ2VUZXh0KTtcbmV4cG9ydCBkZWZhdWx0IEFwcE1lc3NhZ2U7XG4iXX0=