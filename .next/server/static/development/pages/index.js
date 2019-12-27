module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Burger/index.js":
/*!************************************!*\
  !*** ./components/Burger/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/Burger/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Burger = ({
  open,
  setOpen
}) => {
  return __jsx("div", {
    open: open,
    onClick: () => setOpen(!open),
    className: "jsx-3038229573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3038229573" + " " + ((open ? 'trans1' : 'notrans1') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3038229573" + " " + ((open ? 'trans2' : 'notrans2') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3038229573" + " " + ((open ? 'trans3' : 'notrans3') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3038229573",
    __self: undefined
  }, "div.jsx-3038229573{position:relative;top:8px;right:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;}div.jsx-3038229573:focus{outline:none;}span.jsx-3038229573{width:2rem;height:2px;background:rgba(255,255,255,.5);border-radius:10px;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;position:relative;-webkit-transform-origin:1px;-ms-transform-origin:1px;transform-origin:1px;}.notrans1.jsx-3038229573{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.notrans2.jsx-3038229573{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.notrans3.jsx-3038229573{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.trans1.jsx-3038229573{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background:#ba0c2f;}.trans2.jsx-3038229573{opacity:0;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px);background:#ba0c2f;}.trans3.jsx-3038229573{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);background:#ba0c2f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL0J1cmdlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0IsQUFHNkIsQUFnQkgsQUFJRixBQVNXLEFBSVYsQUFLVSxBQUlJLEFBS2QsQUFNZSxVQW5CRCxBQWNHLENBM0JsQixFQUpiLEtBaEJRLElBcUIwQixJQXBCdkIsV0FDRSxpQkFvQlEsa0JBT25CLEFBU0EsQ0FmMkIsV0FtQlAsR0FXQSxPQW5CcEIsU0FTQSxBQUtvQixHQU1wQixLQW5Eb0IsV0E4Q3BCLGFBekJrQixrQkFDRyxvQ0FyQk0sdUNBc0IzQixvRkFyQlMsV0FDQyxZQUNXLHVCQUNYLFlBQ0csZUFDTCxVQUNDLFdBQ1giLCJmaWxlIjoiL1VzZXJzL3lkZXJ6L0RvY3VtZW50cy9XaGl0ZWJvYXJkL2NvbXBvbmVudHMvQnVyZ2VyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCdXJnZXIgPSAoeyBvcGVuLCBzZXRPcGVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvcGVuPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KCBvcGVuID8gJ3RyYW5zMScgOiAnbm90cmFuczEnICl9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KCBvcGVuID8gJ3RyYW5zMicgOiAnbm90cmFuczInICl9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KCBvcGVuID8gJ3RyYW5zMycgOiAnbm90cmFuczMnICl9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGl2OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTsgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vdHJhbnMxe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAubm90cmFuczJ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAubm90cmFuczN7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHJhbnMxIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNiYTBjMmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnRyYW5zMiB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojYmEwYzJmO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC50cmFuczMge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNiYTBjMmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgQnVyZ2VyOyJdfQ== */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Burger/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./components/Logo/index.js":
