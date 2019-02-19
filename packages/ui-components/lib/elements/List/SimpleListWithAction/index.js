"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/list/style");

var _list = _interopRequireDefault(require("antd/lib/list"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var renderAction = function renderAction(label, _onClick, id) {
  return _react.default.createElement("span", {
    onClick: function onClick() {
      return _onClick(id);
    },
    role: "presentation",
    style: {
      color: '#1890ff',
      cursor: 'pointer'
    }
  }, label);
};

var renderListItems = function renderListItems(item, actionLabel, onClick) {
  return _react.default.createElement(_list.default.Item, {
    actions: [renderAction(actionLabel, onClick, item.id)]
  }, _react.default.createElement(_list.default.Item.Meta, {
    title: item.value,
    description: item.meta ? item.meta : null
  }));
};

var SimpleListWithAction = function SimpleListWithAction(_ref) {
  var className = _ref.className,
      dataSource = _ref.dataSource,
      actionLabel = _ref.actionLabel,
      onClick = _ref.onClick;
  return _react.default.createElement(_list.default, {
    className: className,
    itemLayout: "horizontal",
    dataSource: dataSource,
    renderItem: function renderItem(item) {
      return renderListItems(item, actionLabel, onClick);
    }
  });
};

SimpleListWithAction.propTypes = {
  className: _propTypes.default.string,
  dataSource: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  })).isRequired,
  actionLabel: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
SimpleListWithAction.defaultProps = {
  className: ''
};
var _default = SimpleListWithAction;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderAction, "renderAction", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/List/SimpleListWithAction/index.jsx");
  reactHotLoader.register(renderListItems, "renderListItems", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/List/SimpleListWithAction/index.jsx");
  reactHotLoader.register(SimpleListWithAction, "SimpleListWithAction", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/List/SimpleListWithAction/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/List/SimpleListWithAction/index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();