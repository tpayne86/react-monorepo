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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9DYXJkL0NhcmRXaXRoSW1hZ2UvaW5kZXguanN4Il0sIm5hbWVzIjpbIk1ldGEiLCJDYXJkV2l0aEltYWdlIiwiaW1nVXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ0FsdCIsImxvYWRpbmciLCJvbkNsaWNrIiwiaWRlbnRpZmllciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7SUFHUUEsSSxpQkFBQUEsSTs7QUFFUixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFDcEJDLE1BRG9CLFFBQ3BCQSxNQURvQjtBQUFBLE1BQ1pDLEtBRFksUUFDWkEsS0FEWTtBQUFBLE1BQ0xDLFdBREssUUFDTEEsV0FESztBQUFBLE1BQ1FDLE1BRFIsUUFDUUEsTUFEUjtBQUFBLE1BQ2dCQyxPQURoQixRQUNnQkEsT0FEaEI7QUFBQSxNQUN5QkMsT0FEekIsUUFDeUJBLE9BRHpCO0FBQUEsTUFDa0NDLFVBRGxDLFFBQ2tDQSxVQURsQztBQUFBLFNBR3BCO0FBQ0UsSUFBQSxTQUFTLE1BRFg7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUFLLE1BQUEsR0FBRyxFQUFFSCxNQUFWO0FBQWtCLE1BQUEsR0FBRyxFQUFFSCxNQUF2QjtBQUErQix5QkFBaUJNO0FBQWhELE1BRlQ7QUFHRSxJQUFBLE9BQU8sRUFBRUYsT0FIWDtBQUlFLElBQUEsT0FBTyxFQUFFQztBQUpYLEtBTUUsNkJBQUMsSUFBRDtBQUNFLElBQUEsS0FBSyxFQUFFSixLQURUO0FBRUUsSUFBQSxXQUFXLEVBQUVDO0FBRmYsSUFORixDQUhvQjtBQUFBLENBQXRCOztBQWdCQUgsYUFBYSxDQUFDUSxTQUFkLEdBQTBCO0FBQ3hCUCxFQUFBQSxNQUFNLEVBQUVRLG1CQUFVQyxNQUFWLENBQWlCQyxVQUREO0FBRXhCVCxFQUFBQSxLQUFLLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZBO0FBR3hCUixFQUFBQSxXQUFXLEVBQUVNLG1CQUFVQyxNQUhDO0FBSXhCTixFQUFBQSxNQUFNLEVBQUVLLG1CQUFVQyxNQUpNO0FBS3hCTCxFQUFBQSxPQUFPLEVBQUVJLG1CQUFVRyxJQUxLO0FBTXhCTixFQUFBQSxPQUFPLEVBQUVHLG1CQUFVSSxJQU5LO0FBT3hCTixFQUFBQSxVQUFVLEVBQUVFLG1CQUFVSyxTQUFWLENBQW9CLENBQUNMLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVU0sTUFBN0IsQ0FBcEIsRUFBMERKO0FBUDlDLENBQTFCO0FBU0FYLGFBQWEsQ0FBQ2dCLFlBQWQsR0FBNkI7QUFDM0JaLEVBQUFBLE1BQU0sRUFBRSxPQURtQjtBQUUzQkQsRUFBQUEsV0FBVyxFQUFFLEVBRmM7QUFHM0JFLEVBQUFBLE9BQU8sRUFBRSxLQUhrQjtBQUkzQkMsRUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUU7QUFKVSxDQUE3QjtlQU9lTixhOzs7Ozs7Ozs7Ozs7MEJBbENQRCxJOzBCQUVGQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY29uc3QgQ2FyZFdpdGhJbWFnZSA9ICh7XG4gIGltZ1VybCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWdBbHQsIGxvYWRpbmcsIG9uQ2xpY2ssIGlkZW50aWZpZXIsXG59KSA9PiAoXG4gIDxDYXJkXG4gICAgaG92ZXJhYmxlXG4gICAgY292ZXI9ezxpbWcgYWx0PXtpbWdBbHR9IHNyYz17aW1nVXJsfSBkYXRhLWlkZW50aWZpZXI9e2lkZW50aWZpZXJ9IC8+fVxuICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgPlxuICAgIDxNZXRhXG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgLz5cbiAgPC9DYXJkPlxuKTtcblxuQ2FyZFdpdGhJbWFnZS5wcm9wVHlwZXMgPSB7XG4gIGltZ1VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1nQWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkZW50aWZpZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxufTtcbkNhcmRXaXRoSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBpbWdBbHQ6ICdpbWFnZScsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFdpdGhJbWFnZTtcbiJdfQ==