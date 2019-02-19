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