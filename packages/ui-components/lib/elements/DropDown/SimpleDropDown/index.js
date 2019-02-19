const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/lib/dropdown/style');

const _dropdown = _interopRequireDefault(require('antd/lib/dropdown'));

require('antd/lib/button/style');

const _button = _interopRequireDefault(require('antd/lib/button'));

require('antd/lib/icon/style');

const _icon = _interopRequireDefault(require('antd/lib/icon'));

require('antd/lib/menu/style');

const _menu = _interopRequireDefault(require('antd/lib/menu'));

require('core-js/modules/es6.array.map');

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const renderMenu = function renderMenu(dataSet, handleClick) {
  return _react.default.createElement(
    _menu.default,
    {
      onClick: handleClick,
    },
    dataSet.map(function(currentItem) {
      return _react.default.createElement(
        _menu.default.Item,
        {
          key: currentItem.id,
        },
        currentItem.value,
      );
    }),
  );
};

const AppDropDown = function AppDropDown(_ref) {
  const dataSet = _ref.dataSet;

  const onValueSelect = _ref.onValueSelect;
  return _react.default.createElement(
    _dropdown.default,
    {
      overlay: renderMenu(dataSet, onValueSelect),
    },
    _react.default.createElement(
      _button.default,
      {
        style: {
          marginLeft: 8,
        },
      },
      'Select',
      _react.default.createElement(_icon.default, {
        type: 'down',
      }),
    ),
  );
};

AppDropDown.propTypes = {
  dataSet: _propTypes.default.arrayOf(
    _propTypes.default.shape({
      id: _propTypes.default.oneOfType([
        _propTypes.default.string,
        _propTypes.default.number,
      ]).isRequired,
      value: _propTypes.default.oneOfType([
        _propTypes.default.string,
        _propTypes.default.number,
      ]).isRequired,
    }),
  ).isRequired,
  onValueSelect: _propTypes.default.func.isRequired,
};
const _default = AppDropDown;
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
    renderMenu,
    'renderMenu',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/SimpleDropDown/index.jsx',
  );
  reactHotLoader.register(
    AppDropDown,
    'AppDropDown',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/SimpleDropDown/index.jsx',
  );
  reactHotLoader.register(
    _default,
    'default',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/ui-components/src/elements/DropDown/SimpleDropDown/index.jsx',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9Ecm9wRG93bi9TaW1wbGVEcm9wRG93bi9pbmRleC5qc3giXSwibmFtZXMiOlsicmVuZGVyTWVudSIsImRhdGFTZXQiLCJoYW5kbGVDbGljayIsIm1hcCIsImN1cnJlbnRJdGVtIiwiaWQiLCJ2YWx1ZSIsIkFwcERyb3BEb3duIiwib25WYWx1ZVNlbGVjdCIsIm1hcmdpbkxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBVUMsV0FBVjtBQUFBLFNBQ2pCO0FBQU0sSUFBQSxPQUFPLEVBQUVBO0FBQWYsS0FDR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0MsV0FBRDtBQUFBLFdBQ1gsMkNBQU0sSUFBTjtBQUFXLE1BQUEsR0FBRyxFQUFFQSxXQUFXLENBQUNDO0FBQTVCLE9BQWlDRCxXQUFXLENBQUNFLEtBQTdDLENBRFc7QUFBQSxHQUFaLENBREgsQ0FEaUI7QUFBQSxDQUFuQjs7QUFRQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdOLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlPLGFBQVosUUFBWUEsYUFBWjtBQUFBLFNBQ2xCO0FBQVUsSUFBQSxPQUFPLEVBQUVSLFVBQVUsQ0FBQ0MsT0FBRCxFQUFVTyxhQUFWO0FBQTdCLEtBQ0U7QUFBUSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUU7QUFBZDtBQUFmLGVBRUU7QUFBTSxJQUFBLElBQUksRUFBQztBQUFYLElBRkYsQ0FERixDQURrQjtBQUFBLENBQXBCOztBQVFBRixXQUFXLENBQUNHLFNBQVosR0FBd0I7QUFDdEJULEVBQUFBLE9BQU8sRUFBRVUsbUJBQVVDLE9BQVYsQ0FDUEQsbUJBQVVFLEtBQVYsQ0FBZ0I7QUFDZFIsSUFBQUEsRUFBRSxFQUFFTSxtQkFBVUcsU0FBVixDQUFvQixDQUFDSCxtQkFBVUksTUFBWCxFQUFtQkosbUJBQVVLLE1BQTdCLENBQXBCLEVBQTBEQyxVQURoRDtBQUVkWCxJQUFBQSxLQUFLLEVBQUVLLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxNQUFYLEVBQW1CSixtQkFBVUssTUFBN0IsQ0FBcEIsRUFDSkM7QUFIVyxHQUFoQixDQURPLEVBTVBBLFVBUG9CO0FBUXRCVCxFQUFBQSxhQUFhLEVBQUVHLG1CQUFVTyxJQUFWLENBQWVEO0FBUlIsQ0FBeEI7ZUFXZVYsVzs7Ozs7Ozs7Ozs7OzBCQTNCVFAsVTswQkFRQU8sVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTWVudSwgRHJvcGRvd24sIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCByZW5kZXJNZW51ID0gKGRhdGFTZXQsIGhhbmRsZUNsaWNrKSA9PiAoXG4gIDxNZW51IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICB7ZGF0YVNldC5tYXAoKGN1cnJlbnRJdGVtKSA9PiAoXG4gICAgICA8TWVudS5JdGVtIGtleT17Y3VycmVudEl0ZW0uaWR9PntjdXJyZW50SXRlbS52YWx1ZX08L01lbnUuSXRlbT5cbiAgICApKX1cbiAgPC9NZW51PlxuKTtcblxuY29uc3QgQXBwRHJvcERvd24gPSAoeyBkYXRhU2V0LCBvblZhbHVlU2VsZWN0IH0pID0+IChcbiAgPERyb3Bkb3duIG92ZXJsYXk9e3JlbmRlck1lbnUoZGF0YVNldCwgb25WYWx1ZVNlbGVjdCl9PlxuICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cbiAgICAgIFNlbGVjdFxuICAgICAgPEljb24gdHlwZT1cImRvd25cIiAvPlxuICAgIDwvQnV0dG9uPlxuICA8L0Ryb3Bkb3duPlxuKTtcbkFwcERyb3BEb3duLnByb3BUeXBlcyA9IHtcbiAgZGF0YVNldDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICAgICAgLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gICkuaXNSZXF1aXJlZCxcbiAgb25WYWx1ZVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERyb3BEb3duO1xuIl19
