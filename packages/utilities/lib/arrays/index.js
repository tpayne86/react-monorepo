"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArrayOfArrays = exports.transformArrayToArrayOfArraysRamdomly = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var transformArrayToArrayOfArraysRamdomly = function transformArrayToArrayOfArraysRamdomly(data, rows) {
  try {
    var rowsToBeCreated = rows || 5;

    if (data && data.length > 0) {
      var limit = Math.ceil(data.length / rowsToBeCreated);
      var matrix = [];
      var inner = 0;

      for (var i = 0; i < rowsToBeCreated; i += 1) {
        matrix.push([]);
      }

      data.forEach(function (current, index) {
        if (index < limit) {
          matrix[inner].push(current);

          if (index === limit - 1) {
            inner += 1;
          }
        } else {
          var newIndex = index % limit;
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
var findInArrayOfArrays = 1;
exports.findInArrayOfArrays = findInArrayOfArrays;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(transformArrayToArrayOfArraysRamdomly, "transformArrayToArrayOfArraysRamdomly", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/arrays/index.js");
  reactHotLoader.register(findInArrayOfArrays, "findInArrayOfArrays", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/utilities/src/arrays/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();