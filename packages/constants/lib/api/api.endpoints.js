require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.MEMES = exports.BOOK_AUTOMATIC_CONSULTATION = exports.ALL_LANGUAGES = exports.BOOK_SLOT_PREFERED_TIME = exports.BOOK_SLOT = exports.BOOKING_SOURCES = exports.EXPERT_SLOTS = exports.EXPERT_INFO = exports.AVAILABLE_COACHES = exports.ALL_COACHES = exports.USER_PROFILE_EXTRAS = exports.USER_PROFILE = exports.AUTOCOMPLETE_USERS = exports.APP_LOGIN = void 0;

(function() {
  const enterModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).enterModule;
  enterModule && enterModule(module);
})();

const APP_LOGIN = '/api/v1/account/login/';
exports.APP_LOGIN = APP_LOGIN;
const AUTOCOMPLETE_USERS = '/api/v1/account/search/';
exports.AUTOCOMPLETE_USERS = AUTOCOMPLETE_USERS;
const USER_PROFILE = '/api/v1/profile/me';
exports.USER_PROFILE = USER_PROFILE;
const USER_PROFILE_EXTRAS = '/api/v1/profile_extras/me';
exports.USER_PROFILE_EXTRAS = USER_PROFILE_EXTRAS;
const ALL_COACHES = '/api/v1/expert_connect/experts/list/all';
exports.ALL_COACHES = ALL_COACHES;
const AVAILABLE_COACHES = '/api/v1/experts_dashboard/availability';
exports.AVAILABLE_COACHES = AVAILABLE_COACHES;
const EXPERT_INFO = '/api/v1/expert_connect/experts/bio/';
exports.EXPERT_INFO = EXPERT_INFO;
const EXPERT_SLOTS = '/api/v2/booking/slots/all';
exports.EXPERT_SLOTS = EXPERT_SLOTS;
const BOOKING_SOURCES = '/api/v1/booking/sources/';
exports.BOOKING_SOURCES = BOOKING_SOURCES;
const BOOK_SLOT = '/api/v1/booking/slots/book_for_client/';
exports.BOOK_SLOT = BOOK_SLOT;
const BOOK_SLOT_PREFERED_TIME = '/api/v1/event/consultation-call/create/';
exports.BOOK_SLOT_PREFERED_TIME = BOOK_SLOT_PREFERED_TIME;
const ALL_LANGUAGES = '/api/v2/language/choices';
exports.ALL_LANGUAGES = ALL_LANGUAGES;
const BOOK_AUTOMATIC_CONSULTATION = '/api/v2/expert_connect/assign_cc/';
exports.BOOK_AUTOMATIC_CONSULTATION = BOOK_AUTOMATIC_CONSULTATION;
const MEMES = '/apiv2/memes';
exports.MEMES = MEMES;
(function() {
  const reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    APP_LOGIN,
    'APP_LOGIN',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    AUTOCOMPLETE_USERS,
    'AUTOCOMPLETE_USERS',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    USER_PROFILE,
    'USER_PROFILE',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    USER_PROFILE_EXTRAS,
    'USER_PROFILE_EXTRAS',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    ALL_COACHES,
    'ALL_COACHES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    AVAILABLE_COACHES,
    'AVAILABLE_COACHES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    EXPERT_INFO,
    'EXPERT_INFO',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    EXPERT_SLOTS,
    'EXPERT_SLOTS',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    BOOKING_SOURCES,
    'BOOKING_SOURCES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    BOOK_SLOT,
    'BOOK_SLOT',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    BOOK_SLOT_PREFERED_TIME,
    'BOOK_SLOT_PREFERED_TIME',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    ALL_LANGUAGES,
    'ALL_LANGUAGES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    BOOK_AUTOMATIC_CONSULTATION,
    'BOOK_AUTOMATIC_CONSULTATION',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
  reactHotLoader.register(
    MEMES,
    'MEMES',
    '/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js',
  );
})();

