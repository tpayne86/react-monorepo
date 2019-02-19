const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('core-js/modules/es7.array.includes');

require('core-js/modules/es6.string.includes');

require('core-js/modules/es6.array.is-array');

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _reactRouterDom = require('react-router-dom');

const _constants = require('@healthifyme/constants');

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const getRoute = function getRoute(component, path, exact, roles, user) {
  try {
    if (typeof roles === 'string' && roles === '*') {
      return _react.default.createElement(_reactRouterDom.Route, {
        exact,
        component,
        path,
      });
    }

    if (Array.isArray(roles) && roles.length > 0 && roles.includes(user.role)) {
      return _react.default.createElement(_reactRouterDom.Route, {
        exact,
        component,
        path,
      });
    }

    return _react.default.createElement(_reactRouterDom.Redirect, {
      to: '/error/'.concat(_constants.ROUTE_ERROR.UNAUTHORIZED),
    });
  } catch (e) {
    return _react.default.createElement(_reactRouterDom.Redirect, {
      to: '/error/'.concat(_constants.ROUTE_ERROR.FORBIDDEN),
    });
  }
};

const AuthorizedRoute = function AuthorizedRoute(_ref) {
  const component = _ref.component;

  const path = _ref.path;

  const exact = _ref.exact;

  const roles = _ref.roles;

  const user = _ref.user;
  return getRoute(component, path, exact, roles, user);
};

