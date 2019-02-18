"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = exports.Pre = exports.ErrorTrace = exports.StackTrace = exports.Image = exports.Wrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _flex = require("@healthifyme/styles/lib/flex");

var _margin = require("@healthifyme/styles/lib/margin");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: bold;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ffefef;\n  overflow: auto;\n  padding: 20px;\n  color: #8d2424;\n  font-weight: 500;\n  font-size: 14px;\n  opacity: 0.98;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["width: 100px;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.div(_templateObject(), _flex.flex, _flex.flexCenter, _flex.justifyAround);

exports.Wrapper = Wrapper;

var Image = _styledComponents.default.img(_templateObject2());

exports.Image = Image;

var StackTrace = _styledComponents.default.div(_templateObject3());

exports.StackTrace = StackTrace;

var ErrorTrace = _styledComponents.default.div(_templateObject4(), (0, _margin.margin)('top', 'SMALL'), (0, _margin.margin)('bottom', 'SMALL'));

exports.ErrorTrace = ErrorTrace;

var Pre = _styledComponents.default.pre(_templateObject5(), _margin.marginRemove);

exports.Pre = Pre;

var Paragraph = _styledComponents.default.p(_templateObject6());

exports.Paragraph = Paragraph;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Wrapper, "Wrapper", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/style.js");
  reactHotLoader.register(Image, "Image", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/style.js");
  reactHotLoader.register(StackTrace, "StackTrace", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/style.js");
  reactHotLoader.register(ErrorTrace, "ErrorTrace", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/style.js");
  reactHotLoader.register(Pre, "Pre", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/style.js");
  reactHotLoader.register(Paragraph, "Paragraph", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/compounds/ErrorHandler/style.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb3VuZHMvRXJyb3JIYW5kbGVyL3N0eWxlLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJmbGV4IiwiZmxleENlbnRlciIsImp1c3RpZnlBcm91bmQiLCJJbWFnZSIsImltZyIsIlN0YWNrVHJhY2UiLCJFcnJvclRyYWNlIiwiUHJlIiwicHJlIiwibWFyZ2luUmVtb3ZlIiwiUGFyYWdyYXBoIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsT0FBTyxHQUFHQywwQkFBT0MsR0FBVixvQkFDaEJDLFVBRGdCLEVBRWhCQyxnQkFGZ0IsRUFHaEJDLG1CQUhnQixDQUFiOzs7O0FBTUEsSUFBTUMsS0FBSyxHQUFHTCwwQkFBT00sR0FBVixvQkFBWDs7OztBQUVBLElBQU1DLFVBQVUsR0FBR1AsMEJBQU9DLEdBQVYsb0JBQWhCOzs7O0FBZUEsSUFBTU8sVUFBVSxHQUFHUiwwQkFBT0MsR0FBVixxQkFDbkIsb0JBQU8sS0FBUCxFQUFjLE9BQWQsQ0FEbUIsRUFFbkIsb0JBQU8sUUFBUCxFQUFpQixPQUFqQixDQUZtQixDQUFoQjs7OztBQUtBLElBQU1RLEdBQUcsR0FBR1QsMEJBQU9VLEdBQVYscUJBQ1pDLG9CQURZLENBQVQ7Ozs7QUFJQSxJQUFNQyxTQUFTLEdBQUdaLDBCQUFPYSxDQUFWLG9CQUFmOzs7Ozs7Ozs7Ozs7MEJBaENNZCxPOzBCQU1BTSxLOzBCQUVBRSxVOzBCQWVBQyxVOzBCQUtBQyxHOzBCQUlBRyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBmbGV4LCBmbGV4Q2VudGVyLCBqdXN0aWZ5QXJvdW5kIH0gZnJvbSAnQGhlYWx0aGlmeW1lL3N0eWxlcy9saWIvZmxleCc7XG5pbXBvcnQgeyBtYXJnaW4sIG1hcmdpblJlbW92ZSB9IGZyb20gJ0BoZWFsdGhpZnltZS9zdHlsZXMvbGliL21hcmdpbic7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHtmbGV4fTtcbiAgJHtmbGV4Q2VudGVyfTtcbiAgJHtqdXN0aWZ5QXJvdW5kfVxuYDtcblxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2B3aWR0aDogMTAwcHg7YDtcblxuZXhwb3J0IGNvbnN0IFN0YWNrVHJhY2UgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZWZlZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjOGQyNDI0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG9wYWNpdHk6IDAuOTg7XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3JUcmFjZSA9IHN0eWxlZC5kaXZgXG4gICR7bWFyZ2luKCd0b3AnLCAnU01BTEwnKX1cbiAgJHttYXJnaW4oJ2JvdHRvbScsICdTTUFMTCcpfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByZSA9IHN0eWxlZC5wcmVgXG4gICR7bWFyZ2luUmVtb3ZlfVxuYDtcblxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG4iXX0=