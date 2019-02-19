"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "httpGet", {
  enumerable: true,
  get: function get() {
    return _http.httpGet;
  }
});
Object.defineProperty(exports, "httpPost", {
  enumerable: true,
  get: function get() {
    return _http.httpPost;
  }
});

var _http = require("./lib/http.requestmaker");