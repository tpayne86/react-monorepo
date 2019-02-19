const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.httpPost = exports.httpGet = void 0;

require('core-js/modules/es6.promise');

const _axios = _interopRequireDefault(require('axios'));

const _http = require('./http.authorization');

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

/**
 * @param {String} url
 * @description generated a http get request for the specified url.
 * @returns {Promise}
 */
const httpGet = function httpGet(url) {
  return new Promise(function(resolve, reject) {
    (0, _axios.default)({
      url: (0, _http.getNewApiUrl)(url),
      method: 'GET',
      headers: (0, _http.getApiHeaders)(),
    })
      .then(function(res) {
        resolve(res.data);
      })
      .catch(function(err) {
        if (err.response) {
          reject({
          //eslint-disable-line
            data: err.response.data,
            status: err.response.status,
            statusText: err.response.statusText,
        }); //eslint-disable-line
        } else {
          reject({
          // eslint-disable-line
            data: {
              reason: 'Bad Request',
            },
            status: 400,
            statusText: 'Bad Request',
          });
        }
      });
  });
};
/**
 * @param {String} url
 * @param {Object} data
 * @description generated a http get request for the specified url with post data.
 * @returns {Promise}
 */

exports.httpGet = httpGet;

const httpPost = function httpPost(url, data) {
  return new Promise(function(resolve, reject) {
    (0, _axios.default)({
      url: (0, _http.getNewApiUrl)(url),
      method: 'POST',
      headers: (0, _http.getApiHeaders)(),
      data,
    })
      .then(function(res) {
        resolve(res.data);
      })
      .catch(function(err) {
        if (err.response) {
          reject({
          //eslint-disable-line
            data: err.response.data,
            status: err.response.status,
            statusText: err.response.statusText,
        }); //eslint-disable-line
        } else {
          reject({
          // eslint-disable-line
            data: {
              reason: 'Bad Request',
            },
            status: 400,
            statusText: 'Bad Request',
          });
        }
      });
  });
};

