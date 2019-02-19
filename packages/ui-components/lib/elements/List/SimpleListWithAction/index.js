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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9MaXN0L1NpbXBsZUxpc3RXaXRoQWN0aW9uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJyZW5kZXJBY3Rpb24iLCJsYWJlbCIsIm9uQ2xpY2siLCJpZCIsImNvbG9yIiwiY3Vyc29yIiwicmVuZGVyTGlzdEl0ZW1zIiwiaXRlbSIsImFjdGlvbkxhYmVsIiwidmFsdWUiLCJtZXRhIiwiU2ltcGxlTGlzdFdpdGhBY3Rpb24iLCJjbGFzc05hbWUiLCJkYXRhU291cmNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWlCQyxFQUFqQjtBQUFBLFNBQ25CO0FBQ0UsSUFBQSxPQUFPLEVBQUU7QUFBQSxhQUFNRCxRQUFPLENBQUNDLEVBQUQsQ0FBYjtBQUFBLEtBRFg7QUFFRSxJQUFBLElBQUksRUFBQyxjQUZQO0FBR0UsSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLE1BQUFBLE1BQU0sRUFBRTtBQUE1QjtBQUhULEtBS0dKLEtBTEgsQ0FEbUI7QUFBQSxDQUFyQjs7QUFVQSxJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBT0MsV0FBUCxFQUFvQk4sT0FBcEI7QUFBQSxTQUN0QiwyQ0FBTSxJQUFOO0FBQVcsSUFBQSxPQUFPLEVBQUUsQ0FBQ0YsWUFBWSxDQUFDUSxXQUFELEVBQWNOLE9BQWQsRUFBdUJLLElBQUksQ0FBQ0osRUFBNUIsQ0FBYjtBQUFwQixLQUNFLDJDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0UsSUFBQSxLQUFLLEVBQUVJLElBQUksQ0FBQ0UsS0FEZDtBQUVFLElBQUEsV0FBVyxFQUFFRixJQUFJLENBQUNHLElBQUwsR0FBWUgsSUFBSSxDQUFDRyxJQUFqQixHQUF3QjtBQUZ2QyxJQURGLENBRHNCO0FBQUEsQ0FBeEI7O0FBU0EsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLE1BQzNCQyxTQUQyQixRQUMzQkEsU0FEMkI7QUFBQSxNQUUzQkMsVUFGMkIsUUFFM0JBLFVBRjJCO0FBQUEsTUFHM0JMLFdBSDJCLFFBRzNCQSxXQUgyQjtBQUFBLE1BSTNCTixPQUoyQixRQUkzQkEsT0FKMkI7QUFBQSxTQU0zQjtBQUNFLElBQUEsU0FBUyxFQUFFVSxTQURiO0FBRUUsSUFBQSxVQUFVLEVBQUMsWUFGYjtBQUdFLElBQUEsVUFBVSxFQUFFQyxVQUhkO0FBSUUsSUFBQSxVQUFVLEVBQUUsb0JBQUNOLElBQUQ7QUFBQSxhQUFVRCxlQUFlLENBQUNDLElBQUQsRUFBT0MsV0FBUCxFQUFvQk4sT0FBcEIsQ0FBekI7QUFBQTtBQUpkLElBTjJCO0FBQUEsQ0FBN0I7O0FBY0FTLG9CQUFvQixDQUFDRyxTQUFyQixHQUFpQztBQUMvQkYsRUFBQUEsU0FBUyxFQUFFRyxtQkFBVUMsTUFEVTtBQUUvQkgsRUFBQUEsVUFBVSxFQUFFRSxtQkFBVUUsT0FBVixDQUNWRixtQkFBVUcsS0FBVixDQUFnQjtBQUNkZixJQUFBQSxFQUFFLEVBQUVZLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVUssTUFBN0IsQ0FBcEIsQ0FEVTtBQUVkWCxJQUFBQSxLQUFLLEVBQUVNLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVUssTUFBN0IsQ0FBcEI7QUFGTyxHQUFoQixDQURVLEVBS1ZDLFVBUDZCO0FBUS9CYixFQUFBQSxXQUFXLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCSyxVQVJDO0FBUy9CbkIsRUFBQUEsT0FBTyxFQUFFYSxtQkFBVU8sSUFBVixDQUFlRDtBQVRPLENBQWpDO0FBV0FWLG9CQUFvQixDQUFDWSxZQUFyQixHQUFvQztBQUNsQ1gsRUFBQUEsU0FBUyxFQUFFO0FBRHVCLENBQXBDO2VBSWVELG9COzs7Ozs7Ozs7Ozs7MEJBaERUWCxZOzBCQVVBTSxlOzBCQVNBSyxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCByZW5kZXJBY3Rpb24gPSAobGFiZWwsIG9uQ2xpY2ssIGlkKSA9PiAoXG4gIDxzcGFuXG4gICAgb25DbGljaz17KCkgPT4gb25DbGljayhpZCl9XG4gICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgc3R5bGU9e3sgY29sb3I6ICcjMTg5MGZmJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgPlxuICAgIHtsYWJlbH1cbiAgPC9zcGFuPlxuKTtcblxuY29uc3QgcmVuZGVyTGlzdEl0ZW1zID0gKGl0ZW0sIGFjdGlvbkxhYmVsLCBvbkNsaWNrKSA9PiAoXG4gIDxMaXN0Lkl0ZW0gYWN0aW9ucz17W3JlbmRlckFjdGlvbihhY3Rpb25MYWJlbCwgb25DbGljaywgaXRlbS5pZCldfT5cbiAgICA8TGlzdC5JdGVtLk1ldGFcbiAgICAgIHRpdGxlPXtpdGVtLnZhbHVlfVxuICAgICAgZGVzY3JpcHRpb249e2l0ZW0ubWV0YSA/IGl0ZW0ubWV0YSA6IG51bGx9XG4gICAgLz5cbiAgPC9MaXN0Lkl0ZW0+XG4pO1xuXG5jb25zdCBTaW1wbGVMaXN0V2l0aEFjdGlvbiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgZGF0YVNvdXJjZSxcbiAgYWN0aW9uTGFiZWwsXG4gIG9uQ2xpY2ssXG59KSA9PiAoXG4gIDxMaXN0XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHJlbmRlckxpc3RJdGVtcyhpdGVtLCBhY3Rpb25MYWJlbCwgb25DbGljayl9XG4gIC8+XG4pO1xuXG5TaW1wbGVMaXN0V2l0aEFjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YVNvdXJjZTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIH0pLFxuICApLmlzUmVxdWlyZWQsXG4gIGFjdGlvbkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuU2ltcGxlTGlzdFdpdGhBY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlTGlzdFdpdGhBY3Rpb247XG4iXX0=