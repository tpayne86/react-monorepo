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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9Ecm9wRG93bi9TaW1wbGVEcm9wRG93bi9pbmRleC5qc3giXSwibmFtZXMiOlsicmVuZGVyTWVudSIsImRhdGFTZXQiLCJoYW5kbGVDbGljayIsIm1hcCIsImN1cnJlbnRJdGVtIiwiaWQiLCJ2YWx1ZSIsIkFwcERyb3BEb3duIiwib25WYWx1ZVNlbGVjdCIsIm1hcmdpbkxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUtBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBVUMsV0FBVjtBQUFBLFNBQ2pCO0FBQU0sSUFBQSxPQUFPLEVBQUVBO0FBQWYsS0FFSUQsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQUMsV0FBVztBQUFBLFdBQ3JCLDJDQUFNLElBQU47QUFBVyxNQUFBLEdBQUcsRUFBRUEsV0FBVyxDQUFDQztBQUE1QixPQUNHRCxXQUFXLENBQUNFLEtBRGYsQ0FEcUI7QUFBQSxHQUF2QixDQUZKLENBRGlCO0FBQUEsQ0FBbkI7O0FBWUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUNsQk4sT0FEa0IsUUFDbEJBLE9BRGtCO0FBQUEsTUFFbEJPLGFBRmtCLFFBRWxCQSxhQUZrQjtBQUFBLFNBSWxCO0FBQVUsSUFBQSxPQUFPLEVBQUVSLFVBQVUsQ0FBQ0MsT0FBRCxFQUFVTyxhQUFWO0FBQTdCLEtBQ0U7QUFBUSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUU7QUFBZDtBQUFmLGVBRUU7QUFBTSxJQUFBLElBQUksRUFBQztBQUFYLElBRkYsQ0FERixDQUprQjtBQUFBLENBQXBCOztBQVdBRixXQUFXLENBQUNHLFNBQVosR0FBd0I7QUFDdEJULEVBQUFBLE9BQU8sRUFBRVUsbUJBQVVDLE9BQVYsQ0FBa0JELG1CQUFVRSxLQUFWLENBQWdCO0FBQ3pDUixJQUFBQSxFQUFFLEVBQUVNLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxNQUFYLEVBQW1CSixtQkFBVUssTUFBN0IsQ0FBcEIsRUFBMERDLFVBRHJCO0FBRXpDWCxJQUFBQSxLQUFLLEVBQUVLLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxNQUFYLEVBQW1CSixtQkFBVUssTUFBN0IsQ0FBcEIsRUFBMERDO0FBRnhCLEdBQWhCLENBQWxCLEVBR0xBLFVBSmtCO0FBS3RCVCxFQUFBQSxhQUFhLEVBQUVHLG1CQUFVTyxJQUFWLENBQWVEO0FBTFIsQ0FBeEI7ZUFRZVYsVzs7Ozs7Ozs7Ozs7OzBCQS9CVFAsVTswQkFZQU8sVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgTWVudSwgRHJvcGRvd24sIEJ1dHRvbiwgSWNvbixcbn0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IHJlbmRlck1lbnUgPSAoZGF0YVNldCwgaGFuZGxlQ2xpY2spID0+IChcbiAgPE1lbnUgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgIHtcbiAgICAgIGRhdGFTZXQubWFwKGN1cnJlbnRJdGVtID0+IChcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2N1cnJlbnRJdGVtLmlkfT5cbiAgICAgICAgICB7Y3VycmVudEl0ZW0udmFsdWV9XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgKSlcbiAgICB9XG4gIDwvTWVudT5cbik7XG5cbmNvbnN0IEFwcERyb3BEb3duID0gKHtcbiAgZGF0YVNldCxcbiAgb25WYWx1ZVNlbGVjdCxcbn0pID0+IChcbiAgPERyb3Bkb3duIG92ZXJsYXk9e3JlbmRlck1lbnUoZGF0YVNldCwgb25WYWx1ZVNlbGVjdCl9PlxuICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cbiAgICAgICAgU2VsZWN0XG4gICAgICA8SWNvbiB0eXBlPVwiZG93blwiIC8+XG4gICAgPC9CdXR0b24+XG4gIDwvRHJvcGRvd24+XG4pO1xuQXBwRHJvcERvd24ucHJvcFR5cGVzID0ge1xuICBkYXRhU2V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBvblZhbHVlU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwRHJvcERvd247XG4iXX0=