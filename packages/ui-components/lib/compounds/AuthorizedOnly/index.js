"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var AuthorizeOnly = function AuthorizeOnly(_ref) {
  var children = _ref.children,
      allowedRoles = _ref.allowedRoles,
      user = _ref.user;
  return allowedRoles.includes(user.role) && _react.default.createElement(_react.default.Fragment, null, children);
};

AuthorizeOnly.propTypes = {
  children: _propTypes.default.node.isRequired,
  allowedRoles: _propTypes.default.array.isRequired,
  user: _propTypes.default.object.isRequired
};
var _default = AuthorizeOnly;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthorizeOnly, "AuthorizeOnly", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedOnly/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedOnly/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvQXV0aG9yaXplZE9ubHkvaW5kZXguanN4Il0sIm5hbWVzIjpbIkF1dGhvcml6ZU9ubHkiLCJjaGlsZHJlbiIsImFsbG93ZWRSb2xlcyIsInVzZXIiLCJpbmNsdWRlcyIsInJvbGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxZQUFiLFFBQWFBLFlBQWI7QUFBQSxNQUEyQkMsSUFBM0IsUUFBMkJBLElBQTNCO0FBQUEsU0FDcEJELFlBQVksQ0FBQ0UsUUFBYixDQUFzQkQsSUFBSSxDQUFDRSxJQUEzQixLQUVBLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0dKLFFBREgsQ0FIb0I7QUFBQSxDQUF0Qjs7QUFTQUQsYUFBYSxDQUFDTSxTQUFkLEdBQTBCO0FBQ3hCTCxFQUFBQSxRQUFRLEVBQUVNLG1CQUFVQyxJQUFWLENBQWVDLFVBREQ7QUFFeEJQLEVBQUFBLFlBQVksRUFBRUssbUJBQVVHLEtBQVYsQ0FBZ0JELFVBRk47QUFHeEJOLEVBQUFBLElBQUksRUFBRUksbUJBQVVJLE1BQVYsQ0FBaUJGO0FBSEMsQ0FBMUI7ZUFNZVQsYTs7Ozs7Ozs7Ozs7OzBCQWZUQSxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEF1dGhvcml6ZU9ubHkgPSAoeyBjaGlsZHJlbiwgYWxsb3dlZFJvbGVzLCB1c2VyIH0pID0+IChcbiAgYWxsb3dlZFJvbGVzLmluY2x1ZGVzKHVzZXIucm9sZSlcbiAgJiYgKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAge2NoaWxkcmVufVxuICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG4pO1xuXG5BdXRob3JpemVPbmx5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGFsbG93ZWRSb2xlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhvcml6ZU9ubHk7XG4iXX0=