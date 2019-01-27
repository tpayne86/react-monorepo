(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (originalModule) {\n  if (!originalModule.webpackPolyfill) {\n    var module = Object.create(originalModule); // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function get() {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function get() {\n        return module.i;\n      }\n    });\n    Object.defineProperty(module, \"exports\", {\n      enumerable: true\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "../../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function get() {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function get() {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "../../memes-ssr/src/App/Layout/index.jsx":
/*!*********************************************************************************************************************!*\
  !*** /Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/index.jsx ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ \"antd/lib/menu\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout */ \"antd/lib/layout\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.scss */ \"../../memes-ssr/src/App/Layout/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\nvar Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Header,\n    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Content,\n    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Footer;\n\nvar AppLayout =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AppLayout, _React$Component);\n\n  function AppLayout(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AppLayout);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(AppLayout).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"toggle\", function () {\n      _this.setState(function (prevState) {\n        return {\n          collapsed: !prevState.collapsed\n        };\n      });\n    });\n\n    _this.state = {\n      collapsed: false\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AppLayout, [{\n    key: \"render\",\n    value: function render() {\n      var children = this.props.children;\n      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        className: \"applayout layout\"\n      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n        href: \"/\",\n        to: \"/\"\n      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"p\", {\n        className: \"logo\"\n      }, \"React Memes\")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {\n        theme: \"dark\",\n        mode: \"horizontal\",\n        defaultSelectedKeys: ['0'],\n        style: {\n          lineHeight: '64px'\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Content, {\n        style: {\n          padding: '0 50px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        className: \"applayout--content\"\n      }, children || '')), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Footer, {\n        style: {\n          textAlign: 'center'\n        }\n      }, \"Hannad Rehman \\xA92019\"));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return AppLayout;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(AppLayout, \"propTypes\", {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node.isRequired\n});\n\nvar _default = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Header, \"Header\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/index.jsx\");\n  reactHotLoader.register(Content, \"Content\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/index.jsx\");\n  reactHotLoader.register(Footer, \"Footer\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/index.jsx\");\n  reactHotLoader.register(AppLayout, \"AppLayout\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/index.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/index.jsx\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../../node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/index.jsx?");

/***/ }),

/***/ "../../memes-ssr/src/App/Layout/styles.scss":
/*!***********************************************************************************************************************!*\
  !*** /Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from /Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/mini-css-extract-plugin/dist/loader.js):\\nTypeError: Cannot assign to read only property 'exports' of object '#<Object>'\\n    at Module.eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_uid.js?:14:16)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_uid.js?:35:30)\\n    at Module.../../../node_modules/core-js/modules/_uid.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:765:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\\n    at Module.eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_wks.js?:13:11)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_wks.js?:43:30)\\n    at Module.../../../node_modules/core-js/modules/_wks.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:799:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_wks-ext.js?:1:13)\\n    at Object.../../../node_modules/core-js/modules/_wks-ext.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:787:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\\n    at Object.eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_wks-define.js?:13:14)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_wks-define.js?:40:30)\\n    at Object.../../../node_modules/core-js/modules/_wks-define.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:776:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/es7.symbol.async-iterator.js?:1:1)\\n    at Object.../../../node_modules/core-js/modules/es7.symbol.async-iterator.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:993:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\\n    at Module.eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/@babel/runtime/helpers/typeof.js?:3:99)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/@babel/runtime/helpers/typeof.js?:62:30)\\n    at Module.../../../node_modules/@babel/runtime/helpers/typeof.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:98:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\\n    at Module.eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_is-object.js?:2:133)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_is-object.js?:8:30)\\n    at Module.../../../node_modules/core-js/modules/_is-object.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:380:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\\n    at Object.eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_inherit-if-required.js?:7:16)\\n    at eval (webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/node_modules/core-js/modules/_inherit-if-required.js?:38:30)\\n    at Object.../../../node_modules/core-js/modules/_inherit-if-required.js (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:345:1)\\n    at __webpack_require__ (/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/css-loader/dist/cjs.js!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/postcss-loader/src/index.js??ref--6-2!/Users/hannadrehman/workspace/open source/projects/react-monorepo/node_modules/sass-loader/lib/loader.js??ref--6-3!/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss:21:30)\");\n\n//# sourceURL=webpack:////Users/hannadrehman/workspace/open_source/projects/react-monorepo/packages/memes-ssr/src/App/Layout/styles.scss?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _meme = _interopRequireDefault(__webpack_require__(/*! ./meme */ \"./api/meme/index.js\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = (0, _express.Router)();\nrouter.use('/', _meme.default);\nvar _default = router;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/api/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/api/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./api/index.js?");

