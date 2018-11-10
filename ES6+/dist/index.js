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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/Countdown.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Countdown.js":
/*!*************************!*\
  !*** ./js/Countdown.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Timer = __webpack_require__(/*! Timer */ \"./js/Timer/index.js\");\n\nvar _Timer2 = _interopRequireDefault(_Timer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar timerConfig = {\n  days: 1,\n  hours: 0,\n  minutes: 0,\n  seconds: 0\n};\n\nvar timer = new _Timer2.default(timerConfig);\n\ntimer.intervalID = setInterval(timer.tick, 1000);\n\n//# sourceURL=webpack:///./js/Countdown.js?");

/***/ }),

/***/ "./js/Timer/index.js":
/*!***************************!*\
  !*** ./js/Timer/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Timer = function () {\n  function Timer(_ref) {\n    var days = _ref.days,\n        hours = _ref.hours,\n        minutes = _ref.minutes,\n        seconds = _ref.seconds;\n\n    _classCallCheck(this, Timer);\n\n    this.days = days;\n    this.hours = hours;\n    this.minutes = minutes;\n    this.seconds = seconds;\n    this.containers = document.querySelectorAll('.counter');\n    this.intervalID = 0;\n    this.tick = this.tick.bind(this);\n    this.getTick = this.getTick.bind(this);\n    this.tickSeconds = this.tickSeconds.bind(this);\n    this.tickMinutes = this.tickMinutes.bind(this);\n    this.tickHours = this.tickHours.bind(this);\n    this.tickDays = this.tickDays.bind(this);\n    this.containers[0].innerHTML = this.days;\n    this.containers[1].innerHTML = this.hours;\n    this.containers[2].innerHTML = this.minutes;\n    this.containers[3].innerHTML = this.seconds;\n  }\n\n  _createClass(Timer, [{\n    key: 'tick',\n    value: function tick() {\n      this.tickSeconds();\n    }\n  }, {\n    key: 'hasCountdownEnded',\n    value: function hasCountdownEnded() {\n      return this.days == 0 && this.hours == 0 && this.minutes == 0 && this.seconds == 0;\n    }\n  }, {\n    key: 'getTick',\n    value: function getTick(value) {\n      return value == 0 ? 59 : value - 1;\n    }\n  }, {\n    key: 'tickSeconds',\n    value: function tickSeconds() {\n      this.seconds = this.getTick(this.seconds);\n      if (this.seconds == 59) {\n        this.tickMinutes();\n      }\n      this.containers[3].innerHTML = this.seconds;\n      if (this.hasCountdownEnded()) {\n        clearInterval(this.intervalID);\n        alert('Countdown Ended');\n      }\n    }\n  }, {\n    key: 'tickMinutes',\n    value: function tickMinutes() {\n      this.minutes = this.getTick(this.minutes);\n      if (this.minutes == 59) {\n        this.tickHours();\n      }\n      this.containers[2].innerHTML = this.minutes;\n    }\n  }, {\n    key: 'tickHours',\n    value: function tickHours() {\n      this.hours = this.getTick(this.hours);\n      if (this.hours == 59) {\n        this.tickDays();\n      }\n      this.containers[1].innerHTML = this.hours;\n    }\n  }, {\n    key: 'tickDays',\n    value: function tickDays() {\n      this.days--;\n      this.containers[0].innerHTML = this.days;\n    }\n  }]);\n\n  return Timer;\n}();\n\nexports.default = Timer;\n\n//# sourceURL=webpack:///./js/Timer/index.js?");

/***/ })

/******/ });