exports.httpPost = httpPost;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    httpGet,
    'httpGet',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.requestmaker.js',
  );
  reactHotLoader.register(
    httpPost,
    'httpPost',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.requestmaker.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odHRwL2xpYi9odHRwLnJlcXVlc3RtYWtlci5qcyJdLCJuYW1lcyI6WyJodHRwR2V0IiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInJlYXNvbiIsImh0dHBQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7QUFFQTs7Ozs7QUFNTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FDckIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQix3QkFBTTtBQUNKSCxNQUFBQSxHQUFHLEVBQUUsd0JBQWFBLEdBQWIsQ0FERDtBQUVKSSxNQUFBQSxNQUFNLEVBQUUsS0FGSjtBQUdKQyxNQUFBQSxPQUFPLEVBQUU7QUFITCxLQUFOLEVBS0dDLElBTEgsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsTUFBQUEsT0FBTyxDQUFDSyxHQUFHLENBQUNDLElBQUwsQ0FBUDtBQUNELEtBUEgsRUFRR0MsS0FSSCxDQVFTLFVBQUNDLEdBQUQsRUFBUztBQUNkLFVBQUlBLEdBQUcsQ0FBQ0MsUUFBUixFQUFrQjtBQUNsQlIsUUFBQUEsTUFBTSxDQUFDO0FBQUU7QUFDTEssVUFBQUEsSUFBSSxFQUFFRSxHQUFHLENBQUNDLFFBQUosQ0FBYUgsSUFEaEI7QUFFSEksVUFBQUEsTUFBTSxFQUFFRixHQUFHLENBQUNDLFFBQUosQ0FBYUMsTUFGbEI7QUFHSEMsVUFBQUEsVUFBVSxFQUFFSCxHQUFHLENBQUNDLFFBQUosQ0FBYUU7QUFIdEIsU0FBRCxDQUFOLENBRGtCLENBS2Y7QUFDRixPQU5ELE1BTU87QUFDUFYsUUFBQUEsTUFBTSxDQUFDO0FBQUU7QUFDTEssVUFBQUEsSUFBSSxFQUFFO0FBQ0pNLFlBQUFBLE1BQU0sRUFBRTtBQURKLFdBREg7QUFJSEYsVUFBQUEsTUFBTSxFQUFFLEdBSkw7QUFLSEMsVUFBQUEsVUFBVSxFQUFFO0FBTFQsU0FBRCxDQUFOO0FBT0M7QUFDRixLQXhCSDtBQXlCRCxHQTFCRCxDQURxQjtBQUFBLENBQWhCO0FBNkJQOzs7Ozs7Ozs7O0FBT08sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2YsR0FBRCxFQUFNUSxJQUFOO0FBQUEsU0FDdEIsSUFBSVAsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQix3QkFBTTtBQUNKSCxNQUFBQSxHQUFHLEVBQUUsd0JBQWFBLEdBQWIsQ0FERDtBQUVKSSxNQUFBQSxNQUFNLEVBQUUsTUFGSjtBQUdKQyxNQUFBQSxPQUFPLEVBQUUsMEJBSEw7QUFJSkcsTUFBQUEsSUFBSSxFQUFKQTtBQUpJLEtBQU4sRUFNR0YsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiTCxNQUFBQSxPQUFPLENBQUNLLEdBQUcsQ0FBQ0MsSUFBTCxDQUFQO0FBQ0QsS0FSSCxFQVNHQyxLQVRILENBU1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsVUFBSUEsR0FBRyxDQUFDQyxRQUFSLEVBQWtCO0FBQ2xCUixRQUFBQSxNQUFNLENBQUM7QUFBRTtBQUNMSyxVQUFBQSxJQUFJLEVBQUVFLEdBQUcsQ0FBQ0MsUUFBSixDQUFhSCxJQURoQjtBQUVISSxVQUFBQSxNQUFNLEVBQUVGLEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxNQUZsQjtBQUdIQyxVQUFBQSxVQUFVLEVBQUVILEdBQUcsQ0FBQ0MsUUFBSixDQUFhRTtBQUh0QixTQUFELENBQU4sQ0FEa0IsQ0FLZjtBQUNGLE9BTkQsTUFNTztBQUNQVixRQUFBQSxNQUFNLENBQUM7QUFBRTtBQUNMSyxVQUFBQSxJQUFJLEVBQUU7QUFDSk0sWUFBQUEsTUFBTSxFQUFFO0FBREosV0FESDtBQUlIRixVQUFBQSxNQUFNLEVBQUUsR0FKTDtBQUtIQyxVQUFBQSxVQUFVLEVBQUU7QUFMVCxTQUFELENBQU47QUFPQztBQUNGLEtBekJIO0FBMEJELEdBM0JELENBRHNCO0FBQUEsQ0FBakI7Ozs7Ozs7Ozs7OzswQkFwQ01kLE87MEJBb0NBZ0IsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IGdldEFwaUhlYWRlcnMsIGdldE5ld0FwaVVybCB9IGZyb20gJy4vaHR0cC5hdXRob3JpemF0aW9uJztcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGVkIGEgaHR0cCBnZXQgcmVxdWVzdCBmb3IgdGhlIHNwZWNpZmllZCB1cmwuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuXG5leHBvcnQgY29uc3QgaHR0cEdldCA9ICh1cmwpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvcyh7XG4gICAgICB1cmw6IGdldE5ld0FwaVVybCh1cmwpLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IGdldEFwaUhlYWRlcnMoKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlamVjdCh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICBzdGF0dXM6IGVyci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBlcnIucmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgfSk7Ly9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcmVhc29uOiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogJ0JhZCBSZXF1ZXN0JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pO1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGVkIGEgaHR0cCBnZXQgcmVxdWVzdCBmb3IgdGhlIHNwZWNpZmllZCB1cmwgd2l0aCBwb3N0IGRhdGEuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuXG5leHBvcnQgY29uc3QgaHR0cFBvc3QgPSAodXJsLCBkYXRhKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBnZXROZXdBcGlVcmwodXJsKSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogZ2V0QXBpSGVhZGVycygpLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlamVjdCh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICBzdGF0dXM6IGVyci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBlcnIucmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgfSk7Ly9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcmVhc29uOiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogJ0JhZCBSZXF1ZXN0JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pO1xuIl19
