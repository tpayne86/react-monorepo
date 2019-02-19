"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COACH_FILTERS = exports.DUMMY_IMAGE_PLACEHOLDER = exports.TEXTBOX_DEBOUNCE_TIME = void 0;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var TEXTBOX_DEBOUNCE_TIME = 300;
exports.TEXTBOX_DEBOUNCE_TIME = TEXTBOX_DEBOUNCE_TIME;
var DUMMY_IMAGE_PLACEHOLDER = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRui0qU3H754Sulya39NTG7GZ9w48OtvoHXZnK63igQTUiEgDR2tw';
exports.DUMMY_IMAGE_PLACEHOLDER = DUMMY_IMAGE_PLACEHOLDER;
var COACH_FILTERS = [{
  id: 0,
  value: 'Diet Consultant'
}, {
  id: 1,
  value: 'Fitness Trainer'
}, {
  id: 2,
  value: 'Yoga Instructor'
}];
exports.COACH_FILTERS = COACH_FILTERS;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TEXTBOX_DEBOUNCE_TIME, "TEXTBOX_DEBOUNCE_TIME", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/components/components.constants.js");
  reactHotLoader.register(DUMMY_IMAGE_PLACEHOLDER, "DUMMY_IMAGE_PLACEHOLDER", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/components/components.constants.js");
  reactHotLoader.register(COACH_FILTERS, "COACH_FILTERS", "/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/constants/src/components/components.constants.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();