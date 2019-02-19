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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvQWxlcnRGYWxsYmFjay9pbmRleC5qc3giXSwibmFtZXMiOlsiQWxlcnRGYWxsYmFjayIsImhhc0FsZXJ0IiwiY2hpbGRyZW4iLCJ0eXBlIiwiYWxlcnRUaXRsZSIsImFsZXJ0RGVzY3JpcHRpb24iLCJjbG9zYWJsZSIsIm9uQ2xvc2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxRQURvQixRQUNwQkEsUUFEb0I7QUFBQSxNQUVwQkMsUUFGb0IsUUFFcEJBLFFBRm9CO0FBQUEsTUFHcEJDLElBSG9CLFFBR3BCQSxJQUhvQjtBQUFBLE1BSXBCQyxVQUpvQixRQUlwQkEsVUFKb0I7QUFBQSxNQUtwQkMsZ0JBTG9CLFFBS3BCQSxnQkFMb0I7QUFBQSxNQU1wQkMsUUFOb0IsUUFNcEJBLFFBTm9CO0FBQUEsTUFPcEJDLE9BUG9CLFFBT3BCQSxPQVBvQjtBQUFBLFNBU3BCLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0dOLFFBQVEsS0FBSyxJQUFiLEdBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsNkJBQUMsY0FBRDtBQUNFLElBQUEsT0FBTyxFQUFFRyxVQURYO0FBRUUsSUFBQSxXQUFXLEVBQUVDLGdCQUZmO0FBR0UsSUFBQSxJQUFJLEVBQUVGLElBSFI7QUFJRSxJQUFBLFFBQVEsRUFBRUcsUUFKWjtBQUtFLElBQUEsT0FBTyxFQUFFQztBQUxYLElBREYsQ0FERCxHQVdDTCxRQVpKLENBVG9CO0FBQUEsQ0FBdEI7O0FBMEJBRixhQUFhLENBQUNRLFNBQWQsR0FBMEI7QUFDeEJQLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVDLElBQVYsQ0FBZUMsVUFERDtBQUV4QlQsRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUcsSUFBVixDQUFlRCxVQUZEO0FBR3hCUixFQUFBQSxJQUFJLEVBQUVNLG1CQUFVSSxNQUhRO0FBSXhCVCxFQUFBQSxVQUFVLEVBQUVLLG1CQUFVSSxNQUpFO0FBS3hCUixFQUFBQSxnQkFBZ0IsRUFBRUksbUJBQVVJLE1BTEo7QUFNeEJQLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVDLElBTkk7QUFPeEJILEVBQUFBLE9BQU8sRUFBRUUsbUJBQVVLO0FBUEssQ0FBMUI7QUFTQWQsYUFBYSxDQUFDZSxZQUFkLEdBQTZCO0FBQzNCWixFQUFBQSxJQUFJLEVBQUUsT0FEcUI7QUFFM0JDLEVBQUFBLFVBQVUsRUFBRSxzQ0FGZTtBQUczQkMsRUFBQUEsZ0JBQWdCLEVBQUUsRUFIUztBQUkzQkMsRUFBQUEsUUFBUSxFQUFFLEtBSmlCO0FBSzNCQyxFQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRTtBQUxVLENBQTdCO2VBUWVQLGE7Ozs7Ozs7Ozs7OzswQkEzQ1RBLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi8uLi9lbGVtZW50cy9BbGVydCc7XG5cbmNvbnN0IEFsZXJ0RmFsbGJhY2sgPSAoe1xuICBoYXNBbGVydCxcbiAgY2hpbGRyZW4sXG4gIHR5cGUsXG4gIGFsZXJ0VGl0bGUsXG4gIGFsZXJ0RGVzY3JpcHRpb24sXG4gIGNsb3NhYmxlLFxuICBvbkNsb3NlLFxufSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAge2hhc0FsZXJ0ID09PSB0cnVlID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtLWNlbnRlciBwYWRkaW5nIHBhZGRpbmctLWxnXCI+XG4gICAgICAgIDxBbGVydFxuICAgICAgICAgIG1lc3NhZ2U9e2FsZXJ0VGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2FsZXJ0RGVzY3JpcHRpb259XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICBjbG9zYWJsZT17Y2xvc2FibGV9XG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICkgOiAoXG4gICAgICBjaGlsZHJlblxuICAgICl9XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5BbGVydEZhbGxiYWNrLnByb3BUeXBlcyA9IHtcbiAgaGFzQWxlcnQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGVydFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGVydERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxufTtcbkFsZXJ0RmFsbGJhY2suZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnZXJyb3InLFxuICBhbGVydFRpdGxlOiAnU29tZSBFcnJvciBPY2N1cmVkLiBQbGVhc2UgdHJ5IGFnYWluJyxcbiAgYWxlcnREZXNjcmlwdGlvbjogJycsXG4gIGNsb3NhYmxlOiBmYWxzZSxcbiAgb25DbG9zZTogKCkgPT4ge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydEZhbGxiYWNrO1xuIl19