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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppIcon, "AppIcon", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Icon/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Icon/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9JY29uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBcHBJY29uIiwidHlwZSIsInN0eWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQ2Q7QUFBTSxJQUFBLElBQUksRUFBRUQsSUFBWjtBQUFrQixJQUFBLEtBQUssRUFBRUM7QUFBekIsSUFEYztBQUFBLENBQWhCOztBQUlBRixPQUFPLENBQUNHLFNBQVIsR0FBb0I7QUFDbEJGLEVBQUFBLElBQUksRUFBRUcsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREw7QUFFbEJKLEVBQUFBLEtBQUssRUFBRUUsbUJBQVVHO0FBRkMsQ0FBcEI7QUFJQVAsT0FBTyxDQUFDUSxZQUFSLEdBQXVCO0FBQ3JCTixFQUFBQSxLQUFLLEVBQUU7QUFEYyxDQUF2QjtlQUllRixPOzs7Ozs7Ozs7Ozs7MEJBWlRBLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgQXBwSWNvbiA9ICh7IHR5cGUsIHN0eWxlIH0pID0+IChcbiAgPEljb24gdHlwZT17dHlwZX0gc3R5bGU9e3N0eWxlfSAvPlxuKTtcblxuQXBwSWNvbi5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuQXBwSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEljb247XG4iXX0=