/*!**********************************!*\
  !*** ./components/Logo/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/Logo/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Logo = props => __jsx("span", {
  className: "jsx-1432168614" + " " + "whiteboard",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-1432168614",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, props.name), __jsx("img", {
  src: "data:image/svg+xml;base64,CjxpbWcgc3R5bGU9IndpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7IiBzcmM9Ii8vY2RuLm9ubGluZXdlYmZvbnRzLmNvbS9zdmcvaW1nXzQ5MjY3Ni5wbmciIGFsdD0iRSBDIEciPgogIA==",
  width: "16",
  height: "16",
  className: "jsx-1432168614",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1432168614",
  __self: undefined
}, ".whiteboard.jsx-1432168614{display:inline-block;height:auto;margin:0;padding:.85em 1em .25em 1em;background:#212529;border-color:#fff;font-family:Ubuntu,sans-serif;font-weight:400;color:#ba0c2f;-webkit-transition:all 150ms ease;transition:all 150ms ease;-webkit-text-decoration:none;text-decoration:none;line-height:1.42857;text-align:center;vertical-align:middle;cursor:pointer;text-transform:uppercase;border:1px solid transparent;border-radius:0;white-space:nowrap;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.0rem;}.whiteboard.jsx-1432168614:hover{color:#A81209;}img.jsx-1432168614{display:inline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL0xvZ28vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzhCLEFBd0JULEFBR0EsY0FGaEIsQ0FHQSxNQTNCZ0IsWUFDSCxTQUNtQiw0QkFDVCxtQkFDRCxrQkFDWSw4QkFDZCxnQkFDRixjQUNZLDREQUNMLGtEQUNELG9CQUNGLGtCQUNJLHNCQUNQLGVBQ1UseUJBQ0ksNkJBQ2IsZ0JBQ0csbUJBQ0EsNkZBQ0YsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL0xvZ28vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExvZ28gPSAoIHByb3BzICkgPT4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlYm9hcmRcIj4gXG4gICAgPHNwYW4+e3Byb3BzLm5hbWV9PC9zcGFuPlxuICAgIDxpbWcgc3JjPSdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LENqeHBiV2NnYzNSNWJHVTlJbmRwWkhSb09pQXhNREFsT3lCb1pXbG5hSFE2SUdGMWRHODdJR1pzYjJGME9pQnNaV1owTzJKaFkydG5jbTkxYm1RdGFXMWhaMlU2SUc1dmJtVTdJaUJ6Y21NOUlpOHZZMlJ1TG05dWJHbHVaWGRsWW1admJuUnpMbU52YlM5emRtY3ZhVzFuWHpRNU1qWTNOaTV3Ym1jaUlHRnNkRDBpUlNCRElFY2lQZ29nSUE9PScgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyAvPlxuICAgIFxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC53aGl0ZWJvYXJke1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAuODVlbSAxZW0gLjI1ZW0gMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICNiYTBjMmY7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIH1cbiAgICBcbiAgICAud2hpdGVib2FyZDpob3ZlcntcbiAgICAgIGNvbG9yOiAjQTgxMjA5O1xuICAgIH1cbiAgICBpbWd7XG4gICAgICBkaXNwbGF5OmlubGluZTtcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287Il19 */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Logo/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Stat/Cards/index.js":
/*!****************************************!*\
  !*** ./components/Stat/Cards/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/Stat/Cards/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Cards = props => __jsx("div", {
  className: "jsx-1541007436" + " " + "table",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "hello cards", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1541007436",
  __self: undefined
}, ".table.jsx-1541007436{border-top:1px solid #ddd;border-bottom:1px solid #ddd;border-radius:4px 4px 4px 4px;margin:10px 0;padding:10px 0;font-family:Ubuntu,sans-serif;text-transform:uppercase;}th.jsx-1541007436{background:#0056b8;color:white;padding:10px 40px;}th.jsx-1541007436:first-child{border-radius:4px 0 0 0;}th.jsx-1541007436:last-child{border-radius:0 4px 0 0;}tr.jsx-1541007436{text-align:center;}tr.jsx-1541007436:last-child td.jsx-1541007436:first-child{border-radius:0 0 0 4px;}tr.jsx-1541007436:last-child td.jsx-1541007436:last-child{border-radius:0 0 4px 0;}td.jsx-1541007436{padding:10px 10px;}tr.jsx-1541007436:nth-child(odd){background:rgb(243,243,243);}tr.jsx-1541007436:hover{color:#ba0c2f;cursor:pointer;background:#fffecf;}.image-container.jsx-1541007436 img.jsx-1541007436{width:50px;height:50px;border:5px solid #ddd;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL1N0YXQvQ2FyZHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUk4QixBQVVOLEFBS0ssQUFHQSxBQU1OLEFBR00sQUFHQSxBQUlQLEFBSWEsQUFJakIsQUFNRixXQUNDLEdBTkUsSUFsQmxCLEFBVUEsQ0F4QmUsSUF1Q1csQ0FsQzFCLEFBR0EsQUFTQSxBQUdBLEVBOUJnQyxFQXNDaEMsQ0FLdUIsRUFoQ0YsY0F1Q0MsR0FOdEIsQ0FoQ0EsTUFYaUMsUUFrRE0sc0JBakR0QixjQUNDLGVBQ2dCLDJCQWdEbEMsR0EvQzZCLHlCQUM3QiIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvY29tcG9uZW50cy9TdGF0L0NhcmRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXJkcyA9ICggcHJvcHMgKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cbiAgICBoZWxsbyBjYXJkc1xuICAgICAgICB7LyogPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFydDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TY2FsZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+V2VpZ2h0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlcHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VGltZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5hdGhsZXRlcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxuICAgICAgICAgICAgICAgICAgICAoIDx0ciBrZXk9eyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPjxpbWcgc3JjPXtpdGVtLnBob3RvfSBhbHQ9XCJcIiB3aWR0aD0nNTAnIGhlaWdodD0nNTAnIC8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGluZGV4ICsgMSB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ubmFtZSB9IHsgaXRlbS5zdXJuYW1lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnRydWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmZhbHNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ud2VpZ2h0IH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsgaXRlbS5yZXBzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyBpdGVtLnRpbWUgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+ICkgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+ICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG5cbi50YWJsZXtcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czo0cHggNHB4IDRweCA0cHg7XG4gICAgbWFyZ2luOjEwcHggMDtcbiAgICBwYWRkaW5nOjEwcHggMDtcbiAgICBmb250LWZhbWlseTogVWJ1bnR1LHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi8qIFRhYmxlIGhlYWQgKi9cbnRoe1xuICAgIGJhY2tncm91bmQ6ICMwMDU2Yjg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzoxMHB4IDQwcHg7XG59XG50aDpmaXJzdC1jaGlsZHtcbiAgICBib3JkZXItcmFkaXVzOjRweCAwIDAgMCA7XG59XG50aDpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1yYWRpdXM6MCA0cHggMCAwIDtcbn1cblxuLyogVGFibGUgUm93ICovXG5cbnRye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJhZGl1czowIDAgMCA0cHggO1xufVxudHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1yYWRpdXM6MCAwIDRweCAwIDtcbn1cblxudGR7XG4gICAgcGFkZGluZzoxMHB4IDEwcHg7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpe1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcbn1cblxudHI6aG92ZXJ7XG4gICAgY29sb3I6I2JhMGMyZjtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZWNmO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAxNTBtcyBlYXNlO1xufVxuYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHM7XG4iXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Stat/Cards/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./components/Stat/Pages/index.js":
/*!****************************************!*\
  !*** ./components/Stat/Pages/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/Stat/Pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Pages = props => __jsx("span", {
  onClick: () => props.onClick(props.page),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.children, props.page);

/* harmony default export */ __webpack_exports__["default"] = (Pages);

/***/ }),

