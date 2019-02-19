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

var _box = require("@healthifyme/styles/lib/box");

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
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100px;\n"]);

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

var ErrorTrace = _styledComponents.default.div(_templateObject4(), (0, _box.margin)('top', 'SMALL'), (0, _box.margin)('bottom', 'SMALL'));

exports.ErrorTrace = ErrorTrace;

var Pre = _styledComponents.default.pre(_templateObject5(), _box.marginRemove);

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