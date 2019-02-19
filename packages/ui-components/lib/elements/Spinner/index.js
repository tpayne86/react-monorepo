"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var Spinner = function Spinner(_ref) {
  var visible = _ref.visible,
      size = _ref.size;
  return _react.default.createElement(_react.default.Fragment, null, visible && _react.default.createElement(_spin.default, {
    size: size
  }));
};

Spinner.propTypes = {
  visible: _propTypes.default.bool.isRequired,
  size: _propTypes.default.string
};
Spinner.defaultProps = {
  size: 'default'
};
var _default = Spinner;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Spinner/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Spinner/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9TcGlubmVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTcGlubmVyIiwidmlzaWJsZSIsInNpemUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLElBQVosUUFBWUEsSUFBWjtBQUFBLFNBQ2QsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFBaUJELE9BQU8sSUFBSTtBQUFNLElBQUEsSUFBSSxFQUFFQztBQUFaLElBQTVCLENBRGM7QUFBQSxDQUFoQjs7QUFJQUYsT0FBTyxDQUFDRyxTQUFSLEdBQW9CO0FBQ2xCRixFQUFBQSxPQUFPLEVBQUVHLG1CQUFVQyxJQUFWLENBQWVDLFVBRE47QUFFbEJKLEVBQUFBLElBQUksRUFBRUUsbUJBQVVHO0FBRkUsQ0FBcEI7QUFJQVAsT0FBTyxDQUFDUSxZQUFSLEdBQXVCO0FBQ3JCTixFQUFBQSxJQUFJLEVBQUU7QUFEZSxDQUF2QjtlQUllRixPOzs7Ozs7Ozs7Ozs7MEJBWlRBLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcblxuY29uc3QgU3Bpbm5lciA9ICh7IHZpc2libGUsIHNpemUgfSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+e3Zpc2libGUgJiYgPFNwaW4gc2l6ZT17c2l6ZX0gLz59PC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiAnZGVmYXVsdCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIl19