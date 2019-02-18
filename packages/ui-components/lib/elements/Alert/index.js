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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9BbGVydC9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwQWxlcnQiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwiY2xvc2FibGUiLCJvbkNsb3NlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFDZkMsT0FEZSxRQUNmQSxPQURlO0FBQUEsTUFDTkMsV0FETSxRQUNOQSxXQURNO0FBQUEsTUFDT0MsSUFEUCxRQUNPQSxJQURQO0FBQUEsTUFDYUMsUUFEYixRQUNhQSxRQURiO0FBQUEsTUFDdUJDLE9BRHZCLFFBQ3VCQSxPQUR2QjtBQUFBLFNBR2YsMENBQ0U7QUFDRSxJQUFBLE9BQU8sRUFBRUosT0FEWDtBQUVFLElBQUEsV0FBVyxFQUFFQyxXQUZmO0FBR0UsSUFBQSxJQUFJLEVBQUVDLElBSFI7QUFJRSxJQUFBLFFBQVEsRUFBRUMsUUFBUSxLQUFLLElBSnpCO0FBS0UsSUFBQSxPQUFPLEVBQUVDLE9BTFg7QUFNRSxJQUFBLFFBQVE7QUFOVixJQURGLENBSGU7QUFBQSxDQUFqQjs7QUFlQUwsUUFBUSxDQUFDTSxTQUFULEdBQXFCO0FBQ25CTCxFQUFBQSxPQUFPLEVBQUVNLG1CQUFVQyxNQUFWLENBQWlCQyxVQURQO0FBRW5CUCxFQUFBQSxXQUFXLEVBQUVLLG1CQUFVQyxNQUZKO0FBR25CTCxFQUFBQSxJQUFJLEVBQUVJLG1CQUFVQyxNQUhHO0FBSW5CSixFQUFBQSxRQUFRLEVBQUVHLG1CQUFVRyxJQUpEO0FBS25CTCxFQUFBQSxPQUFPLEVBQUVFLG1CQUFVSTtBQUxBLENBQXJCO0FBT0FYLFFBQVEsQ0FBQ1ksWUFBVCxHQUF3QjtBQUN0QlIsRUFBQUEsUUFBUSxFQUFFLEtBRFk7QUFFdEJDLEVBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBRks7QUFHdEJGLEVBQUFBLElBQUksRUFBRSxPQUhnQjtBQUl0QkQsRUFBQUEsV0FBVyxFQUFFO0FBSlMsQ0FBeEI7ZUFRZUYsUTs7Ozs7Ozs7Ozs7OzBCQTlCVEEsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBBcHBBbGVydCA9ICh7XG4gIG1lc3NhZ2UsIGRlc2NyaXB0aW9uLCB0eXBlLCBjbG9zYWJsZSwgb25DbG9zZSxcbn0pID0+IChcbiAgPGRpdj5cbiAgICA8QWxlcnRcbiAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgY2xvc2FibGU9e2Nsb3NhYmxlID09PSB0cnVlfVxuICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgIHNob3dJY29uXG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5BcHBBbGVydC5wcm9wVHlwZXMgPSB7XG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuQXBwQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBjbG9zYWJsZTogZmFsc2UsXG4gIG9uQ2xvc2U6ICgpID0+IHt9LFxuICB0eXBlOiAnZXJyb3InLFxuICBkZXNjcmlwdGlvbjogJycsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFsZXJ0O1xuIl19