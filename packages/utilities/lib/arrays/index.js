require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.findInArrayOfArrays = exports.transformArrayToArrayOfArraysRamdomly = void 0;

require('core-js/modules/web.dom.iterable');

require('core-js/modules/es6.array.for-each');

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const transformArrayToArrayOfArraysRamdomly = function transformArrayToArrayOfArraysRamdomly(
  data,
  rows,
) {
  try {
    const rowsToBeCreated = rows || 5;

    if (data && data.length > 0) {
      const limit = Math.ceil(data.length / rowsToBeCreated);
      const matrix = [];
      let inner = 0;

      for (let i = 0; i < rowsToBeCreated; i += 1) {
        matrix.push([]);
      }

      data.forEach(function(current, index) {
        if (index < limit) {
          matrix[inner].push(current);

          if (index === limit - 1) {
            inner += 1;
          }
        } else {
          const newIndex = index % limit;
          matrix[inner].push(current);

          if (newIndex === limit - 1) {
            inner += 1;
          }
        }
      });
      return matrix;
    }

    return [];
  } catch (e) {
    throw e;
  }
};

exports.transformArrayToArrayOfArraysRamdomly = transformArrayToArrayOfArraysRamdomly;
const findInArrayOfArrays = 1;
exports.findInArrayOfArrays = findInArrayOfArrays;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    transformArrayToArrayOfArraysRamdomly,
    'transformArrayToArrayOfArraysRamdomly',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/arrays/index.js',
  );
  reactHotLoader.register(
    findInArrayOfArrays,
    'findInArrayOfArrays',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/arrays/index.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcnJheXMvaW5kZXguanMiXSwibmFtZXMiOlsidHJhbnNmb3JtQXJyYXlUb0FycmF5T2ZBcnJheXNSYW1kb21seSIsImRhdGEiLCJyb3dzIiwicm93c1RvQmVDcmVhdGVkIiwibGVuZ3RoIiwibGltaXQiLCJNYXRoIiwiY2VpbCIsIm1hdHJpeCIsImlubmVyIiwiaSIsInB1c2giLCJmb3JFYWNoIiwiY3VycmVudCIsImluZGV4IiwibmV3SW5kZXgiLCJlIiwiZmluZEluQXJyYXlPZkFycmF5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEscUNBQXFDLEdBQUcsU0FBeENBLHFDQUF3QyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDbkUsTUFBSTtBQUNGLFFBQU1DLGVBQWUsR0FBR0QsSUFBSSxJQUFJLENBQWhDOztBQUNBLFFBQUlELElBQUksSUFBSUEsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBMUIsRUFBNkI7QUFDM0IsVUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVU4sSUFBSSxDQUFDRyxNQUFMLEdBQWNELGVBQXhCLENBQWQ7QUFDQSxVQUFNSyxNQUFNLEdBQUcsRUFBZjtBQUNBLFVBQUlDLEtBQUssR0FBRyxDQUFaOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsZUFBcEIsRUFBcUNPLENBQUMsSUFBSSxDQUExQyxFQUE2QztBQUMzQ0YsUUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVksRUFBWjtBQUNEOztBQUNEVixNQUFBQSxJQUFJLENBQUNXLE9BQUwsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDL0IsWUFBSUEsS0FBSyxHQUFHVCxLQUFaLEVBQW1CO0FBQ2pCRyxVQUFBQSxNQUFNLENBQUNDLEtBQUQsQ0FBTixDQUFjRSxJQUFkLENBQW1CRSxPQUFuQjs7QUFDQSxjQUFJQyxLQUFLLEtBQUtULEtBQUssR0FBRyxDQUF0QixFQUF5QjtBQUN2QkksWUFBQUEsS0FBSyxJQUFJLENBQVQ7QUFDRDtBQUNGLFNBTEQsTUFLTztBQUNMLGNBQU1NLFFBQVEsR0FBR0QsS0FBSyxHQUFHVCxLQUF6QjtBQUNBRyxVQUFBQSxNQUFNLENBQUNDLEtBQUQsQ0FBTixDQUFjRSxJQUFkLENBQW1CRSxPQUFuQjs7QUFDQSxjQUFJRSxRQUFRLEtBQUtWLEtBQUssR0FBRyxDQUF6QixFQUE0QjtBQUMxQkksWUFBQUEsS0FBSyxJQUFJLENBQVQ7QUFDRDtBQUNGO0FBQ0YsT0FiRDtBQWNBLGFBQU9ELE1BQVA7QUFDRDs7QUFDRCxXQUFPLEVBQVA7QUFDRCxHQTFCRCxDQTBCRSxPQUFPUSxDQUFQLEVBQVU7QUFDVixVQUFNQSxDQUFOO0FBQ0Q7QUFDRixDQTlCTTs7O0FBZ0NBLElBQU1DLG1CQUFtQixHQUFHLENBQTVCOzs7Ozs7Ozs7OzswQkFoQ01qQixxQzswQkFnQ0FpQixtQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0cmFuc2Zvcm1BcnJheVRvQXJyYXlPZkFycmF5c1JhbWRvbWx5ID0gKGRhdGEsIHJvd3MpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByb3dzVG9CZUNyZWF0ZWQgPSByb3dzIHx8IDU7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsaW1pdCA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHJvd3NUb0JlQ3JlYXRlZCk7XG4gICAgICBjb25zdCBtYXRyaXggPSBbXTtcbiAgICAgIGxldCBpbm5lciA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3NUb0JlQ3JlYXRlZDsgaSArPSAxKSB7XG4gICAgICAgIG1hdHJpeC5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIGRhdGEuZm9yRWFjaCgoY3VycmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4IDwgbGltaXQpIHtcbiAgICAgICAgICBtYXRyaXhbaW5uZXJdLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSBsaW1pdCAtIDEpIHtcbiAgICAgICAgICAgIGlubmVyICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggJSBsaW1pdDtcbiAgICAgICAgICBtYXRyaXhbaW5uZXJdLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBsaW1pdCAtIDEpIHtcbiAgICAgICAgICAgIGlubmVyICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5BcnJheU9mQXJyYXlzID0gMTtcbiJdfQ==
