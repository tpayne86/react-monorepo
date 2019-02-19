const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/lib/input/style');

const _input = _interopRequireDefault(require('antd/lib/input'));

const _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck'),
);

const _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass'),
);

const _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

const _getPrototypeOf3 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf'),
);

const _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits'),
);

const _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized'),
);

const _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty'),
);

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const AppTextArea =
  /* #__PURE__ */
  (function(_React$PureComponent) {
    (0, _inherits2.default)(AppTextArea, _React$PureComponent);

    function AppTextArea() {
      let _getPrototypeOf2;

      let _this;

      (0, _classCallCheck2.default)(this, AppTextArea);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(
          AppTextArea,
        )).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'state',
        {
          value: '',
        },
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'handleChange',
        function(ev) {
          const onTextChange = _this.props.onTextChange;
          const tempVal = ev.target.value;

          _this.setState({
            value: tempVal,
          });

          onTextChange(tempVal);
        },
      );
      return _this;
    }

    (0, _createClass2.default)(AppTextArea, [
      {
        key: 'render',
        value: function render() {
          const _this$props = this.props;

          const minRows = _this$props.minRows;

          const maxRows = _this$props.maxRows;

          const id = _this$props.id;

          const placeholder = _this$props.placeholder;

          const size = _this$props.size;

          const className = _this$props.className;
          const value = this.state.value;
          return _react.default.createElement(_input.default.TextArea, {
            id,
            placeholder,
            onChange: this.handleChange,
            size,
            value,
            className,
            autosize: {
              minRows,
              maxRows,
            },
          });
        },
      },
      {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
          // @ts-ignore
          this[key] = eval(code);
        },
      },
    ]);
    return AppTextArea;
  })(_react.default.PureComponent);

(0, _defineProperty2.default)(AppTextArea, 'propTypes', {
  id: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string.isRequired,
  onTextChange: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  size: _propTypes.default.string,
  minRows: _propTypes.default.number,
  maxRows: _propTypes.default.number,
});
(0, _defineProperty2.default)(AppTextArea, 'defaultProps', {
  size: 'default',
  className: '',
  minRows: 2,
  maxRows: 6,
});
const _default = AppTextArea;
const _default2 = _default;
exports.default = _default2;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    AppTextArea,
    'AppTextArea',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextArea/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextArea/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9UZXh0Qm94L1RleHRBcmVhL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBcHBUZXh0QXJlYSIsInZhbHVlIiwiZXYiLCJvblRleHRDaGFuZ2UiLCJwcm9wcyIsInRlbXBWYWwiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIm1pblJvd3MiLCJtYXhSb3dzIiwiaWQiLCJwbGFjZWhvbGRlciIsInNpemUiLCJjbGFzc05hbWUiLCJzdGF0ZSIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7O0lBR01BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhIQWtCSTtBQUNOQyxNQUFBQSxLQUFLLEVBQUU7QUFERCxLO3FJQUlPLFVBQUNDLEVBQUQsRUFBUTtBQUFBLFVBQ2JDLFlBRGEsR0FDSSxNQUFLQyxLQURULENBQ2JELFlBRGE7QUFFckIsVUFBTUUsT0FBTyxHQUFHSCxFQUFFLENBQUNJLE1BQUgsQ0FBVUwsS0FBMUI7O0FBQ0EsWUFBS00sUUFBTCxDQUFjO0FBQ1pOLFFBQUFBLEtBQUssRUFBRUk7QUFESyxPQUFkOztBQUdBRixNQUFBQSxZQUFZLENBQUNFLE9BQUQsQ0FBWjtBQUNELEs7Ozs7Ozs2QkFFUTtBQUFBLHdCQUN3RCxLQUFLRCxLQUQ3RDtBQUFBLFVBQ0NJLE9BREQsZUFDQ0EsT0FERDtBQUFBLFVBQ1VDLE9BRFYsZUFDVUEsT0FEVjtBQUFBLFVBQ21CQyxFQURuQixlQUNtQkEsRUFEbkI7QUFBQSxVQUN1QkMsV0FEdkIsZUFDdUJBLFdBRHZCO0FBQUEsVUFDb0NDLElBRHBDLGVBQ29DQSxJQURwQztBQUFBLFVBQzBDQyxTQUQxQyxlQUMwQ0EsU0FEMUM7QUFBQSxVQUVDWixLQUZELEdBRVcsS0FBS2EsS0FGaEIsQ0FFQ2IsS0FGRDtBQUdQLGFBQ0UsNENBQU8sUUFBUDtBQUNFLFFBQUEsRUFBRSxFQUFFUyxFQUROO0FBRUUsUUFBQSxXQUFXLEVBQUVDLFdBRmY7QUFHRSxRQUFBLFFBQVEsRUFBRSxLQUFLSSxZQUhqQjtBQUlFLFFBQUEsSUFBSSxFQUFFSCxJQUpSO0FBS0UsUUFBQSxLQUFLLEVBQUVYLEtBTFQ7QUFNRSxRQUFBLFNBQVMsRUFBRVksU0FOYjtBQU9FLFFBQUEsUUFBUSxFQUFFO0FBQUVMLFVBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXQyxVQUFBQSxPQUFPLEVBQVBBO0FBQVg7QUFQWixRQURGO0FBV0Q7Ozs7Ozs7Ozs7RUE3Q3VCTyxlQUFNQyxhOzs4QkFBMUJqQixXLGVBQ2U7QUFDakJVLEVBQUFBLEVBQUUsRUFBRVEsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREo7QUFFakJULEVBQUFBLFdBQVcsRUFBRU8sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRmI7QUFHakJqQixFQUFBQSxZQUFZLEVBQUVlLG1CQUFVRyxJQUFWLENBQWVELFVBSFo7QUFJakJQLEVBQUFBLFNBQVMsRUFBRUssbUJBQVVDLE1BSko7QUFLakJQLEVBQUFBLElBQUksRUFBRU0sbUJBQVVDLE1BTEM7QUFNakJYLEVBQUFBLE9BQU8sRUFBRVUsbUJBQVVJLE1BTkY7QUFPakJiLEVBQUFBLE9BQU8sRUFBRVMsbUJBQVVJO0FBUEYsQzs4QkFEZnRCLFcsa0JBV2tCO0FBQ3BCWSxFQUFBQSxJQUFJLEVBQUUsU0FEYztBQUVwQkMsRUFBQUEsU0FBUyxFQUFFLEVBRlM7QUFHcEJMLEVBQUFBLE9BQU8sRUFBRSxDQUhXO0FBSXBCQyxFQUFBQSxPQUFPLEVBQUU7QUFKVyxDO2VBcUNUVCxXOzs7Ozs7Ozs7Ozs7MEJBaERUQSxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jbGFzcyBBcHBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvblRleHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWluUm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhSb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWluUm93czogMixcbiAgICBtYXhSb3dzOiA2LFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXYpID0+IHtcbiAgICBjb25zdCB7IG9uVGV4dENoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0ZW1wVmFsID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IHRlbXBWYWwsXG4gICAgfSk7XG4gICAgb25UZXh0Q2hhbmdlKHRlbXBWYWwpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1pblJvd3MsIG1heFJvd3MsIGlkLCBwbGFjZWhvbGRlciwgc2l6ZSwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBhdXRvc2l6ZT17eyBtaW5Sb3dzLCBtYXhSb3dzIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwVGV4dEFyZWE7XG4iXX0=
