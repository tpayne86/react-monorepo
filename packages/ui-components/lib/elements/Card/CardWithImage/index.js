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