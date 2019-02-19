"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.array.find");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _ = _interopRequireDefault(require("."));

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('Unit Test cases for TextBoxWithButton.component.jsx', function () {
  describe('Unti test cases for <TextBoxWithButton />', function () {
    var wrapper = {};
    var props;
    beforeEach(function () {
      props = {
        placeholder: 'hannad',
        onAction: jest.fn(),
        buttonText: 'hey button'
      };
      wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, props));
    });
    it('should render component with props', function () {
      var componentProps = wrapper.instance().props;
      expect(wrapper).toBeDefined();
      expect(componentProps.placeholder).toBe('hannad');
      expect(componentProps.buttonText).toBe('hey button');
      expect((0, _typeof2.default)(componentProps.onAction)).toBe('function');
    });
    it('should simulate change in text box', function () {
      wrapper.find('Search').simulate('change', {
        target: {
          value: 'hey text'
        }
      });
      var componentState = wrapper.instance().state;
      expect(componentState.value).toBe('hey text');
    });
    it('should call onAction on onSearch event change', function () {
      var _props = props,
          onAction = _props.onAction;
      wrapper.instance().onSubmit('hey hey');
      expect(onAction).toHaveBeenCalledWith('hey hey');
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9UZXh0Qm94L1RleHRCb3hXaXRoQnV0dG9uL1RleHRCb3hXaXRoQnV0dG9uLnNwZWMuanN4Il0sIm5hbWVzIjpbImFkYXB0ZXIiLCJBZGFwdGVyIiwiZGVzY3JpYmUiLCJ3cmFwcGVyIiwicHJvcHMiLCJiZWZvcmVFYWNoIiwicGxhY2Vob2xkZXIiLCJvbkFjdGlvbiIsImplc3QiLCJmbiIsImJ1dHRvblRleHQiLCJpdCIsImNvbXBvbmVudFByb3BzIiwiaW5zdGFuY2UiLCJleHBlY3QiLCJ0b0JlRGVmaW5lZCIsInRvQmUiLCJmaW5kIiwic2ltdWxhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbXBvbmVudFN0YXRlIiwic3RhdGUiLCJvblN1Ym1pdCIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLHVCQUFVO0FBQUVBLEVBQUFBLE9BQU8sRUFBRSxJQUFJQywyQkFBSjtBQUFYLENBQVY7QUFFQUMsUUFBUSxDQUFDLHFEQUFELEVBQXdELFlBQU07QUFDcEVBLEVBQUFBLFFBQVEsQ0FBQywyQ0FBRCxFQUE4QyxZQUFNO0FBQzFELFFBQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsUUFBSUMsS0FBSjtBQUNBQyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmRCxNQUFBQSxLQUFLLEdBQUc7QUFDTkUsUUFBQUEsV0FBVyxFQUFFLFFBRFA7QUFFTkMsUUFBQUEsUUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsRUFGSjtBQUdOQyxRQUFBQSxVQUFVLEVBQUU7QUFITixPQUFSO0FBS0FQLE1BQUFBLE9BQU8sR0FBRyxxQkFBUSw2QkFBQyxTQUFELEVBQXVCQyxLQUF2QixDQUFSLENBQVY7QUFDRCxLQVBTLENBQVY7QUFRQU8sSUFBQUEsRUFBRSxDQUFDLG9DQUFELEVBQXVDLFlBQU07QUFDN0MsVUFBTUMsY0FBYyxHQUFHVCxPQUFPLENBQUNVLFFBQVIsR0FBbUJULEtBQTFDO0FBQ0FVLE1BQUFBLE1BQU0sQ0FBQ1gsT0FBRCxDQUFOLENBQWdCWSxXQUFoQjtBQUNBRCxNQUFBQSxNQUFNLENBQUNGLGNBQWMsQ0FBQ04sV0FBaEIsQ0FBTixDQUFtQ1UsSUFBbkMsQ0FBd0MsUUFBeEM7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRixjQUFjLENBQUNGLFVBQWhCLENBQU4sQ0FBa0NNLElBQWxDLENBQXVDLFlBQXZDO0FBQ0FGLE1BQUFBLE1BQU0sdUJBQVFGLGNBQWMsQ0FBQ0wsUUFBdkIsRUFBTixDQUF1Q1MsSUFBdkMsQ0FBNEMsVUFBNUM7QUFDRCxLQU5DLENBQUY7QUFPQUwsSUFBQUEsRUFBRSxDQUFDLG9DQUFELEVBQXVDLFlBQU07QUFDN0NSLE1BQUFBLE9BQU8sQ0FDSmMsSUFESCxDQUNRLFFBRFIsRUFFR0MsUUFGSCxDQUVZLFFBRlosRUFFc0I7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQUVDLFVBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsT0FGdEI7QUFHQSxVQUFNQyxjQUFjLEdBQUdsQixPQUFPLENBQUNVLFFBQVIsR0FBbUJTLEtBQTFDO0FBQ0FSLE1BQUFBLE1BQU0sQ0FBQ08sY0FBYyxDQUFDRCxLQUFoQixDQUFOLENBQTZCSixJQUE3QixDQUFrQyxVQUFsQztBQUNELEtBTkMsQ0FBRjtBQU9BTCxJQUFBQSxFQUFFLENBQUMsK0NBQUQsRUFBa0QsWUFBTTtBQUFBLG1CQUNuQ1AsS0FEbUM7QUFBQSxVQUNoREcsUUFEZ0QsVUFDaERBLFFBRGdEO0FBRXhESixNQUFBQSxPQUFPLENBQUNVLFFBQVIsR0FBbUJVLFFBQW5CLENBQTRCLFNBQTVCO0FBQ0FULE1BQUFBLE1BQU0sQ0FBQ1AsUUFBRCxDQUFOLENBQWlCaUIsb0JBQWpCLENBQXNDLFNBQXRDO0FBQ0QsS0FKQyxDQUFGO0FBS0QsR0E5Qk8sQ0FBUjtBQStCRCxDQWhDTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbmZpZ3VyZSwgc2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgQWRhcHRlciBmcm9tICdlbnp5bWUtYWRhcHRlci1yZWFjdC0xNic7XG5pbXBvcnQgVGV4dEJveFdpdGhCdXR0b24gZnJvbSAnLic7XG5cbmNvbmZpZ3VyZSh7IGFkYXB0ZXI6IG5ldyBBZGFwdGVyKCkgfSk7XG5cbmRlc2NyaWJlKCdVbml0IFRlc3QgY2FzZXMgZm9yIFRleHRCb3hXaXRoQnV0dG9uLmNvbXBvbmVudC5qc3gnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdVbnRpIHRlc3QgY2FzZXMgZm9yIDxUZXh0Qm94V2l0aEJ1dHRvbiAvPicsICgpID0+IHtcbiAgICBsZXQgd3JhcHBlciA9IHt9O1xuICAgIGxldCBwcm9wcztcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHByb3BzID0ge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ2hhbm5hZCcsXG4gICAgICAgIG9uQWN0aW9uOiBqZXN0LmZuKCksXG4gICAgICAgIGJ1dHRvblRleHQ6ICdoZXkgYnV0dG9uJyxcbiAgICAgIH07XG4gICAgICB3cmFwcGVyID0gc2hhbGxvdyg8VGV4dEJveFdpdGhCdXR0b24gey4uLnByb3BzfSAvPik7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCByZW5kZXIgY29tcG9uZW50IHdpdGggcHJvcHMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRQcm9wcyA9IHdyYXBwZXIuaW5zdGFuY2UoKS5wcm9wcztcbiAgICAgIGV4cGVjdCh3cmFwcGVyKS50b0JlRGVmaW5lZCgpO1xuICAgICAgZXhwZWN0KGNvbXBvbmVudFByb3BzLnBsYWNlaG9sZGVyKS50b0JlKCdoYW5uYWQnKTtcbiAgICAgIGV4cGVjdChjb21wb25lbnRQcm9wcy5idXR0b25UZXh0KS50b0JlKCdoZXkgYnV0dG9uJyk7XG4gICAgICBleHBlY3QodHlwZW9mIGNvbXBvbmVudFByb3BzLm9uQWN0aW9uKS50b0JlKCdmdW5jdGlvbicpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc2ltdWxhdGUgY2hhbmdlIGluIHRleHQgYm94JywgKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZCgnU2VhcmNoJylcbiAgICAgICAgLnNpbXVsYXRlKCdjaGFuZ2UnLCB7IHRhcmdldDogeyB2YWx1ZTogJ2hleSB0ZXh0JyB9IH0pO1xuICAgICAgY29uc3QgY29tcG9uZW50U3RhdGUgPSB3cmFwcGVyLmluc3RhbmNlKCkuc3RhdGU7XG4gICAgICBleHBlY3QoY29tcG9uZW50U3RhdGUudmFsdWUpLnRvQmUoJ2hleSB0ZXh0Jyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBjYWxsIG9uQWN0aW9uIG9uIG9uU2VhcmNoIGV2ZW50IGNoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgb25BY3Rpb24gfSA9IHByb3BzO1xuICAgICAgd3JhcHBlci5pbnN0YW5jZSgpLm9uU3VibWl0KCdoZXkgaGV5Jyk7XG4gICAgICBleHBlY3Qob25BY3Rpb24pLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCdoZXkgaGV5Jyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=