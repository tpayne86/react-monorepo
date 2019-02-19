const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _Spinner = _interopRequireDefault(require('../../elements/Spinner'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const LoadingFallback = function LoadingFallback(_ref) {
  const loading = _ref.loading;

  const children = _ref.children;

  const size = _ref.size;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    loading === true
      ? _react.default.createElement(
          'div',
          {
            className: 'flex flex--center padding padding--lg',
          },
          _react.default.createElement(_Spinner.default, {
            visible: loading,
            size,
          }),
        )
      : children,
  );
};

LoadingFallback.propTypes = {
  loading: _propTypes.default.bool.isRequired,
  children: _propTypes.default.node.isRequired,
  size: _propTypes.default.string,
};
LoadingFallback.defaultProps = {
  size: 'default',
};
const _default = LoadingFallback;
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
    LoadingFallback,
    'LoadingFallback',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/LoadingFallback/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/LoadingFallback/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvTG9hZGluZ0ZhbGxiYWNrL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJMb2FkaW5nRmFsbGJhY2siLCJsb2FkaW5nIiwiY2hpbGRyZW4iLCJzaXplIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLFFBQVosUUFBWUEsUUFBWjtBQUFBLE1BQXNCQyxJQUF0QixRQUFzQkEsSUFBdEI7QUFBQSxTQUN0Qiw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNHRixPQUFPLEtBQUssSUFBWixHQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxPQUFPLEVBQUVBLE9BQWxCO0FBQTJCLElBQUEsSUFBSSxFQUFFRTtBQUFqQyxJQURGLENBREQsR0FLQ0QsUUFOSixDQURzQjtBQUFBLENBQXhCOztBQVlBRixlQUFlLENBQUNJLFNBQWhCLEdBQTRCO0FBQzFCSCxFQUFBQSxPQUFPLEVBQUVJLG1CQUFVQyxJQUFWLENBQWVDLFVBREU7QUFFMUJMLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVHLElBQVYsQ0FBZUQsVUFGQztBQUcxQkosRUFBQUEsSUFBSSxFQUFFRSxtQkFBVUk7QUFIVSxDQUE1QjtBQUtBVCxlQUFlLENBQUNVLFlBQWhCLEdBQStCO0FBQzdCUCxFQUFBQSxJQUFJLEVBQUU7QUFEdUIsQ0FBL0I7ZUFJZUgsZTs7Ozs7Ozs7Ozs7OzBCQXJCVEEsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvU3Bpbm5lcic7XG5cbmNvbnN0IExvYWRpbmdGYWxsYmFjayA9ICh7IGxvYWRpbmcsIGNoaWxkcmVuLCBzaXplIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIHtsb2FkaW5nID09PSB0cnVlID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtLWNlbnRlciBwYWRkaW5nIHBhZGRpbmctLWxnXCI+XG4gICAgICAgIDxTcGlubmVyIHZpc2libGU9e2xvYWRpbmd9IHNpemU9e3NpemV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgY2hpbGRyZW5cbiAgICApfVxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuTG9hZGluZ0ZhbGxiYWNrLnByb3BUeXBlcyA9IHtcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuTG9hZGluZ0ZhbGxiYWNrLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogJ2RlZmF1bHQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ0ZhbGxiYWNrO1xuIl19
