"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padding = exports.paddingRemove = exports.margin = exports.marginRemove = exports.marginCenter = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var variables = _interopRequireWildcard(require("../variables"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n     padding-", ": ", "\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      padding: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n     margin-", ": ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      margin: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var marginCenter = (0, _styledComponents.css)(_templateObject());
exports.marginCenter = marginCenter;
var marginRemove = (0, _styledComponents.css)(_templateObject2());
exports.marginRemove = marginRemove;

var margin = function margin(dir) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'M';

  if (!dir) {
    return (0, _styledComponents.css)(_templateObject3(), variables[size]);
  }

  return (0, _styledComponents.css)(_templateObject4(), dir, variables[size]);
};

exports.margin = margin;
var paddingRemove = (0, _styledComponents.css)(_templateObject5());
exports.paddingRemove = paddingRemove;

var padding = function padding(dir) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'M';

  if (!dir) {
    return (0, _styledComponents.css)(_templateObject6(), variables[size]);
  }

  return (0, _styledComponents.css)(_templateObject7(), dir, variables[size]);
};

exports.padding = padding;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(marginCenter, "marginCenter", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/box/index.js");
  reactHotLoader.register(marginRemove, "marginRemove", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/box/index.js");
  reactHotLoader.register(margin, "margin", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/box/index.js");
  reactHotLoader.register(paddingRemove, "paddingRemove", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/box/index.js");
  reactHotLoader.register(padding, "padding", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/box/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3gvaW5kZXguanMiXSwibmFtZXMiOlsibWFyZ2luQ2VudGVyIiwiY3NzIiwibWFyZ2luUmVtb3ZlIiwibWFyZ2luIiwiZGlyIiwic2l6ZSIsInZhcmlhYmxlcyIsInBhZGRpbmdSZW1vdmUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFZLE9BQUdDLHFCQUFILG9CQUFsQjs7QUFHQSxJQUFNQyxZQUFZLE9BQUdELHFCQUFILHFCQUFsQjs7O0FBSUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFxQjtBQUFBLE1BQWZDLElBQWUsdUVBQVIsR0FBUTs7QUFDekMsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUixlQUFPSCxxQkFBUCxzQkFDWUssU0FBUyxDQUFDRCxJQUFELENBRHJCO0FBR0Q7O0FBQ0QsYUFBT0oscUJBQVAsc0JBQ1lHLEdBRFosRUFDb0JFLFNBQVMsQ0FBQ0QsSUFBRCxDQUQ3QjtBQUdELENBVE07OztBQVdBLElBQU1FLGFBQWEsT0FBR04scUJBQUgscUJBQW5COzs7QUFJQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDSixHQUFELEVBQXFCO0FBQUEsTUFBZkMsSUFBZSx1RUFBUixHQUFROztBQUMxQyxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSLGVBQU9ILHFCQUFQLHNCQUNhSyxTQUFTLENBQUNELElBQUQsQ0FEdEI7QUFHRDs7QUFDRCxhQUFPSixxQkFBUCxzQkFDYUcsR0FEYixFQUNxQkUsU0FBUyxDQUFDRCxJQUFELENBRDlCO0FBR0QsQ0FUTTs7Ozs7Ozs7Ozs7OzBCQXRCTUwsWTswQkFHQUUsWTswQkFJQUMsTTswQkFXQUksYTswQkFJQUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tICcuLi92YXJpYWJsZXMnO1xuXG5leHBvcnQgY29uc3QgbWFyZ2luQ2VudGVyID0gY3NzYFxuICBtYXJnaW46IDAgYXV0bztcbmA7XG5leHBvcnQgY29uc3QgbWFyZ2luUmVtb3ZlID0gY3NzYFxuICBtYXJnaW46IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgbWFyZ2luID0gKGRpciwgc2l6ZSA9ICdNJykgPT4ge1xuICBpZiAoIWRpcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBtYXJnaW46ICR7dmFyaWFibGVzW3NpemVdfTtcbiAgICBgO1xuICB9XG4gIHJldHVybiBjc3NgXG4gICAgIG1hcmdpbi0ke2Rpcn06ICR7dmFyaWFibGVzW3NpemVdfVxuICAgIGA7XG59O1xuXG5leHBvcnQgY29uc3QgcGFkZGluZ1JlbW92ZSA9IGNzc2BcbiAgcGFkZGluZzogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBwYWRkaW5nID0gKGRpciwgc2l6ZSA9ICdNJykgPT4ge1xuICBpZiAoIWRpcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3ZhcmlhYmxlc1tzaXplXX07XG4gICAgYDtcbiAgfVxuICByZXR1cm4gY3NzYFxuICAgICBwYWRkaW5nLSR7ZGlyfTogJHt2YXJpYWJsZXNbc2l6ZV19XG4gICAgYDtcbn07XG4iXX0=