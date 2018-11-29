"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var Option = _select.default.Option;

var AppSelect =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(AppSelect, _React$Component);

  function AppSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AppSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AppSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      selected: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (value, option) {
      var onValueSelect = _this.props.onValueSelect;

      _this.setState({
        selected: value
      });

      onValueSelect({
        id: option.key,
        value: value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderOptions", function (options) {
      return options.map(function (current) {
        return _react.default.createElement(Option, {
          key: current.id,
          value: current.value
        }, current.value);
      });
    });
    return _this;
  }

  (0, _createClass2.default)(AppSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          placeholder = _this$props.placeholder,
          name = _this$props.name,
          width = _this$props.width;
      var selected = this.state.selected;
      return _react.default.createElement(_select.default, {
        showSearch: true,
        onSelect: this.handleSelect,
        placeholder: placeholder,
        name: name,
        style: {
          width: width
        },
        value: selected || undefined
      }, this.renderOptions(options));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return AppSelect;
}(_react.default.Component);

(0, _defineProperty2.default)(AppSelect, "propTypes", {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
  })).isRequired,
  placeholder: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  width: _propTypes.default.number,
  onValueSelect: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(AppSelect, "defaultProps", {
  width: 200
});
var _default = AppSelect;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/Select/index.jsx");
  reactHotLoader.register(AppSelect, "AppSelect", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/Select/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/Select/index.jsx");
  leaveModule(module);
})();

;