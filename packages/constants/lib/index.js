"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = exports.app = exports.api = void 0;

var api = _interopRequireWildcard(require("./api/api.endpoints"));

exports.api = api;

var app = _interopRequireWildcard(require("./app/app.constants"));

exports.app = app;

var components = _interopRequireWildcard(require("./components/components.constants"));

exports.components = components;