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

require("./style.scss");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

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
        return _react.default.createElement("section", {
          className: "errorhandler errorhandler__wrapper"
        }, _react.default.createElement("img", {
          className: "errorhandler__image",
          alt: "err",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/497px-Error.svg.png"
        }), _react.default.createElement("h1", null, "Some Error Occured"), origin === _constants.DEV_ORIGIN && _react.default.createElement("div", {
          className: "errorhandler__stacktrace"
        }, _react.default.createElement("section", {
          className: "errorhandler__errortrace"
        }, _react.default.createElement("p", null, "Exception Trace"), _react.default.createElement("pre", null, error.stack)), _react.default.createElement("br", null), _react.default.createElement("section", {
          className: "errorhandler__infotrace"
        }, _react.default.createElement("p", null, "Exception Details"), _react.default.createElement("pre", null, info.componentStack))));
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
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorHandler, "ErrorHandler", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/index.jsx");
  leaveModule(module);
})();

;