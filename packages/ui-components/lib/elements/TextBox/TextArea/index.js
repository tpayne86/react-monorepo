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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppTextArea, "AppTextArea", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextArea/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextArea/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9UZXh0Qm94L1RleHRBcmVhL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBcHBUZXh0QXJlYSIsInZhbHVlIiwiZXYiLCJvblRleHRDaGFuZ2UiLCJwcm9wcyIsInRlbXBWYWwiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIm1pblJvd3MiLCJtYXhSb3dzIiwiaWQiLCJwbGFjZWhvbGRlciIsInNpemUiLCJjbGFzc05hbWUiLCJzdGF0ZSIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7O0lBR01BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhIQWtCRztBQUNMQyxNQUFBQSxLQUFLLEVBQUU7QUFERixLO3FJQUlRLFVBQUNDLEVBQUQsRUFBUTtBQUFBLFVBQ2JDLFlBRGEsR0FDSSxNQUFLQyxLQURULENBQ2JELFlBRGE7QUFFckIsVUFBTUUsT0FBTyxHQUFHSCxFQUFFLENBQUNJLE1BQUgsQ0FBVUwsS0FBMUI7O0FBQ0EsWUFBS00sUUFBTCxDQUFjO0FBQ1pOLFFBQUFBLEtBQUssRUFBRUk7QUFESyxPQUFkOztBQUdBRixNQUFBQSxZQUFZLENBQUNFLE9BQUQsQ0FBWjtBQUNELEs7Ozs7Ozs2QkFFUTtBQUFBLHdCQUlILEtBQUtELEtBSkY7QUFBQSxVQUVMSSxPQUZLLGVBRUxBLE9BRks7QUFBQSxVQUVJQyxPQUZKLGVBRUlBLE9BRko7QUFBQSxVQUVhQyxFQUZiLGVBRWFBLEVBRmI7QUFBQSxVQUVpQkMsV0FGakIsZUFFaUJBLFdBRmpCO0FBQUEsVUFHTEMsSUFISyxlQUdMQSxJQUhLO0FBQUEsVUFHQ0MsU0FIRCxlQUdDQSxTQUhEO0FBQUEsVUFLQ1osS0FMRCxHQUtXLEtBQUthLEtBTGhCLENBS0NiLEtBTEQ7QUFNUCxhQUNFLDRDQUFPLFFBQVA7QUFDRSxRQUFBLEVBQUUsRUFBRVMsRUFETjtBQUVFLFFBQUEsV0FBVyxFQUFFQyxXQUZmO0FBR0UsUUFBQSxRQUFRLEVBQUUsS0FBS0ksWUFIakI7QUFJRSxRQUFBLElBQUksRUFBRUgsSUFKUjtBQUtFLFFBQUEsS0FBSyxFQUFFWCxLQUxUO0FBTUUsUUFBQSxTQUFTLEVBQUVZLFNBTmI7QUFPRSxRQUFBLFFBQVEsRUFBRTtBQUFFTCxVQUFBQSxPQUFPLEVBQVBBLE9BQUY7QUFBV0MsVUFBQUEsT0FBTyxFQUFQQTtBQUFYO0FBUFosUUFERjtBQVdEOzs7Ozs7Ozs7O0VBaER1Qk8sZUFBTUMsYTs7OEJBQTFCakIsVyxlQUNlO0FBQ2pCVSxFQUFBQSxFQUFFLEVBQUVRLG1CQUFVQyxNQUFWLENBQWlCQyxVQURKO0FBRWpCVCxFQUFBQSxXQUFXLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZiO0FBR2pCakIsRUFBQUEsWUFBWSxFQUFFZSxtQkFBVUcsSUFBVixDQUFlRCxVQUhaO0FBSWpCUCxFQUFBQSxTQUFTLEVBQUVLLG1CQUFVQyxNQUpKO0FBS2pCUCxFQUFBQSxJQUFJLEVBQUVNLG1CQUFVQyxNQUxDO0FBTWpCWCxFQUFBQSxPQUFPLEVBQUVVLG1CQUFVSSxNQU5GO0FBT2pCYixFQUFBQSxPQUFPLEVBQUVTLG1CQUFVSTtBQVBGLEM7OEJBRGZ0QixXLGtCQVdrQjtBQUNwQlksRUFBQUEsSUFBSSxFQUFFLFNBRGM7QUFFcEJDLEVBQUFBLFNBQVMsRUFBRSxFQUZTO0FBR3BCTCxFQUFBQSxPQUFPLEVBQUUsQ0FIVztBQUlwQkMsRUFBQUEsT0FBTyxFQUFFO0FBSlcsQztlQXdDVFQsVzs7Ozs7Ozs7Ozs7OzBCQW5EVEEsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuY2xhc3MgQXBwVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25UZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1pblJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4Um93czogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1pblJvd3M6IDIsXG4gICAgbWF4Um93czogNixcbiAgfTtcblxuICBzdGF0ZSA9e1xuICAgIHZhbHVlOiAnJyxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldikgPT4ge1xuICAgIGNvbnN0IHsgb25UZXh0Q2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRlbXBWYWwgPSBldi50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogdGVtcFZhbCxcbiAgICB9KTtcbiAgICBvblRleHRDaGFuZ2UodGVtcFZhbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWluUm93cywgbWF4Um93cywgaWQsIHBsYWNlaG9sZGVyLFxuICAgICAgc2l6ZSwgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBhdXRvc2l6ZT17eyBtaW5Sb3dzLCBtYXhSb3dzIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwVGV4dEFyZWE7XG4iXX0=