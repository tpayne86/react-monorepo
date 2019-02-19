require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ALERT_TYPES = exports.USER_ROLES = exports.TIME_SLOTS = exports.TIME_PARAMS = exports.MONTH_NAMES = exports.ROUTE_ERROR = exports.PROXY_TO = exports.isProd = exports.isDev = exports.USER_ONE_PAS = exports.USER_ONE_NAME = exports.STAGE_ACCESS = void 0;

require('core-js/modules/es6.string.trim');

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

/* global process:true */
const _process$env = process.env;

const API_KEY = _process$env.API_KEY;

const PROXY_USER = _process$env.PROXY_USER;

const PROXY_USER_META = _process$env.PROXY_USER_META;

const NODE_ENV = _process$env.NODE_ENV;

const PROXY_ORIGIN = _process$env.PROXY_ORIGIN;
const STAGE_ACCESS = window.atob(API_KEY || '');
exports.STAGE_ACCESS = STAGE_ACCESS;
const USER_ONE_NAME = window.atob(PROXY_USER || '');
exports.USER_ONE_NAME = USER_ONE_NAME;
const USER_ONE_PAS = window.atob(PROXY_USER_META || '');
exports.USER_ONE_PAS = USER_ONE_PAS;
const isDev = NODE_ENV.trim() === 'development';
exports.isDev = isDev;
const isProd = NODE_ENV.trim() === 'production';
exports.isProd = isProd;
const PROXY_TO = PROXY_ORIGIN;
exports.PROXY_TO = PROXY_TO;
const ROUTE_ERROR = {
  INVALID_ROUTE: 'INVALID_ROUTE',
  FORBIDDEN: 'FORBIDDEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
};
exports.ROUTE_ERROR = ROUTE_ERROR;
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
exports.MONTH_NAMES = MONTH_NAMES;
const TIME_PARAMS = {
  AM: 'AM',
  PM: 'PM',
};
exports.TIME_PARAMS = TIME_PARAMS;
const TIME_SLOTS = {
  MORNING: 'Morning Slot',
  AFTERNOON: 'Afternoon Slot',
  EVENING: 'Evening Slot',
  LATE_EVENING: 'Late Evening Slot',
};
exports.TIME_SLOTS = TIME_SLOTS;
const USER_ROLES = {
  CSM: 'csm,',
  USER: 'user',
  ADMIN: 'admin',
  EXPERT: 'expert',
};
exports.USER_ROLES = USER_ROLES;
const ALERT_TYPES = {
  DANGER: 'DANGER',
  WARNING: 'WARNING',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  DISABLE: 'DISABLE',
};
exports.ALERT_TYPES = ALERT_TYPES;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    API_KEY,
    'API_KEY',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    PROXY_USER,
    'PROXY_USER',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    PROXY_USER_META,
    'PROXY_USER_META',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    NODE_ENV,
    'NODE_ENV',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    PROXY_ORIGIN,
    'PROXY_ORIGIN',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    STAGE_ACCESS,
    'STAGE_ACCESS',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    USER_ONE_NAME,
    'USER_ONE_NAME',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    USER_ONE_PAS,
    'USER_ONE_PAS',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    isDev,
    'isDev',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    isProd,
    'isProd',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    PROXY_TO,
    'PROXY_TO',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    ROUTE_ERROR,
    'ROUTE_ERROR',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    MONTH_NAMES,
    'MONTH_NAMES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    TIME_PARAMS,
    'TIME_PARAMS',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    TIME_SLOTS,
    'TIME_SLOTS',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    USER_ROLES,
    'USER_ROLES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
  reactHotLoader.register(
    ALERT_TYPES,
    'ALERT_TYPES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/app/app.constants.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBwLmNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQVBJX0tFWSIsIlBST1hZX1VTRVIiLCJQUk9YWV9VU0VSX01FVEEiLCJOT0RFX0VOViIsIlBST1hZX09SSUdJTiIsIlNUQUdFX0FDQ0VTUyIsIndpbmRvdyIsImF0b2IiLCJVU0VSX09ORV9OQU1FIiwiVVNFUl9PTkVfUEFTIiwiaXNEZXYiLCJ0cmltIiwiaXNQcm9kIiwiUFJPWFlfVE8iLCJST1VURV9FUlJPUiIsIklOVkFMSURfUk9VVEUiLCJGT1JCSURERU4iLCJVTkFVVEhPUklaRUQiLCJOT1RfRk9VTkQiLCJNT05USF9OQU1FUyIsIlRJTUVfUEFSQU1TIiwiQU0iLCJQTSIsIlRJTUVfU0xPVFMiLCJNT1JOSU5HIiwiQUZURVJOT09OIiwiRVZFTklORyIsIkxBVEVfRVZFTklORyIsIlVTRVJfUk9MRVMiLCJDU00iLCJVU0VSIiwiQURNSU4iLCJFWFBFUlQiLCJBTEVSVF9UWVBFUyIsIkRBTkdFUiIsIldBUk5JTkciLCJJTkZPIiwiU1VDQ0VTUyIsIkRJU0FCTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTttQkFPSUEsT0FBTyxDQUFDQyxHO0lBTFZDLE8sZ0JBQUFBLE87SUFDQUMsVSxnQkFBQUEsVTtJQUNBQyxlLGdCQUFBQSxlO0lBQ0FDLFEsZ0JBQUFBLFE7SUFDQUMsWSxnQkFBQUEsWTtBQUVLLElBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLE9BQU8sSUFBSSxFQUF2QixDQUFyQjs7QUFDQSxJQUFNUSxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixVQUFVLElBQUksRUFBMUIsQ0FBdEI7O0FBQ0EsSUFBTVEsWUFBWSxHQUFHSCxNQUFNLENBQUNDLElBQVAsQ0FBWUwsZUFBZSxJQUFJLEVBQS9CLENBQXJCOztBQUNBLElBQU1RLEtBQUssR0FBR1AsUUFBUSxDQUFDUSxJQUFULE9BQW9CLGFBQWxDOztBQUNBLElBQU1DLE1BQU0sR0FBR1QsUUFBUSxDQUFDUSxJQUFULE9BQW9CLFlBQW5DOztBQUNBLElBQU1FLFFBQVEsR0FBR1QsWUFBakI7O0FBRUEsSUFBTVUsV0FBVyxHQUFHO0FBQ3pCQyxFQUFBQSxhQUFhLEVBQUUsZUFEVTtBQUV6QkMsRUFBQUEsU0FBUyxFQUFFLFdBRmM7QUFHekJDLEVBQUFBLFlBQVksRUFBRSxjQUhXO0FBSXpCQyxFQUFBQSxTQUFTLEVBQUU7QUFKYyxDQUFwQjs7QUFNQSxJQUFNQyxXQUFXLEdBQUcsQ0FDekIsU0FEeUIsRUFFekIsVUFGeUIsRUFHekIsT0FIeUIsRUFJekIsT0FKeUIsRUFLekIsS0FMeUIsRUFNekIsTUFOeUIsRUFPekIsTUFQeUIsRUFRekIsUUFSeUIsRUFTekIsV0FUeUIsRUFVekIsU0FWeUIsRUFXekIsVUFYeUIsRUFZekIsVUFaeUIsQ0FBcEI7O0FBY0EsSUFBTUMsV0FBVyxHQUFHO0FBQ3pCQyxFQUFBQSxFQUFFLEVBQUUsSUFEcUI7QUFFekJDLEVBQUFBLEVBQUUsRUFBRTtBQUZxQixDQUFwQjs7QUFJQSxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLE9BQU8sRUFBRSxjQURlO0FBRXhCQyxFQUFBQSxTQUFTLEVBQUUsZ0JBRmE7QUFHeEJDLEVBQUFBLE9BQU8sRUFBRSxjQUhlO0FBSXhCQyxFQUFBQSxZQUFZLEVBQUU7QUFKVSxDQUFuQjs7QUFNQSxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLEdBQUcsRUFBRSxNQURtQjtBQUV4QkMsRUFBQUEsSUFBSSxFQUFFLE1BRmtCO0FBR3hCQyxFQUFBQSxLQUFLLEVBQUUsT0FIaUI7QUFJeEJDLEVBQUFBLE1BQU0sRUFBRTtBQUpnQixDQUFuQjs7QUFNQSxJQUFNQyxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLE1BQU0sRUFBRSxRQURpQjtBQUV6QkMsRUFBQUEsT0FBTyxFQUFFLFNBRmdCO0FBR3pCQyxFQUFBQSxJQUFJLEVBQUUsTUFIbUI7QUFJekJDLEVBQUFBLE9BQU8sRUFBRSxTQUpnQjtBQUt6QkMsRUFBQUEsT0FBTyxFQUFFO0FBTGdCLENBQXBCOzs7Ozs7Ozs7OzswQkFqREx0QyxPOzBCQUNBQyxVOzBCQUNBQyxlOzBCQUNBQyxROzBCQUNBQyxZOzBCQUVXQyxZOzBCQUNBRyxhOzBCQUNBQyxZOzBCQUNBQyxLOzBCQUNBRSxNOzBCQUNBQyxROzBCQUVBQyxXOzBCQU1BSyxXOzBCQWNBQyxXOzBCQUlBRyxVOzBCQU1BSyxVOzBCQU1BSyxXIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHByb2Nlc3M6dHJ1ZSAqL1xuY29uc3Qge1xuICBBUElfS0VZLFxuICBQUk9YWV9VU0VSLFxuICBQUk9YWV9VU0VSX01FVEEsXG4gIE5PREVfRU5WLFxuICBQUk9YWV9PUklHSU4sXG59ID0gcHJvY2Vzcy5lbnY7XG5leHBvcnQgY29uc3QgU1RBR0VfQUNDRVNTID0gd2luZG93LmF0b2IoQVBJX0tFWSB8fCAnJyk7XG5leHBvcnQgY29uc3QgVVNFUl9PTkVfTkFNRSA9IHdpbmRvdy5hdG9iKFBST1hZX1VTRVIgfHwgJycpO1xuZXhwb3J0IGNvbnN0IFVTRVJfT05FX1BBUyA9IHdpbmRvdy5hdG9iKFBST1hZX1VTRVJfTUVUQSB8fCAnJyk7XG5leHBvcnQgY29uc3QgaXNEZXYgPSBOT0RFX0VOVi50cmltKCkgPT09ICdkZXZlbG9wbWVudCc7XG5leHBvcnQgY29uc3QgaXNQcm9kID0gTk9ERV9FTlYudHJpbSgpID09PSAncHJvZHVjdGlvbic7XG5leHBvcnQgY29uc3QgUFJPWFlfVE8gPSBQUk9YWV9PUklHSU47XG5cbmV4cG9ydCBjb25zdCBST1VURV9FUlJPUiA9IHtcbiAgSU5WQUxJRF9ST1VURTogJ0lOVkFMSURfUk9VVEUnLFxuICBGT1JCSURERU46ICdGT1JCSURERU4nLFxuICBVTkFVVEhPUklaRUQ6ICdVTkFVVEhPUklaRUQnLFxuICBOT1RfRk9VTkQ6ICdOT1RfRk9VTkQnLFxufTtcbmV4cG9ydCBjb25zdCBNT05USF9OQU1FUyA9IFtcbiAgJ0phbnVhcnknLFxuICAnRmVicnVhcnknLFxuICAnTWFyY2gnLFxuICAnQXByaWwnLFxuICAnTWF5JyxcbiAgJ0p1bmUnLFxuICAnSnVseScsXG4gICdBdWd1c3QnLFxuICAnU2VwdGVtYmVyJyxcbiAgJ09jdG9iZXInLFxuICAnTm92ZW1iZXInLFxuICAnRGVjZW1iZXInLFxuXTtcbmV4cG9ydCBjb25zdCBUSU1FX1BBUkFNUyA9IHtcbiAgQU06ICdBTScsXG4gIFBNOiAnUE0nLFxufTtcbmV4cG9ydCBjb25zdCBUSU1FX1NMT1RTID0ge1xuICBNT1JOSU5HOiAnTW9ybmluZyBTbG90JyxcbiAgQUZURVJOT09OOiAnQWZ0ZXJub29uIFNsb3QnLFxuICBFVkVOSU5HOiAnRXZlbmluZyBTbG90JyxcbiAgTEFURV9FVkVOSU5HOiAnTGF0ZSBFdmVuaW5nIFNsb3QnLFxufTtcbmV4cG9ydCBjb25zdCBVU0VSX1JPTEVTID0ge1xuICBDU006ICdjc20sJyxcbiAgVVNFUjogJ3VzZXInLFxuICBBRE1JTjogJ2FkbWluJyxcbiAgRVhQRVJUOiAnZXhwZXJ0Jyxcbn07XG5leHBvcnQgY29uc3QgQUxFUlRfVFlQRVMgPSB7XG4gIERBTkdFUjogJ0RBTkdFUicsXG4gIFdBUk5JTkc6ICdXQVJOSU5HJyxcbiAgSU5GTzogJ0lORk8nLFxuICBTVUNDRVNTOiAnU1VDQ0VTUycsXG4gIERJU0FCTEU6ICdESVNBQkxFJyxcbn07XG4iXX0=
