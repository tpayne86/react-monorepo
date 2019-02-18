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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9MaXN0L1NpbXBsZUxpc3RXaXRoQWN0aW9uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJyZW5kZXJBY3Rpb24iLCJsYWJlbCIsIm9uQ2xpY2siLCJpZCIsImNvbG9yIiwiY3Vyc29yIiwicmVuZGVyTGlzdEl0ZW1zIiwiaXRlbSIsImFjdGlvbkxhYmVsIiwidmFsdWUiLCJtZXRhIiwiU2ltcGxlTGlzdFdpdGhBY3Rpb24iLCJjbGFzc05hbWUiLCJkYXRhU291cmNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWlCQyxFQUFqQjtBQUFBLFNBQ25CO0FBQ0UsSUFBQSxPQUFPLEVBQUU7QUFBQSxhQUFNRCxRQUFPLENBQUNDLEVBQUQsQ0FBYjtBQUFBLEtBRFg7QUFFRSxJQUFBLElBQUksRUFBQyxjQUZQO0FBR0UsSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLE1BQUFBLE1BQU0sRUFBRTtBQUE1QjtBQUhULEtBS0dKLEtBTEgsQ0FEbUI7QUFBQSxDQUFyQjs7QUFVQSxJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBT0MsV0FBUCxFQUFvQk4sT0FBcEI7QUFBQSxTQUN0QiwyQ0FBTSxJQUFOO0FBQ0UsSUFBQSxPQUFPLEVBQUUsQ0FBQ0YsWUFBWSxDQUFDUSxXQUFELEVBQWNOLE9BQWQsRUFBdUJLLElBQUksQ0FBQ0osRUFBNUIsQ0FBYjtBQURYLEtBR0UsMkNBQU0sSUFBTixDQUFXLElBQVg7QUFDRSxJQUFBLEtBQUssRUFBRUksSUFBSSxDQUFDRSxLQURkO0FBRUUsSUFBQSxXQUFXLEVBQUVGLElBQUksQ0FBQ0csSUFBTCxHQUFZSCxJQUFJLENBQUNHLElBQWpCLEdBQXdCO0FBRnZDLElBSEYsQ0FEc0I7QUFBQSxDQUF4Qjs7QUFZQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsTUFDM0JDLFNBRDJCLFFBQzNCQSxTQUQyQjtBQUFBLE1BQ2hCQyxVQURnQixRQUNoQkEsVUFEZ0I7QUFBQSxNQUNKTCxXQURJLFFBQ0pBLFdBREk7QUFBQSxNQUNTTixPQURULFFBQ1NBLE9BRFQ7QUFBQSxTQUczQjtBQUNFLElBQUEsU0FBUyxFQUFFVSxTQURiO0FBRUUsSUFBQSxVQUFVLEVBQUMsWUFGYjtBQUdFLElBQUEsVUFBVSxFQUFFQyxVQUhkO0FBSUUsSUFBQSxVQUFVLEVBQUUsb0JBQUFOLElBQUk7QUFBQSxhQUFJRCxlQUFlLENBQUNDLElBQUQsRUFBT0MsV0FBUCxFQUFvQk4sT0FBcEIsQ0FBbkI7QUFBQTtBQUpsQixJQUgyQjtBQUFBLENBQTdCOztBQVdBUyxvQkFBb0IsQ0FBQ0csU0FBckIsR0FBaUM7QUFDL0JGLEVBQUFBLFNBQVMsRUFBRUcsbUJBQVVDLE1BRFU7QUFFL0JILEVBQUFBLFVBQVUsRUFBRUUsbUJBQVVFLE9BQVYsQ0FBa0JGLG1CQUFVRyxLQUFWLENBQWdCO0FBQzVDZixJQUFBQSxFQUFFLEVBQUVZLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVUssTUFBN0IsQ0FBcEIsQ0FEd0M7QUFFNUNYLElBQUFBLEtBQUssRUFBRU0sbUJBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVSyxNQUE3QixDQUFwQjtBQUZxQyxHQUFoQixDQUFsQixFQUdSQyxVQUwyQjtBQU0vQmIsRUFBQUEsV0FBVyxFQUFFTyxtQkFBVUMsTUFBVixDQUFpQkssVUFOQztBQU8vQm5CLEVBQUFBLE9BQU8sRUFBRWEsbUJBQVVPLElBQVYsQ0FBZUQ7QUFQTyxDQUFqQztBQVNBVixvQkFBb0IsQ0FBQ1ksWUFBckIsR0FBb0M7QUFDbENYLEVBQUFBLFNBQVMsRUFBRTtBQUR1QixDQUFwQztlQUllRCxvQjs7Ozs7Ozs7Ozs7OzBCQTlDVFgsWTswQkFVQU0sZTswQkFZQUssb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdhbnRkJztcblxuY29uc3QgcmVuZGVyQWN0aW9uID0gKGxhYmVsLCBvbkNsaWNrLCBpZCkgPT4gKFxuICA8c3BhblxuICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaWQpfVxuICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgIHN0eWxlPXt7IGNvbG9yOiAnIzE4OTBmZicsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gID5cbiAgICB7bGFiZWx9XG4gIDwvc3Bhbj5cbik7XG5cbmNvbnN0IHJlbmRlckxpc3RJdGVtcyA9IChpdGVtLCBhY3Rpb25MYWJlbCwgb25DbGljaykgPT4gKFxuICA8TGlzdC5JdGVtXG4gICAgYWN0aW9ucz17W3JlbmRlckFjdGlvbihhY3Rpb25MYWJlbCwgb25DbGljaywgaXRlbS5pZCldfVxuICA+XG4gICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICB0aXRsZT17aXRlbS52YWx1ZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLm1ldGEgPyBpdGVtLm1ldGEgOiBudWxsfVxuICAgIC8+XG4gIDwvTGlzdC5JdGVtPlxuKTtcblxuXG5jb25zdCBTaW1wbGVMaXN0V2l0aEFjdGlvbiA9ICh7XG4gIGNsYXNzTmFtZSwgZGF0YVNvdXJjZSwgYWN0aW9uTGFiZWwsIG9uQ2xpY2ssXG59KSA9PiAoXG4gIDxMaXN0XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgcmVuZGVySXRlbT17aXRlbSA9PiByZW5kZXJMaXN0SXRlbXMoaXRlbSwgYWN0aW9uTGFiZWwsIG9uQ2xpY2spfVxuICAvPlxuKTtcblxuU2ltcGxlTGlzdFdpdGhBY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgYWN0aW9uTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5TaW1wbGVMaXN0V2l0aEFjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVMaXN0V2l0aEFjdGlvbjtcbiJdfQ==