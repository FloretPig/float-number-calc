(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FloatNumberCalc"] = factory();
	else
		root["FloatNumberCalc"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const add = (a = 0, b = 0) => {
	let c
	let d
	try {
		c = a.toString().split('.')[1].length
	} catch (f) {
		c = 0
	}
	try {
		d = b.toString().split('.')[1].length
	} catch (f) {
		d = 0
	}
	const e = Math.pow(10, Math.max(c, d))
	return (mul(a, e) + mul(b, e)) / e
}

const sub = (a = 0, b = 0) => {
	let c
	let d
	try {
		c = a.toString().split('.')[1].length
	} catch (f) {
		c = 0
	}
	try {
		d = b.toString().split('.')[1].length
	} catch (f) {
		d = 0
	}
	const e = Math.pow(10, Math.max(c, d))
	return (mul(a, e) - mul(b, e)) / e
}

const mul = (a = 0, b = 0) => {
	let c = 0
	const d = a.toString()
	const e = b.toString()
	try {
		c += d.split('.')[1].length
	} catch (f) {}
	try {
		c += e.split('.')[1].length
	} catch (f) {}
	return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

const div = (a = 0, b = 0) => {
	let e = 0
	let f = 0
	try {
		e = a.toString().split('.')[1].length
	} catch (g) {}
	try {
		f = b.toString().split('.')[1].length
	} catch (g) {}
	const c = Number(a.toString().replace('.', ''))
	const d = Number(b.toString().replace('.', ''))
	return mul(c / d, Math.pow(10, f - e))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    add,
    sub,
    mul,
    div
});

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })()
.default;
});