AuthorizedRoute.propTypes = {
  component: _propTypes.default.func.isRequired,
  path: _propTypes.default.string.isRequired,
  exact: _propTypes.default.bool,
  user: _propTypes.default.object,
  roles: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.array,
  ]),
};
AuthorizedRoute.defaultProps = {
  exact: false,
  roles: '*',
};
const _default = AuthorizedRoute;
const _default2 = _default;
exports.default = _default2;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    getRoute,
    'getRoute',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedRoute/index.jsx',
  );
  reactHotLoader.register(
    AuthorizedRoute,
    'AuthorizedRoute',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedRoute/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/AuthorizedRoute/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvQXV0aG9yaXplZFJvdXRlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJnZXRSb3V0ZSIsImNvbXBvbmVudCIsInBhdGgiLCJleGFjdCIsInJvbGVzIiwidXNlciIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImluY2x1ZGVzIiwicm9sZSIsIlJPVVRFX0VSUk9SIiwiVU5BVVRIT1JJWkVEIiwiZSIsIkZPUkJJRERFTiIsIkF1dGhvcml6ZWRSb3V0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImFycmF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0NDLElBQWhDLEVBQXlDO0FBQ3hELE1BQUk7QUFDRixRQUFJLE9BQU9ELEtBQVAsS0FBaUIsUUFBakIsSUFBNkJBLEtBQUssS0FBSyxHQUEzQyxFQUFnRDtBQUM5QyxhQUFPLDZCQUFDLHFCQUFEO0FBQU8sUUFBQSxLQUFLLEVBQUVELEtBQWQ7QUFBcUIsUUFBQSxTQUFTLEVBQUVGLFNBQWhDO0FBQTJDLFFBQUEsSUFBSSxFQUFFQztBQUFqRCxRQUFQO0FBQ0Q7O0FBQ0QsUUFBSUksS0FBSyxDQUFDQyxPQUFOLENBQWNILEtBQWQsS0FBd0JBLEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQXZDLElBQTRDSixLQUFLLENBQUNLLFFBQU4sQ0FBZUosSUFBSSxDQUFDSyxJQUFwQixDQUFoRCxFQUEyRTtBQUN6RSxhQUFPLDZCQUFDLHFCQUFEO0FBQU8sUUFBQSxLQUFLLEVBQUVQLEtBQWQ7QUFBcUIsUUFBQSxTQUFTLEVBQUVGLFNBQWhDO0FBQTJDLFFBQUEsSUFBSSxFQUFFQztBQUFqRCxRQUFQO0FBQ0Q7O0FBQ0QsV0FBTyw2QkFBQyx3QkFBRDtBQUFVLE1BQUEsRUFBRSxtQkFBWVMsdUJBQVlDLFlBQXhCO0FBQVosTUFBUDtBQUNELEdBUkQsQ0FRRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPLDZCQUFDLHdCQUFEO0FBQVUsTUFBQSxFQUFFLG1CQUFZRix1QkFBWUcsU0FBeEI7QUFBWixNQUFQO0FBQ0Q7QUFDRixDQVpEOztBQWNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHZCxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFjQyxJQUFkLFFBQWNBLElBQWQ7QUFBQSxNQUFvQkMsS0FBcEIsUUFBb0JBLEtBQXBCO0FBQUEsTUFBMkJDLEtBQTNCLFFBQTJCQSxLQUEzQjtBQUFBLE1BQWtDQyxJQUFsQyxRQUFrQ0EsSUFBbEM7QUFBQSxTQUN0QkwsUUFBUSxDQUFDQyxTQUFELEVBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxLQUF6QixFQUFnQ0MsSUFBaEMsQ0FEYztBQUFBLENBQXhCOztBQUdBVSxlQUFlLENBQUNDLFNBQWhCLEdBQTRCO0FBQzFCZixFQUFBQSxTQUFTLEVBQUVnQixtQkFBVUMsSUFBVixDQUFlQyxVQURBO0FBRTFCakIsRUFBQUEsSUFBSSxFQUFFZSxtQkFBVUcsTUFBVixDQUFpQkQsVUFGRztBQUcxQmhCLEVBQUFBLEtBQUssRUFBRWMsbUJBQVVJLElBSFM7QUFJMUJoQixFQUFBQSxJQUFJLEVBQUVZLG1CQUFVSyxNQUpVO0FBSzFCbEIsRUFBQUEsS0FBSyxFQUFFYSxtQkFBVU0sU0FBVixDQUFvQixDQUFDTixtQkFBVUcsTUFBWCxFQUFtQkgsbUJBQVVPLEtBQTdCLENBQXBCO0FBTG1CLENBQTVCO0FBUUFULGVBQWUsQ0FBQ1UsWUFBaEIsR0FBK0I7QUFDN0J0QixFQUFBQSxLQUFLLEVBQUUsS0FEc0I7QUFFN0JDLEVBQUFBLEtBQUssRUFBRTtBQUZzQixDQUEvQjtlQUtlVyxlOzs7Ozs7Ozs7Ozs7MEJBOUJUZixROzBCQWNBZSxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgUk9VVEVfRVJST1IgfSBmcm9tICdAaGVhbHRoaWZ5bWUvY29uc3RhbnRzJztcblxuY29uc3QgZ2V0Um91dGUgPSAoY29tcG9uZW50LCBwYXRoLCBleGFjdCwgcm9sZXMsIHVzZXIpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHJvbGVzID09PSAnc3RyaW5nJyAmJiByb2xlcyA9PT0gJyonKSB7XG4gICAgICByZXR1cm4gPFJvdXRlIGV4YWN0PXtleGFjdH0gY29tcG9uZW50PXtjb21wb25lbnR9IHBhdGg9e3BhdGh9IC8+O1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShyb2xlcykgJiYgcm9sZXMubGVuZ3RoID4gMCAmJiByb2xlcy5pbmNsdWRlcyh1c2VyLnJvbGUpKSB7XG4gICAgICByZXR1cm4gPFJvdXRlIGV4YWN0PXtleGFjdH0gY29tcG9uZW50PXtjb21wb25lbnR9IHBhdGg9e3BhdGh9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtgL2Vycm9yLyR7Uk9VVEVfRVJST1IuVU5BVVRIT1JJWkVEfWB9IC8+O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17YC9lcnJvci8ke1JPVVRFX0VSUk9SLkZPUkJJRERFTn1gfSAvPjtcbiAgfVxufTtcblxuY29uc3QgQXV0aG9yaXplZFJvdXRlID0gKHsgY29tcG9uZW50LCBwYXRoLCBleGFjdCwgcm9sZXMsIHVzZXIgfSkgPT5cbiAgZ2V0Um91dGUoY29tcG9uZW50LCBwYXRoLCBleGFjdCwgcm9sZXMsIHVzZXIpO1xuXG5BdXRob3JpemVkUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXhhY3Q6IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb2xlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG59O1xuXG5BdXRob3JpemVkUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBleGFjdDogZmFsc2UsXG4gIHJvbGVzOiAnKicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3JpemVkUm91dGU7XG4iXX0=
