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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var AppTextArea =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(AppTextArea, _React$PureComponent);

  function AppTextArea() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AppTextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AppTextArea)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      value: ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (ev) {
      var onTextChange = _this.props.onTextChange;
      var tempVal = ev.target.value;

      _this.setState({
        value: tempVal
      });

      onTextChange(tempVal);
    });
    return _this;
  }

  (0, _createClass2.default)(AppTextArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          minRows = _this$props.minRows,
          maxRows = _this$props.maxRows,
          id = _this$props.id,
          placeholder = _this$props.placeholder,
          size = _this$props.size,
          className = _this$props.className;
      var value = this.state.value;
      return _react.default.createElement(_input.default.TextArea, {
        id: id,
        placeholder: placeholder,
        onChange: this.handleChange,
        size: size,
        value: value,
        className: className,
        autosize: {
          minRows: minRows,
          maxRows: maxRows
        }
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
  return AppTextArea;
}(_react.default.PureComponent);

(0, _defineProperty2.default)(AppTextArea, "propTypes", {
  id: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string.isRequired,
  onTextChange: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  size: _propTypes.default.string,
  minRows: _propTypes.default.number,
  maxRows: _propTypes.default.number
});
(0, _defineProperty2.default)(AppTextArea, "defaultProps", {
  size: 'default',
  className: '',
  minRows: 2,
  maxRows: 6
});
var _default = AppTextArea;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppTextArea, "AppTextArea", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextArea/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextArea/index.jsx");
  leaveModule(module);
})();

;