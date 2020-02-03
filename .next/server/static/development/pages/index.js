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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Burger = ({
  open,
  setOpen
}) => {
  return __jsx("div", {
    open: open,
    onClick: () => setOpen(!open),
    className: "jsx-3506329044"
  }, __jsx("span", {
    className: "jsx-3506329044" + " " + ((open ? 'trans1' : 'notrans1') || "")
  }), __jsx("span", {
    className: "jsx-3506329044" + " " + ((open ? 'trans2' : 'notrans2') || "")
  }), __jsx("span", {
    className: "jsx-3506329044" + " " + ((open ? 'trans3' : 'notrans3') || "")
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3506329044"
  }, "div.jsx-3506329044{position:relative;top:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;}div.jsx-3506329044:focus{outline:none;}div.jsx-3506329044:hover{cursor:pointer;}span.jsx-3506329044{width:2rem;height:2px;background:#ba0c2f;border-radius:10px;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;position:relative;-webkit-transform-origin:1px;-ms-transform-origin:1px;transform-origin:1px;}.notrans1.jsx-3506329044{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.notrans2.jsx-3506329044{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.notrans3.jsx-3506329044{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.trans1.jsx-3506329044{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background:#ba0c2f;}.trans2.jsx-3506329044{opacity:0;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px);background:#ba0c2f;}.trans3.jsx-3506329044{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);background:#ba0c2f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL0J1cmdlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0IsQUFHNkIsQUFlSCxBQUdDLEFBSUgsQUFTVyxBQUlWLEFBS1UsQUFJSSxBQUtkLEFBTWUsVUFuQkQsQUFjRyxDQTNCbEIsRUFQYixFQUdBLEdBbEJRLElBdUJhLElBdEJSLGVBdUJRLG1CQUNRLFlBTTNCLEFBU0EsWUFJb0IsR0FXQSxPQW5CcEIsTUFsQ29CLEdBMkNwQixBQUtvQixHQU1wQixnQkE5QmtCLEFBeUJsQixrQkF4QnFCLHNDQXhCTSxxQ0F5QjNCLHNGQXhCUyxXQUNDLFlBQ1csdUJBQ1gsWUFDRyxlQUNMLFVBQ0MsV0FDWCIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvY29tcG9uZW50cy9CdXJnZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEJ1cmdlciA9ICh7IG9wZW4sIHNldE9wZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9wZW49e29wZW59IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsoIG9wZW4gPyAndHJhbnMxJyA6ICdub3RyYW5zMScgKX0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsoIG9wZW4gPyAndHJhbnMyJyA6ICdub3RyYW5zMicgKX0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsoIG9wZW4gPyAndHJhbnMzJyA6ICdub3RyYW5zMycgKX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBkaXY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2OmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmEwYzJmOyBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm90cmFuczF7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5ub3RyYW5zMntcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5ub3RyYW5zM3tcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50cmFuczEge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6I2JhMGMyZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAudHJhbnMyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNiYTBjMmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnRyYW5zMyB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6I2JhMGMyZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBCdXJnZXI7Il19 */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Burger/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./components/Dict sync recursive ^\\.\\/.*\\/.*\\.json$":
/*!*************************************************!*\
  !*** ./components/Dict sync ^\.\/.*\/.*\.json$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ua/ua.json": "./components/Dict/ua/ua.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components/Dict sync recursive ^\\.\\/.*\\/.*\\.json$";

/***/ }),

/***/ "./components/Dict/ua/ua.json":
/*!************************************!*\
  !*** ./components/Dict/ua/ua.json ***!
  \************************************/
/*! exports provided: login, main, wod, profile, logout, entr_card, entr_pass, login_msg, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"login\":\"Увійти\",\"main\":\"Головна\",\"wod\":\"WOD\",\"profile\":\"Профіль\",\"logout\":\"Вийти\",\"entr_card\":\"Номер клубної карти:\",\"entr_pass\":\"Особистий пароль:\",\"login_msg\":\"Вкажіть спортзал який ви відвідуєте: \"}");

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Logo = props => __jsx("span", {
  className: "jsx-1831912734" + " " + "whiteboard"
}, __jsx("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "90px",
  height: "20px",
  viewBox: "0 0 2790 910",
  preserveAspectRatio: "xMidYMid meet",
  className: "jsx-1831912734"
}, __jsx("g", {
  id: "layer101",
  fill: "#221f20",
  stroke: "none",
  className: "jsx-1831912734"
}, __jsx("path", {
  d: "M80 480 l0 -210 131 0 c98 0 139 4 164 16 44 20 67 67 63 124 -3 43 -4 45 -38 48 -48 5 -63 22 -19 22 27 1 31 3 17 10 -15 9 -15 12 6 35 13 13 37 56 54 95 l31 70 -68 0 -68 0 -39 -77 c-34 -69 -43 -79 -71 -84 l-33 -6 0 83 0 84 -65 0 -65 0 0 -210z m212 -42 c44 -36 16 -88 -47 -88 l-35 0 0 50 c0 50 0 50 33 50 18 0 40 -6 49 -12z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M550 688 c-1 -2 -2 -50 -3 -107 l-2 -103 150 7 c83 4 152 9 154 11 11 10 -11 14 -90 16 l-84 3 -3 43 -3 42 95 0 96 0 0 45 0 45 -155 0 c-85 0 -155 -1 -155 -2z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M950 685 c-1 -3 -1 -39 -1 -80 0 -41 0 -84 1 -95 0 -17 7 -20 54 -20 30 0 57 4 61 10 3 5 6 30 7 56 l1 46 58 -4 c64 -5 102 -30 113 -74 6 -22 11 -24 72 -24 l66 0 -7 33 c-15 69 -53 115 -117 142 -28 11 -73 15 -173 15 -74 0 -135 -2 -135 -5z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1459 660 c-2 -102 -1 -139 4 -146 3 -5 30 -7 61 -6 l56 4 0 39 0 39 95 0 95 0 0 50 0 50 -155 0 -155 0 -1 -30z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1850 605 l0 -85 65 0 65 0 0 85 0 85 -65 0 -65 0 0 -85z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2379 685 c0 -3 -1 -18 -1 -35 0 -16 1 -54 1 -83 l1 -54 127 -17 c70 -9 129 -18 130 -20 4 -3 -50 -10 -184 -22 l-73 -7 0 -88 0 -89 155 0 155 0 0 40 0 39 -92 3 -93 3 0 35 0 35 88 3 87 3 0 39 0 39 -87 3 -88 3 0 40 0 40 91 3 92 3 4 40 c2 22 2 42 -1 45 -6 6 -311 5 -312 -1z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M550 365 l0 -95 155 0 155 0 0 40 0 40 -67 1 c-124 2 -118 0 -121 42 l-3 37 90 0 c74 0 91 3 91 15 0 13 -23 15 -150 15 l-150 0 0 -95z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M950 365 l0 -95 123 0 c67 0 139 5 161 11 50 14 113 74 131 124 l13 40 -31 5 c-56 9 -98 0 -107 -24 -17 -44 -55 -68 -112 -69 l-53 -2 -3 53 -3 52 -60 0 -59 0 0 -95z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1458 428 c-2 -13 -2 -53 0 -90 l4 -68 59 0 59 0 0 90 0 90 -59 0 c-54 0 -60 -2 -63 -22z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1850 360 l0 -90 65 0 65 0 0 90 0 90 -65 0 -65 0 0 -90z",
  className: "jsx-1831912734"
})), __jsx("g", {
  id: "layer102",
  fill: "#f31c34",
  stroke: "none",
  className: "jsx-1831912734"
}, __jsx("path", {
  d: "M2181 633 c-71 -320 -63 -300 -89 -231 -12 31 -24 69 -28 83 l-6 25 -290 -5 c-219 -5 -293 -3 -304 6 -12 10 -13 9 -8 -4 6 -17 -109 -21 -568 -22 -103 0 -181 -3 -175 -6 7 -4 129 -9 272 -12 143 -3 261 -6 263 -6 2 -1 0 -6 -4 -12 -4 -8 -1 -8 12 -1 19 9 524 13 674 5 l76 -4 58 -205 c33 -112 62 -204 65 -204 3 0 33 104 66 230 33 127 63 230 66 230 4 0 10 -12 13 -26 6 -21 11 -25 34 -20 15 3 68 8 117 12 95 7 94 16 -5 28 -30 4 -60 10 -66 14 -6 4 -33 81 -59 172 -26 91 -50 171 -54 178 -4 7 -31 -94 -60 -225z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1451 654 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2691 644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M543 575 c0 -44 2 -61 4 -37 2 23 2 59 0 80 -2 20 -4 1 -4 -43z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M943 595 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1453 580 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1770 610 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2373 575 c0 -27 2 -38 4 -22 2 15 2 37 0 50 -2 12 -4 0 -4 -28z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1070 580 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2502 555 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M942 510 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M688 513 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M773 513 c15 -2 39 -2 55 0 15 2 2 4 -28 4 -30 0 -43 -2 -27 -4z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1066 503 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M355 470 c3 -5 17 -10 31 -10 13 0 24 5 24 10 0 6 -14 10 -31 10 -17 0 -28 -4 -24 -10z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2553 463 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M544 365 c0 -55 1 -76 3 -47 2 29 2 74 0 100 -2 26 -3 2 -3 -53z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M944 365 c0 -55 1 -76 3 -47 2 29 2 74 0 100 -2 26 -3 2 -3 -53z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1070 430 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2370 420 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2507 423 c-3 -5 23 -7 56 -5 111 5 124 9 35 10 -48 1 -89 -1 -91 -5z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1072 390 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2373 335 c0 -38 2 -53 4 -32 2 20 2 52 0 70 -2 17 -4 1 -4 -38z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2500 390 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1453 325 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M688 353 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M768 353 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1083 353 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M1133 353 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z",
  className: "jsx-1831912734"
}), __jsx("path", {
  d: "M2493 263 c37 -2 97 -2 135 0 37 2 6 3 -68 3 -74 0 -105 -1 -67 -3z",
  className: "jsx-1831912734"
}))), __jsx("span", {
  className: "jsx-1831912734"
}, props.gym ? props.gym : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1831912734"
}, ".whiteboard.jsx-1831912734{display:inline-block;height:auto;margin:0;padding:.85em 0em 0.25em 0em;background:transparent;border-color:#fff;font-family:Ubuntu,sans-serif;font-weight:600;color:#ba0c2f;-webkit-transition:all 150ms ease;transition:all 150ms ease;-webkit-text-decoration:none;text-decoration:none;line-height:1.42857;text-align:center;vertical-align:middle;cursor:pointer;text-transform:uppercase;border:1px solid transparent;border-radius:0;white-space:nowrap;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.0rem;}.whiteboard.jsx-1831912734:hover{color:#A81209;}img.jsx-1831912734{display:inline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL0xvZ28vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURnQixBQUc4QixBQXdCVCxBQUdBLGNBRmhCLENBR0EsTUEzQmdCLFlBQ0gsU0FDb0IsNkJBQ04sdUJBQ0wsa0JBQ1ksOEJBQ2QsZ0JBQ0YsY0FDWSw0REFDTCxrREFDRCxvQkFDRixrQkFDSSxzQkFDUCxlQUNVLHlCQUNJLDZCQUNiLGdCQUNHLG1CQUNBLDZGQUNGLGlCQUNyQiIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvY29tcG9uZW50cy9Mb2dvL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMb2dvID0gKCBwcm9wcyApID0+IChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZWJvYXJkXCI+IFxuICAgIHsvKiA8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XG4gICAgPGltZyBzcmM9Jy4uLy4uL2ltZy9pY29uLnBuZycgd2lkdGg9JzkwJyBoZWlnaHQ9JzI1JyAvPiAqL31cbiAgICA8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI5MHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMjc5MCA5MTBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuPGcgaWQ9XCJsYXllcjEwMVwiIGZpbGw9XCIjMjIxZjIwXCIgc3Ryb2tlPVwibm9uZVwiPlxuIDxwYXRoIGQ9XCJNODAgNDgwIGwwIC0yMTAgMTMxIDAgYzk4IDAgMTM5IDQgMTY0IDE2IDQ0IDIwIDY3IDY3IDYzIDEyNCAtMyA0MyAtNCA0NSAtMzggNDggLTQ4IDUgLTYzIDIyIC0xOSAyMiAyNyAxIDMxIDMgMTcgMTAgLTE1IDkgLTE1IDEyIDYgMzUgMTMgMTMgMzcgNTYgNTQgOTUgbDMxIDcwIC02OCAwIC02OCAwIC0zOSAtNzcgYy0zNCAtNjkgLTQzIC03OSAtNzEgLTg0IGwtMzMgLTYgMCA4MyAwIDg0IC02NSAwIC02NSAwIDAgLTIxMHogbTIxMiAtNDIgYzQ0IC0zNiAxNiAtODggLTQ3IC04OCBsLTM1IDAgMCA1MCBjMCA1MCAwIDUwIDMzIDUwIDE4IDAgNDAgLTYgNDkgLTEyelwiLz5cbiA8cGF0aCBkPVwiTTU1MCA2ODggYy0xIC0yIC0yIC01MCAtMyAtMTA3IGwtMiAtMTAzIDE1MCA3IGM4MyA0IDE1MiA5IDE1NCAxMSAxMSAxMCAtMTEgMTQgLTkwIDE2IGwtODQgMyAtMyA0MyAtMyA0MiA5NSAwIDk2IDAgMCA0NSAwIDQ1IC0xNTUgMCBjLTg1IDAgLTE1NSAtMSAtMTU1IC0yelwiLz5cbiA8cGF0aCBkPVwiTTk1MCA2ODUgYy0xIC0zIC0xIC0zOSAtMSAtODAgMCAtNDEgMCAtODQgMSAtOTUgMCAtMTcgNyAtMjAgNTQgLTIwIDMwIDAgNTcgNCA2MSAxMCAzIDUgNiAzMCA3IDU2IGwxIDQ2IDU4IC00IGM2NCAtNSAxMDIgLTMwIDExMyAtNzQgNiAtMjIgMTEgLTI0IDcyIC0yNCBsNjYgMCAtNyAzMyBjLTE1IDY5IC01MyAxMTUgLTExNyAxNDIgLTI4IDExIC03MyAxNSAtMTczIDE1IC03NCAwIC0xMzUgLTIgLTEzNSAtNXpcIi8+XG4gPHBhdGggZD1cIk0xNDU5IDY2MCBjLTIgLTEwMiAtMSAtMTM5IDQgLTE0NiAzIC01IDMwIC03IDYxIC02IGw1NiA0IDAgMzkgMCAzOSA5NSAwIDk1IDAgMCA1MCAwIDUwIC0xNTUgMCAtMTU1IDAgLTEgLTMwelwiLz5cbiA8cGF0aCBkPVwiTTE4NTAgNjA1IGwwIC04NSA2NSAwIDY1IDAgMCA4NSAwIDg1IC02NSAwIC02NSAwIDAgLTg1elwiLz5cbiA8cGF0aCBkPVwiTTIzNzkgNjg1IGMwIC0zIC0xIC0xOCAtMSAtMzUgMCAtMTYgMSAtNTQgMSAtODMgbDEgLTU0IDEyNyAtMTcgYzcwIC05IDEyOSAtMTggMTMwIC0yMCA0IC0zIC01MCAtMTAgLTE4NCAtMjIgbC03MyAtNyAwIC04OCAwIC04OSAxNTUgMCAxNTUgMCAwIDQwIDAgMzkgLTkyIDMgLTkzIDMgMCAzNSAwIDM1IDg4IDMgODcgMyAwIDM5IDAgMzkgLTg3IDMgLTg4IDMgMCA0MCAwIDQwIDkxIDMgOTIgMyA0IDQwIGMyIDIyIDIgNDIgLTEgNDUgLTYgNiAtMzExIDUgLTMxMiAtMXpcIi8+XG4gPHBhdGggZD1cIk01NTAgMzY1IGwwIC05NSAxNTUgMCAxNTUgMCAwIDQwIDAgNDAgLTY3IDEgYy0xMjQgMiAtMTE4IDAgLTEyMSA0MiBsLTMgMzcgOTAgMCBjNzQgMCA5MSAzIDkxIDE1IDAgMTMgLTIzIDE1IC0xNTAgMTUgbC0xNTAgMCAwIC05NXpcIi8+XG4gPHBhdGggZD1cIk05NTAgMzY1IGwwIC05NSAxMjMgMCBjNjcgMCAxMzkgNSAxNjEgMTEgNTAgMTQgMTEzIDc0IDEzMSAxMjQgbDEzIDQwIC0zMSA1IGMtNTYgOSAtOTggMCAtMTA3IC0yNCAtMTcgLTQ0IC01NSAtNjggLTExMiAtNjkgbC01MyAtMiAtMyA1MyAtMyA1MiAtNjAgMCAtNTkgMCAwIC05NXpcIi8+XG4gPHBhdGggZD1cIk0xNDU4IDQyOCBjLTIgLTEzIC0yIC01MyAwIC05MCBsNCAtNjggNTkgMCA1OSAwIDAgOTAgMCA5MCAtNTkgMCBjLTU0IDAgLTYwIC0yIC02MyAtMjJ6XCIvPlxuIDxwYXRoIGQ9XCJNMTg1MCAzNjAgbDAgLTkwIDY1IDAgNjUgMCAwIDkwIDAgOTAgLTY1IDAgLTY1IDAgMCAtOTB6XCIvPlxuIDwvZz5cbjxnIGlkPVwibGF5ZXIxMDJcIiBmaWxsPVwiI2YzMWMzNFwiIHN0cm9rZT1cIm5vbmVcIj5cbiA8cGF0aCBkPVwiTTIxODEgNjMzIGMtNzEgLTMyMCAtNjMgLTMwMCAtODkgLTIzMSAtMTIgMzEgLTI0IDY5IC0yOCA4MyBsLTYgMjUgLTI5MCAtNSBjLTIxOSAtNSAtMjkzIC0zIC0zMDQgNiAtMTIgMTAgLTEzIDkgLTggLTQgNiAtMTcgLTEwOSAtMjEgLTU2OCAtMjIgLTEwMyAwIC0xODEgLTMgLTE3NSAtNiA3IC00IDEyOSAtOSAyNzIgLTEyIDE0MyAtMyAyNjEgLTYgMjYzIC02IDIgLTEgMCAtNiAtNCAtMTIgLTQgLTggLTEgLTggMTIgLTEgMTkgOSA1MjQgMTMgNjc0IDUgbDc2IC00IDU4IC0yMDUgYzMzIC0xMTIgNjIgLTIwNCA2NSAtMjA0IDMgMCAzMyAxMDQgNjYgMjMwIDMzIDEyNyA2MyAyMzAgNjYgMjMwIDQgMCAxMCAtMTIgMTMgLTI2IDYgLTIxIDExIC0yNSAzNCAtMjAgMTUgMyA2OCA4IDExNyAxMiA5NSA3IDk0IDE2IC01IDI4IC0zMCA0IC02MCAxMCAtNjYgMTQgLTYgNCAtMzMgODEgLTU5IDE3MiAtMjYgOTEgLTUwIDE3MSAtNTQgMTc4IC00IDcgLTMxIC05NCAtNjAgLTIyNXpcIi8+XG4gPHBhdGggZD1cIk0xNDUxIDY1NCBjMCAtMTEgMyAtMTQgNiAtNiAzIDcgMiAxNiAtMSAxOSAtMyA0IC02IC0yIC01IC0xM3pcIi8+XG4gPHBhdGggZD1cIk0yNjkxIDY0NCBjMCAtMTEgMyAtMTQgNiAtNiAzIDcgMiAxNiAtMSAxOSAtMyA0IC02IC0yIC01IC0xM3pcIi8+XG4gPHBhdGggZD1cIk01NDMgNTc1IGMwIC00NCAyIC02MSA0IC0zNyAyIDIzIDIgNTkgMCA4MCAtMiAyMCAtNCAxIC00IC00M3pcIi8+XG4gPHBhdGggZD1cIk05NDMgNTk1IGMwIC0zMyAyIC00NSA0IC0yNyAyIDE4IDIgNDUgMCA2MCAtMiAxNSAtNCAwIC00IC0zM3pcIi8+XG4gPHBhdGggZD1cIk0xNDUzIDU4MCBjMCAtMjUgMiAtMzUgNCAtMjIgMiAxMiAyIDMyIDAgNDUgLTIgMTIgLTQgMiAtNCAtMjN6XCIvPlxuIDxwYXRoIGQ9XCJNMTc3MCA2MTAgYzAgLTcgMyAtMTAgNyAtNyAzIDQgMyAxMCAwIDE0IC00IDMgLTcgMCAtNyAtN3pcIi8+XG4gPHBhdGggZD1cIk0yMzczIDU3NSBjMCAtMjcgMiAtMzggNCAtMjIgMiAxNSAyIDM3IDAgNTAgLTIgMTIgLTQgMCAtNCAtMjh6XCIvPlxuIDxwYXRoIGQ9XCJNMTA3MCA1ODAgYzAgLTcgMyAtMTAgNyAtNyAzIDQgMyAxMCAwIDE0IC00IDMgLTcgMCAtNyAtN3pcIi8+XG4gPHBhdGggZD1cIk0yNTAyIDU1NSBjMCAtMTYgMiAtMjIgNSAtMTIgMiA5IDIgMjMgMCAzMCAtMyA2IC01IC0xIC01IC0xOHpcIi8+XG4gPHBhdGggZD1cIk05NDIgNTEwIGMwIC0xNCAyIC0xOSA1IC0xMiAyIDYgMiAxOCAwIDI1IC0zIDYgLTUgMSAtNSAtMTN6XCIvPlxuIDxwYXRoIGQ9XCJNNjg4IDUxMyBjNiAtMiAxOCAtMiAyNSAwIDYgMyAxIDUgLTEzIDUgLTE0IDAgLTE5IC0yIC0xMiAtNXpcIi8+XG4gPHBhdGggZD1cIk03NzMgNTEzIGMxNSAtMiAzOSAtMiA1NSAwIDE1IDIgMiA0IC0yOCA0IC0zMCAwIC00MyAtMiAtMjcgLTR6XCIvPlxuIDxwYXRoIGQ9XCJNMTA2NiA1MDMgYy02IC0xNCAtNSAtMTUgNSAtNiA3IDcgMTAgMTUgNyAxOCAtMyAzIC05IC0yIC0xMiAtMTJ6XCIvPlxuIDxwYXRoIGQ9XCJNMzU1IDQ3MCBjMyAtNSAxNyAtMTAgMzEgLTEwIDEzIDAgMjQgNSAyNCAxMCAwIDYgLTE0IDEwIC0zMSAxMCAtMTcgMCAtMjggLTQgLTI0IC0xMHpcIi8+XG4gPHBhdGggZD1cIk0yNTUzIDQ2MyBjNCAtMyAxMCAtMyAxNCAwIDMgNCAwIDcgLTcgNyAtNyAwIC0xMCAtMyAtNyAtN3pcIi8+XG4gPHBhdGggZD1cIk01NDQgMzY1IGMwIC01NSAxIC03NiAzIC00NyAyIDI5IDIgNzQgMCAxMDAgLTIgMjYgLTMgMiAtMyAtNTN6XCIvPlxuIDxwYXRoIGQ9XCJNOTQ0IDM2NSBjMCAtNTUgMSAtNzYgMyAtNDcgMiAyOSAyIDc0IDAgMTAwIC0yIDI2IC0zIDIgLTMgLTUzelwiLz5cbiA8cGF0aCBkPVwiTTEwNzAgNDMwIGMwIC03IDMgLTEwIDcgLTcgMyA0IDMgMTAgMCAxNCAtNCAzIC03IDAgLTcgLTd6XCIvPlxuIDxwYXRoIGQ9XCJNMjM3MCA0MjAgYzAgLTcgMyAtMTAgNyAtNyAzIDQgMyAxMCAwIDE0IC00IDMgLTcgMCAtNyAtN3pcIi8+XG4gPHBhdGggZD1cIk0yNTA3IDQyMyBjLTMgLTUgMjMgLTcgNTYgLTUgMTExIDUgMTI0IDkgMzUgMTAgLTQ4IDEgLTg5IC0xIC05MSAtNXpcIi8+XG4gPHBhdGggZD1cIk0xMDcyIDM5MCBjMCAtMTQgMiAtMTkgNSAtMTIgMiA2IDIgMTggMCAyNSAtMyA2IC01IDEgLTUgLTEzelwiLz5cbiA8cGF0aCBkPVwiTTIzNzMgMzM1IGMwIC0zOCAyIC01MyA0IC0zMiAyIDIwIDIgNTIgMCA3MCAtMiAxNyAtNCAxIC00IC0zOHpcIi8+XG4gPHBhdGggZD1cIk0yNTAwIDM5MCBjMCAtNyAzIC0xMCA3IC03IDMgNCAzIDEwIDAgMTQgLTQgMyAtNyAwIC03IC03elwiLz5cbiA8cGF0aCBkPVwiTTE0NTMgMzI1IGMwIC0zMyAyIC00NSA0IC0yNyAyIDE4IDIgNDUgMCA2MCAtMiAxNSAtNCAwIC00IC0zM3pcIi8+XG4gPHBhdGggZD1cIk02ODggMzUzIGM2IC0yIDE4IC0yIDI1IDAgNiAzIDEgNSAtMTMgNSAtMTQgMCAtMTkgLTIgLTEyIC01elwiLz5cbiA8cGF0aCBkPVwiTTc2OCAzNTMgYzE4IC0yIDQ1IC0yIDYwIDAgMTUgMiAwIDQgLTMzIDQgLTMzIDAgLTQ1IC0yIC0yNyAtNHpcIi8+XG4gPHBhdGggZD1cIk0xMDgzIDM1MyBjNCAtMyAxMCAtMyAxNCAwIDMgNCAwIDcgLTcgNyAtNyAwIC0xMCAtMyAtNyAtN3pcIi8+XG4gPHBhdGggZD1cIk0xMTMzIDM1MyBjNCAtMyAxMCAtMyAxNCAwIDMgNCAwIDcgLTcgNyAtNyAwIC0xMCAtMyAtNyAtN3pcIi8+XG4gPHBhdGggZD1cIk0yNDkzIDI2MyBjMzcgLTIgOTcgLTIgMTM1IDAgMzcgMiA2IDMgLTY4IDMgLTc0IDAgLTEwNSAtMSAtNjcgLTN6XCIvPlxuIDwvZz5cblxuPC9zdmc+XG48c3Bhbj57cHJvcHMuZ3ltID8gcHJvcHMuZ3ltIDogJyd9PC9zcGFuPlxuICAgIFxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC53aGl0ZWJvYXJke1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAuODVlbSAwZW0gMC4yNWVtIDBlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dSxzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogI2JhMGMyZjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgfVxuICAgIFxuICAgIC53aGl0ZWJvYXJkOmhvdmVye1xuICAgICAgY29sb3I6ICNBODEyMDk7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9zcGFuPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbzsiXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/Logo/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Logo);

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

/***/ "./components/login/index.js":
/*!***********************************!*\
  !*** ./components/login/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


class Login extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleLogin", e => {
      e.preventDefault();
      this.setState({
        login: btoa(e.target.value)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handlePassword", e => {
      e.preventDefault();
      this.setState({
        password: btoa(e.target.value)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSubmit", () => {
      console.log(this.state);
    });

    this.state = {
      login: null,
      password: null
    };
  }

  render() {
    return __jsx("div", {
      className: "jsx-3523268734"
    }, __jsx("div", {
      className: "jsx-3523268734" + " " + "login_box"
    }, __jsx("label", {
      htmlFor: "login",
      className: "jsx-3523268734"
    }, this.props.txt.entr_card), __jsx("input", {
      type: "text",
      name: "login",
      id: "login",
      onChange: e => this.handleLogin(e),
      className: "jsx-3523268734"
    }), __jsx("br", {
      className: "jsx-3523268734"
    }), __jsx("label", {
      htmlFor: "password",
      className: "jsx-3523268734"
    }, this.props.txt.entr_pass), __jsx("input", {
      type: "password",
      name: "password",
      id: "password",
      onChange: e => this.handlePassword(e),
      className: "jsx-3523268734"
    }), __jsx("br", {
      className: "jsx-3523268734"
    }), __jsx("button", {
      onClick: () => this.handleSubmit(),
      className: "jsx-3523268734" + " " + "butt"
    }, this.props.txt.login)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3523268734"
    }, ".login_box.jsx-3523268734{background-color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:20px;font-size:14px;line-height:24px;}label.jsx-3523268734{font-size:11px;padding-left:2px;color:#999999;}input.jsx-3523268734{background-color:white;border:1px solid #fff;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:10px 10px;width:92%;margin-bottom:20px;}input.jsx-3523268734:focus{outline:none;}.butt.jsx-3523268734{text-transform:uppercase;background-color:#fff;border:1px solid #fff;text-align:center;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #ba0c2f55;padding:10px 10px;width:100%;color:#ba0c2f;margin-top:20px;}.butt.jsx-3523268734:hover{background-color:#ba0c2f;border:1px solid #ba0c2f;color:#fff;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL2xvZ2luL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFHaUMsQUFRTCxBQUtPLEFBU1QsQUFHVyxBQVlBLGFBZDFCLEVBZG1CLFFBUlUsQUFhTixFQVlBLEFBWUcsT0E1QlYsYUFLZSxDQUovQixDQWdCdUIsR0FZWCxHQXJDeUIsUUFzQ3JCLFFBWkcsTUFab0IsQ0F5QnZDLFdBWitCLEdBMUJuQixhQUNFLFNBYUssS0Fhb0IsQ0F6QnZCLFlBYUwsS0FaWCxLQWFvQixjQVlELEtBWG5CLGFBWVksV0FDRyxjQUNFLGdCQUNqQiIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvY29tcG9uZW50cy9sb2dpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9naW46IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxvZ2luID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dpbjpidG9hKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkOmJ0b2EoZS50YXJnZXQudmFsdWUpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9ib3hcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvZ2luXCI+e3RoaXMucHJvcHMudHh0LmVudHJfY2FyZH08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsb2dpblwiIGlkPVwibG9naW5cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlTG9naW4oZSl9IC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnt0aGlzLnByb3BzLnR4dC5lbnRyX3Bhc3N9PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVQYXNzd29yZChlKX0gLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfT57dGhpcy5wcm9wcy50eHQubG9naW59PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxvZ2luX2JveHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6NHB4IDRweCA0cHggNHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAjOTk5OTk5NjY7XG4gICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OjI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHggNHB4IDRweCA0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzk5OTk5OTY2O1xuICAgICAgICAgICAgcGFkZGluZzoxMHB4IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDo5MiU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXR0e1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAjYmEwYzJmNTU7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHggMTBweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBjb2xvcjojYmEwYzJmO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dDpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2JhMGMyZjtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2JhMGMyZjtcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdfQ== */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/login/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Nav = props => {
  const links = [{
    href: '/',
    label: 'Home'
  }, {
    href: '/wod',
    label: 'WOD'
  }, {
    href: '/profile',
    label: 'Profile'
  }, {
    href: '/login',
    label: 'Login'
  }].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("nav", {
    className: "jsx-3146549634"
  }, __jsx("ul", {
    className: "jsx-3146549634" + " " + ((open ? 'open' : '') || "")
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "redline",
    gym: props.gym
  }), __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    setOpen: setOpen
  })), open ? __jsx("div", {
    className: "jsx-3146549634" + " " + 'mobileMenu'
  }, links.map(({
    key,
    href,
    label
  }) => __jsx("li", {
    key: key,
    className: "jsx-3146549634"
  }, __jsx("a", {
    href: href,
    className: "jsx-3146549634"
  }, label)))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3146549634"
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-3146549634{text-align:center;background-color:#fff;}ul.jsx-3146549634{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0;}.open.jsx-3146549634{box-shadow:0px 0px 5px 1px #99999966;}nav.jsx-3146549634>ul.jsx-3146549634{padding:0 10px 0 0;}li.jsx-3146549634{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:16px 8px;border-bottom:1px solid #33333324;}a.jsx-3146549634{margin:0 5px;padding:.55em 2em;color:#ba0c2f;-webkit-text-decoration:none;text-decoration:none;font-weight:400;font-size:1.0rem;text-transform:uppercase;border-left:2px solid transparent;border-right:2px solid transparent;}a.jsx-3146549634:hover{border-left:2px solid #ba0c2f;border-right:2px solid #ba0c2f;color:#fff;border-radius:4px 4px 4px 4px;}.mobileMenu.jsx-3146549634{border-top:1px solid rgba(255,255,255,.5);padding:10px 0;z-index:1;}.mobileMenu.jsx-3146549634 li.jsx-3146549634 a.jsx-3146549634{display:inline-block;text-align:center;width:100%;}.mobileMenu.jsx-3146549634 li.jsx-3146549634 a.jsx-3146549634:hover{cursor:pointer;color:white;background-color:#ba0c2f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBR2tCLEFBS1MsQUFJTCxBQU13QixBQUlsQixBQUdOLEFBS0EsQUFXZ0IsQUFPWSxBQUtyQixBQUtOLFNBckRTLElBMEJMLEVBNEJQLEdBbERXLENBY3hCLEVBK0JvQixNQU1NLEdBbEJNLENBVmhCLE1BYmhCLEVBb0NhLENBN0NiLEVBdUNpQixHQWhCTSxLQXVCdkIsRUFLQSxLQVhXLElBUEMsTUFRWixLQVArQixFQS9CZixBQWFHLGlCQUNnQixJQXJCbkMsQUE0QmtCLE9BV2xCLFNBVm1CLGNBUG5CLEdBUTBCLEdBdEJNLHNCQXVCRyxrQ0FDQyxtQ0FDcEMsd0JBeEJVLFNBQ1YiLCJmaWxlIjoiL1VzZXJzL3lkZXJ6L0RvY3VtZW50cy9XaGl0ZWJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuLi9jb21wb25lbnRzL0J1cmdlcidcblxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHsgaHJlZjogJy8nLCBsYWJlbDogJ0hvbWUnIH0sXG4gICAgeyBocmVmOiAnL3dvZCcsIGxhYmVsOiAnV09EJyB9LFxuICAgIHsgaHJlZjogJy9wcm9maWxlJywgbGFiZWw6ICdQcm9maWxlJyB9LFxuICAgIHsgaHJlZjogJy9sb2dpbicsIGxhYmVsOiAnTG9naW4nIH1cbiAgXS5tYXAobGluayA9PiB7XG4gICAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gICAgcmV0dXJuIGxpbmtcbiAgfSlcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG5yZXR1cm4gKFxuICA8bmF2PlxuICAgIDx1bCBjbGFzc05hbWU9e29wZW4gPyAnb3Blbic6Jyd9PlxuICAgIDxMb2dvIG5hbWU9XCJyZWRsaW5lXCIgZ3ltPXtwcm9wcy5neW19Lz5cbiAgICAgIDxCdXJnZXIgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0vPlxuICAgIDwvdWw+XG4gICAgeyBvcGVuID8gPGRpdiBjbGFzc05hbWU9J21vYmlsZU1lbnUnPlxuICAgICAgeyBsaW5rcy5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvZGl2PiA6IG51bGwgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgIH1cbiAgICAgIC5vcGVue1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzk5OTk5OTY2O1xuICAgICAgfVxuXG4gICAgICBuYXYgPiB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMzMzMzMzMjQ7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgcGFkZGluZzogLjU1ZW0gMmVtO1xuICAgICAgICBjb2xvcjogI2JhMGMyZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICAgICAgICBib3JkZXItbGVmdDoycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDoycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICBhOmhvdmVye1xuICAgICAgICBib3JkZXItbGVmdDoycHggc29saWQgI2JhMGMyZjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjYmEwYzJmO1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZU1lbnV7XG4gICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHotaW5kZXg6MTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGVNZW51IGxpIGF7IFxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgfVxuICAgICAgLm1vYmlsZU1lbnUgbGkgYTpob3ZlcnsgXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojYmEwYzJmO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pfVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ== */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/stat/Cards/index.js":
/*!****************************************!*\
  !*** ./components/stat/Cards/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Cards = props => __jsx("div", {
  className: "jsx-1541007436" + " " + "table"
}, "hello cards", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1541007436"
}, ".table.jsx-1541007436{border-top:1px solid #ddd;border-bottom:1px solid #ddd;border-radius:4px 4px 4px 4px;margin:10px 0;padding:10px 0;font-family:Ubuntu,sans-serif;text-transform:uppercase;}th.jsx-1541007436{background:#0056b8;color:white;padding:10px 40px;}th.jsx-1541007436:first-child{border-radius:4px 0 0 0;}th.jsx-1541007436:last-child{border-radius:0 4px 0 0;}tr.jsx-1541007436{text-align:center;}tr.jsx-1541007436:last-child td.jsx-1541007436:first-child{border-radius:0 0 0 4px;}tr.jsx-1541007436:last-child td.jsx-1541007436:last-child{border-radius:0 0 4px 0;}td.jsx-1541007436{padding:10px 10px;}tr.jsx-1541007436:nth-child(odd){background:rgb(243,243,243);}tr.jsx-1541007436:hover{color:#ba0c2f;cursor:pointer;background:#fffecf;}.image-container.jsx-1541007436 img.jsx-1541007436{width:50px;height:50px;border:5px solid #ddd;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL3N0YXQvQ2FyZHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUk4QixBQVVOLEFBS0ssQUFHQSxBQU1OLEFBR00sQUFHQSxBQUlQLEFBSWEsQUFJakIsQUFNRixXQUNDLEdBTkUsSUFsQmxCLEFBVUEsQ0F4QmUsSUF1Q1csQ0FsQzFCLEFBR0EsQUFTQSxBQUdBLEVBOUJnQyxFQXNDaEMsQ0FLdUIsRUFoQ0YsY0F1Q0MsR0FOdEIsQ0FoQ0EsTUFYaUMsUUFrRE0sc0JBakR0QixjQUNDLGVBQ2dCLDJCQWdEbEMsR0EvQzZCLHlCQUM3QiIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvY29tcG9uZW50cy9zdGF0L0NhcmRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXJkcyA9ICggcHJvcHMgKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cbiAgICBoZWxsbyBjYXJkc1xuICAgICAgICB7LyogPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFydDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TY2FsZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+V2VpZ2h0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlcHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VGltZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5hdGhsZXRlcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxuICAgICAgICAgICAgICAgICAgICAoIDx0ciBrZXk9eyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPjxpbWcgc3JjPXtpdGVtLnBob3RvfSBhbHQ9XCJcIiB3aWR0aD0nNTAnIGhlaWdodD0nNTAnIC8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGluZGV4ICsgMSB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ubmFtZSB9IHsgaXRlbS5zdXJuYW1lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnRydWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmZhbHNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ud2VpZ2h0IH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsgaXRlbS5yZXBzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyBpdGVtLnRpbWUgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+ICkgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+ICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG5cbi50YWJsZXtcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czo0cHggNHB4IDRweCA0cHg7XG4gICAgbWFyZ2luOjEwcHggMDtcbiAgICBwYWRkaW5nOjEwcHggMDtcbiAgICBmb250LWZhbWlseTogVWJ1bnR1LHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi8qIFRhYmxlIGhlYWQgKi9cbnRoe1xuICAgIGJhY2tncm91bmQ6ICMwMDU2Yjg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzoxMHB4IDQwcHg7XG59XG50aDpmaXJzdC1jaGlsZHtcbiAgICBib3JkZXItcmFkaXVzOjRweCAwIDAgMCA7XG59XG50aDpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1yYWRpdXM6MCA0cHggMCAwIDtcbn1cblxuLyogVGFibGUgUm93ICovXG5cbnRye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJhZGl1czowIDAgMCA0cHggO1xufVxudHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1yYWRpdXM6MCAwIDRweCAwIDtcbn1cblxudGR7XG4gICAgcGFkZGluZzoxMHB4IDEwcHg7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpe1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcbn1cblxudHI6aG92ZXJ7XG4gICAgY29sb3I6I2JhMGMyZjtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZWNmO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAxNTBtcyBlYXNlO1xufVxuYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHM7XG4iXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/stat/Cards/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./components/stat/Pages/index.js":
/*!****************************************!*\
  !*** ./components/stat/Pages/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Pages = props => __jsx("span", {
  onClick: () => props.onClick(props.page)
}, props.children, props.page);

/* harmony default export */ __webpack_exports__["default"] = (Pages);

/***/ }),

