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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9BbGVydC9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwQWxlcnQiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwiY2xvc2FibGUiLCJvbkNsb3NlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsV0FBWixRQUFZQSxXQUFaO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQStCQyxRQUEvQixRQUErQkEsUUFBL0I7QUFBQSxNQUF5Q0MsT0FBekMsUUFBeUNBLE9BQXpDO0FBQUEsU0FDZiwwQ0FDRTtBQUNFLElBQUEsT0FBTyxFQUFFSixPQURYO0FBRUUsSUFBQSxXQUFXLEVBQUVDLFdBRmY7QUFHRSxJQUFBLElBQUksRUFBRUMsSUFIUjtBQUlFLElBQUEsUUFBUSxFQUFFQyxRQUFRLEtBQUssSUFKekI7QUFLRSxJQUFBLE9BQU8sRUFBRUMsT0FMWDtBQU1FLElBQUEsUUFBUTtBQU5WLElBREYsQ0FEZTtBQUFBLENBQWpCOztBQWFBTCxRQUFRLENBQUNNLFNBQVQsR0FBcUI7QUFDbkJMLEVBQUFBLE9BQU8sRUFBRU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRFA7QUFFbkJQLEVBQUFBLFdBQVcsRUFBRUssbUJBQVVDLE1BRko7QUFHbkJMLEVBQUFBLElBQUksRUFBRUksbUJBQVVDLE1BSEc7QUFJbkJKLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVHLElBSkQ7QUFLbkJMLEVBQUFBLE9BQU8sRUFBRUUsbUJBQVVJO0FBTEEsQ0FBckI7QUFPQVgsUUFBUSxDQUFDWSxZQUFULEdBQXdCO0FBQ3RCUixFQUFBQSxRQUFRLEVBQUUsS0FEWTtBQUV0QkMsRUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FGSztBQUd0QkYsRUFBQUEsSUFBSSxFQUFFLE9BSGdCO0FBSXRCRCxFQUFBQSxXQUFXLEVBQUU7QUFKUyxDQUF4QjtlQU9lRixROzs7Ozs7Ozs7Ozs7MEJBM0JUQSxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IEFwcEFsZXJ0ID0gKHsgbWVzc2FnZSwgZGVzY3JpcHRpb24sIHR5cGUsIGNsb3NhYmxlLCBvbkNsb3NlIH0pID0+IChcbiAgPGRpdj5cbiAgICA8QWxlcnRcbiAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgY2xvc2FibGU9e2Nsb3NhYmxlID09PSB0cnVlfVxuICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgIHNob3dJY29uXG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5BcHBBbGVydC5wcm9wVHlwZXMgPSB7XG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuQXBwQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBjbG9zYWJsZTogZmFsc2UsXG4gIG9uQ2xvc2U6ICgpID0+IHt9LFxuICB0eXBlOiAnZXJyb3InLFxuICBkZXNjcmlwdGlvbjogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBBbGVydDtcbiJdfQ==