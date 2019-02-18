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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/Select/index.jsx");
  reactHotLoader.register(AppSelect, "AppSelect", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/Select/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/Select/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9Ecm9wRG93bi9TZWxlY3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIk9wdGlvbiIsIkFwcFNlbGVjdCIsInNlbGVjdGVkIiwidmFsdWUiLCJvcHRpb24iLCJvblZhbHVlU2VsZWN0IiwicHJvcHMiLCJzZXRTdGF0ZSIsImlkIiwia2V5Iiwib3B0aW9ucyIsIm1hcCIsImN1cnJlbnQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJ3aWR0aCIsInN0YXRlIiwiaGFuZGxlU2VsZWN0IiwidW5kZWZpbmVkIiwicmVuZGVyT3B0aW9ucyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7O0lBR1FBLE0sbUJBQUFBLE07O0lBRUZDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OzhIQWdCRTtBQUNKQyxNQUFBQSxRQUFRLEVBQUU7QUFETixLO3FJQUlTLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUFBLFVBQ3hCQyxhQUR3QixHQUNOLE1BQUtDLEtBREMsQ0FDeEJELGFBRHdCOztBQUVoQyxZQUFLRSxRQUFMLENBQWM7QUFDWkwsUUFBQUEsUUFBUSxFQUFFQztBQURFLE9BQWQ7O0FBR0FFLE1BQUFBLGFBQWEsQ0FBQztBQUNaRyxRQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssR0FEQztBQUVaTixRQUFBQSxLQUFLLEVBQUxBO0FBRlksT0FBRCxDQUFiO0FBSUQsSztzSUFFZSxVQUFBTyxPQUFPO0FBQUEsYUFDckJBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUFDLE9BQU87QUFBQSxlQUNqQiw2QkFBQyxNQUFEO0FBQVEsVUFBQSxHQUFHLEVBQUVBLE9BQU8sQ0FBQ0osRUFBckI7QUFBeUIsVUFBQSxLQUFLLEVBQUVJLE9BQU8sQ0FBQ1Q7QUFBeEMsV0FDR1MsT0FBTyxDQUFDVCxLQURYLENBRGlCO0FBQUEsT0FBbkIsQ0FEcUI7QUFBQSxLOzs7Ozs7NkJBU2Q7QUFBQSx3QkFHSCxLQUFLRyxLQUhGO0FBQUEsVUFFTEksT0FGSyxlQUVMQSxPQUZLO0FBQUEsVUFFSUcsV0FGSixlQUVJQSxXQUZKO0FBQUEsVUFFaUJDLElBRmpCLGVBRWlCQSxJQUZqQjtBQUFBLFVBRXVCQyxLQUZ2QixlQUV1QkEsS0FGdkI7QUFBQSxVQUlDYixRQUpELEdBSWMsS0FBS2MsS0FKbkIsQ0FJQ2QsUUFKRDtBQUtQLGFBQ0U7QUFDRSxRQUFBLFVBQVUsTUFEWjtBQUVFLFFBQUEsUUFBUSxFQUFFLEtBQUtlLFlBRmpCO0FBR0UsUUFBQSxXQUFXLEVBQUVKLFdBSGY7QUFJRSxRQUFBLElBQUksRUFBRUMsSUFKUjtBQUtFLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLEtBQUssRUFBTEE7QUFBRixTQUxUO0FBTUUsUUFBQSxLQUFLLEVBQUViLFFBQVEsSUFBSWdCO0FBTnJCLFNBU0ksS0FBS0MsYUFBTCxDQUFtQlQsT0FBbkIsQ0FUSixDQURGO0FBY0Q7Ozs7Ozs7Ozs7RUEzRHFCVSxlQUFNQyxTOzs4QkFBeEJwQixTLGVBQ2U7QUFDakJTLEVBQUFBLE9BQU8sRUFBRVksbUJBQVVDLE9BQVYsQ0FBa0JELG1CQUFVRSxLQUFWLENBQWdCO0FBQ3pDaEIsSUFBQUEsRUFBRSxFQUFFYyxtQkFBVUcsU0FBVixDQUFvQixDQUFDSCxtQkFBVUksTUFBWCxFQUFtQkosbUJBQVVLLE1BQTdCLENBQXBCLEVBQTBEQyxVQURyQjtBQUV6Q3pCLElBQUFBLEtBQUssRUFBRW1CLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxNQUFYLEVBQW1CSixtQkFBVUssTUFBN0IsQ0FBcEIsRUFBMERDO0FBRnhCLEdBQWhCLENBQWxCLEVBR0xBLFVBSmE7QUFLakJmLEVBQUFBLFdBQVcsRUFBRVMsbUJBQVVJLE1BQVYsQ0FBaUJFLFVBTGI7QUFNakJkLEVBQUFBLElBQUksRUFBRVEsbUJBQVVJLE1BQVYsQ0FBaUJFLFVBTk47QUFPakJiLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVLLE1BUEE7QUFRakJ0QixFQUFBQSxhQUFhLEVBQUVpQixtQkFBVU8sSUFBVixDQUFlRDtBQVJiLEM7OEJBRGYzQixTLGtCQVlrQjtBQUNwQmMsRUFBQUEsS0FBSyxFQUFFO0FBRGEsQztlQWtEVGQsUzs7Ozs7Ozs7Ozs7OzBCQWhFUEQsTTswQkFFRkMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5cbmNsYXNzIEFwcFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblZhbHVlU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMjAwLFxuICB9XG5cbiAgc3RhdGU9e1xuICAgIHNlbGVjdGVkOiBudWxsLFxuICB9XG5cbiAgaGFuZGxlU2VsZWN0ID0gKHZhbHVlLCBvcHRpb24pID0+IHtcbiAgICBjb25zdCB7IG9uVmFsdWVTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZDogdmFsdWUsXG4gICAgfSk7XG4gICAgb25WYWx1ZVNlbGVjdCh7XG4gICAgICBpZDogb3B0aW9uLmtleSxcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyA9IG9wdGlvbnMgPT4gKFxuICAgIG9wdGlvbnMubWFwKGN1cnJlbnQgPT4gKFxuICAgICAgPE9wdGlvbiBrZXk9e2N1cnJlbnQuaWR9IHZhbHVlPXtjdXJyZW50LnZhbHVlfT5cbiAgICAgICAge2N1cnJlbnQudmFsdWV9XG4gICAgICA8L09wdGlvbj5cbiAgICApKVxuICApXG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucywgcGxhY2Vob2xkZXIsIG5hbWUsIHdpZHRoLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgc2hvd1NlYXJjaFxuICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGggfX1cbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkIHx8IHVuZGVmaW5lZH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFNlbGVjdDtcbiJdfQ==