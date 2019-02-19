const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/lib/col/style');

const _col = _interopRequireDefault(require('antd/lib/col'));

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const GridCol = function GridCol(_ref) {
  const size = _ref.size;

  const children = _ref.children;

  const xs = _ref.xs;

  const sm = _ref.sm;

  const md = _ref.md;

  const lg = _ref.lg;

  const xl = _ref.xl;
  return _react.default.createElement(
    _col.default,
    {
      span: size,
      xs: xs || size,
      sm: sm || size,
      md: md || size,
      lg: lg || size,
      xl: xl || size,
    },
    children,
  );
};

GridCol.defaultProps = {
  size: 24,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};
GridCol.propTypes = {
  size: _propTypes.default.number,
  children: _propTypes.default.node.isRequired,
  xs: _propTypes.default.number,
  sm: _propTypes.default.number,
  md: _propTypes.default.number,
  lg: _propTypes.default.number,
  xl: _propTypes.default.number,
};
const _default = GridCol;
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
    GridCol,
    'GridCol',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Col/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Grid/Col/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9HcmlkL0NvbC9pbmRleC5qc3giXSwibmFtZXMiOlsiR3JpZENvbCIsInNpemUiLCJjaGlsZHJlbiIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLFFBQVQsUUFBU0EsUUFBVDtBQUFBLE1BQW1CQyxFQUFuQixRQUFtQkEsRUFBbkI7QUFBQSxNQUF1QkMsRUFBdkIsUUFBdUJBLEVBQXZCO0FBQUEsTUFBMkJDLEVBQTNCLFFBQTJCQSxFQUEzQjtBQUFBLE1BQStCQyxFQUEvQixRQUErQkEsRUFBL0I7QUFBQSxNQUFtQ0MsRUFBbkMsUUFBbUNBLEVBQW5DO0FBQUEsU0FDZDtBQUNFLElBQUEsSUFBSSxFQUFFTixJQURSO0FBRUUsSUFBQSxFQUFFLEVBQUVFLEVBQUUsSUFBSUYsSUFGWjtBQUdFLElBQUEsRUFBRSxFQUFFRyxFQUFFLElBQUlILElBSFo7QUFJRSxJQUFBLEVBQUUsRUFBRUksRUFBRSxJQUFJSixJQUpaO0FBS0UsSUFBQSxFQUFFLEVBQUVLLEVBQUUsSUFBSUwsSUFMWjtBQU1FLElBQUEsRUFBRSxFQUFFTSxFQUFFLElBQUlOO0FBTlosS0FRR0MsUUFSSCxDQURjO0FBQUEsQ0FBaEI7O0FBWUFGLE9BQU8sQ0FBQ1EsWUFBUixHQUF1QjtBQUNyQlAsRUFBQUEsSUFBSSxFQUFFLEVBRGU7QUFFckJFLEVBQUFBLEVBQUUsRUFBRSxDQUZpQjtBQUdyQkMsRUFBQUEsRUFBRSxFQUFFLENBSGlCO0FBSXJCQyxFQUFBQSxFQUFFLEVBQUUsQ0FKaUI7QUFLckJDLEVBQUFBLEVBQUUsRUFBRSxDQUxpQjtBQU1yQkMsRUFBQUEsRUFBRSxFQUFFO0FBTmlCLENBQXZCO0FBUUFQLE9BQU8sQ0FBQ1MsU0FBUixHQUFvQjtBQUNsQlIsRUFBQUEsSUFBSSxFQUFFUyxtQkFBVUMsTUFERTtBQUVsQlQsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUUsSUFBVixDQUFlQyxVQUZQO0FBR2xCVixFQUFBQSxFQUFFLEVBQUVPLG1CQUFVQyxNQUhJO0FBSWxCUCxFQUFBQSxFQUFFLEVBQUVNLG1CQUFVQyxNQUpJO0FBS2xCTixFQUFBQSxFQUFFLEVBQUVLLG1CQUFVQyxNQUxJO0FBTWxCTCxFQUFBQSxFQUFFLEVBQUVJLG1CQUFVQyxNQU5JO0FBT2xCSixFQUFBQSxFQUFFLEVBQUVHLG1CQUFVQztBQVBJLENBQXBCO2VBVWVYLE87Ozs7Ozs7Ozs7OzswQkE5QlRBLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENvbCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBHcmlkQ29sID0gKHsgc2l6ZSwgY2hpbGRyZW4sIHhzLCBzbSwgbWQsIGxnLCB4bCB9KSA9PiAoXG4gIDxDb2xcbiAgICBzcGFuPXtzaXplfVxuICAgIHhzPXt4cyB8fCBzaXplfVxuICAgIHNtPXtzbSB8fCBzaXplfVxuICAgIG1kPXttZCB8fCBzaXplfVxuICAgIGxnPXtsZyB8fCBzaXplfVxuICAgIHhsPXt4bCB8fCBzaXplfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0NvbD5cbik7XG5HcmlkQ29sLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogMjQsXG4gIHhzOiAwLFxuICBzbTogMCxcbiAgbWQ6IDAsXG4gIGxnOiAwLFxuICB4bDogMCxcbn07XG5HcmlkQ29sLnByb3BUeXBlcyA9IHtcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHhzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnOiBQcm9wVHlwZXMubnVtYmVyLFxuICB4bDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRDb2w7XG4iXX0=
