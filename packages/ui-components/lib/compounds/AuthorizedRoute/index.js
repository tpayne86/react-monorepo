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