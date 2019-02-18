"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALERT_TYPES = exports.USER_ROLES = exports.TIME_SLOTS = exports.TIME_PARAMS = exports.MONTH_NAMES = exports.ROUTE_ERROR = exports.PROXY_TO = exports.isProd = exports.isDev = exports.USER_ONE_PAS = exports.USER_ONE_NAME = exports.STAGE_ACCESS = void 0;

require("core-js/modules/es6.string.trim");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

/* global process:true */
var _process$env = process.env,
    API_KEY = _process$env.API_KEY,
    PROXY_USER = _process$env.PROXY_USER,
    PROXY_USER_META = _process$env.PROXY_USER_META,
    NODE_ENV = _process$env.NODE_ENV,
    PROXY_ORIGIN = _process$env.PROXY_ORIGIN;
var STAGE_ACCESS = window.atob(API_KEY || '');
exports.STAGE_ACCESS = STAGE_ACCESS;
var USER_ONE_NAME = window.atob(PROXY_USER || '');
exports.USER_ONE_NAME = USER_ONE_NAME;
var USER_ONE_PAS = window.atob(PROXY_USER_META || '');
exports.USER_ONE_PAS = USER_ONE_PAS;
var isDev = NODE_ENV.trim() === 'development';
exports.isDev = isDev;
var isProd = NODE_ENV.trim() === 'production';
exports.isProd = isProd;
var PROXY_TO = PROXY_ORIGIN;
exports.PROXY_TO = PROXY_TO;
var ROUTE_ERROR = {
  INVALID_ROUTE: 'INVALID_ROUTE',
  FORBIDDEN: 'FORBIDDEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND'
};
exports.ROUTE_ERROR = ROUTE_ERROR;
var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.MONTH_NAMES = MONTH_NAMES;
var TIME_PARAMS = {
  AM: 'AM',
  PM: 'PM'
};
exports.TIME_PARAMS = TIME_PARAMS;
var TIME_SLOTS = {
  MORNING: 'Morning Slot',
  AFTERNOON: 'Afternoon Slot',
  EVENING: 'Evening Slot',
  LATE_EVENING: 'Late Evening Slot'
};
exports.TIME_SLOTS = TIME_SLOTS;
var USER_ROLES = {
  CSM: 'csm,',
  USER: 'user',
  ADMIN: 'admin',
  EXPERT: 'expert'
};
exports.USER_ROLES = USER_ROLES;
var ALERT_TYPES = {
  DANGER: 'DANGER',
  WARNING: 'WARNING',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  DISABLE: 'DISABLE'
};
exports.ALERT_TYPES = ALERT_TYPES;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_KEY, "API_KEY", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_USER, "PROXY_USER", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_USER_META, "PROXY_USER_META", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(NODE_ENV, "NODE_ENV", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_ORIGIN, "PROXY_ORIGIN", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(STAGE_ACCESS, "STAGE_ACCESS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(USER_ONE_NAME, "USER_ONE_NAME", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(USER_ONE_PAS, "USER_ONE_PAS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(isDev, "isDev", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(isProd, "isProd", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(PROXY_TO, "PROXY_TO", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(ROUTE_ERROR, "ROUTE_ERROR", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(MONTH_NAMES, "MONTH_NAMES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(TIME_PARAMS, "TIME_PARAMS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(TIME_SLOTS, "TIME_SLOTS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(USER_ROLES, "USER_ROLES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
  reactHotLoader.register(ALERT_TYPES, "ALERT_TYPES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBwLmNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQVBJX0tFWSIsIlBST1hZX1VTRVIiLCJQUk9YWV9VU0VSX01FVEEiLCJOT0RFX0VOViIsIlBST1hZX09SSUdJTiIsIlNUQUdFX0FDQ0VTUyIsIndpbmRvdyIsImF0b2IiLCJVU0VSX09ORV9OQU1FIiwiVVNFUl9PTkVfUEFTIiwiaXNEZXYiLCJ0cmltIiwiaXNQcm9kIiwiUFJPWFlfVE8iLCJST1VURV9FUlJPUiIsIklOVkFMSURfUk9VVEUiLCJGT1JCSURERU4iLCJVTkFVVEhPUklaRUQiLCJOT1RfRk9VTkQiLCJNT05USF9OQU1FUyIsIlRJTUVfUEFSQU1TIiwiQU0iLCJQTSIsIlRJTUVfU0xPVFMiLCJNT1JOSU5HIiwiQUZURVJOT09OIiwiRVZFTklORyIsIkxBVEVfRVZFTklORyIsIlVTRVJfUk9MRVMiLCJDU00iLCJVU0VSIiwiQURNSU4iLCJFWFBFUlQiLCJBTEVSVF9UWVBFUyIsIkRBTkdFUiIsIldBUk5JTkciLCJJTkZPIiwiU1VDQ0VTUyIsIkRJU0FCTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTttQkFHSUEsT0FBTyxDQUFDQyxHO0lBRFZDLE8sZ0JBQUFBLE87SUFBU0MsVSxnQkFBQUEsVTtJQUFZQyxlLGdCQUFBQSxlO0lBQWlCQyxRLGdCQUFBQSxRO0lBQVVDLFksZ0JBQUFBLFk7QUFFM0MsSUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsT0FBTyxJQUFJLEVBQXZCLENBQXJCOztBQUNBLElBQU1RLGFBQWEsR0FBR0YsTUFBTSxDQUFDQyxJQUFQLENBQVlOLFVBQVUsSUFBSSxFQUExQixDQUF0Qjs7QUFDQSxJQUFNUSxZQUFZLEdBQUdILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxlQUFlLElBQUksRUFBL0IsQ0FBckI7O0FBQ0EsSUFBTVEsS0FBSyxHQUFHUCxRQUFRLENBQUNRLElBQVQsT0FBb0IsYUFBbEM7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHVCxRQUFRLENBQUNRLElBQVQsT0FBb0IsWUFBbkM7O0FBQ0EsSUFBTUUsUUFBUSxHQUFHVCxZQUFqQjs7QUFFQSxJQUFNVSxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLGFBQWEsRUFBRSxlQURVO0FBRXpCQyxFQUFBQSxTQUFTLEVBQUUsV0FGYztBQUd6QkMsRUFBQUEsWUFBWSxFQUFFLGNBSFc7QUFJekJDLEVBQUFBLFNBQVMsRUFBRTtBQUpjLENBQXBCOztBQU1BLElBQU1DLFdBQVcsR0FBRyxDQUN6QixTQUR5QixFQUV6QixVQUZ5QixFQUd6QixPQUh5QixFQUl6QixPQUp5QixFQUt6QixLQUx5QixFQU16QixNQU55QixFQU96QixNQVB5QixFQVF6QixRQVJ5QixFQVN6QixXQVR5QixFQVV6QixTQVZ5QixFQVd6QixVQVh5QixFQVl6QixVQVp5QixDQUFwQjs7QUFjQSxJQUFNQyxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLEVBQUUsRUFBRSxJQURxQjtBQUV6QkMsRUFBQUEsRUFBRSxFQUFFO0FBRnFCLENBQXBCOztBQUlBLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsRUFBQUEsT0FBTyxFQUFFLGNBRGU7QUFFeEJDLEVBQUFBLFNBQVMsRUFBRSxnQkFGYTtBQUd4QkMsRUFBQUEsT0FBTyxFQUFFLGNBSGU7QUFJeEJDLEVBQUFBLFlBQVksRUFBRTtBQUpVLENBQW5COztBQU1BLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsRUFBQUEsR0FBRyxFQUFFLE1BRG1CO0FBRXhCQyxFQUFBQSxJQUFJLEVBQUUsTUFGa0I7QUFHeEJDLEVBQUFBLEtBQUssRUFBRSxPQUhpQjtBQUl4QkMsRUFBQUEsTUFBTSxFQUFFO0FBSmdCLENBQW5COztBQU1BLElBQU1DLFdBQVcsR0FBRztBQUN6QkMsRUFBQUEsTUFBTSxFQUFFLFFBRGlCO0FBRXpCQyxFQUFBQSxPQUFPLEVBQUUsU0FGZ0I7QUFHekJDLEVBQUFBLElBQUksRUFBRSxNQUhtQjtBQUl6QkMsRUFBQUEsT0FBTyxFQUFFLFNBSmdCO0FBS3pCQyxFQUFBQSxPQUFPLEVBQUU7QUFMZ0IsQ0FBcEI7Ozs7Ozs7Ozs7OzBCQTdDTHRDLE87MEJBQVNDLFU7MEJBQVlDLGU7MEJBQWlCQyxROzBCQUFVQyxZOzBCQUVyQ0MsWTswQkFDQUcsYTswQkFDQUMsWTswQkFDQUMsSzswQkFDQUUsTTswQkFDQUMsUTswQkFFQUMsVzswQkFNQUssVzswQkFjQUMsVzswQkFJQUcsVTswQkFNQUssVTswQkFNQUssVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBwcm9jZXNzOnRydWUgKi9cbmNvbnN0IHtcbiAgQVBJX0tFWSwgUFJPWFlfVVNFUiwgUFJPWFlfVVNFUl9NRVRBLCBOT0RFX0VOViwgUFJPWFlfT1JJR0lOLFxufSA9IHByb2Nlc3MuZW52O1xuZXhwb3J0IGNvbnN0IFNUQUdFX0FDQ0VTUyA9IHdpbmRvdy5hdG9iKEFQSV9LRVkgfHwgJycpO1xuZXhwb3J0IGNvbnN0IFVTRVJfT05FX05BTUUgPSB3aW5kb3cuYXRvYihQUk9YWV9VU0VSIHx8ICcnKTtcbmV4cG9ydCBjb25zdCBVU0VSX09ORV9QQVMgPSB3aW5kb3cuYXRvYihQUk9YWV9VU0VSX01FVEEgfHwgJycpO1xuZXhwb3J0IGNvbnN0IGlzRGV2ID0gTk9ERV9FTlYudHJpbSgpID09PSAnZGV2ZWxvcG1lbnQnO1xuZXhwb3J0IGNvbnN0IGlzUHJvZCA9IE5PREVfRU5WLnRyaW0oKSA9PT0gJ3Byb2R1Y3Rpb24nO1xuZXhwb3J0IGNvbnN0IFBST1hZX1RPID0gUFJPWFlfT1JJR0lOO1xuXG5leHBvcnQgY29uc3QgUk9VVEVfRVJST1IgPSB7XG4gIElOVkFMSURfUk9VVEU6ICdJTlZBTElEX1JPVVRFJyxcbiAgRk9SQklEREVOOiAnRk9SQklEREVOJyxcbiAgVU5BVVRIT1JJWkVEOiAnVU5BVVRIT1JJWkVEJyxcbiAgTk9UX0ZPVU5EOiAnTk9UX0ZPVU5EJyxcbn07XG5leHBvcnQgY29uc3QgTU9OVEhfTkFNRVMgPSBbXG4gICdKYW51YXJ5JyxcbiAgJ0ZlYnJ1YXJ5JyxcbiAgJ01hcmNoJyxcbiAgJ0FwcmlsJyxcbiAgJ01heScsXG4gICdKdW5lJyxcbiAgJ0p1bHknLFxuICAnQXVndXN0JyxcbiAgJ1NlcHRlbWJlcicsXG4gICdPY3RvYmVyJyxcbiAgJ05vdmVtYmVyJyxcbiAgJ0RlY2VtYmVyJyxcbl07XG5leHBvcnQgY29uc3QgVElNRV9QQVJBTVMgPSB7XG4gIEFNOiAnQU0nLFxuICBQTTogJ1BNJyxcbn07XG5leHBvcnQgY29uc3QgVElNRV9TTE9UUyA9IHtcbiAgTU9STklORzogJ01vcm5pbmcgU2xvdCcsXG4gIEFGVEVSTk9PTjogJ0FmdGVybm9vbiBTbG90JyxcbiAgRVZFTklORzogJ0V2ZW5pbmcgU2xvdCcsXG4gIExBVEVfRVZFTklORzogJ0xhdGUgRXZlbmluZyBTbG90Jyxcbn07XG5leHBvcnQgY29uc3QgVVNFUl9ST0xFUyA9IHtcbiAgQ1NNOiAnY3NtLCcsXG4gIFVTRVI6ICd1c2VyJyxcbiAgQURNSU46ICdhZG1pbicsXG4gIEVYUEVSVDogJ2V4cGVydCcsXG59O1xuZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVTID0ge1xuICBEQU5HRVI6ICdEQU5HRVInLFxuICBXQVJOSU5HOiAnV0FSTklORycsXG4gIElORk86ICdJTkZPJyxcbiAgU1VDQ0VTUzogJ1NVQ0NFU1MnLFxuICBESVNBQkxFOiAnRElTQUJMRScsXG59O1xuIl19