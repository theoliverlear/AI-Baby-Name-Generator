/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/resources/static/script/generatorScript.ts":
/*!*************************************************************!*\
  !*** ./src/main/resources/static/script/generatorScript.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_GeneratedName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/GeneratedName.js */ \"./src/main/resources/static/script/models/GeneratedName.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar genderInputs = document.getElementsByClassName('gender-input');\nvar genderInputArray = Array.from(genderInputs);\nvar selectedGender = 'Any';\nfunction updateSelectedGender() {\n  genderInputArray.forEach(function (genderInput) {\n    if (genderInput.checked) {\n      selectedGender = genderInput.id;\n    }\n  });\n}\ngenderInputArray.forEach(function (genderInput) {\n  genderInput.addEventListener(\"click\", updateSelectedGender);\n});\nvar generateButton = document.getElementById(\"generate-name-button-div\");\nvar nationalityInput = document.getElementById('nationality-input');\nvar similarNamesInput = document.getElementById('similar-names-input');\nvar dissimilarNamesInput = document.getElementById('dissimilar-names-input');\nvar complexityInput = document.getElementById('complexity-input');\nvar uniquenessInput = document.getElementById('uniqueness-input');\nvar lastNameInput = document.getElementById('last-name-input');\nvar includeLastName = true;\nvar numberOfNamesInput = document.getElementById('number-of-names-input');\nfunction getNamesFromServer() {\n  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    var preResponse, response;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('/generator/generate', {\n            method: 'POST',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n              gender: selectedGender,\n              nationality: nationalityInput.value,\n              similarNames: similarNamesInput.value,\n              dissimilarNames: dissimilarNamesInput.value,\n              lastName: lastNameInput.value,\n              includeLastName: includeLastName,\n              numNames: Number(numberOfNamesInput.value),\n              nameComplexity: Number(complexityInput.value),\n              nameUniqueness: Number(uniquenessInput.value)\n            })\n          });\n        case 2:\n          preResponse = _context.sent;\n          _context.next = 5;\n          return preResponse.json();\n        case 5:\n          response = _context.sent;\n          return _context.abrupt(\"return\", response);\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n}\nvar generatedNamesSection = document.getElementById('generated-names-section');\nfunction displayNamesFromServer() {\n  generatedNamesSection.innerHTML = '';\n  getNamesFromServer().then(function (response) {\n    console.log(response.names);\n    response.names.names.forEach(function (name) {\n      console.log(name.name);\n      var nameString = name.name.replace(' ', '\\n');\n      var generatedName = new _models_GeneratedName_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedName(nameString);\n      var generatedNameBubble = document.createElement('div');\n      generatedNameBubble.classList.add('generated-name-bubble');\n      // Add some randomness to the vertical position\n      var verticalOffset = Math.floor(Math.random() * 80) - 40; // gives a random number between -20 and 20\n      var randomFloatType = Math.floor(Math.random() * 2) + 1;\n      console.log(randomFloatType);\n      if (randomFloatType === 1) {\n        generatedNameBubble.style.animation = 'float 4s ease-in-out infinite';\n      } else {\n        generatedNameBubble.style.animation = 'negative-float 4s ease-in-out infinite';\n      }\n      generatedNameBubble.style.transform = \"translateY(\".concat(verticalOffset, \"px)\");\n      generatedNameBubble.innerHTML = generatedName.getHtmlString();\n      generatedNamesSection.appendChild(generatedNameBubble);\n    });\n  })[\"catch\"](function (error) {\n    console.error('Error: ', error);\n  });\n}\nvar loadingWheelDiv = document.getElementById('loading-wheel-div');\nfunction generateNamesSequence() {\n  hideElement(generateButton);\n  showElement(loadingWheelDiv);\n  displayNamesFromServer();\n  hideElement(loadingWheelDiv);\n  showElement(generateButton);\n}\nfunction showElement(element) {\n  element.style.display = 'flex';\n}\nfunction hideElement(element) {\n  element.style.display = 'none';\n}\ngenerateButton.addEventListener(\"click\", generateNamesSequence);\n\n//# sourceURL=webpack://ai-baby-name-generator/./src/main/resources/static/script/generatorScript.ts?");

