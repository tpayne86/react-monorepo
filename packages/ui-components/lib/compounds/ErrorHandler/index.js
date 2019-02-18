"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("@healthifyme/constants");

var _style = require("./style");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var ErrorHandler =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ErrorHandler, _React$Component);

  function ErrorHandler(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ErrorHandler);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorHandler).call(this, props));
    _this.state = {
      hasError: false,
      info: '',
      error: ''
    };
    return _this;
  }

  (0, _createClass2.default)(ErrorHandler, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var serialiazedError = JSON.stringify(error, Object.getOwnPropertyNames(error));
      var parsedError = JSON.parse(serialiazedError);
      this.setState({
        hasError: true,
        info: info,
        error: parsedError
      }); // console.error(error);// eslint-disable-line
      // console.info(info); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          info = _this$state.info,
          error = _this$state.error;
      var children = this.props.children;
      var origin = window.location.origin;

      if (hasError) {
        // You can render any custom fallback UI
        return _react.default.createElement(_style.Wrapper, null, _react.default.createElement(_style.Image, {
          alt: "err",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/497px-Error.svg.png"
        }), _react.default.createElement("h1", null, "Some Error Occured"), origin === _constants.DEV_ORIGIN && _react.default.createElement(_style.StackTrace, null, _react.default.createElement(_style.ErrorTrace, null, _react.default.createElement("p", null, "Exception Trace"), _react.default.createElement("pre", null, error.stack)), _react.default.createElement("br", null), _react.default.createElement(_style.ErrorTrace, null, _react.default.createElement(_style.Paragraph, null, "Exception Details"), _react.default.createElement(_style.Pre, null, info.componentStack))));
      }

      return _react.default.createElement("section", {
        className: "e-h error-checked"
      }, children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ErrorHandler;
}(_react.default.Component);

(0, _defineProperty2.default)(ErrorHandler, "propTypes", {
  children: _propTypes.default.node.isRequired
});
var _default = ErrorHandler;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorHandler, "ErrorHandler", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvRXJyb3JIYW5kbGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJFcnJvckhhbmRsZXIiLCJwcm9wcyIsInN0YXRlIiwiaGFzRXJyb3IiLCJpbmZvIiwiZXJyb3IiLCJzZXJpYWxpYXplZEVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJwYXJzZWRFcnJvciIsInBhcnNlIiwic2V0U3RhdGUiLCJjaGlsZHJlbiIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiREVWX09SSUdJTiIsInN0YWNrIiwiY29tcG9uZW50U3RhY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7O0lBSU1BLFk7Ozs7O0FBS0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixrSEFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQkMsTUFBQUEsSUFBSSxFQUFFLEVBQXpCO0FBQTZCQyxNQUFBQSxLQUFLLEVBQUU7QUFBcEMsS0FBYjtBQUZpQjtBQUdsQjs7OztzQ0FFaUJBLEssRUFBT0QsSSxFQUFNO0FBQzdCLFVBQU1FLGdCQUFnQixHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FDdkJILEtBRHVCLEVBRXZCSSxNQUFNLENBQUNDLG1CQUFQLENBQTJCTCxLQUEzQixDQUZ1QixDQUF6QjtBQUlBLFVBQU1NLFdBQVcsR0FBR0osSUFBSSxDQUFDSyxLQUFMLENBQVdOLGdCQUFYLENBQXBCO0FBQ0EsV0FBS08sUUFBTCxDQUFjO0FBQUVWLFFBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCQyxRQUFBQSxJQUFJLEVBQUpBLElBQWxCO0FBQXdCQyxRQUFBQSxLQUFLLEVBQUVNO0FBQS9CLE9BQWQsRUFONkIsQ0FPN0I7QUFDQTtBQUNEOzs7NkJBRVE7QUFBQSx3QkFDMkIsS0FBS1QsS0FEaEM7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxVQUNpQkMsS0FEakIsZUFDaUJBLEtBRGpCO0FBQUEsVUFFQ1MsUUFGRCxHQUVjLEtBQUtiLEtBRm5CLENBRUNhLFFBRkQ7QUFBQSxVQUdDQyxNQUhELEdBR1lDLE1BQU0sQ0FBQ0MsUUFIbkIsQ0FHQ0YsTUFIRDs7QUFJUCxVQUFJWixRQUFKLEVBQWM7QUFDWjtBQUNBLGVBQ0UsNkJBQUMsY0FBRCxRQUNFLDZCQUFDLFlBQUQ7QUFDRSxVQUFBLEdBQUcsRUFBQyxLQUROO0FBRUUsVUFBQSxHQUFHLEVBQUM7QUFGTixVQURGLEVBS0UsOERBTEYsRUFRR1ksTUFBTSxLQUFLRyxxQkFBWCxJQUNDLDZCQUFDLGlCQUFELFFBQ0UsNkJBQUMsaUJBQUQsUUFDRSwwREFERixFQUlFLDBDQUNHYixLQUFLLENBQUNjLEtBRFQsQ0FKRixDQURGLEVBU0Usd0NBVEYsRUFVRSw2QkFBQyxpQkFBRCxRQUNFLDZCQUFDLGdCQUFELDRCQURGLEVBSUUsNkJBQUMsVUFBRCxRQUNHZixJQUFJLENBQUNnQixjQURSLENBSkYsQ0FWRixDQVRKLENBREY7QUFnQ0Q7O0FBQ0QsYUFDRTtBQUFTLFFBQUEsU0FBUyxFQUFDO0FBQW5CLFNBQ0dOLFFBREgsQ0FERjtBQUtEOzs7Ozs7Ozs7O0VBakV3Qk8sZUFBTUMsUzs7OEJBQTNCdEIsWSxlQUNlO0FBQ2pCYyxFQUFBQSxRQUFRLEVBQUVTLG1CQUFVQyxJQUFWLENBQWVDO0FBRFIsQztlQW1FTnpCLFk7Ozs7Ozs7Ozs7OzswQkFwRVRBLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IERFVl9PUklHSU4gfSBmcm9tICdAaGVhbHRoaWZ5bWUvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIFdyYXBwZXIsIEltYWdlLCBTdGFja1RyYWNlLCBFcnJvclRyYWNlLCBQYXJhZ3JhcGgsIFByZSxcbn0gZnJvbSAnLi9zdHlsZSc7XG5cbmNsYXNzIEVycm9ySGFuZGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlLCBpbmZvOiAnJywgZXJyb3I6ICcnIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xuICAgIGNvbnN0IHNlcmlhbGlhemVkRXJyb3IgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgIGVycm9yLFxuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXJyb3IpLFxuICAgICk7XG4gICAgY29uc3QgcGFyc2VkRXJyb3IgPSBKU09OLnBhcnNlKHNlcmlhbGlhemVkRXJyb3IpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogdHJ1ZSwgaW5mbywgZXJyb3I6IHBhcnNlZEVycm9yIH0pO1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IpOy8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAvLyBjb25zb2xlLmluZm8oaW5mbyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCBpbmZvLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3JpZ2luIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAvLyBZb3UgY2FuIHJlbmRlciBhbnkgY3VzdG9tIGZhbGxiYWNrIFVJXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGFsdD1cImVyclwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2YvZjAvRXJyb3Iuc3ZnLzQ5N3B4LUVycm9yLnN2Zy5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICBTb21lIEVycm9yIE9jY3VyZWRcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtvcmlnaW4gPT09IERFVl9PUklHSU4gJiYgKFxuICAgICAgICAgICAgPFN0YWNrVHJhY2U+XG4gICAgICAgICAgICAgIDxFcnJvclRyYWNlPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRXhjZXB0aW9uIFRyYWNlXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3Iuc3RhY2t9XG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDwvRXJyb3JUcmFjZT5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxFcnJvclRyYWNlPlxuICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICBFeGNlcHRpb24gRGV0YWlsc1xuICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgIDxQcmU+XG4gICAgICAgICAgICAgICAgICB7aW5mby5jb21wb25lbnRTdGFja31cbiAgICAgICAgICAgICAgICA8L1ByZT5cbiAgICAgICAgICAgICAgPC9FcnJvclRyYWNlPlxuICAgICAgICAgICAgPC9TdGFja1RyYWNlPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJlLWggZXJyb3ItY2hlY2tlZFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckhhbmRsZXI7XG4iXX0=