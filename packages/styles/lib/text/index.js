const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.text = exports.font = void 0;

const _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

const _styledComponents = require('styled-components');

const variables = _interopRequireWildcard(require('../variables'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)([
    '\n   text-align: ',
    '\n  ',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)([
    '\n    font-size: ',
    '\n  ',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const font = function font() {
  const size =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'M';
  return (0, _styledComponents.css)(_templateObject(), variables[size]);
};

exports.font = font;

const text = function text(type) {
  return (0, _styledComponents.css)(_templateObject2(), type);
};

exports.text = text;
const _default = font;
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
    font,
    'font',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/text/index.js',
  );
  reactHotLoader.register(
    text,
    'text',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/text/index.js',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/styles/src/text/index.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbImZvbnQiLCJzaXplIiwiY3NzIiwidmFyaWFibGVzIiwidGV4dCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFnQjtBQUFBLE1BQWZDLElBQWUsdUVBQVIsR0FBUTtBQUNsQyxhQUFPQyxxQkFBUCxxQkFDZUMsU0FBUyxDQUFDRixJQUFELENBRHhCO0FBR0QsQ0FKTTs7OztBQU1BLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBUztBQUMzQixhQUFPSCxxQkFBUCxzQkFDZUcsSUFEZjtBQUdELENBSk07OztlQUtRTCxJOzs7Ozs7Ozs7Ozs7MEJBWEZBLEk7MEJBTUFJLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nzc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgdmFyaWFibGVzIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5cbmV4cG9ydCBjb25zdCBmb250ID0gKHNpemUgPSAnTScpID0+IHtcbiAgcmV0dXJuIGNzcyBgXG4gICAgZm9udC1zaXplOiAke3ZhcmlhYmxlc1tzaXplXX1cbiAgYFxufVxuXG5leHBvcnQgY29uc3QgdGV4dCA9ICh0eXBlKSA9PntcbiAgcmV0dXJuIGNzcyBgXG4gICB0ZXh0LWFsaWduOiAke3R5cGV9XG4gIGBcbn1cbmV4cG9ydCBkZWZhdWx0IGZvbnRcbiJdfQ==