/***/ "./components/stat/Table/index.js":
/*!****************************************!*\
  !*** ./components/stat/Table/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Table = props => __jsx("div", {
  className: "jsx-1298905701" + " " + "table"
}, __jsx("table", {
  className: "jsx-1298905701"
}, __jsx("thead", {
  className: "jsx-1298905701"
}, __jsx("tr", {
  className: "jsx-1298905701"
}, __jsx("th", {
  className: "jsx-1298905701"
}, "ID"), __jsx("th", {
  className: "jsx-1298905701"
}, "#"), __jsx("th", {
  className: "jsx-1298905701"
}, "Name"), __jsx("th", {
  className: "jsx-1298905701"
}, "Standart"), __jsx("th", {
  className: "jsx-1298905701"
}, "Scaled"), __jsx("th", {
  className: "jsx-1298905701"
}, "Weight"), __jsx("th", {
  className: "jsx-1298905701"
}, "Reps"), __jsx("th", {
  className: "jsx-1298905701"
}, "Time"))), __jsx("tbody", {
  className: "jsx-1298905701"
}, props.athletes.map((item, index) => __jsx("tr", {
  key: index,
  className: "jsx-1298905701"
}, __jsx("td", {
  className: "jsx-1298905701" + " " + "image-container"
}, __jsx("img", {
  src: item.photo,
  alt: "",
  width: "50",
  height: "50",
  className: "jsx-1298905701"
})), __jsx("td", {
  className: "jsx-1298905701"
}, index + 1), __jsx("td", {
  className: "jsx-1298905701"
}, item.name, " ", item.surname), __jsx("td", {
  className: "jsx-1298905701"
}, "true"), __jsx("td", {
  className: "jsx-1298905701"
}, "false"), __jsx("td", {
  className: "jsx-1298905701"
}, item.weight), __jsx("td", {
  className: "jsx-1298905701"
}, item.reps), __jsx("td", {
  className: "jsx-1298905701"
}, item.time))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1298905701"
}, ".table.jsx-1298905701{border-top:1px solid #ddd;border-bottom:1px solid #ddd;border-radius:4px 4px 4px 4px;margin:10px 0;padding:10px 0;font-family:Ubuntu,sans-serif;text-transform:uppercase;}th.jsx-1298905701{background:#0056b8;color:white;padding:10px 20px;}th.jsx-1298905701:first-child{border-radius:4px 0 0 0;}th.jsx-1298905701:last-child{border-radius:0 4px 0 0;}tr.jsx-1298905701{text-align:center;}tr.jsx-1298905701:last-child td.jsx-1298905701:first-child{border-radius:0 0 0 4px;}tr.jsx-1298905701:last-child td.jsx-1298905701:last-child{border-radius:0 0 4px 0;}td.jsx-1298905701{padding:10px 20px;}tr.jsx-1298905701:nth-child(odd){background:rgb(243,243,243);}tr.jsx-1298905701:hover{color:#ba0c2f;cursor:pointer;background:#fffecf;}.image-container.jsx-1298905701 img.jsx-1298905701{width:50px;height:50px;border:5px solid #ddd;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL3N0YXQvVGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUk4QixBQVVOLEFBS0ssQUFHQSxBQU1OLEFBR00sQUFHQSxBQUlQLEFBSWEsQUFJakIsQUFNRixXQUNDLEdBTkUsSUFsQmxCLEFBVUEsQ0F4QmUsSUF1Q1csQ0FsQzFCLEFBR0EsQUFTQSxBQUdBLEVBOUJnQyxFQXNDaEMsQ0FLdUIsRUFoQ0YsY0F1Q0MsR0FOdEIsQ0FoQ0EsTUFYaUMsUUFrRE0sc0JBakR0QixjQUNDLGVBQ2dCLDJCQWdEbEMsR0EvQzZCLHlCQUM3QiIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvY29tcG9uZW50cy9zdGF0L1RhYmxlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUYWJsZSA9ICggcHJvcHMgKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGFuZGFydDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TY2FsZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+V2VpZ2h0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlcHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VGltZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5hdGhsZXRlcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxuICAgICAgICAgICAgICAgICAgICAoIDx0ciBrZXk9eyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPjxpbWcgc3JjPXtpdGVtLnBob3RvfSBhbHQ9XCJcIiB3aWR0aD0nNTAnIGhlaWdodD0nNTAnIC8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGluZGV4ICsgMSB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ubmFtZSB9IHsgaXRlbS5zdXJuYW1lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnRydWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmZhbHNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IGl0ZW0ud2VpZ2h0IH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsgaXRlbS5yZXBzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyBpdGVtLnRpbWUgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+ICkgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuLnRhYmxle1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICBtYXJnaW46MTBweCAwO1xuICAgIHBhZGRpbmc6MTBweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLyogVGFibGUgaGVhZCAqL1xudGh7XG4gICAgYmFja2dyb3VuZDogIzAwNTZiODtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcbn1cbnRoOmZpcnN0LWNoaWxke1xuICAgIGJvcmRlci1yYWRpdXM6NHB4IDAgMCAwIDtcbn1cbnRoOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJhZGl1czowIDRweCAwIDAgO1xufVxuXG4vKiBUYWJsZSBSb3cgKi9cblxudHJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZHtcbiAgICBib3JkZXItcmFkaXVzOjAgMCAwIDRweCA7XG59XG50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJhZGl1czowIDAgNHB4IDAgO1xufVxuXG50ZHtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG50cjpob3ZlcntcbiAgICBjb2xvcjojYmEwYzJmO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZlY2Y7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDE1MG1zIGVhc2U7XG59XG5gfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/stat/Table/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/stat/Top/index.js":
/*!**************************************!*\
  !*** ./components/stat/Top/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Top = ({
  title
}) => __jsx("div", {
  className: "jsx-483712556" + " " + "wraper"
}, __jsx("h2", {
  className: "jsx-483712556"
}, "TOP ATHLETES OF THE DAY!"), __jsx("div", {
  className: "jsx-483712556" + " " + "top-row"
}, __jsx("div", {
  className: "jsx-483712556" + " " + "image-container"
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",
  alt: "",
  className: "jsx-483712556"
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container"
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fikowski_1.jpg?itok=qAamk6Gi",
  alt: "",
  className: "jsx-483712556"
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container"
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_vellner.jpg?itok=ehG_HO24",
  alt: "",
  className: "jsx-483712556"
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container"
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/root.jpg?itok=Ur7pmhUR",
  alt: "",
  className: "jsx-483712556"
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container"
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/415f2-P123582_15-184.jpg?itok=A1mziHpJ",
  alt: "",
  className: "jsx-483712556"
})), __jsx("div", {
  className: "jsx-483712556" + " " + "image-container"
}, __jsx("img", {
  src: "https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_pearce.jpg?itok=trIpkwml",
  alt: "",
  className: "jsx-483712556"
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "483712556"
}, ".wraper.jsx-483712556{margin:20px 10px;}.wraper.jsx-483712556 h2.jsx-483712556{font-family:Ubuntu,sans-serif;font-size:1.4rem;margin:0;padding:6px;font-weight:200;margin-bottom:20px;border:1px solid #ddd;border-radius:4px 4px 4px 4px;text-align:center;color:#282828;}.top-row.jsx-483712556{padding:0 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.image-container.jsx-483712556{margin-top:10px;padding:0 15px;display:inline-block;}.image-container.jsx-483712556 img.jsx-483712556{width:100px;height:100px;border:5px solid #ddd;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;}.image-container.jsx-483712556 img.jsx-483712556:hover{width:100px;height:100px;border:5px solid #0056b8;border-radius:50%;-webkit-transition:border-color 150ms ease;transition:border-color 150ms ease;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL3N0YXQvVG9wL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCb0IsQUFHc0IsQUFHYSxBQWNoQixBQU1FLEFBTUosQUFRQSxZQVBDLEFBUUEsR0FuQkEsQ0FLRSxDQXZCbkIsUUE4QjBCLEFBUUcsS0FuQ1IsQ0FxQkksZ0JBcEJiLEFBMkJVLEdBUUEsRUFkdEIsSUFwQmUsU0EyQndCLEdBMUJuQixBQWtDbUIsZ0JBakNoQixLQVlVLGNBVlIsc0JBQ1Esa0JBdUJqQyxHQVFrQixTQTlCSSxNQStCdEIsWUE5QmlCLGNBQ2pCLHlCQU9BIiwiZmlsZSI6Ii9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL3N0YXQvVG9wL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUb3AgPSAoeyB0aXRsZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwZXJcIj5cbiAgICAgICAgPGgyPlRPUCBBVEhMRVRFUyBPRiBUSEUgREFZITwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXJvd1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9nYW1lcy1hc3NldHMuY3Jvc3NmaXQuY29tL3N0eWxlcy9mZWF0dXJlZF9hdGhsZXRlL3MzL2ZlYXR1cmVkX2F0aGxldGUvYXRobGV0ZWhlYWRzaG90X2ZyYXNlci5qcGc/aXRvaz1faHMwRFVDdlwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2FtZXMtYXNzZXRzLmNyb3NzZml0LmNvbS9zdHlsZXMvZmVhdHVyZWRfYXRobGV0ZS9zMy9mZWF0dXJlZF9hdGhsZXRlL2F0aGxldGVoZWFkc2hvdF9maWtvd3NraV8xLmpwZz9pdG9rPXFBYW1rNkdpXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9nYW1lcy1hc3NldHMuY3Jvc3NmaXQuY29tL3N0eWxlcy9mZWF0dXJlZF9hdGhsZXRlL3MzL2ZlYXR1cmVkX2F0aGxldGUvYXRobGV0ZWhlYWRzaG90X3ZlbGxuZXIuanBnP2l0b2s9ZWhHX0hPMjRcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9yb290LmpwZz9pdG9rPVVyN3BtaFVSXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9nYW1lcy1hc3NldHMuY3Jvc3NmaXQuY29tL3N0eWxlcy9mZWF0dXJlZF9hdGhsZXRlL3MzL2ZlYXR1cmVkX2F0aGxldGUvNDE1ZjItUDEyMzU4Ml8xNS0xODQuanBnP2l0b2s9QTFtemlIcEpcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfcGVhcmNlLmpwZz9pdG9rPXRySXBrd21sXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuLndyYXBlcntcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbn1cbi53cmFwZXIgaDJ7XG4gICAgZm9udC1mYW1pbHk6IFVidW50dSxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjYmEwYzJmOyAqL1xuICAgIGJvcmRlcjoxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IzI4MjgyODtcbn1cblxuLnRvcC1yb3d7XG4gICAgcGFkZGluZzowIDIwcHg7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMTUwbXMgZWFzZTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWc6aG92ZXIge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDU2Yjg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAxNTBtcyBlYXNlO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wOyJdfQ== */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/stat/Top/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Top);

