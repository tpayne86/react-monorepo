const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck'),
);

const _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass'),
);

const _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

const _getPrototypeOf2 = _interopRequireDefault(
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

require('antd/lib/input/style');

const _input = _interopRequireDefault(require('antd/lib/input'));

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const Search = _input.default.Search;

const TextBoxWithButton =
  /* #__PURE__ */
  (function(_React$Component) {
    (0, _inherits2.default)(TextBoxWithButton, _React$Component);

    function TextBoxWithButton(props) {
      let _this;

      (0, _classCallCheck2.default)(this, TextBoxWithButton);
      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(TextBoxWithButton).call(this, props),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'onSubmit',
        function(value) {
          const onAction = _this.props.onAction;

          _this.setState({
            value: '',
          });

          onAction(value);
        },
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'handleChange',
        function(ev) {
          _this.setState({
            value: ev.target.value,
          });
        },
      );
      _this.state = {
        value: '',
      };
      return _this;
    }

    (0, _createClass2.default)(TextBoxWithButton, [
      {
        key: 'render',
        value: function render() {
          const _this$props = this.props;

          const placeholder = _this$props.placeholder;

          const buttonText = _this$props.buttonText;
          const value = this.state.value;
          return _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(Search, {
              placeholder,
              onSearch: this.onSubmit,
              enterButton: buttonText,
              value,
              onChange: this.handleChange,
            }),
          );
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
    return TextBoxWithButton;
  })(_react.default.Component);

(0, _defineProperty2.default)(TextBoxWithButton, 'propTypes', {
  placeholder: _propTypes.default.string.isRequired,
  onAction: _propTypes.default.func.isRequired,
  buttonText: _propTypes.default.string,
});
(0, _defineProperty2.default)(TextBoxWithButton, 'defaultProps', {
  buttonText: '',
});
const _default = TextBoxWithButton;
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
    Search,
    'Search',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx',
  );
  reactHotLoader.register(
    TextBoxWithButton,
    'TextBoxWithButton',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithButton/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9UZXh0Qm94L1RleHRCb3hXaXRoQnV0dG9uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJUZXh0Qm94V2l0aEJ1dHRvbiIsInByb3BzIiwidmFsdWUiLCJvbkFjdGlvbiIsInNldFN0YXRlIiwiZXYiLCJ0YXJnZXQiLCJzdGF0ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uVGV4dCIsIm9uU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztJQUdRQSxNLGtCQUFBQSxNOztJQUNGQyxpQjs7Ozs7QUFXSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLHVIQUFNQSxLQUFOO0FBRGlCLGlJQU9SLFVBQUNDLEtBQUQsRUFBVztBQUFBLFVBQ1pDLFFBRFksR0FDQyxNQUFLRixLQUROLENBQ1pFLFFBRFk7O0FBRXBCLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxLQUFLLEVBQUU7QUFESyxPQUFkOztBQUdBQyxNQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEtBYmtCO0FBQUEscUlBZUosVUFBQ0csRUFBRCxFQUFRO0FBQ3JCLFlBQUtELFFBQUwsQ0FBYztBQUNaRixRQUFBQSxLQUFLLEVBQUVHLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVSjtBQURMLE9BQWQ7QUFHRCxLQW5Ca0I7QUFFakIsVUFBS0ssS0FBTCxHQUFhO0FBQ1hMLE1BQUFBLEtBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBZ0JRO0FBQUEsd0JBQzZCLEtBQUtELEtBRGxDO0FBQUEsVUFDQ08sV0FERCxlQUNDQSxXQUREO0FBQUEsVUFDY0MsVUFEZCxlQUNjQSxVQURkO0FBQUEsVUFFQ1AsS0FGRCxHQUVXLEtBQUtLLEtBRmhCLENBRUNMLEtBRkQ7QUFHUCxhQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMsTUFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFTSxXQURmO0FBRUUsUUFBQSxRQUFRLEVBQUUsS0FBS0UsUUFGakI7QUFHRSxRQUFBLFdBQVcsRUFBRUQsVUFIZjtBQUlFLFFBQUEsS0FBSyxFQUFFUCxLQUpUO0FBS0UsUUFBQSxRQUFRLEVBQUUsS0FBS1M7QUFMakIsUUFERixDQURGO0FBV0Q7Ozs7Ozs7Ozs7RUE5QzZCQyxlQUFNQyxTOzs4QkFBaENiLGlCLGVBQ2U7QUFDakJRLEVBQUFBLFdBQVcsRUFBRU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGI7QUFFakJiLEVBQUFBLFFBQVEsRUFBRVcsbUJBQVVHLElBQVYsQ0FBZUQsVUFGUjtBQUdqQlAsRUFBQUEsVUFBVSxFQUFFSyxtQkFBVUM7QUFITCxDOzhCQURmZixpQixrQkFPa0I7QUFDcEJTLEVBQUFBLFVBQVUsRUFBRTtBQURRLEM7ZUEwQ1RULGlCOzs7Ozs7Ozs7Ozs7MEJBbERQRCxNOzBCQUNGQyxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xuY2xhc3MgVGV4dEJveFdpdGhCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25BY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYnV0dG9uVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJ1dHRvblRleHQ6ICcnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgfTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgeyBvbkFjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9KTtcbiAgICBvbkFjdGlvbih2YWx1ZSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBidXR0b25UZXh0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvblNlYXJjaD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICBlbnRlckJ1dHRvbj17YnV0dG9uVGV4dH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRCb3hXaXRoQnV0dG9uO1xuIl19