/***/ }),

/***/ "./api/meme/index.js":
/*!***************************!*\
  !*** ./api/meme/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _request = _interopRequireDefault(__webpack_require__(/*! request */ \"request\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = (0, _express.Router)();\nrouter.get('/memes', function (req, res) {\n  (0, _request.default)('https://api.imgflip.com/get_memes').pipe(res);\n});\nvar _default = router;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/api/meme/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/api/meme/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./api/meme/index.js?");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PORTAL_PORT = exports.NODE_ENV = void 0;\n\nvar _dotenv = _interopRequireDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n_dotenv.default.config();\n\nvar _process = process,\n    _process$env = _process.env,\n    NODE_ENV = \"development\",\n    PORTAL_PORT = _process$env.PORTAL_PORT; // eslint-disable-next-line\n\nexports.PORTAL_PORT = PORTAL_PORT;\nexports.NODE_ENV = NODE_ENV;\nconsole.log(\"\\n  NODE_ENV: \".concat(NODE_ENV, \"\\n  PORTAL_PORT: \").concat(PORTAL_PORT, \"\\n\"));\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NODE_ENV, \"NODE_ENV\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/config/index.js\");\n  reactHotLoader.register(PORTAL_PORT, \"PORTAL_PORT\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/config/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./express/config.js":
/*!***************************!*\
  !*** ./express/config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, __dirname) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _morgan = _interopRequireDefault(__webpack_require__(/*! morgan */ \"morgan\"));\n\nvar _compression = _interopRequireDefault(__webpack_require__(/*! compression */ \"compression\"));\n\nvar _helmet = _interopRequireDefault(__webpack_require__(/*! helmet */ \"helmet\"));\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar appConfig = function appConfig(app) {\n  app.use('/', (0, _express.static)(_path.default.resolve(__dirname, '../public')));\n  app.use((0, _morgan.default)('common'));\n  app.use((0, _compression.default)());\n  app.use((0, _helmet.default)());\n};\n\nvar _default = appConfig;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(appConfig, \"appConfig\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/config.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module), \"express\"))\n\n//# sourceURL=webpack:///./express/config.js?");

/***/ }),

/***/ "./express/index.js":
/*!**************************!*\
  !*** ./express/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./config */ \"./express/config.js\"));\n\nvar _proxy = _interopRequireDefault(__webpack_require__(/*! ./proxy */ \"./express/proxy.js\"));\n\nvar _routes = _interopRequireDefault(__webpack_require__(/*! ./routes */ \"./express/routes.js\"));\n\nvar _config2 = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\nvar _listener = __webpack_require__(/*! ../utility/listener */ \"./utility/listener.js\");\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar app = function app() {\n  if (!_config2.NODE_ENV) {\n    throw new Error('NODE_ENV is not set in environment variables');\n  }\n\n  var expressApp = (0, _express.default)();\n  (0, _config.default)(expressApp);\n  (0, _proxy.default)(expressApp);\n  (0, _routes.default)(expressApp);\n\n  if (_config2.PORTAL_PORT) {\n    expressApp.listen(_config2.PORTAL_PORT, _listener.serverListener);\n  } else {\n    throw new Error('Portal port invalid');\n  }\n};\n\nvar _default = app;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./express/index.js?");

/***/ }),