(function() {
  const leaveModule = (typeof reactHotLoaderGlobal !== 'undefined'
    ? reactHotLoaderGlobal
    : require('react-hot-loader')
  ).leaveModule;
  leaveModule && leaveModule(module);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYXBpLmVuZHBvaW50cy5qcyJdLCJuYW1lcyI6WyJBUFBfTE9HSU4iLCJBVVRPQ09NUExFVEVfVVNFUlMiLCJVU0VSX1BST0ZJTEUiLCJVU0VSX1BST0ZJTEVfRVhUUkFTIiwiQUxMX0NPQUNIRVMiLCJBVkFJTEFCTEVfQ09BQ0hFUyIsIkVYUEVSVF9JTkZPIiwiRVhQRVJUX1NMT1RTIiwiQk9PS0lOR19TT1VSQ0VTIiwiQk9PS19TTE9UIiwiQk9PS19TTE9UX1BSRUZFUkVEX1RJTUUiLCJBTExfTEFOR1VBR0VTIiwiQk9PS19BVVRPTUFUSUNfQ09OU1VMVEFUSU9OIiwiTUVNRVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsU0FBUyxHQUFHLHdCQUFsQjs7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyx5QkFBM0I7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLG9CQUFyQjs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRywyQkFBNUI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLHlDQUFwQjs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyx3Q0FBMUI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLHFDQUFwQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsMkJBQXJCOztBQUNBLElBQU1DLGVBQWUsR0FBRywwQkFBeEI7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHLHdDQUFsQjs7QUFDQSxJQUFNQyx1QkFBdUIsR0FDbEMseUNBREs7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLDBCQUF0Qjs7QUFDQSxJQUFNQywyQkFBMkIsR0FBRyxtQ0FBcEM7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLGNBQWQ7Ozs7Ozs7Ozs7OzBCQWRNYixTOzBCQUNBQyxrQjswQkFDQUMsWTswQkFDQUMsbUI7MEJBQ0FDLFc7MEJBQ0FDLGlCOzBCQUNBQyxXOzBCQUNBQyxZOzBCQUNBQyxlOzBCQUNBQyxTOzBCQUNBQyx1QjswQkFFQUMsYTswQkFDQUMsMkI7MEJBQ0FDLEsiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBQX0xPR0lOID0gJy9hcGkvdjEvYWNjb3VudC9sb2dpbi8nO1xuZXhwb3J0IGNvbnN0IEFVVE9DT01QTEVURV9VU0VSUyA9ICcvYXBpL3YxL2FjY291bnQvc2VhcmNoLyc7XG5leHBvcnQgY29uc3QgVVNFUl9QUk9GSUxFID0gJy9hcGkvdjEvcHJvZmlsZS9tZSc7XG5leHBvcnQgY29uc3QgVVNFUl9QUk9GSUxFX0VYVFJBUyA9ICcvYXBpL3YxL3Byb2ZpbGVfZXh0cmFzL21lJztcbmV4cG9ydCBjb25zdCBBTExfQ09BQ0hFUyA9ICcvYXBpL3YxL2V4cGVydF9jb25uZWN0L2V4cGVydHMvbGlzdC9hbGwnO1xuZXhwb3J0IGNvbnN0IEFWQUlMQUJMRV9DT0FDSEVTID0gJy9hcGkvdjEvZXhwZXJ0c19kYXNoYm9hcmQvYXZhaWxhYmlsaXR5JztcbmV4cG9ydCBjb25zdCBFWFBFUlRfSU5GTyA9ICcvYXBpL3YxL2V4cGVydF9jb25uZWN0L2V4cGVydHMvYmlvLyc7XG5leHBvcnQgY29uc3QgRVhQRVJUX1NMT1RTID0gJy9hcGkvdjIvYm9va2luZy9zbG90cy9hbGwnO1xuZXhwb3J0IGNvbnN0IEJPT0tJTkdfU09VUkNFUyA9ICcvYXBpL3YxL2Jvb2tpbmcvc291cmNlcy8nO1xuZXhwb3J0IGNvbnN0IEJPT0tfU0xPVCA9ICcvYXBpL3YxL2Jvb2tpbmcvc2xvdHMvYm9va19mb3JfY2xpZW50Lyc7XG5leHBvcnQgY29uc3QgQk9PS19TTE9UX1BSRUZFUkVEX1RJTUUgPVxuICAnL2FwaS92MS9ldmVudC9jb25zdWx0YXRpb24tY2FsbC9jcmVhdGUvJztcbmV4cG9ydCBjb25zdCBBTExfTEFOR1VBR0VTID0gJy9hcGkvdjIvbGFuZ3VhZ2UvY2hvaWNlcyc7XG5leHBvcnQgY29uc3QgQk9PS19BVVRPTUFUSUNfQ09OU1VMVEFUSU9OID0gJy9hcGkvdjIvZXhwZXJ0X2Nvbm5lY3QvYXNzaWduX2NjLyc7XG5leHBvcnQgY29uc3QgTUVNRVMgPSAnL2FwaXYyL21lbWVzJztcbiJdfQ==
