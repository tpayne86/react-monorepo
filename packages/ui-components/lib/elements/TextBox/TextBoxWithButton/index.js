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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Search, "Search", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx");
  reactHotLoader.register(TextBoxWithButton, "TextBoxWithButton", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9UZXh0Qm94L1RleHRCb3hXaXRoQnV0dG9uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJUZXh0Qm94V2l0aEJ1dHRvbiIsInByb3BzIiwidmFsdWUiLCJvbkFjdGlvbiIsInNldFN0YXRlIiwiZXYiLCJ0YXJnZXQiLCJzdGF0ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uVGV4dCIsIm9uU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztJQUdRQSxNLGtCQUFBQSxNOztJQUNGQyxpQjs7Ozs7QUFXSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLHVIQUFNQSxLQUFOO0FBRGlCLGlJQU9SLFVBQUNDLEtBQUQsRUFBVztBQUFBLFVBQ1pDLFFBRFksR0FDQyxNQUFLRixLQUROLENBQ1pFLFFBRFk7O0FBRXBCLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxLQUFLLEVBQUU7QUFESyxPQUFkOztBQUdBQyxNQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEtBYmtCO0FBQUEscUlBZUosVUFBQ0csRUFBRCxFQUFRO0FBQ3JCLFlBQUtELFFBQUwsQ0FBYztBQUNaRixRQUFBQSxLQUFLLEVBQUVHLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVSjtBQURMLE9BQWQ7QUFHRCxLQW5Ca0I7QUFFakIsVUFBS0ssS0FBTCxHQUFhO0FBQ1hMLE1BQUFBLEtBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBZ0JRO0FBQUEsd0JBQzZCLEtBQUtELEtBRGxDO0FBQUEsVUFDQ08sV0FERCxlQUNDQSxXQUREO0FBQUEsVUFDY0MsVUFEZCxlQUNjQSxVQURkO0FBQUEsVUFFQ1AsS0FGRCxHQUVXLEtBQUtLLEtBRmhCLENBRUNMLEtBRkQ7QUFHUCxhQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMsTUFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFTSxXQURmO0FBRUUsUUFBQSxRQUFRLEVBQUUsS0FBS0UsUUFGakI7QUFHRSxRQUFBLFdBQVcsRUFBRUQsVUFIZjtBQUlFLFFBQUEsS0FBSyxFQUFFUCxLQUpUO0FBS0UsUUFBQSxRQUFRLEVBQUUsS0FBS1M7QUFMakIsUUFERixDQURGO0FBWUQ7Ozs7Ozs7Ozs7RUEvQzZCQyxlQUFNQyxTOzs4QkFBaENiLGlCLGVBQ2U7QUFDakJRLEVBQUFBLFdBQVcsRUFBRU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGI7QUFFakJiLEVBQUFBLFFBQVEsRUFBRVcsbUJBQVVHLElBQVYsQ0FBZUQsVUFGUjtBQUdqQlAsRUFBQUEsVUFBVSxFQUFFSyxtQkFBVUM7QUFITCxDOzhCQURmZixpQixrQkFPa0I7QUFDcEJTLEVBQUFBLFVBQVUsRUFBRTtBQURRLEM7ZUEyQ1RULGlCOzs7Ozs7Ozs7Ozs7MEJBbkRQRCxNOzBCQUNGQyxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xuY2xhc3MgVGV4dEJveFdpdGhCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25BY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYnV0dG9uVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYnV0dG9uVGV4dDogJycsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH07XG4gIH1cblxuICBvblN1Ym1pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHsgb25BY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogJycsXG4gICAgfSk7XG4gICAgb25BY3Rpb24odmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGxhY2Vob2xkZXIsIGJ1dHRvblRleHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgIGVudGVyQnV0dG9uPXtidXR0b25UZXh0fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0Qm94V2l0aEJ1dHRvbjtcbiJdfQ==