/***/ "./components/Stat/Table/index.js":
/*!****************************************!*\
  !*** ./components/Stat/Table/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/Stat/Table/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Table = props => __jsx("div", {
  className: "jsx-1298905701" + " " + "table",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("table", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("thead", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("tr", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "ID"), __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "#"), __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Name"), __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Standart"), __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Scaled"), __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Weight"), __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Reps"), __jsx("th", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Time"))), __jsx("tbody", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, props.athletes.map((item, index) => __jsx("tr", {
  key: index,
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("td", {
  className: "jsx-1298905701" + " " + "image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("img", {
  src: item.photo,
  alt: "",
  width: "50",
  height: "50",
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), __jsx("td", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, index + 1), __jsx("td", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, item.name, " ", item.surname), __jsx("td", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "true"), __jsx("td", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "false"), __jsx("td", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, item.weight), __jsx("td", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, item.reps), __jsx("td", {
  className: "jsx-1298905701",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, item.time))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1298905701",
  __self: undefined
}, ".table.jsx-1298905701{border-top:1px solid #ddd;border-bottom:1px solid #ddd;border-radius:4px 4px 4px 4px;margin:10px 0;padding:10px 0;font-family:Ubuntu,sans-serif;text-transform:uppercase;}th.jsx-1298905701{background:#0056b8;color:white;padding:10px 20px;}th.jsx-1298905701:first-child{border-radius:4px 0 0 0;}th.jsx-1298905701:last-child{border-radius:0 4px 0 0;}tr.jsx-1298905701{text-align:center;}tr.jsx-1298905701:last-child td.jsx-1298905701:first-child{border-radius:0 0 0 4px;}tr.jsx-1298905701:last-child td.jsx-1298905701:last-child{border-radius:0 0 4px 0;}td.jsx-1298905701{padding:10px 20px;}tr.jsx-1298905701:nth-child(odd){background:rgb(243,243,243);}tr.jsx-1298905701:hover{color:#ba0c2f;cursor:pointer;background:#fffecf;}.image-container.jsx-1298905701 img.jsx-1298905701{width:50px;height:50px;border:5px solid #ddd;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL1N0YXQvVGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUk4QixBQVVOLEFBS0ssQUFHQSxBQU1OLEFBR00sQUFHQSxBQUlQLEFBSWEsQUFJakIsQUFNRixXQUNDLEdBTkUsSUFsQmxCLEFBVUEsQ0F4QmUsSUF1Q1csQ0FsQzFCLEFBR0EsQUFTQSxBQUdBLEVBOUJnQyxFQXNDaEMsQ0FLdUIsRUFoQ0YsY0F1Q0MsR0FOdEIsQ0FoQ0EsTUFYaUMsUUFrRE0sc0JBakR0QixjQUNDLGVBQ2dCLDJCQWdEbEMsR0EvQzZCLHlCQUM3QiIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvY29tcG9uZW50cy9TdGF0L1RhYmxlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUYWJsZSA9ICggcHJvcHMgKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFydDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TY2FsZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+V2VpZ2h0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlcHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VGltZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5hdGhsZXRlcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxuICAgICAgICAgICAgICAgICAgICAoIDx0ciBrZXk9eyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPjxpbWcgc3JjPXtpdGVtLnBob3RvfSBhbHQ9XCJcIiB3aWR0aD0nNTAnIGhlaWdodD0nNTAnIC8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGluZGV4ICsgMSB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ubmFtZSB9IHsgaXRlbS5zdXJuYW1lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnRydWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmZhbHNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ud2VpZ2h0IH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsgaXRlbS5yZXBzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyBpdGVtLnRpbWUgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+ICkgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuLnRhYmxle1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICBtYXJnaW46MTBweCAwO1xuICAgIHBhZGRpbmc6MTBweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLyogVGFibGUgaGVhZCAqL1xudGh7XG4gICAgYmFja2dyb3VuZDogIzAwNTZiODtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcbn1cbnRoOmZpcnN0LWNoaWxke1xuICAgIGJvcmRlci1yYWRpdXM6NHB4IDAgMCAwIDtcbn1cbnRoOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJhZGl1czowIDRweCAwIDAgO1xufVxuXG4vKiBUYWJsZSBSb3cgKi9cblxudHJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZHtcbiAgICBib3JkZXItcmFkaXVzOjAgMCAwIDRweCA7XG59XG50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJhZGl1czowIDAgNHB4IDAgO1xufVxuXG50ZHtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG50cjpob3ZlcntcbiAgICBjb2xvcjojYmEwYzJmO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZlY2Y7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDE1MG1zIGVhc2U7XG59XG5gfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Stat/Table/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/Stat/Top/index.js":
/*!**************************************!*\
  !*** ./components/Stat/Top/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/Stat/Top/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Top = ({
  title
}) => __jsx("div", {
  className: "jsx-483712556" + " " + "wraper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-483712556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "TOP ATHLETES OF THE DAY!"), __jsx("div", {
  className: "jsx-483712556" + " " + "top-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-483712556" + " " + "image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  alt: "",
  className: "jsx-483712556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fikowski_1.jpg?itok=qAamk6Gi",
  alt: "",
  className: "jsx-483712556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_vellner.jpg?itok=ehG_HO24",
  alt: "",
  className: "jsx-483712556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/root.jpg?itok=Ur7pmhUR",
  alt: "",
  className: "jsx-483712556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/415f2-P123582_15-184.jpg?itok=A1mziHpJ",
  alt: "",
  className: "jsx-483712556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_pearce.jpg?itok=trIpkwml",
  alt: "",
  className: "jsx-483712556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "483712556",
  __self: undefined
}, ".wraper.jsx-483712556{margin:20px 10px;}.wraper.jsx-483712556 h2.jsx-483712556{font-family:Ubuntu,sans-serif;font-size:1.4rem;margin:0;padding:6px;font-weight:200;margin-bottom:20px;border:1px solid #ddd;border-radius:4px 4px 4px 4px;text-align:center;color:#282828;}.top-row.jsx-483712556{padding:0 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.image-container.jsx-483712556{margin-top:10px;padding:0 15px;display:inline-block;}.image-container.jsx-483712556 img.jsx-483712556{width:100px;height:100px;border:5px solid #ddd;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;}.image-container.jsx-483712556 img.jsx-483712556:hover{width:100px;height:100px;border:5px solid #0056b8;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL1N0YXQvVG9wL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCb0IsQUFHc0IsQUFHYSxBQWNoQixBQU1FLEFBTUosQUFRQSxZQVBDLEFBUUEsR0FuQkEsQ0FLRSxDQXZCbkIsUUE4QjBCLEFBUUcsS0FuQ1IsQ0FxQkksZ0JBcEJiLEFBMkJVLEdBUUEsRUFkdEIsSUFwQmUsU0EyQndCLEdBMUJuQixBQWtDbUIsZ0JBakNoQixLQVlVLGNBVlIsc0JBQ1Esa0JBdUJqQyxHQVFrQixTQTlCSSxNQStCdEIsWUE5QmlCLGNBQ2pCLHlCQU9BIiwiZmlsZSI6Ii9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL1N0YXQvVG9wL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUb3AgPSAoeyB0aXRsZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwZXJcIj5cbiAgICAgICAgPGgyPlRPUCBBVEhMRVRFUyBPRiBUSEUgREFZITwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXJvd1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9nYW1lcy1hc3NldHMuY3Jvc3NmaXQuY29tL3N0eWxlcy9mZWF0dXJlZF9hdGhsZXRlL3MzL2ZlYXR1cmVkX2F0aGxldGUvYXRobGV0ZWhlYWRzaG90X2ZyYXNlci5qcGc/aXRvaz1faHMwRFVDdlwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2FtZXMtYXNzZXRzLmNyb3NzZml0LmNvbS9zdHlsZXMvZmVhdHVyZWRfYXRobGV0ZS9zMy9mZWF0dXJlZF9hdGhsZXRlL2F0aGxldGVoZWFkc2hvdF9maWtvd3NraV8xLmpwZz9pdG9rPXFBYW1rNkdpXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9nYW1lcy1hc3NldHMuY3Jvc3NmaXQuY29tL3N0eWxlcy9mZWF0dXJlZF9hdGhsZXRlL3MzL2ZlYXR1cmVkX2F0aGxldGUvYXRobGV0ZWhlYWRzaG90X3ZlbGxuZXIuanBnP2l0b2s9ZWhHX0hPMjRcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9yb290LmpwZz9pdG9rPVVyN3BtaFVSXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9nYW1lcy1hc3NldHMuY3Jvc3NmaXQuY29tL3N0eWxlcy9mZWF0dXJlZF9hdGhsZXRlL3MzL2ZlYXR1cmVkX2F0aGxldGUvNDE1ZjItUDEyMzU4Ml8xNS0xODQuanBnP2l0b2s9QTFtemlIcEpcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfcGVhcmNlLmpwZz9pdG9rPXRySXBrd21sXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuLndyYXBlcntcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbn1cbi53cmFwZXIgaDJ7XG4gICAgZm9udC1mYW1pbHk6IFVidW50dSxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjYmEwYzJmOyAqL1xuICAgIGJvcmRlcjoxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IzI4MjgyODtcbn1cblxuLnRvcC1yb3d7XG4gICAgcGFkZGluZzowIDIwcHg7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMTUwbXMgZWFzZTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWc6aG92ZXIge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDU2Yjg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAxNTBtcyBlYXNlO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wOyJdfQ== */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Stat/Top/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Top);

