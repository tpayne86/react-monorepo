const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.simpleApiStoreStates = void 0;

const _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty'),
);

require('core-js/modules/es6.array.iterator');

require('core-js/modules/es6.object.keys');

require('core-js/modules/web.dom.iterable');

require('core-js/modules/es6.array.for-each');

const _objectSpread3 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectSpread'),
);

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const simpleApiStoreStates = function simpleApiStoreStates(
  state,
  objectName,
  properties,
) {
  //eslint-disable-line
  // strictly to be used only for simple api state

  /**
   * ex :
   * defaultState = {
   *   someProp : {
   *     loading:false;
   *     data: null | [] | 0
   *     error: null
   *   }
   *  }
   */
  const tempObject = (0, _objectSpread3.default)({}, state[objectName]);
  Object.keys(tempObject).forEach(function(key) {
    if (Object.prototype.hasOwnProperty.call(properties, key)) {
      tempObject[key] = properties[key];
    }
  });
  return (0, _objectSpread3.default)(
    {},
    state,
    (0, _defineProperty2.default)({}, objectName, tempObject),
  );
};

exports.simpleApiStoreStates = simpleApiStoreStates;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    simpleApiStoreStates,
    'simpleApiStoreStates',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/generics/index.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZW5lcmljcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzaW1wbGVBcGlTdG9yZVN0YXRlcyIsInN0YXRlIiwib2JqZWN0TmFtZSIsInByb3BlcnRpZXMiLCJ0ZW1wT2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBUUMsVUFBUixFQUFvQkMsVUFBcEIsRUFBbUM7QUFBRTtBQUN2RTs7QUFDQTs7Ozs7Ozs7OztBQVVBLE1BQU1DLFVBQVUsbUNBQ1hILEtBQUssQ0FBQ0MsVUFBRCxDQURNLENBQWhCO0FBR0FHLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixVQUFaLEVBQXdCRyxPQUF4QixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkMsUUFBSUgsTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLFVBQXJDLEVBQWlESyxHQUFqRCxDQUFKLEVBQTJEO0FBQ3pESixNQUFBQSxVQUFVLENBQUNJLEdBQUQsQ0FBVixHQUFrQkwsVUFBVSxDQUFDSyxHQUFELENBQTVCO0FBQ0Q7QUFDRixHQUpEO0FBS0EseUNBQ0tQLEtBREwsb0NBRUdDLFVBRkgsRUFFZ0JFLFVBRmhCO0FBSUQsQ0F4Qk07Ozs7Ozs7Ozs7OzswQkFBTUosb0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2ltcGxlQXBpU3RvcmVTdGF0ZXMgPSAoc3RhdGUsIG9iamVjdE5hbWUsIHByb3BlcnRpZXMpID0+IHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gIC8vIHN0cmljdGx5IHRvIGJlIHVzZWQgb25seSBmb3Igc2ltcGxlIGFwaSBzdGF0ZVxuICAvKipcbiAgICogZXggOlxuICAgKiBkZWZhdWx0U3RhdGUgPSB7XG4gICAqICAgc29tZVByb3AgOiB7XG4gICAqICAgICBsb2FkaW5nOmZhbHNlO1xuICAgKiAgICAgZGF0YTogbnVsbCB8IFtdIHwgMFxuICAgKiAgICAgZXJyb3I6IG51bGxcbiAgICogICB9XG4gICAqICB9XG4gICAqL1xuICBjb25zdCB0ZW1wT2JqZWN0ID0ge1xuICAgIC4uLnN0YXRlW29iamVjdE5hbWVdLFxuICB9O1xuICBPYmplY3Qua2V5cyh0ZW1wT2JqZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BlcnRpZXMsIGtleSkpIHtcbiAgICAgIHRlbXBPYmplY3Rba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIFtvYmplY3ROYW1lXTogdGVtcE9iamVjdCxcbiAgfTtcbn07XG4iXX0=