/***/ }),

/***/ "./src/main/resources/static/script/globalScript.ts":
/*!**********************************************************!*\
  !*** ./src/main/resources/static/script/globalScript.ts ***!
  \**********************************************************/
/***/ (() => {

eval("var allImages = document.getElementsByTagName('img');\n//--------------------------Disable-Draggable-Images--------------------------\nfunction disableDraggableImages() {\n  for (var _i = 0, _Array$from = Array.from(allImages); _i < _Array$from.length; _i++) {\n    var image = _Array$from[_i];\n    image.draggable = false;\n  }\n}\n//-------------------------------Load-Page------------------------------------\nfunction loadPage(bodyElement, pageName) {\n  return bodyElement.getAttribute('data-page') === pageName;\n}\n\n//# sourceURL=webpack://ai-baby-name-generator/./src/main/resources/static/script/globalScript.ts?");

/***/ }),

/***/ "./src/main/resources/static/script/homeScript.ts":
/*!********************************************************!*\
  !*** ./src/main/resources/static/script/homeScript.ts ***!
  \********************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://ai-baby-name-generator/./src/main/resources/static/script/homeScript.ts?");

/***/ }),

/***/ "./src/main/resources/static/script/models/GeneratedName.ts":
/*!******************************************************************!*\
  !*** ./src/main/resources/static/script/models/GeneratedName.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GeneratedName: () => (/* binding */ GeneratedName)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar GeneratedName = /*#__PURE__*/function () {\n  function GeneratedName(generatedName) {\n    _classCallCheck(this, GeneratedName);\n    this._generatedName = generatedName;\n  }\n  return _createClass(GeneratedName, [{\n    key: \"generatedName\",\n    get: function get() {\n      return this._generatedName;\n    },\n    set: function set(generatedName) {\n      this._generatedName = generatedName;\n    }\n  }, {\n    key: \"getHtmlString\",\n    value: function getHtmlString() {\n      return \"\\n            <h4 class=\\\"generated-name-bubble-text\\\">\".concat(this._generatedName, \"</h4>\\n        \");\n    }\n  }, {\n    key: \"getHtml\",\n    value: function getHtml() {\n      var generatedNameBubble = document.createElement('div');\n      generatedNameBubble.classList.add('generated-name-bubble');\n      generatedNameBubble.innerHTML = this.getHtmlString();\n      return generatedNameBubble;\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://ai-baby-name-generator/./src/main/resources/static/script/models/GeneratedName.ts?");

/***/ }),

/***/ "./src/main/resources/static/script/models/GeneratedName.js":
/*!******************************************************************!*\
  !*** ./src/main/resources/static/script/models/GeneratedName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GeneratedName: () => (/* binding */ GeneratedName)\n/* harmony export */ });\nclass GeneratedName {\n    constructor(generatedName) {\n        this._generatedName = generatedName;\n    }\n    get generatedName() {\n        return this._generatedName;\n    }\n    set generatedName(generatedName) {\n        this._generatedName = generatedName;\n    }\n    getHtmlString() {\n        return `\r\n            <h4 class=\"generated-name-bubble-text\">${this._generatedName}</h4>\r\n        `;\n    }\n    getHtml() {\n        let generatedNameBubble = document.createElement('div');\n        generatedNameBubble.classList.add('generated-name-bubble');\n        generatedNameBubble.innerHTML = this.getHtmlString();\n        return generatedNameBubble;\n    }\n}\n\n\n//# sourceURL=webpack://ai-baby-name-generator/./src/main/resources/static/script/models/GeneratedName.js?");

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
/******/ 	__webpack_require__("./src/main/resources/static/script/globalScript.ts");
/******/ 	__webpack_require__("./src/main/resources/static/script/homeScript.ts");
/******/ 	__webpack_require__("./src/main/resources/static/script/generatorScript.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/resources/static/script/models/GeneratedName.ts");
/******/ 	
/******/ })()
;