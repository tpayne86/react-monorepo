"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _constants = require("@healthifyme/constants");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var getRoute = function getRoute(component, path, exact, roles, user) {
  try {
    if (typeof roles === 'string' && roles === '*') {
      return _react.default.createElement(_reactRouterDom.Route, {
        exact: exact,
        component: component,
        path: path
      });
    }

    if (Array.isArray(roles) && roles.length > 0 && roles.includes(user.role)) {
      return _react.default.createElement(_reactRouterDom.Route, {
        exact: exact,
        component: component,
        path: path
      });
    }

    return _react.default.createElement(_reactRouterDom.Redirect, {
      to: "/error/".concat(_constants.ROUTE_ERROR.UNAUTHORIZED)
    });
  } catch (e) {
    return _react.default.createElement(_reactRouterDom.Redirect, {
      to: "/error/".concat(_constants.ROUTE_ERROR.FORBIDDEN)
    });
  }
};

var AuthorizedRoute = function AuthorizedRoute(_ref) {
  var component = _ref.component,
      path = _ref.path,
      exact = _ref.exact,
      roles = _ref.roles,
      user = _ref.user;
  return getRoute(component, path, exact, roles, user);
};

AuthorizedRoute.propTypes = {
  component: _propTypes.default.func.isRequired,
  path: _propTypes.default.string.isRequired,
  exact: _propTypes.default.bool,
  user: _propTypes.default.object,
  roles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array])
};
AuthorizedRoute.defaultProps = {
  exact: false,
  roles: '*'
};
var _default = AuthorizedRoute;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRoute, "getRoute", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedRoute/index.jsx");
  reactHotLoader.register(AuthorizedRoute, "AuthorizedRoute", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedRoute/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedRoute/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvQXV0aG9yaXplZFJvdXRlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJnZXRSb3V0ZSIsImNvbXBvbmVudCIsInBhdGgiLCJleGFjdCIsInJvbGVzIiwidXNlciIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImluY2x1ZGVzIiwicm9sZSIsIlJPVVRFX0VSUk9SIiwiVU5BVVRIT1JJWkVEIiwiZSIsIkZPUkJJRERFTiIsIkF1dGhvcml6ZWRSb3V0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImFycmF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0NDLElBQWhDLEVBQXlDO0FBQ3hELE1BQUk7QUFDRixRQUFJLE9BQU9ELEtBQVAsS0FBaUIsUUFBakIsSUFBNkJBLEtBQUssS0FBSyxHQUEzQyxFQUFnRDtBQUM5QyxhQUFPLDZCQUFDLHFCQUFEO0FBQU8sUUFBQSxLQUFLLEVBQUVELEtBQWQ7QUFBcUIsUUFBQSxTQUFTLEVBQUVGLFNBQWhDO0FBQTJDLFFBQUEsSUFBSSxFQUFFQztBQUFqRCxRQUFQO0FBQ0Q7O0FBQ0QsUUFBSUksS0FBSyxDQUFDQyxPQUFOLENBQWNILEtBQWQsS0FBd0JBLEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQXZDLElBQTRDSixLQUFLLENBQUNLLFFBQU4sQ0FBZUosSUFBSSxDQUFDSyxJQUFwQixDQUFoRCxFQUEyRTtBQUN6RSxhQUFPLDZCQUFDLHFCQUFEO0FBQU8sUUFBQSxLQUFLLEVBQUVQLEtBQWQ7QUFBcUIsUUFBQSxTQUFTLEVBQUVGLFNBQWhDO0FBQTJDLFFBQUEsSUFBSSxFQUFFQztBQUFqRCxRQUFQO0FBQ0Q7O0FBQ0QsV0FBTyw2QkFBQyx3QkFBRDtBQUFVLE1BQUEsRUFBRSxtQkFBWVMsdUJBQVlDLFlBQXhCO0FBQVosTUFBUDtBQUNELEdBUkQsQ0FRRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPLDZCQUFDLHdCQUFEO0FBQVUsTUFBQSxFQUFFLG1CQUFZRix1QkFBWUcsU0FBeEI7QUFBWixNQUFQO0FBQ0Q7QUFDRixDQVpEOztBQWNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUN0QmQsU0FEc0IsUUFDdEJBLFNBRHNCO0FBQUEsTUFDWEMsSUFEVyxRQUNYQSxJQURXO0FBQUEsTUFDTEMsS0FESyxRQUNMQSxLQURLO0FBQUEsTUFDRUMsS0FERixRQUNFQSxLQURGO0FBQUEsTUFDU0MsSUFEVCxRQUNTQSxJQURUO0FBQUEsU0FFbEJMLFFBQVEsQ0FBQ0MsU0FBRCxFQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0NDLElBQWhDLENBRlU7QUFBQSxDQUF4Qjs7QUFJQVUsZUFBZSxDQUFDQyxTQUFoQixHQUE0QjtBQUMxQmYsRUFBQUEsU0FBUyxFQUFFZ0IsbUJBQVVDLElBQVYsQ0FBZUMsVUFEQTtBQUUxQmpCLEVBQUFBLElBQUksRUFBRWUsbUJBQVVHLE1BQVYsQ0FBaUJELFVBRkc7QUFHMUJoQixFQUFBQSxLQUFLLEVBQUVjLG1CQUFVSSxJQUhTO0FBSTFCaEIsRUFBQUEsSUFBSSxFQUFFWSxtQkFBVUssTUFKVTtBQUsxQmxCLEVBQUFBLEtBQUssRUFBRWEsbUJBQVVNLFNBQVYsQ0FBb0IsQ0FBQ04sbUJBQVVHLE1BQVgsRUFBbUJILG1CQUFVTyxLQUE3QixDQUFwQjtBQUxtQixDQUE1QjtBQVFBVCxlQUFlLENBQUNVLFlBQWhCLEdBQStCO0FBQzdCdEIsRUFBQUEsS0FBSyxFQUFFLEtBRHNCO0FBRTdCQyxFQUFBQSxLQUFLLEVBQUU7QUFGc0IsQ0FBL0I7ZUFLZVcsZTs7Ozs7Ozs7Ozs7OzBCQS9CVGYsUTswQkFjQWUsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IFJPVVRFX0VSUk9SIH0gZnJvbSAnQGhlYWx0aGlmeW1lL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldFJvdXRlID0gKGNvbXBvbmVudCwgcGF0aCwgZXhhY3QsIHJvbGVzLCB1c2VyKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiByb2xlcyA9PT0gJ3N0cmluZycgJiYgcm9sZXMgPT09ICcqJykge1xuICAgICAgcmV0dXJuIDxSb3V0ZSBleGFjdD17ZXhhY3R9IGNvbXBvbmVudD17Y29tcG9uZW50fSBwYXRoPXtwYXRofSAvPjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocm9sZXMpICYmIHJvbGVzLmxlbmd0aCA+IDAgJiYgcm9sZXMuaW5jbHVkZXModXNlci5yb2xlKSkge1xuICAgICAgcmV0dXJuIDxSb3V0ZSBleGFjdD17ZXhhY3R9IGNvbXBvbmVudD17Y29tcG9uZW50fSBwYXRoPXtwYXRofSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17YC9lcnJvci8ke1JPVVRFX0VSUk9SLlVOQVVUSE9SSVpFRH1gfSAvPjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89e2AvZXJyb3IvJHtST1VURV9FUlJPUi5GT1JCSURERU59YH0gLz47XG4gIH1cbn07XG5cbmNvbnN0IEF1dGhvcml6ZWRSb3V0ZSA9ICh7XG4gIGNvbXBvbmVudCwgcGF0aCwgZXhhY3QsIHJvbGVzLCB1c2VyLFxufSkgPT4gZ2V0Um91dGUoY29tcG9uZW50LCBwYXRoLCBleGFjdCwgcm9sZXMsIHVzZXIpO1xuXG5BdXRob3JpemVkUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXhhY3Q6IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb2xlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG59O1xuXG5BdXRob3JpemVkUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBleGFjdDogZmFsc2UsXG4gIHJvbGVzOiAnKicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3JpemVkUm91dGU7XG4iXX0=