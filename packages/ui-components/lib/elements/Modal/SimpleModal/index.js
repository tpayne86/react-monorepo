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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9Nb2RhbC9TaW1wbGVNb2RhbC9pbmRleC5qc3giXSwibmFtZXMiOlsiU2ltcGxlTW9kYWwiLCJjaGlsZHJlbiIsInZpc2libGUiLCJvbk9rIiwib25DYW5jZWwiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLFFBRGtCLFFBQ2xCQSxRQURrQjtBQUFBLE1BQ1JDLE9BRFEsUUFDUkEsT0FEUTtBQUFBLE1BQ0NDLElBREQsUUFDQ0EsSUFERDtBQUFBLE1BQ09DLFFBRFAsUUFDT0EsUUFEUDtBQUFBLE1BQ2lCQyxLQURqQixRQUNpQkEsS0FEakI7QUFBQSxTQUdsQjtBQUNFLElBQUEsS0FBSyxFQUFFQSxLQURUO0FBRUUsSUFBQSxPQUFPLEVBQUVILE9BRlg7QUFHRSxJQUFBLElBQUksRUFBRUMsSUFIUjtBQUlFLElBQUEsUUFBUSxFQUFFQztBQUpaLEtBTUdILFFBTkgsQ0FIa0I7QUFBQSxDQUFwQjs7QUFhQUQsV0FBVyxDQUFDTSxTQUFaLEdBQXdCO0FBQ3RCTCxFQUFBQSxRQUFRLEVBQUVNLG1CQUFVQyxTQUFWLENBQW9CLENBQzVCRCxtQkFBVUUsSUFEa0IsRUFDWkYsbUJBQVVHLE9BQVYsQ0FBa0JILG1CQUFVRSxJQUE1QixDQURZLENBQXBCLEVBRVBFLFVBSG1CO0FBSXRCVCxFQUFBQSxPQUFPLEVBQUVLLG1CQUFVSyxJQUFWLENBQWVELFVBSkY7QUFLdEJSLEVBQUFBLElBQUksRUFBRUksbUJBQVVNLElBTE07QUFNdEJULEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVNLElBTkU7QUFPdEJSLEVBQUFBLEtBQUssRUFBRUUsbUJBQVVPLE1BQVYsQ0FBaUJIO0FBUEYsQ0FBeEI7QUFVQVgsV0FBVyxDQUFDZSxZQUFaLEdBQTJCO0FBQ3pCWixFQUFBQSxJQUFJLEVBQUUsZ0JBQU0sQ0FBRSxDQURXO0FBRXpCQyxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQUZPLENBQTNCO2VBS2VKLFc7Ozs7Ozs7Ozs7OzswQkE1QlRBLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IFNpbXBsZU1vZGFsID0gKHtcbiAgY2hpbGRyZW4sIHZpc2libGUsIG9uT2ssIG9uQ2FuY2VsLCB0aXRsZSxcbn0pID0+IChcbiAgPE1vZGFsXG4gICAgdGl0bGU9e3RpdGxlfVxuICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgb25Paz17b25Pa31cbiAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvTW9kYWw+XG4pO1xuXG5TaW1wbGVNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICBdKS5pc1JlcXVpcmVkLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuU2ltcGxlTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBvbk9rOiAoKSA9PiB7fSxcbiAgb25DYW5jZWw6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlTW9kYWw7XG4iXX0=