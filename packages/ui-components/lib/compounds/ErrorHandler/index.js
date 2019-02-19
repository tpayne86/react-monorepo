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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvRXJyb3JIYW5kbGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJFcnJvckhhbmRsZXIiLCJwcm9wcyIsInN0YXRlIiwiaGFzRXJyb3IiLCJpbmZvIiwiZXJyb3IiLCJzZXJpYWxpYXplZEVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJwYXJzZWRFcnJvciIsInBhcnNlIiwic2V0U3RhdGUiLCJjaGlsZHJlbiIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiREVWX09SSUdJTiIsInN0YWNrIiwiY29tcG9uZW50U3RhY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7O0lBU01BLFk7Ozs7O0FBS0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixrSEFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQkMsTUFBQUEsSUFBSSxFQUFFLEVBQXpCO0FBQTZCQyxNQUFBQSxLQUFLLEVBQUU7QUFBcEMsS0FBYjtBQUZpQjtBQUdsQjs7OztzQ0FFaUJBLEssRUFBT0QsSSxFQUFNO0FBQzdCLFVBQU1FLGdCQUFnQixHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FDdkJILEtBRHVCLEVBRXZCSSxNQUFNLENBQUNDLG1CQUFQLENBQTJCTCxLQUEzQixDQUZ1QixDQUF6QjtBQUlBLFVBQU1NLFdBQVcsR0FBR0osSUFBSSxDQUFDSyxLQUFMLENBQVdOLGdCQUFYLENBQXBCO0FBQ0EsV0FBS08sUUFBTCxDQUFjO0FBQUVWLFFBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCQyxRQUFBQSxJQUFJLEVBQUpBLElBQWxCO0FBQXdCQyxRQUFBQSxLQUFLLEVBQUVNO0FBQS9CLE9BQWQsRUFONkIsQ0FPN0I7QUFDQTtBQUNEOzs7NkJBRVE7QUFBQSx3QkFDMkIsS0FBS1QsS0FEaEM7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxVQUNpQkMsS0FEakIsZUFDaUJBLEtBRGpCO0FBQUEsVUFFQ1MsUUFGRCxHQUVjLEtBQUtiLEtBRm5CLENBRUNhLFFBRkQ7QUFBQSxVQUdDQyxNQUhELEdBR1lDLE1BQU0sQ0FBQ0MsUUFIbkIsQ0FHQ0YsTUFIRDs7QUFJUCxVQUFJWixRQUFKLEVBQWM7QUFDWjtBQUNBLGVBQ0UsNkJBQUMsY0FBRCxRQUNFLDZCQUFDLFlBQUQ7QUFDRSxVQUFBLEdBQUcsRUFBQyxLQUROO0FBRUUsVUFBQSxHQUFHLEVBQUM7QUFGTixVQURGLEVBS0UsOERBTEYsRUFNR1ksTUFBTSxLQUFLRyxxQkFBWCxJQUNDLDZCQUFDLGlCQUFELFFBQ0UsNkJBQUMsaUJBQUQsUUFDRSwwREFERixFQUVFLDBDQUFNYixLQUFLLENBQUNjLEtBQVosQ0FGRixDQURGLEVBS0Usd0NBTEYsRUFNRSw2QkFBQyxpQkFBRCxRQUNFLDZCQUFDLGdCQUFELDRCQURGLEVBRUUsNkJBQUMsVUFBRCxRQUFNZixJQUFJLENBQUNnQixjQUFYLENBRkYsQ0FORixDQVBKLENBREY7QUFzQkQ7O0FBQ0QsYUFBTztBQUFTLFFBQUEsU0FBUyxFQUFDO0FBQW5CLFNBQXdDTixRQUF4QyxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7RUFuRHdCTyxlQUFNQyxTOzs4QkFBM0J0QixZLGVBQ2U7QUFDakJjLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVDLElBQVYsQ0FBZUM7QUFEUixDO2VBcUROekIsWTs7Ozs7Ozs7Ozs7OzBCQXREVEEsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgREVWX09SSUdJTiB9IGZyb20gJ0BoZWFsdGhpZnltZS9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgSW1hZ2UsXG4gIFN0YWNrVHJhY2UsXG4gIEVycm9yVHJhY2UsXG4gIFBhcmFncmFwaCxcbiAgUHJlLFxufSBmcm9tICcuL3N0eWxlJztcblxuY2xhc3MgRXJyb3JIYW5kbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UsIGluZm86ICcnLCBlcnJvcjogJycgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBpbmZvKSB7XG4gICAgY29uc3Qgc2VyaWFsaWF6ZWRFcnJvciA9IEpTT04uc3RyaW5naWZ5KFxuICAgICAgZXJyb3IsXG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlcnJvciksXG4gICAgKTtcbiAgICBjb25zdCBwYXJzZWRFcnJvciA9IEpTT04ucGFyc2Uoc2VyaWFsaWF6ZWRFcnJvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlLCBpbmZvLCBlcnJvcjogcGFyc2VkRXJyb3IgfSk7XG4gICAgLy8gY29uc29sZS5lcnJvcihlcnJvcik7Ly8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIC8vIGNvbnNvbGUuaW5mbyhpbmZvKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIGluZm8sIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvcmlnaW4gfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIC8vIFlvdSBjYW4gcmVuZGVyIGFueSBjdXN0b20gZmFsbGJhY2sgVUlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgYWx0PVwiZXJyXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZi9mMC9FcnJvci5zdmcvNDk3cHgtRXJyb3Iuc3ZnLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDE+U29tZSBFcnJvciBPY2N1cmVkPC9oMT5cbiAgICAgICAgICB7b3JpZ2luID09PSBERVZfT1JJR0lOICYmIChcbiAgICAgICAgICAgIDxTdGFja1RyYWNlPlxuICAgICAgICAgICAgICA8RXJyb3JUcmFjZT5cbiAgICAgICAgICAgICAgICA8cD5FeGNlcHRpb24gVHJhY2U8L3A+XG4gICAgICAgICAgICAgICAgPHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XG4gICAgICAgICAgICAgIDwvRXJyb3JUcmFjZT5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxFcnJvclRyYWNlPlxuICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGg+RXhjZXB0aW9uIERldGFpbHM8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICA8UHJlPntpbmZvLmNvbXBvbmVudFN0YWNrfTwvUHJlPlxuICAgICAgICAgICAgICA8L0Vycm9yVHJhY2U+XG4gICAgICAgICAgICA8L1N0YWNrVHJhY2U+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImUtaCBlcnJvci1jaGVja2VkXCI+e2NoaWxkcmVufTwvc2VjdGlvbj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVyO1xuIl19