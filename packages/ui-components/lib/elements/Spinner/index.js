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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9TcGlubmVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTcGlubmVyIiwidmlzaWJsZSIsInNpemUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLElBQVosUUFBWUEsSUFBWjtBQUFBLFNBQ2QsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFFSUQsT0FBTyxJQUNKO0FBQU0sSUFBQSxJQUFJLEVBQUVDO0FBQVosSUFIUCxDQURjO0FBQUEsQ0FBaEI7O0FBU0FGLE9BQU8sQ0FBQ0csU0FBUixHQUFvQjtBQUNsQkYsRUFBQUEsT0FBTyxFQUFFRyxtQkFBVUMsSUFBVixDQUFlQyxVQUROO0FBRWxCSixFQUFBQSxJQUFJLEVBQUVFLG1CQUFVRztBQUZFLENBQXBCO0FBSUFQLE9BQU8sQ0FBQ1EsWUFBUixHQUF1QjtBQUNyQk4sRUFBQUEsSUFBSSxFQUFFO0FBRGUsQ0FBdkI7ZUFJZUYsTzs7Ozs7Ozs7Ozs7OzBCQWpCVEEsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBTcGlubmVyID0gKHsgdmlzaWJsZSwgc2l6ZSB9KSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICB7XG4gICAgICB2aXNpYmxlXG4gICAgICAmJiA8U3BpbiBzaXplPXtzaXplfSAvPlxuICAgIH1cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiAnZGVmYXVsdCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIl19