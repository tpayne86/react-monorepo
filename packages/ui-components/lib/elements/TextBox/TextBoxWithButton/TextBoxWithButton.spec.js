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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9UZXh0Qm94L1RleHRCb3hXaXRoQnV0dG9uL1RleHRCb3hXaXRoQnV0dG9uLnNwZWMuanN4Il0sIm5hbWVzIjpbImFkYXB0ZXIiLCJBZGFwdGVyIiwiZGVzY3JpYmUiLCJ3cmFwcGVyIiwicHJvcHMiLCJiZWZvcmVFYWNoIiwicGxhY2Vob2xkZXIiLCJvbkFjdGlvbiIsImplc3QiLCJmbiIsImJ1dHRvblRleHQiLCJpdCIsImNvbXBvbmVudFByb3BzIiwiaW5zdGFuY2UiLCJleHBlY3QiLCJ0b0JlRGVmaW5lZCIsInRvQmUiLCJmaW5kIiwic2ltdWxhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbXBvbmVudFN0YXRlIiwic3RhdGUiLCJvblN1Ym1pdCIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLHVCQUFVO0FBQUVBLEVBQUFBLE9BQU8sRUFBRSxJQUFJQywyQkFBSjtBQUFYLENBQVY7QUFFQUMsUUFBUSxDQUFDLHFEQUFELEVBQXdELFlBQU07QUFDcEVBLEVBQUFBLFFBQVEsQ0FBQywyQ0FBRCxFQUE4QyxZQUFNO0FBQzFELFFBQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsUUFBSUMsS0FBSjtBQUNBQyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmRCxNQUFBQSxLQUFLLEdBQUc7QUFDTkUsUUFBQUEsV0FBVyxFQUFFLFFBRFA7QUFFTkMsUUFBQUEsUUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsRUFGSjtBQUdOQyxRQUFBQSxVQUFVLEVBQUU7QUFITixPQUFSO0FBS0FQLE1BQUFBLE9BQU8sR0FBRyxxQkFBUSw2QkFBQyxTQUFELEVBQXVCQyxLQUF2QixDQUFSLENBQVY7QUFDRCxLQVBTLENBQVY7QUFRQU8sSUFBQUEsRUFBRSxDQUFDLG9DQUFELEVBQXVDLFlBQU07QUFDN0MsVUFBTUMsY0FBYyxHQUFHVCxPQUFPLENBQUNVLFFBQVIsR0FBbUJULEtBQTFDO0FBQ0FVLE1BQUFBLE1BQU0sQ0FBQ1gsT0FBRCxDQUFOLENBQWdCWSxXQUFoQjtBQUNBRCxNQUFBQSxNQUFNLENBQUNGLGNBQWMsQ0FBQ04sV0FBaEIsQ0FBTixDQUFtQ1UsSUFBbkMsQ0FBd0MsUUFBeEM7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRixjQUFjLENBQUNGLFVBQWhCLENBQU4sQ0FBa0NNLElBQWxDLENBQXVDLFlBQXZDO0FBQ0FGLE1BQUFBLE1BQU0sdUJBQVFGLGNBQWMsQ0FBQ0wsUUFBdkIsRUFBTixDQUF1Q1MsSUFBdkMsQ0FBNEMsVUFBNUM7QUFDRCxLQU5DLENBQUY7QUFPQUwsSUFBQUEsRUFBRSxDQUFDLG9DQUFELEVBQXVDLFlBQU07QUFDN0NSLE1BQUFBLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLFFBQWIsRUFBdUJDLFFBQXZCLENBQWdDLFFBQWhDLEVBQTBDO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFFQyxVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLE9BQTFDO0FBQ0EsVUFBTUMsY0FBYyxHQUFHbEIsT0FBTyxDQUFDVSxRQUFSLEdBQW1CUyxLQUExQztBQUNBUixNQUFBQSxNQUFNLENBQUNPLGNBQWMsQ0FBQ0QsS0FBaEIsQ0FBTixDQUE2QkosSUFBN0IsQ0FBa0MsVUFBbEM7QUFDRCxLQUpDLENBQUY7QUFLQUwsSUFBQUEsRUFBRSxDQUFDLCtDQUFELEVBQWtELFlBQU07QUFBQSxtQkFDbkNQLEtBRG1DO0FBQUEsVUFDaERHLFFBRGdELFVBQ2hEQSxRQURnRDtBQUV4REosTUFBQUEsT0FBTyxDQUFDVSxRQUFSLEdBQW1CVSxRQUFuQixDQUE0QixTQUE1QjtBQUNBVCxNQUFBQSxNQUFNLENBQUNQLFFBQUQsQ0FBTixDQUFpQmlCLG9CQUFqQixDQUFzQyxTQUF0QztBQUNELEtBSkMsQ0FBRjtBQUtELEdBNUJPLENBQVI7QUE2QkQsQ0E5Qk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25maWd1cmUsIHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IEFkYXB0ZXIgZnJvbSAnZW56eW1lLWFkYXB0ZXItcmVhY3QtMTYnO1xuaW1wb3J0IFRleHRCb3hXaXRoQnV0dG9uIGZyb20gJy4nO1xuXG5jb25maWd1cmUoeyBhZGFwdGVyOiBuZXcgQWRhcHRlcigpIH0pO1xuXG5kZXNjcmliZSgnVW5pdCBUZXN0IGNhc2VzIGZvciBUZXh0Qm94V2l0aEJ1dHRvbi5jb21wb25lbnQuanN4JywgKCkgPT4ge1xuICBkZXNjcmliZSgnVW50aSB0ZXN0IGNhc2VzIGZvciA8VGV4dEJveFdpdGhCdXR0b24gLz4nLCAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXIgPSB7fTtcbiAgICBsZXQgcHJvcHM7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBwcm9wcyA9IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdoYW5uYWQnLFxuICAgICAgICBvbkFjdGlvbjogamVzdC5mbigpLFxuICAgICAgICBidXR0b25UZXh0OiAnaGV5IGJ1dHRvbicsXG4gICAgICB9O1xuICAgICAgd3JhcHBlciA9IHNoYWxsb3coPFRleHRCb3hXaXRoQnV0dG9uIHsuLi5wcm9wc30gLz4pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmVuZGVyIGNvbXBvbmVudCB3aXRoIHByb3BzJywgKCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB3cmFwcGVyLmluc3RhbmNlKCkucHJvcHM7XG4gICAgICBleHBlY3Qod3JhcHBlcikudG9CZURlZmluZWQoKTtcbiAgICAgIGV4cGVjdChjb21wb25lbnRQcm9wcy5wbGFjZWhvbGRlcikudG9CZSgnaGFubmFkJyk7XG4gICAgICBleHBlY3QoY29tcG9uZW50UHJvcHMuYnV0dG9uVGV4dCkudG9CZSgnaGV5IGJ1dHRvbicpO1xuICAgICAgZXhwZWN0KHR5cGVvZiBjb21wb25lbnRQcm9wcy5vbkFjdGlvbikudG9CZSgnZnVuY3Rpb24nKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHNpbXVsYXRlIGNoYW5nZSBpbiB0ZXh0IGJveCcsICgpID0+IHtcbiAgICAgIHdyYXBwZXIuZmluZCgnU2VhcmNoJykuc2ltdWxhdGUoJ2NoYW5nZScsIHsgdGFyZ2V0OiB7IHZhbHVlOiAnaGV5IHRleHQnIH0gfSk7XG4gICAgICBjb25zdCBjb21wb25lbnRTdGF0ZSA9IHdyYXBwZXIuaW5zdGFuY2UoKS5zdGF0ZTtcbiAgICAgIGV4cGVjdChjb21wb25lbnRTdGF0ZS52YWx1ZSkudG9CZSgnaGV5IHRleHQnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGNhbGwgb25BY3Rpb24gb24gb25TZWFyY2ggZXZlbnQgY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBvbkFjdGlvbiB9ID0gcHJvcHM7XG4gICAgICB3cmFwcGVyLmluc3RhbmNlKCkub25TdWJtaXQoJ2hleSBoZXknKTtcbiAgICAgIGV4cGVjdChvbkFjdGlvbikudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ2hleSBoZXknKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==