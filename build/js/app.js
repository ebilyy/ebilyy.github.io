/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _header = __webpack_require__(/*! ./components/header */ \"./components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _header2.default)(); // import sayHello from './lib/sayHello';\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzYXlIZWxsbyBmcm9tICcuL2xpYi9zYXlIZWxsbyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmhlYWRlcigpO1xuIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7Ozs7O0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar header = document.querySelector(\".js-header\");\nvar menuOpenClass = \"menu-open\";\nvar burgerBtn = document.querySelector(\".js-burger\");\nvar headerMenuBg = document.querySelector(\".js-menu-bg\");\nvar headerMenulinks = document.querySelector(\".js-menu-links\");\nfunction openMenu() {\n  header.classList.toggle(menuOpenClass);\n  burgerBtn.classList.toggle(\"is-open\");\n  headerMenuBg.classList.toggle(\"is-open\");\n}\n\nburgerBtn.addEventListener(\"click\", openMenu);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanM/NTc2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWhlYWRlclwiKTtcbmNvbnN0IG1lbnVPcGVuQ2xhc3MgPSBcIm1lbnUtb3BlblwiO1xuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1idXJnZXJcIik7XG5jb25zdCBoZWFkZXJNZW51QmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnUtYmdcIik7XG5jb25zdCBoZWFkZXJNZW51bGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnUtbGlua3NcIik7XG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUobWVudU9wZW5DbGFzcyk7XG4gIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgaGVhZGVyTWVudUJnLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xufVxuXG5idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5NZW51KTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

/******/ });