/***/ "./express/proxy.js":
/*!**************************!*\
  !*** ./express/proxy.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _config = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\nvar _proxy = __webpack_require__(/*! ../proxy */ \"./proxy/index.js\");\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar proxy = function proxy(app) {\n  // proxy all apis to localhost if node env is dev.\n  if (_config.NODE_ENV === 'development') {\n    app.use('/api', _proxy.apiProxy);\n    app.use('/static', _proxy.staticProxy);\n  }\n};\n\nvar _default = proxy;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(proxy, \"proxy\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/proxy.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/proxy.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./express/proxy.js?");

/***/ }),

/***/ "./express/routes.js":
/*!***************************!*\
  !*** ./express/routes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! ../api */ \"./api/index.js\"));\n\nvar _routes = _interopRequireDefault(__webpack_require__(/*! ../routes */ \"./routes/index.js\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar routes = function routes(app) {\n  app.use('/apiv2', _api.default);\n  app.use('', _routes.default);\n};\n\nvar _default = routes;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(routes, \"routes\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/express/routes.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./express/routes.js?");

/***/ }),

/***/ "./index-dev.js":
/*!**********************!*\
  !*** ./index-dev.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! ./express */ \"./express/index.js\"));\n\n(0, _express.default)();\n\n//# sourceURL=webpack:///./index-dev.js?");

/***/ }),

/***/ "./proxy/index.js":
/*!************************!*\
  !*** ./proxy/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.staticProxy = exports.apiProxy = void 0;\n\nvar _httpProxyMiddleware = _interopRequireDefault(__webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar apiProxy = (0, _httpProxyMiddleware.default)('/api', {\n  target: 'http://localhost:8000'\n});\nexports.apiProxy = apiProxy;\nvar staticProxy = (0, _httpProxyMiddleware.default)('/static', {\n  target: 'http://localhost:8000'\n});\nexports.staticProxy = staticProxy;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(apiProxy, \"apiProxy\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/proxy/index.js\");\n  reactHotLoader.register(staticProxy, \"staticProxy\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/proxy/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./proxy/index.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _root = _interopRequireDefault(__webpack_require__(/*! ./root */ \"./routes/root/index.js\"));\n\nvar _memes = _interopRequireDefault(__webpack_require__(/*! ./memes */ \"./routes/memes/index.js\"));\n\nvar _todo = _interopRequireDefault(__webpack_require__(/*! ./todo */ \"./routes/todo/index.js\"));\n\nvar _memesSsr = _interopRequireDefault(__webpack_require__(/*! ./memes-ssr */ \"./routes/memes-ssr/index.js\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = (0, _express.Router)();\nrouter.use('/', _root.default);\nrouter.use('/memes', _memes.default);\nrouter.use('/todo', _todo.default);\nrouter.use('/memes-ss', _memesSsr.default);\nvar _default = router;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./routes/memes-ssr/index.js":
/*!***********************************!*\
  !*** ./routes/memes-ssr/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n__webpack_require__(/*! core-js/modules/es6.regexp.replace */ \"core-js/modules/es6.regexp.replace\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _fs = _interopRequireDefault(__webpack_require__(/*! fs */ \"fs\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\n\nvar _Layout = _interopRequireDefault(__webpack_require__(/*! @healthifyme/memes-ssr/src/App/Layout */ \"../../memes-ssr/src/App/Layout/index.jsx\"));\n\nvar _staticPath = _interopRequireDefault(__webpack_require__(/*! ../../utility/static-path */ \"./utility/static-path.js\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n// import App from '../../components/memes-ssr';  // eslint-disable-line\nvar indexFile = (0, _staticPath.default)('memes-ssr');\nvar router = (0, _express.Router)();\nrouter.get('/', function (req, res) {\n  var app = _server.default.renderToString(_react.default.createElement(_Layout.default, null)); // eslint-disable-line\n\n\n  _fs.default.readFile(\"\".concat(indexFile, \"/index.html\"), 'utf8', function (err, file) {\n    if (err) {\n      res.status(500).send('Some error occured');\n    } else {\n      res.send(file.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n    }\n  });\n});\nvar _default = router;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(indexFile, \"indexFile\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/memes-ssr/index.js\");\n  reactHotLoader.register(router, \"router\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/memes-ssr/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/memes-ssr/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./routes/memes-ssr/index.js?");