/***/ }),

/***/ "./components/Stat/index.js":
/*!**********************************!*\
  !*** ./components/Stat/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages */ "./components/Stat/Pages/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table */ "./components/Stat/Table/index.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cards */ "./components/Stat/Cards/index.js");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Top */ "./components/Stat/Top/index.js");
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/Stat/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const pages = ["Boys", "Girls", "'RXD", "SCALED"];
const athletes = [{
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Evgeniy",
  surname: "Derzhavin",
  isStandart: true,
  weight: 45,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Patrik",
  surname: "Wellner",
  isStandart: true,
  weight: 65,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Brent",
  surname: "Fikowski",
  isStandart: true,
  weight: 75,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Scott",
  surname: "Panchik",
  isStandart: true,
  weight: 45,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Dan",
  surname: "Baley",
  isStandart: true,
  weight: 45,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Evgeniy",
  surname: "Derzhavin",
  isStandart: true,
  weight: 45,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Patrik",
  surname: "Wellner",
  isStandart: true,
  weight: 65,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Brent",
  surname: "Fikowski",
  isStandart: true,
  weight: 75,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Scott",
  surname: "Panchik",
  isStandart: true,
  weight: 45,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Dan",
  surname: "Baley",
  isStandart: true,
  weight: 45,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Evgeniy",
  surname: "Derzhavin",
  isStandart: true,
  weight: 45,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Patrik",
  surname: "Wellner",
  isStandart: true,
  weight: 65,
  reps: 12,
  time: 12
}, {
  photo: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  name: "Brent",
  surname: "Fikowski",
  isStandart: true,
  weight: 75,
  reps: 12,
  time: 12
}];

