const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/lib/row/style');

const _row = _interopRequireDefault(require('antd/lib/row'));

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const GridRow = function GridRow(_ref) {
  const children = _ref.children;
  return _react.default.createElement(_row.default, null, children);
};

GridRow.propTypes = {
  children: _propTypes.default.node.isRequired,
};
const _default = GridRow;
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
    GridRow,
    'GridRow',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Row/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Row/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9HcmlkL1Jvdy9pbmRleC5qc3giXSwibmFtZXMiOlsiR3JpZFJvdyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFrQixpREFBTUEsUUFBTixDQUFsQjtBQUFBLENBQWhCOztBQUNBRCxPQUFPLENBQUNFLFNBQVIsR0FBb0I7QUFDbEJELEVBQUFBLFFBQVEsRUFBRUUsbUJBQVVDLElBQVYsQ0FBZUM7QUFEUCxDQUFwQjtlQUllTCxPOzs7Ozs7Ozs7Ozs7MEJBTFRBLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBHcmlkUm93ID0gKHsgY2hpbGRyZW4gfSkgPT4gPFJvdz57Y2hpbGRyZW59PC9Sb3c+O1xuR3JpZFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFJvdztcbiJdfQ==
