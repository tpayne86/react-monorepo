"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var renderMenu = function renderMenu(dataSet, handleClick) {
  return _react.default.createElement(_menu.default, {
    onClick: handleClick
  }, dataSet.map(function (currentItem) {
    return _react.default.createElement(_menu.default.Item, {
      key: currentItem.id
    }, currentItem.value);
  }));
};

var AppDropDown = function AppDropDown(_ref) {
  var dataSet = _ref.dataSet,
      onValueSelect = _ref.onValueSelect;
  return _react.default.createElement(_dropdown.default, {
    overlay: renderMenu(dataSet, onValueSelect)
  }, _react.default.createElement(_button.default, {
    style: {
      marginLeft: 8
    }
  }, "Select", _react.default.createElement(_icon.default, {
    type: "down"
  })));
};

AppDropDown.propTypes = {
  dataSet: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
  })).isRequired,
  onValueSelect: _propTypes.default.func.isRequired
};
var _default = AppDropDown;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderMenu, "renderMenu", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/SimpleDropDown/index.jsx");
  reactHotLoader.register(AppDropDown, "AppDropDown", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/SimpleDropDown/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/SimpleDropDown/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();