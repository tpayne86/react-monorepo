"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spinner = _interopRequireDefault(require("../../elements/Spinner"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var LoadingFallback = function LoadingFallback(_ref) {
  var loading = _ref.loading,
      children = _ref.children,
      size = _ref.size;
  return _react.default.createElement(_react.default.Fragment, null, loading === true ? _react.default.createElement("div", {
    className: "flex flex--center padding padding--lg"
  }, _react.default.createElement(_Spinner.default, {
    visible: loading,
    size: size
  })) : children);
};

LoadingFallback.propTypes = {
  loading: _propTypes.default.bool.isRequired,
  children: _propTypes.default.node.isRequired,
  size: _propTypes.default.string
};
LoadingFallback.defaultProps = {
  size: 'default'
};
var _default = LoadingFallback;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadingFallback, "LoadingFallback", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/LoadingFallback/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/LoadingFallback/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvTG9hZGluZ0ZhbGxiYWNrL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJMb2FkaW5nRmFsbGJhY2siLCJsb2FkaW5nIiwiY2hpbGRyZW4iLCJzaXplIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLFFBQVosUUFBWUEsUUFBWjtBQUFBLE1BQXNCQyxJQUF0QixRQUFzQkEsSUFBdEI7QUFBQSxTQUN0Qiw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUVJRixPQUFPLEtBQUssSUFBWixHQUVJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxPQUFPLEVBQUVBLE9BQWxCO0FBQTJCLElBQUEsSUFBSSxFQUFFRTtBQUFqQyxJQURGLENBRkosR0FNSUQsUUFSUixDQURzQjtBQUFBLENBQXhCOztBQWNBRixlQUFlLENBQUNJLFNBQWhCLEdBQTRCO0FBQzFCSCxFQUFBQSxPQUFPLEVBQUVJLG1CQUFVQyxJQUFWLENBQWVDLFVBREU7QUFFMUJMLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVHLElBQVYsQ0FBZUQsVUFGQztBQUcxQkosRUFBQUEsSUFBSSxFQUFFRSxtQkFBVUk7QUFIVSxDQUE1QjtBQUtBVCxlQUFlLENBQUNVLFlBQWhCLEdBQStCO0FBQzdCUCxFQUFBQSxJQUFJLEVBQUU7QUFEdUIsQ0FBL0I7ZUFJZUgsZTs7Ozs7Ozs7Ozs7OzBCQXZCVEEsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvU3Bpbm5lcic7XG5cbmNvbnN0IExvYWRpbmdGYWxsYmFjayA9ICh7IGxvYWRpbmcsIGNoaWxkcmVuLCBzaXplIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIHtcbiAgICAgIGxvYWRpbmcgPT09IHRydWVcbiAgICAgICAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtLWNlbnRlciBwYWRkaW5nIHBhZGRpbmctLWxnXCI+XG4gICAgICAgICAgICA8U3Bpbm5lciB2aXNpYmxlPXtsb2FkaW5nfSBzaXplPXtzaXplfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDogY2hpbGRyZW5cbiAgICB9XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5Mb2FkaW5nRmFsbGJhY2sucHJvcFR5cGVzID0ge1xuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5Mb2FkaW5nRmFsbGJhY2suZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiAnZGVmYXVsdCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nRmFsbGJhY2s7XG4iXX0=