/***/ }),

/***/ "./components/stat/index.js":
/*!**********************************!*\
  !*** ./components/stat/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages */ "./components/stat/Pages/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table */ "./components/stat/Table/index.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cards */ "./components/stat/Cards/index.js");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Top */ "./components/stat/Top/index.js");

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
      className: "jsx-1765702838"
    }, __jsx("div", {
      className: "jsx-1765702838" + " " + ((screen < 572 ? `stat` : `stat1`) || "")
    }, __jsx("span", {
      className: "jsx-1765702838" + " " + ((screen <= 572 ? `${box} act` : `${box} act1`) || "")
    }, "Leaderboard"), pages.map((item, index) => __jsx("div", {
      key: index,
      className: "jsx-1765702838" + " " + `${box}`
    }, __jsx(_Pages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      page: item,
      onClick: this.handleClick
    }))), screen <= 576 ? __jsx(_Cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
      athletes: athletes
    }) : __jsx(_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      athletes: athletes
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1765702838"
    }, ".stat.jsx-1765702838{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;text-align:center;}.stat1.jsx-1765702838{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.boxw.jsx-1765702838{display:inline-block;margin:10px;background-color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:20px;color:black;font-family:Ubuntu,sans-serif;text-transform:uppercase;}.box.jsx-1765702838{display:inline-block;margin:12px;background-color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:10px;color:black;font-family:Ubuntu,sans-serif;text-transform:uppercase;}.page_link.jsx-1765702838:hover{background:#0056b8;color:#fff;cursor:pointer;}.act.jsx-1765702838{background:#0056b8;color:#fff;cursor:pointer;width:89%;}.act1.jsx-1765702838{background:#0056b8;color:#fff;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL3N0YXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Q0QixBQUd1QyxBQUtBLEFBSU8sQUFZQSxBQWVGLEFBTUEsQUFNQSxtQkFYVCxBQU1BLEFBTUEsRUF2Q0MsQUFZQSxTQWdCRyxBQU1BLEFBTUEsR0F2Q1EsQUFZQSxZQWdCMUIsQUFNYSxBQU1iLFVBTEEsQ0FsQ2lDLEFBWUEsQ0F2QlosQUFLckIsa0JBSkEsV0FXeUMsQUFZQSxxQ0FYekIsQUFZQSxhQVhELEFBWUEsWUFYbUIsQUFZQSw4QkFYTCxBQVlBLHlCQVg3QixBQVlBIiwiZmlsZSI6Ii9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9jb21wb25lbnRzL3N0YXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZXMgZnJvbSBcIi4vUGFnZXNcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xuaW1wb3J0IENhcmRzIGZyb20gXCIuL0NhcmRzXCI7XG5pbXBvcnQgVG9wIGZyb20gXCIuL1RvcFwiO1xuXG5jb25zdCBwYWdlcyA9IFsgXCJCb3lzXCIsIFwiR2lybHNcIiwgXCInUlhEXCIsIFwiU0NBTEVEXCIgXTtcbmNvbnN0IGF0aGxldGVzID0gW1xuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJFdmdlbml5XCIsIHN1cm5hbWU6IFwiRGVyemhhdmluXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJQYXRyaWtcIiwgc3VybmFtZTogXCJXZWxsbmVyXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNjUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJCcmVudFwiLCBzdXJuYW1lOiBcIkZpa293c2tpXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNzUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJTY290dFwiLCBzdXJuYW1lOiBcIlBhbmNoaWtcIiwgaXNTdGFuZGFydDogdHJ1ZSwgd2VpZ2h0OiA0NSwgcmVwczogMTIsIHRpbWU6IDEyIH0sXG4gICAgeyBwaG90bzpcImh0dHBzOi8vZ2FtZXMtYXNzZXRzLmNyb3NzZml0LmNvbS9zdHlsZXMvZmVhdHVyZWRfYXRobGV0ZS9zMy9mZWF0dXJlZF9hdGhsZXRlL2F0aGxldGVoZWFkc2hvdF9mcmFzZXIuanBnP2l0b2s9X2hzMERVQ3ZcIixuYW1lOiBcIkRhblwiLCBzdXJuYW1lOiBcIkJhbGV5XCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJFdmdlbml5XCIsIHN1cm5hbWU6IFwiRGVyemhhdmluXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJQYXRyaWtcIiwgc3VybmFtZTogXCJXZWxsbmVyXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNjUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJCcmVudFwiLCBzdXJuYW1lOiBcIkZpa293c2tpXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNzUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJTY290dFwiLCBzdXJuYW1lOiBcIlBhbmNoaWtcIiwgaXNTdGFuZGFydDogdHJ1ZSwgd2VpZ2h0OiA0NSwgcmVwczogMTIsIHRpbWU6IDEyIH0sXG4gICAgeyBwaG90bzpcImh0dHBzOi8vZ2FtZXMtYXNzZXRzLmNyb3NzZml0LmNvbS9zdHlsZXMvZmVhdHVyZWRfYXRobGV0ZS9zMy9mZWF0dXJlZF9hdGhsZXRlL2F0aGxldGVoZWFkc2hvdF9mcmFzZXIuanBnP2l0b2s9X2hzMERVQ3ZcIixuYW1lOiBcIkRhblwiLCBzdXJuYW1lOiBcIkJhbGV5XCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJFdmdlbml5XCIsIHN1cm5hbWU6IFwiRGVyemhhdmluXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNDUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJQYXRyaWtcIiwgc3VybmFtZTogXCJXZWxsbmVyXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNjUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuICAgIHsgcGhvdG86XCJodHRwczovL2dhbWVzLWFzc2V0cy5jcm9zc2ZpdC5jb20vc3R5bGVzL2ZlYXR1cmVkX2F0aGxldGUvczMvZmVhdHVyZWRfYXRobGV0ZS9hdGhsZXRlaGVhZHNob3RfZnJhc2VyLmpwZz9pdG9rPV9oczBEVUN2XCIsbmFtZTogXCJCcmVudFwiLCBzdXJuYW1lOiBcIkZpa293c2tpXCIsIGlzU3RhbmRhcnQ6IHRydWUsIHdlaWdodDogNzUsIHJlcHM6IDEyLCB0aW1lOiAxMiB9LFxuXTtcblxuY2xhc3MgU3RhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCggdGhpcyApO1xuICAgIH1cbiAgICBoYW5kbGVDbGljayggcGFnZSApIHtcbiAgICAgICAgY29uc29sZS5sb2coIGBoZWxsbyR7IHBhZ2UgfWAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc2NyZWVuLCBib3ggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8VG9wIC8+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsoIHNjcmVlbiA8IDU3MiA/IGBzdGF0YCA6YHN0YXQxYCl9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyggc2NyZWVuPD0gNTcyID8gYCR7Ym94fSBhY3RgIDpgJHtib3h9IGFjdDFgKX0gPkxlYWRlcmJvYXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2VzLm1hcCggKCBpdGVtLCBpbmRleCApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoIDxkaXYgY2xhc3NOYW1lPXtgJHtib3h9YH0gIGtleT0geyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlcyBwYWdlPXsgaXRlbSB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjcmVlbiA8PSA1NzYgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRzIGF0aGxldGVzPXsgYXRobGV0ZXMgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDogPFRhYmxlIGF0aGxldGVzPXsgYXRobGV0ZXMgfSAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc3RhdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDp3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc3RhdDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmJveHd7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAjOTk5OTk5NjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHggNHB4IDRweCA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzk5OTk5OTY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1LHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucGFnZV9saW5rOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFnZV9saW5rOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNTZiODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFjdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDU2Yjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo4OSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFjdDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1NmI4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXQ7XG4iXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/components/stat/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Stat);

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
      className: "jsx-1438307436" + " " + 'wod'
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", {
      className: "jsx-1438307436"
    }, "Home"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: "jsx-1438307436"
    })), this.props.small ? __jsx("div", {
      className: "jsx-1438307436"
    }, __jsx("div", {
      className: "jsx-1438307436" + " " + (boxStyle || "")
    }, __jsx("h1", {
      className: "jsx-1438307436"
    }, "Hello wod!"), __jsx("ul", {
      className: "jsx-1438307436"
    }, __jsx("p", {
      className: "jsx-1438307436"
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
      className: "jsx-1438307436" + " " + 'row1'
    }, __jsx("h1", {
      className: "jsx-1438307436"
    }, "Hello wod!"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1438307436"
    }, ".wod.jsx-1438307436{background-color:#ba0c2f;color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:20px;font-size:14px;line-height:24px;margin:10px;}.box.jsx-1438307436{width:100%;}.boxw.jsx-1438307436{width:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9Xb2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURzQixBQUd1QyxBQVVmLEFBR0ksV0FGZixDQUdHLGFBYlUsWUFDa0IsOEJBQ1EscUNBQ3pCLGFBQ0UsZUFDRSxpQkFDTCxZQUNmIiwiZmlsZSI6Ii9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9Xb2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IHsgZmV0Y2hDaXJjdWl0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBpJ1xuXG5jbGFzcyBXb2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgc3RhdGUgPXtcbiAgICAgICAgd29kOm51bGxcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGZldGNoQ2lyY3VpdHMoKTtcbiAgICAgICAgLy8gZGF0YS50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHt3b2Q6cmVzfSlcbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHdvZCA9IHRoaXMuc3RhdGUud29kO1xuICAgICAgICBjb25zdCBzY3JlZW4gPSB0aGlzLnByb3BzLnNjcmVlbjtcbiAgICAgICAgY29uc3QgYm94U3R5bGUgPSB0aGlzLnByb3BzLmJveDtcbiAgICAgICAgY29uc29sZS5sb2coJ3dvZCA9PiAnLHdvZClcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dvZCc+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnNtYWxsID8gXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JveFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyB3b2QhPC9oMT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgey8qIHt3b2QgPyBcbiAgICAgICAgICAgICAgICAgICB3b2QubWFwKGkgPT5cbiAgICAgICAgICAgICAgICAgICAgICg8bGk+e2kubmFtZX08L2xpPikpIFxuICAgICAgICAgICAgICAgICAgIDogbnVsbCB9ICovfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxOYXYvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdzEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyB3b2QhPC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud29ke1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiYTBjMmY7XG4gICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweCA0cHggNHB4IDRweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4ICM5OTk5OTk2NjtcbiAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luOjEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHcge1xuICAgICAgICAgICAgICAgIHdpZHRoOjQ1MHB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb2QiXX0= */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/pages/Wod.js */"));
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
/* harmony import */ var _pages_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/profile */ "./pages/profile.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_stat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stat */ "./components/stat/index.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class Home extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      screenWidth: null,
      boxOrder: 'box',
      lang: 'ua',
      gym: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "txt", __webpack_require__("./components/Dict sync recursive ^\\.\\/.*\\/.*\\.json$")(`./${this.state.lang}/${this.state.lang}.json`));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleGYM", g => {
      this.setState({
        gym: g
      });
      console.log('gym ', g);
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

  handleLogin() {
    console.log('login is handled!');
  }

  render() {
    return __jsx("div", {
      className: "jsx-906106121"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", {
      className: "jsx-906106121"
    }, "REDLINE"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: "jsx-906106121"
    })), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
      txt: this.txt,
      gym: this.state.gym
    }), __jsx("div", {
      className: "jsx-906106121" + " " + 'container'
    }, __jsx("div", {
      className: "jsx-906106121" + " " + 'row'
    }, __jsx("div", {
      className: "jsx-906106121" + " " + `${this.state.boxOrder}1`
    }, __jsx(_pages_Wod__WEBPACK_IMPORTED_MODULE_4__["default"], {
      small: true,
      screen: this.state.screenWidth,
      box: this.state.boxOrder
    })), __jsx("div", {
      className: "jsx-906106121" + " " + `${this.state.boxOrder}2`
    }, __jsx(_components_stat__WEBPACK_IMPORTED_MODULE_7__["default"], {
      screen: this.state.screenWidth,
      box: this.state.boxOrder
    })), __jsx("div", {
      className: "jsx-906106121" + " " + `${this.state.boxOrder}3`
    }, __jsx(_pages_profile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      small: true,
      screen: this.state.screenWidth,
      box: this.state.boxOrder,
      login: this.handleLogin.bind(this),
      txt: this.txt,
      handleGYM: this.handleGYM
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "906106121"
    }, ".container.jsx-906106121{width:100%;color:#333;}.row.jsx-906106121{margin:5px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.box1.jsx-906106121{-webkit-order:2;-ms-flex-order:2;order:2;}.box2.jsx-906106121{-webkit-order:3;-ms-flex-order:3;order:3;}.box3.jsx-906106121{-webkit-order:1;-ms-flex-order:1;order:1;}.boxw1.jsx-906106121{-webkit-order:1;-ms-flex-order:1;order:1;}.boxw2.jsx-906106121{-webkit-order:2;-ms-flex-order:2;order:2;}.boxw3.jsx-906106121{-webkit-order:3;-ms-flex-order:3;order:3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWdCLEFBR29CLEFBSVUsQUFPUixBQUNBLEFBQ0EsQUFFQyxBQUNBLEFBQ0EsV0FoQkgsVUFJRSxDQUhmLG1CQVNnQixBQUNBLEFBQ0EsQUFFQyxBQUNBLEFBQ0Esc0RBWEkscUVBQ0wseURBQ2dCLG1IQUNoQyIsImZpbGUiOiIvVXNlcnMveWRlcnovRG9jdW1lbnRzL1doaXRlYm9hcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgV29kIGZyb20gJy4uL3BhZ2VzL1dvZCdcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL3BhZ2VzL3Byb2ZpbGUnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IFN0YXQgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0J1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuLi9jb21wb25lbnRzL0J1cmdlcidcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBzdGF0ZSA9IHtcbiAgICBzY3JlZW5XaWR0aDpudWxsLFxuICAgIGJveE9yZGVyOidib3gnLFxuICAgIGxhbmc6J3VhJyxcbiAgICBneW06bnVsbFxuICB9XG4gICBcbiAgIHR4dCA9IHJlcXVpcmUoYC4uL2NvbXBvbmVudHMvRGljdC8ke3RoaXMuc3RhdGUubGFuZ30vJHt0aGlzLnN0YXRlLmxhbmd9Lmpzb25gKTtcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBpZih3aW5kb3cpe1xuICAgICAgbGV0IGJveCA9ICdib3h3JztcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIDw9IDU3NiA/IGJveCA9ICdib3gnIDogYm94ID0gJ2JveHcnO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNjcmVlbldpZHRoOndpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBib3hPcmRlcjogYm94XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2dpbigpe1xuICAgY29uc29sZS5sb2coJ2xvZ2luIGlzIGhhbmRsZWQhJylcbiAgfVxuXG4gIGhhbmRsZUdZTT0oZyk9PntcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGd5bTpnXG4gICAgfSk7XG5jb25zb2xlLmxvZygnZ3ltICcsIGcpO1xuICB9XG5cbnJlbmRlcigpe1xucmV0dXJuKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlJFRExJTkU8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXYgdHh0ID0ge3RoaXMudHh0fSBneW09e3RoaXMuc3RhdGUuZ3ltfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYm94T3JkZXJ9MWB9PlxuICAgICAgICAgPFdvZCBcbiAgICAgICAgICAgIHNtYWxsIFxuICAgICAgICAgICAgc2NyZWVuID0ge3RoaXMuc3RhdGUuc2NyZWVuV2lkdGh9XG4gICAgICAgICAgICBib3ggPSB7dGhpcy5zdGF0ZS5ib3hPcmRlcn1cbiAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5ib3hPcmRlcn0yYH0+XG4gICAgICAgICA8U3RhdCBcbiAgICAgICAgICAgIHNjcmVlbiA9IHt0aGlzLnN0YXRlLnNjcmVlbldpZHRofSBcbiAgICAgICAgICAgIGJveCA9IHt0aGlzLnN0YXRlLmJveE9yZGVyfVxuICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmJveE9yZGVyfTNgfT5cbiAgICAgICAgICA8UHJvZmlsZSBcbiAgICAgICAgICAgIHNtYWxsIFxuICAgICAgICAgICAgc2NyZWVuID0ge3RoaXMuc3RhdGUuc2NyZWVuV2lkdGh9IFxuICAgICAgICAgICAgYm94ID0ge3RoaXMuc3RhdGUuYm94T3JkZXJ9XG4gICAgICAgICAgICBsb2dpbiA9IHt0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB0eHQgPSB7dGhpcy50eHR9XG4gICAgICAgICAgICBoYW5kbGVHWU0gPSB7dGhpcy5oYW5kbGVHWU19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0byA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAuYm94MSB7IG9yZGVyOiAyOyB9XG4gICAgICAuYm94MiB7IG9yZGVyOiAzOyB9XG4gICAgICAuYm94MyB7IG9yZGVyOiAxOyB9XG5cbiAgICAgIC5ib3h3MSB7IG9yZGVyOiAxOyB9XG4gICAgICAuYm94dzIgeyBvcmRlcjogMjsgfVxuICAgICAgLmJveHczIHsgb3JkZXI6IDM7IH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApIFxuIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/pages/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
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
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/login */ "./components/login/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const today = new Date().toLocaleDateString().split('/');

class Profile extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleGYMcheck", e => {
      this.props.handleGYM(e.target.innerText.toLowerCase());
      console.log(e.target.innerText.toLowerCase());
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-1350129070" + " " + 'profile'
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", {
      className: "jsx-1350129070"
    }, "Home"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: "jsx-1350129070"
    })), this.props.small ? __jsx("div", {
      className: "jsx-1350129070" + " " + (this.props.box || "")
    }, __jsx("div", {
      className: "jsx-1350129070" + " " + 'card'
    }, __jsx("h1", {
      className: "jsx-1350129070"
    }, this.props.txt.login), __jsx("p", {
      className: "jsx-1350129070"
    }, __jsx("span", {
      className: "jsx-1350129070" + " " + 'date'
    }, __jsx("b", {
      className: "jsx-1350129070"
    }, today[0], "/", today[1]), __jsx("br", {
      className: "jsx-1350129070"
    }), __jsx("b", {
      className: "jsx-1350129070"
    }, today[2])), __jsx("br", {
      className: "jsx-1350129070"
    }), this.props.txt.login_msg), __jsx("div", {
      className: "jsx-1350129070" + " " + 'card_menu'
    }, __jsx("span", {
      onClick: e => this.handleGYMcheck(e),
      className: "jsx-1350129070" + " " + 'card logo_btn'
    }, "CrossFit Rivne"), __jsx("span", {
      onClick: e => this.handleGYMcheck(e),
      className: "jsx-1350129070" + " " + 'card logo_btn'
    }, "ZAWOD")), __jsx("br", {
      className: "jsx-1350129070"
    }), __jsx(_components_login__WEBPACK_IMPORTED_MODULE_5__["default"], {
      login: this.props.login,
      txt: this.props.txt
    }))) : __jsx("div", {
      className: "jsx-1350129070"
    }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
      className: "jsx-1350129070" + " " + 'row'
    }, __jsx("h1", {
      className: "jsx-1350129070"
    }, "Hello profile there!"), __jsx("p", {
      className: "jsx-1350129070"
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "), __jsx("br", {
      className: "jsx-1350129070"
    }), __jsx(_components_login__WEBPACK_IMPORTED_MODULE_5__["default"], {
      txt: props.txt
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1350129070"
    }, "h1.jsx-1350129070{margin:0;text-transform:uppercase;text-align:right;font-weight:800;}p.jsx-1350129070{color:#737373;}b.jsx-1350129070{color:#a0a0a04f;font-weight:900;font-size:30px;position:relative;top:-38px;}.profile.jsx-1350129070{color:#333333;padding:10px;}.boxw.jsx-1350129070{width:450px;}.box.jsx-1350129070{width:100%;}.card.jsx-1350129070{background-color:white;border-radius:4px 4px 4px 4px;box-shadow:0px 0px 5px 1px #99999966;padding:20px;font-size:14px;line-height:24px;}.card_menu.jsx-1350129070{margin:20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.logo_btn.jsx-1350129070{width:34%;}.logo_btn.jsx-1350129070:hover{cursor:pointer;background-color:#ba0c2f;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZGVyei9Eb2N1bWVudHMvV2hpdGVib2FyZC9wYWdlcy9wcm9maWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEb0IsQUFHaUIsQUFNRyxBQUdFLEFBT0EsQUFJRixBQUdELEFBR1ksQUFRVCxBQUtKLEFBR0ssU0F6Q1UsQ0F1QzFCLENBaEJBLENBSEEsRUFkRixBQVVnQixBQWtCQSxDQVFZLENBakNYLE9BaUJnQixJQVRqQyxLQVBpQixFQVRHLE1BMENMLE9BaENLLElBVEQsQ0EwQ2pCLENBakJ1QyxZQWY3QixFQVRaLFFBVUEsYUFzQmlDLEVBUGpCLGFBQ0UsZUFDRSxpQkFDbEIsb0VBS0EiLCJmaWxlIjoiL1VzZXJzL3lkZXJ6L0RvY3VtZW50cy9XaGl0ZWJvYXJkL3BhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nXG5cbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKS5zcGxpdCgnLycpO1xuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBoYW5kbGVHWU1jaGVjayA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVHWU0oZS50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlJz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnNtYWxsID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ib3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudHh0LmxvZ2lufTwvaDE+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZSc+PGI+e3RvZGF5WzBdfS97dG9kYXlbMV19PC9iPjxiciAvPjxiPnt0b2RheVsyXX08L2I+PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnR4dC5sb2dpbl9tc2d9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9tZW51Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmQgbG9nb19idG4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUdZTWNoZWNrKGUpfT5Dcm9zc0ZpdCBSaXZuZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmQgbG9nb19idG4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUdZTWNoZWNrKGUpfT5aQVdPRDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8TG9naW4gbG9naW49e3RoaXMucHJvcHMubG9naW59IHR4dD17dGhpcy5wcm9wcy50eHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICA8aDE+SGVsbG8gcHJvZmlsZSB0aGVyZSE8L2gxPlxuICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8TG9naW4gdHh0PXtwcm9wcy50eHR9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICBoMXtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgY29sb3I6IzczNzM3MztcbiAgICB9XG4gICAgYntcbiAgICAgIGNvbG9yOiNhMGEwYTA0ZjtcbiAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTM4cHg7XG4gICAgfVxuICAgIC5wcm9maWxle1xuICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgfVxuICAgICAgLmJveHcge1xuICAgICAgICB3aWR0aDo0NTBweDtcbiAgICAgIH1cbiAgICAgIC5ib3gge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgfVxuICAgICAgLmNhcmR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NHB4IDRweCA0cHggNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzk5OTk5OTY2O1xuICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDoyNHB4O1xuICAgICAgfVxuICAgICAgLmNhcmRfbWVudXtcbiAgICAgICAgbWFyZ2luOjIwcHggMDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICAgIC5sb2dvX2J0bntcbiAgICAgICAgd2lkdGg6MzQlO1xuICAgICAgfVxuICAgICAgLmxvZ29fYnRuOmhvdmVye1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojYmEwYzJmO1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIl19 */\n/*@ sourceURL=/Users/yderz/Documents/Whiteboard/pages/profile.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

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