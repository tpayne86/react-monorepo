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