class Stat extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page) {
    console.log(`hello${page}`);
  }

  render() {
    const {
      screen,
      box
    } = this.props;
    return __jsx("div", {
      className: "jsx-1765702838",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1765702838" + " " + ((screen < 572 ? `stat` : `stat1`) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1765702838" + " " + ((screen <= 572 ? `${box} act` : `${box} act1`) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Leaderboard"), pages.map((item, index) => __jsx("div", {
      key: index,
      className: "jsx-1765702838" + " " + `${box}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_Pages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      page: item,
      onClick: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))), screen <= 576 ? __jsx(_Cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
      athletes: athletes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }) : __jsx(_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      athletes: athletes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1765702838",
      __self: this
    }, ".stat.jsx-1765702838{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;text-align:center;}.stat1.jsx-1765702838{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.boxw.jsx-1765702838{display:inline-block;margin:10px;background-color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:20px;color:black;font-family:Ubuntu,sans-serif;text-transform:uppercase;}.box.jsx-1765702838{display:inline-block;margin:12px;background-color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:10px;color:black;font-family:Ubuntu,sans-serif;text-transform:uppercase;}.page_link.jsx-1765702838:hover{background:#0056b8;color:#fff;cursor:pointer;}.act.jsx-1765702838{background:#0056b8;color:#fff;cursor:pointer;width:89%;}.act1.jsx-1765702838{background:#0056b8;color:#fff;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL1N0YXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Q0QixBQUd1QyxBQUtBLEFBSU8sQUFZQSxBQWVGLEFBTUEsQUFNQSxtQkFYVCxBQU1BLEFBTUEsRUF2Q0MsQUFZQSxTQWdCRyxBQU1BLEFBTUEsR0F2Q1EsQUFZQSxZQWdCMUIsQUFNYSxBQU1iLFVBTEEsQ0FsQ2lDLEFBWUEsQ0F2QlosQUFLckIsa0JBSkEsV0FXeUMsQUFZQSxxQ0FYekIsQUFZQSxhQVhELEFBWUEsWUFYbUIsQUFZQSw4QkFYTCxBQVlBLHlCQVg3QixBQVlBIiwiZmlsZSI6Ii9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL1N0YXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZXMgZnJvbSBcIi4vUGFnZXNcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xuaW1wb3J0IENhcmRzIGZyb20gXCIuL0NhcmRzXCI7XG5pbXBvcnQgVG9wIGZyb20gXCIuL1RvcFwiO1xuXG5jb25zdCBwYWdlcyA9IFsgXCJCb3lzXCIsIFwiR2lybHNcIiwgXCInUlhEXCIsIFwiU0NBTEVEXCIgXTtcbmNvbnN0IGF0aGxldGVzID0gW1xuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJFdmdlbml5XCIsIHN1cm5hbWU6IFwiRGVyemhhdmluXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJQYXRyaWtcIiwgc3VybmFtZTogXCJXZWxsbmVyXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNjUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJCcmVudFwiLCBzdXJuYW1lOiBcIkZpa293c2tpXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNzUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJTY290dFwiLCBzdXJuYW1lOiBcIlBhbmNoaWtcIiwgaXNTdGFuZGFydDogdHJ1ZSwgd2VpZ2h0OiA0NSwgcmVwczogMTIsIHRpbWU6IDEyIH0sXG4gICAgeyBwaG90bzpcImh0dHBzOi8vZ2FtZXMtYXNzZXRzLmNyb3NzZml0LmNvbS9zdHlsZXMvZmVhdHVyZWRfYXRobGV0ZS9zMy9mZWF0dXJlZF9hdGhsZXRlL2F0aGxldGVoZWFkc2hvdF9mcmFzZXIuanBnP2l0b2s9X2hzMERVQ3ZcIixuYW1lOiBcIkRhblwiLCBzdXJuYW1lOiBcIkJhbGV5XCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJFdmdlbml5XCIsIHN1cm5hbWU6IFwiRGVyemhhdmluXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJQYXRyaWtcIiwgc3VybmFtZTogXCJXZWxsbmVyXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNjUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJCcmVudFwiLCBzdXJuYW1lOiBcIkZpa293c2tpXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNzUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJTY290dFwiLCBzdXJuYW1lOiBcIlBhbmNoaWtcIiwgaXNTdGFuZGFydDogdHJ1ZSwgd2VpZ2h0OiA0NSwgcmVwczogMTIsIHRpbWU6IDEyIH0sXG4gICAgeyBwaG90bzpcImh0dHBzOi8vZ2FtZXMtYXNzZXRzLmNyb3NzZml0LmNvbS9zdHlsZXMvZmVhdHVyZWRfYXRobGV0ZS9zMy9mZWF0dXJlZF9hdGhsZXRlL2F0aGxldGVoZWFkc2hvdF9mcmFzZXIuanBnP2l0b2s9X2hzMERVQ3ZcIixuYW1lOiBcIkRhblwiLCBzdXJuYW1lOiBcIkJhbGV5XCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJFdmdlbml5XCIsIHN1cm5hbWU6IFwiRGVyemhhdmluXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJQYXRyaWtcIiwgc3VybmFtZTogXCJXZWxsbmVyXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNjUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJCcmVudFwiLCBzdXJuYW1lOiBcIkZpa293c2tpXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNzUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuXTtcblxuY2xhc3MgU3RhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCggdGhpcyApO1xuICAgIH1cbiAgICBoYW5kbGVDbGljayggcGFnZSApIHtcbiAgICAgICAgY29uc29sZS5sb2coIGBoZWxsbyR7IHBhZ2UgfWAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc2NyZWVuLCBib3ggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8VG9wIC8+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsoIHNjcmVlbiA8IDU3MiA/IGBzdGF0YCA6YHN0YXQxYCl9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyggc2NyZWVuPD0gNTcyID8gYCR7Ym94fSBhY3RgIDpgJHtib3h9IGFjdDFgKX0gPkxlYWRlcmJvYXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2VzLm1hcCggKCBpdGVtLCBpbmRleCApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoIDxkaXYgY2xhc3NOYW1lPXtgJHtib3h9YH0gIGtleT0geyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlcyBwYWdlPXsgaXRlbSB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjcmVlbiA8PSA1NzYgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRzIGF0aGxldGVzPXsgYXRobGV0ZXMgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDogPFRhYmxlIGF0aGxldGVzPXsgYXRobGV0ZXMgfSAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc3RhdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDp3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc3RhdDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmJveHd7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAjOTk5OTk5NjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHggNHB4IDRweCA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzk5OTk5OTY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1LHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucGFnZV9saW5rOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFnZV9saW5rOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNTZiODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFjdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDU2Yjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo4OSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFjdDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1NmI4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXQ7XG4iXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Stat/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Stat);

/***/ }),

/***/ "./components/api.js":
/*!***************************!*\
  !*** ./components/api.js ***!
  \***************************/
/*! exports provided: fetchCircuits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCircuits", function() { return fetchCircuits; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-html-parser */ "node-html-parser");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_1__);


const url = "http://crossfit.rv.ua/";
function fetchCircuits() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(res => res.text()) //;res.text() )
  .then(txt => {
    const root = Object(node_html_parser__WEBPACK_IMPORTED_MODULE_1__["parse"])(txt);
    const data = root.querySelector(".wodster");
    const txt1 = data.toString().split("No Comments</a> </span>")[1].split("</div>")[1];
    const txt2 = txt1.split(">");
    const txt3 = [];
    txt2.forEach(i => {
      const item = i.split("<")[0];
      txt3.push(item);
    });
    txt3.shift();
    txt3.pop();
    return txt3;
  }).catch(e => console.error(e));
}

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo/index.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/components/nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const links = [{
  href: '/',
  label: 'Home'
}, {
  href: '/wod',
  label: 'Wod'
}, // { href: '/about', label: 'About' },
{
  href: '/profile',
  label: 'Profile'
}, {
  href: '/login',
  label: 'Login'
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("nav", {
    className: "jsx-296209057",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-296209057",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "redline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    setOpen: setOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), open ? __jsx("div", {
    className: "jsx-296209057" + " " + 'mobileMenu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, links.map(({
    key,
    href,
    label
  }) => __jsx("li", {
    key: key,
    className: "jsx-296209057",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("a", {
    href: href,
    className: "jsx-296209057",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, label)))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "296209057",
    __self: undefined
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-296209057{text-align:center;background-color:#212529;}ul.jsx-296209057{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0;}nav.jsx-296209057>ul.jsx-296209057{padding:0 16px 7px 0;}li.jsx-296209057{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}a.jsx-296209057{margin:0 5px;padding:.55em 2em;color:rgba(255,255,255,.5);-webkit-text-decoration:none;text-decoration:none;font-weight:400;font-size:1.0rem;text-transform:uppercase;border-left:2px solid transparent;border-right:2px solid transparent;}a.jsx-296209057:hover{border-left:2px solid #ba0c2f;border-right:2px solid #ba0c2f;color:#ba0c2f;border-radius:4px 4px 4px 4px;}.mobileMenu.jsx-296209057{border-top:1px solid rgba(255,255,255,.5);padding:10px 0;z-index:1;}.mobileMenu.jsx-296209057 li.jsx-296209057 a.jsx-296209057{display:inline-block;text-align:center;width:100%;}.mobileMenu.jsx-296209057 li.jsx-296209057 a.jsx-296209057:hover{cursor:pointer;color:white;background-color:#ba0c2f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2dCLEFBR2tCLEFBS1MsQUFJTCxBQU1RLEFBR1IsQUFJQSxBQVdnQixBQU9ZLEFBS3JCLEFBS04sU0FoRFMsSUFxQkwsRUE0QlAsR0E3Q2MsR0FVM0IsQUE4Qm9CLE1BTU0sR0FsQk0sQ0FWSCxRQXVCaEIsR0FOSSxDQWxDakIsT0F5Q0EsRUFLQSxLQVhXLENBakJZLEdBVVIsTUFRZixPQWpDZ0IsQUFTRSxDQWlCYSxlQWhCL0IsS0FqQkEsVUFrQ0EsR0FYa0IsZ0JBQ0MsT0FoQmEsVUFpQk4seUJBQ1Msa0NBQ0MsbUNBQ3BDLFdBbkJVLFNBQ1YiLCJmaWxlIjoiL1VzZXJzL3lkZXJ6L0RvY3VtZW50cy9XaGl0ZWJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuLi9jb21wb25lbnRzL0J1cmdlcidcblxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnLycsIGxhYmVsOiAnSG9tZScgfSxcbiAgeyBocmVmOiAnL3dvZCcsIGxhYmVsOiAnV29kJyB9LFxuICAvLyB7IGhyZWY6ICcvYWJvdXQnLCBsYWJlbDogJ0Fib3V0JyB9LFxuICB7IGhyZWY6ICcvcHJvZmlsZScsIGxhYmVsOiAnUHJvZmlsZScgfSxcbiAgeyBocmVmOiAnL2xvZ2luJywgbGFiZWw6ICdMb2dpbicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuXG5jb25zdCBOYXYgPSAoICkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbnJldHVybiAoXG4gIDxuYXY+XG4gICAgPHVsPlxuICAgIDxMb2dvIG5hbWU9XCJyZWRsaW5lXCIvPlxuICAgICAgPEJ1cmdlciBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufS8+XG4gICAgPC91bD5cbiAgICB7IG9wZW4gPyA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlTWVudSc+XG4gICAgICB7IGxpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9kaXY+IDogbnVsbCB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggN3B4IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgcGFkZGluZzogLjU1ZW0gMmVtO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgYTpob3ZlcntcbiAgICAgICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkICNiYTBjMmY7XG4gICAgICAgIGJvcmRlci1yaWdodDoycHggc29saWQgI2JhMGMyZjtcbiAgICAgICAgY29sb3I6I2JhMGMyZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo0cHggNHB4IDRweCA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5tb2JpbGVNZW51e1xuICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB6LWluZGV4OjE7XG4gICAgICB9XG4gICAgICAubW9iaWxlTWVudSBsaSBheyBcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgIH1cbiAgICAgIC5tb2JpbGVNZW51IGxpIGE6aG92ZXJ7IFxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2JhMGMyZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKX1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/Profile.js":
/*!**************************!*\
  !*** ./pages/Profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
var _jsxFileName = "/Users/yderz/Documents/Whiteboard/pages/Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Profile = props => __jsx("div", {
  className: "jsx-3274237356" + " " + 'profile',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-3274237356",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Home"), __jsx("link", {
  rel: "icon",
  href: "/favicon.ico",
  className: "jsx-3274237356",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), props.small ? __jsx("div", {
  className: "jsx-3274237356" + " " + (props.box || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3274237356" + " " + 'card',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-3274237356",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Hello profile there!"), __jsx("p", {
  className: "jsx-3274237356",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))) : __jsx("div", {
  className: "jsx-3274237356",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-3274237356" + " " + 'row',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-3274237356",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Hello profile!"), __jsx("p", {
  className: "jsx-3274237356",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3274237356",
  __self: undefined
}, "h1.jsx-3274237356{margin:0;}.profile.jsx-3274237356{color:#333333;padding:10px;}.boxw.jsx-3274237356{width:450px;}.box.jsx-3274237356{width:100%;}.card.jsx-3274237356{background-color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:20px;font-size:14px;line-height:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHaUIsQUFHSyxBQUlGLEFBR0QsQUFHWSxTQVoxQixFQVVFLENBSEEsRUFKYyxTQVVpQixJQVRqQywwQkFVeUMscUNBQ3pCLGFBQ0UsZUFDRSxpQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3lkZXJ6L0RvY3VtZW50cy9XaGl0ZWJvYXJkL3BhZ2VzL1Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuXG5jb25zdCBQcm9maWxlID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAge3Byb3BzLnNtYWxsID8gXG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICAgIDxoMT5IZWxsbyBwcm9maWxlIHRoZXJlITwvaDE+XG4gICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA6XG4gICAgPGRpdj5cbiAgICAgICAgPE5hdi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8gcHJvZmlsZSE8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS48L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBoMXtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgfVxuICAgIC5wcm9maWxle1xuICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgfVxuICAgICAgLmJveHcge1xuICAgICAgICB3aWR0aDo0NTBweDtcbiAgICAgIH1cbiAgICAgIC5ib3gge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgfVxuICAgICAgLmNhcmR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NHB4IDRweCA0cHggNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzk5OTk5OTY2O1xuICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDoyNHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/pages/Profile.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./pages/Wod.js":
/*!**********************!*\
  !*** ./pages/Wod.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/api */ "./components/api.js");

var _jsxFileName = "/Users/yderz/Documents/Whiteboard/pages/Wod.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





class Wod extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      wod: null
    });
  }

  componentDidMount() {// const data = fetchCircuits();
    // data.then(res => {
    //     this.setState({wod:res})
    // })
  }

  render() {
    const wod = this.state.wod;
    const screen = this.props.screen;
    const boxStyle = this.props.box;
    console.log('wod => ', wod);
    return __jsx("div", {
      className: "jsx-1438307436" + " " + 'wod',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Home"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), this.props.small ? __jsx("div", {
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1438307436" + " " + (boxStyle || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Hello wod!"), __jsx("ul", {
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))) : __jsx("div", {
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1438307436" + " " + 'row1',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1438307436",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Hello wod!"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1438307436",
      __self: this
    }, ".wod.jsx-1438307436{background-color:#ba0c2f;color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:20px;font-size:14px;line-height:24px;margin:10px;}.box.jsx-1438307436{width:100%;}.boxw.jsx-1438307436{width:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9Xb2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURzQixBQUd1QyxBQVVmLEFBR0ksV0FGZixDQUdHLGFBYlUsWUFDa0IsOEJBQ1EscUNBQ3pCLGFBQ0UsZUFDRSxpQkFDTCxZQUNmIiwiZmlsZSI6Ii9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9Xb2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IHsgZmV0Y2hDaXJjdWl0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBpJ1xuXG5jbGFzcyBXb2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgc3RhdGUgPXtcbiAgICAgICAgd29kOm51bGxcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGZldGNoQ2lyY3VpdHMoKTtcbiAgICAgICAgLy8gZGF0YS50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHt3b2Q6cmVzfSlcbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHdvZCA9IHRoaXMuc3RhdGUud29kO1xuICAgICAgICBjb25zdCBzY3JlZW4gPSB0aGlzLnByb3BzLnNjcmVlbjtcbiAgICAgICAgY29uc3QgYm94U3R5bGUgPSB0aGlzLnByb3BzLmJveDtcbiAgICAgICAgY29uc29sZS5sb2coJ3dvZCA9PiAnLHdvZClcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dvZCc+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnNtYWxsID8gXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JveFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyB3b2QhPC9oMT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgey8qIHt3b2QgPyBcbiAgICAgICAgICAgICAgICAgICB3b2QubWFwKGkgPT5cbiAgICAgICAgICAgICAgICAgICAgICg8bGk+e2kubmFtZX08L2xpPikpIFxuICAgICAgICAgICAgICAgICAgIDogbnVsbCB9ICovfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxOYXYvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdzEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyB3b2QhPC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud29ke1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiYTBjMmY7XG4gICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4ICM5OTk5OTk2NjtcbiAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luOjEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHcge1xuICAgICAgICAgICAgICAgIHdpZHRoOjQ1MHB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb2QiXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/pages/Wod.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Wod);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_Wod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Wod */ "./pages/Wod.js");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Profile */ "./pages/Profile.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_Stat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Stat */ "./components/Stat/index.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");

var _jsxFileName = "/Users/yderz/Documents/Whiteboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class Home extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      screenWidth: null,
      boxOrder: 'boxw'
    });
  }

  componentDidMount() {
    if (window) {
      let box = 'boxw';
      window.innerWidth <= 576 ? box = 'box' : box = 'boxw';
      this.setState({
        screenWidth: window.innerWidth,
        boxOrder: box
      });
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-906106121",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-906106121",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Home"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: "jsx-906106121",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-906106121" + " " + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-906106121" + " " + 'row',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-906106121" + " " + `${this.state.boxOrder}1`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(_pages_Wod__WEBPACK_IMPORTED_MODULE_4__["default"], {
      small: true,
      screen: this.state.screenWidth,
      box: this.state.boxOrder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-906106121" + " " + `${this.state.boxOrder}2`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_components_Stat__WEBPACK_IMPORTED_MODULE_7__["default"], {
      screen: this.state.screenWidth,
      box: this.state.boxOrder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-906106121" + " " + `${this.state.boxOrder}3`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      small: true,
      screen: this.state.screenWidth,
      box: this.state.boxOrder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "906106121",
      __self: this
    }, ".container.jsx-906106121{width:100%;color:#333;}.row.jsx-906106121{margin:5px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.box1.jsx-906106121{-webkit-order:2;-ms-flex-order:2;order:2;}.box2.jsx-906106121{-webkit-order:3;-ms-flex-order:3;order:3;}.box3.jsx-906106121{-webkit-order:1;-ms-flex-order:1;order:1;}.boxw1.jsx-906106121{-webkit-order:1;-ms-flex-order:1;order:1;}.boxw2.jsx-906106121{-webkit-order:2;-ms-flex-order:2;order:2;}.boxw3.jsx-906106121{-webkit-order:3;-ms-flex-order:3;order:3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRGdCLEFBR29CLEFBSVUsQUFPUixBQUNBLEFBQ0EsQUFFQyxBQUNBLEFBQ0EsV0FoQkgsVUFJRSxDQUhmLG1CQVNnQixBQUNBLEFBQ0EsQUFFQyxBQUNBLEFBQ0Esc0RBWEkscUVBQ0wseURBQ2dCLG1IQUNoQyIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgV29kIGZyb20gJy4uL3BhZ2VzL1dvZCdcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL3BhZ2VzL1Byb2ZpbGUnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IFN0YXQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGF0J1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuLi9jb21wb25lbnRzL0J1cmdlcidcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBzdGF0ZSA9IHtcbiAgICBzY3JlZW5XaWR0aDpudWxsLFxuICAgIGJveE9yZGVyOidib3h3J1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBpZih3aW5kb3cpe1xuICAgICAgbGV0IGJveCA9ICdib3h3JztcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIDw9IDU3NiA/IGJveCA9ICdib3gnIDogYm94ID0gJ2JveHcnO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNjcmVlbldpZHRoOndpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBib3hPcmRlcjogYm94XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbnJlbmRlcigpe1xucmV0dXJuKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXYgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5ib3hPcmRlcn0xYH0+XG4gICAgICAgICA8V29kIFxuICAgICAgICAgICAgc21hbGwgXG4gICAgICAgICAgICBzY3JlZW4gPSB7dGhpcy5zdGF0ZS5zY3JlZW5XaWR0aH1cbiAgICAgICAgICAgIGJveCA9IHt0aGlzLnN0YXRlLmJveE9yZGVyfVxuICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmJveE9yZGVyfTJgfT5cbiAgICAgICAgIDxTdGF0IFxuICAgICAgICAgICAgc2NyZWVuID0ge3RoaXMuc3RhdGUuc2NyZWVuV2lkdGh9IFxuICAgICAgICAgICAgYm94ID0ge3RoaXMuc3RhdGUuYm94T3JkZXJ9XG4gICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYm94T3JkZXJ9M2B9PlxuICAgICAgICAgIDxQcm9maWxlIFxuICAgICAgICAgICAgc21hbGwgXG4gICAgICAgICAgICBzY3JlZW4gPSB7dGhpcy5zdGF0ZS5zY3JlZW5XaWR0aH0gXG4gICAgICAgICAgICBib3ggPSB7dGhpcy5zdGF0ZS5ib3hPcmRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDVweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC5ib3gxIHsgb3JkZXI6IDI7IH1cbiAgICAgIC5ib3gyIHsgb3JkZXI6IDM7IH1cbiAgICAgIC5ib3gzIHsgb3JkZXI6IDE7IH1cblxuICAgICAgLmJveHcxIHsgb3JkZXI6IDE7IH1cbiAgICAgIC5ib3h3MiB7IG9yZGVyOiAyOyB9XG4gICAgICAuYm94dzMgeyBvcmRlcjogMzsgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICkgXG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/pages/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yderz/Documents/Whiteboard/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "node-html-parser":
/*!***********************************!*\
  !*** external "node-html-parser" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-html-parser");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map