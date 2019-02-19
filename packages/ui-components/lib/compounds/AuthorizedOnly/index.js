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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvQXV0aG9yaXplZE9ubHkvaW5kZXguanN4Il0sIm5hbWVzIjpbIkF1dGhvcml6ZU9ubHkiLCJjaGlsZHJlbiIsImFsbG93ZWRSb2xlcyIsInVzZXIiLCJpbmNsdWRlcyIsInJvbGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxZQUFiLFFBQWFBLFlBQWI7QUFBQSxNQUEyQkMsSUFBM0IsUUFBMkJBLElBQTNCO0FBQUEsU0FDcEJELFlBQVksQ0FBQ0UsUUFBYixDQUFzQkQsSUFBSSxDQUFDRSxJQUEzQixLQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQWlCSixRQUFqQixDQUZrQjtBQUFBLENBQXRCOztBQUtBRCxhQUFhLENBQUNNLFNBQWQsR0FBMEI7QUFDeEJMLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVDLElBQVYsQ0FBZUMsVUFERDtBQUV4QlAsRUFBQUEsWUFBWSxFQUFFSyxtQkFBVUcsS0FBVixDQUFnQkQsVUFGTjtBQUd4Qk4sRUFBQUEsSUFBSSxFQUFFSSxtQkFBVUksTUFBVixDQUFpQkY7QUFIQyxDQUExQjtlQU1lVCxhOzs7Ozs7Ozs7Ozs7MEJBWFRBLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQXV0aG9yaXplT25seSA9ICh7IGNoaWxkcmVuLCBhbGxvd2VkUm9sZXMsIHVzZXIgfSkgPT5cbiAgYWxsb3dlZFJvbGVzLmluY2x1ZGVzKHVzZXIucm9sZSkgJiYgKFxuICAgIDxSZWFjdC5GcmFnbWVudD57Y2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcblxuQXV0aG9yaXplT25seS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBhbGxvd2VkUm9sZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3JpemVPbmx5O1xuIl19