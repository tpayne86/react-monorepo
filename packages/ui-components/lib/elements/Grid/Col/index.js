"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var GridCol = function GridCol(_ref) {
  var size = _ref.size,
      children = _ref.children,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl;
  return _react.default.createElement(_col.default, {
    span: size,
    xs: xs || size,
    sm: sm || size,
    md: md || size,
    lg: lg || size,
    xl: xl || size
  }, children);
};

GridCol.defaultProps = {
  size: 24,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0
};
GridCol.propTypes = {
  size: _propTypes.default.number,
  children: _propTypes.default.node.isRequired,
  xs: _propTypes.default.number,
  sm: _propTypes.default.number,
  md: _propTypes.default.number,
  lg: _propTypes.default.number,
  xl: _propTypes.default.number
};
var _default = GridCol;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GridCol, "GridCol", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Col/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Col/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9HcmlkL0NvbC9pbmRleC5qc3giXSwibmFtZXMiOlsiR3JpZENvbCIsInNpemUiLCJjaGlsZHJlbiIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQ2RDLElBRGMsUUFDZEEsSUFEYztBQUFBLE1BRWRDLFFBRmMsUUFFZEEsUUFGYztBQUFBLE1BR2RDLEVBSGMsUUFHZEEsRUFIYztBQUFBLE1BR1ZDLEVBSFUsUUFHVkEsRUFIVTtBQUFBLE1BR05DLEVBSE0sUUFHTkEsRUFITTtBQUFBLE1BR0ZDLEVBSEUsUUFHRkEsRUFIRTtBQUFBLE1BR0VDLEVBSEYsUUFHRUEsRUFIRjtBQUFBLFNBS2Q7QUFDRSxJQUFBLElBQUksRUFBRU4sSUFEUjtBQUVFLElBQUEsRUFBRSxFQUFFRSxFQUFFLElBQUlGLElBRlo7QUFHRSxJQUFBLEVBQUUsRUFBRUcsRUFBRSxJQUFJSCxJQUhaO0FBSUUsSUFBQSxFQUFFLEVBQUVJLEVBQUUsSUFBSUosSUFKWjtBQUtFLElBQUEsRUFBRSxFQUFFSyxFQUFFLElBQUlMLElBTFo7QUFNRSxJQUFBLEVBQUUsRUFBRU0sRUFBRSxJQUFJTjtBQU5aLEtBUUdDLFFBUkgsQ0FMYztBQUFBLENBQWhCOztBQWdCQUYsT0FBTyxDQUFDUSxZQUFSLEdBQXVCO0FBQ3JCUCxFQUFBQSxJQUFJLEVBQUUsRUFEZTtBQUVyQkUsRUFBQUEsRUFBRSxFQUFFLENBRmlCO0FBR3JCQyxFQUFBQSxFQUFFLEVBQUUsQ0FIaUI7QUFJckJDLEVBQUFBLEVBQUUsRUFBRSxDQUppQjtBQUtyQkMsRUFBQUEsRUFBRSxFQUFFLENBTGlCO0FBTXJCQyxFQUFBQSxFQUFFLEVBQUU7QUFOaUIsQ0FBdkI7QUFRQVAsT0FBTyxDQUFDUyxTQUFSLEdBQW9CO0FBQ2xCUixFQUFBQSxJQUFJLEVBQUVTLG1CQUFVQyxNQURFO0FBRWxCVCxFQUFBQSxRQUFRLEVBQUVRLG1CQUFVRSxJQUFWLENBQWVDLFVBRlA7QUFHbEJWLEVBQUFBLEVBQUUsRUFBRU8sbUJBQVVDLE1BSEk7QUFJbEJQLEVBQUFBLEVBQUUsRUFBRU0sbUJBQVVDLE1BSkk7QUFLbEJOLEVBQUFBLEVBQUUsRUFBRUssbUJBQVVDLE1BTEk7QUFNbEJMLEVBQUFBLEVBQUUsRUFBRUksbUJBQVVDLE1BTkk7QUFPbEJKLEVBQUFBLEVBQUUsRUFBRUcsbUJBQVVDO0FBUEksQ0FBcEI7ZUFVZVgsTzs7Ozs7Ozs7Ozs7OzBCQWxDVEEsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IEdyaWRDb2wgPSAoe1xuICBzaXplLFxuICBjaGlsZHJlbixcbiAgeHMsIHNtLCBtZCwgbGcsIHhsLFxufSkgPT4gKFxuICA8Q29sXG4gICAgc3Bhbj17c2l6ZX1cbiAgICB4cz17eHMgfHwgc2l6ZX1cbiAgICBzbT17c20gfHwgc2l6ZX1cbiAgICBtZD17bWQgfHwgc2l6ZX1cbiAgICBsZz17bGcgfHwgc2l6ZX1cbiAgICB4bD17eGwgfHwgc2l6ZX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Db2w+XG4pO1xuR3JpZENvbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDI0LFxuICB4czogMCxcbiAgc206IDAsXG4gIG1kOiAwLFxuICBsZzogMCxcbiAgeGw6IDAsXG59O1xuR3JpZENvbC5wcm9wVHlwZXMgPSB7XG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB4czogUHJvcFR5cGVzLm51bWJlcixcbiAgc206IFByb3BUeXBlcy5udW1iZXIsXG4gIG1kOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsZzogUHJvcFR5cGVzLm51bWJlcixcbiAgeGw6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkQ29sO1xuIl19