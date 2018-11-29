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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var Search = _input.default.Search;

var TextBoxWithButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TextBoxWithButton, _React$Component);

  function TextBoxWithButton(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextBoxWithButton);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextBoxWithButton).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onSubmit", function (value) {
      var onAction = _this.props.onAction;

      _this.setState({
        value: ''
      });

      onAction(value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (ev) {
      _this.setState({
        value: ev.target.value
      });
    });
    _this.state = {
      value: ''
    };
    return _this;
  }

  (0, _createClass2.default)(TextBoxWithButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          buttonText = _this$props.buttonText;
      var value = this.state.value;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Search, {
        placeholder: placeholder,
        onSearch: this.onSubmit,
        enterButton: buttonText,
        value: value,
        onChange: this.handleChange
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TextBoxWithButton;
}(_react.default.Component);

(0, _defineProperty2.default)(TextBoxWithButton, "propTypes", {
  placeholder: _propTypes.default.string.isRequired,
  onAction: _propTypes.default.func.isRequired,
  buttonText: _propTypes.default.string
});
(0, _defineProperty2.default)(TextBoxWithButton, "defaultProps", {
  buttonText: ''
});
var _default = TextBoxWithButton;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Search, "Search", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx");
  reactHotLoader.register(TextBoxWithButton, "TextBoxWithButton", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx");
  leaveModule(module);
})();

;