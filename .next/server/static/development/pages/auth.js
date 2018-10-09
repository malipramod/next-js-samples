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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pmali\\Documents\\nextjs\\components\\User.js";



var user = function user(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3680549134",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3680549134",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3680549134",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.age), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3680549134",
    css: "div.jsx-3680549134{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccG1hbGlcXERvY3VtZW50c1xcbmV4dGpzXFxjb21wb25lbnRzXFxVc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvQixBQUdzQyxzQkFDSywwQkFDYixhQUVsQixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXHBtYWxpXFxEb2N1bWVudHNcXG5leHRqc1xcY29tcG9uZW50c1xcVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IHVzZXIgPSAocHJvcHMpID0+KFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDE+e3Byb3BzLm5hbWV9PC9oMT5cclxuICAgICAgICA8aDE+e3Byb3BzLmFnZX08L2gxPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfSAgICAgICAgICAgIFxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCB1c2VyOyJdfQ== */\n/*@ sourceURL=C:\\Users\\pmali\\Documents\\nextjs\\components\\User.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/User */ "./components/User.js");
var _jsxFileName = "C:\\Users\\pmali\\Documents\\nextjs\\pages\\auth\\index.js";





var authIndexPage = function authIndexPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3863763459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3863763459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "The Auth index Page ", props.appName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    },
    className: "jsx-3863763459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Go Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Pramod",
    age: 23,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3863763459",
    css: "button.jsx-3863763459{background-color:lightgoldenrodyellow;color:green;border:1px solid;box-shadow:0 2px 3px #c31414;height:40px;width:100px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccG1hbGlcXERvY3VtZW50c1xcbmV4dGpzXFxwYWdlc1xcYXV0aFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW9CLEFBRXlELHNDQUNoQyxZQUNLLGlCQUNZLDZCQUNqQixZQUNBLFlBQ0csZUFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbWFsaVxcRG9jdW1lbnRzXFxuZXh0anNcXHBhZ2VzXFxhdXRoXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXInO1xyXG5cclxuXHJcbmNvbnN0IGF1dGhJbmRleFBhZ2UgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlRoZSBBdXRoIGluZGV4IFBhZ2Uge3Byb3BzLmFwcE5hbWV9PC9oMT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PkdvIEJhY2s8L2J1dHRvbj5cclxuICAgICAgICA8VXNlciBuYW1lPVwiUHJhbW9kXCIgYWdlPXsyM30gLz5cclxuICAgICAgICA8c3R5bGUganN4PntgICAgICAgICBcclxuICAgICAgICAgICBidXR0b257IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggI2MzMTQxNDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5hdXRoSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9Y29udGV4dCA9PntcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7YXBwTmFtZTpcIk5leHRKUyBBdXRoIEFwcFwifSlcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBhdXRoSW5kZXhQYWdlOyAgICJdfQ== */\n/*@ sourceURL=C:\\Users\\pmali\\Documents\\nextjs\\pages\\auth\\index.js */",
    __self: this
  }));
};

authIndexPage.getInitialProps = function (context) {
  console.log(context);
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        appName: "NextJS Auth App"
      });
    }, 1000);
  });
  return promise;
};

/* harmony default export */ __webpack_exports__["default"] = (authIndexPage);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/auth/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/auth/index.js */"./pages/auth/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=auth.js.map