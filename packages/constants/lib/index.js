const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.components = exports.app = exports.api = void 0;

const api = _interopRequireWildcard(require('./api/api.endpoints'));

exports.api = api;

const app = _interopRequireWildcard(require('./app/app.constants'));

exports.app = app;

const components = _interopRequireWildcard(
  require('./components/components.constants'),
);

exports.components = components;
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaS9hcGkuZW5kcG9pbnRzJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICcuL2FwcC9hcHAuY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMuY29uc3RhbnRzJztcblxuZXhwb3J0IHsgYXBpLCBhcHAsIGNvbXBvbmVudHMgfTtcblxuLy8gZG9udCBpbXBvcnQgb3IgZXhwb3J0IGFueXRoaW5nIGhlcmUuIHRoaXMgZmlsZSB3aWxsIGJlIGRpY2FyZWQgaW4gZnV0dXJlXG4vLyBhbGwgZXhwb3J0cyBzaG91bGQgYmUgZG9uZSBmcm9tIHRoZSBmb2xkZXJzIG9ubHlcbiJdfQ==
