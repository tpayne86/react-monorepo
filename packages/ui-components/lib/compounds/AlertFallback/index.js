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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AlertFallback, "AlertFallback", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AlertFallback/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AlertFallback/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvQWxlcnRGYWxsYmFjay9pbmRleC5qc3giXSwibmFtZXMiOlsiQWxlcnRGYWxsYmFjayIsImhhc0FsZXJ0IiwiY2hpbGRyZW4iLCJ0eXBlIiwiYWxlcnRUaXRsZSIsImFsZXJ0RGVzY3JpcHRpb24iLCJjbG9zYWJsZSIsIm9uQ2xvc2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxRQURvQixRQUNwQkEsUUFEb0I7QUFBQSxNQUNWQyxRQURVLFFBQ1ZBLFFBRFU7QUFBQSxNQUNBQyxJQURBLFFBQ0FBLElBREE7QUFBQSxNQUNNQyxVQUROLFFBQ01BLFVBRE47QUFBQSxNQUNrQkMsZ0JBRGxCLFFBQ2tCQSxnQkFEbEI7QUFBQSxNQUNvQ0MsUUFEcEMsUUFDb0NBLFFBRHBDO0FBQUEsTUFDOENDLE9BRDlDLFFBQzhDQSxPQUQ5QztBQUFBLFNBR3BCLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBRUlOLFFBQVEsS0FBSyxJQUFiLEdBRUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsNkJBQUMsY0FBRDtBQUNFLElBQUEsT0FBTyxFQUFFRyxVQURYO0FBRUUsSUFBQSxXQUFXLEVBQUVDLGdCQUZmO0FBR0UsSUFBQSxJQUFJLEVBQUVGLElBSFI7QUFJRSxJQUFBLFFBQVEsRUFBRUcsUUFKWjtBQUtFLElBQUEsT0FBTyxFQUFFQztBQUxYLElBREYsQ0FGSixHQVlJTCxRQWRSLENBSG9CO0FBQUEsQ0FBdEI7O0FBc0JBRixhQUFhLENBQUNRLFNBQWQsR0FBMEI7QUFDeEJQLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVDLElBQVYsQ0FBZUMsVUFERDtBQUV4QlQsRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUcsSUFBVixDQUFlRCxVQUZEO0FBR3hCUixFQUFBQSxJQUFJLEVBQUVNLG1CQUFVSSxNQUhRO0FBSXhCVCxFQUFBQSxVQUFVLEVBQUVLLG1CQUFVSSxNQUpFO0FBS3hCUixFQUFBQSxnQkFBZ0IsRUFBRUksbUJBQVVJLE1BTEo7QUFNeEJQLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVDLElBTkk7QUFPeEJILEVBQUFBLE9BQU8sRUFBRUUsbUJBQVVLO0FBUEssQ0FBMUI7QUFTQWQsYUFBYSxDQUFDZSxZQUFkLEdBQTZCO0FBQzNCWixFQUFBQSxJQUFJLEVBQUUsT0FEcUI7QUFFM0JDLEVBQUFBLFVBQVUsRUFBRSxzQ0FGZTtBQUczQkMsRUFBQUEsZ0JBQWdCLEVBQUUsRUFIUztBQUkzQkMsRUFBQUEsUUFBUSxFQUFFLEtBSmlCO0FBSzNCQyxFQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRTtBQUxVLENBQTdCO2VBUWVQLGE7Ozs7Ozs7Ozs7OzswQkF2Q1RBLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi8uLi9lbGVtZW50cy9BbGVydCc7XG5cbmNvbnN0IEFsZXJ0RmFsbGJhY2sgPSAoe1xuICBoYXNBbGVydCwgY2hpbGRyZW4sIHR5cGUsIGFsZXJ0VGl0bGUsIGFsZXJ0RGVzY3JpcHRpb24sIGNsb3NhYmxlLCBvbkNsb3NlLFxufSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAge1xuICAgICAgaGFzQWxlcnQgPT09IHRydWVcbiAgICAgICAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtLWNlbnRlciBwYWRkaW5nIHBhZGRpbmctLWxnXCI+XG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgbWVzc2FnZT17YWxlcnRUaXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2FsZXJ0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgIGNsb3NhYmxlPXtjbG9zYWJsZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgOiBjaGlsZHJlblxuICAgIH1cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbkFsZXJ0RmFsbGJhY2sucHJvcFR5cGVzID0ge1xuICBoYXNBbGVydDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsZXJ0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsZXJ0RGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuQWxlcnRGYWxsYmFjay5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdlcnJvcicsXG4gIGFsZXJ0VGl0bGU6ICdTb21lIEVycm9yIE9jY3VyZWQuIFBsZWFzZSB0cnkgYWdhaW4nLFxuICBhbGVydERlc2NyaXB0aW9uOiAnJyxcbiAgY2xvc2FibGU6IGZhbHNlLFxuICBvbkNsb3NlOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0RmFsbGJhY2s7XG4iXX0=