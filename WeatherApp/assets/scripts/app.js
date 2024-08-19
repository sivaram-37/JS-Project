/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI/Model.js":
/*!*************************!*\
  !*** ./src/UI/Model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateUi: () => (/* binding */ updateUi)\n/* harmony export */ });\nconst setCity = document.getElementById(\"cityName\");\r\nconst setDate = document.getElementById(\"date\");\r\nconst settemp = document.getElementById(\"temperature\");\r\nconst setDesc = document.getElementById(\"description\");\r\nconst setHumidity = document.getElementById(\"humidity\");\r\nconst setWind = document.getElementById(\"wind\");\r\nconst img = document.getElementById(\"descImg\");\r\n\r\nfunction updateUi(data) {\r\n  setCity.textContent = data.location.name;\r\n  setDate.textContent = data.current.last_updated;\r\n  settemp.textContent = data.current.temp_c + \"°C\";\r\n  setDesc.textContent = data.current.condition.text;\r\n  img.src = data.current.condition.icon;\r\n  setHumidity.textContent = data.current.humidity + \"%\";\r\n  setWind.textContent = data.current.wind_kph + \" km/h\";\r\n}\r\n\n\n//# sourceURL=webpack://weatherapp/./src/UI/Model.js?");

/***/ }),

/***/ "./src/Utility/Weather.js":
/*!********************************!*\
  !*** ./src/Utility/Weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _UI_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Model */ \"./src/UI/Model.js\");\n\r\n\r\nconst API_KEY = \"d1da02dc60e24258bb1105101241408\";\r\n\r\nasync function getWeather(city) {\r\n  const encodedcity = encodeURI(city);\r\n  const res = await fetch(\r\n    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodedcity}&aqi=no`\r\n  );\r\n  try {\r\n    if (res.status === 200) {\r\n      const data = await res.json();\r\n      (0,_UI_Model__WEBPACK_IMPORTED_MODULE_0__.updateUi)(data);\r\n    }\r\n  } catch (err) {\r\n    alert(err.message);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weatherapp/./src/Utility/Weather.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utility_Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/Weather */ \"./src/Utility/Weather.js\");\n\r\n\r\nconst searchBtn = document.getElementById(\"searchButton\");\r\n\r\nconst searchBtnHandler = () => {\r\n  const inputCity = document.getElementById(\"cityInput\").value;\r\n  (0,_Utility_Weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(inputCity);\r\n};\r\n\r\nsearchBtn.addEventListener(\"click\", searchBtnHandler);\r\n\n\n//# sourceURL=webpack://weatherapp/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;