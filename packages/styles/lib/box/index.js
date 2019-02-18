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

var variables = _interopRequireWildcard(require("../variables/"));

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
  var data = (0, _taggedTemplateLiteral2.default)(["\n      padding: ", "\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0\n"]);

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
  var data = (0, _taggedTemplateLiteral2.default)(["\n      margin: ", "\n    "]);

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
  } else {
    return (0, _styledComponents.css)(_templateObject4(), dir, variables[size]);
  }
};

exports.margin = margin;
var paddingRemove = (0, _styledComponents.css)(_templateObject5());
exports.paddingRemove = paddingRemove;

var padding = function padding(dir) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'M';

  if (!dir) {
    return (0, _styledComponents.css)(_templateObject6(), variables[size]);
  } else {
    return (0, _styledComponents.css)(_templateObject7(), dir, variables[size]);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3gvaW5kZXguanMiXSwibmFtZXMiOlsibWFyZ2luQ2VudGVyIiwiY3NzIiwibWFyZ2luUmVtb3ZlIiwibWFyZ2luIiwiZGlyIiwic2l6ZSIsInZhcmlhYmxlcyIsInBhZGRpbmdSZW1vdmUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFZLE9BQUdDLHFCQUFILG9CQUFsQjs7QUFHQSxJQUFNQyxZQUFZLE9BQUdELHFCQUFILHFCQUFsQjs7O0FBSUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFvQjtBQUFBLE1BQWZDLElBQWUsdUVBQVIsR0FBUTs7QUFDeEMsTUFBRyxDQUFDRCxHQUFKLEVBQVE7QUFDTixlQUFPSCxxQkFBUCxzQkFDWUssU0FBUyxDQUFDRCxJQUFELENBRHJCO0FBR0QsR0FKRCxNQUlPO0FBQ0wsZUFBT0oscUJBQVAsc0JBQ1VHLEdBRFYsRUFDa0JFLFNBQVMsQ0FBQ0QsSUFBRCxDQUQzQjtBQUdEO0FBQ0YsQ0FWTTs7O0FBWUEsSUFBTUUsYUFBYSxPQUFHTixxQkFBSCxxQkFBbkI7OztBQUlBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNKLEdBQUQsRUFBb0I7QUFBQSxNQUFmQyxJQUFlLHVFQUFSLEdBQVE7O0FBQ3pDLE1BQUcsQ0FBQ0QsR0FBSixFQUFRO0FBQ04sZUFBT0gscUJBQVAsc0JBQ2FLLFNBQVMsQ0FBQ0QsSUFBRCxDQUR0QjtBQUdELEdBSkQsTUFJTztBQUNMLGVBQU9KLHFCQUFQLHNCQUNXRyxHQURYLEVBQ21CRSxTQUFTLENBQUNELElBQUQsQ0FENUI7QUFHRDtBQUNGLENBVk07Ozs7Ozs7Ozs7OzswQkF2Qk1MLFk7MEJBR0FFLFk7MEJBSUFDLE07MEJBWUFJLGE7MEJBSUFDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nzc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgdmFyaWFibGVzIGZyb20gJy4uL3ZhcmlhYmxlcy8nXG5cbmV4cG9ydCBjb25zdCBtYXJnaW5DZW50ZXIgPSBjc3MgYFxuICBtYXJnaW46IDAgYXV0bztcbmA7XG5leHBvcnQgY29uc3QgbWFyZ2luUmVtb3ZlID0gY3NzIGBcbiAgbWFyZ2luOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IG1hcmdpbiA9IChkaXIsc2l6ZSA9ICdNJykgPT4ge1xuICBpZighZGlyKXtcbiAgICByZXR1cm4gY3NzIGBcbiAgICAgIG1hcmdpbjogJHt2YXJpYWJsZXNbc2l6ZV19XG4gICAgYFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjc3MgYFxuICAgICBtYXJnaW4tJHtkaXJ9OiAke3ZhcmlhYmxlc1tzaXplXX1cbiAgICBgXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBhZGRpbmdSZW1vdmUgPSBjc3MgYFxuICBwYWRkaW5nOiAwXG5gXG5cbmV4cG9ydCBjb25zdCBwYWRkaW5nID0gKGRpcixzaXplID0gJ00nKSA9PiB7XG4gIGlmKCFkaXIpe1xuICAgIHJldHVybiBjc3MgYFxuICAgICAgcGFkZGluZzogJHt2YXJpYWJsZXNbc2l6ZV19XG4gICAgYFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjc3MgYFxuICAgICBwYWRkaW5nLSR7ZGlyfTogJHt2YXJpYWJsZXNbc2l6ZV19XG4gICAgYFxuICB9XG59XG4iXX0=