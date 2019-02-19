"use strict";

var _ = require("..");

describe('Unit test cases for Services/utility/objects.js', function () {
  describe('Unit test cases for simpleApiStoreStates', function () {
    var defaultState = {};
    var properties1 = {};
    beforeEach(function () {
      defaultState = {
        testProp: {
          loading: false,
          data: null,
          error: null
        }
      };
      properties1 = {
        loading: true
      };
    });
    it('should return a valid loading state', function () {
      expect(defaultState.testProp.loading).toBe(false);
      var result = (0, _.simpleApiStoreStates)(defaultState, 'testProp', properties1);
      var expected = {
        testProp: {
          loading: true
        }
      };
      expect(result.testProp).toBeDefined();
      expect(result.testProp.loading).toBe(expected.testProp.loading);
    });
    it('should handle wrong props', function () {
      expect(defaultState.testProp).toBeDefined();
      var result = (0, _.simpleApiStoreStates)(defaultState, 'someProps', properties1);
      var expected = {
        testProp: {
          loading: false
        }
      };
      expect(result.testProp).toBeDefined();
      expect(result.testProp.loading).toBe(expected.testProp.loading);
    });
  });
});