"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var AppButton = function AppButton(_ref) {
  var disabled = _ref.disabled,
      url = _ref.url,
      icon = _ref.icon,
      shape = _ref.shape,
      loading = _ref.loading,
      type = _ref.type,
      onClick = _ref.onClick,
      label = _ref.label,
      meta = _ref.meta;
  return _react.default.createElement(_button.default, {
    disabled: disabled,
    url: url,
    icon: icon,
    loading: loading,
    shape: shape,
    type: type,
    onClick: onClick,
    "data-meta": meta
  }, label);
};

AppButton.defaultProps = {
  disabled: false,
  url: null,
  icon: null,
  loading: false,
  shape: null,
  type: 'primary',
  meta: null
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
  meta: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = AppButton;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppButton, "AppButton", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Button/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Button/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9CdXR0b24vaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcEJ1dHRvbiIsImRpc2FibGVkIiwidXJsIiwiaWNvbiIsInNoYXBlIiwibG9hZGluZyIsInR5cGUiLCJvbkNsaWNrIiwibGFiZWwiLCJtZXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFDaEJDLFFBRGdCLFFBQ2hCQSxRQURnQjtBQUFBLE1BQ05DLEdBRE0sUUFDTkEsR0FETTtBQUFBLE1BRWhCQyxJQUZnQixRQUVoQkEsSUFGZ0I7QUFBQSxNQUVWQyxLQUZVLFFBRVZBLEtBRlU7QUFBQSxNQUdoQkMsT0FIZ0IsUUFHaEJBLE9BSGdCO0FBQUEsTUFHUEMsSUFITyxRQUdQQSxJQUhPO0FBQUEsTUFJaEJDLE9BSmdCLFFBSWhCQSxPQUpnQjtBQUFBLE1BSVBDLEtBSk8sUUFJUEEsS0FKTztBQUFBLE1BS2hCQyxJQUxnQixRQUtoQkEsSUFMZ0I7QUFBQSxTQU9oQjtBQUNFLElBQUEsUUFBUSxFQUFFUixRQURaO0FBRUUsSUFBQSxHQUFHLEVBQUVDLEdBRlA7QUFHRSxJQUFBLElBQUksRUFBRUMsSUFIUjtBQUlFLElBQUEsT0FBTyxFQUFFRSxPQUpYO0FBS0UsSUFBQSxLQUFLLEVBQUVELEtBTFQ7QUFNRSxJQUFBLElBQUksRUFBRUUsSUFOUjtBQU9FLElBQUEsT0FBTyxFQUFFQyxPQVBYO0FBUUUsaUJBQVdFO0FBUmIsS0FVR0QsS0FWSCxDQVBnQjtBQUFBLENBQWxCOztBQXFCQVIsU0FBUyxDQUFDVSxZQUFWLEdBQXlCO0FBQ3ZCVCxFQUFBQSxRQUFRLEVBQUUsS0FEYTtBQUV2QkMsRUFBQUEsR0FBRyxFQUFFLElBRmtCO0FBR3ZCQyxFQUFBQSxJQUFJLEVBQUUsSUFIaUI7QUFJdkJFLEVBQUFBLE9BQU8sRUFBRSxLQUpjO0FBS3ZCRCxFQUFBQSxLQUFLLEVBQUUsSUFMZ0I7QUFNdkJFLEVBQUFBLElBQUksRUFBRSxTQU5pQjtBQU92QkcsRUFBQUEsSUFBSSxFQUFFO0FBUGlCLENBQXpCO0FBU0FULFNBQVMsQ0FBQ1csU0FBVixHQUFzQjtBQUNwQlYsRUFBQUEsUUFBUSxFQUFFVyxtQkFBVUMsSUFEQTtBQUVwQlgsRUFBQUEsR0FBRyxFQUFFVSxtQkFBVUUsTUFGSztBQUdwQlgsRUFBQUEsSUFBSSxFQUFFUyxtQkFBVUUsTUFISTtBQUlwQlIsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUUsTUFKSTtBQUtwQlQsRUFBQUEsT0FBTyxFQUFFTyxtQkFBVUMsSUFMQztBQU1wQlQsRUFBQUEsS0FBSyxFQUFFUSxtQkFBVUUsTUFORztBQU9wQlAsRUFBQUEsT0FBTyxFQUFFSyxtQkFBVUcsSUFBVixDQUFlQyxVQVBKO0FBUXBCUixFQUFBQSxLQUFLLEVBQUVJLG1CQUFVRSxNQUFWLENBQWlCRSxVQVJKO0FBU3BCUCxFQUFBQSxJQUFJLEVBQUVHLG1CQUFVSyxTQUFWLENBQW9CLENBQUNMLG1CQUFVTSxNQUFYLEVBQW1CTixtQkFBVUUsTUFBN0IsQ0FBcEI7QUFUYyxDQUF0QjtlQVllZCxTOzs7Ozs7Ozs7Ozs7MEJBMUNUQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgQXBwQnV0dG9uID0gKHtcbiAgZGlzYWJsZWQsIHVybCxcbiAgaWNvbiwgc2hhcGUsXG4gIGxvYWRpbmcsIHR5cGUsXG4gIG9uQ2xpY2ssIGxhYmVsLFxuICBtZXRhLFxufSkgPT4gKFxuICA8QnV0dG9uXG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgIHVybD17dXJsfVxuICAgIGljb249e2ljb259XG4gICAgbG9hZGluZz17bG9hZGluZ31cbiAgICBzaGFwZT17c2hhcGV9XG4gICAgdHlwZT17dHlwZX1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGRhdGEtbWV0YT17bWV0YX1cbiAgPlxuICAgIHtsYWJlbH1cblxuICA8L0J1dHRvbj5cbik7XG5BcHBCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHVybDogbnVsbCxcbiAgaWNvbjogbnVsbCxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNoYXBlOiBudWxsLFxuICB0eXBlOiAncHJpbWFyeScsXG4gIG1ldGE6IG51bGwsXG59O1xuQXBwQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzaGFwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWV0YTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQnV0dG9uO1xuIl19