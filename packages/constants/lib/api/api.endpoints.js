"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEMES = exports.BOOK_AUTOMATIC_CONSULTATION = exports.ALL_LANGUAGES = exports.BOOK_SLOT_PREFERED_TIME = exports.BOOK_SLOT = exports.BOOKING_SOURCES = exports.EXPERT_SLOTS = exports.EXPERT_INFO = exports.AVAILABLE_COACHES = exports.ALL_COACHES = exports.USER_PROFILE_EXTRAS = exports.USER_PROFILE = exports.AUTOCOMPLETE_USERS = exports.APP_LOGIN = void 0;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var APP_LOGIN = '/api/v1/account/login/';
exports.APP_LOGIN = APP_LOGIN;
var AUTOCOMPLETE_USERS = '/api/v1/account/search/';
exports.AUTOCOMPLETE_USERS = AUTOCOMPLETE_USERS;
var USER_PROFILE = '/api/v1/profile/me';
exports.USER_PROFILE = USER_PROFILE;
var USER_PROFILE_EXTRAS = '/api/v1/profile_extras/me';
exports.USER_PROFILE_EXTRAS = USER_PROFILE_EXTRAS;
var ALL_COACHES = '/api/v1/expert_connect/experts/list/all';
exports.ALL_COACHES = ALL_COACHES;
var AVAILABLE_COACHES = '/api/v1/experts_dashboard/availability';
exports.AVAILABLE_COACHES = AVAILABLE_COACHES;
var EXPERT_INFO = '/api/v1/expert_connect/experts/bio/';
exports.EXPERT_INFO = EXPERT_INFO;
var EXPERT_SLOTS = '/api/v2/booking/slots/all';
exports.EXPERT_SLOTS = EXPERT_SLOTS;
var BOOKING_SOURCES = '/api/v1/booking/sources/';
exports.BOOKING_SOURCES = BOOKING_SOURCES;
var BOOK_SLOT = '/api/v1/booking/slots/book_for_client/';
exports.BOOK_SLOT = BOOK_SLOT;
var BOOK_SLOT_PREFERED_TIME = '/api/v1/event/consultation-call/create/';
exports.BOOK_SLOT_PREFERED_TIME = BOOK_SLOT_PREFERED_TIME;
var ALL_LANGUAGES = '/api/v2/language/choices';
exports.ALL_LANGUAGES = ALL_LANGUAGES;
var BOOK_AUTOMATIC_CONSULTATION = '/api/v2/expert_connect/assign_cc/';
exports.BOOK_AUTOMATIC_CONSULTATION = BOOK_AUTOMATIC_CONSULTATION;
var MEMES = '/apiv2/memes';
exports.MEMES = MEMES;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(APP_LOGIN, "APP_LOGIN", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(AUTOCOMPLETE_USERS, "AUTOCOMPLETE_USERS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(USER_PROFILE, "USER_PROFILE", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(USER_PROFILE_EXTRAS, "USER_PROFILE_EXTRAS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(ALL_COACHES, "ALL_COACHES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(AVAILABLE_COACHES, "AVAILABLE_COACHES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(EXPERT_INFO, "EXPERT_INFO", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(EXPERT_SLOTS, "EXPERT_SLOTS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(BOOKING_SOURCES, "BOOKING_SOURCES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(BOOK_SLOT, "BOOK_SLOT", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(BOOK_SLOT_PREFERED_TIME, "BOOK_SLOT_PREFERED_TIME", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(ALL_LANGUAGES, "ALL_LANGUAGES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(BOOK_AUTOMATIC_CONSULTATION, "BOOK_AUTOMATIC_CONSULTATION", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
  reactHotLoader.register(MEMES, "MEMES", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/api/api.endpoints.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();