/***/ }),

/***/ "./routes/memes/index.js":
/*!*******************************!*\
  !*** ./routes/memes/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _staticPath = _interopRequireDefault(__webpack_require__(/*! ../../utility/static-path */ \"./utility/static-path.js\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = (0, _express.Router)();\nvar publicPath = (0, _staticPath.default)('/');\nrouter.get('/', function (req, res) {\n  console.log('/memes');\n  res.sendFile(\"\".concat(publicPath, \"/index.html\"));\n});\nvar _default = router;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/memes/index.js\");\n  reactHotLoader.register(publicPath, \"publicPath\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/memes/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/memes/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./routes/memes/index.js?");

/***/ }),

/***/ "./routes/root/index.js":
/*!******************************!*\
  !*** ./routes/root/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _staticPath = _interopRequireDefault(__webpack_require__(/*! ../../utility/static-path */ \"./utility/static-path.js\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = (0, _express.Router)();\nvar publicPath = (0, _staticPath.default)('/');\nrouter.get('/', function (req, res) {\n  console.log('root');\n  res.sendFile(\"\".concat(publicPath, \"/index.html\"));\n});\nvar _default = router;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/root/index.js\");\n  reactHotLoader.register(publicPath, \"publicPath\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/root/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/root/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./routes/root/index.js?");

/***/ }),

/***/ "./routes/todo/index.js":
/*!******************************!*\
  !*** ./routes/todo/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _staticPath = _interopRequireDefault(__webpack_require__(/*! ../../utility/static-path */ \"./utility/static-path.js\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = (0, _express.Router)();\nvar publicPath = (0, _staticPath.default)('todo-app');\nrouter.get('/', function (req, res) {\n  console.log('todo');\n  res.sendFile(\"\".concat(publicPath, \"/index.html\"));\n});\nvar _default = router;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/todo/index.js\");\n  reactHotLoader.register(publicPath, \"publicPath\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/todo/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/routes/todo/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./routes/todo/index.js?");

/***/ }),

/***/ "./utility/listener.js":
/*!*****************************!*\
  !*** ./utility/listener.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.serverListener = void 0;\n\nvar _config = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar serverListener = function serverListener(err) {\n  if (err) {\n    throw new Error('express bootstrap failed');\n  } else {\n    console.log(\"application listening at \", _config.PORTAL_PORT); //eslint-disable-line\n  }\n};\n\nexports.serverListener = serverListener;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(serverListener, \"serverListener\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/utility/listener.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./utility/listener.js?");

/***/ }),

/***/ "./utility/static-path.js":
/*!********************************!*\
  !*** ./utility/static-path.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, __dirname) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\n__webpack_require__(/*! core-js/modules/es6.object.define-property */ \"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar getStaticPath = function getStaticPath() {\n  var postfix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return _path.default.resolve(__dirname, '../', \"./public/\".concat(postfix));\n};\n\nvar _default = getStaticPath;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getStaticPath, \"getStaticPath\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/utility/static-path.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/hannadrehman/workspace/open source/projects/react-monorepo/packages/server/src/utility/static-path.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"../../../node_modules/webpack/buildin/module.js\")(module), \"utility\"))\n\n//# sourceURL=webpack:///./utility/static-path.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/interopRequireDefault\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/interopRequireDefault%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd/lib/layout\");\n\n//# sourceURL=webpack:///external_%22antd/lib/layout%22?");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd/lib/menu\");\n\n//# sourceURL=webpack:///external_%22antd/lib/menu%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "core-js/modules/es6.object.define-property":
/*!*************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.define-property\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.define-property%22?");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.regexp.replace\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.regexp.replace%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ })

/******/ })));