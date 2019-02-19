const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/lib/button/style');

const _button = _interopRequireDefault(require('antd/lib/button'));

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const AppButton = function AppButton(_ref) {
  const disabled = _ref.disabled;

  const url = _ref.url;

  const icon = _ref.icon;

  const shape = _ref.shape;

  const loading = _ref.loading;

  const type = _ref.type;

  const onClick = _ref.onClick;

  const label = _ref.label;

  const meta = _ref.meta;
  return _react.default.createElement(
    _button.default,
    {
      disabled,
      url,
      icon,
      loading,
      shape,
      type,
      onClick,
      'data-meta': meta,
    },
    label,
  );
};

AppButton.defaultProps = {
  disabled: false,
  url: null,
  icon: null,
  loading: false,
  shape: null,
  type: 'primary',
  meta: null,
};
AppButton.propTypes = {
  disabled: _propTypes.default.bool,
  url: _propTypes.default.string,
  icon: _propTypes.default.string,
  type: _propTypes.default.string,
  loading: _propTypes.default.bool,
  shape: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  meta: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.string,
  ]),
};
const _default = AppButton;
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
    AppButton,
    'AppButton',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Button/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Button/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9CdXR0b24vaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcEJ1dHRvbiIsImRpc2FibGVkIiwidXJsIiwiaWNvbiIsInNoYXBlIiwibG9hZGluZyIsInR5cGUiLCJvbkNsaWNrIiwibGFiZWwiLCJtZXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFDaEJDLFFBRGdCLFFBQ2hCQSxRQURnQjtBQUFBLE1BRWhCQyxHQUZnQixRQUVoQkEsR0FGZ0I7QUFBQSxNQUdoQkMsSUFIZ0IsUUFHaEJBLElBSGdCO0FBQUEsTUFJaEJDLEtBSmdCLFFBSWhCQSxLQUpnQjtBQUFBLE1BS2hCQyxPQUxnQixRQUtoQkEsT0FMZ0I7QUFBQSxNQU1oQkMsSUFOZ0IsUUFNaEJBLElBTmdCO0FBQUEsTUFPaEJDLE9BUGdCLFFBT2hCQSxPQVBnQjtBQUFBLE1BUWhCQyxLQVJnQixRQVFoQkEsS0FSZ0I7QUFBQSxNQVNoQkMsSUFUZ0IsUUFTaEJBLElBVGdCO0FBQUEsU0FXaEI7QUFDRSxJQUFBLFFBQVEsRUFBRVIsUUFEWjtBQUVFLElBQUEsR0FBRyxFQUFFQyxHQUZQO0FBR0UsSUFBQSxJQUFJLEVBQUVDLElBSFI7QUFJRSxJQUFBLE9BQU8sRUFBRUUsT0FKWDtBQUtFLElBQUEsS0FBSyxFQUFFRCxLQUxUO0FBTUUsSUFBQSxJQUFJLEVBQUVFLElBTlI7QUFPRSxJQUFBLE9BQU8sRUFBRUMsT0FQWDtBQVFFLGlCQUFXRTtBQVJiLEtBVUdELEtBVkgsQ0FYZ0I7QUFBQSxDQUFsQjs7QUF3QkFSLFNBQVMsQ0FBQ1UsWUFBVixHQUF5QjtBQUN2QlQsRUFBQUEsUUFBUSxFQUFFLEtBRGE7QUFFdkJDLEVBQUFBLEdBQUcsRUFBRSxJQUZrQjtBQUd2QkMsRUFBQUEsSUFBSSxFQUFFLElBSGlCO0FBSXZCRSxFQUFBQSxPQUFPLEVBQUUsS0FKYztBQUt2QkQsRUFBQUEsS0FBSyxFQUFFLElBTGdCO0FBTXZCRSxFQUFBQSxJQUFJLEVBQUUsU0FOaUI7QUFPdkJHLEVBQUFBLElBQUksRUFBRTtBQVBpQixDQUF6QjtBQVNBVCxTQUFTLENBQUNXLFNBQVYsR0FBc0I7QUFDcEJWLEVBQUFBLFFBQVEsRUFBRVcsbUJBQVVDLElBREE7QUFFcEJYLEVBQUFBLEdBQUcsRUFBRVUsbUJBQVVFLE1BRks7QUFHcEJYLEVBQUFBLElBQUksRUFBRVMsbUJBQVVFLE1BSEk7QUFJcEJSLEVBQUFBLElBQUksRUFBRU0sbUJBQVVFLE1BSkk7QUFLcEJULEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVDLElBTEM7QUFNcEJULEVBQUFBLEtBQUssRUFBRVEsbUJBQVVFLE1BTkc7QUFPcEJQLEVBQUFBLE9BQU8sRUFBRUssbUJBQVVHLElBQVYsQ0FBZUMsVUFQSjtBQVFwQlIsRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUUsTUFBVixDQUFpQkUsVUFSSjtBQVNwQlAsRUFBQUEsSUFBSSxFQUFFRyxtQkFBVUssU0FBVixDQUFvQixDQUFDTCxtQkFBVU0sTUFBWCxFQUFtQk4sbUJBQVVFLE1BQTdCLENBQXBCO0FBVGMsQ0FBdEI7ZUFZZWQsUzs7Ozs7Ozs7Ozs7OzBCQTdDVEEsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IEFwcEJ1dHRvbiA9ICh7XG4gIGRpc2FibGVkLFxuICB1cmwsXG4gIGljb24sXG4gIHNoYXBlLFxuICBsb2FkaW5nLFxuICB0eXBlLFxuICBvbkNsaWNrLFxuICBsYWJlbCxcbiAgbWV0YSxcbn0pID0+IChcbiAgPEJ1dHRvblxuICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICB1cmw9e3VybH1cbiAgICBpY29uPXtpY29ufVxuICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgc2hhcGU9e3NoYXBlfVxuICAgIHR5cGU9e3R5cGV9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBkYXRhLW1ldGE9e21ldGF9XG4gID5cbiAgICB7bGFiZWx9XG4gIDwvQnV0dG9uPlxuKTtcbkFwcEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgdXJsOiBudWxsLFxuICBpY29uOiBudWxsLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hhcGU6IG51bGwsXG4gIHR5cGU6ICdwcmltYXJ5JyxcbiAgbWV0YTogbnVsbCxcbn07XG5BcHBCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHNoYXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtZXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBCdXR0b247XG4iXX0=
