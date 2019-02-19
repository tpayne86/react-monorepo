"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var TextBoxWithAddons =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(TextBoxWithAddons, _React$PureComponent);

  function TextBoxWithAddons(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextBoxWithAddons);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextBoxWithAddons).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (ev) {
      var onTextChange = _this.props.onTextChange;
      var tempVal = ev.target.value;

      _this.setState({
        value: tempVal
      });

      onTextChange(tempVal);
    });
    _this.state = {
      value: ''
    };
    return _this;
  }

  (0, _createClass2.default)(TextBoxWithAddons, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          addonAfter = _this$props.addonAfter,
          addonBefore = _this$props.addonBefore,
          prefixIcon = _this$props.prefixIcon,
          suffixIcon = _this$props.suffixIcon,
          defaultValue = _this$props.defaultValue,
          id = _this$props.id,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          size = _this$props.size,
          className = _this$props.className;
      var value = this.state.value;
      return _react.default.createElement(_input.default, {
        addonBefore: addonBefore,
        addonAfter: addonAfter,
        prefix: prefixIcon,
        suffix: suffixIcon,
        defaultValue: defaultValue,
        id: id,
        type: type,
        placeholder: placeholder,
        onChange: this.handleChange,
        size: size,
        value: value,
        className: className
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TextBoxWithAddons;
}(_react.default.PureComponent);

(0, _defineProperty2.default)(TextBoxWithAddons, "propTypes", {
  addonAfter: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  addonBefore: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  prefixIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  suffixIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  defaultValue: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string.isRequired,
  onTextChange: _propTypes.default.func.isRequired,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  size: _propTypes.default.string
});
(0, _defineProperty2.default)(TextBoxWithAddons, "defaultProps", {
  addonAfter: '',
  addonBefore: '',
  prefixIcon: '',
  suffixIcon: '',
  defaultValue: '',
  type: 'text',
  size: 'default',
  className: ''
});
var _default = TextBoxWithAddons;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextBoxWithAddons, "TextBoxWithAddons", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithAddons/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithAddons/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();