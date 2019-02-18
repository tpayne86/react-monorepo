"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpPost = exports.httpGet = void 0;

require("core-js/modules/es6.promise");

var _axios = _interopRequireDefault(require("axios"));

var _http = require("./http.authorization");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

/**
 * @param {String} url
 * @description generated a http get request for the specified url.
 * @returns {Promise}
 */
var httpGet = function httpGet(url) {
  return new Promise(function (resolve, reject) {
    (0, _axios.default)({
      url: (0, _http.getNewApiUrl)(url),
      method: 'GET',
      headers: (0, _http.getApiHeaders)()
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (err) {
      if (err.response) {
        reject({
          //eslint-disable-line
          data: err.response.data,
          status: err.response.status,
          statusText: err.response.statusText
        }); //eslint-disable-line
      } else {
        reject({
          // eslint-disable-line
          data: {
            reason: 'Bad Request'
          },
          status: 400,
          statusText: 'Bad Request'
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

var httpPost = function httpPost(url, data) {
  return new Promise(function (resolve, reject) {
    (0, _axios.default)({
      url: (0, _http.getNewApiUrl)(url),
      method: 'POST',
      headers: (0, _http.getApiHeaders)(),
      data: data
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (err) {
      if (err.response) {
        reject({
          //eslint-disable-line
          data: err.response.data,
          status: err.response.status,
          statusText: err.response.statusText
        }); //eslint-disable-line
      } else {
        reject({
          // eslint-disable-line
          data: {
            reason: 'Bad Request'
          },
          status: 400,
          statusText: 'Bad Request'
        });
      }
    });
  });
};

exports.httpPost = httpPost;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(httpGet, "httpGet", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.requestmaker.js");
  reactHotLoader.register(httpPost, "httpPost", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/http/lib/http.requestmaker.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odHRwL2xpYi9odHRwLnJlcXVlc3RtYWtlci5qcyJdLCJuYW1lcyI6WyJodHRwR2V0IiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInJlYXNvbiIsImh0dHBQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7QUFFQTs7Ozs7QUFNTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHO0FBQUEsU0FBSSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdELHdCQUFNO0FBQ0pILE1BQUFBLEdBQUcsRUFBRSx3QkFBYUEsR0FBYixDQUREO0FBRUpJLE1BQUFBLE1BQU0sRUFBRSxLQUZKO0FBR0pDLE1BQUFBLE9BQU8sRUFBRTtBQUhMLEtBQU4sRUFLR0MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNiTCxNQUFBQSxPQUFPLENBQUNLLEdBQUcsQ0FBQ0MsSUFBTCxDQUFQO0FBQ0QsS0FQSCxFQU9LQyxLQVBMLENBT1csVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCLFVBQUlBLEdBQUcsQ0FBQ0MsUUFBUixFQUFrQjtBQUNoQlIsUUFBQUEsTUFBTSxDQUFDO0FBQUU7QUFDUEssVUFBQUEsSUFBSSxFQUFFRSxHQUFHLENBQUNDLFFBQUosQ0FBYUgsSUFEZDtBQUVMSSxVQUFBQSxNQUFNLEVBQUVGLEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxNQUZoQjtBQUdMQyxVQUFBQSxVQUFVLEVBQUVILEdBQUcsQ0FBQ0MsUUFBSixDQUFhRTtBQUhwQixTQUFELENBQU4sQ0FEZ0IsQ0FLYjtBQUNKLE9BTkQsTUFNTztBQUNMVixRQUFBQSxNQUFNLENBQUM7QUFBRTtBQUNQSyxVQUFBQSxJQUFJLEVBQUU7QUFDSk0sWUFBQUEsTUFBTSxFQUFFO0FBREosV0FERDtBQUlMRixVQUFBQSxNQUFNLEVBQUUsR0FKSDtBQUtMQyxVQUFBQSxVQUFVLEVBQUU7QUFMUCxTQUFELENBQU47QUFPRDtBQUNGLEtBdkJIO0FBd0JELEdBekI2QixDQUFKO0FBQUEsQ0FBbkI7QUEyQlA7Ozs7Ozs7Ozs7QUFPTyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDZixHQUFELEVBQU1RLElBQU47QUFBQSxTQUFlLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEUsd0JBQU07QUFDSkgsTUFBQUEsR0FBRyxFQUFFLHdCQUFhQSxHQUFiLENBREQ7QUFFSkksTUFBQUEsTUFBTSxFQUFFLE1BRko7QUFHSkMsTUFBQUEsT0FBTyxFQUFFLDBCQUhMO0FBSUpHLE1BQUFBLElBQUksRUFBSkE7QUFKSSxLQUFOLEVBS0dGLElBTEgsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDZkwsTUFBQUEsT0FBTyxDQUFDSyxHQUFHLENBQUNDLElBQUwsQ0FBUDtBQUNELEtBUEQsRUFPR0MsS0FQSCxDQU9TLFVBQUNDLEdBQUQsRUFBUztBQUNoQixVQUFJQSxHQUFHLENBQUNDLFFBQVIsRUFBa0I7QUFDZFIsUUFBQUEsTUFBTSxDQUFDO0FBQUU7QUFDVEssVUFBQUEsSUFBSSxFQUFFRSxHQUFHLENBQUNDLFFBQUosQ0FBYUgsSUFEWjtBQUVQSSxVQUFBQSxNQUFNLEVBQUVGLEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxNQUZkO0FBR1BDLFVBQUFBLFVBQVUsRUFBRUgsR0FBRyxDQUFDQyxRQUFKLENBQWFFO0FBSGxCLFNBQUQsQ0FBTixDQURjLENBS1g7QUFDTixPQU5ELE1BTU87QUFDSFYsUUFBQUEsTUFBTSxDQUFDO0FBQUU7QUFDVEssVUFBQUEsSUFBSSxFQUFFO0FBQ0pNLFlBQUFBLE1BQU0sRUFBRTtBQURKLFdBREM7QUFJUEYsVUFBQUEsTUFBTSxFQUFFLEdBSkQ7QUFLUEMsVUFBQUEsVUFBVSxFQUFFO0FBTEwsU0FBRCxDQUFOO0FBT0g7QUFDRixLQXZCRDtBQXdCRCxHQXpCc0MsQ0FBZjtBQUFBLENBQWpCOzs7Ozs7Ozs7Ozs7MEJBbENNZCxPOzBCQWtDQWdCLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBnZXRBcGlIZWFkZXJzLCBnZXROZXdBcGlVcmwgfSBmcm9tICcuL2h0dHAuYXV0aG9yaXphdGlvbic7XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlZCBhIGh0dHAgZ2V0IHJlcXVlc3QgZm9yIHRoZSBzcGVjaWZpZWQgdXJsLlxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cblxuZXhwb3J0IGNvbnN0IGh0dHBHZXQgPSB1cmwgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBheGlvcyh7XG4gICAgdXJsOiBnZXROZXdBcGlVcmwodXJsKSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IGdldEFwaUhlYWRlcnMoKSxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlamVjdCh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHN0YXR1czogZXJyLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBlcnIucmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgfSk7Ly9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcmVhc29uOiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgc3RhdHVzVGV4dDogJ0JhZCBSZXF1ZXN0JyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlZCBhIGh0dHAgZ2V0IHJlcXVlc3QgZm9yIHRoZSBzcGVjaWZpZWQgdXJsIHdpdGggcG9zdCBkYXRhLlxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cblxuZXhwb3J0IGNvbnN0IGh0dHBQb3N0ID0gKHVybCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBheGlvcyh7XG4gICAgdXJsOiBnZXROZXdBcGlVcmwodXJsKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBnZXRBcGlIZWFkZXJzKCksXG4gICAgZGF0YSxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlamVjdCh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgc3RhdHVzOiBlcnIucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiBlcnIucmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgfSk7Ly9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcmVhc29uOiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgc3RhdHVzVGV4dDogJ0JhZCBSZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdfQ==