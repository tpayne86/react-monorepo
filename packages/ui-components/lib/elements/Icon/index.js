const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/lib/icon/style');

const _icon = _interopRequireDefault(require('antd/lib/icon'));

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const AppIcon = function AppIcon(_ref) {
  const type = _ref.type;

  const style = _ref.style;
  return _react.default.createElement(_icon.default, {
    type,
    style,
  });
};

AppIcon.propTypes = {
  type: _propTypes.default.string.isRequired,
  style: _propTypes.default.object,
};
AppIcon.defaultProps = {
  style: {},
};
const _default = AppIcon;
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
    AppIcon,
    'AppIcon',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Icon/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Icon/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9JY29uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBcHBJY29uIiwidHlwZSIsInN0eWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQXFCO0FBQU0sSUFBQSxJQUFJLEVBQUVELElBQVo7QUFBa0IsSUFBQSxLQUFLLEVBQUVDO0FBQXpCLElBQXJCO0FBQUEsQ0FBaEI7O0FBRUFGLE9BQU8sQ0FBQ0csU0FBUixHQUFvQjtBQUNsQkYsRUFBQUEsSUFBSSxFQUFFRyxtQkFBVUMsTUFBVixDQUFpQkMsVUFETDtBQUVsQkosRUFBQUEsS0FBSyxFQUFFRSxtQkFBVUc7QUFGQyxDQUFwQjtBQUlBUCxPQUFPLENBQUNRLFlBQVIsR0FBdUI7QUFDckJOLEVBQUFBLEtBQUssRUFBRTtBQURjLENBQXZCO2VBSWVGLE87Ozs7Ozs7Ozs7OzswQkFWVEEsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBBcHBJY29uID0gKHsgdHlwZSwgc3R5bGUgfSkgPT4gPEljb24gdHlwZT17dHlwZX0gc3R5bGU9e3N0eWxlfSAvPjtcblxuQXBwSWNvbi5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuQXBwSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEljb247XG4iXX0=
