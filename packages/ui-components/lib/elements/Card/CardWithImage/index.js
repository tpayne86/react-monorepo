"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/card/style");

var _card = _interopRequireDefault(require("antd/lib/card"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var Meta = _card.default.Meta;

var CardWithImage = function CardWithImage(_ref) {
  var imgUrl = _ref.imgUrl,
      title = _ref.title,
      description = _ref.description,
      imgAlt = _ref.imgAlt,
      loading = _ref.loading,
      onClick = _ref.onClick,
      identifier = _ref.identifier;
  return _react.default.createElement(_card.default, {
    hoverable: true,
    cover: _react.default.createElement("img", {
      alt: imgAlt,
      src: imgUrl,
      "data-identifier": identifier
    }),
    loading: loading,
    onClick: onClick
  }, _react.default.createElement(Meta, {
    title: title,
    description: description
  }));
};

CardWithImage.propTypes = {
  imgUrl: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  imgAlt: _propTypes.default.string,
  loading: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  identifier: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
CardWithImage.defaultProps = {
  imgAlt: 'image',
  description: '',
  loading: false,
  onClick: function onClick() {}
};
var _default = CardWithImage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Meta, "Meta", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Card/CardWithImage/index.jsx");
  reactHotLoader.register(CardWithImage, "CardWithImage", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Card/CardWithImage/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/Card/CardWithImage/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9DYXJkL0NhcmRXaXRoSW1hZ2UvaW5kZXguanN4Il0sIm5hbWVzIjpbIk1ldGEiLCJDYXJkV2l0aEltYWdlIiwiaW1nVXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ0FsdCIsImxvYWRpbmciLCJvbkNsaWNrIiwiaWRlbnRpZmllciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7SUFHUUEsSSxpQkFBQUEsSTs7QUFFUixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFDcEJDLE1BRG9CLFFBQ3BCQSxNQURvQjtBQUFBLE1BRXBCQyxLQUZvQixRQUVwQkEsS0FGb0I7QUFBQSxNQUdwQkMsV0FIb0IsUUFHcEJBLFdBSG9CO0FBQUEsTUFJcEJDLE1BSm9CLFFBSXBCQSxNQUpvQjtBQUFBLE1BS3BCQyxPQUxvQixRQUtwQkEsT0FMb0I7QUFBQSxNQU1wQkMsT0FOb0IsUUFNcEJBLE9BTm9CO0FBQUEsTUFPcEJDLFVBUG9CLFFBT3BCQSxVQVBvQjtBQUFBLFNBU3BCO0FBQ0UsSUFBQSxTQUFTLE1BRFg7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUFLLE1BQUEsR0FBRyxFQUFFSCxNQUFWO0FBQWtCLE1BQUEsR0FBRyxFQUFFSCxNQUF2QjtBQUErQix5QkFBaUJNO0FBQWhELE1BRlQ7QUFHRSxJQUFBLE9BQU8sRUFBRUYsT0FIWDtBQUlFLElBQUEsT0FBTyxFQUFFQztBQUpYLEtBTUUsNkJBQUMsSUFBRDtBQUFNLElBQUEsS0FBSyxFQUFFSixLQUFiO0FBQW9CLElBQUEsV0FBVyxFQUFFQztBQUFqQyxJQU5GLENBVG9CO0FBQUEsQ0FBdEI7O0FBbUJBSCxhQUFhLENBQUNRLFNBQWQsR0FBMEI7QUFDeEJQLEVBQUFBLE1BQU0sRUFBRVEsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREQ7QUFFeEJULEVBQUFBLEtBQUssRUFBRU8sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkE7QUFHeEJSLEVBQUFBLFdBQVcsRUFBRU0sbUJBQVVDLE1BSEM7QUFJeEJOLEVBQUFBLE1BQU0sRUFBRUssbUJBQVVDLE1BSk07QUFLeEJMLEVBQUFBLE9BQU8sRUFBRUksbUJBQVVHLElBTEs7QUFNeEJOLEVBQUFBLE9BQU8sRUFBRUcsbUJBQVVJLElBTks7QUFPeEJOLEVBQUFBLFVBQVUsRUFBRUUsbUJBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVTSxNQUE3QixDQUFwQixFQUNUSjtBQVJxQixDQUExQjtBQVVBWCxhQUFhLENBQUNnQixZQUFkLEdBQTZCO0FBQzNCWixFQUFBQSxNQUFNLEVBQUUsT0FEbUI7QUFFM0JELEVBQUFBLFdBQVcsRUFBRSxFQUZjO0FBRzNCRSxFQUFBQSxPQUFPLEVBQUUsS0FIa0I7QUFJM0JDLEVBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFO0FBSlUsQ0FBN0I7ZUFPZU4sYTs7Ozs7Ozs7Ozs7OzBCQXRDUEQsSTswQkFFRkMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XG5cbmNvbnN0IENhcmRXaXRoSW1hZ2UgPSAoe1xuICBpbWdVcmwsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaW1nQWx0LFxuICBsb2FkaW5nLFxuICBvbkNsaWNrLFxuICBpZGVudGlmaWVyLFxufSkgPT4gKFxuICA8Q2FyZFxuICAgIGhvdmVyYWJsZVxuICAgIGNvdmVyPXs8aW1nIGFsdD17aW1nQWx0fSBzcmM9e2ltZ1VybH0gZGF0YS1pZGVudGlmaWVyPXtpZGVudGlmaWVyfSAvPn1cbiAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gID5cbiAgICA8TWV0YSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgPC9DYXJkPlxuKTtcblxuQ2FyZFdpdGhJbWFnZS5wcm9wVHlwZXMgPSB7XG4gIGltZ1VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1nQWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkZW50aWZpZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgIC5pc1JlcXVpcmVkLFxufTtcbkNhcmRXaXRoSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBpbWdBbHQ6ICdpbWFnZScsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFdpdGhJbWFnZTtcbiJdfQ==