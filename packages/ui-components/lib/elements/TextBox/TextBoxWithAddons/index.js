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

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const TextBoxWithAddons =
  /* #__PURE__ */
  (function(_React$PureComponent) {
    (0, _inherits2.default)(TextBoxWithAddons, _React$PureComponent);

    function TextBoxWithAddons(props) {
      let _this;

      (0, _classCallCheck2.default)(this, TextBoxWithAddons);
      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(TextBoxWithAddons).call(this, props),
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
      _this.state = {
        value: '',
      };
      return _this;
    }

    (0, _createClass2.default)(TextBoxWithAddons, [
      {
        key: 'render',
        value: function render() {
          const _this$props = this.props;

          const addonAfter = _this$props.addonAfter;

          const addonBefore = _this$props.addonBefore;

          const prefixIcon = _this$props.prefixIcon;

          const suffixIcon = _this$props.suffixIcon;

          const defaultValue = _this$props.defaultValue;

          const id = _this$props.id;

          const type = _this$props.type;

          const placeholder = _this$props.placeholder;

          const size = _this$props.size;

          const className = _this$props.className;
          const value = this.state.value;
          return _react.default.createElement(_input.default, {
            addonBefore,
            addonAfter,
            prefix: prefixIcon,
            suffix: suffixIcon,
            defaultValue,
            id,
            type,
            placeholder,
            onChange: this.handleChange,
            size,
            value,
            className,
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
    return TextBoxWithAddons;
  })(_react.default.PureComponent);

(0, _defineProperty2.default)(TextBoxWithAddons, 'propTypes', {
  addonAfter: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.node,
  ]),
  addonBefore: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.node,
  ]),
  prefixIcon: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.node,
  ]),
  suffixIcon: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.node,
  ]),
  defaultValue: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string.isRequired,
  onTextChange: _propTypes.default.func.isRequired,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  size: _propTypes.default.string,
});
(0, _defineProperty2.default)(TextBoxWithAddons, 'defaultProps', {
  addonAfter: '',
  addonBefore: '',
  prefixIcon: '',
  suffixIcon: '',
  defaultValue: '',
  type: 'text',
  size: 'default',
  className: '',
});
const _default = TextBoxWithAddons;
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
    TextBoxWithAddons,
    'TextBoxWithAddons',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithAddons/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/TextBox/TextBoxWithAddons/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9UZXh0Qm94L1RleHRCb3hXaXRoQWRkb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJUZXh0Qm94V2l0aEFkZG9ucyIsInByb3BzIiwiZXYiLCJvblRleHRDaGFuZ2UiLCJ0ZW1wVmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiYWRkb25BZnRlciIsImFkZG9uQmVmb3JlIiwicHJlZml4SWNvbiIsInN1ZmZpeEljb24iLCJkZWZhdWx0VmFsdWUiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNpemUiLCJjbGFzc05hbWUiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7SUFHTUEsaUI7Ozs7O0FBMEJKLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsdUhBQU1BLEtBQU47QUFEaUIscUlBT0osVUFBQ0MsRUFBRCxFQUFRO0FBQUEsVUFDYkMsWUFEYSxHQUNJLE1BQUtGLEtBRFQsQ0FDYkUsWUFEYTtBQUVyQixVQUFNQyxPQUFPLEdBQUdGLEVBQUUsQ0FBQ0csTUFBSCxDQUFVQyxLQUExQjs7QUFDQSxZQUFLQyxRQUFMLENBQWM7QUFDWkQsUUFBQUEsS0FBSyxFQUFFRjtBQURLLE9BQWQ7O0FBR0FELE1BQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0FBQ0QsS0Fka0I7QUFFakIsVUFBS0ksS0FBTCxHQUFhO0FBQ1hGLE1BQUFBLEtBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBV1E7QUFBQSx3QkFZSCxLQUFLTCxLQVpGO0FBQUEsVUFFTFEsVUFGSyxlQUVMQSxVQUZLO0FBQUEsVUFHTEMsV0FISyxlQUdMQSxXQUhLO0FBQUEsVUFJTEMsVUFKSyxlQUlMQSxVQUpLO0FBQUEsVUFLTEMsVUFMSyxlQUtMQSxVQUxLO0FBQUEsVUFNTEMsWUFOSyxlQU1MQSxZQU5LO0FBQUEsVUFPTEMsRUFQSyxlQU9MQSxFQVBLO0FBQUEsVUFRTEMsSUFSSyxlQVFMQSxJQVJLO0FBQUEsVUFTTEMsV0FUSyxlQVNMQSxXQVRLO0FBQUEsVUFVTEMsSUFWSyxlQVVMQSxJQVZLO0FBQUEsVUFXTEMsU0FYSyxlQVdMQSxTQVhLO0FBQUEsVUFhQ1osS0FiRCxHQWFXLEtBQUtFLEtBYmhCLENBYUNGLEtBYkQ7QUFjUCxhQUNFO0FBQ0UsUUFBQSxXQUFXLEVBQUVJLFdBRGY7QUFFRSxRQUFBLFVBQVUsRUFBRUQsVUFGZDtBQUdFLFFBQUEsTUFBTSxFQUFFRSxVQUhWO0FBSUUsUUFBQSxNQUFNLEVBQUVDLFVBSlY7QUFLRSxRQUFBLFlBQVksRUFBRUMsWUFMaEI7QUFNRSxRQUFBLEVBQUUsRUFBRUMsRUFOTjtBQU9FLFFBQUEsSUFBSSxFQUFFQyxJQVBSO0FBUUUsUUFBQSxXQUFXLEVBQUVDLFdBUmY7QUFTRSxRQUFBLFFBQVEsRUFBRSxLQUFLRyxZQVRqQjtBQVVFLFFBQUEsSUFBSSxFQUFFRixJQVZSO0FBV0UsUUFBQSxLQUFLLEVBQUVYLEtBWFQ7QUFZRSxRQUFBLFNBQVMsRUFBRVk7QUFaYixRQURGO0FBZ0JEOzs7Ozs7Ozs7O0VBeEU2QkUsZUFBTUMsYTs7OEJBQWhDckIsaUIsZUFDZTtBQUNqQlMsRUFBQUEsVUFBVSxFQUFFYSxtQkFBVUMsU0FBVixDQUFvQixDQUFDRCxtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVHLElBQTdCLENBQXBCLENBREs7QUFFakJmLEVBQUFBLFdBQVcsRUFBRVksbUJBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QsbUJBQVVFLE1BQVgsRUFBbUJGLG1CQUFVRyxJQUE3QixDQUFwQixDQUZJO0FBR2pCZCxFQUFBQSxVQUFVLEVBQUVXLG1CQUFVQyxTQUFWLENBQW9CLENBQUNELG1CQUFVRSxNQUFYLEVBQW1CRixtQkFBVUcsSUFBN0IsQ0FBcEIsQ0FISztBQUlqQmIsRUFBQUEsVUFBVSxFQUFFVSxtQkFBVUMsU0FBVixDQUFvQixDQUFDRCxtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVHLElBQTdCLENBQXBCLENBSks7QUFLakJaLEVBQUFBLFlBQVksRUFBRVMsbUJBQVVFLE1BTFA7QUFNakJWLEVBQUFBLEVBQUUsRUFBRVEsbUJBQVVFLE1BQVYsQ0FBaUJFLFVBTko7QUFPakJWLEVBQUFBLFdBQVcsRUFBRU0sbUJBQVVFLE1BQVYsQ0FBaUJFLFVBUGI7QUFRakJ2QixFQUFBQSxZQUFZLEVBQUVtQixtQkFBVUssSUFBVixDQUFlRCxVQVJaO0FBU2pCWCxFQUFBQSxJQUFJLEVBQUVPLG1CQUFVRSxNQVRDO0FBVWpCTixFQUFBQSxTQUFTLEVBQUVJLG1CQUFVRSxNQVZKO0FBV2pCUCxFQUFBQSxJQUFJLEVBQUVLLG1CQUFVRTtBQVhDLEM7OEJBRGZ4QixpQixrQkFla0I7QUFDcEJTLEVBQUFBLFVBQVUsRUFBRSxFQURRO0FBRXBCQyxFQUFBQSxXQUFXLEVBQUUsRUFGTztBQUdwQkMsRUFBQUEsVUFBVSxFQUFFLEVBSFE7QUFJcEJDLEVBQUFBLFVBQVUsRUFBRSxFQUpRO0FBS3BCQyxFQUFBQSxZQUFZLEVBQUUsRUFMTTtBQU1wQkUsRUFBQUEsSUFBSSxFQUFFLE1BTmM7QUFPcEJFLEVBQUFBLElBQUksRUFBRSxTQVBjO0FBUXBCQyxFQUFBQSxTQUFTLEVBQUU7QUFSUyxDO2VBNERUbEIsaUI7Ozs7Ozs7Ozs7OzswQkEzRVRBLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jbGFzcyBUZXh0Qm94V2l0aEFkZG9ucyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFkZG9uQWZ0ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gICAgYWRkb25CZWZvcmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gICAgcHJlZml4SWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgICBzdWZmaXhJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25UZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhZGRvbkFmdGVyOiAnJyxcbiAgICBhZGRvbkJlZm9yZTogJycsXG4gICAgcHJlZml4SWNvbjogJycsXG4gICAgc3VmZml4SWNvbjogJycsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2KSA9PiB7XG4gICAgY29uc3QgeyBvblRleHRDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGVtcFZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiB0ZW1wVmFsLFxuICAgIH0pO1xuICAgIG9uVGV4dENoYW5nZSh0ZW1wVmFsKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWRkb25BZnRlcixcbiAgICAgIGFkZG9uQmVmb3JlLFxuICAgICAgcHJlZml4SWNvbixcbiAgICAgIHN1ZmZpeEljb24sXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBpZCxcbiAgICAgIHR5cGUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNpemUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGFkZG9uQmVmb3JlPXthZGRvbkJlZm9yZX1cbiAgICAgICAgYWRkb25BZnRlcj17YWRkb25BZnRlcn1cbiAgICAgICAgcHJlZml4PXtwcmVmaXhJY29ufVxuICAgICAgICBzdWZmaXg9e3N1ZmZpeEljb259XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRCb3hXaXRoQWRkb25zO1xuIl19
