"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _ = _interopRequireDefault(require("."));

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('Unit Test cases for AppButton.component.jsx', function () {
  describe('Unti test cases for <AppButton />', function () {
    var wrapper = {};
    var props;
    beforeEach(function () {
      props = {
        disabled: false,
        url: '',
        icon: '',
        type: 'text',
        loading: false,
        onClick: jest.fn(),
        label: 'button',
        meta: 'hey hey'
      };
      wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, props));
    });
    it('should render Button with props ', function () {
      expect(wrapper).toBeDefined();
      var componentProps = wrapper.props();
      expect(componentProps).toBeDefined();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9CdXR0b24vQnV0dG9uLnNwZWMuanN4Il0sIm5hbWVzIjpbImFkYXB0ZXIiLCJBZGFwdGVyIiwiZGVzY3JpYmUiLCJ3cmFwcGVyIiwicHJvcHMiLCJiZWZvcmVFYWNoIiwiZGlzYWJsZWQiLCJ1cmwiLCJpY29uIiwidHlwZSIsImxvYWRpbmciLCJvbkNsaWNrIiwiamVzdCIsImZuIiwibGFiZWwiLCJtZXRhIiwiaXQiLCJleHBlY3QiLCJ0b0JlRGVmaW5lZCIsImNvbXBvbmVudFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsdUJBQVU7QUFBRUEsRUFBQUEsT0FBTyxFQUFFLElBQUlDLDJCQUFKO0FBQVgsQ0FBVjtBQUVBQyxRQUFRLENBQUMsNkNBQUQsRUFBZ0QsWUFBTTtBQUM1REEsRUFBQUEsUUFBUSxDQUFDLG1DQUFELEVBQXNDLFlBQU07QUFDbEQsUUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxRQUFJQyxLQUFKO0FBQ0FDLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZELE1BQUFBLEtBQUssR0FBRztBQUNORSxRQUFBQSxRQUFRLEVBQUUsS0FESjtBQUVOQyxRQUFBQSxHQUFHLEVBQUUsRUFGQztBQUdOQyxRQUFBQSxJQUFJLEVBQUUsRUFIQTtBQUlOQyxRQUFBQSxJQUFJLEVBQUUsTUFKQTtBQUtOQyxRQUFBQSxPQUFPLEVBQUUsS0FMSDtBQU1OQyxRQUFBQSxPQUFPLEVBQUVDLElBQUksQ0FBQ0MsRUFBTCxFQU5IO0FBT05DLFFBQUFBLEtBQUssRUFBRSxRQVBEO0FBUU5DLFFBQUFBLElBQUksRUFBRTtBQVJBLE9BQVI7QUFVQVosTUFBQUEsT0FBTyxHQUFHLHFCQUFRLDZCQUFDLFNBQUQsRUFBZUMsS0FBZixDQUFSLENBQVY7QUFDRCxLQVpTLENBQVY7QUFhQVksSUFBQUEsRUFBRSxDQUFDLGtDQUFELEVBQXFDLFlBQU07QUFDM0NDLE1BQUFBLE1BQU0sQ0FBQ2QsT0FBRCxDQUFOLENBQWdCZSxXQUFoQjtBQUNBLFVBQU1DLGNBQWMsR0FBR2hCLE9BQU8sQ0FBQ0MsS0FBUixFQUF2QjtBQUNBYSxNQUFBQSxNQUFNLENBQUNFLGNBQUQsQ0FBTixDQUF1QkQsV0FBdkI7QUFDRCxLQUpDLENBQUY7QUFLRCxHQXJCTyxDQUFSO0FBc0JELENBdkJPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29uZmlndXJlLCBzaGFsbG93IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJ2VuenltZS1hZGFwdGVyLXJlYWN0LTE2JztcbmltcG9ydCBBcHBCdXR0b24gZnJvbSAnLic7XG5cbmNvbmZpZ3VyZSh7IGFkYXB0ZXI6IG5ldyBBZGFwdGVyKCkgfSk7XG5cbmRlc2NyaWJlKCdVbml0IFRlc3QgY2FzZXMgZm9yIEFwcEJ1dHRvbi5jb21wb25lbnQuanN4JywgKCkgPT4ge1xuICBkZXNjcmliZSgnVW50aSB0ZXN0IGNhc2VzIGZvciA8QXBwQnV0dG9uIC8+JywgKCkgPT4ge1xuICAgIGxldCB3cmFwcGVyID0ge307XG4gICAgbGV0IHByb3BzO1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgcHJvcHMgPSB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgaWNvbjogJycsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIG9uQ2xpY2s6IGplc3QuZm4oKSxcbiAgICAgICAgbGFiZWw6ICdidXR0b24nLFxuICAgICAgICBtZXRhOiAnaGV5IGhleScsXG4gICAgICB9O1xuICAgICAgd3JhcHBlciA9IHNoYWxsb3coPEFwcEJ1dHRvbiB7Li4ucHJvcHN9IC8+KTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHJlbmRlciBCdXR0b24gd2l0aCBwcm9wcyAnLCAoKSA9PiB7XG4gICAgICBleHBlY3Qod3JhcHBlcikudG9CZURlZmluZWQoKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID0gd3JhcHBlci5wcm9wcygpO1xuICAgICAgZXhwZWN0KGNvbXBvbmVudFByb3BzKS50b0JlRGVmaW5lZCgpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19