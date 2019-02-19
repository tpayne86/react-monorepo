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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9Ecm9wRG93bi9TZWxlY3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIk9wdGlvbiIsIkFwcFNlbGVjdCIsInNlbGVjdGVkIiwidmFsdWUiLCJvcHRpb24iLCJvblZhbHVlU2VsZWN0IiwicHJvcHMiLCJzZXRTdGF0ZSIsImlkIiwia2V5Iiwib3B0aW9ucyIsIm1hcCIsImN1cnJlbnQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJ3aWR0aCIsInN0YXRlIiwiaGFuZGxlU2VsZWN0IiwidW5kZWZpbmVkIiwicmVuZGVyT3B0aW9ucyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7O0lBR1FBLE0sbUJBQUFBLE07O0lBRUZDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OzhIQW9CSTtBQUNOQyxNQUFBQSxRQUFRLEVBQUU7QUFESixLO3FJQUlPLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUFBLFVBQ3hCQyxhQUR3QixHQUNOLE1BQUtDLEtBREMsQ0FDeEJELGFBRHdCOztBQUVoQyxZQUFLRSxRQUFMLENBQWM7QUFDWkwsUUFBQUEsUUFBUSxFQUFFQztBQURFLE9BQWQ7O0FBR0FFLE1BQUFBLGFBQWEsQ0FBQztBQUNaRyxRQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssR0FEQztBQUVaTixRQUFBQSxLQUFLLEVBQUxBO0FBRlksT0FBRCxDQUFiO0FBSUQsSztzSUFFZSxVQUFDTyxPQUFEO0FBQUEsYUFDZEEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsT0FBRDtBQUFBLGVBQ1YsNkJBQUMsTUFBRDtBQUFRLFVBQUEsR0FBRyxFQUFFQSxPQUFPLENBQUNKLEVBQXJCO0FBQXlCLFVBQUEsS0FBSyxFQUFFSSxPQUFPLENBQUNUO0FBQXhDLFdBQ0dTLE9BQU8sQ0FBQ1QsS0FEWCxDQURVO0FBQUEsT0FBWixDQURjO0FBQUEsSzs7Ozs7OzZCQU9QO0FBQUEsd0JBQ3VDLEtBQUtHLEtBRDVDO0FBQUEsVUFDQ0ksT0FERCxlQUNDQSxPQUREO0FBQUEsVUFDVUcsV0FEVixlQUNVQSxXQURWO0FBQUEsVUFDdUJDLElBRHZCLGVBQ3VCQSxJQUR2QjtBQUFBLFVBQzZCQyxLQUQ3QixlQUM2QkEsS0FEN0I7QUFBQSxVQUVDYixRQUZELEdBRWMsS0FBS2MsS0FGbkIsQ0FFQ2QsUUFGRDtBQUdQLGFBQ0U7QUFDRSxRQUFBLFVBQVUsTUFEWjtBQUVFLFFBQUEsUUFBUSxFQUFFLEtBQUtlLFlBRmpCO0FBR0UsUUFBQSxXQUFXLEVBQUVKLFdBSGY7QUFJRSxRQUFBLElBQUksRUFBRUMsSUFKUjtBQUtFLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLEtBQUssRUFBTEE7QUFBRixTQUxUO0FBTUUsUUFBQSxLQUFLLEVBQUViLFFBQVEsSUFBSWdCO0FBTnJCLFNBUUcsS0FBS0MsYUFBTCxDQUFtQlQsT0FBbkIsQ0FSSCxDQURGO0FBWUQ7Ozs7Ozs7Ozs7RUF6RHFCVSxlQUFNQyxTOzs4QkFBeEJwQixTLGVBQ2U7QUFDakJTLEVBQUFBLE9BQU8sRUFBRVksbUJBQVVDLE9BQVYsQ0FDUEQsbUJBQVVFLEtBQVYsQ0FBZ0I7QUFDZGhCLElBQUFBLEVBQUUsRUFBRWMsbUJBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsbUJBQVVJLE1BQVgsRUFBbUJKLG1CQUFVSyxNQUE3QixDQUFwQixFQUNEQyxVQUZXO0FBR2R6QixJQUFBQSxLQUFLLEVBQUVtQixtQkFBVUcsU0FBVixDQUFvQixDQUFDSCxtQkFBVUksTUFBWCxFQUFtQkosbUJBQVVLLE1BQTdCLENBQXBCLEVBQ0pDO0FBSlcsR0FBaEIsQ0FETyxFQU9QQSxVQVJlO0FBU2pCZixFQUFBQSxXQUFXLEVBQUVTLG1CQUFVSSxNQUFWLENBQWlCRSxVQVRiO0FBVWpCZCxFQUFBQSxJQUFJLEVBQUVRLG1CQUFVSSxNQUFWLENBQWlCRSxVQVZOO0FBV2pCYixFQUFBQSxLQUFLLEVBQUVPLG1CQUFVSyxNQVhBO0FBWWpCdEIsRUFBQUEsYUFBYSxFQUFFaUIsbUJBQVVPLElBQVYsQ0FBZUQ7QUFaYixDOzhCQURmM0IsUyxrQkFnQmtCO0FBQ3BCYyxFQUFBQSxLQUFLLEVBQUU7QUFEYSxDO2VBNENUZCxTOzs7Ozs7Ozs7Ozs7MEJBOURQRCxNOzBCQUVGQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcblxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcblxuY2xhc3MgQXBwU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICAgICAgICAuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICAgICAgIC5pc1JlcXVpcmVkLFxuICAgICAgfSksXG4gICAgKS5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uVmFsdWVTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMjAwLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNlbGVjdGVkOiBudWxsLFxuICB9O1xuXG4gIGhhbmRsZVNlbGVjdCA9ICh2YWx1ZSwgb3B0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBvblZhbHVlU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWQ6IHZhbHVlLFxuICAgIH0pO1xuICAgIG9uVmFsdWVTZWxlY3Qoe1xuICAgICAgaWQ6IG9wdGlvbi5rZXksXG4gICAgICB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXJPcHRpb25zID0gKG9wdGlvbnMpID0+XG4gICAgb3B0aW9ucy5tYXAoKGN1cnJlbnQpID0+IChcbiAgICAgIDxPcHRpb24ga2V5PXtjdXJyZW50LmlkfSB2YWx1ZT17Y3VycmVudC52YWx1ZX0+XG4gICAgICAgIHtjdXJyZW50LnZhbHVlfVxuICAgICAgPC9PcHRpb24+XG4gICAgKSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgcGxhY2Vob2xkZXIsIG5hbWUsIHdpZHRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgc2hvd1NlYXJjaFxuICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGggfX1cbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkIHx8IHVuZGVmaW5lZH1cbiAgICAgID5cbiAgICAgICAge3RoaXMucmVuZGVyT3B0aW9ucyhvcHRpb25zKX1cbiAgICAgIDwvU2VsZWN0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwU2VsZWN0O1xuIl19