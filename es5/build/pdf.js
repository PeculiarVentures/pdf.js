/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfjs-dist/build/pdf", [], factory);
	else if(typeof exports === 'object')
		exports["pdfjs-dist/build/pdf"] = factory();
	else
		root["pdfjs-dist/build/pdf"] = root.pdfjsLib = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StatTimer = exports.RenderingCancelledException = exports.PageViewport = exports.PDFDateString = exports.LinkTarget = exports.DOMSVGFactory = exports.DOMCanvasFactory = exports.DOMCMapReaderFactory = exports.DEFAULT_LINK_REL = exports.BaseCanvasFactory = exports.BaseCMapReaderFactory = void 0;
exports.addLinkAttributes = addLinkAttributes;
exports.deprecated = deprecated;
exports.getFilenameFromUrl = getFilenameFromUrl;
exports.isFetchSupported = isFetchSupported;
exports.isValidFetchUrl = isValidFetchUrl;
exports.loadScript = loadScript;
var _util = __w_pdfjs_require__(2);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DEFAULT_LINK_REL = exports.DEFAULT_LINK_REL = "noopener noreferrer nofollow";
var SVG_NS = "http://www.w3.org/2000/svg";
var BaseCanvasFactory = exports.BaseCanvasFactory = /*#__PURE__*/function () {
  function BaseCanvasFactory() {
    _classCallCheck(this, BaseCanvasFactory);
    if (this.constructor === BaseCanvasFactory) {
      (0, _util.unreachable)("Cannot initialize BaseCanvasFactory.");
    }
  }
  return _createClass(BaseCanvasFactory, [{
    key: "create",
    value: function create(width, height) {
      (0, _util.unreachable)("Abstract method `create` called.");
    }
  }, {
    key: "reset",
    value: function reset(canvasAndContext, width, height) {
      if (!canvasAndContext.canvas) {
        throw new Error("Canvas is not specified");
      }
      if (width <= 0 || height <= 0) {
        throw new Error("Invalid canvas size");
      }
      canvasAndContext.canvas.width = width;
      canvasAndContext.canvas.height = height;
    }
  }, {
    key: "destroy",
    value: function destroy(canvasAndContext) {
      if (!canvasAndContext.canvas) {
        throw new Error("Canvas is not specified");
      }
      canvasAndContext.canvas.width = 0;
      canvasAndContext.canvas.height = 0;
      canvasAndContext.canvas = null;
      canvasAndContext.context = null;
    }
  }]);
}();
var DOMCanvasFactory = exports.DOMCanvasFactory = /*#__PURE__*/function (_BaseCanvasFactory) {
  function DOMCanvasFactory() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ownerDocument = _ref.ownerDocument,
      ownerDocument = _ref$ownerDocument === void 0 ? globalThis.document : _ref$ownerDocument;
    _classCallCheck(this, DOMCanvasFactory);
    _this = _callSuper(this, DOMCanvasFactory);
    _this._document = ownerDocument;
    return _this;
  }
  _inherits(DOMCanvasFactory, _BaseCanvasFactory);
  return _createClass(DOMCanvasFactory, [{
    key: "create",
    value: function create(width, height) {
      if (width <= 0 || height <= 0) {
        throw new Error("Invalid canvas size");
      }
      var canvas = this._document.createElement("canvas");
      var context = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      return {
        canvas: canvas,
        context: context
      };
    }
  }]);
}(BaseCanvasFactory);
var BaseCMapReaderFactory = exports.BaseCMapReaderFactory = /*#__PURE__*/function () {
  function BaseCMapReaderFactory(_ref2) {
    var _ref2$baseUrl = _ref2.baseUrl,
      baseUrl = _ref2$baseUrl === void 0 ? null : _ref2$baseUrl,
      _ref2$isCompressed = _ref2.isCompressed,
      isCompressed = _ref2$isCompressed === void 0 ? false : _ref2$isCompressed;
    _classCallCheck(this, BaseCMapReaderFactory);
    if (this.constructor === BaseCMapReaderFactory) {
      (0, _util.unreachable)("Cannot initialize BaseCMapReaderFactory.");
    }
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }
  return _createClass(BaseCMapReaderFactory, [{
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref3) {
        var _this2 = this;
        var name, url, compressionType;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              name = _ref3.name;
              if (this.baseUrl) {
                _context.next = 3;
                break;
              }
              throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');
            case 3:
              if (name) {
                _context.next = 5;
                break;
              }
              throw new Error("CMap name must be specified.");
            case 5:
              url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
              compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;
              return _context.abrupt("return", this._fetchData(url, compressionType)["catch"](function (reason) {
                throw new Error("Unable to load ".concat(_this2.isCompressed ? "binary " : "", "CMap at: ").concat(url));
              }));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }
      return fetch;
    }()
  }, {
    key: "_fetchData",
    value: function _fetchData(url, compressionType) {
      (0, _util.unreachable)("Abstract method `_fetchData` called.");
    }
  }]);
}();
var DOMCMapReaderFactory = exports.DOMCMapReaderFactory = /*#__PURE__*/function (_BaseCMapReaderFactor) {
  function DOMCMapReaderFactory() {
    _classCallCheck(this, DOMCMapReaderFactory);
    return _callSuper(this, DOMCMapReaderFactory, arguments);
  }
  _inherits(DOMCMapReaderFactory, _BaseCMapReaderFactor);
  return _createClass(DOMCMapReaderFactory, [{
    key: "_fetchData",
    value: function _fetchData(url, compressionType) {
      var _this3 = this;
      if (isFetchSupported() && isValidFetchUrl(url, document.baseURI)) {
        return fetch(url).then( /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
            var cMapData;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (response.ok) {
                    _context2.next = 2;
                    break;
                  }
                  throw new Error(response.statusText);
                case 2:
                  if (!_this3.isCompressed) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.t0 = Uint8Array;
                  _context2.next = 6;
                  return response.arrayBuffer();
                case 6:
                  _context2.t1 = _context2.sent;
                  cMapData = new _context2.t0(_context2.t1);
                  _context2.next = 15;
                  break;
                case 10:
                  _context2.t2 = _util.stringToBytes;
                  _context2.next = 13;
                  return response.text();
                case 13:
                  _context2.t3 = _context2.sent;
                  cMapData = (0, _context2.t2)(_context2.t3);
                case 15:
                  return _context2.abrupt("return", {
                    cMapData: cMapData,
                    compressionType: compressionType
                  });
                case 16:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function (_x2) {
            return _ref4.apply(this, arguments);
          };
        }());
      }
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        if (_this3.isCompressed) {
          request.responseType = "arraybuffer";
        }
        request.onreadystatechange = function () {
          if (request.readyState !== XMLHttpRequest.DONE) {
            return;
          }
          if (request.status === 200 || request.status === 0) {
            var cMapData;
            if (_this3.isCompressed && request.response) {
              cMapData = new Uint8Array(request.response);
            } else if (!_this3.isCompressed && request.responseText) {
              cMapData = (0, _util.stringToBytes)(request.responseText);
            }
            if (cMapData) {
              resolve({
                cMapData: cMapData,
                compressionType: compressionType
              });
              return;
            }
          }
          reject(new Error(request.statusText));
        };
        request.send(null);
      });
    }
  }]);
}(BaseCMapReaderFactory);
var DOMSVGFactory = exports.DOMSVGFactory = /*#__PURE__*/function () {
  function DOMSVGFactory() {
    _classCallCheck(this, DOMSVGFactory);
  }
  return _createClass(DOMSVGFactory, [{
    key: "create",
    value: function create(width, height) {
      (0, _util.assert)(width > 0 && height > 0, "Invalid SVG dimensions");
      var svg = document.createElementNS(SVG_NS, "svg:svg");
      svg.setAttribute("version", "1.1");
      svg.setAttribute("width", width + "px");
      svg.setAttribute("height", height + "px");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.setAttribute("viewBox", "0 0 " + width + " " + height);
      return svg;
    }
  }, {
    key: "createElement",
    value: function createElement(type) {
      (0, _util.assert)(typeof type === "string", "Invalid SVG element type");
      return document.createElementNS(SVG_NS, type);
    }
  }]);
}();
var PageViewport = exports.PageViewport = /*#__PURE__*/function () {
  function PageViewport(_ref5) {
    var viewBox = _ref5.viewBox,
      scale = _ref5.scale,
      rotation = _ref5.rotation,
      _ref5$offsetX = _ref5.offsetX,
      offsetX = _ref5$offsetX === void 0 ? 0 : _ref5$offsetX,
      _ref5$offsetY = _ref5.offsetY,
      offsetY = _ref5$offsetY === void 0 ? 0 : _ref5$offsetY,
      _ref5$dontFlip = _ref5.dontFlip,
      dontFlip = _ref5$dontFlip === void 0 ? false : _ref5$dontFlip;
    _classCallCheck(this, PageViewport);
    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var centerX = (viewBox[2] + viewBox[0]) / 2;
    var centerY = (viewBox[3] + viewBox[1]) / 2;
    var rotateA, rotateB, rotateC, rotateD;
    rotation = rotation % 360;
    rotation = rotation < 0 ? rotation + 360 : rotation;
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      case 0:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    var offsetCanvasX, offsetCanvasY;
    var width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }
  return _createClass(PageViewport, [{
    key: "clone",
    value: function clone() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$scale = _ref6.scale,
        scale = _ref6$scale === void 0 ? this.scale : _ref6$scale,
        _ref6$rotation = _ref6.rotation,
        rotation = _ref6$rotation === void 0 ? this.rotation : _ref6$rotation,
        _ref6$offsetX = _ref6.offsetX,
        offsetX = _ref6$offsetX === void 0 ? this.offsetX : _ref6$offsetX,
        _ref6$offsetY = _ref6.offsetY,
        offsetY = _ref6$offsetY === void 0 ? this.offsetY : _ref6$offsetY,
        _ref6$dontFlip = _ref6.dontFlip,
        dontFlip = _ref6$dontFlip === void 0 ? false : _ref6$dontFlip;
      return new PageViewport({
        viewBox: this.viewBox.slice(),
        scale: scale,
        rotation: rotation,
        offsetX: offsetX,
        offsetY: offsetY,
        dontFlip: dontFlip
      });
    }
  }, {
    key: "convertToViewportPoint",
    value: function convertToViewportPoint(x, y) {
      return _util.Util.applyTransform([x, y], this.transform);
    }
  }, {
    key: "convertToViewportRectangle",
    value: function convertToViewportRectangle(rect) {
      var topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);
      var bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);
      return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
    }
  }, {
    key: "convertToPdfPoint",
    value: function convertToPdfPoint(x, y) {
      return _util.Util.applyInverseTransform([x, y], this.transform);
    }
  }]);
}();
var RenderingCancelledException = exports.RenderingCancelledException = /*#__PURE__*/function (_BaseException) {
  function RenderingCancelledException(msg, type) {
    var _this4;
    _classCallCheck(this, RenderingCancelledException);
    _this4 = _callSuper(this, RenderingCancelledException, [msg]);
    _this4.type = type;
    return _this4;
  }
  _inherits(RenderingCancelledException, _BaseException);
  return _createClass(RenderingCancelledException);
}(_util.BaseException);
var LinkTarget = exports.LinkTarget = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
function addLinkAttributes(link) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    url = _ref7.url,
    target = _ref7.target,
    rel = _ref7.rel,
    _ref7$enabled = _ref7.enabled,
    enabled = _ref7$enabled === void 0 ? true : _ref7$enabled;
  (0, _util.assert)(url && typeof url === "string", 'addLinkAttributes: A valid "url" parameter must provided.');
  var urlNullRemoved = (0, _util.removeNullCharacters)(url);
  if (enabled) {
    link.href = link.title = urlNullRemoved;
  } else {
    link.href = "";
    link.title = "Disabled: ".concat(urlNullRemoved);
    link.onclick = function () {
      return false;
    };
  }
  var targetStr = "";
  switch (target) {
    case LinkTarget.NONE:
      break;
    case LinkTarget.SELF:
      targetStr = "_self";
      break;
    case LinkTarget.BLANK:
      targetStr = "_blank";
      break;
    case LinkTarget.PARENT:
      targetStr = "_parent";
      break;
    case LinkTarget.TOP:
      targetStr = "_top";
      break;
  }
  link.target = targetStr;
  link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
}
function getFilenameFromUrl(url) {
  var anchor = url.indexOf("#");
  var query = url.indexOf("?");
  var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
  return url.substring(url.lastIndexOf("/", end) + 1, end);
}
var StatTimer = exports.StatTimer = /*#__PURE__*/function () {
  function StatTimer() {
    _classCallCheck(this, StatTimer);
    this.started = Object.create(null);
    this.times = [];
  }
  return _createClass(StatTimer, [{
    key: "time",
    value: function time(name) {
      if (name in this.started) {
        (0, _util.warn)("Timer is already running for ".concat(name));
      }
      this.started[name] = Date.now();
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(name) {
      if (!(name in this.started)) {
        (0, _util.warn)("Timer has not been started for ".concat(name));
      }
      this.times.push({
        name: name,
        start: this.started[name],
        end: Date.now()
      });
      delete this.started[name];
    }
  }, {
    key: "toString",
    value: function toString() {
      var outBuf = [];
      var longest = 0;
      var _iterator = _createForOfIteratorHelper(this.times),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var time = _step.value;
          var name = time.name;
          if (name.length > longest) {
            longest = name.length;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(this.times),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _time = _step2.value;
          var duration = _time.end - _time.start;
          outBuf.push("".concat(_time.name.padEnd(longest), " ").concat(duration, "ms\n"));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return outBuf.join("");
    }
  }]);
}();
function isFetchSupported() {
  return typeof fetch !== "undefined" && typeof Response !== "undefined" && "body" in Response.prototype && typeof ReadableStream !== "undefined";
}
function isValidFetchUrl(url, baseUrl) {
  try {
    var _ref8 = baseUrl ? new URL(url, baseUrl) : new URL(url),
      protocol = _ref8.protocol;
    return protocol === "http:" || protocol === "https:";
  } catch (ex) {
    return false;
  }
}
function loadScript(src) {
  var removeScriptElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function (evt) {
      if (removeScriptElement) {
        script.remove();
      }
      resolve(evt);
    };
    script.onerror = function () {
      reject(new Error("Cannot load script at: ".concat(script.src)));
    };
    (document.head || document.documentElement).appendChild(script);
  });
}
function deprecated(details) {
  console.log("Deprecated API usage: " + details);
}
var pdfDateStringRegex;
var PDFDateString = exports.PDFDateString = /*#__PURE__*/function () {
  function PDFDateString() {
    _classCallCheck(this, PDFDateString);
  }
  return _createClass(PDFDateString, null, [{
    key: "toDateObject",
    value: function toDateObject(input) {
      if (!input || !(0, _util.isString)(input)) {
        return null;
      }
      if (!pdfDateStringRegex) {
        pdfDateStringRegex = new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
      }
      var matches = pdfDateStringRegex.exec(input);
      if (!matches) {
        return null;
      }
      var year = parseInt(matches[1], 10);
      var month = parseInt(matches[2], 10);
      month = month >= 1 && month <= 12 ? month - 1 : 0;
      var day = parseInt(matches[3], 10);
      day = day >= 1 && day <= 31 ? day : 1;
      var hour = parseInt(matches[4], 10);
      hour = hour >= 0 && hour <= 23 ? hour : 0;
      var minute = parseInt(matches[5], 10);
      minute = minute >= 0 && minute <= 59 ? minute : 0;
      var second = parseInt(matches[6], 10);
      second = second >= 0 && second <= 59 ? second : 0;
      var universalTimeRelation = matches[7] || "Z";
      var offsetHour = parseInt(matches[8], 10);
      offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
      var offsetMinute = parseInt(matches[9], 10) || 0;
      offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
      if (universalTimeRelation === "-") {
        hour += offsetHour;
        minute += offsetMinute;
      } else if (universalTimeRelation === "+") {
        hour -= offsetHour;
        minute -= offsetMinute;
      }
      return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
  }]);
}();

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.VerbosityLevel = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.UNSUPPORTED_FEATURES = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.PageActionEventType = exports.OPS = exports.MissingPDFException = exports.IsLittleEndianCached = exports.IsEvalSupportedCached = exports.InvalidPDFException = exports.ImageKind = exports.IDENTITY_MATRIX = exports.FormatError = exports.FontType = exports.FONT_IDENTITY_MATRIX = exports.DocumentActionEventType = exports.CMapCompressionType = exports.BaseException = exports.AnnotationType = exports.AnnotationStateModelType = exports.AnnotationReviewState = exports.AnnotationReplyType = exports.AnnotationMarkedState = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.AnnotationActionEventType = exports.AbortException = void 0;
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createObjectURL = void 0;
exports.createPromiseCapability = createPromiseCapability;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.encodeToXmlString = encodeToXmlString;
exports.escapeString = escapeString;
exports.getModificationDate = getModificationDate;
exports.getVerbosityLevel = getVerbosityLevel;
exports.info = info;
exports.isArrayBuffer = isArrayBuffer;
exports.isArrayEqual = isArrayEqual;
exports.isAscii = isAscii;
exports.isBool = isBool;
exports.isNum = isNum;
exports.isSameOrigin = isSameOrigin;
exports.isString = isString;
exports.objectFromEntries = objectFromEntries;
exports.objectSize = objectSize;
exports.removeNullCharacters = removeNullCharacters;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF16BEString = stringToUTF16BEString;
exports.stringToUTF8String = stringToUTF8String;
exports.unreachable = unreachable;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
__w_pdfjs_require__(3);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var IDENTITY_MATRIX = exports.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var FONT_IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
var PermissionFlag = exports.PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
var TextRenderingMode = exports.TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
var ImageKind = exports.ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
var AnnotationType = exports.AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
var AnnotationStateModelType = exports.AnnotationStateModelType = {
  MARKED: "Marked",
  REVIEW: "Review"
};
var AnnotationMarkedState = exports.AnnotationMarkedState = {
  MARKED: "Marked",
  UNMARKED: "Unmarked"
};
var AnnotationReviewState = exports.AnnotationReviewState = {
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  NONE: "None"
};
var AnnotationReplyType = exports.AnnotationReplyType = {
  GROUP: "Group",
  REPLY: "R"
};
var AnnotationFlag = exports.AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
var AnnotationFieldFlag = exports.AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
var AnnotationBorderStyleType = exports.AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
var AnnotationActionEventType = exports.AnnotationActionEventType = {
  E: "Mouse Enter",
  X: "Mouse Exit",
  D: "Mouse Down",
  U: "Mouse Up",
  Fo: "Focus",
  Bl: "Blur",
  PO: "PageOpen",
  PC: "PageClose",
  PV: "PageVisible",
  PI: "PageInvisible",
  K: "Keystroke",
  F: "Format",
  V: "Validate",
  C: "Calculate"
};
var DocumentActionEventType = exports.DocumentActionEventType = {
  WC: "WillClose",
  WS: "WillSave",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
};
var PageActionEventType = exports.PageActionEventType = {
  O: "PageOpen",
  C: "PageClose"
};
var StreamType = exports.StreamType = {
  UNKNOWN: "UNKNOWN",
  FLATE: "FLATE",
  LZW: "LZW",
  DCT: "DCT",
  JPX: "JPX",
  JBIG: "JBIG",
  A85: "A85",
  AHX: "AHX",
  CCF: "CCF",
  RLX: "RLX"
};
var FontType = exports.FontType = {
  UNKNOWN: "UNKNOWN",
  TYPE1: "TYPE1",
  TYPE1C: "TYPE1C",
  CIDFONTTYPE0: "CIDFONTTYPE0",
  CIDFONTTYPE0C: "CIDFONTTYPE0C",
  TRUETYPE: "TRUETYPE",
  CIDFONTTYPE2: "CIDFONTTYPE2",
  TYPE3: "TYPE3",
  OPENTYPE: "OPENTYPE",
  TYPE0: "TYPE0",
  MMTYPE1: "MMTYPE1"
};
var VerbosityLevel = exports.VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
var CMapCompressionType = exports.CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
var OPS = exports.OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
var UNSUPPORTED_FEATURES = exports.UNSUPPORTED_FEATURES = {
  unknown: "unknown",
  forms: "forms",
  javaScript: "javaScript",
  smask: "smask",
  shadingPattern: "shadingPattern",
  font: "font",
  errorTilingPattern: "errorTilingPattern",
  errorExtGState: "errorExtGState",
  errorXObject: "errorXObject",
  errorFontLoadType3: "errorFontLoadType3",
  errorFontState: "errorFontState",
  errorFontMissing: "errorFontMissing",
  errorFontTranslate: "errorFontTranslate",
  errorColorSpace: "errorColorSpace",
  errorOperatorList: "errorOperatorList",
  errorFontToUnicode: "errorFontToUnicode",
  errorFontLoadNative: "errorFontLoadNative",
  errorFontGetPath: "errorFontGetPath",
  errorMarkedContent: "errorMarkedContent"
};
var PasswordResponses = exports.PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
var verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log("Info: ".concat(msg));
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log("Warning: ".concat(msg));
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function isSameOrigin(baseUrl, otherUrl) {
  var base;
  try {
    base = new URL(baseUrl);
    if (!base.origin || base.origin === "null") {
      return false;
    }
  } catch (e) {
    return false;
  }
  var other = new URL(otherUrl, base);
  return base.origin === other.origin;
}
function _isValidProtocol(url) {
  if (!url) {
    return false;
  }
  switch (url.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }
  try {
    var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}
  return null;
}
function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return value;
}
var BaseException = exports.BaseException = function BaseExceptionClosure() {
  function BaseException(message) {
    if (this.constructor === BaseException) {
      unreachable("Cannot initialize BaseException.");
    }
    this.message = message;
    this.name = this.constructor.name;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();
var PasswordException = exports.PasswordException = /*#__PURE__*/function (_BaseException) {
  function PasswordException(msg, code) {
    var _this;
    _classCallCheck(this, PasswordException);
    _this = _callSuper(this, PasswordException, [msg]);
    _this.code = code;
    return _this;
  }
  _inherits(PasswordException, _BaseException);
  return _createClass(PasswordException);
}(BaseException);
var UnknownErrorException = exports.UnknownErrorException = /*#__PURE__*/function (_BaseException2) {
  function UnknownErrorException(msg, details) {
    var _this2;
    _classCallCheck(this, UnknownErrorException);
    _this2 = _callSuper(this, UnknownErrorException, [msg]);
    _this2.details = details;
    return _this2;
  }
  _inherits(UnknownErrorException, _BaseException2);
  return _createClass(UnknownErrorException);
}(BaseException);
var InvalidPDFException = exports.InvalidPDFException = /*#__PURE__*/function (_BaseException3) {
  function InvalidPDFException() {
    _classCallCheck(this, InvalidPDFException);
    return _callSuper(this, InvalidPDFException, arguments);
  }
  _inherits(InvalidPDFException, _BaseException3);
  return _createClass(InvalidPDFException);
}(BaseException);
var MissingPDFException = exports.MissingPDFException = /*#__PURE__*/function (_BaseException4) {
  function MissingPDFException() {
    _classCallCheck(this, MissingPDFException);
    return _callSuper(this, MissingPDFException, arguments);
  }
  _inherits(MissingPDFException, _BaseException4);
  return _createClass(MissingPDFException);
}(BaseException);
var UnexpectedResponseException = exports.UnexpectedResponseException = /*#__PURE__*/function (_BaseException5) {
  function UnexpectedResponseException(msg, status) {
    var _this3;
    _classCallCheck(this, UnexpectedResponseException);
    _this3 = _callSuper(this, UnexpectedResponseException, [msg]);
    _this3.status = status;
    return _this3;
  }
  _inherits(UnexpectedResponseException, _BaseException5);
  return _createClass(UnexpectedResponseException);
}(BaseException);
var FormatError = exports.FormatError = /*#__PURE__*/function (_BaseException6) {
  function FormatError() {
    _classCallCheck(this, FormatError);
    return _callSuper(this, FormatError, arguments);
  }
  _inherits(FormatError, _BaseException6);
  return _createClass(FormatError);
}(BaseException);
var AbortException = exports.AbortException = /*#__PURE__*/function (_BaseException7) {
  function AbortException() {
    _classCallCheck(this, AbortException);
    return _callSuper(this, AbortException, arguments);
  }
  _inherits(AbortException, _BaseException7);
  return _createClass(AbortException);
}(BaseException);
var NullCharactersRegExp = /\x00/g;
function removeNullCharacters(str) {
  if (typeof str !== "string") {
    warn("The argument for removeNullCharacters must be a string.");
    return str;
  }
  return str.replace(NullCharactersRegExp, "");
}
function bytesToString(bytes) {
  assert(bytes !== null && _typeof(bytes) === "object" && bytes.length !== undefined, "Invalid argument for bytesToString");
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  var strBuf = [];
  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  assert(typeof str === "string", "Invalid argument for stringToBytes");
  var length = str.length;
  var bytes = new Uint8Array(length);
  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }
  return bytes;
}
function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }
  assert(arr.byteLength !== undefined, "arrayByteLength - invalid argument.");
  return arr.byteLength;
}
function arraysToBytes(arr) {
  var length = arr.length;
  if (length === 1 && arr[0] instanceof Uint8Array) {
    return arr[0];
  }
  var resultLength = 0;
  for (var i = 0; i < length; i++) {
    resultLength += arrayByteLength(arr[i]);
  }
  var pos = 0;
  var data = new Uint8Array(resultLength);
  for (var _i = 0; _i < length; _i++) {
    var item = arr[_i];
    if (!(item instanceof Uint8Array)) {
      if (typeof item === "string") {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }
    var itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }
  return data;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function objectSize(obj) {
  return Object.keys(obj).length;
}
function objectFromEntries(iterable) {
  return Object.assign(Object.create(null), Object.fromEntries(iterable));
}
function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
var IsLittleEndianCached = exports.IsLittleEndianCached = {
  get value() {
    return shadow(this, "value", isLittleEndian());
  }
};
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch (e) {
    return false;
  }
}
var IsEvalSupportedCached = exports.IsEvalSupportedCached = {
  get value() {
    return shadow(this, "value", isEvalSupported());
  }
};
var hexNumbers = _toConsumableArray(Array(256).keys()).map(function (n) {
  return n.toString(16).padStart(2, "0");
});
var Util = exports.Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }
  return _createClass(Util, null, [{
    key: "makeHexColor",
    value: function makeHexColor(r, g, b) {
      return "#".concat(hexNumbers[r]).concat(hexNumbers[g]).concat(hexNumbers[b]);
    }
  }, {
    key: "transform",
    value: function transform(m1, m2) {
      return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(p, m) {
      var xt = p[0] * m[0] + p[1] * m[2] + m[4];
      var yt = p[0] * m[1] + p[1] * m[3] + m[5];
      return [xt, yt];
    }
  }, {
    key: "applyInverseTransform",
    value: function applyInverseTransform(p, m) {
      var d = m[0] * m[3] - m[1] * m[2];
      var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
      var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
      return [xt, yt];
    }
  }, {
    key: "getAxialAlignedBoundingBox",
    value: function getAxialAlignedBoundingBox(r, m) {
      var p1 = Util.applyTransform(r, m);
      var p2 = Util.applyTransform(r.slice(2, 4), m);
      var p3 = Util.applyTransform([r[0], r[3]], m);
      var p4 = Util.applyTransform([r[2], r[1]], m);
      return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
    }
  }, {
    key: "inverseTransform",
    value: function inverseTransform(m) {
      var d = m[0] * m[3] - m[1] * m[2];
      return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
    }
  }, {
    key: "apply3dTransform",
    value: function apply3dTransform(m, v) {
      return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
    }
  }, {
    key: "singularValueDecompose2dScale",
    value: function singularValueDecompose2dScale(m) {
      var transpose = [m[0], m[2], m[1], m[3]];
      var a = m[0] * transpose[0] + m[1] * transpose[2];
      var b = m[0] * transpose[1] + m[1] * transpose[3];
      var c = m[2] * transpose[0] + m[3] * transpose[2];
      var d = m[2] * transpose[1] + m[3] * transpose[3];
      var first = (a + d) / 2;
      var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
      var sx = first + second || 1;
      var sy = first - second || 1;
      return [Math.sqrt(sx), Math.sqrt(sy)];
    }
  }, {
    key: "normalizeRect",
    value: function normalizeRect(rect) {
      var r = rect.slice(0);
      if (rect[0] > rect[2]) {
        r[0] = rect[2];
        r[2] = rect[0];
      }
      if (rect[1] > rect[3]) {
        r[1] = rect[3];
        r[3] = rect[1];
      }
      return r;
    }
  }, {
    key: "intersect",
    value: function intersect(rect1, rect2) {
      function compare(a, b) {
        return a - b;
      }
      var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
      var orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
      var result = [];
      rect1 = Util.normalizeRect(rect1);
      rect2 = Util.normalizeRect(rect2);
      if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
        result[0] = orderedX[1];
        result[2] = orderedX[2];
      } else {
        return null;
      }
      if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
        result[1] = orderedY[1];
        result[3] = orderedY[2];
      } else {
        return null;
      }
      return result;
    }
  }]);
}();
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];
function stringToPDFString(str) {
  var length = str.length,
    strBuf = [];
  if (str[0] === "\xFE" && str[1] === "\xFF") {
    for (var i = 2; i < length; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
    }
  } else if (str[0] === "\xFF" && str[1] === "\xFE") {
    for (var _i2 = 2; _i2 < length; _i2 += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(_i2 + 1) << 8 | str.charCodeAt(_i2)));
    }
  } else {
    for (var _i3 = 0; _i3 < length; ++_i3) {
      var code = PDFStringTranslateTable[str.charCodeAt(_i3)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(_i3));
    }
  }
  return strBuf.join("");
}
function escapeString(str) {
  return str.replace(/([()\\\n\r])/g, function (match) {
    if (match === "\n") {
      return "\\n";
    } else if (match === "\r") {
      return "\\r";
    }
    return "\\".concat(match);
  });
}
function isAscii(str) {
  return /^[\x00-\x7F]*$/.test(str);
}
function stringToUTF16BEString(str) {
  var buf = ["\xFE\xFF"];
  for (var i = 0, ii = str.length; i < ii; i++) {
    var _char = str.charCodeAt(i);
    buf.push(String.fromCharCode(_char >> 8 & 0xff));
    buf.push(String.fromCharCode(_char & 0xff));
  }
  return buf.join("");
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isBool(v) {
  return typeof v === "boolean";
}
function isNum(v) {
  return typeof v === "number";
}
function isString(v) {
  return typeof v === "string";
}
function isArrayBuffer(v) {
  return _typeof(v) === "object" && v !== null && v.byteLength !== undefined;
}
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every(function (element, index) {
    return element === arr2[index];
  });
}
function getModificationDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
  return buffer.join("");
}
function createPromiseCapability() {
  var capability = Object.create(null);
  var isSettled = false;
  Object.defineProperty(capability, "settled", {
    get: function get() {
      return isSettled;
    }
  });
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = function (data) {
      isSettled = true;
      resolve(data);
    };
    capability.reject = function (reason) {
      isSettled = true;
      reject(reason);
    };
  });
  return capability;
}
var createObjectURL = exports.createObjectURL = function createObjectURLClosure() {
  var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return function createObjectURL(data, contentType) {
    var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (!forceDataSchema && URL.createObjectURL) {
      var blob = new Blob([data], {
        type: contentType
      });
      return URL.createObjectURL(blob);
    }
    var buffer = "data:".concat(contentType, ";base64,");
    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xff;
      var b2 = data[i + 1] & 0xff;
      var b3 = data[i + 2] & 0xff;
      var d1 = b1 >> 2,
        d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3f : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }
    return buffer;
  };
}();
var XMLEntities = {
  0x3c: "&lt;",
  0x3e: "&gt;",
  0x26: "&amp;",
  0x22: "&quot;",
  0x27: "&apos;"
};
function encodeToXmlString(str) {
  var buffer = [];
  var start = 0;
  for (var i = 0, ii = str.length; i < ii; i++) {
    var _char2 = str.codePointAt(i);
    if (0x20 <= _char2 && _char2 <= 0x7e) {
      var entity = XMLEntities[_char2];
      if (entity) {
        if (start < i) {
          buffer.push(str.substring(start, i));
        }
        buffer.push(entity);
        start = i + 1;
      }
    } else {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push("&#x".concat(_char2.toString(16).toUpperCase(), ";"));
      if (_char2 > 0xd7ff && (_char2 < 0xe000 || _char2 > 0xfffd)) {
        i++;
      }
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join("");
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";


var _is_node = __w_pdfjs_require__(4);
if (typeof globalThis === "undefined" || !globalThis._pdfjsCompatibilityChecked) {
  if (typeof globalThis === "undefined" || globalThis.Math !== Math) {
    globalThis = __w_pdfjs_require__(5);
  }
  globalThis._pdfjsCompatibilityChecked = true;
  (function checkNodeBtoa() {
    if (globalThis.btoa || !_is_node.isNodeJS) {
      return;
    }
    globalThis.btoa = function (chars) {
      return Buffer.from(chars, "binary").toString("base64");
    };
  })();
  (function checkNodeAtob() {
    if (globalThis.atob || !_is_node.isNodeJS) {
      return;
    }
    globalThis.atob = function (input) {
      return Buffer.from(input, "base64").toString("binary");
    };
  })();
  (function checkObjectFromEntries() {
    if (Object.fromEntries) {
      return;
    }
    __w_pdfjs_require__(72);
  })();
  (function checkPromise() {
    if (globalThis.Promise.allSettled) {
      return;
    }
    globalThis.Promise = __w_pdfjs_require__(103);
  })();
  (function checkURL() {
    globalThis.URL = __w_pdfjs_require__(154);
  })();
  (function checkReadableStream() {
    var isReadableStreamSupported = false;
    if (typeof ReadableStream !== "undefined") {
      try {
        new ReadableStream({
          start: function start(controller) {
            controller.close();
          }
        });
        isReadableStreamSupported = true;
      } catch (e) {}
    }
    if (isReadableStreamSupported) {
      return;
    }
    globalThis.ReadableStream = (__w_pdfjs_require__(173).ReadableStream);
  })();
  (function checkStringPadStart() {
    if (String.prototype.padStart) {
      return;
    }
    __w_pdfjs_require__(174);
  })();
  (function checkStringPadEnd() {
    if (String.prototype.padEnd) {
      return;
    }
    __w_pdfjs_require__(180);
  })();
  (function checkObjectValues() {
    if (Object.values) {
      return;
    }
    Object.values = __w_pdfjs_require__(182);
  })();
  (function checkObjectEntries() {
    if (Object.entries) {
      return;
    }
    Object.entries = __w_pdfjs_require__(185);
  })();
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNodeJS = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isNodeJS = exports.isNodeJS = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(6);
module.exports = __w_pdfjs_require__(8);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var global = __w_pdfjs_require__(8);
$({
 global: true,
 forced: global.globalThis !== global
}, { globalThis: global });

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var getOwnPropertyDescriptor = (__w_pdfjs_require__(9).f);
var createNonEnumerableProperty = __w_pdfjs_require__(47);
var defineBuiltIn = __w_pdfjs_require__(51);
var defineGlobalProperty = __w_pdfjs_require__(41);
var copyConstructorProperties = __w_pdfjs_require__(59);
var isForced = __w_pdfjs_require__(71);
module.exports = function (options, source) {
 var TARGET = options.target;
 var GLOBAL = options.global;
 var STATIC = options.stat;
 var FORCED, target, key, targetProperty, sourceProperty, descriptor;
 if (GLOBAL) {
  target = global;
 } else if (STATIC) {
  target = global[TARGET] || defineGlobalProperty(TARGET, {});
 } else {
  target = global[TARGET] && global[TARGET].prototype;
 }
 if (target)
  for (key in source) {
   sourceProperty = source[key];
   if (options.dontCallGetSet) {
    descriptor = getOwnPropertyDescriptor(target, key);
    targetProperty = descriptor && descriptor.value;
   } else
    targetProperty = target[key];
   FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
   if (!FORCED && targetProperty !== undefined) {
    if (typeof sourceProperty == typeof targetProperty)
     continue;
    copyConstructorProperties(sourceProperty, targetProperty);
   }
   if (options.sham || targetProperty && targetProperty.sham) {
    createNonEnumerableProperty(sourceProperty, 'sham', true);
   }
   defineBuiltIn(target, key, sourceProperty, options);
  }
};

/***/ }),
/* 8 */
/***/ (function(module) {

"use strict";

var check = function (it) {
 return it && it.Math === Math && it;
};
module.exports = check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || check(typeof this == 'object' && this) || function () {
 return this;
}() || Function('return this')();

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var call = __w_pdfjs_require__(12);
var propertyIsEnumerableModule = __w_pdfjs_require__(14);
var createPropertyDescriptor = __w_pdfjs_require__(15);
var toIndexedObject = __w_pdfjs_require__(16);
var toPropertyKey = __w_pdfjs_require__(22);
var hasOwn = __w_pdfjs_require__(42);
var IE8_DOM_DEFINE = __w_pdfjs_require__(45);
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
 O = toIndexedObject(O);
 P = toPropertyKey(P);
 if (IE8_DOM_DEFINE)
  try {
   return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
  }
 if (hasOwn(O, P))
  return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(11);
module.exports = !fails(function () {
 return Object.defineProperty({}, 1, {
  get: function () {
   return 7;
  }
 })[1] !== 7;
});

/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
 try {
  return !!exec();
 } catch (error) {
  return true;
 }
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var NATIVE_BIND = __w_pdfjs_require__(13);
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function () {
 return call.apply(call, arguments);
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(11);
module.exports = !fails(function () {
 var test = function () {
 }.bind();
 return typeof test != 'function' || test.hasOwnProperty('prototype');
});

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
 var descriptor = getOwnPropertyDescriptor(this, V);
 return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
 return {
  enumerable: !(bitmap & 1),
  configurable: !(bitmap & 2),
  writable: !(bitmap & 4),
  value: value
 };
};

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var IndexedObject = __w_pdfjs_require__(17);
var requireObjectCoercible = __w_pdfjs_require__(20);
module.exports = function (it) {
 return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var fails = __w_pdfjs_require__(11);
var classof = __w_pdfjs_require__(19);
var $Object = Object;
var split = uncurryThis(''.split);
module.exports = fails(function () {
 return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
 return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var NATIVE_BIND = __w_pdfjs_require__(13);
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
 return function () {
  return call.apply(fn, arguments);
 };
};

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function (it) {
 return stringSlice(toString(it), 8, -1);
};

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isNullOrUndefined = __w_pdfjs_require__(21);
var $TypeError = TypeError;
module.exports = function (it) {
 if (isNullOrUndefined(it))
  throw new $TypeError("Can't call method on " + it);
 return it;
};

/***/ }),
/* 21 */
/***/ ((module) => {

"use strict";

module.exports = function (it) {
 return it === null || it === undefined;
};

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toPrimitive = __w_pdfjs_require__(23);
var isSymbol = __w_pdfjs_require__(26);
module.exports = function (argument) {
 var key = toPrimitive(argument, 'string');
 return isSymbol(key) ? key : key + '';
};

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var call = __w_pdfjs_require__(12);
var isObject = __w_pdfjs_require__(24);
var isSymbol = __w_pdfjs_require__(26);
var getMethod = __w_pdfjs_require__(33);
var ordinaryToPrimitive = __w_pdfjs_require__(36);
var wellKnownSymbol = __w_pdfjs_require__(37);
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
module.exports = function (input, pref) {
 if (!isObject(input) || isSymbol(input))
  return input;
 var exoticToPrim = getMethod(input, TO_PRIMITIVE);
 var result;
 if (exoticToPrim) {
  if (pref === undefined)
   pref = 'default';
  result = call(exoticToPrim, input, pref);
  if (!isObject(result) || isSymbol(result))
   return result;
  throw new $TypeError("Can't convert object to primitive value");
 }
 if (pref === undefined)
  pref = 'number';
 return ordinaryToPrimitive(input, pref);
};

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isCallable = __w_pdfjs_require__(25);
module.exports = function (it) {
 return typeof it == 'object' ? it !== null : isCallable(it);
};

/***/ }),
/* 25 */
/***/ ((module) => {

"use strict";

var documentAll = typeof document == 'object' && document.all;
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
 return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
 return typeof argument == 'function';
};

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var getBuiltIn = __w_pdfjs_require__(27);
var isCallable = __w_pdfjs_require__(25);
var isPrototypeOf = __w_pdfjs_require__(28);
var USE_SYMBOL_AS_UID = __w_pdfjs_require__(29);
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function (it) {
 return typeof it == 'symbol';
} : function (it) {
 var $Symbol = getBuiltIn('Symbol');
 return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var isCallable = __w_pdfjs_require__(25);
var aFunction = function (argument) {
 return isCallable(argument) ? argument : undefined;
};
module.exports = function (namespace, method) {
 return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
module.exports = uncurryThis({}.isPrototypeOf);

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var NATIVE_SYMBOL = __w_pdfjs_require__(30);
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var V8_VERSION = __w_pdfjs_require__(31);
var fails = __w_pdfjs_require__(11);
var global = __w_pdfjs_require__(8);
var $String = global.String;
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
 var symbol = Symbol('symbol detection');
 return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var userAgent = __w_pdfjs_require__(32);
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
 match = v8.split('.');
 version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent) {
 match = userAgent.match(/Edge\/(\d+)/);
 if (!match || match[1] >= 74) {
  match = userAgent.match(/Chrome\/(\d+)/);
  if (match)
   version = +match[1];
 }
}
module.exports = version;

/***/ }),
/* 32 */
/***/ ((module) => {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var aCallable = __w_pdfjs_require__(34);
var isNullOrUndefined = __w_pdfjs_require__(21);
module.exports = function (V, P) {
 var func = V[P];
 return isNullOrUndefined(func) ? undefined : aCallable(func);
};

/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isCallable = __w_pdfjs_require__(25);
var tryToString = __w_pdfjs_require__(35);
var $TypeError = TypeError;
module.exports = function (argument) {
 if (isCallable(argument))
  return argument;
 throw new $TypeError(tryToString(argument) + ' is not a function');
};

/***/ }),
/* 35 */
/***/ ((module) => {

"use strict";

var $String = String;
module.exports = function (argument) {
 try {
  return $String(argument);
 } catch (error) {
  return 'Object';
 }
};

/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var call = __w_pdfjs_require__(12);
var isCallable = __w_pdfjs_require__(25);
var isObject = __w_pdfjs_require__(24);
var $TypeError = TypeError;
module.exports = function (input, pref) {
 var fn, val;
 if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
  return val;
 if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
  return val;
 if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
  return val;
 throw new $TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var shared = __w_pdfjs_require__(38);
var hasOwn = __w_pdfjs_require__(42);
var uid = __w_pdfjs_require__(44);
var NATIVE_SYMBOL = __w_pdfjs_require__(30);
var USE_SYMBOL_AS_UID = __w_pdfjs_require__(29);
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function (name) {
 if (!hasOwn(WellKnownSymbolsStore, name)) {
  WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
 }
 return WellKnownSymbolsStore[name];
};

/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var store = __w_pdfjs_require__(39);
module.exports = function (key, value) {
 return store[key] || (store[key] = value || {});
};

/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var IS_PURE = __w_pdfjs_require__(40);
var globalThis = __w_pdfjs_require__(8);
var defineGlobalProperty = __w_pdfjs_require__(41);
var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
 version: '3.37.1',
 mode: IS_PURE ? 'pure' : 'global',
 copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
 license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
 source: 'https://github.com/zloirock/core-js'
});

/***/ }),
/* 40 */
/***/ ((module) => {

"use strict";

module.exports = false;

/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var defineProperty = Object.defineProperty;
module.exports = function (key, value) {
 try {
  defineProperty(global, key, {
   value: value,
   configurable: true,
   writable: true
  });
 } catch (error) {
  global[key] = value;
 }
 return value;
};

/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var toObject = __w_pdfjs_require__(43);
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
module.exports = Object.hasOwn || function hasOwn(it, key) {
 return hasOwnProperty(toObject(it), key);
};

/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var requireObjectCoercible = __w_pdfjs_require__(20);
var $Object = Object;
module.exports = function (argument) {
 return $Object(requireObjectCoercible(argument));
};

/***/ }),
/* 44 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function (key) {
 return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var fails = __w_pdfjs_require__(11);
var createElement = __w_pdfjs_require__(46);
module.exports = !DESCRIPTORS && !fails(function () {
 return Object.defineProperty(createElement('div'), 'a', {
  get: function () {
   return 7;
  }
 }).a !== 7;
});

/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var isObject = __w_pdfjs_require__(24);
var document = global.document;
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
 return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var definePropertyModule = __w_pdfjs_require__(48);
var createPropertyDescriptor = __w_pdfjs_require__(15);
module.exports = DESCRIPTORS ? function (object, key, value) {
 return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
 object[key] = value;
 return object;
};

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var IE8_DOM_DEFINE = __w_pdfjs_require__(45);
var V8_PROTOTYPE_DEFINE_BUG = __w_pdfjs_require__(49);
var anObject = __w_pdfjs_require__(50);
var toPropertyKey = __w_pdfjs_require__(22);
var $TypeError = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
 anObject(O);
 P = toPropertyKey(P);
 anObject(Attributes);
 if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
  var current = $getOwnPropertyDescriptor(O, P);
  if (current && current[WRITABLE]) {
   O[P] = Attributes.value;
   Attributes = {
    configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
    enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
    writable: false
   };
  }
 }
 return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
 anObject(O);
 P = toPropertyKey(P);
 anObject(Attributes);
 if (IE8_DOM_DEFINE)
  try {
   return $defineProperty(O, P, Attributes);
  } catch (error) {
  }
 if ('get' in Attributes || 'set' in Attributes)
  throw new $TypeError('Accessors not supported');
 if ('value' in Attributes)
  O[P] = Attributes.value;
 return O;
};

/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var fails = __w_pdfjs_require__(11);
module.exports = DESCRIPTORS && fails(function () {
 return Object.defineProperty(function () {
 }, 'prototype', {
  value: 42,
  writable: false
 }).prototype !== 42;
});

/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isObject = __w_pdfjs_require__(24);
var $String = String;
var $TypeError = TypeError;
module.exports = function (argument) {
 if (isObject(argument))
  return argument;
 throw new $TypeError($String(argument) + ' is not an object');
};

/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isCallable = __w_pdfjs_require__(25);
var definePropertyModule = __w_pdfjs_require__(48);
var makeBuiltIn = __w_pdfjs_require__(52);
var defineGlobalProperty = __w_pdfjs_require__(41);
module.exports = function (O, key, value, options) {
 if (!options)
  options = {};
 var simple = options.enumerable;
 var name = options.name !== undefined ? options.name : key;
 if (isCallable(value))
  makeBuiltIn(value, name, options);
 if (options.global) {
  if (simple)
   O[key] = value;
  else
   defineGlobalProperty(key, value);
 } else {
  try {
   if (!options.unsafe)
    delete O[key];
   else if (O[key])
    simple = true;
  } catch (error) {
  }
  if (simple)
   O[key] = value;
  else
   definePropertyModule.f(O, key, {
    value: value,
    enumerable: false,
    configurable: !options.nonConfigurable,
    writable: !options.nonWritable
   });
 }
 return O;
};

/***/ }),
/* 52 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var fails = __w_pdfjs_require__(11);
var isCallable = __w_pdfjs_require__(25);
var hasOwn = __w_pdfjs_require__(42);
var DESCRIPTORS = __w_pdfjs_require__(10);
var CONFIGURABLE_FUNCTION_NAME = (__w_pdfjs_require__(53).CONFIGURABLE);
var inspectSource = __w_pdfjs_require__(54);
var InternalStateModule = __w_pdfjs_require__(55);
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
 return defineProperty(function () {
 }, 'length', { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function (value, name, options) {
 if (stringSlice($String(name), 0, 7) === 'Symbol(') {
  name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
 }
 if (options && options.getter)
  name = 'get ' + name;
 if (options && options.setter)
  name = 'set ' + name;
 if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
  if (DESCRIPTORS)
   defineProperty(value, 'name', {
    value: name,
    configurable: true
   });
  else
   value.name = name;
 }
 if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
  defineProperty(value, 'length', { value: options.arity });
 }
 try {
  if (options && hasOwn(options, 'constructor') && options.constructor) {
   if (DESCRIPTORS)
    defineProperty(value, 'prototype', { writable: false });
  } else if (value.prototype)
   value.prototype = undefined;
 } catch (error) {
 }
 var state = enforceInternalState(value);
 if (!hasOwn(state, 'source')) {
  state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
 }
 return value;
};
Function.prototype.toString = makeBuiltIn(function toString() {
 return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

/***/ }),
/* 53 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var hasOwn = __w_pdfjs_require__(42);
var FunctionPrototype = Function.prototype;
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
var PROPER = EXISTS && function something() {
}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
 EXISTS: EXISTS,
 PROPER: PROPER,
 CONFIGURABLE: CONFIGURABLE
};

/***/ }),
/* 54 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var isCallable = __w_pdfjs_require__(25);
var store = __w_pdfjs_require__(39);
var functionToString = uncurryThis(Function.toString);
if (!isCallable(store.inspectSource)) {
 store.inspectSource = function (it) {
  return functionToString(it);
 };
}
module.exports = store.inspectSource;

/***/ }),
/* 55 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __w_pdfjs_require__(56);
var global = __w_pdfjs_require__(8);
var isObject = __w_pdfjs_require__(24);
var createNonEnumerableProperty = __w_pdfjs_require__(47);
var hasOwn = __w_pdfjs_require__(42);
var shared = __w_pdfjs_require__(39);
var sharedKey = __w_pdfjs_require__(57);
var hiddenKeys = __w_pdfjs_require__(58);
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function (it) {
 return has(it) ? get(it) : set(it, {});
};
var getterFor = function (TYPE) {
 return function (it) {
  var state;
  if (!isObject(it) || (state = get(it)).type !== TYPE) {
   throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
  }
  return state;
 };
};
if (NATIVE_WEAK_MAP || shared.state) {
 var store = shared.state || (shared.state = new WeakMap());
 store.get = store.get;
 store.has = store.has;
 store.set = store.set;
 set = function (it, metadata) {
  if (store.has(it))
   throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  metadata.facade = it;
  store.set(it, metadata);
  return metadata;
 };
 get = function (it) {
  return store.get(it) || {};
 };
 has = function (it) {
  return store.has(it);
 };
} else {
 var STATE = sharedKey('state');
 hiddenKeys[STATE] = true;
 set = function (it, metadata) {
  if (hasOwn(it, STATE))
   throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  metadata.facade = it;
  createNonEnumerableProperty(it, STATE, metadata);
  return metadata;
 };
 get = function (it) {
  return hasOwn(it, STATE) ? it[STATE] : {};
 };
 has = function (it) {
  return hasOwn(it, STATE);
 };
}
module.exports = {
 set: set,
 get: get,
 has: has,
 enforce: enforce,
 getterFor: getterFor
};

/***/ }),
/* 56 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var isCallable = __w_pdfjs_require__(25);
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

/***/ }),
/* 57 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var shared = __w_pdfjs_require__(38);
var uid = __w_pdfjs_require__(44);
var keys = shared('keys');
module.exports = function (key) {
 return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 58 */
/***/ ((module) => {

"use strict";

module.exports = {};

/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var hasOwn = __w_pdfjs_require__(42);
var ownKeys = __w_pdfjs_require__(60);
var getOwnPropertyDescriptorModule = __w_pdfjs_require__(9);
var definePropertyModule = __w_pdfjs_require__(48);
module.exports = function (target, source, exceptions) {
 var keys = ownKeys(source);
 var defineProperty = definePropertyModule.f;
 var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
 for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
   defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
 }
};

/***/ }),
/* 60 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var getBuiltIn = __w_pdfjs_require__(27);
var uncurryThis = __w_pdfjs_require__(18);
var getOwnPropertyNamesModule = __w_pdfjs_require__(61);
var getOwnPropertySymbolsModule = __w_pdfjs_require__(70);
var anObject = __w_pdfjs_require__(50);
var concat = uncurryThis([].concat);
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
 var keys = getOwnPropertyNamesModule.f(anObject(it));
 var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
 return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";

var internalObjectKeys = __w_pdfjs_require__(62);
var enumBugKeys = __w_pdfjs_require__(69);
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
 return internalObjectKeys(O, hiddenKeys);
};

/***/ }),
/* 62 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var hasOwn = __w_pdfjs_require__(42);
var toIndexedObject = __w_pdfjs_require__(16);
var indexOf = (__w_pdfjs_require__(63).indexOf);
var hiddenKeys = __w_pdfjs_require__(58);
var push = uncurryThis([].push);
module.exports = function (object, names) {
 var O = toIndexedObject(object);
 var i = 0;
 var result = [];
 var key;
 for (key in O)
  !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
 while (names.length > i)
  if (hasOwn(O, key = names[i++])) {
   ~indexOf(result, key) || push(result, key);
  }
 return result;
};

/***/ }),
/* 63 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toIndexedObject = __w_pdfjs_require__(16);
var toAbsoluteIndex = __w_pdfjs_require__(64);
var lengthOfArrayLike = __w_pdfjs_require__(67);
var createMethod = function (IS_INCLUDES) {
 return function ($this, el, fromIndex) {
  var O = toIndexedObject($this);
  var length = lengthOfArrayLike(O);
  if (length === 0)
   return !IS_INCLUDES && -1;
  var index = toAbsoluteIndex(fromIndex, length);
  var value;
  if (IS_INCLUDES && el !== el)
   while (length > index) {
    value = O[index++];
    if (value !== value)
     return true;
   }
  else
   for (; length > index; index++) {
    if ((IS_INCLUDES || index in O) && O[index] === el)
     return IS_INCLUDES || index || 0;
   }
  return !IS_INCLUDES && -1;
 };
};
module.exports = {
 includes: createMethod(true),
 indexOf: createMethod(false)
};

/***/ }),
/* 64 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toIntegerOrInfinity = __w_pdfjs_require__(65);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
 var integer = toIntegerOrInfinity(index);
 return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),
/* 65 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var trunc = __w_pdfjs_require__(66);
module.exports = function (argument) {
 var number = +argument;
 return number !== number || number === 0 ? 0 : trunc(number);
};

/***/ }),
/* 66 */
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;
module.exports = Math.trunc || function trunc(x) {
 var n = +x;
 return (n > 0 ? floor : ceil)(n);
};

/***/ }),
/* 67 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toLength = __w_pdfjs_require__(68);
module.exports = function (obj) {
 return toLength(obj.length);
};

/***/ }),
/* 68 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toIntegerOrInfinity = __w_pdfjs_require__(65);
var min = Math.min;
module.exports = function (argument) {
 var len = toIntegerOrInfinity(argument);
 return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0;
};

/***/ }),
/* 69 */
/***/ ((module) => {

"use strict";

module.exports = [
 'constructor',
 'hasOwnProperty',
 'isPrototypeOf',
 'propertyIsEnumerable',
 'toLocaleString',
 'toString',
 'valueOf'
];

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 71 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(11);
var isCallable = __w_pdfjs_require__(25);
var replacement = /#|\.prototype\./;
var isForced = function (feature, detection) {
 var value = data[normalize(feature)];
 return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function (string) {
 return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),
/* 72 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(73);
__w_pdfjs_require__(91);
var path = __w_pdfjs_require__(102);
module.exports = path.Object.fromEntries;

/***/ }),
/* 73 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toIndexedObject = __w_pdfjs_require__(16);
var addToUnscopables = __w_pdfjs_require__(74);
var Iterators = __w_pdfjs_require__(79);
var InternalStateModule = __w_pdfjs_require__(55);
var defineProperty = (__w_pdfjs_require__(48).f);
var defineIterator = __w_pdfjs_require__(80);
var createIterResultObject = __w_pdfjs_require__(90);
var IS_PURE = __w_pdfjs_require__(40);
var DESCRIPTORS = __w_pdfjs_require__(10);
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
 setInternalState(this, {
  type: ARRAY_ITERATOR,
  target: toIndexedObject(iterated),
  index: 0,
  kind: kind
 });
}, function () {
 var state = getInternalState(this);
 var target = state.target;
 var index = state.index++;
 if (!target || index >= target.length) {
  state.target = undefined;
  return createIterResultObject(undefined, true);
 }
 switch (state.kind) {
 case 'keys':
  return createIterResultObject(index, false);
 case 'values':
  return createIterResultObject(target[index], false);
 }
 return createIterResultObject([
  index,
  target[index]
 ], false);
}, 'values');
var values = Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
if (!IS_PURE && DESCRIPTORS && values.name !== 'values')
 try {
  defineProperty(values, 'name', { value: 'values' });
 } catch (error) {
 }

/***/ }),
/* 74 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var wellKnownSymbol = __w_pdfjs_require__(37);
var create = __w_pdfjs_require__(75);
var defineProperty = (__w_pdfjs_require__(48).f);
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] === undefined) {
 defineProperty(ArrayPrototype, UNSCOPABLES, {
  configurable: true,
  value: create(null)
 });
}
module.exports = function (key) {
 ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),
/* 75 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var anObject = __w_pdfjs_require__(50);
var definePropertiesModule = __w_pdfjs_require__(76);
var enumBugKeys = __w_pdfjs_require__(69);
var hiddenKeys = __w_pdfjs_require__(58);
var html = __w_pdfjs_require__(78);
var documentCreateElement = __w_pdfjs_require__(46);
var sharedKey = __w_pdfjs_require__(57);
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function () {
};
var scriptTag = function (content) {
 return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function (activeXDocument) {
 activeXDocument.write(scriptTag(''));
 activeXDocument.close();
 var temp = activeXDocument.parentWindow.Object;
 activeXDocument = null;
 return temp;
};
var NullProtoObjectViaIFrame = function () {
 var iframe = documentCreateElement('iframe');
 var JS = 'java' + SCRIPT + ':';
 var iframeDocument;
 iframe.style.display = 'none';
 html.appendChild(iframe);
 iframe.src = String(JS);
 iframeDocument = iframe.contentWindow.document;
 iframeDocument.open();
 iframeDocument.write(scriptTag('document.F=Object'));
 iframeDocument.close();
 return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function () {
 try {
  activeXDocument = new ActiveXObject('htmlfile');
 } catch (error) {
 }
 NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
 var length = enumBugKeys.length;
 while (length--)
  delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
 return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
module.exports = Object.create || function create(O, Properties) {
 var result;
 if (O !== null) {
  EmptyConstructor[PROTOTYPE] = anObject(O);
  result = new EmptyConstructor();
  EmptyConstructor[PROTOTYPE] = null;
  result[IE_PROTO] = O;
 } else
  result = NullProtoObject();
 return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var V8_PROTOTYPE_DEFINE_BUG = __w_pdfjs_require__(49);
var definePropertyModule = __w_pdfjs_require__(48);
var anObject = __w_pdfjs_require__(50);
var toIndexedObject = __w_pdfjs_require__(16);
var objectKeys = __w_pdfjs_require__(77);
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
 anObject(O);
 var props = toIndexedObject(Properties);
 var keys = objectKeys(Properties);
 var length = keys.length;
 var index = 0;
 var key;
 while (length > index)
  definePropertyModule.f(O, key = keys[index++], props[key]);
 return O;
};

/***/ }),
/* 77 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var internalObjectKeys = __w_pdfjs_require__(62);
var enumBugKeys = __w_pdfjs_require__(69);
module.exports = Object.keys || function keys(O) {
 return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 78 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var getBuiltIn = __w_pdfjs_require__(27);
module.exports = getBuiltIn('document', 'documentElement');

/***/ }),
/* 79 */
/***/ ((module) => {

"use strict";

module.exports = {};

/***/ }),
/* 80 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var call = __w_pdfjs_require__(12);
var IS_PURE = __w_pdfjs_require__(40);
var FunctionName = __w_pdfjs_require__(53);
var isCallable = __w_pdfjs_require__(25);
var createIteratorConstructor = __w_pdfjs_require__(81);
var getPrototypeOf = __w_pdfjs_require__(83);
var setPrototypeOf = __w_pdfjs_require__(86);
var setToStringTag = __w_pdfjs_require__(85);
var createNonEnumerableProperty = __w_pdfjs_require__(47);
var defineBuiltIn = __w_pdfjs_require__(51);
var wellKnownSymbol = __w_pdfjs_require__(37);
var Iterators = __w_pdfjs_require__(79);
var IteratorsCore = __w_pdfjs_require__(82);
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function () {
 return this;
};
module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
 createIteratorConstructor(IteratorConstructor, NAME, next);
 var getIterationMethod = function (KIND) {
  if (KIND === DEFAULT && defaultIterator)
   return defaultIterator;
  if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
   return IterablePrototype[KIND];
  switch (KIND) {
  case KEYS:
   return function keys() {
    return new IteratorConstructor(this, KIND);
   };
  case VALUES:
   return function values() {
    return new IteratorConstructor(this, KIND);
   };
  case ENTRIES:
   return function entries() {
    return new IteratorConstructor(this, KIND);
   };
  }
  return function () {
   return new IteratorConstructor(this);
  };
 };
 var TO_STRING_TAG = NAME + ' Iterator';
 var INCORRECT_VALUES_NAME = false;
 var IterablePrototype = Iterable.prototype;
 var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
 var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
 var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
 var CurrentIteratorPrototype, methods, KEY;
 if (anyNativeIterator) {
  CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
  if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
   if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
    if (setPrototypeOf) {
     setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
    } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
     defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
    }
   }
   setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
   if (IS_PURE)
    Iterators[TO_STRING_TAG] = returnThis;
  }
 }
 if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
  if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
   createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
  } else {
   INCORRECT_VALUES_NAME = true;
   defaultIterator = function values() {
    return call(nativeIterator, this);
   };
  }
 }
 if (DEFAULT) {
  methods = {
   values: getIterationMethod(VALUES),
   keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
   entries: getIterationMethod(ENTRIES)
  };
  if (FORCED)
   for (KEY in methods) {
    if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
     defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
    }
   }
  else
   $({
    target: NAME,
    proto: true,
    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
   }, methods);
 }
 if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
  defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
 }
 Iterators[NAME] = defaultIterator;
 return methods;
};

/***/ }),
/* 81 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var IteratorPrototype = (__w_pdfjs_require__(82).IteratorPrototype);
var create = __w_pdfjs_require__(75);
var createPropertyDescriptor = __w_pdfjs_require__(15);
var setToStringTag = __w_pdfjs_require__(85);
var Iterators = __w_pdfjs_require__(79);
var returnThis = function () {
 return this;
};
module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
 var TO_STRING_TAG = NAME + ' Iterator';
 IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
 setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
 Iterators[TO_STRING_TAG] = returnThis;
 return IteratorConstructor;
};

/***/ }),
/* 82 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(11);
var isCallable = __w_pdfjs_require__(25);
var isObject = __w_pdfjs_require__(24);
var create = __w_pdfjs_require__(75);
var getPrototypeOf = __w_pdfjs_require__(83);
var defineBuiltIn = __w_pdfjs_require__(51);
var wellKnownSymbol = __w_pdfjs_require__(37);
var IS_PURE = __w_pdfjs_require__(40);
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
 arrayIterator = [].keys();
 if (!('next' in arrayIterator))
  BUGGY_SAFARI_ITERATORS = true;
 else {
  PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
  if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
   IteratorPrototype = PrototypeOfArrayIteratorPrototype;
 }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
 var test = {};
 return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE)
 IteratorPrototype = {};
else if (IS_PURE)
 IteratorPrototype = create(IteratorPrototype);
if (!isCallable(IteratorPrototype[ITERATOR])) {
 defineBuiltIn(IteratorPrototype, ITERATOR, function () {
  return this;
 });
}
module.exports = {
 IteratorPrototype: IteratorPrototype,
 BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),
/* 83 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var hasOwn = __w_pdfjs_require__(42);
var isCallable = __w_pdfjs_require__(25);
var toObject = __w_pdfjs_require__(43);
var sharedKey = __w_pdfjs_require__(57);
var CORRECT_PROTOTYPE_GETTER = __w_pdfjs_require__(84);
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
 var object = toObject(O);
 if (hasOwn(object, IE_PROTO))
  return object[IE_PROTO];
 var constructor = object.constructor;
 if (isCallable(constructor) && object instanceof constructor) {
  return constructor.prototype;
 }
 return object instanceof $Object ? ObjectPrototype : null;
};

/***/ }),
/* 84 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(11);
module.exports = !fails(function () {
 function F() {
 }
 F.prototype.constructor = null;
 return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),
/* 85 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var defineProperty = (__w_pdfjs_require__(48).f);
var hasOwn = __w_pdfjs_require__(42);
var wellKnownSymbol = __w_pdfjs_require__(37);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function (target, TAG, STATIC) {
 if (target && !STATIC)
  target = target.prototype;
 if (target && !hasOwn(target, TO_STRING_TAG)) {
  defineProperty(target, TO_STRING_TAG, {
   configurable: true,
   value: TAG
  });
 }
};

/***/ }),
/* 86 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThisAccessor = __w_pdfjs_require__(87);
var isObject = __w_pdfjs_require__(24);
var requireObjectCoercible = __w_pdfjs_require__(20);
var aPossiblePrototype = __w_pdfjs_require__(88);
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
 var CORRECT_SETTER = false;
 var test = {};
 var setter;
 try {
  setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
  setter(test, []);
  CORRECT_SETTER = test instanceof Array;
 } catch (error) {
 }
 return function setPrototypeOf(O, proto) {
  requireObjectCoercible(O);
  aPossiblePrototype(proto);
  if (!isObject(O))
   return O;
  if (CORRECT_SETTER)
   setter(O, proto);
  else
   O.__proto__ = proto;
  return O;
 };
}() : undefined);

/***/ }),
/* 87 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var aCallable = __w_pdfjs_require__(34);
module.exports = function (object, key, method) {
 try {
  return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
 } catch (error) {
 }
};

/***/ }),
/* 88 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isPossiblePrototype = __w_pdfjs_require__(89);
var $String = String;
var $TypeError = TypeError;
module.exports = function (argument) {
 if (isPossiblePrototype(argument))
  return argument;
 throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/***/ }),
/* 89 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isObject = __w_pdfjs_require__(24);
module.exports = function (argument) {
 return isObject(argument) || argument === null;
};

/***/ }),
/* 90 */
/***/ ((module) => {

"use strict";

module.exports = function (value, done) {
 return {
  value: value,
  done: done
 };
};

/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var iterate = __w_pdfjs_require__(92);
var createProperty = __w_pdfjs_require__(101);
$({
 target: 'Object',
 stat: true
}, {
 fromEntries: function fromEntries(iterable) {
  var obj = {};
  iterate(iterable, function (k, v) {
   createProperty(obj, k, v);
  }, { AS_ENTRIES: true });
  return obj;
 }
});

/***/ }),
/* 92 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var bind = __w_pdfjs_require__(93);
var call = __w_pdfjs_require__(12);
var anObject = __w_pdfjs_require__(50);
var tryToString = __w_pdfjs_require__(35);
var isArrayIteratorMethod = __w_pdfjs_require__(95);
var lengthOfArrayLike = __w_pdfjs_require__(67);
var isPrototypeOf = __w_pdfjs_require__(28);
var getIterator = __w_pdfjs_require__(96);
var getIteratorMethod = __w_pdfjs_require__(97);
var iteratorClose = __w_pdfjs_require__(100);
var $TypeError = TypeError;
var Result = function (stopped, result) {
 this.stopped = stopped;
 this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function (iterable, unboundFunction, options) {
 var that = options && options.that;
 var AS_ENTRIES = !!(options && options.AS_ENTRIES);
 var IS_RECORD = !!(options && options.IS_RECORD);
 var IS_ITERATOR = !!(options && options.IS_ITERATOR);
 var INTERRUPTED = !!(options && options.INTERRUPTED);
 var fn = bind(unboundFunction, that);
 var iterator, iterFn, index, length, result, next, step;
 var stop = function (condition) {
  if (iterator)
   iteratorClose(iterator, 'normal', condition);
  return new Result(true, condition);
 };
 var callFn = function (value) {
  if (AS_ENTRIES) {
   anObject(value);
   return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
  }
  return INTERRUPTED ? fn(value, stop) : fn(value);
 };
 if (IS_RECORD) {
  iterator = iterable.iterator;
 } else if (IS_ITERATOR) {
  iterator = iterable;
 } else {
  iterFn = getIteratorMethod(iterable);
  if (!iterFn)
   throw new $TypeError(tryToString(iterable) + ' is not iterable');
  if (isArrayIteratorMethod(iterFn)) {
   for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
    result = callFn(iterable[index]);
    if (result && isPrototypeOf(ResultPrototype, result))
     return result;
   }
   return new Result(false);
  }
  iterator = getIterator(iterable, iterFn);
 }
 next = IS_RECORD ? iterable.next : iterator.next;
 while (!(step = call(next, iterator)).done) {
  try {
   result = callFn(step.value);
  } catch (error) {
   iteratorClose(iterator, 'throw', error);
  }
  if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result))
   return result;
 }
 return new Result(false);
};

/***/ }),
/* 93 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(94);
var aCallable = __w_pdfjs_require__(34);
var NATIVE_BIND = __w_pdfjs_require__(13);
var bind = uncurryThis(uncurryThis.bind);
module.exports = function (fn, that) {
 aCallable(fn);
 return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function () {
  return fn.apply(that, arguments);
 };
};

/***/ }),
/* 94 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var classofRaw = __w_pdfjs_require__(19);
var uncurryThis = __w_pdfjs_require__(18);
module.exports = function (fn) {
 if (classofRaw(fn) === 'Function')
  return uncurryThis(fn);
};

/***/ }),
/* 95 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var wellKnownSymbol = __w_pdfjs_require__(37);
var Iterators = __w_pdfjs_require__(79);
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
 return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),
/* 96 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var call = __w_pdfjs_require__(12);
var aCallable = __w_pdfjs_require__(34);
var anObject = __w_pdfjs_require__(50);
var tryToString = __w_pdfjs_require__(35);
var getIteratorMethod = __w_pdfjs_require__(97);
var $TypeError = TypeError;
module.exports = function (argument, usingIterator) {
 var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
 if (aCallable(iteratorMethod))
  return anObject(call(iteratorMethod, argument));
 throw new $TypeError(tryToString(argument) + ' is not iterable');
};

/***/ }),
/* 97 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var classof = __w_pdfjs_require__(98);
var getMethod = __w_pdfjs_require__(33);
var isNullOrUndefined = __w_pdfjs_require__(21);
var Iterators = __w_pdfjs_require__(79);
var wellKnownSymbol = __w_pdfjs_require__(37);
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function (it) {
 if (!isNullOrUndefined(it))
  return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
};

/***/ }),
/* 98 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __w_pdfjs_require__(99);
var isCallable = __w_pdfjs_require__(25);
var classofRaw = __w_pdfjs_require__(19);
var wellKnownSymbol = __w_pdfjs_require__(37);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;
var CORRECT_ARGUMENTS = classofRaw(function () {
 return arguments;
}()) === 'Arguments';
var tryGet = function (it, key) {
 try {
  return it[key];
 } catch (error) {
 }
};
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
 var O, tag, result;
 return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

/***/ }),
/* 99 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var wellKnownSymbol = __w_pdfjs_require__(37);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),
/* 100 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var call = __w_pdfjs_require__(12);
var anObject = __w_pdfjs_require__(50);
var getMethod = __w_pdfjs_require__(33);
module.exports = function (iterator, kind, value) {
 var innerResult, innerError;
 anObject(iterator);
 try {
  innerResult = getMethod(iterator, 'return');
  if (!innerResult) {
   if (kind === 'throw')
    throw value;
   return value;
  }
  innerResult = call(innerResult, iterator);
 } catch (error) {
  innerError = true;
  innerResult = error;
 }
 if (kind === 'throw')
  throw value;
 if (innerError)
  throw innerResult;
 anObject(innerResult);
 return value;
};

/***/ }),
/* 101 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var definePropertyModule = __w_pdfjs_require__(48);
var createPropertyDescriptor = __w_pdfjs_require__(15);
module.exports = function (object, key, value) {
 if (DESCRIPTORS)
  definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
 else
  object[key] = value;
};

/***/ }),
/* 102 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
module.exports = global;

/***/ }),
/* 103 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(104);
__w_pdfjs_require__(73);
__w_pdfjs_require__(112);
__w_pdfjs_require__(114);
__w_pdfjs_require__(148);
__w_pdfjs_require__(149);
__w_pdfjs_require__(150);
__w_pdfjs_require__(151);
__w_pdfjs_require__(152);
var path = __w_pdfjs_require__(102);
module.exports = path.Promise;

/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(105);

/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var isPrototypeOf = __w_pdfjs_require__(28);
var getPrototypeOf = __w_pdfjs_require__(83);
var setPrototypeOf = __w_pdfjs_require__(86);
var copyConstructorProperties = __w_pdfjs_require__(59);
var create = __w_pdfjs_require__(75);
var createNonEnumerableProperty = __w_pdfjs_require__(47);
var createPropertyDescriptor = __w_pdfjs_require__(15);
var installErrorCause = __w_pdfjs_require__(106);
var installErrorStack = __w_pdfjs_require__(107);
var iterate = __w_pdfjs_require__(92);
var normalizeStringArgument = __w_pdfjs_require__(110);
var wellKnownSymbol = __w_pdfjs_require__(37);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;
var push = [].push;
var $AggregateError = function AggregateError(errors, message) {
 var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
 var that;
 if (setPrototypeOf) {
  that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
 } else {
  that = isInstance ? this : create(AggregateErrorPrototype);
  createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
 }
 if (message !== undefined)
  createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
 installErrorStack(that, $AggregateError, that.stack, 1);
 if (arguments.length > 2)
  installErrorCause(that, arguments[2]);
 var errorsArray = [];
 iterate(errors, push, { that: errorsArray });
 createNonEnumerableProperty(that, 'errors', errorsArray);
 return that;
};
if (setPrototypeOf)
 setPrototypeOf($AggregateError, $Error);
else
 copyConstructorProperties($AggregateError, $Error, { name: true });
var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
 constructor: createPropertyDescriptor(1, $AggregateError),
 message: createPropertyDescriptor(1, ''),
 name: createPropertyDescriptor(1, 'AggregateError')
});
$({
 global: true,
 constructor: true,
 arity: 2
}, { AggregateError: $AggregateError });

/***/ }),
/* 106 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isObject = __w_pdfjs_require__(24);
var createNonEnumerableProperty = __w_pdfjs_require__(47);
module.exports = function (O, options) {
 if (isObject(options) && 'cause' in options) {
  createNonEnumerableProperty(O, 'cause', options.cause);
 }
};

/***/ }),
/* 107 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var createNonEnumerableProperty = __w_pdfjs_require__(47);
var clearErrorStack = __w_pdfjs_require__(108);
var ERROR_STACK_INSTALLABLE = __w_pdfjs_require__(109);
var captureStackTrace = Error.captureStackTrace;
module.exports = function (error, C, stack, dropEntries) {
 if (ERROR_STACK_INSTALLABLE) {
  if (captureStackTrace)
   captureStackTrace(error, C);
  else
   createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
 }
};

/***/ }),
/* 108 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var $Error = Error;
var replace = uncurryThis(''.replace);
var TEST = function (arg) {
 return String(new $Error(arg).stack);
}('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
module.exports = function (stack, dropEntries) {
 if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
  while (dropEntries--)
   stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
 }
 return stack;
};

/***/ }),
/* 109 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(11);
var createPropertyDescriptor = __w_pdfjs_require__(15);
module.exports = !fails(function () {
 var error = new Error('a');
 if (!('stack' in error))
  return true;
 Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
 return error.stack !== 7;
});

/***/ }),
/* 110 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toString = __w_pdfjs_require__(111);
module.exports = function (argument, $default) {
 return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};

/***/ }),
/* 111 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var classof = __w_pdfjs_require__(98);
var $String = String;
module.exports = function (argument) {
 if (classof(argument) === 'Symbol')
  throw new TypeError('Cannot convert a Symbol value to a string');
 return $String(argument);
};

/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __w_pdfjs_require__(99);
var defineBuiltIn = __w_pdfjs_require__(51);
var toString = __w_pdfjs_require__(113);
if (!TO_STRING_TAG_SUPPORT) {
 defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}

/***/ }),
/* 113 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __w_pdfjs_require__(99);
var classof = __w_pdfjs_require__(98);
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
 return '[object ' + classof(this) + ']';
};

/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(115);
__w_pdfjs_require__(140);
__w_pdfjs_require__(143);
__w_pdfjs_require__(144);
__w_pdfjs_require__(145);
__w_pdfjs_require__(146);

/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var IS_PURE = __w_pdfjs_require__(40);
var IS_NODE = __w_pdfjs_require__(116);
var global = __w_pdfjs_require__(8);
var call = __w_pdfjs_require__(12);
var defineBuiltIn = __w_pdfjs_require__(51);
var setPrototypeOf = __w_pdfjs_require__(86);
var setToStringTag = __w_pdfjs_require__(85);
var setSpecies = __w_pdfjs_require__(117);
var aCallable = __w_pdfjs_require__(34);
var isCallable = __w_pdfjs_require__(25);
var isObject = __w_pdfjs_require__(24);
var anInstance = __w_pdfjs_require__(119);
var speciesConstructor = __w_pdfjs_require__(120);
var task = (__w_pdfjs_require__(123).set);
var microtask = __w_pdfjs_require__(128);
var hostReportErrors = __w_pdfjs_require__(133);
var perform = __w_pdfjs_require__(134);
var Queue = __w_pdfjs_require__(130);
var InternalStateModule = __w_pdfjs_require__(55);
var NativePromiseConstructor = __w_pdfjs_require__(135);
var PromiseConstructorDetection = __w_pdfjs_require__(136);
var newPromiseCapabilityModule = __w_pdfjs_require__(139);
var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var isThenable = function (it) {
 var then;
 return isObject(it) && isCallable(then = it.then) ? then : false;
};
var callReaction = function (reaction, state) {
 var value = state.value;
 var ok = state.state === FULFILLED;
 var handler = ok ? reaction.ok : reaction.fail;
 var resolve = reaction.resolve;
 var reject = reaction.reject;
 var domain = reaction.domain;
 var result, then, exited;
 try {
  if (handler) {
   if (!ok) {
    if (state.rejection === UNHANDLED)
     onHandleUnhandled(state);
    state.rejection = HANDLED;
   }
   if (handler === true)
    result = value;
   else {
    if (domain)
     domain.enter();
    result = handler(value);
    if (domain) {
     domain.exit();
     exited = true;
    }
   }
   if (result === reaction.promise) {
    reject(new TypeError('Promise-chain cycle'));
   } else if (then = isThenable(result)) {
    call(then, result, resolve, reject);
   } else
    resolve(result);
  } else
   reject(value);
 } catch (error) {
  if (domain && !exited)
   domain.exit();
  reject(error);
 }
};
var notify = function (state, isReject) {
 if (state.notified)
  return;
 state.notified = true;
 microtask(function () {
  var reactions = state.reactions;
  var reaction;
  while (reaction = reactions.get()) {
   callReaction(reaction, state);
  }
  state.notified = false;
  if (isReject && !state.rejection)
   onUnhandled(state);
 });
};
var dispatchEvent = function (name, promise, reason) {
 var event, handler;
 if (DISPATCH_EVENT) {
  event = document.createEvent('Event');
  event.promise = promise;
  event.reason = reason;
  event.initEvent(name, false, true);
  global.dispatchEvent(event);
 } else
  event = {
   promise: promise,
   reason: reason
  };
 if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name]))
  handler(event);
 else if (name === UNHANDLED_REJECTION)
  hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function (state) {
 call(task, global, function () {
  var promise = state.facade;
  var value = state.value;
  var IS_UNHANDLED = isUnhandled(state);
  var result;
  if (IS_UNHANDLED) {
   result = perform(function () {
    if (IS_NODE) {
     process.emit('unhandledRejection', value, promise);
    } else
     dispatchEvent(UNHANDLED_REJECTION, promise, value);
   });
   state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
   if (result.error)
    throw result.value;
  }
 });
};
var isUnhandled = function (state) {
 return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function (state) {
 call(task, global, function () {
  var promise = state.facade;
  if (IS_NODE) {
   process.emit('rejectionHandled', promise);
  } else
   dispatchEvent(REJECTION_HANDLED, promise, state.value);
 });
};
var bind = function (fn, state, unwrap) {
 return function (value) {
  fn(state, value, unwrap);
 };
};
var internalReject = function (state, value, unwrap) {
 if (state.done)
  return;
 state.done = true;
 if (unwrap)
  state = unwrap;
 state.value = value;
 state.state = REJECTED;
 notify(state, true);
};
var internalResolve = function (state, value, unwrap) {
 if (state.done)
  return;
 state.done = true;
 if (unwrap)
  state = unwrap;
 try {
  if (state.facade === value)
   throw new TypeError("Promise can't be resolved itself");
  var then = isThenable(value);
  if (then) {
   microtask(function () {
    var wrapper = { done: false };
    try {
     call(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
    } catch (error) {
     internalReject(wrapper, error, state);
    }
   });
  } else {
   state.value = value;
   state.state = FULFILLED;
   notify(state, false);
  }
 } catch (error) {
  internalReject({ done: false }, error, state);
 }
};
if (FORCED_PROMISE_CONSTRUCTOR) {
 PromiseConstructor = function Promise(executor) {
  anInstance(this, PromisePrototype);
  aCallable(executor);
  call(Internal, this);
  var state = getInternalPromiseState(this);
  try {
   executor(bind(internalResolve, state), bind(internalReject, state));
  } catch (error) {
   internalReject(state, error);
  }
 };
 PromisePrototype = PromiseConstructor.prototype;
 Internal = function Promise(executor) {
  setInternalState(this, {
   type: PROMISE,
   done: false,
   notified: false,
   parent: false,
   reactions: new Queue(),
   rejection: false,
   state: PENDING,
   value: undefined
  });
 };
 Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
  var state = getInternalPromiseState(this);
  var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
  state.parent = true;
  reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
  reaction.fail = isCallable(onRejected) && onRejected;
  reaction.domain = IS_NODE ? process.domain : undefined;
  if (state.state === PENDING)
   state.reactions.add(reaction);
  else
   microtask(function () {
    callReaction(reaction, state);
   });
  return reaction.promise;
 });
 OwnPromiseCapability = function () {
  var promise = new Internal();
  var state = getInternalPromiseState(promise);
  this.promise = promise;
  this.resolve = bind(internalResolve, state);
  this.reject = bind(internalReject, state);
 };
 newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
  return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
 };
 if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
  nativeThen = NativePromisePrototype.then;
  if (!NATIVE_PROMISE_SUBCLASSING) {
   defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var that = this;
    return new PromiseConstructor(function (resolve, reject) {
     call(nativeThen, that, resolve, reject);
    }).then(onFulfilled, onRejected);
   }, { unsafe: true });
  }
  try {
   delete NativePromisePrototype.constructor;
  } catch (error) {
  }
  if (setPrototypeOf) {
   setPrototypeOf(NativePromisePrototype, PromisePrototype);
  }
 }
}
$({
 global: true,
 constructor: true,
 wrap: true,
 forced: FORCED_PROMISE_CONSTRUCTOR
}, { Promise: PromiseConstructor });
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

/***/ }),
/* 116 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var classof = __w_pdfjs_require__(19);
module.exports = classof(global.process) === 'process';

/***/ }),
/* 117 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var getBuiltIn = __w_pdfjs_require__(27);
var defineBuiltInAccessor = __w_pdfjs_require__(118);
var wellKnownSymbol = __w_pdfjs_require__(37);
var DESCRIPTORS = __w_pdfjs_require__(10);
var SPECIES = wellKnownSymbol('species');
module.exports = function (CONSTRUCTOR_NAME) {
 var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
 if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
  defineBuiltInAccessor(Constructor, SPECIES, {
   configurable: true,
   get: function () {
    return this;
   }
  });
 }
};

/***/ }),
/* 118 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var makeBuiltIn = __w_pdfjs_require__(52);
var defineProperty = __w_pdfjs_require__(48);
module.exports = function (target, name, descriptor) {
 if (descriptor.get)
  makeBuiltIn(descriptor.get, name, { getter: true });
 if (descriptor.set)
  makeBuiltIn(descriptor.set, name, { setter: true });
 return defineProperty.f(target, name, descriptor);
};

/***/ }),
/* 119 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isPrototypeOf = __w_pdfjs_require__(28);
var $TypeError = TypeError;
module.exports = function (it, Prototype) {
 if (isPrototypeOf(Prototype, it))
  return it;
 throw new $TypeError('Incorrect invocation');
};

/***/ }),
/* 120 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var anObject = __w_pdfjs_require__(50);
var aConstructor = __w_pdfjs_require__(121);
var isNullOrUndefined = __w_pdfjs_require__(21);
var wellKnownSymbol = __w_pdfjs_require__(37);
var SPECIES = wellKnownSymbol('species');
module.exports = function (O, defaultConstructor) {
 var C = anObject(O).constructor;
 var S;
 return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

/***/ }),
/* 121 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var isConstructor = __w_pdfjs_require__(122);
var tryToString = __w_pdfjs_require__(35);
var $TypeError = TypeError;
module.exports = function (argument) {
 if (isConstructor(argument))
  return argument;
 throw new $TypeError(tryToString(argument) + ' is not a constructor');
};

/***/ }),
/* 122 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var fails = __w_pdfjs_require__(11);
var isCallable = __w_pdfjs_require__(25);
var classof = __w_pdfjs_require__(98);
var getBuiltIn = __w_pdfjs_require__(27);
var inspectSource = __w_pdfjs_require__(54);
var noop = function () {
};
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
 if (!isCallable(argument))
  return false;
 try {
  construct(noop, [], argument);
  return true;
 } catch (error) {
  return false;
 }
};
var isConstructorLegacy = function isConstructor(argument) {
 if (!isCallable(argument))
  return false;
 switch (classof(argument)) {
 case 'AsyncFunction':
 case 'GeneratorFunction':
 case 'AsyncGeneratorFunction':
  return false;
 }
 try {
  return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
 } catch (error) {
  return true;
 }
};
isConstructorLegacy.sham = true;
module.exports = !construct || fails(function () {
 var called;
 return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
  called = true;
 }) || called;
}) ? isConstructorLegacy : isConstructorModern;

/***/ }),
/* 123 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var apply = __w_pdfjs_require__(124);
var bind = __w_pdfjs_require__(93);
var isCallable = __w_pdfjs_require__(25);
var hasOwn = __w_pdfjs_require__(42);
var fails = __w_pdfjs_require__(11);
var html = __w_pdfjs_require__(78);
var arraySlice = __w_pdfjs_require__(125);
var createElement = __w_pdfjs_require__(46);
var validateArgumentsLength = __w_pdfjs_require__(126);
var IS_IOS = __w_pdfjs_require__(127);
var IS_NODE = __w_pdfjs_require__(116);
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails(function () {
 $location = global.location;
});
var run = function (id) {
 if (hasOwn(queue, id)) {
  var fn = queue[id];
  delete queue[id];
  fn();
 }
};
var runner = function (id) {
 return function () {
  run(id);
 };
};
var eventListener = function (event) {
 run(event.data);
};
var globalPostMessageDefer = function (id) {
 global.postMessage(String(id), $location.protocol + '//' + $location.host);
};
if (!set || !clear) {
 set = function setImmediate(handler) {
  validateArgumentsLength(arguments.length, 1);
  var fn = isCallable(handler) ? handler : Function(handler);
  var args = arraySlice(arguments, 1);
  queue[++counter] = function () {
   apply(fn, undefined, args);
  };
  defer(counter);
  return counter;
 };
 clear = function clearImmediate(id) {
  delete queue[id];
 };
 if (IS_NODE) {
  defer = function (id) {
   process.nextTick(runner(id));
  };
 } else if (Dispatch && Dispatch.now) {
  defer = function (id) {
   Dispatch.now(runner(id));
  };
 } else if (MessageChannel && !IS_IOS) {
  channel = new MessageChannel();
  port = channel.port2;
  channel.port1.onmessage = eventListener;
  defer = bind(port.postMessage, port);
 } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
  defer = globalPostMessageDefer;
  global.addEventListener('message', eventListener, false);
 } else if (ONREADYSTATECHANGE in createElement('script')) {
  defer = function (id) {
   html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
    html.removeChild(this);
    run(id);
   };
  };
 } else {
  defer = function (id) {
   setTimeout(runner(id), 0);
  };
 }
}
module.exports = {
 set: set,
 clear: clear
};

/***/ }),
/* 124 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var NATIVE_BIND = __w_pdfjs_require__(13);
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
 return call.apply(apply, arguments);
});

/***/ }),
/* 125 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
module.exports = uncurryThis([].slice);

/***/ }),
/* 126 */
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;
module.exports = function (passed, required) {
 if (passed < required)
  throw new $TypeError('Not enough arguments');
 return passed;
};

/***/ }),
/* 127 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var userAgent = __w_pdfjs_require__(32);
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

/***/ }),
/* 128 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var safeGetBuiltIn = __w_pdfjs_require__(129);
var bind = __w_pdfjs_require__(93);
var macrotask = (__w_pdfjs_require__(123).set);
var Queue = __w_pdfjs_require__(130);
var IS_IOS = __w_pdfjs_require__(127);
var IS_IOS_PEBBLE = __w_pdfjs_require__(131);
var IS_WEBOS_WEBKIT = __w_pdfjs_require__(132);
var IS_NODE = __w_pdfjs_require__(116);
var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;
if (!microtask) {
 var queue = new Queue();
 var flush = function () {
  var parent, fn;
  if (IS_NODE && (parent = process.domain))
   parent.exit();
  while (fn = queue.get())
   try {
    fn();
   } catch (error) {
    if (queue.head)
     notify();
    throw error;
   }
  if (parent)
   parent.enter();
 };
 if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
  toggle = true;
  node = document.createTextNode('');
  new MutationObserver(flush).observe(node, { characterData: true });
  notify = function () {
   node.data = toggle = !toggle;
  };
 } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
  promise = Promise.resolve(undefined);
  promise.constructor = Promise;
  then = bind(promise.then, promise);
  notify = function () {
   then(flush);
  };
 } else if (IS_NODE) {
  notify = function () {
   process.nextTick(flush);
  };
 } else {
  macrotask = bind(macrotask, global);
  notify = function () {
   macrotask(flush);
  };
 }
 microtask = function (fn) {
  if (!queue.head)
   notify();
  queue.add(fn);
 };
}
module.exports = microtask;

/***/ }),
/* 129 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var DESCRIPTORS = __w_pdfjs_require__(10);
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
module.exports = function (name) {
 if (!DESCRIPTORS)
  return global[name];
 var descriptor = getOwnPropertyDescriptor(global, name);
 return descriptor && descriptor.value;
};

/***/ }),
/* 130 */
/***/ ((module) => {

"use strict";

var Queue = function () {
 this.head = null;
 this.tail = null;
};
Queue.prototype = {
 add: function (item) {
  var entry = {
   item: item,
   next: null
  };
  var tail = this.tail;
  if (tail)
   tail.next = entry;
  else
   this.head = entry;
  this.tail = entry;
 },
 get: function () {
  var entry = this.head;
  if (entry) {
   var next = this.head = entry.next;
   if (next === null)
    this.tail = null;
   return entry.item;
  }
 }
};
module.exports = Queue;

/***/ }),
/* 131 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var userAgent = __w_pdfjs_require__(32);
module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';

/***/ }),
/* 132 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var userAgent = __w_pdfjs_require__(32);
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

/***/ }),
/* 133 */
/***/ ((module) => {

"use strict";

module.exports = function (a, b) {
 try {
  arguments.length === 1 ? console.error(a) : console.error(a, b);
 } catch (error) {
 }
};

/***/ }),
/* 134 */
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
 try {
  return {
   error: false,
   value: exec()
  };
 } catch (error) {
  return {
   error: true,
   value: error
  };
 }
};

/***/ }),
/* 135 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
module.exports = global.Promise;

/***/ }),
/* 136 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var NativePromiseConstructor = __w_pdfjs_require__(135);
var isCallable = __w_pdfjs_require__(25);
var isForced = __w_pdfjs_require__(71);
var inspectSource = __w_pdfjs_require__(54);
var wellKnownSymbol = __w_pdfjs_require__(37);
var IS_BROWSER = __w_pdfjs_require__(137);
var IS_DENO = __w_pdfjs_require__(138);
var IS_PURE = __w_pdfjs_require__(40);
var V8_VERSION = __w_pdfjs_require__(31);
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
 var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
 var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
 if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
  return true;
 if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally']))
  return true;
 if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
  var promise = new NativePromiseConstructor(function (resolve) {
   resolve(1);
  });
  var FakePromise = function (exec) {
   exec(function () {
   }, function () {
   });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () {
  }) instanceof FakePromise;
  if (!SUBCLASSING)
   return true;
 }
 return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});
module.exports = {
 CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
 REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
 SUBCLASSING: SUBCLASSING
};

/***/ }),
/* 137 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var IS_DENO = __w_pdfjs_require__(138);
var IS_NODE = __w_pdfjs_require__(116);
module.exports = !IS_DENO && !IS_NODE && typeof window == 'object' && typeof document == 'object';

/***/ }),
/* 138 */
/***/ ((module) => {

"use strict";

module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

/***/ }),
/* 139 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var aCallable = __w_pdfjs_require__(34);
var $TypeError = TypeError;
var PromiseCapability = function (C) {
 var resolve, reject;
 this.promise = new C(function ($$resolve, $$reject) {
  if (resolve !== undefined || reject !== undefined)
   throw new $TypeError('Bad Promise constructor');
  resolve = $$resolve;
  reject = $$reject;
 });
 this.resolve = aCallable(resolve);
 this.reject = aCallable(reject);
};
module.exports.f = function (C) {
 return new PromiseCapability(C);
};

/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var call = __w_pdfjs_require__(12);
var aCallable = __w_pdfjs_require__(34);
var newPromiseCapabilityModule = __w_pdfjs_require__(139);
var perform = __w_pdfjs_require__(134);
var iterate = __w_pdfjs_require__(92);
var PROMISE_STATICS_INCORRECT_ITERATION = __w_pdfjs_require__(141);
$({
 target: 'Promise',
 stat: true,
 forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
 all: function all(iterable) {
  var C = this;
  var capability = newPromiseCapabilityModule.f(C);
  var resolve = capability.resolve;
  var reject = capability.reject;
  var result = perform(function () {
   var $promiseResolve = aCallable(C.resolve);
   var values = [];
   var counter = 0;
   var remaining = 1;
   iterate(iterable, function (promise) {
    var index = counter++;
    var alreadyCalled = false;
    remaining++;
    call($promiseResolve, C, promise).then(function (value) {
     if (alreadyCalled)
      return;
     alreadyCalled = true;
     values[index] = value;
     --remaining || resolve(values);
    }, reject);
   });
   --remaining || resolve(values);
  });
  if (result.error)
   reject(result.value);
  return capability.promise;
 }
});

/***/ }),
/* 141 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var NativePromiseConstructor = __w_pdfjs_require__(135);
var checkCorrectnessOfIteration = __w_pdfjs_require__(142);
var FORCED_PROMISE_CONSTRUCTOR = (__w_pdfjs_require__(136).CONSTRUCTOR);
module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
 NativePromiseConstructor.all(iterable).then(undefined, function () {
 });
});

/***/ }),
/* 142 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var wellKnownSymbol = __w_pdfjs_require__(37);
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
 var called = 0;
 var iteratorWithReturn = {
  next: function () {
   return { done: !!called++ };
  },
  'return': function () {
   SAFE_CLOSING = true;
  }
 };
 iteratorWithReturn[ITERATOR] = function () {
  return this;
 };
 Array.from(iteratorWithReturn, function () {
  throw 2;
 });
} catch (error) {
}
module.exports = function (exec, SKIP_CLOSING) {
 try {
  if (!SKIP_CLOSING && !SAFE_CLOSING)
   return false;
 } catch (error) {
  return false;
 }
 var ITERATION_SUPPORT = false;
 try {
  var object = {};
  object[ITERATOR] = function () {
   return {
    next: function () {
     return { done: ITERATION_SUPPORT = true };
    }
   };
  };
  exec(object);
 } catch (error) {
 }
 return ITERATION_SUPPORT;
};

/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var IS_PURE = __w_pdfjs_require__(40);
var FORCED_PROMISE_CONSTRUCTOR = (__w_pdfjs_require__(136).CONSTRUCTOR);
var NativePromiseConstructor = __w_pdfjs_require__(135);
var getBuiltIn = __w_pdfjs_require__(27);
var isCallable = __w_pdfjs_require__(25);
var defineBuiltIn = __w_pdfjs_require__(51);
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
$({
 target: 'Promise',
 proto: true,
 forced: FORCED_PROMISE_CONSTRUCTOR,
 real: true
}, {
 'catch': function (onRejected) {
  return this.then(undefined, onRejected);
 }
});
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
 var method = getBuiltIn('Promise').prototype['catch'];
 if (NativePromisePrototype['catch'] !== method) {
  defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
 }
}

/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var call = __w_pdfjs_require__(12);
var aCallable = __w_pdfjs_require__(34);
var newPromiseCapabilityModule = __w_pdfjs_require__(139);
var perform = __w_pdfjs_require__(134);
var iterate = __w_pdfjs_require__(92);
var PROMISE_STATICS_INCORRECT_ITERATION = __w_pdfjs_require__(141);
$({
 target: 'Promise',
 stat: true,
 forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
 race: function race(iterable) {
  var C = this;
  var capability = newPromiseCapabilityModule.f(C);
  var reject = capability.reject;
  var result = perform(function () {
   var $promiseResolve = aCallable(C.resolve);
   iterate(iterable, function (promise) {
    call($promiseResolve, C, promise).then(capability.resolve, reject);
   });
  });
  if (result.error)
   reject(result.value);
  return capability.promise;
 }
});

/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var newPromiseCapabilityModule = __w_pdfjs_require__(139);
var FORCED_PROMISE_CONSTRUCTOR = (__w_pdfjs_require__(136).CONSTRUCTOR);
$({
 target: 'Promise',
 stat: true,
 forced: FORCED_PROMISE_CONSTRUCTOR
}, {
 reject: function reject(r) {
  var capability = newPromiseCapabilityModule.f(this);
  var capabilityReject = capability.reject;
  capabilityReject(r);
  return capability.promise;
 }
});

/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var getBuiltIn = __w_pdfjs_require__(27);
var IS_PURE = __w_pdfjs_require__(40);
var NativePromiseConstructor = __w_pdfjs_require__(135);
var FORCED_PROMISE_CONSTRUCTOR = (__w_pdfjs_require__(136).CONSTRUCTOR);
var promiseResolve = __w_pdfjs_require__(147);
var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
$({
 target: 'Promise',
 stat: true,
 forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
}, {
 resolve: function resolve(x) {
  return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
 }
});

/***/ }),
/* 147 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var anObject = __w_pdfjs_require__(50);
var isObject = __w_pdfjs_require__(24);
var newPromiseCapability = __w_pdfjs_require__(139);
module.exports = function (C, x) {
 anObject(C);
 if (isObject(x) && x.constructor === C)
  return x;
 var promiseCapability = newPromiseCapability.f(C);
 var resolve = promiseCapability.resolve;
 resolve(x);
 return promiseCapability.promise;
};

/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var call = __w_pdfjs_require__(12);
var aCallable = __w_pdfjs_require__(34);
var newPromiseCapabilityModule = __w_pdfjs_require__(139);
var perform = __w_pdfjs_require__(134);
var iterate = __w_pdfjs_require__(92);
var PROMISE_STATICS_INCORRECT_ITERATION = __w_pdfjs_require__(141);
$({
 target: 'Promise',
 stat: true,
 forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
 allSettled: function allSettled(iterable) {
  var C = this;
  var capability = newPromiseCapabilityModule.f(C);
  var resolve = capability.resolve;
  var reject = capability.reject;
  var result = perform(function () {
   var promiseResolve = aCallable(C.resolve);
   var values = [];
   var counter = 0;
   var remaining = 1;
   iterate(iterable, function (promise) {
    var index = counter++;
    var alreadyCalled = false;
    remaining++;
    call(promiseResolve, C, promise).then(function (value) {
     if (alreadyCalled)
      return;
     alreadyCalled = true;
     values[index] = {
      status: 'fulfilled',
      value: value
     };
     --remaining || resolve(values);
    }, function (error) {
     if (alreadyCalled)
      return;
     alreadyCalled = true;
     values[index] = {
      status: 'rejected',
      reason: error
     };
     --remaining || resolve(values);
    });
   });
   --remaining || resolve(values);
  });
  if (result.error)
   reject(result.value);
  return capability.promise;
 }
});

/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var call = __w_pdfjs_require__(12);
var aCallable = __w_pdfjs_require__(34);
var getBuiltIn = __w_pdfjs_require__(27);
var newPromiseCapabilityModule = __w_pdfjs_require__(139);
var perform = __w_pdfjs_require__(134);
var iterate = __w_pdfjs_require__(92);
var PROMISE_STATICS_INCORRECT_ITERATION = __w_pdfjs_require__(141);
var PROMISE_ANY_ERROR = 'No one promise resolved';
$({
 target: 'Promise',
 stat: true,
 forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
 any: function any(iterable) {
  var C = this;
  var AggregateError = getBuiltIn('AggregateError');
  var capability = newPromiseCapabilityModule.f(C);
  var resolve = capability.resolve;
  var reject = capability.reject;
  var result = perform(function () {
   var promiseResolve = aCallable(C.resolve);
   var errors = [];
   var counter = 0;
   var remaining = 1;
   var alreadyResolved = false;
   iterate(iterable, function (promise) {
    var index = counter++;
    var alreadyRejected = false;
    remaining++;
    call(promiseResolve, C, promise).then(function (value) {
     if (alreadyRejected || alreadyResolved)
      return;
     alreadyResolved = true;
     resolve(value);
    }, function (error) {
     if (alreadyRejected || alreadyResolved)
      return;
     alreadyRejected = true;
     errors[index] = error;
     --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
   });
   --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
  });
  if (result.error)
   reject(result.value);
  return capability.promise;
 }
});

/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var newPromiseCapabilityModule = __w_pdfjs_require__(139);
$({
 target: 'Promise',
 stat: true
}, {
 withResolvers: function withResolvers() {
  var promiseCapability = newPromiseCapabilityModule.f(this);
  return {
   promise: promiseCapability.promise,
   resolve: promiseCapability.resolve,
   reject: promiseCapability.reject
  };
 }
});

/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var IS_PURE = __w_pdfjs_require__(40);
var NativePromiseConstructor = __w_pdfjs_require__(135);
var fails = __w_pdfjs_require__(11);
var getBuiltIn = __w_pdfjs_require__(27);
var isCallable = __w_pdfjs_require__(25);
var speciesConstructor = __w_pdfjs_require__(120);
var promiseResolve = __w_pdfjs_require__(147);
var defineBuiltIn = __w_pdfjs_require__(51);
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
 NativePromisePrototype['finally'].call({
  then: function () {
  }
 }, function () {
 });
});
$({
 target: 'Promise',
 proto: true,
 real: true,
 forced: NON_GENERIC
}, {
 'finally': function (onFinally) {
  var C = speciesConstructor(this, getBuiltIn('Promise'));
  var isFunction = isCallable(onFinally);
  return this.then(isFunction ? function (x) {
   return promiseResolve(C, onFinally()).then(function () {
    return x;
   });
  } : onFinally, isFunction ? function (e) {
   return promiseResolve(C, onFinally()).then(function () {
    throw e;
   });
  } : onFinally);
 }
});
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
 var method = getBuiltIn('Promise').prototype['finally'];
 if (NativePromisePrototype['finally'] !== method) {
  defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
 }
}

/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var charAt = (__w_pdfjs_require__(153).charAt);
var toString = __w_pdfjs_require__(111);
var InternalStateModule = __w_pdfjs_require__(55);
var defineIterator = __w_pdfjs_require__(80);
var createIterResultObject = __w_pdfjs_require__(90);
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
defineIterator(String, 'String', function (iterated) {
 setInternalState(this, {
  type: STRING_ITERATOR,
  string: toString(iterated),
  index: 0
 });
}, function next() {
 var state = getInternalState(this);
 var string = state.string;
 var index = state.index;
 var point;
 if (index >= string.length)
  return createIterResultObject(undefined, true);
 point = charAt(string, index);
 state.index += point.length;
 return createIterResultObject(point, false);
});

/***/ }),
/* 153 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var toIntegerOrInfinity = __w_pdfjs_require__(65);
var toString = __w_pdfjs_require__(111);
var requireObjectCoercible = __w_pdfjs_require__(20);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);
var createMethod = function (CONVERT_TO_STRING) {
 return function ($this, pos) {
  var S = toString(requireObjectCoercible($this));
  var position = toIntegerOrInfinity(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size)
   return CONVERT_TO_STRING ? '' : undefined;
  first = charCodeAt(S, position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
 };
};
module.exports = {
 codeAt: createMethod(false),
 charAt: createMethod(true)
};

/***/ }),
/* 154 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(155);
__w_pdfjs_require__(164);
__w_pdfjs_require__(170);
__w_pdfjs_require__(171);
__w_pdfjs_require__(172);
var path = __w_pdfjs_require__(102);
module.exports = path.URL;

/***/ }),
/* 155 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(156);
__w_pdfjs_require__(161);
__w_pdfjs_require__(162);
__w_pdfjs_require__(163);
var path = __w_pdfjs_require__(102);
module.exports = path.URLSearchParams;

/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(157);

/***/ }),
/* 157 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(73);
var $ = __w_pdfjs_require__(7);
var global = __w_pdfjs_require__(8);
var safeGetBuiltIn = __w_pdfjs_require__(129);
var call = __w_pdfjs_require__(12);
var uncurryThis = __w_pdfjs_require__(18);
var DESCRIPTORS = __w_pdfjs_require__(10);
var USE_NATIVE_URL = __w_pdfjs_require__(158);
var defineBuiltIn = __w_pdfjs_require__(51);
var defineBuiltInAccessor = __w_pdfjs_require__(118);
var defineBuiltIns = __w_pdfjs_require__(159);
var setToStringTag = __w_pdfjs_require__(85);
var createIteratorConstructor = __w_pdfjs_require__(81);
var InternalStateModule = __w_pdfjs_require__(55);
var anInstance = __w_pdfjs_require__(119);
var isCallable = __w_pdfjs_require__(25);
var hasOwn = __w_pdfjs_require__(42);
var bind = __w_pdfjs_require__(93);
var classof = __w_pdfjs_require__(98);
var anObject = __w_pdfjs_require__(50);
var isObject = __w_pdfjs_require__(24);
var $toString = __w_pdfjs_require__(111);
var create = __w_pdfjs_require__(75);
var createPropertyDescriptor = __w_pdfjs_require__(15);
var getIterator = __w_pdfjs_require__(96);
var getIteratorMethod = __w_pdfjs_require__(97);
var createIterResultObject = __w_pdfjs_require__(90);
var validateArgumentsLength = __w_pdfjs_require__(126);
var wellKnownSymbol = __w_pdfjs_require__(37);
var arraySort = __w_pdfjs_require__(160);
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp = global.RegExp;
var TypeError = global.TypeError;
var decodeURIComponent = global.decodeURIComponent;
var encodeURIComponent = global.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var plus = /\+/g;
var sequences = Array(4);
var percentSequence = function (bytes) {
 return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};
var percentDecode = function (sequence) {
 try {
  return decodeURIComponent(sequence);
 } catch (error) {
  return sequence;
 }
};
var deserialize = function (it) {
 var result = replace(it, plus, ' ');
 var bytes = 4;
 try {
  return decodeURIComponent(result);
 } catch (error) {
  while (bytes) {
   result = replace(result, percentSequence(bytes--), percentDecode);
  }
  return result;
 }
};
var find = /[!'()~]|%20/g;
var replacements = {
 '!': '%21',
 "'": '%27',
 '(': '%28',
 ')': '%29',
 '~': '%7E',
 '%20': '+'
};
var replacer = function (match) {
 return replacements[match];
};
var serialize = function (it) {
 return replace(encodeURIComponent(it), find, replacer);
};
var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
 setInternalState(this, {
  type: URL_SEARCH_PARAMS_ITERATOR,
  target: getInternalParamsState(params).entries,
  index: 0,
  kind: kind
 });
}, URL_SEARCH_PARAMS, function next() {
 var state = getInternalIteratorState(this);
 var target = state.target;
 var index = state.index++;
 if (!target || index >= target.length) {
  state.target = undefined;
  return createIterResultObject(undefined, true);
 }
 var entry = target[index];
 switch (state.kind) {
 case 'keys':
  return createIterResultObject(entry.key, false);
 case 'values':
  return createIterResultObject(entry.value, false);
 }
 return createIterResultObject([
  entry.key,
  entry.value
 ], false);
}, true);
var URLSearchParamsState = function (init) {
 this.entries = [];
 this.url = null;
 if (init !== undefined) {
  if (isObject(init))
   this.parseObject(init);
  else
   this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
 }
};
URLSearchParamsState.prototype = {
 type: URL_SEARCH_PARAMS,
 bindURL: function (url) {
  this.url = url;
  this.update();
 },
 parseObject: function (object) {
  var entries = this.entries;
  var iteratorMethod = getIteratorMethod(object);
  var iterator, next, step, entryIterator, entryNext, first, second;
  if (iteratorMethod) {
   iterator = getIterator(object, iteratorMethod);
   next = iterator.next;
   while (!(step = call(next, iterator)).done) {
    entryIterator = getIterator(anObject(step.value));
    entryNext = entryIterator.next;
    if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done)
     throw new TypeError('Expected sequence with length 2');
    push(entries, {
     key: $toString(first.value),
     value: $toString(second.value)
    });
   }
  } else
   for (var key in object)
    if (hasOwn(object, key)) {
     push(entries, {
      key: key,
      value: $toString(object[key])
     });
    }
 },
 parseQuery: function (query) {
  if (query) {
   var entries = this.entries;
   var attributes = split(query, '&');
   var index = 0;
   var attribute, entry;
   while (index < attributes.length) {
    attribute = attributes[index++];
    if (attribute.length) {
     entry = split(attribute, '=');
     push(entries, {
      key: deserialize(shift(entry)),
      value: deserialize(join(entry, '='))
     });
    }
   }
  }
 },
 serialize: function () {
  var entries = this.entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
   entry = entries[index++];
   push(result, serialize(entry.key) + '=' + serialize(entry.value));
  }
  return join(result, '&');
 },
 update: function () {
  this.entries.length = 0;
  this.parseQuery(this.url.query);
 },
 updateURL: function () {
  if (this.url)
   this.url.update();
 }
};
var URLSearchParamsConstructor = function URLSearchParams() {
 anInstance(this, URLSearchParamsPrototype);
 var init = arguments.length > 0 ? arguments[0] : undefined;
 var state = setInternalState(this, new URLSearchParamsState(init));
 if (!DESCRIPTORS)
  this.size = state.entries.length;
};
var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
defineBuiltIns(URLSearchParamsPrototype, {
 append: function append(name, value) {
  var state = getInternalParamsState(this);
  validateArgumentsLength(arguments.length, 2);
  push(state.entries, {
   key: $toString(name),
   value: $toString(value)
  });
  if (!DESCRIPTORS)
   this.length++;
  state.updateURL();
 },
 'delete': function (name) {
  var state = getInternalParamsState(this);
  var length = validateArgumentsLength(arguments.length, 1);
  var entries = state.entries;
  var key = $toString(name);
  var $value = length < 2 ? undefined : arguments[1];
  var value = $value === undefined ? $value : $toString($value);
  var index = 0;
  while (index < entries.length) {
   var entry = entries[index];
   if (entry.key === key && (value === undefined || entry.value === value)) {
    splice(entries, index, 1);
    if (value !== undefined)
     break;
   } else
    index++;
  }
  if (!DESCRIPTORS)
   this.size = entries.length;
  state.updateURL();
 },
 get: function get(name) {
  var entries = getInternalParamsState(this).entries;
  validateArgumentsLength(arguments.length, 1);
  var key = $toString(name);
  var index = 0;
  for (; index < entries.length; index++) {
   if (entries[index].key === key)
    return entries[index].value;
  }
  return null;
 },
 getAll: function getAll(name) {
  var entries = getInternalParamsState(this).entries;
  validateArgumentsLength(arguments.length, 1);
  var key = $toString(name);
  var result = [];
  var index = 0;
  for (; index < entries.length; index++) {
   if (entries[index].key === key)
    push(result, entries[index].value);
  }
  return result;
 },
 has: function has(name) {
  var entries = getInternalParamsState(this).entries;
  var length = validateArgumentsLength(arguments.length, 1);
  var key = $toString(name);
  var $value = length < 2 ? undefined : arguments[1];
  var value = $value === undefined ? $value : $toString($value);
  var index = 0;
  while (index < entries.length) {
   var entry = entries[index++];
   if (entry.key === key && (value === undefined || entry.value === value))
    return true;
  }
  return false;
 },
 set: function set(name, value) {
  var state = getInternalParamsState(this);
  validateArgumentsLength(arguments.length, 1);
  var entries = state.entries;
  var found = false;
  var key = $toString(name);
  var val = $toString(value);
  var index = 0;
  var entry;
  for (; index < entries.length; index++) {
   entry = entries[index];
   if (entry.key === key) {
    if (found)
     splice(entries, index--, 1);
    else {
     found = true;
     entry.value = val;
    }
   }
  }
  if (!found)
   push(entries, {
    key: key,
    value: val
   });
  if (!DESCRIPTORS)
   this.size = entries.length;
  state.updateURL();
 },
 sort: function sort() {
  var state = getInternalParamsState(this);
  arraySort(state.entries, function (a, b) {
   return a.key > b.key ? 1 : -1;
  });
  state.updateURL();
 },
 forEach: function forEach(callback) {
  var entries = getInternalParamsState(this).entries;
  var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
  var index = 0;
  var entry;
  while (index < entries.length) {
   entry = entries[index++];
   boundFunction(entry.value, entry.key, this);
  }
 },
 keys: function keys() {
  return new URLSearchParamsIterator(this, 'keys');
 },
 values: function values() {
  return new URLSearchParamsIterator(this, 'values');
 },
 entries: function entries() {
  return new URLSearchParamsIterator(this, 'entries');
 }
}, { enumerable: true });
defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });
defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
 return getInternalParamsState(this).serialize();
}, { enumerable: true });
if (DESCRIPTORS)
 defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  get: function size() {
   return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
 });
setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
$({
 global: true,
 constructor: true,
 forced: !USE_NATIVE_URL
}, { URLSearchParams: URLSearchParamsConstructor });
if (!USE_NATIVE_URL && isCallable(Headers)) {
 var headersHas = uncurryThis(HeadersPrototype.has);
 var headersSet = uncurryThis(HeadersPrototype.set);
 var wrapRequestOptions = function (init) {
  if (isObject(init)) {
   var body = init.body;
   var headers;
   if (classof(body) === URL_SEARCH_PARAMS) {
    headers = init.headers ? new Headers(init.headers) : new Headers();
    if (!headersHas(headers, 'content-type')) {
     headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    }
    return create(init, {
     body: createPropertyDescriptor(0, $toString(body)),
     headers: createPropertyDescriptor(0, headers)
    });
   }
  }
  return init;
 };
 if (isCallable(nativeFetch)) {
  $({
   global: true,
   enumerable: true,
   dontCallGetSet: true,
   forced: true
  }, {
   fetch: function fetch(input) {
    return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
   }
  });
 }
 if (isCallable(NativeRequest)) {
  var RequestConstructor = function Request(input) {
   anInstance(this, RequestPrototype);
   return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
  };
  RequestPrototype.constructor = RequestConstructor;
  RequestConstructor.prototype = RequestPrototype;
  $({
   global: true,
   constructor: true,
   dontCallGetSet: true,
   forced: true
  }, { Request: RequestConstructor });
 }
}
module.exports = {
 URLSearchParams: URLSearchParamsConstructor,
 getState: getInternalParamsState
};

/***/ }),
/* 158 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(11);
var wellKnownSymbol = __w_pdfjs_require__(37);
var DESCRIPTORS = __w_pdfjs_require__(10);
var IS_PURE = __w_pdfjs_require__(40);
var ITERATOR = wellKnownSymbol('iterator');
module.exports = !fails(function () {
 var url = new URL('b?a=1&b=2&c=3', 'http://a');
 var params = url.searchParams;
 var params2 = new URLSearchParams('a=1&a=2&b=3');
 var result = '';
 url.pathname = 'c%20d';
 params.forEach(function (value, key) {
  params['delete']('b');
  result += key + value;
 });
 params2['delete']('a', 2);
 params2['delete']('b', undefined);
 return IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== 'http://a/c%20d?a=1&c=3' || params.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !params[ITERATOR] || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' || new URL('http://тест').host !== 'xn--e1aybc' || new URL('http://a#б').hash !== '#%D0%B1' || result !== 'a1c3' || new URL('http://x', undefined).host !== 'x';
});

/***/ }),
/* 159 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var defineBuiltIn = __w_pdfjs_require__(51);
module.exports = function (target, src, options) {
 for (var key in src)
  defineBuiltIn(target, key, src[key], options);
 return target;
};

/***/ }),
/* 160 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var arraySlice = __w_pdfjs_require__(125);
var floor = Math.floor;
var sort = function (array, comparefn) {
 var length = array.length;
 if (length < 8) {
  var i = 1;
  var element, j;
  while (i < length) {
   j = i;
   element = array[i];
   while (j && comparefn(array[j - 1], element) > 0) {
    array[j] = array[--j];
   }
   if (j !== i++)
    array[j] = element;
  }
 } else {
  var middle = floor(length / 2);
  var left = sort(arraySlice(array, 0, middle), comparefn);
  var right = sort(arraySlice(array, middle), comparefn);
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  while (lindex < llength || rindex < rlength) {
   array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }
 }
 return array;
};
module.exports = sort;

/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var defineBuiltIn = __w_pdfjs_require__(51);
var uncurryThis = __w_pdfjs_require__(18);
var toString = __w_pdfjs_require__(111);
var validateArgumentsLength = __w_pdfjs_require__(126);
var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');
params['delete']('a', 1);
params['delete']('b', undefined);
if (params + '' !== 'a=2') {
 defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name) {
  var length = arguments.length;
  var $value = length < 2 ? undefined : arguments[1];
  if (length && $value === undefined)
   return $delete(this, name);
  var entries = [];
  forEach(this, function (v, k) {
   push(entries, {
    key: k,
    value: v
   });
  });
  validateArgumentsLength(length, 1);
  var key = toString(name);
  var value = toString($value);
  var index = 0;
  var dindex = 0;
  var found = false;
  var entriesLength = entries.length;
  var entry;
  while (index < entriesLength) {
   entry = entries[index++];
   if (found || entry.key === key) {
    found = true;
    $delete(this, entry.key);
   } else
    dindex++;
  }
  while (dindex < entriesLength) {
   entry = entries[dindex++];
   if (!(entry.key === key && entry.value === value))
    append(this, entry.key, entry.value);
  }
 }, {
  enumerable: true,
  unsafe: true
 });
}

/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var defineBuiltIn = __w_pdfjs_require__(51);
var uncurryThis = __w_pdfjs_require__(18);
var toString = __w_pdfjs_require__(111);
var validateArgumentsLength = __w_pdfjs_require__(126);
var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');
if (params.has('a', 2) || !params.has('a', undefined)) {
 defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name) {
  var length = arguments.length;
  var $value = length < 2 ? undefined : arguments[1];
  if (length && $value === undefined)
   return $has(this, name);
  var values = getAll(this, name);
  validateArgumentsLength(length, 1);
  var value = toString($value);
  var index = 0;
  while (index < values.length) {
   if (values[index++] === value)
    return true;
  }
  return false;
 }, {
  enumerable: true,
  unsafe: true
 });
}

/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var uncurryThis = __w_pdfjs_require__(18);
var defineBuiltInAccessor = __w_pdfjs_require__(118);
var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
 defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  get: function size() {
   var count = 0;
   forEach(this, function () {
    count++;
   });
   return count;
  },
  configurable: true,
  enumerable: true
 });
}

/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(165);

/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(152);
var $ = __w_pdfjs_require__(7);
var DESCRIPTORS = __w_pdfjs_require__(10);
var USE_NATIVE_URL = __w_pdfjs_require__(158);
var global = __w_pdfjs_require__(8);
var bind = __w_pdfjs_require__(93);
var uncurryThis = __w_pdfjs_require__(18);
var defineBuiltIn = __w_pdfjs_require__(51);
var defineBuiltInAccessor = __w_pdfjs_require__(118);
var anInstance = __w_pdfjs_require__(119);
var hasOwn = __w_pdfjs_require__(42);
var assign = __w_pdfjs_require__(166);
var arrayFrom = __w_pdfjs_require__(167);
var arraySlice = __w_pdfjs_require__(125);
var codeAt = (__w_pdfjs_require__(153).codeAt);
var toASCII = __w_pdfjs_require__(169);
var $toString = __w_pdfjs_require__(111);
var setToStringTag = __w_pdfjs_require__(85);
var validateArgumentsLength = __w_pdfjs_require__(126);
var URLSearchParamsModule = __w_pdfjs_require__(157);
var InternalStateModule = __w_pdfjs_require__(55);
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var NativeURL = global.URL;
var TypeError = global.TypeError;
var parseInt = global.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);
var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';
var ALPHA = /[a-z]/i;
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
var EOF;
var parseIPv4 = function (input) {
 var parts = split(input, '.');
 var partsLength, numbers, index, part, radix, number, ipv4;
 if (parts.length && parts[parts.length - 1] === '') {
  parts.length--;
 }
 partsLength = parts.length;
 if (partsLength > 4)
  return input;
 numbers = [];
 for (index = 0; index < partsLength; index++) {
  part = parts[index];
  if (part === '')
   return input;
  radix = 10;
  if (part.length > 1 && charAt(part, 0) === '0') {
   radix = exec(HEX_START, part) ? 16 : 8;
   part = stringSlice(part, radix === 8 ? 1 : 2);
  }
  if (part === '') {
   number = 0;
  } else {
   if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part))
    return input;
   number = parseInt(part, radix);
  }
  push(numbers, number);
 }
 for (index = 0; index < partsLength; index++) {
  number = numbers[index];
  if (index === partsLength - 1) {
   if (number >= pow(256, 5 - partsLength))
    return null;
  } else if (number > 255)
   return null;
 }
 ipv4 = pop(numbers);
 for (index = 0; index < numbers.length; index++) {
  ipv4 += numbers[index] * pow(256, 3 - index);
 }
 return ipv4;
};
var parseIPv6 = function (input) {
 var address = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
 ];
 var pieceIndex = 0;
 var compress = null;
 var pointer = 0;
 var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
 var chr = function () {
  return charAt(input, pointer);
 };
 if (chr() === ':') {
  if (charAt(input, 1) !== ':')
   return;
  pointer += 2;
  pieceIndex++;
  compress = pieceIndex;
 }
 while (chr()) {
  if (pieceIndex === 8)
   return;
  if (chr() === ':') {
   if (compress !== null)
    return;
   pointer++;
   pieceIndex++;
   compress = pieceIndex;
   continue;
  }
  value = length = 0;
  while (length < 4 && exec(HEX, chr())) {
   value = value * 16 + parseInt(chr(), 16);
   pointer++;
   length++;
  }
  if (chr() === '.') {
   if (length === 0)
    return;
   pointer -= length;
   if (pieceIndex > 6)
    return;
   numbersSeen = 0;
   while (chr()) {
    ipv4Piece = null;
    if (numbersSeen > 0) {
     if (chr() === '.' && numbersSeen < 4)
      pointer++;
     else
      return;
    }
    if (!exec(DIGIT, chr()))
     return;
    while (exec(DIGIT, chr())) {
     number = parseInt(chr(), 10);
     if (ipv4Piece === null)
      ipv4Piece = number;
     else if (ipv4Piece === 0)
      return;
     else
      ipv4Piece = ipv4Piece * 10 + number;
     if (ipv4Piece > 255)
      return;
     pointer++;
    }
    address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
    numbersSeen++;
    if (numbersSeen === 2 || numbersSeen === 4)
     pieceIndex++;
   }
   if (numbersSeen !== 4)
    return;
   break;
  } else if (chr() === ':') {
   pointer++;
   if (!chr())
    return;
  } else if (chr())
   return;
  address[pieceIndex++] = value;
 }
 if (compress !== null) {
  swaps = pieceIndex - compress;
  pieceIndex = 7;
  while (pieceIndex !== 0 && swaps > 0) {
   swap = address[pieceIndex];
   address[pieceIndex--] = address[compress + swaps - 1];
   address[compress + --swaps] = swap;
  }
 } else if (pieceIndex !== 8)
  return;
 return address;
};
var findLongestZeroSequence = function (ipv6) {
 var maxIndex = null;
 var maxLength = 1;
 var currStart = null;
 var currLength = 0;
 var index = 0;
 for (; index < 8; index++) {
  if (ipv6[index] !== 0) {
   if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
   }
   currStart = null;
   currLength = 0;
  } else {
   if (currStart === null)
    currStart = index;
   ++currLength;
  }
 }
 if (currLength > maxLength) {
  maxIndex = currStart;
  maxLength = currLength;
 }
 return maxIndex;
};
var serializeHost = function (host) {
 var result, index, compress, ignore0;
 if (typeof host == 'number') {
  result = [];
  for (index = 0; index < 4; index++) {
   unshift(result, host % 256);
   host = floor(host / 256);
  }
  return join(result, '.');
 } else if (typeof host == 'object') {
  result = '';
  compress = findLongestZeroSequence(host);
  for (index = 0; index < 8; index++) {
   if (ignore0 && host[index] === 0)
    continue;
   if (ignore0)
    ignore0 = false;
   if (compress === index) {
    result += index ? ':' : '::';
    ignore0 = true;
   } else {
    result += numberToString(host[index], 16);
    if (index < 7)
     result += ':';
   }
  }
  return '[' + result + ']';
 }
 return host;
};
var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
 ' ': 1,
 '"': 1,
 '<': 1,
 '>': 1,
 '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
 '#': 1,
 '?': 1,
 '{': 1,
 '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
 '/': 1,
 ':': 1,
 ';': 1,
 '=': 1,
 '@': 1,
 '[': 1,
 '\\': 1,
 ']': 1,
 '^': 1,
 '|': 1
});
var percentEncode = function (chr, set) {
 var code = codeAt(chr, 0);
 return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};
var specialSchemes = {
 ftp: 21,
 file: null,
 http: 80,
 https: 443,
 ws: 80,
 wss: 443
};
var isWindowsDriveLetter = function (string, normalized) {
 var second;
 return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ':' || !normalized && second === '|');
};
var startsWithWindowsDriveLetter = function (string) {
 var third;
 return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#'));
};
var isSingleDot = function (segment) {
 return segment === '.' || toLowerCase(segment) === '%2e';
};
var isDoubleDot = function (segment) {
 segment = toLowerCase(segment);
 return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};
var URLState = function (url, isBase, base) {
 var urlString = $toString(url);
 var baseState, failure, searchParams;
 if (isBase) {
  failure = this.parse(urlString);
  if (failure)
   throw new TypeError(failure);
  this.searchParams = null;
 } else {
  if (base !== undefined)
   baseState = new URLState(base, true);
  failure = this.parse(urlString, null, baseState);
  if (failure)
   throw new TypeError(failure);
  searchParams = getInternalSearchParamsState(new URLSearchParams());
  searchParams.bindURL(this);
  this.searchParams = searchParams;
 }
};
URLState.prototype = {
 type: 'URL',
 parse: function (input, stateOverride, base) {
  var url = this;
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, chr, bufferCodePoints, failure;
  input = $toString(input);
  if (!stateOverride) {
   url.scheme = '';
   url.username = '';
   url.password = '';
   url.host = null;
   url.port = null;
   url.path = [];
   url.query = null;
   url.fragment = null;
   url.cannotBeABaseURL = false;
   input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
   input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
  }
  input = replace(input, TAB_AND_NEW_LINE, '');
  codePoints = arrayFrom(input);
  while (pointer <= codePoints.length) {
   chr = codePoints[pointer];
   switch (state) {
   case SCHEME_START:
    if (chr && exec(ALPHA, chr)) {
     buffer += toLowerCase(chr);
     state = SCHEME;
    } else if (!stateOverride) {
     state = NO_SCHEME;
     continue;
    } else
     return INVALID_SCHEME;
    break;
   case SCHEME:
    if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
     buffer += toLowerCase(chr);
    } else if (chr === ':') {
     if (stateOverride && (url.isSpecial() !== hasOwn(specialSchemes, buffer) || buffer === 'file' && (url.includesCredentials() || url.port !== null) || url.scheme === 'file' && !url.host))
      return;
     url.scheme = buffer;
     if (stateOverride) {
      if (url.isSpecial() && specialSchemes[url.scheme] === url.port)
       url.port = null;
      return;
     }
     buffer = '';
     if (url.scheme === 'file') {
      state = FILE;
     } else if (url.isSpecial() && base && base.scheme === url.scheme) {
      state = SPECIAL_RELATIVE_OR_AUTHORITY;
     } else if (url.isSpecial()) {
      state = SPECIAL_AUTHORITY_SLASHES;
     } else if (codePoints[pointer + 1] === '/') {
      state = PATH_OR_AUTHORITY;
      pointer++;
     } else {
      url.cannotBeABaseURL = true;
      push(url.path, '');
      state = CANNOT_BE_A_BASE_URL_PATH;
     }
    } else if (!stateOverride) {
     buffer = '';
     state = NO_SCHEME;
     pointer = 0;
     continue;
    } else
     return INVALID_SCHEME;
    break;
   case NO_SCHEME:
    if (!base || base.cannotBeABaseURL && chr !== '#')
     return INVALID_SCHEME;
    if (base.cannotBeABaseURL && chr === '#') {
     url.scheme = base.scheme;
     url.path = arraySlice(base.path);
     url.query = base.query;
     url.fragment = '';
     url.cannotBeABaseURL = true;
     state = FRAGMENT;
     break;
    }
    state = base.scheme === 'file' ? FILE : RELATIVE;
    continue;
   case SPECIAL_RELATIVE_OR_AUTHORITY:
    if (chr === '/' && codePoints[pointer + 1] === '/') {
     state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
     pointer++;
    } else {
     state = RELATIVE;
     continue;
    }
    break;
   case PATH_OR_AUTHORITY:
    if (chr === '/') {
     state = AUTHORITY;
     break;
    } else {
     state = PATH;
     continue;
    }
   case RELATIVE:
    url.scheme = base.scheme;
    if (chr === EOF) {
     url.username = base.username;
     url.password = base.password;
     url.host = base.host;
     url.port = base.port;
     url.path = arraySlice(base.path);
     url.query = base.query;
    } else if (chr === '/' || chr === '\\' && url.isSpecial()) {
     state = RELATIVE_SLASH;
    } else if (chr === '?') {
     url.username = base.username;
     url.password = base.password;
     url.host = base.host;
     url.port = base.port;
     url.path = arraySlice(base.path);
     url.query = '';
     state = QUERY;
    } else if (chr === '#') {
     url.username = base.username;
     url.password = base.password;
     url.host = base.host;
     url.port = base.port;
     url.path = arraySlice(base.path);
     url.query = base.query;
     url.fragment = '';
     state = FRAGMENT;
    } else {
     url.username = base.username;
     url.password = base.password;
     url.host = base.host;
     url.port = base.port;
     url.path = arraySlice(base.path);
     url.path.length--;
     state = PATH;
     continue;
    }
    break;
   case RELATIVE_SLASH:
    if (url.isSpecial() && (chr === '/' || chr === '\\')) {
     state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
    } else if (chr === '/') {
     state = AUTHORITY;
    } else {
     url.username = base.username;
     url.password = base.password;
     url.host = base.host;
     url.port = base.port;
     state = PATH;
     continue;
    }
    break;
   case SPECIAL_AUTHORITY_SLASHES:
    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
    if (chr !== '/' || charAt(buffer, pointer + 1) !== '/')
     continue;
    pointer++;
    break;
   case SPECIAL_AUTHORITY_IGNORE_SLASHES:
    if (chr !== '/' && chr !== '\\') {
     state = AUTHORITY;
     continue;
    }
    break;
   case AUTHORITY:
    if (chr === '@') {
     if (seenAt)
      buffer = '%40' + buffer;
     seenAt = true;
     bufferCodePoints = arrayFrom(buffer);
     for (var i = 0; i < bufferCodePoints.length; i++) {
      var codePoint = bufferCodePoints[i];
      if (codePoint === ':' && !seenPasswordToken) {
       seenPasswordToken = true;
       continue;
      }
      var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
      if (seenPasswordToken)
       url.password += encodedCodePoints;
      else
       url.username += encodedCodePoints;
     }
     buffer = '';
    } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
     if (seenAt && buffer === '')
      return INVALID_AUTHORITY;
     pointer -= arrayFrom(buffer).length + 1;
     buffer = '';
     state = HOST;
    } else
     buffer += chr;
    break;
   case HOST:
   case HOSTNAME:
    if (stateOverride && url.scheme === 'file') {
     state = FILE_HOST;
     continue;
    } else if (chr === ':' && !seenBracket) {
     if (buffer === '')
      return INVALID_HOST;
     failure = url.parseHost(buffer);
     if (failure)
      return failure;
     buffer = '';
     state = PORT;
     if (stateOverride === HOSTNAME)
      return;
    } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
     if (url.isSpecial() && buffer === '')
      return INVALID_HOST;
     if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null))
      return;
     failure = url.parseHost(buffer);
     if (failure)
      return failure;
     buffer = '';
     state = PATH_START;
     if (stateOverride)
      return;
     continue;
    } else {
     if (chr === '[')
      seenBracket = true;
     else if (chr === ']')
      seenBracket = false;
     buffer += chr;
    }
    break;
   case PORT:
    if (exec(DIGIT, chr)) {
     buffer += chr;
    } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial() || stateOverride) {
     if (buffer !== '') {
      var port = parseInt(buffer, 10);
      if (port > 0xFFFF)
       return INVALID_PORT;
      url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
      buffer = '';
     }
     if (stateOverride)
      return;
     state = PATH_START;
     continue;
    } else
     return INVALID_PORT;
    break;
   case FILE:
    url.scheme = 'file';
    if (chr === '/' || chr === '\\')
     state = FILE_SLASH;
    else if (base && base.scheme === 'file') {
     switch (chr) {
     case EOF:
      url.host = base.host;
      url.path = arraySlice(base.path);
      url.query = base.query;
      break;
     case '?':
      url.host = base.host;
      url.path = arraySlice(base.path);
      url.query = '';
      state = QUERY;
      break;
     case '#':
      url.host = base.host;
      url.path = arraySlice(base.path);
      url.query = base.query;
      url.fragment = '';
      state = FRAGMENT;
      break;
     default:
      if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
       url.host = base.host;
       url.path = arraySlice(base.path);
       url.shortenPath();
      }
      state = PATH;
      continue;
     }
    } else {
     state = PATH;
     continue;
    }
    break;
   case FILE_SLASH:
    if (chr === '/' || chr === '\\') {
     state = FILE_HOST;
     break;
    }
    if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
     if (isWindowsDriveLetter(base.path[0], true))
      push(url.path, base.path[0]);
     else
      url.host = base.host;
    }
    state = PATH;
    continue;
   case FILE_HOST:
    if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
     if (!stateOverride && isWindowsDriveLetter(buffer)) {
      state = PATH;
     } else if (buffer === '') {
      url.host = '';
      if (stateOverride)
       return;
      state = PATH_START;
     } else {
      failure = url.parseHost(buffer);
      if (failure)
       return failure;
      if (url.host === 'localhost')
       url.host = '';
      if (stateOverride)
       return;
      buffer = '';
      state = PATH_START;
     }
     continue;
    } else
     buffer += chr;
    break;
   case PATH_START:
    if (url.isSpecial()) {
     state = PATH;
     if (chr !== '/' && chr !== '\\')
      continue;
    } else if (!stateOverride && chr === '?') {
     url.query = '';
     state = QUERY;
    } else if (!stateOverride && chr === '#') {
     url.fragment = '';
     state = FRAGMENT;
    } else if (chr !== EOF) {
     state = PATH;
     if (chr !== '/')
      continue;
    }
    break;
   case PATH:
    if (chr === EOF || chr === '/' || chr === '\\' && url.isSpecial() || !stateOverride && (chr === '?' || chr === '#')) {
     if (isDoubleDot(buffer)) {
      url.shortenPath();
      if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
       push(url.path, '');
      }
     } else if (isSingleDot(buffer)) {
      if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
       push(url.path, '');
      }
     } else {
      if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
       if (url.host)
        url.host = '';
       buffer = charAt(buffer, 0) + ':';
      }
      push(url.path, buffer);
     }
     buffer = '';
     if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
      while (url.path.length > 1 && url.path[0] === '') {
       shift(url.path);
      }
     }
     if (chr === '?') {
      url.query = '';
      state = QUERY;
     } else if (chr === '#') {
      url.fragment = '';
      state = FRAGMENT;
     }
    } else {
     buffer += percentEncode(chr, pathPercentEncodeSet);
    }
    break;
   case CANNOT_BE_A_BASE_URL_PATH:
    if (chr === '?') {
     url.query = '';
     state = QUERY;
    } else if (chr === '#') {
     url.fragment = '';
     state = FRAGMENT;
    } else if (chr !== EOF) {
     url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
    }
    break;
   case QUERY:
    if (!stateOverride && chr === '#') {
     url.fragment = '';
     state = FRAGMENT;
    } else if (chr !== EOF) {
     if (chr === "'" && url.isSpecial())
      url.query += '%27';
     else if (chr === '#')
      url.query += '%23';
     else
      url.query += percentEncode(chr, C0ControlPercentEncodeSet);
    }
    break;
   case FRAGMENT:
    if (chr !== EOF)
     url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
    break;
   }
   pointer++;
  }
 },
 parseHost: function (input) {
  var result, codePoints, index;
  if (charAt(input, 0) === '[') {
   if (charAt(input, input.length - 1) !== ']')
    return INVALID_HOST;
   result = parseIPv6(stringSlice(input, 1, -1));
   if (!result)
    return INVALID_HOST;
   this.host = result;
  } else if (!this.isSpecial()) {
   if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input))
    return INVALID_HOST;
   result = '';
   codePoints = arrayFrom(input);
   for (index = 0; index < codePoints.length; index++) {
    result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
   }
   this.host = result;
  } else {
   input = toASCII(input);
   if (exec(FORBIDDEN_HOST_CODE_POINT, input))
    return INVALID_HOST;
   result = parseIPv4(input);
   if (result === null)
    return INVALID_HOST;
   this.host = result;
  }
 },
 cannotHaveUsernamePasswordPort: function () {
  return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
 },
 includesCredentials: function () {
  return this.username !== '' || this.password !== '';
 },
 isSpecial: function () {
  return hasOwn(specialSchemes, this.scheme);
 },
 shortenPath: function () {
  var path = this.path;
  var pathSize = path.length;
  if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
   path.length--;
  }
 },
 serialize: function () {
  var url = this;
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
   output += '//';
   if (url.includesCredentials()) {
    output += username + (password ? ':' + password : '') + '@';
   }
   output += serializeHost(host);
   if (port !== null)
    output += ':' + port;
  } else if (scheme === 'file')
   output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  if (query !== null)
   output += '?' + query;
  if (fragment !== null)
   output += '#' + fragment;
  return output;
 },
 setHref: function (href) {
  var failure = this.parse(href);
  if (failure)
   throw new TypeError(failure);
  this.searchParams.update();
 },
 getOrigin: function () {
  var scheme = this.scheme;
  var port = this.port;
  if (scheme === 'blob')
   try {
    return new URLConstructor(scheme.path[0]).origin;
   } catch (error) {
    return 'null';
   }
  if (scheme === 'file' || !this.isSpecial())
   return 'null';
  return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
 },
 getProtocol: function () {
  return this.scheme + ':';
 },
 setProtocol: function (protocol) {
  this.parse($toString(protocol) + ':', SCHEME_START);
 },
 getUsername: function () {
  return this.username;
 },
 setUsername: function (username) {
  var codePoints = arrayFrom($toString(username));
  if (this.cannotHaveUsernamePasswordPort())
   return;
  this.username = '';
  for (var i = 0; i < codePoints.length; i++) {
   this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
  }
 },
 getPassword: function () {
  return this.password;
 },
 setPassword: function (password) {
  var codePoints = arrayFrom($toString(password));
  if (this.cannotHaveUsernamePasswordPort())
   return;
  this.password = '';
  for (var i = 0; i < codePoints.length; i++) {
   this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
  }
 },
 getHost: function () {
  var host = this.host;
  var port = this.port;
  return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
 },
 setHost: function (host) {
  if (this.cannotBeABaseURL)
   return;
  this.parse(host, HOST);
 },
 getHostname: function () {
  var host = this.host;
  return host === null ? '' : serializeHost(host);
 },
 setHostname: function (hostname) {
  if (this.cannotBeABaseURL)
   return;
  this.parse(hostname, HOSTNAME);
 },
 getPort: function () {
  var port = this.port;
  return port === null ? '' : $toString(port);
 },
 setPort: function (port) {
  if (this.cannotHaveUsernamePasswordPort())
   return;
  port = $toString(port);
  if (port === '')
   this.port = null;
  else
   this.parse(port, PORT);
 },
 getPathname: function () {
  var path = this.path;
  return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
 },
 setPathname: function (pathname) {
  if (this.cannotBeABaseURL)
   return;
  this.path = [];
  this.parse(pathname, PATH_START);
 },
 getSearch: function () {
  var query = this.query;
  return query ? '?' + query : '';
 },
 setSearch: function (search) {
  search = $toString(search);
  if (search === '') {
   this.query = null;
  } else {
   if (charAt(search, 0) === '?')
    search = stringSlice(search, 1);
   this.query = '';
   this.parse(search, QUERY);
  }
  this.searchParams.update();
 },
 getSearchParams: function () {
  return this.searchParams.facade;
 },
 getHash: function () {
  var fragment = this.fragment;
  return fragment ? '#' + fragment : '';
 },
 setHash: function (hash) {
  hash = $toString(hash);
  if (hash === '') {
   this.fragment = null;
   return;
  }
  if (charAt(hash, 0) === '#')
   hash = stringSlice(hash, 1);
  this.fragment = '';
  this.parse(hash, FRAGMENT);
 },
 update: function () {
  this.query = this.searchParams.serialize() || null;
 }
};
var URLConstructor = function URL(url) {
 var that = anInstance(this, URLPrototype);
 var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
 var state = setInternalState(that, new URLState(url, false, base));
 if (!DESCRIPTORS) {
  that.href = state.serialize();
  that.origin = state.getOrigin();
  that.protocol = state.getProtocol();
  that.username = state.getUsername();
  that.password = state.getPassword();
  that.host = state.getHost();
  that.hostname = state.getHostname();
  that.port = state.getPort();
  that.pathname = state.getPathname();
  that.search = state.getSearch();
  that.searchParams = state.getSearchParams();
  that.hash = state.getHash();
 }
};
var URLPrototype = URLConstructor.prototype;
var accessorDescriptor = function (getter, setter) {
 return {
  get: function () {
   return getInternalURLState(this)[getter]();
  },
  set: setter && function (value) {
   return getInternalURLState(this)[setter](value);
  },
  configurable: true,
  enumerable: true
 };
};
if (DESCRIPTORS) {
 defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
 defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
 defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
 defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
 defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
 defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
 defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
 defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
 defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
 defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
 defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
 defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
 return getInternalURLState(this).serialize();
}, { enumerable: true });
defineBuiltIn(URLPrototype, 'toString', function toString() {
 return getInternalURLState(this).serialize();
}, { enumerable: true });
if (NativeURL) {
 var nativeCreateObjectURL = NativeURL.createObjectURL;
 var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
 if (nativeCreateObjectURL)
  defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
 if (nativeRevokeObjectURL)
  defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}
setToStringTag(URLConstructor, 'URL');
$({
 global: true,
 constructor: true,
 forced: !USE_NATIVE_URL,
 sham: !DESCRIPTORS
}, { URL: URLConstructor });

/***/ }),
/* 166 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var uncurryThis = __w_pdfjs_require__(18);
var call = __w_pdfjs_require__(12);
var fails = __w_pdfjs_require__(11);
var objectKeys = __w_pdfjs_require__(77);
var getOwnPropertySymbolsModule = __w_pdfjs_require__(70);
var propertyIsEnumerableModule = __w_pdfjs_require__(14);
var toObject = __w_pdfjs_require__(43);
var IndexedObject = __w_pdfjs_require__(17);
var $assign = Object.assign;
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);
module.exports = !$assign || fails(function () {
 if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
   enumerable: true,
   get: function () {
    defineProperty(this, 'b', {
     value: 3,
     enumerable: false
    });
   }
  }), { b: 2 })).b !== 1)
  return true;
 var A = {};
 var B = {};
 var symbol = Symbol('assign detection');
 var alphabet = 'abcdefghijklmnopqrst';
 A[symbol] = 7;
 alphabet.split('').forEach(function (chr) {
  B[chr] = chr;
 });
 return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) {
 var T = toObject(target);
 var argumentsLength = arguments.length;
 var index = 1;
 var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
 var propertyIsEnumerable = propertyIsEnumerableModule.f;
 while (argumentsLength > index) {
  var S = IndexedObject(arguments[index++]);
  var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
  var length = keys.length;
  var j = 0;
  var key;
  while (length > j) {
   key = keys[j++];
   if (!DESCRIPTORS || call(propertyIsEnumerable, S, key))
    T[key] = S[key];
  }
 }
 return T;
} : $assign;

/***/ }),
/* 167 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var bind = __w_pdfjs_require__(93);
var call = __w_pdfjs_require__(12);
var toObject = __w_pdfjs_require__(43);
var callWithSafeIterationClosing = __w_pdfjs_require__(168);
var isArrayIteratorMethod = __w_pdfjs_require__(95);
var isConstructor = __w_pdfjs_require__(122);
var lengthOfArrayLike = __w_pdfjs_require__(67);
var createProperty = __w_pdfjs_require__(101);
var getIterator = __w_pdfjs_require__(96);
var getIteratorMethod = __w_pdfjs_require__(97);
var $Array = Array;
module.exports = function from(arrayLike) {
 var O = toObject(arrayLike);
 var IS_CONSTRUCTOR = isConstructor(this);
 var argumentsLength = arguments.length;
 var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
 var mapping = mapfn !== undefined;
 if (mapping)
  mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
 var iteratorMethod = getIteratorMethod(O);
 var index = 0;
 var length, result, step, iterator, next, value;
 if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
  result = IS_CONSTRUCTOR ? new this() : [];
  iterator = getIterator(O, iteratorMethod);
  next = iterator.next;
  for (; !(step = call(next, iterator)).done; index++) {
   value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
    step.value,
    index
   ], true) : step.value;
   createProperty(result, index, value);
  }
 } else {
  length = lengthOfArrayLike(O);
  result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
  for (; length > index; index++) {
   value = mapping ? mapfn(O[index], index) : O[index];
   createProperty(result, index, value);
  }
 }
 result.length = index;
 return result;
};

/***/ }),
/* 168 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var anObject = __w_pdfjs_require__(50);
var iteratorClose = __w_pdfjs_require__(100);
module.exports = function (iterator, fn, value, ENTRIES) {
 try {
  return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
 } catch (error) {
  iteratorClose(iterator, 'throw', error);
 }
};

/***/ }),
/* 169 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var maxInt = 2147483647;
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128;
var delimiter = '-';
var regexNonASCII = /[^\0-\u007E]/;
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var $RangeError = RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);
var ucs2decode = function (string) {
 var output = [];
 var counter = 0;
 var length = string.length;
 while (counter < length) {
  var value = charCodeAt(string, counter++);
  if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
   var extra = charCodeAt(string, counter++);
   if ((extra & 0xFC00) === 0xDC00) {
    push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
   } else {
    push(output, value);
    counter--;
   }
  } else {
   push(output, value);
  }
 }
 return output;
};
var digitToBasic = function (digit) {
 return digit + 22 + 75 * (digit < 26);
};
var adapt = function (delta, numPoints, firstTime) {
 var k = 0;
 delta = firstTime ? floor(delta / damp) : delta >> 1;
 delta += floor(delta / numPoints);
 while (delta > baseMinusTMin * tMax >> 1) {
  delta = floor(delta / baseMinusTMin);
  k += base;
 }
 return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
var encode = function (input) {
 var output = [];
 input = ucs2decode(input);
 var inputLength = input.length;
 var n = initialN;
 var delta = 0;
 var bias = initialBias;
 var i, currentValue;
 for (i = 0; i < input.length; i++) {
  currentValue = input[i];
  if (currentValue < 0x80) {
   push(output, fromCharCode(currentValue));
  }
 }
 var basicLength = output.length;
 var handledCPCount = basicLength;
 if (basicLength) {
  push(output, delimiter);
 }
 while (handledCPCount < inputLength) {
  var m = maxInt;
  for (i = 0; i < input.length; i++) {
   currentValue = input[i];
   if (currentValue >= n && currentValue < m) {
    m = currentValue;
   }
  }
  var handledCPCountPlusOne = handledCPCount + 1;
  if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
   throw new $RangeError(OVERFLOW_ERROR);
  }
  delta += (m - n) * handledCPCountPlusOne;
  n = m;
  for (i = 0; i < input.length; i++) {
   currentValue = input[i];
   if (currentValue < n && ++delta > maxInt) {
    throw new $RangeError(OVERFLOW_ERROR);
   }
   if (currentValue === n) {
    var q = delta;
    var k = base;
    while (true) {
     var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
     if (q < t)
      break;
     var qMinusT = q - t;
     var baseMinusT = base - t;
     push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
     q = floor(qMinusT / baseMinusT);
     k += base;
    }
    push(output, fromCharCode(digitToBasic(q)));
    bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
    delta = 0;
    handledCPCount++;
   }
  }
  delta++;
  n++;
 }
 return join(output, '');
};
module.exports = function (input) {
 var encoded = [];
 var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
 var i, label;
 for (i = 0; i < labels.length; i++) {
  label = labels[i];
  push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
 }
 return join(encoded, '.');
};

/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var getBuiltIn = __w_pdfjs_require__(27);
var fails = __w_pdfjs_require__(11);
var validateArgumentsLength = __w_pdfjs_require__(126);
var toString = __w_pdfjs_require__(111);
var USE_NATIVE_URL = __w_pdfjs_require__(158);
var URL = getBuiltIn('URL');
var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function () {
 URL.canParse();
});
var WRONG_ARITY = fails(function () {
 return URL.canParse.length !== 1;
});
$({
 target: 'URL',
 stat: true,
 forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY
}, {
 canParse: function canParse(url) {
  var length = validateArgumentsLength(arguments.length, 1);
  var urlString = toString(url);
  var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);
  try {
   return !!new URL(urlString, base);
  } catch (error) {
   return false;
  }
 }
});

/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var getBuiltIn = __w_pdfjs_require__(27);
var validateArgumentsLength = __w_pdfjs_require__(126);
var toString = __w_pdfjs_require__(111);
var USE_NATIVE_URL = __w_pdfjs_require__(158);
var URL = getBuiltIn('URL');
$({
 target: 'URL',
 stat: true,
 forced: !USE_NATIVE_URL
}, {
 parse: function parse(url) {
  var length = validateArgumentsLength(arguments.length, 1);
  var urlString = toString(url);
  var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);
  try {
   return new URL(urlString, base);
  } catch (error) {
   return null;
  }
 }
});

/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var call = __w_pdfjs_require__(12);
$({
 target: 'URL',
 proto: true,
 enumerable: true
}, {
 toJSON: function toJSON() {
  return call(URL.prototype.toString, this);
 }
});

/***/ }),
/* 173 */
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
  true ? factory(exports) : 0;
}(this, function (exports) {
 'use strict';
 var SymbolPolyfill = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol : function (description) {
  return "Symbol(".concat(description, ")");
 };
 function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
     if (t[0] & 1)
      throw t[1];
     return t[1];
    },
    trys: [],
    ops: []
   }, f, y, t, g;
  return g = {
   next: verb(0),
   "throw": verb(1),
   "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
   return this;
  }), g;
 }
 function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
   return m.call(o);
  if (o && typeof o.length === "number")
   return {
    next: function () {
     if (o && i >= o.length)
      o = void 0;
     return {
      value: o && o[i++],
      done: !o
     };
    }
   };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
 }
 function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
 }
 function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
   throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
   return this;
  }, i;
 }
 function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
   throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
   return this;
  }, i;
 }
 function __asyncValues(o) {
  if (!Symbol.asyncIterator)
   throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
   return this;
  }, i);
 }
 typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
 };
 function noop() {
  return undefined;
 }
 function typeIsObject(x) {
  return typeof x === 'object' && x !== null || typeof x === 'function';
 }
 var rethrowAssertionErrorRejection = noop;
 function setFunctionName(fn, name) {
  try {
   Object.defineProperty(fn, 'name', {
    value: name,
    configurable: true
   });
  } catch (_a) {
  }
 }
 var originalPromise = Promise;
 var originalPromiseThen = Promise.prototype.then;
 var originalPromiseReject = Promise.reject.bind(originalPromise);
 function newPromise(executor) {
  return new originalPromise(executor);
 }
 function promiseResolvedWith(value) {
  return newPromise(function (resolve) {
   return resolve(value);
  });
 }
 function promiseRejectedWith(reason) {
  return originalPromiseReject(reason);
 }
 function PerformPromiseThen(promise, onFulfilled, onRejected) {
  return originalPromiseThen.call(promise, onFulfilled, onRejected);
 }
 function uponPromise(promise, onFulfilled, onRejected) {
  PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
 }
 function uponFulfillment(promise, onFulfilled) {
  uponPromise(promise, onFulfilled);
 }
 function uponRejection(promise, onRejected) {
  uponPromise(promise, undefined, onRejected);
 }
 function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
  return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
 }
 function setPromiseIsHandledToTrue(promise) {
  PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
 }
 var _queueMicrotask = function (callback) {
  if (typeof queueMicrotask === 'function') {
   _queueMicrotask = queueMicrotask;
  } else {
   var resolvedPromise_1 = promiseResolvedWith(undefined);
   _queueMicrotask = function (cb) {
    return PerformPromiseThen(resolvedPromise_1, cb);
   };
  }
  return _queueMicrotask(callback);
 };
 function reflectCall(F, V, args) {
  if (typeof F !== 'function') {
   throw new TypeError('Argument is not a function');
  }
  return Function.prototype.apply.call(F, V, args);
 }
 function promiseCall(F, V, args) {
  try {
   return promiseResolvedWith(reflectCall(F, V, args));
  } catch (value) {
   return promiseRejectedWith(value);
  }
 }
 var QUEUE_MAX_ARRAY_SIZE = 16384;
 var SimpleQueue = function () {
  function SimpleQueue() {
   this._cursor = 0;
   this._size = 0;
   this._front = {
    _elements: [],
    _next: undefined
   };
   this._back = this._front;
   this._cursor = 0;
   this._size = 0;
  }
  Object.defineProperty(SimpleQueue.prototype, "length", {
   get: function () {
    return this._size;
   },
   enumerable: false,
   configurable: true
  });
  SimpleQueue.prototype.push = function (element) {
   var oldBack = this._back;
   var newBack = oldBack;
   if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
    newBack = {
     _elements: [],
     _next: undefined
    };
   }
   oldBack._elements.push(element);
   if (newBack !== oldBack) {
    this._back = newBack;
    oldBack._next = newBack;
   }
   ++this._size;
  };
  SimpleQueue.prototype.shift = function () {
   var oldFront = this._front;
   var newFront = oldFront;
   var oldCursor = this._cursor;
   var newCursor = oldCursor + 1;
   var elements = oldFront._elements;
   var element = elements[oldCursor];
   if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
    newFront = oldFront._next;
    newCursor = 0;
   }
   --this._size;
   this._cursor = newCursor;
   if (oldFront !== newFront) {
    this._front = newFront;
   }
   elements[oldCursor] = undefined;
   return element;
  };
  SimpleQueue.prototype.forEach = function (callback) {
   var i = this._cursor;
   var node = this._front;
   var elements = node._elements;
   while (i !== elements.length || node._next !== undefined) {
    if (i === elements.length) {
     node = node._next;
     elements = node._elements;
     i = 0;
     if (elements.length === 0) {
      break;
     }
    }
    callback(elements[i]);
    ++i;
   }
  };
  SimpleQueue.prototype.peek = function () {
   var front = this._front;
   var cursor = this._cursor;
   return front._elements[cursor];
  };
  return SimpleQueue;
 }();
 var AbortSteps = SymbolPolyfill('[[AbortSteps]]');
 var ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
 var CancelSteps = SymbolPolyfill('[[CancelSteps]]');
 var PullSteps = SymbolPolyfill('[[PullSteps]]');
 var ReleaseSteps = SymbolPolyfill('[[ReleaseSteps]]');
 function ReadableStreamReaderGenericInitialize(reader, stream) {
  reader._ownerReadableStream = stream;
  stream._reader = reader;
  if (stream._state === 'readable') {
   defaultReaderClosedPromiseInitialize(reader);
  } else if (stream._state === 'closed') {
   defaultReaderClosedPromiseInitializeAsResolved(reader);
  } else {
   defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
  }
 }
 function ReadableStreamReaderGenericCancel(reader, reason) {
  var stream = reader._ownerReadableStream;
  return ReadableStreamCancel(stream, reason);
 }
 function ReadableStreamReaderGenericRelease(reader) {
  var stream = reader._ownerReadableStream;
  if (stream._state === 'readable') {
   defaultReaderClosedPromiseReject(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
  } else {
   defaultReaderClosedPromiseResetToRejected(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
  }
  stream._readableStreamController[ReleaseSteps]();
  stream._reader = undefined;
  reader._ownerReadableStream = undefined;
 }
 function readerLockException(name) {
  return new TypeError('Cannot ' + name + ' a stream using a released reader');
 }
 function defaultReaderClosedPromiseInitialize(reader) {
  reader._closedPromise = newPromise(function (resolve, reject) {
   reader._closedPromise_resolve = resolve;
   reader._closedPromise_reject = reject;
  });
 }
 function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
  defaultReaderClosedPromiseInitialize(reader);
  defaultReaderClosedPromiseReject(reader, reason);
 }
 function defaultReaderClosedPromiseInitializeAsResolved(reader) {
  defaultReaderClosedPromiseInitialize(reader);
  defaultReaderClosedPromiseResolve(reader);
 }
 function defaultReaderClosedPromiseReject(reader, reason) {
  if (reader._closedPromise_reject === undefined) {
   return;
  }
  setPromiseIsHandledToTrue(reader._closedPromise);
  reader._closedPromise_reject(reason);
  reader._closedPromise_resolve = undefined;
  reader._closedPromise_reject = undefined;
 }
 function defaultReaderClosedPromiseResetToRejected(reader, reason) {
  defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
 }
 function defaultReaderClosedPromiseResolve(reader) {
  if (reader._closedPromise_resolve === undefined) {
   return;
  }
  reader._closedPromise_resolve(undefined);
  reader._closedPromise_resolve = undefined;
  reader._closedPromise_reject = undefined;
 }
 var NumberIsFinite = Number.isFinite || function (x) {
  return typeof x === 'number' && isFinite(x);
 };
 var MathTrunc = Math.trunc || function (v) {
  return v < 0 ? Math.ceil(v) : Math.floor(v);
 };
 function isDictionary(x) {
  return typeof x === 'object' || typeof x === 'function';
 }
 function assertDictionary(obj, context) {
  if (obj !== undefined && !isDictionary(obj)) {
   throw new TypeError("".concat(context, " is not an object."));
  }
 }
 function assertFunction(x, context) {
  if (typeof x !== 'function') {
   throw new TypeError("".concat(context, " is not a function."));
  }
 }
 function isObject(x) {
  return typeof x === 'object' && x !== null || typeof x === 'function';
 }
 function assertObject(x, context) {
  if (!isObject(x)) {
   throw new TypeError("".concat(context, " is not an object."));
  }
 }
 function assertRequiredArgument(x, position, context) {
  if (x === undefined) {
   throw new TypeError("Parameter ".concat(position, " is required in '").concat(context, "'."));
  }
 }
 function assertRequiredField(x, field, context) {
  if (x === undefined) {
   throw new TypeError("".concat(field, " is required in '").concat(context, "'."));
  }
 }
 function convertUnrestrictedDouble(value) {
  return Number(value);
 }
 function censorNegativeZero(x) {
  return x === 0 ? 0 : x;
 }
 function integerPart(x) {
  return censorNegativeZero(MathTrunc(x));
 }
 function convertUnsignedLongLongWithEnforceRange(value, context) {
  var lowerBound = 0;
  var upperBound = Number.MAX_SAFE_INTEGER;
  var x = Number(value);
  x = censorNegativeZero(x);
  if (!NumberIsFinite(x)) {
   throw new TypeError("".concat(context, " is not a finite number"));
  }
  x = integerPart(x);
  if (x < lowerBound || x > upperBound) {
   throw new TypeError("".concat(context, " is outside the accepted range of ").concat(lowerBound, " to ").concat(upperBound, ", inclusive"));
  }
  if (!NumberIsFinite(x) || x === 0) {
   return 0;
  }
  return x;
 }
 function assertReadableStream(x, context) {
  if (!IsReadableStream(x)) {
   throw new TypeError("".concat(context, " is not a ReadableStream."));
  }
 }
 function AcquireReadableStreamDefaultReader(stream) {
  return new ReadableStreamDefaultReader(stream);
 }
 function ReadableStreamAddReadRequest(stream, readRequest) {
  stream._reader._readRequests.push(readRequest);
 }
 function ReadableStreamFulfillReadRequest(stream, chunk, done) {
  var reader = stream._reader;
  var readRequest = reader._readRequests.shift();
  if (done) {
   readRequest._closeSteps();
  } else {
   readRequest._chunkSteps(chunk);
  }
 }
 function ReadableStreamGetNumReadRequests(stream) {
  return stream._reader._readRequests.length;
 }
 function ReadableStreamHasDefaultReader(stream) {
  var reader = stream._reader;
  if (reader === undefined) {
   return false;
  }
  if (!IsReadableStreamDefaultReader(reader)) {
   return false;
  }
  return true;
 }
 var ReadableStreamDefaultReader = function () {
  function ReadableStreamDefaultReader(stream) {
   assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
   assertReadableStream(stream, 'First parameter');
   if (IsReadableStreamLocked(stream)) {
    throw new TypeError('This stream has already been locked for exclusive reading by another reader');
   }
   ReadableStreamReaderGenericInitialize(this, stream);
   this._readRequests = new SimpleQueue();
  }
  Object.defineProperty(ReadableStreamDefaultReader.prototype, "closed", {
   get: function () {
    if (!IsReadableStreamDefaultReader(this)) {
     return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
    }
    return this._closedPromise;
   },
   enumerable: false,
   configurable: true
  });
  ReadableStreamDefaultReader.prototype.cancel = function (reason) {
   if (reason === void 0) {
    reason = undefined;
   }
   if (!IsReadableStreamDefaultReader(this)) {
    return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
   }
   if (this._ownerReadableStream === undefined) {
    return promiseRejectedWith(readerLockException('cancel'));
   }
   return ReadableStreamReaderGenericCancel(this, reason);
  };
  ReadableStreamDefaultReader.prototype.read = function () {
   if (!IsReadableStreamDefaultReader(this)) {
    return promiseRejectedWith(defaultReaderBrandCheckException('read'));
   }
   if (this._ownerReadableStream === undefined) {
    return promiseRejectedWith(readerLockException('read from'));
   }
   var resolvePromise;
   var rejectPromise;
   var promise = newPromise(function (resolve, reject) {
    resolvePromise = resolve;
    rejectPromise = reject;
   });
   var readRequest = {
    _chunkSteps: function (chunk) {
     return resolvePromise({
      value: chunk,
      done: false
     });
    },
    _closeSteps: function () {
     return resolvePromise({
      value: undefined,
      done: true
     });
    },
    _errorSteps: function (e) {
     return rejectPromise(e);
    }
   };
   ReadableStreamDefaultReaderRead(this, readRequest);
   return promise;
  };
  ReadableStreamDefaultReader.prototype.releaseLock = function () {
   if (!IsReadableStreamDefaultReader(this)) {
    throw defaultReaderBrandCheckException('releaseLock');
   }
   if (this._ownerReadableStream === undefined) {
    return;
   }
   ReadableStreamDefaultReaderRelease(this);
  };
  return ReadableStreamDefaultReader;
 }();
 Object.defineProperties(ReadableStreamDefaultReader.prototype, {
  cancel: { enumerable: true },
  read: { enumerable: true },
  releaseLock: { enumerable: true },
  closed: { enumerable: true }
 });
 setFunctionName(ReadableStreamDefaultReader.prototype.cancel, 'cancel');
 setFunctionName(ReadableStreamDefaultReader.prototype.read, 'read');
 setFunctionName(ReadableStreamDefaultReader.prototype.releaseLock, 'releaseLock');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
   value: 'ReadableStreamDefaultReader',
   configurable: true
  });
 }
 function IsReadableStreamDefaultReader(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
   return false;
  }
  return x instanceof ReadableStreamDefaultReader;
 }
 function ReadableStreamDefaultReaderRead(reader, readRequest) {
  var stream = reader._ownerReadableStream;
  stream._disturbed = true;
  if (stream._state === 'closed') {
   readRequest._closeSteps();
  } else if (stream._state === 'errored') {
   readRequest._errorSteps(stream._storedError);
  } else {
   stream._readableStreamController[PullSteps](readRequest);
  }
 }
 function ReadableStreamDefaultReaderRelease(reader) {
  ReadableStreamReaderGenericRelease(reader);
  var e = new TypeError('Reader was released');
  ReadableStreamDefaultReaderErrorReadRequests(reader, e);
 }
 function ReadableStreamDefaultReaderErrorReadRequests(reader, e) {
  var readRequests = reader._readRequests;
  reader._readRequests = new SimpleQueue();
  readRequests.forEach(function (readRequest) {
   readRequest._errorSteps(e);
  });
 }
 function defaultReaderBrandCheckException(name) {
  return new TypeError("ReadableStreamDefaultReader.prototype.".concat(name, " can only be used on a ReadableStreamDefaultReader"));
 }
 var _a$1, _b, _c;
 function CreateArrayFromList(elements) {
  return elements.slice();
 }
 function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
  new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
 }
 var TransferArrayBuffer = function (O) {
  if (typeof O.transfer === 'function') {
   TransferArrayBuffer = function (buffer) {
    return buffer.transfer();
   };
  } else if (typeof structuredClone === 'function') {
   TransferArrayBuffer = function (buffer) {
    return structuredClone(buffer, { transfer: [buffer] });
   };
  } else {
   TransferArrayBuffer = function (buffer) {
    return buffer;
   };
  }
  return TransferArrayBuffer(O);
 };
 var IsDetachedBuffer = function (O) {
  if (typeof O.detached === 'boolean') {
   IsDetachedBuffer = function (buffer) {
    return buffer.detached;
   };
  } else {
   IsDetachedBuffer = function (buffer) {
    return buffer.byteLength === 0;
   };
  }
  return IsDetachedBuffer(O);
 };
 function ArrayBufferSlice(buffer, begin, end) {
  if (buffer.slice) {
   return buffer.slice(begin, end);
  }
  var length = end - begin;
  var slice = new ArrayBuffer(length);
  CopyDataBlockBytes(slice, 0, buffer, begin, length);
  return slice;
 }
 function GetMethod(receiver, prop) {
  var func = receiver[prop];
  if (func === undefined || func === null) {
   return undefined;
  }
  if (typeof func !== 'function') {
   throw new TypeError("".concat(String(prop), " is not a function"));
  }
  return func;
 }
 function CreateAsyncFromSyncIterator(syncIteratorRecord) {
  var _a;
  var syncIterable = (_a = {}, _a[SymbolPolyfill.iterator] = function () {
   return syncIteratorRecord.iterator;
  }, _a);
  var asyncIterator = function () {
   return __asyncGenerator(this, arguments, function () {
    return __generator(this, function (_a) {
     switch (_a.label) {
     case 0:
      return [
       5,
       __values(__asyncDelegator(__asyncValues(syncIterable)))
      ];
     case 1:
      return [
       4,
       __await.apply(void 0, [_a.sent()])
      ];
     case 2:
      return [
       4,
       __await.apply(void 0, [_a.sent()])
      ];
     case 3:
      return [
       2,
       _a.sent()
      ];
     }
    });
   });
  }();
  var nextMethod = asyncIterator.next;
  return {
   iterator: asyncIterator,
   nextMethod: nextMethod,
   done: false
  };
 }
 var SymbolAsyncIterator = (_c = (_a$1 = SymbolPolyfill.asyncIterator) !== null && _a$1 !== void 0 ? _a$1 : (_b = SymbolPolyfill.for) === null || _b === void 0 ? void 0 : _b.call(SymbolPolyfill, 'Symbol.asyncIterator')) !== null && _c !== void 0 ? _c : '@@asyncIterator';
 function GetIterator(obj, hint, method) {
  if (hint === void 0) {
   hint = 'sync';
  }
  if (method === undefined) {
   if (hint === 'async') {
    method = GetMethod(obj, SymbolAsyncIterator);
    if (method === undefined) {
     var syncMethod = GetMethod(obj, SymbolPolyfill.iterator);
     var syncIteratorRecord = GetIterator(obj, 'sync', syncMethod);
     return CreateAsyncFromSyncIterator(syncIteratorRecord);
    }
   } else {
    method = GetMethod(obj, SymbolPolyfill.iterator);
   }
  }
  if (method === undefined) {
   throw new TypeError('The object is not iterable');
  }
  var iterator = reflectCall(method, obj, []);
  if (!typeIsObject(iterator)) {
   throw new TypeError('The iterator method must return an object');
  }
  var nextMethod = iterator.next;
  return {
   iterator: iterator,
   nextMethod: nextMethod,
   done: false
  };
 }
 function IteratorNext(iteratorRecord) {
  var result = reflectCall(iteratorRecord.nextMethod, iteratorRecord.iterator, []);
  if (!typeIsObject(result)) {
   throw new TypeError('The iterator.next() method must return an object');
  }
  return result;
 }
 function IteratorComplete(iterResult) {
  return Boolean(iterResult.done);
 }
 function IteratorValue(iterResult) {
  return iterResult.value;
 }
 var _a;
 var AsyncIteratorPrototype = (_a = {}, _a[SymbolAsyncIterator] = function () {
  return this;
 }, _a);
 Object.defineProperty(AsyncIteratorPrototype, SymbolAsyncIterator, { enumerable: false });
 var ReadableStreamAsyncIteratorImpl = function () {
  function ReadableStreamAsyncIteratorImpl(reader, preventCancel) {
   this._ongoingPromise = undefined;
   this._isFinished = false;
   this._reader = reader;
   this._preventCancel = preventCancel;
  }
  ReadableStreamAsyncIteratorImpl.prototype.next = function () {
   var _this = this;
   var nextSteps = function () {
    return _this._nextSteps();
   };
   this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
   return this._ongoingPromise;
  };
  ReadableStreamAsyncIteratorImpl.prototype.return = function (value) {
   var _this = this;
   var returnSteps = function () {
    return _this._returnSteps(value);
   };
   return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
  };
  ReadableStreamAsyncIteratorImpl.prototype._nextSteps = function () {
   var _this = this;
   if (this._isFinished) {
    return Promise.resolve({
     value: undefined,
     done: true
    });
   }
   var reader = this._reader;
   var resolvePromise;
   var rejectPromise;
   var promise = newPromise(function (resolve, reject) {
    resolvePromise = resolve;
    rejectPromise = reject;
   });
   var readRequest = {
    _chunkSteps: function (chunk) {
     _this._ongoingPromise = undefined;
     _queueMicrotask(function () {
      return resolvePromise({
       value: chunk,
       done: false
      });
     });
    },
    _closeSteps: function () {
     _this._ongoingPromise = undefined;
     _this._isFinished = true;
     ReadableStreamReaderGenericRelease(reader);
     resolvePromise({
      value: undefined,
      done: true
     });
    },
    _errorSteps: function (reason) {
     _this._ongoingPromise = undefined;
     _this._isFinished = true;
     ReadableStreamReaderGenericRelease(reader);
     rejectPromise(reason);
    }
   };
   ReadableStreamDefaultReaderRead(reader, readRequest);
   return promise;
  };
  ReadableStreamAsyncIteratorImpl.prototype._returnSteps = function (value) {
   if (this._isFinished) {
    return Promise.resolve({
     value: value,
     done: true
    });
   }
   this._isFinished = true;
   var reader = this._reader;
   if (!this._preventCancel) {
    var result = ReadableStreamReaderGenericCancel(reader, value);
    ReadableStreamReaderGenericRelease(reader);
    return transformPromiseWith(result, function () {
     return {
      value: value,
      done: true
     };
    });
   }
   ReadableStreamReaderGenericRelease(reader);
   return promiseResolvedWith({
    value: value,
    done: true
   });
  };
  return ReadableStreamAsyncIteratorImpl;
 }();
 var ReadableStreamAsyncIteratorPrototype = {
  next: function () {
   if (!IsReadableStreamAsyncIterator(this)) {
    return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
   }
   return this._asyncIteratorImpl.next();
  },
  return: function (value) {
   if (!IsReadableStreamAsyncIterator(this)) {
    return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
   }
   return this._asyncIteratorImpl.return(value);
  }
 };
 Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
 function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
  var reader = AcquireReadableStreamDefaultReader(stream);
  var impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
  iterator._asyncIteratorImpl = impl;
  return iterator;
 }
 function IsReadableStreamAsyncIterator(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
   return false;
  }
  try {
   return x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
  } catch (_a) {
   return false;
  }
 }
 function streamAsyncIteratorBrandCheckException(name) {
  return new TypeError("ReadableStreamAsyncIterator.".concat(name, " can only be used on a ReadableSteamAsyncIterator"));
 }
 var NumberIsNaN = Number.isNaN || function (x) {
  return x !== x;
 };
 function IsNonNegativeNumber(v) {
  if (typeof v !== 'number') {
   return false;
  }
  if (NumberIsNaN(v)) {
   return false;
  }
  if (v < 0) {
   return false;
  }
  return true;
 }
 function CloneAsUint8Array(O) {
  var buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
  return new Uint8Array(buffer);
 }
 function DequeueValue(container) {
  var pair = container._queue.shift();
  container._queueTotalSize -= pair.size;
  if (container._queueTotalSize < 0) {
   container._queueTotalSize = 0;
  }
  return pair.value;
 }
 function EnqueueValueWithSize(container, value, size) {
  if (!IsNonNegativeNumber(size) || size === Infinity) {
   throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
  }
  container._queue.push({
   value: value,
   size: size
  });
  container._queueTotalSize += size;
 }
 function PeekQueueValue(container) {
  var pair = container._queue.peek();
  return pair.value;
 }
 function ResetQueue(container) {
  container._queue = new SimpleQueue();
  container._queueTotalSize = 0;
 }
 function isDataViewConstructor(ctor) {
  return ctor === DataView;
 }
 function isDataView(view) {
  return isDataViewConstructor(view.constructor);
 }
 function arrayBufferViewElementSize(ctor) {
  if (isDataViewConstructor(ctor)) {
   return 1;
  }
  return ctor.BYTES_PER_ELEMENT;
 }
 var ReadableStreamBYOBRequest = function () {
  function ReadableStreamBYOBRequest() {
   throw new TypeError('Illegal constructor');
  }
  Object.defineProperty(ReadableStreamBYOBRequest.prototype, "view", {
   get: function () {
    if (!IsReadableStreamBYOBRequest(this)) {
     throw byobRequestBrandCheckException('view');
    }
    return this._view;
   },
   enumerable: false,
   configurable: true
  });
  ReadableStreamBYOBRequest.prototype.respond = function (bytesWritten) {
   if (!IsReadableStreamBYOBRequest(this)) {
    throw byobRequestBrandCheckException('respond');
   }
   assertRequiredArgument(bytesWritten, 1, 'respond');
   bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
   if (this._associatedReadableByteStreamController === undefined) {
    throw new TypeError('This BYOB request has been invalidated');
   }
   if (IsDetachedBuffer(this._view.buffer)) {
    throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
   }
   ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
  };
  ReadableStreamBYOBRequest.prototype.respondWithNewView = function (view) {
   if (!IsReadableStreamBYOBRequest(this)) {
    throw byobRequestBrandCheckException('respondWithNewView');
   }
   assertRequiredArgument(view, 1, 'respondWithNewView');
   if (!ArrayBuffer.isView(view)) {
    throw new TypeError('You can only respond with array buffer views');
   }
   if (this._associatedReadableByteStreamController === undefined) {
    throw new TypeError('This BYOB request has been invalidated');
   }
   if (IsDetachedBuffer(view.buffer)) {
    throw new TypeError('The given view\'s buffer has been detached and so cannot be used as a response');
   }
   ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
  };
  return ReadableStreamBYOBRequest;
 }();
 Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
  respond: { enumerable: true },
  respondWithNewView: { enumerable: true },
  view: { enumerable: true }
 });
 setFunctionName(ReadableStreamBYOBRequest.prototype.respond, 'respond');
 setFunctionName(ReadableStreamBYOBRequest.prototype.respondWithNewView, 'respondWithNewView');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
   value: 'ReadableStreamBYOBRequest',
   configurable: true
  });
 }
 var ReadableByteStreamController = function () {
  function ReadableByteStreamController() {
   throw new TypeError('Illegal constructor');
  }
  Object.defineProperty(ReadableByteStreamController.prototype, "byobRequest", {
   get: function () {
    if (!IsReadableByteStreamController(this)) {
     throw byteStreamControllerBrandCheckException('byobRequest');
    }
    return ReadableByteStreamControllerGetBYOBRequest(this);
   },
   enumerable: false,
   configurable: true
  });
  Object.defineProperty(ReadableByteStreamController.prototype, "desiredSize", {
   get: function () {
    if (!IsReadableByteStreamController(this)) {
     throw byteStreamControllerBrandCheckException('desiredSize');
    }
    return ReadableByteStreamControllerGetDesiredSize(this);
   },
   enumerable: false,
   configurable: true
  });
  ReadableByteStreamController.prototype.close = function () {
   if (!IsReadableByteStreamController(this)) {
    throw byteStreamControllerBrandCheckException('close');
   }
   if (this._closeRequested) {
    throw new TypeError('The stream has already been closed; do not close it again!');
   }
   var state = this._controlledReadableByteStream._state;
   if (state !== 'readable') {
    throw new TypeError("The stream (in ".concat(state, " state) is not in the readable state and cannot be closed"));
   }
   ReadableByteStreamControllerClose(this);
  };
  ReadableByteStreamController.prototype.enqueue = function (chunk) {
   if (!IsReadableByteStreamController(this)) {
    throw byteStreamControllerBrandCheckException('enqueue');
   }
   assertRequiredArgument(chunk, 1, 'enqueue');
   if (!ArrayBuffer.isView(chunk)) {
    throw new TypeError('chunk must be an array buffer view');
   }
   if (chunk.byteLength === 0) {
    throw new TypeError('chunk must have non-zero byteLength');
   }
   if (chunk.buffer.byteLength === 0) {
    throw new TypeError("chunk's buffer must have non-zero byteLength");
   }
   if (this._closeRequested) {
    throw new TypeError('stream is closed or draining');
   }
   var state = this._controlledReadableByteStream._state;
   if (state !== 'readable') {
    throw new TypeError("The stream (in ".concat(state, " state) is not in the readable state and cannot be enqueued to"));
   }
   ReadableByteStreamControllerEnqueue(this, chunk);
  };
  ReadableByteStreamController.prototype.error = function (e) {
   if (e === void 0) {
    e = undefined;
   }
   if (!IsReadableByteStreamController(this)) {
    throw byteStreamControllerBrandCheckException('error');
   }
   ReadableByteStreamControllerError(this, e);
  };
  ReadableByteStreamController.prototype[CancelSteps] = function (reason) {
   ReadableByteStreamControllerClearPendingPullIntos(this);
   ResetQueue(this);
   var result = this._cancelAlgorithm(reason);
   ReadableByteStreamControllerClearAlgorithms(this);
   return result;
  };
  ReadableByteStreamController.prototype[PullSteps] = function (readRequest) {
   var stream = this._controlledReadableByteStream;
   if (this._queueTotalSize > 0) {
    ReadableByteStreamControllerFillReadRequestFromQueue(this, readRequest);
    return;
   }
   var autoAllocateChunkSize = this._autoAllocateChunkSize;
   if (autoAllocateChunkSize !== undefined) {
    var buffer = void 0;
    try {
     buffer = new ArrayBuffer(autoAllocateChunkSize);
    } catch (bufferE) {
     readRequest._errorSteps(bufferE);
     return;
    }
    var pullIntoDescriptor = {
     buffer: buffer,
     bufferByteLength: autoAllocateChunkSize,
     byteOffset: 0,
     byteLength: autoAllocateChunkSize,
     bytesFilled: 0,
     minimumFill: 1,
     elementSize: 1,
     viewConstructor: Uint8Array,
     readerType: 'default'
    };
    this._pendingPullIntos.push(pullIntoDescriptor);
   }
   ReadableStreamAddReadRequest(stream, readRequest);
   ReadableByteStreamControllerCallPullIfNeeded(this);
  };
  ReadableByteStreamController.prototype[ReleaseSteps] = function () {
   if (this._pendingPullIntos.length > 0) {
    var firstPullInto = this._pendingPullIntos.peek();
    firstPullInto.readerType = 'none';
    this._pendingPullIntos = new SimpleQueue();
    this._pendingPullIntos.push(firstPullInto);
   }
  };
  return ReadableByteStreamController;
 }();
 Object.defineProperties(ReadableByteStreamController.prototype, {
  close: { enumerable: true },
  enqueue: { enumerable: true },
  error: { enumerable: true },
  byobRequest: { enumerable: true },
  desiredSize: { enumerable: true }
 });
 setFunctionName(ReadableByteStreamController.prototype.close, 'close');
 setFunctionName(ReadableByteStreamController.prototype.enqueue, 'enqueue');
 setFunctionName(ReadableByteStreamController.prototype.error, 'error');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
   value: 'ReadableByteStreamController',
   configurable: true
  });
 }
 function IsReadableByteStreamController(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
   return false;
  }
  return x instanceof ReadableByteStreamController;
 }
 function IsReadableStreamBYOBRequest(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
   return false;
  }
  return x instanceof ReadableStreamBYOBRequest;
 }
 function ReadableByteStreamControllerCallPullIfNeeded(controller) {
  var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
  if (!shouldPull) {
   return;
  }
  if (controller._pulling) {
   controller._pullAgain = true;
   return;
  }
  controller._pulling = true;
  var pullPromise = controller._pullAlgorithm();
  uponPromise(pullPromise, function () {
   controller._pulling = false;
   if (controller._pullAgain) {
    controller._pullAgain = false;
    ReadableByteStreamControllerCallPullIfNeeded(controller);
   }
   return null;
  }, function (e) {
   ReadableByteStreamControllerError(controller, e);
   return null;
  });
 }
 function ReadableByteStreamControllerClearPendingPullIntos(controller) {
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  controller._pendingPullIntos = new SimpleQueue();
 }
 function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
  var done = false;
  if (stream._state === 'closed') {
   done = true;
  }
  var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
  if (pullIntoDescriptor.readerType === 'default') {
   ReadableStreamFulfillReadRequest(stream, filledView, done);
  } else {
   ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
  }
 }
 function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
  var bytesFilled = pullIntoDescriptor.bytesFilled;
  var elementSize = pullIntoDescriptor.elementSize;
  return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
 }
 function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
  controller._queue.push({
   buffer: buffer,
   byteOffset: byteOffset,
   byteLength: byteLength
  });
  controller._queueTotalSize += byteLength;
 }
 function ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, buffer, byteOffset, byteLength) {
  var clonedChunk;
  try {
   clonedChunk = ArrayBufferSlice(buffer, byteOffset, byteOffset + byteLength);
  } catch (cloneE) {
   ReadableByteStreamControllerError(controller, cloneE);
   throw cloneE;
  }
  ReadableByteStreamControllerEnqueueChunkToQueue(controller, clonedChunk, 0, byteLength);
 }
 function ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstDescriptor) {
  if (firstDescriptor.bytesFilled > 0) {
   ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, firstDescriptor.buffer, firstDescriptor.byteOffset, firstDescriptor.bytesFilled);
  }
  ReadableByteStreamControllerShiftPendingPullInto(controller);
 }
 function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
  var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
  var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
  var totalBytesToCopyRemaining = maxBytesToCopy;
  var ready = false;
  var remainderBytes = maxBytesFilled % pullIntoDescriptor.elementSize;
  var maxAlignedBytes = maxBytesFilled - remainderBytes;
  if (maxAlignedBytes >= pullIntoDescriptor.minimumFill) {
   totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
   ready = true;
  }
  var queue = controller._queue;
  while (totalBytesToCopyRemaining > 0) {
   var headOfQueue = queue.peek();
   var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
   var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
   CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
   if (headOfQueue.byteLength === bytesToCopy) {
    queue.shift();
   } else {
    headOfQueue.byteOffset += bytesToCopy;
    headOfQueue.byteLength -= bytesToCopy;
   }
   controller._queueTotalSize -= bytesToCopy;
   ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
   totalBytesToCopyRemaining -= bytesToCopy;
  }
  return ready;
 }
 function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
  pullIntoDescriptor.bytesFilled += size;
 }
 function ReadableByteStreamControllerHandleQueueDrain(controller) {
  if (controller._queueTotalSize === 0 && controller._closeRequested) {
   ReadableByteStreamControllerClearAlgorithms(controller);
   ReadableStreamClose(controller._controlledReadableByteStream);
  } else {
   ReadableByteStreamControllerCallPullIfNeeded(controller);
  }
 }
 function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
  if (controller._byobRequest === null) {
   return;
  }
  controller._byobRequest._associatedReadableByteStreamController = undefined;
  controller._byobRequest._view = null;
  controller._byobRequest = null;
 }
 function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
  while (controller._pendingPullIntos.length > 0) {
   if (controller._queueTotalSize === 0) {
    return;
   }
   var pullIntoDescriptor = controller._pendingPullIntos.peek();
   if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
   }
  }
 }
 function ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller) {
  var reader = controller._controlledReadableByteStream._reader;
  while (reader._readRequests.length > 0) {
   if (controller._queueTotalSize === 0) {
    return;
   }
   var readRequest = reader._readRequests.shift();
   ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest);
  }
 }
 function ReadableByteStreamControllerPullInto(controller, view, min, readIntoRequest) {
  var stream = controller._controlledReadableByteStream;
  var ctor = view.constructor;
  var elementSize = arrayBufferViewElementSize(ctor);
  var byteOffset = view.byteOffset, byteLength = view.byteLength;
  var minimumFill = min * elementSize;
  var buffer;
  try {
   buffer = TransferArrayBuffer(view.buffer);
  } catch (e) {
   readIntoRequest._errorSteps(e);
   return;
  }
  var pullIntoDescriptor = {
   buffer: buffer,
   bufferByteLength: buffer.byteLength,
   byteOffset: byteOffset,
   byteLength: byteLength,
   bytesFilled: 0,
   minimumFill: minimumFill,
   elementSize: elementSize,
   viewConstructor: ctor,
   readerType: 'byob'
  };
  if (controller._pendingPullIntos.length > 0) {
   controller._pendingPullIntos.push(pullIntoDescriptor);
   ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
   return;
  }
  if (stream._state === 'closed') {
   var emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
   readIntoRequest._closeSteps(emptyView);
   return;
  }
  if (controller._queueTotalSize > 0) {
   if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    ReadableByteStreamControllerHandleQueueDrain(controller);
    readIntoRequest._chunkSteps(filledView);
    return;
   }
   if (controller._closeRequested) {
    var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
    ReadableByteStreamControllerError(controller, e);
    readIntoRequest._errorSteps(e);
    return;
   }
  }
  controller._pendingPullIntos.push(pullIntoDescriptor);
  ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
  ReadableByteStreamControllerCallPullIfNeeded(controller);
 }
 function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
  if (firstDescriptor.readerType === 'none') {
   ReadableByteStreamControllerShiftPendingPullInto(controller);
  }
  var stream = controller._controlledReadableByteStream;
  if (ReadableStreamHasBYOBReader(stream)) {
   while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
    var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
    ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
   }
  }
 }
 function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
  ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
  if (pullIntoDescriptor.readerType === 'none') {
   ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, pullIntoDescriptor);
   ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
   return;
  }
  if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.minimumFill) {
   return;
  }
  ReadableByteStreamControllerShiftPendingPullInto(controller);
  var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
  if (remainderSize > 0) {
   var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
   ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, pullIntoDescriptor.buffer, end - remainderSize, remainderSize);
  }
  pullIntoDescriptor.bytesFilled -= remainderSize;
  ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
  ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
 }
 function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
  var firstDescriptor = controller._pendingPullIntos.peek();
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  var state = controller._controlledReadableByteStream._state;
  if (state === 'closed') {
   ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
  } else {
   ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
  }
  ReadableByteStreamControllerCallPullIfNeeded(controller);
 }
 function ReadableByteStreamControllerShiftPendingPullInto(controller) {
  var descriptor = controller._pendingPullIntos.shift();
  return descriptor;
 }
 function ReadableByteStreamControllerShouldCallPull(controller) {
  var stream = controller._controlledReadableByteStream;
  if (stream._state !== 'readable') {
   return false;
  }
  if (controller._closeRequested) {
   return false;
  }
  if (!controller._started) {
   return false;
  }
  if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
   return true;
  }
  if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
   return true;
  }
  var desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
  if (desiredSize > 0) {
   return true;
  }
  return false;
 }
 function ReadableByteStreamControllerClearAlgorithms(controller) {
  controller._pullAlgorithm = undefined;
  controller._cancelAlgorithm = undefined;
 }
 function ReadableByteStreamControllerClose(controller) {
  var stream = controller._controlledReadableByteStream;
  if (controller._closeRequested || stream._state !== 'readable') {
   return;
  }
  if (controller._queueTotalSize > 0) {
   controller._closeRequested = true;
   return;
  }
  if (controller._pendingPullIntos.length > 0) {
   var firstPendingPullInto = controller._pendingPullIntos.peek();
   if (firstPendingPullInto.bytesFilled % firstPendingPullInto.elementSize !== 0) {
    var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
    ReadableByteStreamControllerError(controller, e);
    throw e;
   }
  }
  ReadableByteStreamControllerClearAlgorithms(controller);
  ReadableStreamClose(stream);
 }
 function ReadableByteStreamControllerEnqueue(controller, chunk) {
  var stream = controller._controlledReadableByteStream;
  if (controller._closeRequested || stream._state !== 'readable') {
   return;
  }
  var buffer = chunk.buffer, byteOffset = chunk.byteOffset, byteLength = chunk.byteLength;
  if (IsDetachedBuffer(buffer)) {
   throw new TypeError('chunk\'s buffer is detached and so cannot be enqueued');
  }
  var transferredBuffer = TransferArrayBuffer(buffer);
  if (controller._pendingPullIntos.length > 0) {
   var firstPendingPullInto = controller._pendingPullIntos.peek();
   if (IsDetachedBuffer(firstPendingPullInto.buffer)) {
    throw new TypeError('The BYOB request\'s buffer has been detached and so cannot be filled with an enqueued chunk');
   }
   ReadableByteStreamControllerInvalidateBYOBRequest(controller);
   firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
   if (firstPendingPullInto.readerType === 'none') {
    ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstPendingPullInto);
   }
  }
  if (ReadableStreamHasDefaultReader(stream)) {
   ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller);
   if (ReadableStreamGetNumReadRequests(stream) === 0) {
    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
   } else {
    if (controller._pendingPullIntos.length > 0) {
     ReadableByteStreamControllerShiftPendingPullInto(controller);
    }
    var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
    ReadableStreamFulfillReadRequest(stream, transferredView, false);
   }
  } else if (ReadableStreamHasBYOBReader(stream)) {
   ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
   ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  } else {
   ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
  }
  ReadableByteStreamControllerCallPullIfNeeded(controller);
 }
 function ReadableByteStreamControllerError(controller, e) {
  var stream = controller._controlledReadableByteStream;
  if (stream._state !== 'readable') {
   return;
  }
  ReadableByteStreamControllerClearPendingPullIntos(controller);
  ResetQueue(controller);
  ReadableByteStreamControllerClearAlgorithms(controller);
  ReadableStreamError(stream, e);
 }
 function ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest) {
  var entry = controller._queue.shift();
  controller._queueTotalSize -= entry.byteLength;
  ReadableByteStreamControllerHandleQueueDrain(controller);
  var view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
  readRequest._chunkSteps(view);
 }
 function ReadableByteStreamControllerGetBYOBRequest(controller) {
  if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
   var firstDescriptor = controller._pendingPullIntos.peek();
   var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
   var byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
   SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
   controller._byobRequest = byobRequest;
  }
  return controller._byobRequest;
 }
 function ReadableByteStreamControllerGetDesiredSize(controller) {
  var state = controller._controlledReadableByteStream._state;
  if (state === 'errored') {
   return null;
  }
  if (state === 'closed') {
   return 0;
  }
  return controller._strategyHWM - controller._queueTotalSize;
 }
 function ReadableByteStreamControllerRespond(controller, bytesWritten) {
  var firstDescriptor = controller._pendingPullIntos.peek();
  var state = controller._controlledReadableByteStream._state;
  if (state === 'closed') {
   if (bytesWritten !== 0) {
    throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
   }
  } else {
   if (bytesWritten === 0) {
    throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
   }
   if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
    throw new RangeError('bytesWritten out of range');
   }
  }
  firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
  ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
 }
 function ReadableByteStreamControllerRespondWithNewView(controller, view) {
  var firstDescriptor = controller._pendingPullIntos.peek();
  var state = controller._controlledReadableByteStream._state;
  if (state === 'closed') {
   if (view.byteLength !== 0) {
    throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
   }
  } else {
   if (view.byteLength === 0) {
    throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
   }
  }
  if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
   throw new RangeError('The region specified by view does not match byobRequest');
  }
  if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
   throw new RangeError('The buffer of view has different capacity than byobRequest');
  }
  if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
   throw new RangeError('The region specified by view is larger than byobRequest');
  }
  var viewByteLength = view.byteLength;
  firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
  ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
 }
 function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
  controller._controlledReadableByteStream = stream;
  controller._pullAgain = false;
  controller._pulling = false;
  controller._byobRequest = null;
  controller._queue = controller._queueTotalSize = undefined;
  ResetQueue(controller);
  controller._closeRequested = false;
  controller._started = false;
  controller._strategyHWM = highWaterMark;
  controller._pullAlgorithm = pullAlgorithm;
  controller._cancelAlgorithm = cancelAlgorithm;
  controller._autoAllocateChunkSize = autoAllocateChunkSize;
  controller._pendingPullIntos = new SimpleQueue();
  stream._readableStreamController = controller;
  var startResult = startAlgorithm();
  uponPromise(promiseResolvedWith(startResult), function () {
   controller._started = true;
   ReadableByteStreamControllerCallPullIfNeeded(controller);
   return null;
  }, function (r) {
   ReadableByteStreamControllerError(controller, r);
   return null;
  });
 }
 function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
  var controller = Object.create(ReadableByteStreamController.prototype);
  var startAlgorithm;
  var pullAlgorithm;
  var cancelAlgorithm;
  if (underlyingByteSource.start !== undefined) {
   startAlgorithm = function () {
    return underlyingByteSource.start(controller);
   };
  } else {
   startAlgorithm = function () {
    return undefined;
   };
  }
  if (underlyingByteSource.pull !== undefined) {
   pullAlgorithm = function () {
    return underlyingByteSource.pull(controller);
   };
  } else {
   pullAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  if (underlyingByteSource.cancel !== undefined) {
   cancelAlgorithm = function (reason) {
    return underlyingByteSource.cancel(reason);
   };
  } else {
   cancelAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
  if (autoAllocateChunkSize === 0) {
   throw new TypeError('autoAllocateChunkSize must be greater than 0');
  }
  SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
 }
 function SetUpReadableStreamBYOBRequest(request, controller, view) {
  request._associatedReadableByteStreamController = controller;
  request._view = view;
 }
 function byobRequestBrandCheckException(name) {
  return new TypeError("ReadableStreamBYOBRequest.prototype.".concat(name, " can only be used on a ReadableStreamBYOBRequest"));
 }
 function byteStreamControllerBrandCheckException(name) {
  return new TypeError("ReadableByteStreamController.prototype.".concat(name, " can only be used on a ReadableByteStreamController"));
 }
 function convertReaderOptions(options, context) {
  assertDictionary(options, context);
  var mode = options === null || options === void 0 ? void 0 : options.mode;
  return { mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, "".concat(context, " has member 'mode' that")) };
 }
 function convertReadableStreamReaderMode(mode, context) {
  mode = "".concat(mode);
  if (mode !== 'byob') {
   throw new TypeError("".concat(context, " '").concat(mode, "' is not a valid enumeration value for ReadableStreamReaderMode"));
  }
  return mode;
 }
 function convertByobReadOptions(options, context) {
  var _a;
  assertDictionary(options, context);
  var min = (_a = options === null || options === void 0 ? void 0 : options.min) !== null && _a !== void 0 ? _a : 1;
  return { min: convertUnsignedLongLongWithEnforceRange(min, "".concat(context, " has member 'min' that")) };
 }
 function AcquireReadableStreamBYOBReader(stream) {
  return new ReadableStreamBYOBReader(stream);
 }
 function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
  stream._reader._readIntoRequests.push(readIntoRequest);
 }
 function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
  var reader = stream._reader;
  var readIntoRequest = reader._readIntoRequests.shift();
  if (done) {
   readIntoRequest._closeSteps(chunk);
  } else {
   readIntoRequest._chunkSteps(chunk);
  }
 }
 function ReadableStreamGetNumReadIntoRequests(stream) {
  return stream._reader._readIntoRequests.length;
 }
 function ReadableStreamHasBYOBReader(stream) {
  var reader = stream._reader;
  if (reader === undefined) {
   return false;
  }
  if (!IsReadableStreamBYOBReader(reader)) {
   return false;
  }
  return true;
 }
 var ReadableStreamBYOBReader = function () {
  function ReadableStreamBYOBReader(stream) {
   assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
   assertReadableStream(stream, 'First parameter');
   if (IsReadableStreamLocked(stream)) {
    throw new TypeError('This stream has already been locked for exclusive reading by another reader');
   }
   if (!IsReadableByteStreamController(stream._readableStreamController)) {
    throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
   }
   ReadableStreamReaderGenericInitialize(this, stream);
   this._readIntoRequests = new SimpleQueue();
  }
  Object.defineProperty(ReadableStreamBYOBReader.prototype, "closed", {
   get: function () {
    if (!IsReadableStreamBYOBReader(this)) {
     return promiseRejectedWith(byobReaderBrandCheckException('closed'));
    }
    return this._closedPromise;
   },
   enumerable: false,
   configurable: true
  });
  ReadableStreamBYOBReader.prototype.cancel = function (reason) {
   if (reason === void 0) {
    reason = undefined;
   }
   if (!IsReadableStreamBYOBReader(this)) {
    return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
   }
   if (this._ownerReadableStream === undefined) {
    return promiseRejectedWith(readerLockException('cancel'));
   }
   return ReadableStreamReaderGenericCancel(this, reason);
  };
  ReadableStreamBYOBReader.prototype.read = function (view, rawOptions) {
   if (rawOptions === void 0) {
    rawOptions = {};
   }
   if (!IsReadableStreamBYOBReader(this)) {
    return promiseRejectedWith(byobReaderBrandCheckException('read'));
   }
   if (!ArrayBuffer.isView(view)) {
    return promiseRejectedWith(new TypeError('view must be an array buffer view'));
   }
   if (view.byteLength === 0) {
    return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
   }
   if (view.buffer.byteLength === 0) {
    return promiseRejectedWith(new TypeError("view's buffer must have non-zero byteLength"));
   }
   if (IsDetachedBuffer(view.buffer)) {
    return promiseRejectedWith(new TypeError('view\'s buffer has been detached'));
   }
   var options;
   try {
    options = convertByobReadOptions(rawOptions, 'options');
   } catch (e) {
    return promiseRejectedWith(e);
   }
   var min = options.min;
   if (min === 0) {
    return promiseRejectedWith(new TypeError('options.min must be greater than 0'));
   }
   if (!isDataView(view)) {
    if (min > view.length) {
     return promiseRejectedWith(new RangeError('options.min must be less than or equal to view\'s length'));
    }
   } else if (min > view.byteLength) {
    return promiseRejectedWith(new RangeError('options.min must be less than or equal to view\'s byteLength'));
   }
   if (this._ownerReadableStream === undefined) {
    return promiseRejectedWith(readerLockException('read from'));
   }
   var resolvePromise;
   var rejectPromise;
   var promise = newPromise(function (resolve, reject) {
    resolvePromise = resolve;
    rejectPromise = reject;
   });
   var readIntoRequest = {
    _chunkSteps: function (chunk) {
     return resolvePromise({
      value: chunk,
      done: false
     });
    },
    _closeSteps: function (chunk) {
     return resolvePromise({
      value: chunk,
      done: true
     });
    },
    _errorSteps: function (e) {
     return rejectPromise(e);
    }
   };
   ReadableStreamBYOBReaderRead(this, view, min, readIntoRequest);
   return promise;
  };
  ReadableStreamBYOBReader.prototype.releaseLock = function () {
   if (!IsReadableStreamBYOBReader(this)) {
    throw byobReaderBrandCheckException('releaseLock');
   }
   if (this._ownerReadableStream === undefined) {
    return;
   }
   ReadableStreamBYOBReaderRelease(this);
  };
  return ReadableStreamBYOBReader;
 }();
 Object.defineProperties(ReadableStreamBYOBReader.prototype, {
  cancel: { enumerable: true },
  read: { enumerable: true },
  releaseLock: { enumerable: true },
  closed: { enumerable: true }
 });
 setFunctionName(ReadableStreamBYOBReader.prototype.cancel, 'cancel');
 setFunctionName(ReadableStreamBYOBReader.prototype.read, 'read');
 setFunctionName(ReadableStreamBYOBReader.prototype.releaseLock, 'releaseLock');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
   value: 'ReadableStreamBYOBReader',
   configurable: true
  });
 }
 function IsReadableStreamBYOBReader(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
   return false;
  }
  return x instanceof ReadableStreamBYOBReader;
 }
 function ReadableStreamBYOBReaderRead(reader, view, min, readIntoRequest) {
  var stream = reader._ownerReadableStream;
  stream._disturbed = true;
  if (stream._state === 'errored') {
   readIntoRequest._errorSteps(stream._storedError);
  } else {
   ReadableByteStreamControllerPullInto(stream._readableStreamController, view, min, readIntoRequest);
  }
 }
 function ReadableStreamBYOBReaderRelease(reader) {
  ReadableStreamReaderGenericRelease(reader);
  var e = new TypeError('Reader was released');
  ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e);
 }
 function ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e) {
  var readIntoRequests = reader._readIntoRequests;
  reader._readIntoRequests = new SimpleQueue();
  readIntoRequests.forEach(function (readIntoRequest) {
   readIntoRequest._errorSteps(e);
  });
 }
 function byobReaderBrandCheckException(name) {
  return new TypeError("ReadableStreamBYOBReader.prototype.".concat(name, " can only be used on a ReadableStreamBYOBReader"));
 }
 function ExtractHighWaterMark(strategy, defaultHWM) {
  var highWaterMark = strategy.highWaterMark;
  if (highWaterMark === undefined) {
   return defaultHWM;
  }
  if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
   throw new RangeError('Invalid highWaterMark');
  }
  return highWaterMark;
 }
 function ExtractSizeAlgorithm(strategy) {
  var size = strategy.size;
  if (!size) {
   return function () {
    return 1;
   };
  }
  return size;
 }
 function convertQueuingStrategy(init, context) {
  assertDictionary(init, context);
  var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
  var size = init === null || init === void 0 ? void 0 : init.size;
  return {
   highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
   size: size === undefined ? undefined : convertQueuingStrategySize(size, "".concat(context, " has member 'size' that"))
  };
 }
 function convertQueuingStrategySize(fn, context) {
  assertFunction(fn, context);
  return function (chunk) {
   return convertUnrestrictedDouble(fn(chunk));
  };
 }
 function convertUnderlyingSink(original, context) {
  assertDictionary(original, context);
  var abort = original === null || original === void 0 ? void 0 : original.abort;
  var close = original === null || original === void 0 ? void 0 : original.close;
  var start = original === null || original === void 0 ? void 0 : original.start;
  var type = original === null || original === void 0 ? void 0 : original.type;
  var write = original === null || original === void 0 ? void 0 : original.write;
  return {
   abort: abort === undefined ? undefined : convertUnderlyingSinkAbortCallback(abort, original, "".concat(context, " has member 'abort' that")),
   close: close === undefined ? undefined : convertUnderlyingSinkCloseCallback(close, original, "".concat(context, " has member 'close' that")),
   start: start === undefined ? undefined : convertUnderlyingSinkStartCallback(start, original, "".concat(context, " has member 'start' that")),
   write: write === undefined ? undefined : convertUnderlyingSinkWriteCallback(write, original, "".concat(context, " has member 'write' that")),
   type: type
  };
 }
 function convertUnderlyingSinkAbortCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (reason) {
   return promiseCall(fn, original, [reason]);
  };
 }
 function convertUnderlyingSinkCloseCallback(fn, original, context) {
  assertFunction(fn, context);
  return function () {
   return promiseCall(fn, original, []);
  };
 }
 function convertUnderlyingSinkStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (controller) {
   return reflectCall(fn, original, [controller]);
  };
 }
 function convertUnderlyingSinkWriteCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (chunk, controller) {
   return promiseCall(fn, original, [
    chunk,
    controller
   ]);
  };
 }
 function assertWritableStream(x, context) {
  if (!IsWritableStream(x)) {
   throw new TypeError("".concat(context, " is not a WritableStream."));
  }
 }
 function isAbortSignal(value) {
  if (typeof value !== 'object' || value === null) {
   return false;
  }
  try {
   return typeof value.aborted === 'boolean';
  } catch (_a) {
   return false;
  }
 }
 var supportsAbortController = typeof AbortController === 'function';
 function createAbortController() {
  if (supportsAbortController) {
   return new AbortController();
  }
  return undefined;
 }
 var WritableStream = function () {
  function WritableStream(rawUnderlyingSink, rawStrategy) {
   if (rawUnderlyingSink === void 0) {
    rawUnderlyingSink = {};
   }
   if (rawStrategy === void 0) {
    rawStrategy = {};
   }
   if (rawUnderlyingSink === undefined) {
    rawUnderlyingSink = null;
   } else {
    assertObject(rawUnderlyingSink, 'First parameter');
   }
   var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
   var underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
   InitializeWritableStream(this);
   var type = underlyingSink.type;
   if (type !== undefined) {
    throw new RangeError('Invalid type is specified');
   }
   var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
   var highWaterMark = ExtractHighWaterMark(strategy, 1);
   SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
  }
  Object.defineProperty(WritableStream.prototype, "locked", {
   get: function () {
    if (!IsWritableStream(this)) {
     throw streamBrandCheckException$2('locked');
    }
    return IsWritableStreamLocked(this);
   },
   enumerable: false,
   configurable: true
  });
  WritableStream.prototype.abort = function (reason) {
   if (reason === void 0) {
    reason = undefined;
   }
   if (!IsWritableStream(this)) {
    return promiseRejectedWith(streamBrandCheckException$2('abort'));
   }
   if (IsWritableStreamLocked(this)) {
    return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
   }
   return WritableStreamAbort(this, reason);
  };
  WritableStream.prototype.close = function () {
   if (!IsWritableStream(this)) {
    return promiseRejectedWith(streamBrandCheckException$2('close'));
   }
   if (IsWritableStreamLocked(this)) {
    return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
   }
   if (WritableStreamCloseQueuedOrInFlight(this)) {
    return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
   }
   return WritableStreamClose(this);
  };
  WritableStream.prototype.getWriter = function () {
   if (!IsWritableStream(this)) {
    throw streamBrandCheckException$2('getWriter');
   }
   return AcquireWritableStreamDefaultWriter(this);
  };
  return WritableStream;
 }();
 Object.defineProperties(WritableStream.prototype, {
  abort: { enumerable: true },
  close: { enumerable: true },
  getWriter: { enumerable: true },
  locked: { enumerable: true }
 });
 setFunctionName(WritableStream.prototype.abort, 'abort');
 setFunctionName(WritableStream.prototype.close, 'close');
 setFunctionName(WritableStream.prototype.getWriter, 'getWriter');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
   value: 'WritableStream',
   configurable: true
  });
 }
 function AcquireWritableStreamDefaultWriter(stream) {
  return new WritableStreamDefaultWriter(stream);
 }
 function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
  if (highWaterMark === void 0) {
   highWaterMark = 1;
  }
  if (sizeAlgorithm === void 0) {
   sizeAlgorithm = function () {
    return 1;
   };
  }
  var stream = Object.create(WritableStream.prototype);
  InitializeWritableStream(stream);
  var controller = Object.create(WritableStreamDefaultController.prototype);
  SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
  return stream;
 }
 function InitializeWritableStream(stream) {
  stream._state = 'writable';
  stream._storedError = undefined;
  stream._writer = undefined;
  stream._writableStreamController = undefined;
  stream._writeRequests = new SimpleQueue();
  stream._inFlightWriteRequest = undefined;
  stream._closeRequest = undefined;
  stream._inFlightCloseRequest = undefined;
  stream._pendingAbortRequest = undefined;
  stream._backpressure = false;
 }
 function IsWritableStream(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
   return false;
  }
  return x instanceof WritableStream;
 }
 function IsWritableStreamLocked(stream) {
  if (stream._writer === undefined) {
   return false;
  }
  return true;
 }
 function WritableStreamAbort(stream, reason) {
  var _a;
  if (stream._state === 'closed' || stream._state === 'errored') {
   return promiseResolvedWith(undefined);
  }
  stream._writableStreamController._abortReason = reason;
  (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort(reason);
  var state = stream._state;
  if (state === 'closed' || state === 'errored') {
   return promiseResolvedWith(undefined);
  }
  if (stream._pendingAbortRequest !== undefined) {
   return stream._pendingAbortRequest._promise;
  }
  var wasAlreadyErroring = false;
  if (state === 'erroring') {
   wasAlreadyErroring = true;
   reason = undefined;
  }
  var promise = newPromise(function (resolve, reject) {
   stream._pendingAbortRequest = {
    _promise: undefined,
    _resolve: resolve,
    _reject: reject,
    _reason: reason,
    _wasAlreadyErroring: wasAlreadyErroring
   };
  });
  stream._pendingAbortRequest._promise = promise;
  if (!wasAlreadyErroring) {
   WritableStreamStartErroring(stream, reason);
  }
  return promise;
 }
 function WritableStreamClose(stream) {
  var state = stream._state;
  if (state === 'closed' || state === 'errored') {
   return promiseRejectedWith(new TypeError("The stream (in ".concat(state, " state) is not in the writable state and cannot be closed")));
  }
  var promise = newPromise(function (resolve, reject) {
   var closeRequest = {
    _resolve: resolve,
    _reject: reject
   };
   stream._closeRequest = closeRequest;
  });
  var writer = stream._writer;
  if (writer !== undefined && stream._backpressure && state === 'writable') {
   defaultWriterReadyPromiseResolve(writer);
  }
  WritableStreamDefaultControllerClose(stream._writableStreamController);
  return promise;
 }
 function WritableStreamAddWriteRequest(stream) {
  var promise = newPromise(function (resolve, reject) {
   var writeRequest = {
    _resolve: resolve,
    _reject: reject
   };
   stream._writeRequests.push(writeRequest);
  });
  return promise;
 }
 function WritableStreamDealWithRejection(stream, error) {
  var state = stream._state;
  if (state === 'writable') {
   WritableStreamStartErroring(stream, error);
   return;
  }
  WritableStreamFinishErroring(stream);
 }
 function WritableStreamStartErroring(stream, reason) {
  var controller = stream._writableStreamController;
  stream._state = 'erroring';
  stream._storedError = reason;
  var writer = stream._writer;
  if (writer !== undefined) {
   WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
  }
  if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
   WritableStreamFinishErroring(stream);
  }
 }
 function WritableStreamFinishErroring(stream) {
  stream._state = 'errored';
  stream._writableStreamController[ErrorSteps]();
  var storedError = stream._storedError;
  stream._writeRequests.forEach(function (writeRequest) {
   writeRequest._reject(storedError);
  });
  stream._writeRequests = new SimpleQueue();
  if (stream._pendingAbortRequest === undefined) {
   WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
   return;
  }
  var abortRequest = stream._pendingAbortRequest;
  stream._pendingAbortRequest = undefined;
  if (abortRequest._wasAlreadyErroring) {
   abortRequest._reject(storedError);
   WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
   return;
  }
  var promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
  uponPromise(promise, function () {
   abortRequest._resolve();
   WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
   return null;
  }, function (reason) {
   abortRequest._reject(reason);
   WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
   return null;
  });
 }
 function WritableStreamFinishInFlightWrite(stream) {
  stream._inFlightWriteRequest._resolve(undefined);
  stream._inFlightWriteRequest = undefined;
 }
 function WritableStreamFinishInFlightWriteWithError(stream, error) {
  stream._inFlightWriteRequest._reject(error);
  stream._inFlightWriteRequest = undefined;
  WritableStreamDealWithRejection(stream, error);
 }
 function WritableStreamFinishInFlightClose(stream) {
  stream._inFlightCloseRequest._resolve(undefined);
  stream._inFlightCloseRequest = undefined;
  var state = stream._state;
  if (state === 'erroring') {
   stream._storedError = undefined;
   if (stream._pendingAbortRequest !== undefined) {
    stream._pendingAbortRequest._resolve();
    stream._pendingAbortRequest = undefined;
   }
  }
  stream._state = 'closed';
  var writer = stream._writer;
  if (writer !== undefined) {
   defaultWriterClosedPromiseResolve(writer);
  }
 }
 function WritableStreamFinishInFlightCloseWithError(stream, error) {
  stream._inFlightCloseRequest._reject(error);
  stream._inFlightCloseRequest = undefined;
  if (stream._pendingAbortRequest !== undefined) {
   stream._pendingAbortRequest._reject(error);
   stream._pendingAbortRequest = undefined;
  }
  WritableStreamDealWithRejection(stream, error);
 }
 function WritableStreamCloseQueuedOrInFlight(stream) {
  if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
   return false;
  }
  return true;
 }
 function WritableStreamHasOperationMarkedInFlight(stream) {
  if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
   return false;
  }
  return true;
 }
 function WritableStreamMarkCloseRequestInFlight(stream) {
  stream._inFlightCloseRequest = stream._closeRequest;
  stream._closeRequest = undefined;
 }
 function WritableStreamMarkFirstWriteRequestInFlight(stream) {
  stream._inFlightWriteRequest = stream._writeRequests.shift();
 }
 function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
  if (stream._closeRequest !== undefined) {
   stream._closeRequest._reject(stream._storedError);
   stream._closeRequest = undefined;
  }
  var writer = stream._writer;
  if (writer !== undefined) {
   defaultWriterClosedPromiseReject(writer, stream._storedError);
  }
 }
 function WritableStreamUpdateBackpressure(stream, backpressure) {
  var writer = stream._writer;
  if (writer !== undefined && backpressure !== stream._backpressure) {
   if (backpressure) {
    defaultWriterReadyPromiseReset(writer);
   } else {
    defaultWriterReadyPromiseResolve(writer);
   }
  }
  stream._backpressure = backpressure;
 }
 var WritableStreamDefaultWriter = function () {
  function WritableStreamDefaultWriter(stream) {
   assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
   assertWritableStream(stream, 'First parameter');
   if (IsWritableStreamLocked(stream)) {
    throw new TypeError('This stream has already been locked for exclusive writing by another writer');
   }
   this._ownerWritableStream = stream;
   stream._writer = this;
   var state = stream._state;
   if (state === 'writable') {
    if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
     defaultWriterReadyPromiseInitialize(this);
    } else {
     defaultWriterReadyPromiseInitializeAsResolved(this);
    }
    defaultWriterClosedPromiseInitialize(this);
   } else if (state === 'erroring') {
    defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
    defaultWriterClosedPromiseInitialize(this);
   } else if (state === 'closed') {
    defaultWriterReadyPromiseInitializeAsResolved(this);
    defaultWriterClosedPromiseInitializeAsResolved(this);
   } else {
    var storedError = stream._storedError;
    defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
    defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
   }
  }
  Object.defineProperty(WritableStreamDefaultWriter.prototype, "closed", {
   get: function () {
    if (!IsWritableStreamDefaultWriter(this)) {
     return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
    }
    return this._closedPromise;
   },
   enumerable: false,
   configurable: true
  });
  Object.defineProperty(WritableStreamDefaultWriter.prototype, "desiredSize", {
   get: function () {
    if (!IsWritableStreamDefaultWriter(this)) {
     throw defaultWriterBrandCheckException('desiredSize');
    }
    if (this._ownerWritableStream === undefined) {
     throw defaultWriterLockException('desiredSize');
    }
    return WritableStreamDefaultWriterGetDesiredSize(this);
   },
   enumerable: false,
   configurable: true
  });
  Object.defineProperty(WritableStreamDefaultWriter.prototype, "ready", {
   get: function () {
    if (!IsWritableStreamDefaultWriter(this)) {
     return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
    }
    return this._readyPromise;
   },
   enumerable: false,
   configurable: true
  });
  WritableStreamDefaultWriter.prototype.abort = function (reason) {
   if (reason === void 0) {
    reason = undefined;
   }
   if (!IsWritableStreamDefaultWriter(this)) {
    return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
   }
   if (this._ownerWritableStream === undefined) {
    return promiseRejectedWith(defaultWriterLockException('abort'));
   }
   return WritableStreamDefaultWriterAbort(this, reason);
  };
  WritableStreamDefaultWriter.prototype.close = function () {
   if (!IsWritableStreamDefaultWriter(this)) {
    return promiseRejectedWith(defaultWriterBrandCheckException('close'));
   }
   var stream = this._ownerWritableStream;
   if (stream === undefined) {
    return promiseRejectedWith(defaultWriterLockException('close'));
   }
   if (WritableStreamCloseQueuedOrInFlight(stream)) {
    return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
   }
   return WritableStreamDefaultWriterClose(this);
  };
  WritableStreamDefaultWriter.prototype.releaseLock = function () {
   if (!IsWritableStreamDefaultWriter(this)) {
    throw defaultWriterBrandCheckException('releaseLock');
   }
   var stream = this._ownerWritableStream;
   if (stream === undefined) {
    return;
   }
   WritableStreamDefaultWriterRelease(this);
  };
  WritableStreamDefaultWriter.prototype.write = function (chunk) {
   if (chunk === void 0) {
    chunk = undefined;
   }
   if (!IsWritableStreamDefaultWriter(this)) {
    return promiseRejectedWith(defaultWriterBrandCheckException('write'));
   }
   if (this._ownerWritableStream === undefined) {
    return promiseRejectedWith(defaultWriterLockException('write to'));
   }
   return WritableStreamDefaultWriterWrite(this, chunk);
  };
  return WritableStreamDefaultWriter;
 }();
 Object.defineProperties(WritableStreamDefaultWriter.prototype, {
  abort: { enumerable: true },
  close: { enumerable: true },
  releaseLock: { enumerable: true },
  write: { enumerable: true },
  closed: { enumerable: true },
  desiredSize: { enumerable: true },
  ready: { enumerable: true }
 });
 setFunctionName(WritableStreamDefaultWriter.prototype.abort, 'abort');
 setFunctionName(WritableStreamDefaultWriter.prototype.close, 'close');
 setFunctionName(WritableStreamDefaultWriter.prototype.releaseLock, 'releaseLock');
 setFunctionName(WritableStreamDefaultWriter.prototype.write, 'write');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
   value: 'WritableStreamDefaultWriter',
   configurable: true
  });
 }
 function IsWritableStreamDefaultWriter(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
   return false;
  }
  return x instanceof WritableStreamDefaultWriter;
 }
 function WritableStreamDefaultWriterAbort(writer, reason) {
  var stream = writer._ownerWritableStream;
  return WritableStreamAbort(stream, reason);
 }
 function WritableStreamDefaultWriterClose(writer) {
  var stream = writer._ownerWritableStream;
  return WritableStreamClose(stream);
 }
 function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
  var stream = writer._ownerWritableStream;
  var state = stream._state;
  if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
   return promiseResolvedWith(undefined);
  }
  if (state === 'errored') {
   return promiseRejectedWith(stream._storedError);
  }
  return WritableStreamDefaultWriterClose(writer);
 }
 function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
  if (writer._closedPromiseState === 'pending') {
   defaultWriterClosedPromiseReject(writer, error);
  } else {
   defaultWriterClosedPromiseResetToRejected(writer, error);
  }
 }
 function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
  if (writer._readyPromiseState === 'pending') {
   defaultWriterReadyPromiseReject(writer, error);
  } else {
   defaultWriterReadyPromiseResetToRejected(writer, error);
  }
 }
 function WritableStreamDefaultWriterGetDesiredSize(writer) {
  var stream = writer._ownerWritableStream;
  var state = stream._state;
  if (state === 'errored' || state === 'erroring') {
   return null;
  }
  if (state === 'closed') {
   return 0;
  }
  return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
 }
 function WritableStreamDefaultWriterRelease(writer) {
  var stream = writer._ownerWritableStream;
  var releasedError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
  WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
  WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
  stream._writer = undefined;
  writer._ownerWritableStream = undefined;
 }
 function WritableStreamDefaultWriterWrite(writer, chunk) {
  var stream = writer._ownerWritableStream;
  var controller = stream._writableStreamController;
  var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
  if (stream !== writer._ownerWritableStream) {
   return promiseRejectedWith(defaultWriterLockException('write to'));
  }
  var state = stream._state;
  if (state === 'errored') {
   return promiseRejectedWith(stream._storedError);
  }
  if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
   return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
  }
  if (state === 'erroring') {
   return promiseRejectedWith(stream._storedError);
  }
  var promise = WritableStreamAddWriteRequest(stream);
  WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
  return promise;
 }
 var closeSentinel = {};
 var WritableStreamDefaultController = function () {
  function WritableStreamDefaultController() {
   throw new TypeError('Illegal constructor');
  }
  Object.defineProperty(WritableStreamDefaultController.prototype, "abortReason", {
   get: function () {
    if (!IsWritableStreamDefaultController(this)) {
     throw defaultControllerBrandCheckException$2('abortReason');
    }
    return this._abortReason;
   },
   enumerable: false,
   configurable: true
  });
  Object.defineProperty(WritableStreamDefaultController.prototype, "signal", {
   get: function () {
    if (!IsWritableStreamDefaultController(this)) {
     throw defaultControllerBrandCheckException$2('signal');
    }
    if (this._abortController === undefined) {
     throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
    }
    return this._abortController.signal;
   },
   enumerable: false,
   configurable: true
  });
  WritableStreamDefaultController.prototype.error = function (e) {
   if (e === void 0) {
    e = undefined;
   }
   if (!IsWritableStreamDefaultController(this)) {
    throw defaultControllerBrandCheckException$2('error');
   }
   var state = this._controlledWritableStream._state;
   if (state !== 'writable') {
    return;
   }
   WritableStreamDefaultControllerError(this, e);
  };
  WritableStreamDefaultController.prototype[AbortSteps] = function (reason) {
   var result = this._abortAlgorithm(reason);
   WritableStreamDefaultControllerClearAlgorithms(this);
   return result;
  };
  WritableStreamDefaultController.prototype[ErrorSteps] = function () {
   ResetQueue(this);
  };
  return WritableStreamDefaultController;
 }();
 Object.defineProperties(WritableStreamDefaultController.prototype, {
  abortReason: { enumerable: true },
  signal: { enumerable: true },
  error: { enumerable: true }
 });
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
   value: 'WritableStreamDefaultController',
   configurable: true
  });
 }
 function IsWritableStreamDefaultController(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
   return false;
  }
  return x instanceof WritableStreamDefaultController;
 }
 function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
  controller._controlledWritableStream = stream;
  stream._writableStreamController = controller;
  controller._queue = undefined;
  controller._queueTotalSize = undefined;
  ResetQueue(controller);
  controller._abortReason = undefined;
  controller._abortController = createAbortController();
  controller._started = false;
  controller._strategySizeAlgorithm = sizeAlgorithm;
  controller._strategyHWM = highWaterMark;
  controller._writeAlgorithm = writeAlgorithm;
  controller._closeAlgorithm = closeAlgorithm;
  controller._abortAlgorithm = abortAlgorithm;
  var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
  WritableStreamUpdateBackpressure(stream, backpressure);
  var startResult = startAlgorithm();
  var startPromise = promiseResolvedWith(startResult);
  uponPromise(startPromise, function () {
   controller._started = true;
   WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
   return null;
  }, function (r) {
   controller._started = true;
   WritableStreamDealWithRejection(stream, r);
   return null;
  });
 }
 function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
  var controller = Object.create(WritableStreamDefaultController.prototype);
  var startAlgorithm;
  var writeAlgorithm;
  var closeAlgorithm;
  var abortAlgorithm;
  if (underlyingSink.start !== undefined) {
   startAlgorithm = function () {
    return underlyingSink.start(controller);
   };
  } else {
   startAlgorithm = function () {
    return undefined;
   };
  }
  if (underlyingSink.write !== undefined) {
   writeAlgorithm = function (chunk) {
    return underlyingSink.write(chunk, controller);
   };
  } else {
   writeAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  if (underlyingSink.close !== undefined) {
   closeAlgorithm = function () {
    return underlyingSink.close();
   };
  } else {
   closeAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  if (underlyingSink.abort !== undefined) {
   abortAlgorithm = function (reason) {
    return underlyingSink.abort(reason);
   };
  } else {
   abortAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
 }
 function WritableStreamDefaultControllerClearAlgorithms(controller) {
  controller._writeAlgorithm = undefined;
  controller._closeAlgorithm = undefined;
  controller._abortAlgorithm = undefined;
  controller._strategySizeAlgorithm = undefined;
 }
 function WritableStreamDefaultControllerClose(controller) {
  EnqueueValueWithSize(controller, closeSentinel, 0);
  WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
 }
 function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
  try {
   return controller._strategySizeAlgorithm(chunk);
  } catch (chunkSizeE) {
   WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
   return 1;
  }
 }
 function WritableStreamDefaultControllerGetDesiredSize(controller) {
  return controller._strategyHWM - controller._queueTotalSize;
 }
 function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
  try {
   EnqueueValueWithSize(controller, chunk, chunkSize);
  } catch (enqueueE) {
   WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
   return;
  }
  var stream = controller._controlledWritableStream;
  if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
   var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
   WritableStreamUpdateBackpressure(stream, backpressure);
  }
  WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
 }
 function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
  var stream = controller._controlledWritableStream;
  if (!controller._started) {
   return;
  }
  if (stream._inFlightWriteRequest !== undefined) {
   return;
  }
  var state = stream._state;
  if (state === 'erroring') {
   WritableStreamFinishErroring(stream);
   return;
  }
  if (controller._queue.length === 0) {
   return;
  }
  var value = PeekQueueValue(controller);
  if (value === closeSentinel) {
   WritableStreamDefaultControllerProcessClose(controller);
  } else {
   WritableStreamDefaultControllerProcessWrite(controller, value);
  }
 }
 function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
  if (controller._controlledWritableStream._state === 'writable') {
   WritableStreamDefaultControllerError(controller, error);
  }
 }
 function WritableStreamDefaultControllerProcessClose(controller) {
  var stream = controller._controlledWritableStream;
  WritableStreamMarkCloseRequestInFlight(stream);
  DequeueValue(controller);
  var sinkClosePromise = controller._closeAlgorithm();
  WritableStreamDefaultControllerClearAlgorithms(controller);
  uponPromise(sinkClosePromise, function () {
   WritableStreamFinishInFlightClose(stream);
   return null;
  }, function (reason) {
   WritableStreamFinishInFlightCloseWithError(stream, reason);
   return null;
  });
 }
 function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
  var stream = controller._controlledWritableStream;
  WritableStreamMarkFirstWriteRequestInFlight(stream);
  var sinkWritePromise = controller._writeAlgorithm(chunk);
  uponPromise(sinkWritePromise, function () {
   WritableStreamFinishInFlightWrite(stream);
   var state = stream._state;
   DequeueValue(controller);
   if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
    var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    WritableStreamUpdateBackpressure(stream, backpressure);
   }
   WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
   return null;
  }, function (reason) {
   if (stream._state === 'writable') {
    WritableStreamDefaultControllerClearAlgorithms(controller);
   }
   WritableStreamFinishInFlightWriteWithError(stream, reason);
   return null;
  });
 }
 function WritableStreamDefaultControllerGetBackpressure(controller) {
  var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
  return desiredSize <= 0;
 }
 function WritableStreamDefaultControllerError(controller, error) {
  var stream = controller._controlledWritableStream;
  WritableStreamDefaultControllerClearAlgorithms(controller);
  WritableStreamStartErroring(stream, error);
 }
 function streamBrandCheckException$2(name) {
  return new TypeError("WritableStream.prototype.".concat(name, " can only be used on a WritableStream"));
 }
 function defaultControllerBrandCheckException$2(name) {
  return new TypeError("WritableStreamDefaultController.prototype.".concat(name, " can only be used on a WritableStreamDefaultController"));
 }
 function defaultWriterBrandCheckException(name) {
  return new TypeError("WritableStreamDefaultWriter.prototype.".concat(name, " can only be used on a WritableStreamDefaultWriter"));
 }
 function defaultWriterLockException(name) {
  return new TypeError('Cannot ' + name + ' a stream using a released writer');
 }
 function defaultWriterClosedPromiseInitialize(writer) {
  writer._closedPromise = newPromise(function (resolve, reject) {
   writer._closedPromise_resolve = resolve;
   writer._closedPromise_reject = reject;
   writer._closedPromiseState = 'pending';
  });
 }
 function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
  defaultWriterClosedPromiseInitialize(writer);
  defaultWriterClosedPromiseReject(writer, reason);
 }
 function defaultWriterClosedPromiseInitializeAsResolved(writer) {
  defaultWriterClosedPromiseInitialize(writer);
  defaultWriterClosedPromiseResolve(writer);
 }
 function defaultWriterClosedPromiseReject(writer, reason) {
  if (writer._closedPromise_reject === undefined) {
   return;
  }
  setPromiseIsHandledToTrue(writer._closedPromise);
  writer._closedPromise_reject(reason);
  writer._closedPromise_resolve = undefined;
  writer._closedPromise_reject = undefined;
  writer._closedPromiseState = 'rejected';
 }
 function defaultWriterClosedPromiseResetToRejected(writer, reason) {
  defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
 }
 function defaultWriterClosedPromiseResolve(writer) {
  if (writer._closedPromise_resolve === undefined) {
   return;
  }
  writer._closedPromise_resolve(undefined);
  writer._closedPromise_resolve = undefined;
  writer._closedPromise_reject = undefined;
  writer._closedPromiseState = 'resolved';
 }
 function defaultWriterReadyPromiseInitialize(writer) {
  writer._readyPromise = newPromise(function (resolve, reject) {
   writer._readyPromise_resolve = resolve;
   writer._readyPromise_reject = reject;
  });
  writer._readyPromiseState = 'pending';
 }
 function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
  defaultWriterReadyPromiseInitialize(writer);
  defaultWriterReadyPromiseReject(writer, reason);
 }
 function defaultWriterReadyPromiseInitializeAsResolved(writer) {
  defaultWriterReadyPromiseInitialize(writer);
  defaultWriterReadyPromiseResolve(writer);
 }
 function defaultWriterReadyPromiseReject(writer, reason) {
  if (writer._readyPromise_reject === undefined) {
   return;
  }
  setPromiseIsHandledToTrue(writer._readyPromise);
  writer._readyPromise_reject(reason);
  writer._readyPromise_resolve = undefined;
  writer._readyPromise_reject = undefined;
  writer._readyPromiseState = 'rejected';
 }
 function defaultWriterReadyPromiseReset(writer) {
  defaultWriterReadyPromiseInitialize(writer);
 }
 function defaultWriterReadyPromiseResetToRejected(writer, reason) {
  defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
 }
 function defaultWriterReadyPromiseResolve(writer) {
  if (writer._readyPromise_resolve === undefined) {
   return;
  }
  writer._readyPromise_resolve(undefined);
  writer._readyPromise_resolve = undefined;
  writer._readyPromise_reject = undefined;
  writer._readyPromiseState = 'fulfilled';
 }
 function getGlobals() {
  if (typeof globalThis !== 'undefined') {
   return globalThis;
  } else if (typeof self !== 'undefined') {
   return self;
  } else if (typeof global !== 'undefined') {
   return global;
  }
  return undefined;
 }
 var globals = getGlobals();
 function isDOMExceptionConstructor(ctor) {
  if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
   return false;
  }
  if (ctor.name !== 'DOMException') {
   return false;
  }
  try {
   new ctor();
   return true;
  } catch (_a) {
   return false;
  }
 }
 function getFromGlobal() {
  var ctor = globals === null || globals === void 0 ? void 0 : globals.DOMException;
  return isDOMExceptionConstructor(ctor) ? ctor : undefined;
 }
 function createPolyfill() {
  var ctor = function DOMException(message, name) {
   this.message = message || '';
   this.name = name || 'Error';
   if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
   }
  };
  setFunctionName(ctor, 'DOMException');
  ctor.prototype = Object.create(Error.prototype);
  Object.defineProperty(ctor.prototype, 'constructor', {
   value: ctor,
   writable: true,
   configurable: true
  });
  return ctor;
 }
 var DOMException = getFromGlobal() || createPolyfill();
 function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
  var reader = AcquireReadableStreamDefaultReader(source);
  var writer = AcquireWritableStreamDefaultWriter(dest);
  source._disturbed = true;
  var shuttingDown = false;
  var currentWrite = promiseResolvedWith(undefined);
  return newPromise(function (resolve, reject) {
   var abortAlgorithm;
   if (signal !== undefined) {
    abortAlgorithm = function () {
     var error = signal.reason !== undefined ? signal.reason : new DOMException('Aborted', 'AbortError');
     var actions = [];
     if (!preventAbort) {
      actions.push(function () {
       if (dest._state === 'writable') {
        return WritableStreamAbort(dest, error);
       }
       return promiseResolvedWith(undefined);
      });
     }
     if (!preventCancel) {
      actions.push(function () {
       if (source._state === 'readable') {
        return ReadableStreamCancel(source, error);
       }
       return promiseResolvedWith(undefined);
      });
     }
     shutdownWithAction(function () {
      return Promise.all(actions.map(function (action) {
       return action();
      }));
     }, true, error);
    };
    if (signal.aborted) {
     abortAlgorithm();
     return;
    }
    signal.addEventListener('abort', abortAlgorithm);
   }
   function pipeLoop() {
    return newPromise(function (resolveLoop, rejectLoop) {
     function next(done) {
      if (done) {
       resolveLoop();
      } else {
       PerformPromiseThen(pipeStep(), next, rejectLoop);
      }
     }
     next(false);
    });
   }
   function pipeStep() {
    if (shuttingDown) {
     return promiseResolvedWith(true);
    }
    return PerformPromiseThen(writer._readyPromise, function () {
     return newPromise(function (resolveRead, rejectRead) {
      ReadableStreamDefaultReaderRead(reader, {
       _chunkSteps: function (chunk) {
        currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
        resolveRead(false);
       },
       _closeSteps: function () {
        return resolveRead(true);
       },
       _errorSteps: rejectRead
      });
     });
    });
   }
   isOrBecomesErrored(source, reader._closedPromise, function (storedError) {
    if (!preventAbort) {
     shutdownWithAction(function () {
      return WritableStreamAbort(dest, storedError);
     }, true, storedError);
    } else {
     shutdown(true, storedError);
    }
    return null;
   });
   isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
    if (!preventCancel) {
     shutdownWithAction(function () {
      return ReadableStreamCancel(source, storedError);
     }, true, storedError);
    } else {
     shutdown(true, storedError);
    }
    return null;
   });
   isOrBecomesClosed(source, reader._closedPromise, function () {
    if (!preventClose) {
     shutdownWithAction(function () {
      return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
     });
    } else {
     shutdown();
    }
    return null;
   });
   if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
    var destClosed_1 = new TypeError('the destination writable stream closed before all data could be piped to it');
    if (!preventCancel) {
     shutdownWithAction(function () {
      return ReadableStreamCancel(source, destClosed_1);
     }, true, destClosed_1);
    } else {
     shutdown(true, destClosed_1);
    }
   }
   setPromiseIsHandledToTrue(pipeLoop());
   function waitForWritesToFinish() {
    var oldCurrentWrite = currentWrite;
    return PerformPromiseThen(currentWrite, function () {
     return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined;
    });
   }
   function isOrBecomesErrored(stream, promise, action) {
    if (stream._state === 'errored') {
     action(stream._storedError);
    } else {
     uponRejection(promise, action);
    }
   }
   function isOrBecomesClosed(stream, promise, action) {
    if (stream._state === 'closed') {
     action();
    } else {
     uponFulfillment(promise, action);
    }
   }
   function shutdownWithAction(action, originalIsError, originalError) {
    if (shuttingDown) {
     return;
    }
    shuttingDown = true;
    if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
     uponFulfillment(waitForWritesToFinish(), doTheRest);
    } else {
     doTheRest();
    }
    function doTheRest() {
     uponPromise(action(), function () {
      return finalize(originalIsError, originalError);
     }, function (newError) {
      return finalize(true, newError);
     });
     return null;
    }
   }
   function shutdown(isError, error) {
    if (shuttingDown) {
     return;
    }
    shuttingDown = true;
    if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
     uponFulfillment(waitForWritesToFinish(), function () {
      return finalize(isError, error);
     });
    } else {
     finalize(isError, error);
    }
   }
   function finalize(isError, error) {
    WritableStreamDefaultWriterRelease(writer);
    ReadableStreamReaderGenericRelease(reader);
    if (signal !== undefined) {
     signal.removeEventListener('abort', abortAlgorithm);
    }
    if (isError) {
     reject(error);
    } else {
     resolve(undefined);
    }
    return null;
   }
  });
 }
 var ReadableStreamDefaultController = function () {
  function ReadableStreamDefaultController() {
   throw new TypeError('Illegal constructor');
  }
  Object.defineProperty(ReadableStreamDefaultController.prototype, "desiredSize", {
   get: function () {
    if (!IsReadableStreamDefaultController(this)) {
     throw defaultControllerBrandCheckException$1('desiredSize');
    }
    return ReadableStreamDefaultControllerGetDesiredSize(this);
   },
   enumerable: false,
   configurable: true
  });
  ReadableStreamDefaultController.prototype.close = function () {
   if (!IsReadableStreamDefaultController(this)) {
    throw defaultControllerBrandCheckException$1('close');
   }
   if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
    throw new TypeError('The stream is not in a state that permits close');
   }
   ReadableStreamDefaultControllerClose(this);
  };
  ReadableStreamDefaultController.prototype.enqueue = function (chunk) {
   if (chunk === void 0) {
    chunk = undefined;
   }
   if (!IsReadableStreamDefaultController(this)) {
    throw defaultControllerBrandCheckException$1('enqueue');
   }
   if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
    throw new TypeError('The stream is not in a state that permits enqueue');
   }
   return ReadableStreamDefaultControllerEnqueue(this, chunk);
  };
  ReadableStreamDefaultController.prototype.error = function (e) {
   if (e === void 0) {
    e = undefined;
   }
   if (!IsReadableStreamDefaultController(this)) {
    throw defaultControllerBrandCheckException$1('error');
   }
   ReadableStreamDefaultControllerError(this, e);
  };
  ReadableStreamDefaultController.prototype[CancelSteps] = function (reason) {
   ResetQueue(this);
   var result = this._cancelAlgorithm(reason);
   ReadableStreamDefaultControllerClearAlgorithms(this);
   return result;
  };
  ReadableStreamDefaultController.prototype[PullSteps] = function (readRequest) {
   var stream = this._controlledReadableStream;
   if (this._queue.length > 0) {
    var chunk = DequeueValue(this);
    if (this._closeRequested && this._queue.length === 0) {
     ReadableStreamDefaultControllerClearAlgorithms(this);
     ReadableStreamClose(stream);
    } else {
     ReadableStreamDefaultControllerCallPullIfNeeded(this);
    }
    readRequest._chunkSteps(chunk);
   } else {
    ReadableStreamAddReadRequest(stream, readRequest);
    ReadableStreamDefaultControllerCallPullIfNeeded(this);
   }
  };
  ReadableStreamDefaultController.prototype[ReleaseSteps] = function () {
  };
  return ReadableStreamDefaultController;
 }();
 Object.defineProperties(ReadableStreamDefaultController.prototype, {
  close: { enumerable: true },
  enqueue: { enumerable: true },
  error: { enumerable: true },
  desiredSize: { enumerable: true }
 });
 setFunctionName(ReadableStreamDefaultController.prototype.close, 'close');
 setFunctionName(ReadableStreamDefaultController.prototype.enqueue, 'enqueue');
 setFunctionName(ReadableStreamDefaultController.prototype.error, 'error');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
   value: 'ReadableStreamDefaultController',
   configurable: true
  });
 }
 function IsReadableStreamDefaultController(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
   return false;
  }
  return x instanceof ReadableStreamDefaultController;
 }
 function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
  var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
  if (!shouldPull) {
   return;
  }
  if (controller._pulling) {
   controller._pullAgain = true;
   return;
  }
  controller._pulling = true;
  var pullPromise = controller._pullAlgorithm();
  uponPromise(pullPromise, function () {
   controller._pulling = false;
   if (controller._pullAgain) {
    controller._pullAgain = false;
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
   }
   return null;
  }, function (e) {
   ReadableStreamDefaultControllerError(controller, e);
   return null;
  });
 }
 function ReadableStreamDefaultControllerShouldCallPull(controller) {
  var stream = controller._controlledReadableStream;
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
   return false;
  }
  if (!controller._started) {
   return false;
  }
  if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
   return true;
  }
  var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
  if (desiredSize > 0) {
   return true;
  }
  return false;
 }
 function ReadableStreamDefaultControllerClearAlgorithms(controller) {
  controller._pullAlgorithm = undefined;
  controller._cancelAlgorithm = undefined;
  controller._strategySizeAlgorithm = undefined;
 }
 function ReadableStreamDefaultControllerClose(controller) {
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
   return;
  }
  var stream = controller._controlledReadableStream;
  controller._closeRequested = true;
  if (controller._queue.length === 0) {
   ReadableStreamDefaultControllerClearAlgorithms(controller);
   ReadableStreamClose(stream);
  }
 }
 function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
   return;
  }
  var stream = controller._controlledReadableStream;
  if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
   ReadableStreamFulfillReadRequest(stream, chunk, false);
  } else {
   var chunkSize = void 0;
   try {
    chunkSize = controller._strategySizeAlgorithm(chunk);
   } catch (chunkSizeE) {
    ReadableStreamDefaultControllerError(controller, chunkSizeE);
    throw chunkSizeE;
   }
   try {
    EnqueueValueWithSize(controller, chunk, chunkSize);
   } catch (enqueueE) {
    ReadableStreamDefaultControllerError(controller, enqueueE);
    throw enqueueE;
   }
  }
  ReadableStreamDefaultControllerCallPullIfNeeded(controller);
 }
 function ReadableStreamDefaultControllerError(controller, e) {
  var stream = controller._controlledReadableStream;
  if (stream._state !== 'readable') {
   return;
  }
  ResetQueue(controller);
  ReadableStreamDefaultControllerClearAlgorithms(controller);
  ReadableStreamError(stream, e);
 }
 function ReadableStreamDefaultControllerGetDesiredSize(controller) {
  var state = controller._controlledReadableStream._state;
  if (state === 'errored') {
   return null;
  }
  if (state === 'closed') {
   return 0;
  }
  return controller._strategyHWM - controller._queueTotalSize;
 }
 function ReadableStreamDefaultControllerHasBackpressure(controller) {
  if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
   return false;
  }
  return true;
 }
 function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
  var state = controller._controlledReadableStream._state;
  if (!controller._closeRequested && state === 'readable') {
   return true;
  }
  return false;
 }
 function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
  controller._controlledReadableStream = stream;
  controller._queue = undefined;
  controller._queueTotalSize = undefined;
  ResetQueue(controller);
  controller._started = false;
  controller._closeRequested = false;
  controller._pullAgain = false;
  controller._pulling = false;
  controller._strategySizeAlgorithm = sizeAlgorithm;
  controller._strategyHWM = highWaterMark;
  controller._pullAlgorithm = pullAlgorithm;
  controller._cancelAlgorithm = cancelAlgorithm;
  stream._readableStreamController = controller;
  var startResult = startAlgorithm();
  uponPromise(promiseResolvedWith(startResult), function () {
   controller._started = true;
   ReadableStreamDefaultControllerCallPullIfNeeded(controller);
   return null;
  }, function (r) {
   ReadableStreamDefaultControllerError(controller, r);
   return null;
  });
 }
 function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
  var controller = Object.create(ReadableStreamDefaultController.prototype);
  var startAlgorithm;
  var pullAlgorithm;
  var cancelAlgorithm;
  if (underlyingSource.start !== undefined) {
   startAlgorithm = function () {
    return underlyingSource.start(controller);
   };
  } else {
   startAlgorithm = function () {
    return undefined;
   };
  }
  if (underlyingSource.pull !== undefined) {
   pullAlgorithm = function () {
    return underlyingSource.pull(controller);
   };
  } else {
   pullAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  if (underlyingSource.cancel !== undefined) {
   cancelAlgorithm = function (reason) {
    return underlyingSource.cancel(reason);
   };
  } else {
   cancelAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
 }
 function defaultControllerBrandCheckException$1(name) {
  return new TypeError("ReadableStreamDefaultController.prototype.".concat(name, " can only be used on a ReadableStreamDefaultController"));
 }
 function ReadableStreamTee(stream, cloneForBranch2) {
  if (IsReadableByteStreamController(stream._readableStreamController)) {
   return ReadableByteStreamTee(stream);
  }
  return ReadableStreamDefaultTee(stream);
 }
 function ReadableStreamDefaultTee(stream, cloneForBranch2) {
  var reader = AcquireReadableStreamDefaultReader(stream);
  var reading = false;
  var readAgain = false;
  var canceled1 = false;
  var canceled2 = false;
  var reason1;
  var reason2;
  var branch1;
  var branch2;
  var resolveCancelPromise;
  var cancelPromise = newPromise(function (resolve) {
   resolveCancelPromise = resolve;
  });
  function pullAlgorithm() {
   if (reading) {
    readAgain = true;
    return promiseResolvedWith(undefined);
   }
   reading = true;
   var readRequest = {
    _chunkSteps: function (chunk) {
     _queueMicrotask(function () {
      readAgain = false;
      var chunk1 = chunk;
      var chunk2 = chunk;
      if (!canceled1) {
       ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
      }
      if (!canceled2) {
       ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
      }
      reading = false;
      if (readAgain) {
       pullAlgorithm();
      }
     });
    },
    _closeSteps: function () {
     reading = false;
     if (!canceled1) {
      ReadableStreamDefaultControllerClose(branch1._readableStreamController);
     }
     if (!canceled2) {
      ReadableStreamDefaultControllerClose(branch2._readableStreamController);
     }
     if (!canceled1 || !canceled2) {
      resolveCancelPromise(undefined);
     }
    },
    _errorSteps: function () {
     reading = false;
    }
   };
   ReadableStreamDefaultReaderRead(reader, readRequest);
   return promiseResolvedWith(undefined);
  }
  function cancel1Algorithm(reason) {
   canceled1 = true;
   reason1 = reason;
   if (canceled2) {
    var compositeReason = CreateArrayFromList([
     reason1,
     reason2
    ]);
    var cancelResult = ReadableStreamCancel(stream, compositeReason);
    resolveCancelPromise(cancelResult);
   }
   return cancelPromise;
  }
  function cancel2Algorithm(reason) {
   canceled2 = true;
   reason2 = reason;
   if (canceled1) {
    var compositeReason = CreateArrayFromList([
     reason1,
     reason2
    ]);
    var cancelResult = ReadableStreamCancel(stream, compositeReason);
    resolveCancelPromise(cancelResult);
   }
   return cancelPromise;
  }
  function startAlgorithm() {
  }
  branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
  branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
  uponRejection(reader._closedPromise, function (r) {
   ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
   ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
   if (!canceled1 || !canceled2) {
    resolveCancelPromise(undefined);
   }
   return null;
  });
  return [
   branch1,
   branch2
  ];
 }
 function ReadableByteStreamTee(stream) {
  var reader = AcquireReadableStreamDefaultReader(stream);
  var reading = false;
  var readAgainForBranch1 = false;
  var readAgainForBranch2 = false;
  var canceled1 = false;
  var canceled2 = false;
  var reason1;
  var reason2;
  var branch1;
  var branch2;
  var resolveCancelPromise;
  var cancelPromise = newPromise(function (resolve) {
   resolveCancelPromise = resolve;
  });
  function forwardReaderError(thisReader) {
   uponRejection(thisReader._closedPromise, function (r) {
    if (thisReader !== reader) {
     return null;
    }
    ReadableByteStreamControllerError(branch1._readableStreamController, r);
    ReadableByteStreamControllerError(branch2._readableStreamController, r);
    if (!canceled1 || !canceled2) {
     resolveCancelPromise(undefined);
    }
    return null;
   });
  }
  function pullWithDefaultReader() {
   if (IsReadableStreamBYOBReader(reader)) {
    ReadableStreamReaderGenericRelease(reader);
    reader = AcquireReadableStreamDefaultReader(stream);
    forwardReaderError(reader);
   }
   var readRequest = {
    _chunkSteps: function (chunk) {
     _queueMicrotask(function () {
      readAgainForBranch1 = false;
      readAgainForBranch2 = false;
      var chunk1 = chunk;
      var chunk2 = chunk;
      if (!canceled1 && !canceled2) {
       try {
        chunk2 = CloneAsUint8Array(chunk);
       } catch (cloneE) {
        ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
        ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
        resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
        return;
       }
      }
      if (!canceled1) {
       ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
      }
      if (!canceled2) {
       ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
      }
      reading = false;
      if (readAgainForBranch1) {
       pull1Algorithm();
      } else if (readAgainForBranch2) {
       pull2Algorithm();
      }
     });
    },
    _closeSteps: function () {
     reading = false;
     if (!canceled1) {
      ReadableByteStreamControllerClose(branch1._readableStreamController);
     }
     if (!canceled2) {
      ReadableByteStreamControllerClose(branch2._readableStreamController);
     }
     if (branch1._readableStreamController._pendingPullIntos.length > 0) {
      ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
     }
     if (branch2._readableStreamController._pendingPullIntos.length > 0) {
      ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
     }
     if (!canceled1 || !canceled2) {
      resolveCancelPromise(undefined);
     }
    },
    _errorSteps: function () {
     reading = false;
    }
   };
   ReadableStreamDefaultReaderRead(reader, readRequest);
  }
  function pullWithBYOBReader(view, forBranch2) {
   if (IsReadableStreamDefaultReader(reader)) {
    ReadableStreamReaderGenericRelease(reader);
    reader = AcquireReadableStreamBYOBReader(stream);
    forwardReaderError(reader);
   }
   var byobBranch = forBranch2 ? branch2 : branch1;
   var otherBranch = forBranch2 ? branch1 : branch2;
   var readIntoRequest = {
    _chunkSteps: function (chunk) {
     _queueMicrotask(function () {
      readAgainForBranch1 = false;
      readAgainForBranch2 = false;
      var byobCanceled = forBranch2 ? canceled2 : canceled1;
      var otherCanceled = forBranch2 ? canceled1 : canceled2;
      if (!otherCanceled) {
       var clonedChunk = void 0;
       try {
        clonedChunk = CloneAsUint8Array(chunk);
       } catch (cloneE) {
        ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
        ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
        resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
        return;
       }
       if (!byobCanceled) {
        ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
       }
       ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
      } else if (!byobCanceled) {
       ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
      }
      reading = false;
      if (readAgainForBranch1) {
       pull1Algorithm();
      } else if (readAgainForBranch2) {
       pull2Algorithm();
      }
     });
    },
    _closeSteps: function (chunk) {
     reading = false;
     var byobCanceled = forBranch2 ? canceled2 : canceled1;
     var otherCanceled = forBranch2 ? canceled1 : canceled2;
     if (!byobCanceled) {
      ReadableByteStreamControllerClose(byobBranch._readableStreamController);
     }
     if (!otherCanceled) {
      ReadableByteStreamControllerClose(otherBranch._readableStreamController);
     }
     if (chunk !== undefined) {
      if (!byobCanceled) {
       ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
      }
      if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
       ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
      }
     }
     if (!byobCanceled || !otherCanceled) {
      resolveCancelPromise(undefined);
     }
    },
    _errorSteps: function () {
     reading = false;
    }
   };
   ReadableStreamBYOBReaderRead(reader, view, 1, readIntoRequest);
  }
  function pull1Algorithm() {
   if (reading) {
    readAgainForBranch1 = true;
    return promiseResolvedWith(undefined);
   }
   reading = true;
   var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
   if (byobRequest === null) {
    pullWithDefaultReader();
   } else {
    pullWithBYOBReader(byobRequest._view, false);
   }
   return promiseResolvedWith(undefined);
  }
  function pull2Algorithm() {
   if (reading) {
    readAgainForBranch2 = true;
    return promiseResolvedWith(undefined);
   }
   reading = true;
   var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
   if (byobRequest === null) {
    pullWithDefaultReader();
   } else {
    pullWithBYOBReader(byobRequest._view, true);
   }
   return promiseResolvedWith(undefined);
  }
  function cancel1Algorithm(reason) {
   canceled1 = true;
   reason1 = reason;
   if (canceled2) {
    var compositeReason = CreateArrayFromList([
     reason1,
     reason2
    ]);
    var cancelResult = ReadableStreamCancel(stream, compositeReason);
    resolveCancelPromise(cancelResult);
   }
   return cancelPromise;
  }
  function cancel2Algorithm(reason) {
   canceled2 = true;
   reason2 = reason;
   if (canceled1) {
    var compositeReason = CreateArrayFromList([
     reason1,
     reason2
    ]);
    var cancelResult = ReadableStreamCancel(stream, compositeReason);
    resolveCancelPromise(cancelResult);
   }
   return cancelPromise;
  }
  function startAlgorithm() {
  }
  branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
  branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
  forwardReaderError(reader);
  return [
   branch1,
   branch2
  ];
 }
 function isReadableStreamLike(stream) {
  return typeIsObject(stream) && typeof stream.getReader !== 'undefined';
 }
 function ReadableStreamFrom(source) {
  if (isReadableStreamLike(source)) {
   return ReadableStreamFromDefaultReader(source.getReader());
  }
  return ReadableStreamFromIterable(source);
 }
 function ReadableStreamFromIterable(asyncIterable) {
  var stream;
  var iteratorRecord = GetIterator(asyncIterable, 'async');
  var startAlgorithm = noop;
  function pullAlgorithm() {
   var nextResult;
   try {
    nextResult = IteratorNext(iteratorRecord);
   } catch (e) {
    return promiseRejectedWith(e);
   }
   var nextPromise = promiseResolvedWith(nextResult);
   return transformPromiseWith(nextPromise, function (iterResult) {
    if (!typeIsObject(iterResult)) {
     throw new TypeError('The promise returned by the iterator.next() method must fulfill with an object');
    }
    var done = IteratorComplete(iterResult);
    if (done) {
     ReadableStreamDefaultControllerClose(stream._readableStreamController);
    } else {
     var value = IteratorValue(iterResult);
     ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
    }
   });
  }
  function cancelAlgorithm(reason) {
   var iterator = iteratorRecord.iterator;
   var returnMethod;
   try {
    returnMethod = GetMethod(iterator, 'return');
   } catch (e) {
    return promiseRejectedWith(e);
   }
   if (returnMethod === undefined) {
    return promiseResolvedWith(undefined);
   }
   var returnResult;
   try {
    returnResult = reflectCall(returnMethod, iterator, [reason]);
   } catch (e) {
    return promiseRejectedWith(e);
   }
   var returnPromise = promiseResolvedWith(returnResult);
   return transformPromiseWith(returnPromise, function (iterResult) {
    if (!typeIsObject(iterResult)) {
     throw new TypeError('The promise returned by the iterator.return() method must fulfill with an object');
    }
    return undefined;
   });
  }
  stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
  return stream;
 }
 function ReadableStreamFromDefaultReader(reader) {
  var stream;
  var startAlgorithm = noop;
  function pullAlgorithm() {
   var readPromise;
   try {
    readPromise = reader.read();
   } catch (e) {
    return promiseRejectedWith(e);
   }
   return transformPromiseWith(readPromise, function (readResult) {
    if (!typeIsObject(readResult)) {
     throw new TypeError('The promise returned by the reader.read() method must fulfill with an object');
    }
    if (readResult.done) {
     ReadableStreamDefaultControllerClose(stream._readableStreamController);
    } else {
     var value = readResult.value;
     ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
    }
   });
  }
  function cancelAlgorithm(reason) {
   try {
    return promiseResolvedWith(reader.cancel(reason));
   } catch (e) {
    return promiseRejectedWith(e);
   }
  }
  stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
  return stream;
 }
 function convertUnderlyingDefaultOrByteSource(source, context) {
  assertDictionary(source, context);
  var original = source;
  var autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
  var cancel = original === null || original === void 0 ? void 0 : original.cancel;
  var pull = original === null || original === void 0 ? void 0 : original.pull;
  var start = original === null || original === void 0 ? void 0 : original.start;
  var type = original === null || original === void 0 ? void 0 : original.type;
  return {
   autoAllocateChunkSize: autoAllocateChunkSize === undefined ? undefined : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, "".concat(context, " has member 'autoAllocateChunkSize' that")),
   cancel: cancel === undefined ? undefined : convertUnderlyingSourceCancelCallback(cancel, original, "".concat(context, " has member 'cancel' that")),
   pull: pull === undefined ? undefined : convertUnderlyingSourcePullCallback(pull, original, "".concat(context, " has member 'pull' that")),
   start: start === undefined ? undefined : convertUnderlyingSourceStartCallback(start, original, "".concat(context, " has member 'start' that")),
   type: type === undefined ? undefined : convertReadableStreamType(type, "".concat(context, " has member 'type' that"))
  };
 }
 function convertUnderlyingSourceCancelCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (reason) {
   return promiseCall(fn, original, [reason]);
  };
 }
 function convertUnderlyingSourcePullCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (controller) {
   return promiseCall(fn, original, [controller]);
  };
 }
 function convertUnderlyingSourceStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (controller) {
   return reflectCall(fn, original, [controller]);
  };
 }
 function convertReadableStreamType(type, context) {
  type = "".concat(type);
  if (type !== 'bytes') {
   throw new TypeError("".concat(context, " '").concat(type, "' is not a valid enumeration value for ReadableStreamType"));
  }
  return type;
 }
 function convertIteratorOptions(options, context) {
  assertDictionary(options, context);
  var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
  return { preventCancel: Boolean(preventCancel) };
 }
 function convertPipeOptions(options, context) {
  assertDictionary(options, context);
  var preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
  var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
  var preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
  var signal = options === null || options === void 0 ? void 0 : options.signal;
  if (signal !== undefined) {
   assertAbortSignal(signal, "".concat(context, " has member 'signal' that"));
  }
  return {
   preventAbort: Boolean(preventAbort),
   preventCancel: Boolean(preventCancel),
   preventClose: Boolean(preventClose),
   signal: signal
  };
 }
 function assertAbortSignal(signal, context) {
  if (!isAbortSignal(signal)) {
   throw new TypeError("".concat(context, " is not an AbortSignal."));
  }
 }
 function convertReadableWritablePair(pair, context) {
  assertDictionary(pair, context);
  var readable = pair === null || pair === void 0 ? void 0 : pair.readable;
  assertRequiredField(readable, 'readable', 'ReadableWritablePair');
  assertReadableStream(readable, "".concat(context, " has member 'readable' that"));
  var writable = pair === null || pair === void 0 ? void 0 : pair.writable;
  assertRequiredField(writable, 'writable', 'ReadableWritablePair');
  assertWritableStream(writable, "".concat(context, " has member 'writable' that"));
  return {
   readable: readable,
   writable: writable
  };
 }
 var ReadableStream = function () {
  function ReadableStream(rawUnderlyingSource, rawStrategy) {
   if (rawUnderlyingSource === void 0) {
    rawUnderlyingSource = {};
   }
   if (rawStrategy === void 0) {
    rawStrategy = {};
   }
   if (rawUnderlyingSource === undefined) {
    rawUnderlyingSource = null;
   } else {
    assertObject(rawUnderlyingSource, 'First parameter');
   }
   var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
   var underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
   InitializeReadableStream(this);
   if (underlyingSource.type === 'bytes') {
    if (strategy.size !== undefined) {
     throw new RangeError('The strategy for a byte stream cannot have a size function');
    }
    var highWaterMark = ExtractHighWaterMark(strategy, 0);
    SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
   } else {
    var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
    var highWaterMark = ExtractHighWaterMark(strategy, 1);
    SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
   }
  }
  Object.defineProperty(ReadableStream.prototype, "locked", {
   get: function () {
    if (!IsReadableStream(this)) {
     throw streamBrandCheckException$1('locked');
    }
    return IsReadableStreamLocked(this);
   },
   enumerable: false,
   configurable: true
  });
  ReadableStream.prototype.cancel = function (reason) {
   if (reason === void 0) {
    reason = undefined;
   }
   if (!IsReadableStream(this)) {
    return promiseRejectedWith(streamBrandCheckException$1('cancel'));
   }
   if (IsReadableStreamLocked(this)) {
    return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
   }
   return ReadableStreamCancel(this, reason);
  };
  ReadableStream.prototype.getReader = function (rawOptions) {
   if (rawOptions === void 0) {
    rawOptions = undefined;
   }
   if (!IsReadableStream(this)) {
    throw streamBrandCheckException$1('getReader');
   }
   var options = convertReaderOptions(rawOptions, 'First parameter');
   if (options.mode === undefined) {
    return AcquireReadableStreamDefaultReader(this);
   }
   return AcquireReadableStreamBYOBReader(this);
  };
  ReadableStream.prototype.pipeThrough = function (rawTransform, rawOptions) {
   if (rawOptions === void 0) {
    rawOptions = {};
   }
   if (!IsReadableStream(this)) {
    throw streamBrandCheckException$1('pipeThrough');
   }
   assertRequiredArgument(rawTransform, 1, 'pipeThrough');
   var transform = convertReadableWritablePair(rawTransform, 'First parameter');
   var options = convertPipeOptions(rawOptions, 'Second parameter');
   if (IsReadableStreamLocked(this)) {
    throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
   }
   if (IsWritableStreamLocked(transform.writable)) {
    throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
   }
   var promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
   setPromiseIsHandledToTrue(promise);
   return transform.readable;
  };
  ReadableStream.prototype.pipeTo = function (destination, rawOptions) {
   if (rawOptions === void 0) {
    rawOptions = {};
   }
   if (!IsReadableStream(this)) {
    return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
   }
   if (destination === undefined) {
    return promiseRejectedWith("Parameter 1 is required in 'pipeTo'.");
   }
   if (!IsWritableStream(destination)) {
    return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
   }
   var options;
   try {
    options = convertPipeOptions(rawOptions, 'Second parameter');
   } catch (e) {
    return promiseRejectedWith(e);
   }
   if (IsReadableStreamLocked(this)) {
    return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
   }
   if (IsWritableStreamLocked(destination)) {
    return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
   }
   return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
  };
  ReadableStream.prototype.tee = function () {
   if (!IsReadableStream(this)) {
    throw streamBrandCheckException$1('tee');
   }
   var branches = ReadableStreamTee(this);
   return CreateArrayFromList(branches);
  };
  ReadableStream.prototype.values = function (rawOptions) {
   if (rawOptions === void 0) {
    rawOptions = undefined;
   }
   if (!IsReadableStream(this)) {
    throw streamBrandCheckException$1('values');
   }
   var options = convertIteratorOptions(rawOptions, 'First parameter');
   return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
  };
  ReadableStream.prototype[SymbolAsyncIterator] = function (options) {
   return this.values(options);
  };
  ReadableStream.from = function (asyncIterable) {
   return ReadableStreamFrom(asyncIterable);
  };
  return ReadableStream;
 }();
 Object.defineProperties(ReadableStream, { from: { enumerable: true } });
 Object.defineProperties(ReadableStream.prototype, {
  cancel: { enumerable: true },
  getReader: { enumerable: true },
  pipeThrough: { enumerable: true },
  pipeTo: { enumerable: true },
  tee: { enumerable: true },
  values: { enumerable: true },
  locked: { enumerable: true }
 });
 setFunctionName(ReadableStream.from, 'from');
 setFunctionName(ReadableStream.prototype.cancel, 'cancel');
 setFunctionName(ReadableStream.prototype.getReader, 'getReader');
 setFunctionName(ReadableStream.prototype.pipeThrough, 'pipeThrough');
 setFunctionName(ReadableStream.prototype.pipeTo, 'pipeTo');
 setFunctionName(ReadableStream.prototype.tee, 'tee');
 setFunctionName(ReadableStream.prototype.values, 'values');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
   value: 'ReadableStream',
   configurable: true
  });
 }
 Object.defineProperty(ReadableStream.prototype, SymbolAsyncIterator, {
  value: ReadableStream.prototype.values,
  writable: true,
  configurable: true
 });
 function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
  if (highWaterMark === void 0) {
   highWaterMark = 1;
  }
  if (sizeAlgorithm === void 0) {
   sizeAlgorithm = function () {
    return 1;
   };
  }
  var stream = Object.create(ReadableStream.prototype);
  InitializeReadableStream(stream);
  var controller = Object.create(ReadableStreamDefaultController.prototype);
  SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
  return stream;
 }
 function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
  var stream = Object.create(ReadableStream.prototype);
  InitializeReadableStream(stream);
  var controller = Object.create(ReadableByteStreamController.prototype);
  SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
  return stream;
 }
 function InitializeReadableStream(stream) {
  stream._state = 'readable';
  stream._reader = undefined;
  stream._storedError = undefined;
  stream._disturbed = false;
 }
 function IsReadableStream(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
   return false;
  }
  return x instanceof ReadableStream;
 }
 function IsReadableStreamLocked(stream) {
  if (stream._reader === undefined) {
   return false;
  }
  return true;
 }
 function ReadableStreamCancel(stream, reason) {
  stream._disturbed = true;
  if (stream._state === 'closed') {
   return promiseResolvedWith(undefined);
  }
  if (stream._state === 'errored') {
   return promiseRejectedWith(stream._storedError);
  }
  ReadableStreamClose(stream);
  var reader = stream._reader;
  if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
   var readIntoRequests = reader._readIntoRequests;
   reader._readIntoRequests = new SimpleQueue();
   readIntoRequests.forEach(function (readIntoRequest) {
    readIntoRequest._closeSteps(undefined);
   });
  }
  var sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
  return transformPromiseWith(sourceCancelPromise, noop);
 }
 function ReadableStreamClose(stream) {
  stream._state = 'closed';
  var reader = stream._reader;
  if (reader === undefined) {
   return;
  }
  defaultReaderClosedPromiseResolve(reader);
  if (IsReadableStreamDefaultReader(reader)) {
   var readRequests = reader._readRequests;
   reader._readRequests = new SimpleQueue();
   readRequests.forEach(function (readRequest) {
    readRequest._closeSteps();
   });
  }
 }
 function ReadableStreamError(stream, e) {
  stream._state = 'errored';
  stream._storedError = e;
  var reader = stream._reader;
  if (reader === undefined) {
   return;
  }
  defaultReaderClosedPromiseReject(reader, e);
  if (IsReadableStreamDefaultReader(reader)) {
   ReadableStreamDefaultReaderErrorReadRequests(reader, e);
  } else {
   ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e);
  }
 }
 function streamBrandCheckException$1(name) {
  return new TypeError("ReadableStream.prototype.".concat(name, " can only be used on a ReadableStream"));
 }
 function convertQueuingStrategyInit(init, context) {
  assertDictionary(init, context);
  var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
  assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
  return { highWaterMark: convertUnrestrictedDouble(highWaterMark) };
 }
 var byteLengthSizeFunction = function (chunk) {
  return chunk.byteLength;
 };
 setFunctionName(byteLengthSizeFunction, 'size');
 var ByteLengthQueuingStrategy = function () {
  function ByteLengthQueuingStrategy(options) {
   assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
   options = convertQueuingStrategyInit(options, 'First parameter');
   this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
  }
  Object.defineProperty(ByteLengthQueuingStrategy.prototype, "highWaterMark", {
   get: function () {
    if (!IsByteLengthQueuingStrategy(this)) {
     throw byteLengthBrandCheckException('highWaterMark');
    }
    return this._byteLengthQueuingStrategyHighWaterMark;
   },
   enumerable: false,
   configurable: true
  });
  Object.defineProperty(ByteLengthQueuingStrategy.prototype, "size", {
   get: function () {
    if (!IsByteLengthQueuingStrategy(this)) {
     throw byteLengthBrandCheckException('size');
    }
    return byteLengthSizeFunction;
   },
   enumerable: false,
   configurable: true
  });
  return ByteLengthQueuingStrategy;
 }();
 Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
  highWaterMark: { enumerable: true },
  size: { enumerable: true }
 });
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
   value: 'ByteLengthQueuingStrategy',
   configurable: true
  });
 }
 function byteLengthBrandCheckException(name) {
  return new TypeError("ByteLengthQueuingStrategy.prototype.".concat(name, " can only be used on a ByteLengthQueuingStrategy"));
 }
 function IsByteLengthQueuingStrategy(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
   return false;
  }
  return x instanceof ByteLengthQueuingStrategy;
 }
 var countSizeFunction = function () {
  return 1;
 };
 setFunctionName(countSizeFunction, 'size');
 var CountQueuingStrategy = function () {
  function CountQueuingStrategy(options) {
   assertRequiredArgument(options, 1, 'CountQueuingStrategy');
   options = convertQueuingStrategyInit(options, 'First parameter');
   this._countQueuingStrategyHighWaterMark = options.highWaterMark;
  }
  Object.defineProperty(CountQueuingStrategy.prototype, "highWaterMark", {
   get: function () {
    if (!IsCountQueuingStrategy(this)) {
     throw countBrandCheckException('highWaterMark');
    }
    return this._countQueuingStrategyHighWaterMark;
   },
   enumerable: false,
   configurable: true
  });
  Object.defineProperty(CountQueuingStrategy.prototype, "size", {
   get: function () {
    if (!IsCountQueuingStrategy(this)) {
     throw countBrandCheckException('size');
    }
    return countSizeFunction;
   },
   enumerable: false,
   configurable: true
  });
  return CountQueuingStrategy;
 }();
 Object.defineProperties(CountQueuingStrategy.prototype, {
  highWaterMark: { enumerable: true },
  size: { enumerable: true }
 });
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
   value: 'CountQueuingStrategy',
   configurable: true
  });
 }
 function countBrandCheckException(name) {
  return new TypeError("CountQueuingStrategy.prototype.".concat(name, " can only be used on a CountQueuingStrategy"));
 }
 function IsCountQueuingStrategy(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
   return false;
  }
  return x instanceof CountQueuingStrategy;
 }
 function convertTransformer(original, context) {
  assertDictionary(original, context);
  var cancel = original === null || original === void 0 ? void 0 : original.cancel;
  var flush = original === null || original === void 0 ? void 0 : original.flush;
  var readableType = original === null || original === void 0 ? void 0 : original.readableType;
  var start = original === null || original === void 0 ? void 0 : original.start;
  var transform = original === null || original === void 0 ? void 0 : original.transform;
  var writableType = original === null || original === void 0 ? void 0 : original.writableType;
  return {
   cancel: cancel === undefined ? undefined : convertTransformerCancelCallback(cancel, original, "".concat(context, " has member 'cancel' that")),
   flush: flush === undefined ? undefined : convertTransformerFlushCallback(flush, original, "".concat(context, " has member 'flush' that")),
   readableType: readableType,
   start: start === undefined ? undefined : convertTransformerStartCallback(start, original, "".concat(context, " has member 'start' that")),
   transform: transform === undefined ? undefined : convertTransformerTransformCallback(transform, original, "".concat(context, " has member 'transform' that")),
   writableType: writableType
  };
 }
 function convertTransformerFlushCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (controller) {
   return promiseCall(fn, original, [controller]);
  };
 }
 function convertTransformerStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (controller) {
   return reflectCall(fn, original, [controller]);
  };
 }
 function convertTransformerTransformCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (chunk, controller) {
   return promiseCall(fn, original, [
    chunk,
    controller
   ]);
  };
 }
 function convertTransformerCancelCallback(fn, original, context) {
  assertFunction(fn, context);
  return function (reason) {
   return promiseCall(fn, original, [reason]);
  };
 }
 var TransformStream = function () {
  function TransformStream(rawTransformer, rawWritableStrategy, rawReadableStrategy) {
   if (rawTransformer === void 0) {
    rawTransformer = {};
   }
   if (rawWritableStrategy === void 0) {
    rawWritableStrategy = {};
   }
   if (rawReadableStrategy === void 0) {
    rawReadableStrategy = {};
   }
   if (rawTransformer === undefined) {
    rawTransformer = null;
   }
   var writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
   var readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
   var transformer = convertTransformer(rawTransformer, 'First parameter');
   if (transformer.readableType !== undefined) {
    throw new RangeError('Invalid readableType specified');
   }
   if (transformer.writableType !== undefined) {
    throw new RangeError('Invalid writableType specified');
   }
   var readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
   var readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
   var writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
   var writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
   var startPromise_resolve;
   var startPromise = newPromise(function (resolve) {
    startPromise_resolve = resolve;
   });
   InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
   SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
   if (transformer.start !== undefined) {
    startPromise_resolve(transformer.start(this._transformStreamController));
   } else {
    startPromise_resolve(undefined);
   }
  }
  Object.defineProperty(TransformStream.prototype, "readable", {
   get: function () {
    if (!IsTransformStream(this)) {
     throw streamBrandCheckException('readable');
    }
    return this._readable;
   },
   enumerable: false,
   configurable: true
  });
  Object.defineProperty(TransformStream.prototype, "writable", {
   get: function () {
    if (!IsTransformStream(this)) {
     throw streamBrandCheckException('writable');
    }
    return this._writable;
   },
   enumerable: false,
   configurable: true
  });
  return TransformStream;
 }();
 Object.defineProperties(TransformStream.prototype, {
  readable: { enumerable: true },
  writable: { enumerable: true }
 });
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
   value: 'TransformStream',
   configurable: true
  });
 }
 function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
  function startAlgorithm() {
   return startPromise;
  }
  function writeAlgorithm(chunk) {
   return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
  }
  function abortAlgorithm(reason) {
   return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
  }
  function closeAlgorithm() {
   return TransformStreamDefaultSinkCloseAlgorithm(stream);
  }
  stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
  function pullAlgorithm() {
   return TransformStreamDefaultSourcePullAlgorithm(stream);
  }
  function cancelAlgorithm(reason) {
   return TransformStreamDefaultSourceCancelAlgorithm(stream, reason);
  }
  stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
  stream._backpressure = undefined;
  stream._backpressureChangePromise = undefined;
  stream._backpressureChangePromise_resolve = undefined;
  TransformStreamSetBackpressure(stream, true);
  stream._transformStreamController = undefined;
 }
 function IsTransformStream(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
   return false;
  }
  return x instanceof TransformStream;
 }
 function TransformStreamError(stream, e) {
  ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
  TransformStreamErrorWritableAndUnblockWrite(stream, e);
 }
 function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
  TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
  WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
  TransformStreamUnblockWrite(stream);
 }
 function TransformStreamUnblockWrite(stream) {
  if (stream._backpressure) {
   TransformStreamSetBackpressure(stream, false);
  }
 }
 function TransformStreamSetBackpressure(stream, backpressure) {
  if (stream._backpressureChangePromise !== undefined) {
   stream._backpressureChangePromise_resolve();
  }
  stream._backpressureChangePromise = newPromise(function (resolve) {
   stream._backpressureChangePromise_resolve = resolve;
  });
  stream._backpressure = backpressure;
 }
 var TransformStreamDefaultController = function () {
  function TransformStreamDefaultController() {
   throw new TypeError('Illegal constructor');
  }
  Object.defineProperty(TransformStreamDefaultController.prototype, "desiredSize", {
   get: function () {
    if (!IsTransformStreamDefaultController(this)) {
     throw defaultControllerBrandCheckException('desiredSize');
    }
    var readableController = this._controlledTransformStream._readable._readableStreamController;
    return ReadableStreamDefaultControllerGetDesiredSize(readableController);
   },
   enumerable: false,
   configurable: true
  });
  TransformStreamDefaultController.prototype.enqueue = function (chunk) {
   if (chunk === void 0) {
    chunk = undefined;
   }
   if (!IsTransformStreamDefaultController(this)) {
    throw defaultControllerBrandCheckException('enqueue');
   }
   TransformStreamDefaultControllerEnqueue(this, chunk);
  };
  TransformStreamDefaultController.prototype.error = function (reason) {
   if (reason === void 0) {
    reason = undefined;
   }
   if (!IsTransformStreamDefaultController(this)) {
    throw defaultControllerBrandCheckException('error');
   }
   TransformStreamDefaultControllerError(this, reason);
  };
  TransformStreamDefaultController.prototype.terminate = function () {
   if (!IsTransformStreamDefaultController(this)) {
    throw defaultControllerBrandCheckException('terminate');
   }
   TransformStreamDefaultControllerTerminate(this);
  };
  return TransformStreamDefaultController;
 }();
 Object.defineProperties(TransformStreamDefaultController.prototype, {
  enqueue: { enumerable: true },
  error: { enumerable: true },
  terminate: { enumerable: true },
  desiredSize: { enumerable: true }
 });
 setFunctionName(TransformStreamDefaultController.prototype.enqueue, 'enqueue');
 setFunctionName(TransformStreamDefaultController.prototype.error, 'error');
 setFunctionName(TransformStreamDefaultController.prototype.terminate, 'terminate');
 if (typeof SymbolPolyfill.toStringTag === 'symbol') {
  Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
   value: 'TransformStreamDefaultController',
   configurable: true
  });
 }
 function IsTransformStreamDefaultController(x) {
  if (!typeIsObject(x)) {
   return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
   return false;
  }
  return x instanceof TransformStreamDefaultController;
 }
 function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm) {
  controller._controlledTransformStream = stream;
  stream._transformStreamController = controller;
  controller._transformAlgorithm = transformAlgorithm;
  controller._flushAlgorithm = flushAlgorithm;
  controller._cancelAlgorithm = cancelAlgorithm;
  controller._finishPromise = undefined;
  controller._finishPromise_resolve = undefined;
  controller._finishPromise_reject = undefined;
 }
 function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
  var controller = Object.create(TransformStreamDefaultController.prototype);
  var transformAlgorithm;
  var flushAlgorithm;
  var cancelAlgorithm;
  if (transformer.transform !== undefined) {
   transformAlgorithm = function (chunk) {
    return transformer.transform(chunk, controller);
   };
  } else {
   transformAlgorithm = function (chunk) {
    try {
     TransformStreamDefaultControllerEnqueue(controller, chunk);
     return promiseResolvedWith(undefined);
    } catch (transformResultE) {
     return promiseRejectedWith(transformResultE);
    }
   };
  }
  if (transformer.flush !== undefined) {
   flushAlgorithm = function () {
    return transformer.flush(controller);
   };
  } else {
   flushAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  if (transformer.cancel !== undefined) {
   cancelAlgorithm = function (reason) {
    return transformer.cancel(reason);
   };
  } else {
   cancelAlgorithm = function () {
    return promiseResolvedWith(undefined);
   };
  }
  SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm);
 }
 function TransformStreamDefaultControllerClearAlgorithms(controller) {
  controller._transformAlgorithm = undefined;
  controller._flushAlgorithm = undefined;
  controller._cancelAlgorithm = undefined;
 }
 function TransformStreamDefaultControllerEnqueue(controller, chunk) {
  var stream = controller._controlledTransformStream;
  var readableController = stream._readable._readableStreamController;
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
   throw new TypeError('Readable side is not in a state that permits enqueue');
  }
  try {
   ReadableStreamDefaultControllerEnqueue(readableController, chunk);
  } catch (e) {
   TransformStreamErrorWritableAndUnblockWrite(stream, e);
   throw stream._readable._storedError;
  }
  var backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
  if (backpressure !== stream._backpressure) {
   TransformStreamSetBackpressure(stream, true);
  }
 }
 function TransformStreamDefaultControllerError(controller, e) {
  TransformStreamError(controller._controlledTransformStream, e);
 }
 function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
  var transformPromise = controller._transformAlgorithm(chunk);
  return transformPromiseWith(transformPromise, undefined, function (r) {
   TransformStreamError(controller._controlledTransformStream, r);
   throw r;
  });
 }
 function TransformStreamDefaultControllerTerminate(controller) {
  var stream = controller._controlledTransformStream;
  var readableController = stream._readable._readableStreamController;
  ReadableStreamDefaultControllerClose(readableController);
  var error = new TypeError('TransformStream terminated');
  TransformStreamErrorWritableAndUnblockWrite(stream, error);
 }
 function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
  var controller = stream._transformStreamController;
  if (stream._backpressure) {
   var backpressureChangePromise = stream._backpressureChangePromise;
   return transformPromiseWith(backpressureChangePromise, function () {
    var writable = stream._writable;
    var state = writable._state;
    if (state === 'erroring') {
     throw writable._storedError;
    }
    return TransformStreamDefaultControllerPerformTransform(controller, chunk);
   });
  }
  return TransformStreamDefaultControllerPerformTransform(controller, chunk);
 }
 function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
  var controller = stream._transformStreamController;
  if (controller._finishPromise !== undefined) {
   return controller._finishPromise;
  }
  var readable = stream._readable;
  controller._finishPromise = newPromise(function (resolve, reject) {
   controller._finishPromise_resolve = resolve;
   controller._finishPromise_reject = reject;
  });
  var cancelPromise = controller._cancelAlgorithm(reason);
  TransformStreamDefaultControllerClearAlgorithms(controller);
  uponPromise(cancelPromise, function () {
   if (readable._state === 'errored') {
    defaultControllerFinishPromiseReject(controller, readable._storedError);
   } else {
    ReadableStreamDefaultControllerError(readable._readableStreamController, reason);
    defaultControllerFinishPromiseResolve(controller);
   }
   return null;
  }, function (r) {
   ReadableStreamDefaultControllerError(readable._readableStreamController, r);
   defaultControllerFinishPromiseReject(controller, r);
   return null;
  });
  return controller._finishPromise;
 }
 function TransformStreamDefaultSinkCloseAlgorithm(stream) {
  var controller = stream._transformStreamController;
  if (controller._finishPromise !== undefined) {
   return controller._finishPromise;
  }
  var readable = stream._readable;
  controller._finishPromise = newPromise(function (resolve, reject) {
   controller._finishPromise_resolve = resolve;
   controller._finishPromise_reject = reject;
  });
  var flushPromise = controller._flushAlgorithm();
  TransformStreamDefaultControllerClearAlgorithms(controller);
  uponPromise(flushPromise, function () {
   if (readable._state === 'errored') {
    defaultControllerFinishPromiseReject(controller, readable._storedError);
   } else {
    ReadableStreamDefaultControllerClose(readable._readableStreamController);
    defaultControllerFinishPromiseResolve(controller);
   }
   return null;
  }, function (r) {
   ReadableStreamDefaultControllerError(readable._readableStreamController, r);
   defaultControllerFinishPromiseReject(controller, r);
   return null;
  });
  return controller._finishPromise;
 }
 function TransformStreamDefaultSourcePullAlgorithm(stream) {
  TransformStreamSetBackpressure(stream, false);
  return stream._backpressureChangePromise;
 }
 function TransformStreamDefaultSourceCancelAlgorithm(stream, reason) {
  var controller = stream._transformStreamController;
  if (controller._finishPromise !== undefined) {
   return controller._finishPromise;
  }
  var writable = stream._writable;
  controller._finishPromise = newPromise(function (resolve, reject) {
   controller._finishPromise_resolve = resolve;
   controller._finishPromise_reject = reject;
  });
  var cancelPromise = controller._cancelAlgorithm(reason);
  TransformStreamDefaultControllerClearAlgorithms(controller);
  uponPromise(cancelPromise, function () {
   if (writable._state === 'errored') {
    defaultControllerFinishPromiseReject(controller, writable._storedError);
   } else {
    WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, reason);
    TransformStreamUnblockWrite(stream);
    defaultControllerFinishPromiseResolve(controller);
   }
   return null;
  }, function (r) {
   WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, r);
   TransformStreamUnblockWrite(stream);
   defaultControllerFinishPromiseReject(controller, r);
   return null;
  });
  return controller._finishPromise;
 }
 function defaultControllerBrandCheckException(name) {
  return new TypeError("TransformStreamDefaultController.prototype.".concat(name, " can only be used on a TransformStreamDefaultController"));
 }
 function defaultControllerFinishPromiseResolve(controller) {
  if (controller._finishPromise_resolve === undefined) {
   return;
  }
  controller._finishPromise_resolve();
  controller._finishPromise_resolve = undefined;
  controller._finishPromise_reject = undefined;
 }
 function defaultControllerFinishPromiseReject(controller, reason) {
  if (controller._finishPromise_reject === undefined) {
   return;
  }
  setPromiseIsHandledToTrue(controller._finishPromise);
  controller._finishPromise_reject(reason);
  controller._finishPromise_resolve = undefined;
  controller._finishPromise_reject = undefined;
 }
 function streamBrandCheckException(name) {
  return new TypeError("TransformStream.prototype.".concat(name, " can only be used on a TransformStream"));
 }
 exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
 exports.CountQueuingStrategy = CountQueuingStrategy;
 exports.ReadableByteStreamController = ReadableByteStreamController;
 exports.ReadableStream = ReadableStream;
 exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
 exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
 exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
 exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
 exports.TransformStream = TransformStream;
 exports.TransformStreamDefaultController = TransformStreamDefaultController;
 exports.WritableStream = WritableStream;
 exports.WritableStreamDefaultController = WritableStreamDefaultController;
 exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
}));

/***/ }),
/* 174 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(175);
var entryUnbind = __w_pdfjs_require__(179);
module.exports = entryUnbind('String', 'padStart');

/***/ }),
/* 175 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var $padStart = (__w_pdfjs_require__(176).start);
var WEBKIT_BUG = __w_pdfjs_require__(178);
$({
 target: 'String',
 proto: true,
 forced: WEBKIT_BUG
}, {
 padStart: function padStart(maxLength) {
  return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
 }
});

/***/ }),
/* 176 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var uncurryThis = __w_pdfjs_require__(18);
var toLength = __w_pdfjs_require__(68);
var toString = __w_pdfjs_require__(111);
var $repeat = __w_pdfjs_require__(177);
var requireObjectCoercible = __w_pdfjs_require__(20);
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;
var createMethod = function (IS_END) {
 return function ($this, maxLength, fillString) {
  var S = toString(requireObjectCoercible($this));
  var intMaxLength = toLength(maxLength);
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : toString(fillString);
  var fillLen, stringFiller;
  if (intMaxLength <= stringLength || fillStr === '')
   return S;
  fillLen = intMaxLength - stringLength;
  stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen)
   stringFiller = stringSlice(stringFiller, 0, fillLen);
  return IS_END ? S + stringFiller : stringFiller + S;
 };
};
module.exports = {
 start: createMethod(false),
 end: createMethod(true)
};

/***/ }),
/* 177 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toIntegerOrInfinity = __w_pdfjs_require__(65);
var toString = __w_pdfjs_require__(111);
var requireObjectCoercible = __w_pdfjs_require__(20);
var $RangeError = RangeError;
module.exports = function repeat(count) {
 var str = toString(requireObjectCoercible(this));
 var result = '';
 var n = toIntegerOrInfinity(count);
 if (n < 0 || n === Infinity)
  throw new $RangeError('Wrong number of repetitions');
 for (; n > 0; (n >>>= 1) && (str += str))
  if (n & 1)
   result += str;
 return result;
};

/***/ }),
/* 178 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var userAgent = __w_pdfjs_require__(32);
module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

/***/ }),
/* 179 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var global = __w_pdfjs_require__(8);
var uncurryThis = __w_pdfjs_require__(18);
module.exports = function (CONSTRUCTOR, METHOD) {
 return uncurryThis(global[CONSTRUCTOR].prototype[METHOD]);
};

/***/ }),
/* 180 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(181);
var entryUnbind = __w_pdfjs_require__(179);
module.exports = entryUnbind('String', 'padEnd');

/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var $padEnd = (__w_pdfjs_require__(176).end);
var WEBKIT_BUG = __w_pdfjs_require__(178);
$({
 target: 'String',
 proto: true,
 forced: WEBKIT_BUG
}, {
 padEnd: function padEnd(maxLength) {
  return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
 }
});

/***/ }),
/* 182 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(183);
var path = __w_pdfjs_require__(102);
module.exports = path.Object.values;

/***/ }),
/* 183 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var $values = (__w_pdfjs_require__(184).values);
$({
 target: 'Object',
 stat: true
}, {
 values: function values(O) {
  return $values(O);
 }
});

/***/ }),
/* 184 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var fails = __w_pdfjs_require__(11);
var uncurryThis = __w_pdfjs_require__(18);
var objectGetPrototypeOf = __w_pdfjs_require__(83);
var objectKeys = __w_pdfjs_require__(77);
var toIndexedObject = __w_pdfjs_require__(16);
var $propertyIsEnumerable = (__w_pdfjs_require__(14).f);
var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);
var IE_BUG = DESCRIPTORS && fails(function () {
 var O = Object.create(null);
 O[2] = 2;
 return !propertyIsEnumerable(O, 2);
});
var createMethod = function (TO_ENTRIES) {
 return function (it) {
  var O = toIndexedObject(it);
  var keys = objectKeys(O);
  var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
  var length = keys.length;
  var i = 0;
  var result = [];
  var key;
  while (length > i) {
   key = keys[i++];
   if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
    push(result, TO_ENTRIES ? [
     key,
     O[key]
    ] : O[key]);
   }
  }
  return result;
 };
};
module.exports = {
 entries: createMethod(true),
 values: createMethod(false)
};

/***/ }),
/* 185 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

__w_pdfjs_require__(186);
var path = __w_pdfjs_require__(102);
module.exports = path.Object.entries;

/***/ }),
/* 186 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(7);
var $entries = (__w_pdfjs_require__(184).entries);
$({
 target: 'Object',
 stat: true
}, {
 entries: function entries(O) {
  return $entries(O);
 }
});

/***/ }),
/* 187 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.build = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
exports.getDocument = getDocument;
exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
exports.version = void 0;
var _util = __w_pdfjs_require__(2);
var _display_utils = __w_pdfjs_require__(1);
var _font_loader = __w_pdfjs_require__(188);
var _node_utils = __w_pdfjs_require__(189);
var _annotation_storage = __w_pdfjs_require__(190);
var _api_compatibility = __w_pdfjs_require__(191);
var _canvas = __w_pdfjs_require__(192);
var _worker_options = __w_pdfjs_require__(194);
var _is_node = __w_pdfjs_require__(4);
var _message_handler = __w_pdfjs_require__(195);
var _metadata = __w_pdfjs_require__(196);
var _optional_content_config = __w_pdfjs_require__(198);
var _transport_stream = __w_pdfjs_require__(199);
var _webgl = __w_pdfjs_require__(200);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var RENDERING_CANCELLED_TIMEOUT = 100;
var DefaultCanvasFactory = exports.DefaultCanvasFactory = _is_node.isNodeJS ? _node_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
var DefaultCMapReaderFactory = exports.DefaultCMapReaderFactory = _is_node.isNodeJS ? _node_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
var createPDFNetworkStream;
function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
  createPDFNetworkStream = pdfNetworkStreamFactory;
}
function getDocument(src) {
  var task = new PDFDocumentLoadingTask();
  var source;
  if (typeof src === "string") {
    source = {
      url: src
    };
  } else if ((0, _util.isArrayBuffer)(src)) {
    source = {
      data: src
    };
  } else if (src instanceof PDFDataRangeTransport) {
    source = {
      range: src
    };
  } else {
    if (_typeof(src) !== "object") {
      throw new Error("Invalid parameter in getDocument, " + "need either Uint8Array, string or a parameter object");
    }
    if (!src.url && !src.data && !src.range) {
      throw new Error("Invalid parameter object: need either .data, .range or .url");
    }
    source = src;
  }
  var params = Object.create(null);
  var rangeTransport = null,
    worker = null;
  for (var key in source) {
    if (key === "url" && typeof window !== "undefined") {
      params[key] = new URL(source[key], window.location).href;
      continue;
    } else if (key === "range") {
      rangeTransport = source[key];
      continue;
    } else if (key === "worker") {
      worker = source[key];
      continue;
    } else if (key === "data" && !(source[key] instanceof Uint8Array)) {
      var pdfBytes = source[key];
      if (typeof pdfBytes === "string") {
        params[key] = (0, _util.stringToBytes)(pdfBytes);
      } else if (_typeof(pdfBytes) === "object" && pdfBytes !== null && !isNaN(pdfBytes.length)) {
        params[key] = new Uint8Array(pdfBytes);
      } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
        params[key] = new Uint8Array(pdfBytes);
      } else {
        throw new Error("Invalid PDF binary data: either typed array, " + "string or array-like object is expected in the " + "data property.");
      }
      continue;
    }
    params[key] = source[key];
  }
  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
  params.CMapReaderFactory = params.CMapReaderFactory || DefaultCMapReaderFactory;
  params.ignoreErrors = params.stopAtErrors !== true;
  params.fontExtraProperties = params.fontExtraProperties === true;
  params.pdfBug = params.pdfBug === true;
  if (!Number.isInteger(params.maxImageSize)) {
    params.maxImageSize = -1;
  }
  if (typeof params.isEvalSupported !== "boolean") {
    params.isEvalSupported = true;
  }
  if (typeof params.disableFontFace !== "boolean") {
    params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
  }
  if (typeof params.ownerDocument === "undefined") {
    params.ownerDocument = globalThis.document;
  }
  if (typeof params.disableRange !== "boolean") {
    params.disableRange = false;
  }
  if (typeof params.disableStream !== "boolean") {
    params.disableStream = false;
  }
  if (typeof params.disableAutoFetch !== "boolean") {
    params.disableAutoFetch = false;
  }
  (0, _util.setVerbosityLevel)(params.verbosity);
  if (!worker) {
    var workerParams = {
      verbosity: params.verbosity,
      port: _worker_options.GlobalWorkerOptions.workerPort
    };
    worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
    task._worker = worker;
  }
  var docId = task.docId;
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error("Loading aborted");
    }
    var workerIdPromise = _fetchDocument(worker, params, rangeTransport, docId);
    var networkStreamPromise = new Promise(function (resolve) {
      var networkStream;
      if (rangeTransport) {
        networkStream = new _transport_stream.PDFDataTransportStream({
          length: params.length,
          initialData: params.initialData,
          progressiveDone: params.progressiveDone,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        }, rangeTransport);
      } else if (!params.data) {
        networkStream = createPDFNetworkStream({
          url: params.url,
          length: params.length,
          httpHeaders: params.httpHeaders,
          withCredentials: params.withCredentials,
          rangeChunkSize: params.rangeChunkSize,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        });
      }
      resolve(networkStream);
    });
    return Promise.all([workerIdPromise, networkStreamPromise]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        workerId = _ref2[0],
        networkStream = _ref2[1];
      if (task.destroyed) {
        throw new Error("Loading aborted");
      }
      var messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
      messageHandler.postMessageTransfers = worker.postMessageTransfers;
      var transport = new WorkerTransport(messageHandler, task, networkStream, params);
      task._transport = transport;
      messageHandler.send("Ready", null);
    });
  })["catch"](task._capability.reject);
  return task;
}
function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
  if (worker.destroyed) {
    return Promise.reject(new Error("Worker was destroyed"));
  }
  if (pdfDataRangeTransport) {
    source.length = pdfDataRangeTransport.length;
    source.initialData = pdfDataRangeTransport.initialData;
    source.progressiveDone = pdfDataRangeTransport.progressiveDone;
  }
  return worker.messageHandler.sendWithPromise("GetDocRequest", {
    docId: docId,
    apiVersion: '2.7.39',
    source: {
      data: source.data,
      url: source.url,
      password: source.password,
      disableAutoFetch: source.disableAutoFetch,
      rangeChunkSize: source.rangeChunkSize,
      length: source.length
    },
    maxImageSize: source.maxImageSize,
    disableFontFace: source.disableFontFace,
    postMessageTransfers: worker.postMessageTransfers,
    docBaseUrl: source.docBaseUrl,
    ignoreErrors: source.ignoreErrors,
    isEvalSupported: source.isEvalSupported,
    fontExtraProperties: source.fontExtraProperties
  }).then(function (workerId) {
    if (worker.destroyed) {
      throw new Error("Worker was destroyed");
    }
    return workerId;
  });
}
var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
  var nextDocumentId = 0;
  var PDFDocumentLoadingTask = /*#__PURE__*/function () {
    function PDFDocumentLoadingTask() {
      _classCallCheck(this, PDFDocumentLoadingTask);
      this._capability = (0, _util.createPromiseCapability)();
      this._transport = null;
      this._worker = null;
      this.docId = "d" + nextDocumentId++;
      this.destroyed = false;
      this.onPassword = null;
      this.onProgress = null;
      this.onUnsupportedFeature = null;
    }
    return _createClass(PDFDocumentLoadingTask, [{
      key: "promise",
      get: function get() {
        return this._capability.promise;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this = this;
        this.destroyed = true;
        var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
        return transportDestroyed.then(function () {
          _this._transport = null;
          if (_this._worker) {
            _this._worker.destroy();
            _this._worker = null;
          }
        });
      }
    }]);
  }();
  return PDFDocumentLoadingTask;
}();
var PDFDataRangeTransport = exports.PDFDataRangeTransport = /*#__PURE__*/function () {
  function PDFDataRangeTransport(length, initialData) {
    var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, PDFDataRangeTransport);
    this.length = length;
    this.initialData = initialData;
    this.progressiveDone = progressiveDone;
    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._progressiveDoneListeners = [];
    this._readyCapability = (0, _util.createPromiseCapability)();
  }
  return _createClass(PDFDataRangeTransport, [{
    key: "addRangeListener",
    value: function addRangeListener(listener) {
      this._rangeListeners.push(listener);
    }
  }, {
    key: "addProgressListener",
    value: function addProgressListener(listener) {
      this._progressListeners.push(listener);
    }
  }, {
    key: "addProgressiveReadListener",
    value: function addProgressiveReadListener(listener) {
      this._progressiveReadListeners.push(listener);
    }
  }, {
    key: "addProgressiveDoneListener",
    value: function addProgressiveDoneListener(listener) {
      this._progressiveDoneListeners.push(listener);
    }
  }, {
    key: "onDataRange",
    value: function onDataRange(begin, chunk) {
      var _iterator = _createForOfIteratorHelper(this._rangeListeners),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener(begin, chunk);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "onDataProgress",
    value: function onDataProgress(loaded, total) {
      var _this2 = this;
      this._readyCapability.promise.then(function () {
        var _iterator2 = _createForOfIteratorHelper(_this2._progressListeners),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var listener = _step2.value;
            listener(loaded, total);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    }
  }, {
    key: "onDataProgressiveRead",
    value: function onDataProgressiveRead(chunk) {
      var _this3 = this;
      this._readyCapability.promise.then(function () {
        var _iterator3 = _createForOfIteratorHelper(_this3._progressiveReadListeners),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var listener = _step3.value;
            listener(chunk);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
    }
  }, {
    key: "onDataProgressiveDone",
    value: function onDataProgressiveDone() {
      var _this4 = this;
      this._readyCapability.promise.then(function () {
        var _iterator4 = _createForOfIteratorHelper(_this4._progressiveDoneListeners),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var listener = _step4.value;
            listener();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      });
    }
  }, {
    key: "transportReady",
    value: function transportReady() {
      this._readyCapability.resolve();
    }
  }, {
    key: "requestDataRange",
    value: function requestDataRange(begin, end) {
      (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
    }
  }, {
    key: "abort",
    value: function abort() {}
  }]);
}();
var PDFDocumentProxy = exports.PDFDocumentProxy = /*#__PURE__*/function () {
  function PDFDocumentProxy(pdfInfo, transport) {
    _classCallCheck(this, PDFDocumentProxy);
    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }
  return _createClass(PDFDocumentProxy, [{
    key: "annotationStorage",
    get: function get() {
      return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
    }
  }, {
    key: "numPages",
    get: function get() {
      return this._pdfInfo.numPages;
    }
  }, {
    key: "fingerprint",
    get: function get() {
      return this._pdfInfo.fingerprint;
    }
  }, {
    key: "getPage",
    value: function getPage(pageNumber) {
      return this._transport.getPage(pageNumber);
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex(ref) {
      return this._transport.getPageIndex(ref);
    }
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this._transport.getDestinations();
    }
  }, {
    key: "getDestination",
    value: function getDestination(id) {
      return this._transport.getDestination(id);
    }
  }, {
    key: "getPageLabels",
    value: function getPageLabels() {
      return this._transport.getPageLabels();
    }
  }, {
    key: "getPageLayout",
    value: function getPageLayout() {
      return this._transport.getPageLayout();
    }
  }, {
    key: "getPageMode",
    value: function getPageMode() {
      return this._transport.getPageMode();
    }
  }, {
    key: "getViewerPreferences",
    value: function getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
  }, {
    key: "getOpenAction",
    value: function getOpenAction() {
      return this._transport.getOpenAction();
    }
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this._transport.getAttachments();
    }
  }, {
    key: "getJavaScript",
    value: function getJavaScript() {
      return this._transport.getJavaScript();
    }
  }, {
    key: "getJSActions",
    value: function getJSActions() {
      return this._transport.getDocJSActions();
    }
  }, {
    key: "getOutline",
    value: function getOutline() {
      return this._transport.getOutline();
    }
  }, {
    key: "getOptionalContentConfig",
    value: function getOptionalContentConfig() {
      return this._transport.getOptionalContentConfig();
    }
  }, {
    key: "getPermissions",
    value: function getPermissions() {
      return this._transport.getPermissions();
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this._transport.getMetadata();
    }
  }, {
    key: "getMarkInfo",
    value: function getMarkInfo() {
      return this._transport.getMarkInfo();
    }
  }, {
    key: "getData",
    value: function getData() {
      return this._transport.getData();
    }
  }, {
    key: "getDownloadInfo",
    value: function getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this._transport.getStats();
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      return this._transport.startCleanup();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return this.loadingTask.destroy();
    }
  }, {
    key: "loadingParams",
    get: function get() {
      return this._transport.loadingParams;
    }
  }, {
    key: "loadingTask",
    get: function get() {
      return this._transport.loadingTask;
    }
  }, {
    key: "saveDocument",
    value: function saveDocument(annotationStorage) {
      return this._transport.saveDocument(annotationStorage);
    }
  }, {
    key: "getFieldObjects",
    value: function getFieldObjects() {
      return this._transport.getFieldObjects();
    }
  }, {
    key: "hasJSActions",
    value: function hasJSActions() {
      return this._transport.hasJSActions();
    }
  }, {
    key: "getCalculationOrderIds",
    value: function getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  }]);
}();
var PDFPageProxy = exports.PDFPageProxy = /*#__PURE__*/function () {
  function PDFPageProxy(pageIndex, pageInfo, transport, ownerDocument) {
    var pdfBug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    _classCallCheck(this, PDFPageProxy);
    this._pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._ownerDocument = ownerDocument;
    this._transport = transport;
    this._stats = pdfBug ? new _display_utils.StatTimer() : null;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this.cleanupAfterRender = false;
    this.pendingCleanup = false;
    this._intentStates = new Map();
    this.destroyed = false;
  }
  return _createClass(PDFPageProxy, [{
    key: "pageNumber",
    get: function get() {
      return this._pageIndex + 1;
    }
  }, {
    key: "rotate",
    get: function get() {
      return this._pageInfo.rotate;
    }
  }, {
    key: "ref",
    get: function get() {
      return this._pageInfo.ref;
    }
  }, {
    key: "userUnit",
    get: function get() {
      return this._pageInfo.userUnit;
    }
  }, {
    key: "view",
    get: function get() {
      return this._pageInfo.view;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        scale = _ref3.scale,
        _ref3$rotation = _ref3.rotation,
        rotation = _ref3$rotation === void 0 ? this.rotate : _ref3$rotation,
        _ref3$offsetX = _ref3.offsetX,
        offsetX = _ref3$offsetX === void 0 ? 0 : _ref3$offsetX,
        _ref3$offsetY = _ref3.offsetY,
        offsetY = _ref3$offsetY === void 0 ? 0 : _ref3$offsetY,
        _ref3$dontFlip = _ref3.dontFlip,
        dontFlip = _ref3$dontFlip === void 0 ? false : _ref3$dontFlip;
      return new _display_utils.PageViewport({
        viewBox: this.view,
        scale: scale,
        rotation: rotation,
        offsetX: offsetX,
        offsetY: offsetY,
        dontFlip: dontFlip
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$intent = _ref4.intent,
        intent = _ref4$intent === void 0 ? null : _ref4$intent;
      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
        this.annotationsPromise = this._transport.getAnnotations(this._pageIndex, intent);
        this.annotationsIntent = intent;
      }
      return this.annotationsPromise;
    }
  }, {
    key: "getJSActions",
    value: function getJSActions() {
      return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
    }
  }, {
    key: "render",
    value: function render(_ref5) {
      var _this5 = this;
      var canvasContext = _ref5.canvasContext,
        viewport = _ref5.viewport,
        _ref5$intent = _ref5.intent,
        intent = _ref5$intent === void 0 ? "display" : _ref5$intent,
        _ref5$enableWebGL = _ref5.enableWebGL,
        enableWebGL = _ref5$enableWebGL === void 0 ? false : _ref5$enableWebGL,
        _ref5$renderInteracti = _ref5.renderInteractiveForms,
        renderInteractiveForms = _ref5$renderInteracti === void 0 ? false : _ref5$renderInteracti,
        _ref5$transform = _ref5.transform,
        transform = _ref5$transform === void 0 ? null : _ref5$transform,
        _ref5$imageLayer = _ref5.imageLayer,
        imageLayer = _ref5$imageLayer === void 0 ? null : _ref5$imageLayer,
        _ref5$canvasFactory = _ref5.canvasFactory,
        canvasFactory = _ref5$canvasFactory === void 0 ? null : _ref5$canvasFactory,
        _ref5$background = _ref5.background,
        background = _ref5$background === void 0 ? null : _ref5$background,
        _ref5$annotationStora = _ref5.annotationStorage,
        annotationStorage = _ref5$annotationStora === void 0 ? null : _ref5$annotationStora,
        _ref5$optionalContent = _ref5.optionalContentConfigPromise,
        optionalContentConfigPromise = _ref5$optionalContent === void 0 ? null : _ref5$optionalContent,
        _ref5$forceRenderSigA = _ref5.forceRenderSigAnnot,
        forceRenderSigAnnot = _ref5$forceRenderSigA === void 0 ? false : _ref5$forceRenderSigA;
      if (this._stats) {
        this._stats.time("Overall");
      }
      var renderingIntent = intent === "print" ? "print" : "display";
      this.pendingCleanup = false;
      if (!optionalContentConfigPromise) {
        optionalContentConfigPromise = this._transport.getOptionalContentConfig();
      }
      var intentState = this._intentStates.get(renderingIntent);
      if (!intentState) {
        intentState = Object.create(null);
        this._intentStates.set(renderingIntent, intentState);
      }
      if (intentState.streamReaderCancelTimeout) {
        clearTimeout(intentState.streamReaderCancelTimeout);
        intentState.streamReaderCancelTimeout = null;
      }
      var canvasFactoryInstance = canvasFactory || new DefaultCanvasFactory({
        ownerDocument: this._ownerDocument
      });
      var webGLContext = new _webgl.WebGLContext({
        enable: enableWebGL
      });
      if (!intentState.displayReadyCapability) {
        intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        if (this._stats) {
          this._stats.time("Page Request");
        }
        this._pumpOperatorList({
          pageIndex: this._pageIndex,
          intent: renderingIntent,
          renderInteractiveForms: renderInteractiveForms === true,
          annotationStorage: (annotationStorage === null || annotationStorage === void 0 ? void 0 : annotationStorage.getAll()) || null,
          forceRenderSigAnnot: forceRenderSigAnnot === true
        });
      }
      var complete = function complete(error) {
        var i = intentState.renderTasks.indexOf(internalRenderTask);
        if (i >= 0) {
          intentState.renderTasks.splice(i, 1);
        }
        if (_this5.cleanupAfterRender || renderingIntent === "print") {
          _this5.pendingCleanup = true;
        }
        _this5._tryCleanup();
        if (error) {
          internalRenderTask.capability.reject(error);
          _this5._abortOperatorList({
            intentState: intentState,
            reason: error
          });
        } else {
          internalRenderTask.capability.resolve();
        }
        if (_this5._stats) {
          _this5._stats.timeEnd("Rendering");
          _this5._stats.timeEnd("Overall");
        }
      };
      var internalRenderTask = new InternalRenderTask({
        callback: complete,
        params: {
          canvasContext: canvasContext,
          viewport: viewport,
          transform: transform,
          imageLayer: imageLayer,
          background: background
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        operatorList: intentState.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: canvasFactoryInstance,
        webGLContext: webGLContext,
        useRequestAnimationFrame: renderingIntent !== "print",
        pdfBug: this._pdfBug
      });
      if (!intentState.renderTasks) {
        intentState.renderTasks = [];
      }
      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;
      Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          transparency = _ref7[0],
          optionalContentConfig = _ref7[1];
        if (_this5.pendingCleanup) {
          complete();
          return;
        }
        if (_this5._stats) {
          _this5._stats.time("Rendering");
        }
        internalRenderTask.initializeGraphics({
          transparency: transparency,
          optionalContentConfig: optionalContentConfig
        });
        internalRenderTask.operatorListChanged();
      })["catch"](complete);
      return renderTask;
    }
  }, {
    key: "getOperatorList",
    value: function getOperatorList() {
      function operatorListChanged() {
        if (intentState.operatorList.lastChunk) {
          intentState.opListReadCapability.resolve(intentState.operatorList);
          var i = intentState.renderTasks.indexOf(opListTask);
          if (i >= 0) {
            intentState.renderTasks.splice(i, 1);
          }
        }
      }
      var renderingIntent = "oplist";
      var intentState = this._intentStates.get(renderingIntent);
      if (!intentState) {
        intentState = Object.create(null);
        this._intentStates.set(renderingIntent, intentState);
      }
      var opListTask;
      if (!intentState.opListReadCapability) {
        opListTask = Object.create(null);
        opListTask.operatorListChanged = operatorListChanged;
        intentState.opListReadCapability = (0, _util.createPromiseCapability)();
        intentState.renderTasks = [];
        intentState.renderTasks.push(opListTask);
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        if (this._stats) {
          this._stats.time("Page Request");
        }
        this._pumpOperatorList({
          pageIndex: this._pageIndex,
          intent: renderingIntent
        });
      }
      return intentState.opListReadCapability.promise;
    }
  }, {
    key: "streamTextContent",
    value: function streamTextContent() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref8$normalizeWhites = _ref8.normalizeWhitespace,
        normalizeWhitespace = _ref8$normalizeWhites === void 0 ? false : _ref8$normalizeWhites,
        _ref8$disableCombineT = _ref8.disableCombineTextItems,
        disableCombineTextItems = _ref8$disableCombineT === void 0 ? false : _ref8$disableCombineT;
      var TEXT_CONTENT_CHUNK_SIZE = 100;
      return this._transport.messageHandler.sendWithStream("GetTextContent", {
        pageIndex: this._pageIndex,
        normalizeWhitespace: normalizeWhitespace === true,
        combineTextItems: disableCombineTextItems !== true
      }, {
        highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
        size: function size(textContent) {
          return textContent.items.length;
        }
      });
    }
  }, {
    key: "getTextContent",
    value: function getTextContent() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var readableStream = this.streamTextContent(params);
      return new Promise(function (resolve, reject) {
        function pump() {
          reader.read().then(function (_ref9) {
            var _textContent$items;
            var value = _ref9.value,
              done = _ref9.done;
            if (done) {
              resolve(textContent);
              return;
            }
            Object.assign(textContent.styles, value.styles);
            (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));
            pump();
          }, reject);
        }
        var reader = readableStream.getReader();
        var textContent = {
          items: [],
          styles: Object.create(null)
        };
        pump();
      });
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.destroyed = true;
      this._transport.pageCache[this._pageIndex] = null;
      var waitOn = [];
      var _iterator5 = _createForOfIteratorHelper(this._intentStates),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
            intent = _step5$value[0],
            intentState = _step5$value[1];
          this._abortOperatorList({
            intentState: intentState,
            reason: new Error("Page was destroyed."),
            force: true
          });
          if (intent === "oplist") {
            continue;
          }
          var _iterator6 = _createForOfIteratorHelper(intentState.renderTasks),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var internalRenderTask = _step6.value;
              waitOn.push(internalRenderTask.completed);
              internalRenderTask.cancel();
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.objs.clear();
      this.annotationsPromise = null;
      this._jsActionsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.pendingCleanup = true;
      return this._tryCleanup(resetStats);
    }
  }, {
    key: "_tryCleanup",
    value: function _tryCleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.pendingCleanup) {
        return false;
      }
      var _iterator7 = _createForOfIteratorHelper(this._intentStates.values()),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = _step7.value,
            renderTasks = _step7$value.renderTasks,
            operatorList = _step7$value.operatorList;
          if (renderTasks.length !== 0 || !operatorList.lastChunk) {
            return false;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      this._intentStates.clear();
      this.objs.clear();
      this.annotationsPromise = null;
      this._jsActionsPromise = null;
      if (resetStats && this._stats) {
        this._stats = new _display_utils.StatTimer();
      }
      this.pendingCleanup = false;
      return true;
    }
  }, {
    key: "_startRenderPage",
    value: function _startRenderPage(transparency, intent) {
      var intentState = this._intentStates.get(intent);
      if (!intentState) {
        return;
      }
      if (this._stats) {
        this._stats.timeEnd("Page Request");
      }
      if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.resolve(transparency);
      }
    }
  }, {
    key: "_renderPageChunk",
    value: function _renderPageChunk(operatorListChunk, intentState) {
      for (var i = 0, ii = operatorListChunk.length; i < ii; i++) {
        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
        intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
      }
      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
      for (var _i = 0; _i < intentState.renderTasks.length; _i++) {
        intentState.renderTasks[_i].operatorListChanged();
      }
      if (operatorListChunk.lastChunk) {
        this._tryCleanup();
      }
    }
  }, {
    key: "_pumpOperatorList",
    value: function _pumpOperatorList(args) {
      var _this6 = this;
      (0, _util.assert)(args.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');
      var readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", args);
      var reader = readableStream.getReader();
      var intentState = this._intentStates.get(args.intent);
      intentState.streamReader = reader;
      var _pump = function pump() {
        reader.read().then(function (_ref10) {
          var value = _ref10.value,
            done = _ref10.done;
          if (done) {
            intentState.streamReader = null;
            return;
          }
          if (_this6._transport.destroyed) {
            return;
          }
          _this6._renderPageChunk(value, intentState);
          _pump();
        }, function (reason) {
          intentState.streamReader = null;
          if (_this6._transport.destroyed) {
            return;
          }
          if (intentState.operatorList) {
            intentState.operatorList.lastChunk = true;
            for (var i = 0; i < intentState.renderTasks.length; i++) {
              intentState.renderTasks[i].operatorListChanged();
            }
            _this6._tryCleanup();
          }
          if (intentState.displayReadyCapability) {
            intentState.displayReadyCapability.reject(reason);
          } else if (intentState.opListReadCapability) {
            intentState.opListReadCapability.reject(reason);
          } else {
            throw reason;
          }
        });
      };
      _pump();
    }
  }, {
    key: "_abortOperatorList",
    value: function _abortOperatorList(_ref11) {
      var _this7 = this;
      var intentState = _ref11.intentState,
        reason = _ref11.reason,
        _ref11$force = _ref11.force,
        force = _ref11$force === void 0 ? false : _ref11$force;
      (0, _util.assert)(reason instanceof Error || _typeof(reason) === "object" && reason !== null, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');
      if (!intentState.streamReader) {
        return;
      }
      if (!force) {
        if (intentState.renderTasks.length !== 0) {
          return;
        }
        if (reason instanceof _display_utils.RenderingCancelledException) {
          intentState.streamReaderCancelTimeout = setTimeout(function () {
            _this7._abortOperatorList({
              intentState: intentState,
              reason: reason,
              force: true
            });
            intentState.streamReaderCancelTimeout = null;
          }, RENDERING_CANCELLED_TIMEOUT);
          return;
        }
      }
      intentState.streamReader.cancel(new _util.AbortException(reason === null || reason === void 0 ? void 0 : reason.message));
      intentState.streamReader = null;
      if (this._transport.destroyed) {
        return;
      }
      var _iterator8 = _createForOfIteratorHelper(this._intentStates),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _step8$value = _slicedToArray(_step8.value, 2),
            intent = _step8$value[0],
            curIntentState = _step8$value[1];
          if (curIntentState === intentState) {
            this._intentStates["delete"](intent);
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this.cleanup();
    }
  }, {
    key: "stats",
    get: function get() {
      return this._stats;
    }
  }]);
}();
var LoopbackPort = exports.LoopbackPort = /*#__PURE__*/function () {
  function LoopbackPort() {
    var defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, LoopbackPort);
    this._listeners = [];
    this._defer = defer;
    this._deferred = Promise.resolve(undefined);
  }
  return _createClass(LoopbackPort, [{
    key: "postMessage",
    value: function postMessage(obj, transfers) {
      var _this8 = this;
      function cloneValue(value) {
        if (_typeof(value) !== "object" || value === null) {
          return value;
        }
        if (cloned.has(value)) {
          return cloned.get(value);
        }
        var buffer, result;
        if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
          if (transfers !== null && transfers !== void 0 && transfers.includes(buffer)) {
            result = new value.constructor(buffer, value.byteOffset, value.byteLength);
          } else {
            result = new value.constructor(value);
          }
          cloned.set(value, result);
          return result;
        }
        result = Array.isArray(value) ? [] : {};
        cloned.set(value, result);
        for (var i in value) {
          var desc = void 0,
            p = value;
          while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
            p = Object.getPrototypeOf(p);
          }
          if (typeof desc.value === "undefined") {
            continue;
          }
          if (typeof desc.value === "function") {
            if (value.hasOwnProperty && value.hasOwnProperty(i)) {
              throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(value[i]));
            }
            continue;
          }
          result[i] = cloneValue(desc.value);
        }
        return result;
      }
      if (!this._defer) {
        this._listeners.forEach(function (listener) {
          listener.call(_this8, {
            data: obj
          });
        });
        return;
      }
      var cloned = new WeakMap();
      var e = {
        data: cloneValue(obj)
      };
      this._deferred.then(function () {
        _this8._listeners.forEach(function (listener) {
          listener.call(_this8, e);
        });
      });
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(name, listener) {
      this._listeners.push(listener);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(name, listener) {
      var i = this._listeners.indexOf(listener);
      this._listeners.splice(i, 1);
    }
  }, {
    key: "terminate",
    value: function terminate() {
      this._listeners.length = 0;
    }
  }]);
}();
var PDFWorker = exports.PDFWorker = function PDFWorkerClosure() {
  var pdfWorkerPorts = new WeakMap();
  var isWorkerDisabled = !!_worker_options.GlobalWorkerOptions.isWorkerDisabled;
  var fallbackWorkerSrc;
  var nextFakeWorkerId = 0;
  var fakeWorkerCapability;
  if (_is_node.isNodeJS && typeof require === "function") {
    isWorkerDisabled = true;
    fallbackWorkerSrc = "./pdf.worker.js";
  } else if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && "currentScript" in document) {
    var _document$currentScri;
    var pdfjsFilePath = (_document$currentScri = document.currentScript) === null || _document$currentScri === void 0 ? void 0 : _document$currentScri.src;
    if (pdfjsFilePath) {
      fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
    }
  }
  function _getWorkerSrc() {
    if (_worker_options.GlobalWorkerOptions.workerSrc) {
      return _worker_options.GlobalWorkerOptions.workerSrc;
    }
    if (typeof fallbackWorkerSrc !== "undefined") {
      if (!_is_node.isNodeJS) {
        (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
      }
      return fallbackWorkerSrc;
    }
    return '';
  }
  function getMainThreadWorkerMessageHandler() {
    var mainWorkerMessageHandler;
    try {
      var _globalThis$pdfjsWork;
      mainWorkerMessageHandler = (_globalThis$pdfjsWork = globalThis.pdfjsWorker) === null || _globalThis$pdfjsWork === void 0 ? void 0 : _globalThis$pdfjsWork.WorkerMessageHandler;
    } catch (ex) {}
    return mainWorkerMessageHandler || null;
  }
  function setupFakeWorkerGlobal() {
    if (fakeWorkerCapability) {
      return fakeWorkerCapability.promise;
    }
    fakeWorkerCapability = (0, _util.createPromiseCapability)();
    var loader = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var mainWorkerMessageHandler, worker, _worker;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
              if (!mainWorkerMessageHandler) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", mainWorkerMessageHandler);
            case 3:
              if (!(_is_node.isNodeJS && typeof require === "function")) {
                _context.next = 6;
                break;
              }
              worker = eval("require")(_getWorkerSrc());
              return _context.abrupt("return", worker.WorkerMessageHandler);
            case 6:
              if (!(typeof window !== "undefined" && _worker_options.GlobalWorkerOptions.isWorkerDisabled && typeof require === "function")) {
                _context.next = 9;
                break;
              }
              _worker = require("./pdf.worker.js");
              return _context.abrupt("return", _worker.WorkerMessageHandler);
            case 9:
              _context.next = 11;
              return (0, _display_utils.loadScript)(_getWorkerSrc());
            case 11:
              return _context.abrupt("return", window.pdfjsWorker.WorkerMessageHandler);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function loader() {
        return _ref12.apply(this, arguments);
      };
    }();
    loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject);
    return fakeWorkerCapability.promise;
  }
  function createCDNWrapper(url) {
    var wrapper = "importScripts('" + url + "');";
    return URL.createObjectURL(new Blob([wrapper]));
  }
  var PDFWorker = /*#__PURE__*/function () {
    function PDFWorker() {
      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref13$name = _ref13.name,
        name = _ref13$name === void 0 ? null : _ref13$name,
        _ref13$port = _ref13.port,
        port = _ref13$port === void 0 ? null : _ref13$port,
        _ref13$verbosity = _ref13.verbosity,
        verbosity = _ref13$verbosity === void 0 ? (0, _util.getVerbosityLevel)() : _ref13$verbosity;
      _classCallCheck(this, PDFWorker);
      if (port && pdfWorkerPorts.has(port)) {
        throw new Error("Cannot use more than one PDFWorker per port");
      }
      this.name = name;
      this.destroyed = false;
      this.postMessageTransfers = true;
      this.verbosity = verbosity;
      this._readyCapability = (0, _util.createPromiseCapability)();
      this._port = null;
      this._webWorker = null;
      this._messageHandler = null;
      if (port) {
        pdfWorkerPorts.set(port, this);
        this._initializeFromPort(port);
        return;
      }
      this._initialize();
    }
    return _createClass(PDFWorker, [{
      key: "promise",
      get: function get() {
        return this._readyCapability.promise;
      }
    }, {
      key: "port",
      get: function get() {
        return this._port;
      }
    }, {
      key: "messageHandler",
      get: function get() {
        return this._messageHandler;
      }
    }, {
      key: "_initializeFromPort",
      value: function _initializeFromPort(port) {
        this._port = port;
        this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);
        this._messageHandler.on("ready", function () {});
        this._readyCapability.resolve();
      }
    }, {
      key: "_initialize",
      value: function _initialize() {
        var _this9 = this;
        if (typeof Worker !== 'undefined' && !_worker_options.GlobalWorkerOptions.isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
          var workerSrc = _getWorkerSrc();
          try {
            if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
              workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
            }
            var worker = new Worker(workerSrc);
            var messageHandler = new _message_handler.MessageHandler("main", "worker", worker);
            var terminateEarly = function terminateEarly() {
              worker.removeEventListener("error", onWorkerError);
              messageHandler.destroy();
              worker.terminate();
              if (_this9.destroyed) {
                _this9._readyCapability.reject(new Error("Worker was destroyed"));
              } else {
                _this9._setupFakeWorker();
              }
            };
            var onWorkerError = function onWorkerError() {
              if (!_this9._webWorker) {
                terminateEarly();
              }
            };
            worker.addEventListener("error", onWorkerError);
            messageHandler.on("test", function (data) {
              worker.removeEventListener("error", onWorkerError);
              if (_this9.destroyed) {
                terminateEarly();
                return;
              }
              if (data) {
                _this9._messageHandler = messageHandler;
                _this9._port = worker;
                _this9._webWorker = worker;
                if (!data.supportTransfers) {
                  _this9.postMessageTransfers = false;
                }
                _this9._readyCapability.resolve();
                messageHandler.send("configure", {
                  verbosity: _this9.verbosity
                });
              } else {
                _this9._setupFakeWorker();
                messageHandler.destroy();
                worker.terminate();
              }
            });
            messageHandler.on("ready", function (data) {
              worker.removeEventListener("error", onWorkerError);
              if (_this9.destroyed) {
                terminateEarly();
                return;
              }
              try {
                sendTest();
              } catch (e) {
                _this9._setupFakeWorker();
              }
            });
            var sendTest = function sendTest() {
              var testObj = new Uint8Array([_this9.postMessageTransfers ? 255 : 0]);
              try {
                messageHandler.send("test", testObj, [testObj.buffer]);
              } catch (ex) {
                (0, _util.warn)("Cannot use postMessage transfers.");
                testObj[0] = 0;
                messageHandler.send("test", testObj);
              }
            };
            sendTest();
            return;
          } catch (e) {
            (0, _util.info)("The worker has been disabled.");
          }
        }
        this._setupFakeWorker();
      }
    }, {
      key: "_setupFakeWorker",
      value: function _setupFakeWorker() {
        var _this10 = this;
        if (!_worker_options.GlobalWorkerOptions.isWorkerDisabled) {
          (0, _util.warn)('Setting up fake worker.');
          _worker_options.GlobalWorkerOptions.isWorkerDisabled = true;
          isWorkerDisabled = true;
        }
        setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
          if (_this10.destroyed) {
            _this10._readyCapability.reject(new Error("Worker was destroyed"));
            return;
          }
          var port = new LoopbackPort();
          _this10._port = port;
          var id = "fake" + nextFakeWorkerId++;
          var workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
          WorkerMessageHandler.setup(workerHandler, port);
          var messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
          _this10._messageHandler = messageHandler;
          _this10._readyCapability.resolve();
          messageHandler.send("configure", {
            verbosity: _this10.verbosity
          });
        })["catch"](function (reason) {
          _this10._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(reason.message, "\".")));
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyed = true;
        if (this._webWorker) {
          this._webWorker.terminate();
          this._webWorker = null;
        }
        pdfWorkerPorts["delete"](this._port);
        this._port = null;
        if (this._messageHandler) {
          this._messageHandler.destroy();
          this._messageHandler = null;
        }
      }
    }], [{
      key: "fromPort",
      value: function fromPort(params) {
        if (!params || !params.port) {
          throw new Error("PDFWorker.fromPort - invalid method signature.");
        }
        if (pdfWorkerPorts.has(params.port)) {
          return pdfWorkerPorts.get(params.port);
        }
        return new PDFWorker(params);
      }
    }, {
      key: "getWorkerSrc",
      value: function getWorkerSrc() {
        return _getWorkerSrc();
      }
    }]);
  }();
  return PDFWorker;
}();
var WorkerTransport = /*#__PURE__*/function () {
  function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
    _classCallCheck(this, WorkerTransport);
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new _font_loader.FontLoader({
      docId: loadingTask.docId,
      onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
      ownerDocument: params.ownerDocument
    });
    this._params = params;
    this.CMapReaderFactory = new params.CMapReaderFactory({
      baseUrl: params.cMapUrl,
      isCompressed: params.cMapPacked
    });
    this.destroyed = false;
    this.destroyCapability = null;
    this._passwordCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.pageCache = [];
    this.pagePromises = [];
    this.downloadInfoCapability = (0, _util.createPromiseCapability)();
    this.setupMessageHandler();
  }
  return _createClass(WorkerTransport, [{
    key: "loadingTaskSettled",
    get: function get() {
      return this.loadingTask._capability.settled;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this11 = this;
      if (this.destroyCapability) {
        return this.destroyCapability.promise;
      }
      this.destroyed = true;
      this.destroyCapability = (0, _util.createPromiseCapability)();
      if (this._passwordCapability) {
        this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
      }
      var waitOn = [];
      this.pageCache.forEach(function (page) {
        if (page) {
          waitOn.push(page._destroy());
        }
      });
      this.pageCache.length = 0;
      this.pagePromises.length = 0;
      var terminated = this.messageHandler.sendWithPromise("Terminate", null);
      waitOn.push(terminated);
      if (this.loadingTaskSettled) {
        var annotationStorageResetModified = this.loadingTask.promise.then(function (pdfDocument) {
          if (pdfDocument.hasOwnProperty("annotationStorage")) {
            pdfDocument.annotationStorage.resetModified();
          }
        })["catch"](function () {});
        waitOn.push(annotationStorageResetModified);
      }
      Promise.all(waitOn).then(function () {
        _this11.commonObjs.clear();
        _this11.fontLoader.clear();
        _this11._hasJSActionsPromise = null;
        if (_this11._networkStream) {
          _this11._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
        }
        if (_this11.messageHandler) {
          _this11.messageHandler.destroy();
          _this11.messageHandler = null;
        }
        _this11.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    }
  }, {
    key: "setupMessageHandler",
    value: function setupMessageHandler() {
      var _this12 = this;
      var messageHandler = this.messageHandler,
        loadingTask = this.loadingTask;
      messageHandler.on("GetReader", function (data, sink) {
        (0, _util.assert)(_this12._networkStream, "GetReader - no `IPDFStream` instance available.");
        _this12._fullReader = _this12._networkStream.getFullReader();
        _this12._fullReader.onProgress = function (evt) {
          _this12._lastProgress = {
            loaded: evt.loaded,
            total: evt.total
          };
        };
        sink.onPull = function () {
          _this12._fullReader.read().then(function (_ref14) {
            var value = _ref14.value,
              done = _ref14.done;
            if (done) {
              sink.close();
              return;
            }
            (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetReader - expected an ArrayBuffer.");
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };
        sink.onCancel = function (reason) {
          _this12._fullReader.cancel(reason);
          sink.ready["catch"](function (readyReason) {
            if (_this12.destroyed) {
              return;
            }
            throw readyReason;
          });
        };
      });
      messageHandler.on("ReaderHeadersReady", function (data) {
        var headersCapability = (0, _util.createPromiseCapability)();
        var fullReader = _this12._fullReader;
        fullReader.headersReady.then(function () {
          if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
            if (_this12._lastProgress && loadingTask.onProgress) {
              loadingTask.onProgress(_this12._lastProgress);
            }
            fullReader.onProgress = function (evt) {
              if (loadingTask.onProgress) {
                loadingTask.onProgress({
                  loaded: evt.loaded,
                  total: evt.total
                });
              }
            };
          }
          headersCapability.resolve({
            isStreamingSupported: fullReader.isStreamingSupported,
            isRangeSupported: fullReader.isRangeSupported,
            contentLength: fullReader.contentLength
          });
        }, headersCapability.reject);
        return headersCapability.promise;
      });
      messageHandler.on("GetRangeReader", function (data, sink) {
        (0, _util.assert)(_this12._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
        var rangeReader = _this12._networkStream.getRangeReader(data.begin, data.end);
        if (!rangeReader) {
          sink.close();
          return;
        }
        sink.onPull = function () {
          rangeReader.read().then(function (_ref15) {
            var value = _ref15.value,
              done = _ref15.done;
            if (done) {
              sink.close();
              return;
            }
            (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetRangeReader - expected an ArrayBuffer.");
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };
        sink.onCancel = function (reason) {
          rangeReader.cancel(reason);
          sink.ready["catch"](function (readyReason) {
            if (_this12.destroyed) {
              return;
            }
            throw readyReason;
          });
        };
      });
      messageHandler.on("GetDoc", function (_ref16) {
        var pdfInfo = _ref16.pdfInfo;
        _this12._numPages = pdfInfo.numPages;
        loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, _this12));
      });
      messageHandler.on("DocException", function (ex) {
        var reason;
        switch (ex.name) {
          case "PasswordException":
            reason = new _util.PasswordException(ex.message, ex.code);
            break;
          case "InvalidPDFException":
            reason = new _util.InvalidPDFException(ex.message);
            break;
          case "MissingPDFException":
            reason = new _util.MissingPDFException(ex.message);
            break;
          case "UnexpectedResponseException":
            reason = new _util.UnexpectedResponseException(ex.message, ex.status);
            break;
          case "UnknownErrorException":
            reason = new _util.UnknownErrorException(ex.message, ex.details);
            break;
        }
        if (!(reason instanceof Error)) {
          var msg = "DocException - expected a valid Error.";
          (0, _util.warn)(msg);
        }
        loadingTask._capability.reject(reason);
      });
      messageHandler.on("PasswordRequest", function (exception) {
        _this12._passwordCapability = (0, _util.createPromiseCapability)();
        if (loadingTask.onPassword) {
          var updatePassword = function updatePassword(password) {
            _this12._passwordCapability.resolve({
              password: password
            });
          };
          try {
            loadingTask.onPassword(updatePassword, exception.code);
          } catch (ex) {
            _this12._passwordCapability.reject(ex);
          }
        } else {
          _this12._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
        }
        return _this12._passwordCapability.promise;
      });
      messageHandler.on("DataLoaded", function (data) {
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.length,
            total: data.length
          });
        }
        _this12.downloadInfoCapability.resolve(data);
      });
      messageHandler.on("StartRenderPage", function (data) {
        if (_this12.destroyed) {
          return;
        }
        var page = _this12.pageCache[data.pageIndex];
        page._startRenderPage(data.transparency, data.intent);
      });
      messageHandler.on("commonobj", function (data) {
        var _globalThis$FontInspe;
        if (_this12.destroyed) {
          return;
        }
        var _data = _slicedToArray(data, 3),
          id = _data[0],
          type = _data[1],
          exportedData = _data[2];
        if (_this12.commonObjs.has(id)) {
          return;
        }
        switch (type) {
          case "Font":
            var params = _this12._params;
            if ("error" in exportedData) {
              var exportedError = exportedData.error;
              (0, _util.warn)("Error during font loading: ".concat(exportedError));
              _this12.commonObjs.resolve(id, exportedError);
              break;
            }
            var fontRegistry = null;
            if (params.pdfBug && (_globalThis$FontInspe = globalThis.FontInspector) !== null && _globalThis$FontInspe !== void 0 && _globalThis$FontInspe.enabled) {
              fontRegistry = {
                registerFont: function registerFont(font, url) {
                  globalThis.FontInspector.fontAdded(font, url);
                }
              };
            }
            var font = new _font_loader.FontFaceObject(exportedData, {
              isEvalSupported: params.isEvalSupported,
              disableFontFace: params.disableFontFace,
              ignoreErrors: params.ignoreErrors,
              onUnsupportedFeature: _this12._onUnsupportedFeature.bind(_this12),
              fontRegistry: fontRegistry
            });
            _this12.fontLoader.bind(font)["catch"](function (reason) {
              return messageHandler.sendWithPromise("FontFallback", {
                id: id
              });
            })["finally"](function () {
              if (!params.fontExtraProperties && font.data) {
                font.data = null;
              }
              _this12.commonObjs.resolve(id, font);
            });
            break;
          case "FontPath":
          case "Image":
            _this12.commonObjs.resolve(id, exportedData);
            break;
          default:
            throw new Error("Got unknown common object type ".concat(type));
        }
      });
      messageHandler.on("obj", function (data) {
        var _imageData$data;
        if (_this12.destroyed) {
          return undefined;
        }
        var _data2 = _slicedToArray(data, 4),
          id = _data2[0],
          pageIndex = _data2[1],
          type = _data2[2],
          imageData = _data2[3];
        var pageProxy = _this12.pageCache[pageIndex];
        if (pageProxy.objs.has(id)) {
          return undefined;
        }
        switch (type) {
          case "Image":
            pageProxy.objs.resolve(id, imageData);
            var MAX_IMAGE_SIZE_TO_STORE = 8000000;
            if ((imageData === null || imageData === void 0 || (_imageData$data = imageData.data) === null || _imageData$data === void 0 ? void 0 : _imageData$data.length) > MAX_IMAGE_SIZE_TO_STORE) {
              pageProxy.cleanupAfterRender = true;
            }
            break;
          default:
            throw new Error("Got unknown object type ".concat(type));
        }
        return undefined;
      });
      messageHandler.on("DocProgress", function (data) {
        if (_this12.destroyed) {
          return;
        }
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.loaded,
            total: data.total
          });
        }
      });
      messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
      messageHandler.on("FetchBuiltInCMap", function (data, sink) {
        if (_this12.destroyed) {
          sink.error(new Error("Worker was destroyed"));
          return;
        }
        var fetched = false;
        sink.onPull = function () {
          if (fetched) {
            sink.close();
            return;
          }
          fetched = true;
          _this12.CMapReaderFactory.fetch(data).then(function (builtInCMap) {
            sink.enqueue(builtInCMap, 1, [builtInCMap.cMapData.buffer]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };
      });
    }
  }, {
    key: "_onUnsupportedFeature",
    value: function _onUnsupportedFeature(_ref17) {
      var featureId = _ref17.featureId;
      if (this.destroyed) {
        return;
      }
      if (this.loadingTask.onUnsupportedFeature) {
        this.loadingTask.onUnsupportedFeature(featureId);
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.messageHandler.sendWithPromise("GetData", null);
    }
  }, {
    key: "getPage",
    value: function getPage(pageNumber) {
      var _this13 = this;
      if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
        return Promise.reject(new Error("Invalid page request"));
      }
      var pageIndex = pageNumber - 1;
      if (pageIndex in this.pagePromises) {
        return this.pagePromises[pageIndex];
      }
      var promise = this.messageHandler.sendWithPromise("GetPage", {
        pageIndex: pageIndex
      }).then(function (pageInfo) {
        if (_this13.destroyed) {
          throw new Error("Transport destroyed");
        }
        var page = new PDFPageProxy(pageIndex, pageInfo, _this13, _this13._params.ownerDocument, _this13._params.pdfBug);
        _this13.pageCache[pageIndex] = page;
        return page;
      });
      this.pagePromises[pageIndex] = promise;
      return promise;
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex(ref) {
      return this.messageHandler.sendWithPromise("GetPageIndex", {
        ref: ref
      })["catch"](function (reason) {
        return Promise.reject(new Error(reason));
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations(pageIndex, intent) {
      return this.messageHandler.sendWithPromise("GetAnnotations", {
        pageIndex: pageIndex,
        intent: intent
      });
    }
  }, {
    key: "saveDocument",
    value: function saveDocument(annotationStorage) {
      var _this$_fullReader$fil, _this$_fullReader;
      return this.messageHandler.sendWithPromise("SaveDocument", {
        numPages: this._numPages,
        annotationStorage: (annotationStorage === null || annotationStorage === void 0 ? void 0 : annotationStorage.getAll()) || null,
        filename: (_this$_fullReader$fil = (_this$_fullReader = this._fullReader) === null || _this$_fullReader === void 0 ? void 0 : _this$_fullReader.filename) !== null && _this$_fullReader$fil !== void 0 ? _this$_fullReader$fil : null
      })["finally"](function () {
        if (annotationStorage) {
          annotationStorage.resetModified();
        }
      });
    }
  }, {
    key: "getFieldObjects",
    value: function getFieldObjects() {
      return this.messageHandler.sendWithPromise("GetFieldObjects", null);
    }
  }, {
    key: "hasJSActions",
    value: function hasJSActions() {
      return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
    }
  }, {
    key: "getCalculationOrderIds",
    value: function getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
  }, {
    key: "getDestination",
    value: function getDestination(id) {
      if (typeof id !== "string") {
        return Promise.reject(new Error("Invalid destination request."));
      }
      return this.messageHandler.sendWithPromise("GetDestination", {
        id: id
      });
    }
  }, {
    key: "getPageLabels",
    value: function getPageLabels() {
      return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
  }, {
    key: "getPageLayout",
    value: function getPageLayout() {
      return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
  }, {
    key: "getPageMode",
    value: function getPageMode() {
      return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
  }, {
    key: "getViewerPreferences",
    value: function getViewerPreferences() {
      return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
  }, {
    key: "getOpenAction",
    value: function getOpenAction() {
      return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
  }, {
    key: "getJavaScript",
    value: function getJavaScript() {
      return this.messageHandler.sendWithPromise("GetJavaScript", null);
    }
  }, {
    key: "getDocJSActions",
    value: function getDocJSActions() {
      return this.messageHandler.sendWithPromise("GetDocJSActions", null);
    }
  }, {
    key: "getPageJSActions",
    value: function getPageJSActions(pageIndex) {
      return this.messageHandler.sendWithPromise("GetPageJSActions", {
        pageIndex: pageIndex
      });
    }
  }, {
    key: "getOutline",
    value: function getOutline() {
      return this.messageHandler.sendWithPromise("GetOutline", null);
    }
  }, {
    key: "getOptionalContentConfig",
    value: function getOptionalContentConfig() {
      return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(function (results) {
        return new _optional_content_config.OptionalContentConfig(results);
      });
    }
  }, {
    key: "getPermissions",
    value: function getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      var _this14 = this;
      return this.messageHandler.sendWithPromise("GetMetadata", null).then(function (results) {
        var _this14$_fullReader$f, _this14$_fullReader, _this14$_fullReader$c, _this14$_fullReader2;
        return {
          info: results[0],
          metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
          contentDispositionFilename: (_this14$_fullReader$f = (_this14$_fullReader = _this14._fullReader) === null || _this14$_fullReader === void 0 ? void 0 : _this14$_fullReader.filename) !== null && _this14$_fullReader$f !== void 0 ? _this14$_fullReader$f : null,
          contentLength: (_this14$_fullReader$c = (_this14$_fullReader2 = _this14._fullReader) === null || _this14$_fullReader2 === void 0 ? void 0 : _this14$_fullReader2.contentLength) !== null && _this14$_fullReader$c !== void 0 ? _this14$_fullReader$c : null
        };
      });
    }
  }, {
    key: "getMarkInfo",
    value: function getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this.messageHandler.sendWithPromise("GetStats", null);
    }
  }, {
    key: "startCleanup",
    value: function startCleanup() {
      var _this15 = this;
      return this.messageHandler.sendWithPromise("Cleanup", null).then(function () {
        for (var i = 0, ii = _this15.pageCache.length; i < ii; i++) {
          var page = _this15.pageCache[i];
          if (page) {
            var cleanupSuccessful = page.cleanup();
            if (!cleanupSuccessful) {
              throw new Error("startCleanup: Page ".concat(i + 1, " is currently rendering."));
            }
          }
        }
        _this15.commonObjs.clear();
        _this15.fontLoader.clear();
        _this15._hasJSActionsPromise = null;
      });
    }
  }, {
    key: "loadingParams",
    get: function get() {
      var params = this._params;
      return (0, _util.shadow)(this, "loadingParams", {
        disableAutoFetch: params.disableAutoFetch,
        disableFontFace: params.disableFontFace
      });
    }
  }]);
}();
var PDFObjects = /*#__PURE__*/function () {
  function PDFObjects() {
    _classCallCheck(this, PDFObjects);
    this._objs = Object.create(null);
  }
  return _createClass(PDFObjects, [{
    key: "_ensureObj",
    value: function _ensureObj(objId) {
      if (this._objs[objId]) {
        return this._objs[objId];
      }
      return this._objs[objId] = {
        capability: (0, _util.createPromiseCapability)(),
        data: null,
        resolved: false
      };
    }
  }, {
    key: "get",
    value: function get(objId) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (callback) {
        this._ensureObj(objId).capability.promise.then(callback);
        return null;
      }
      var obj = this._objs[objId];
      if (!obj || !obj.resolved) {
        throw new Error("Requesting object that isn't resolved yet ".concat(objId, "."));
      }
      return obj.data;
    }
  }, {
    key: "has",
    value: function has(objId) {
      var obj = this._objs[objId];
      return (obj === null || obj === void 0 ? void 0 : obj.resolved) || false;
    }
  }, {
    key: "resolve",
    value: function resolve(objId, data) {
      var obj = this._ensureObj(objId);
      obj.resolved = true;
      obj.data = data;
      obj.capability.resolve(data);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._objs = Object.create(null);
    }
  }]);
}();
var RenderTask = /*#__PURE__*/function () {
  function RenderTask(internalRenderTask) {
    _classCallCheck(this, RenderTask);
    this._internalRenderTask = internalRenderTask;
    this.onContinue = null;
  }
  return _createClass(RenderTask, [{
    key: "promise",
    get: function get() {
      return this._internalRenderTask.capability.promise;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this._internalRenderTask.cancel();
    }
  }]);
}();
var InternalRenderTask = function InternalRenderTaskClosure() {
  var canvasInRendering = new WeakSet();
  var InternalRenderTask = /*#__PURE__*/function () {
    function InternalRenderTask(_ref18) {
      var callback = _ref18.callback,
        params = _ref18.params,
        objs = _ref18.objs,
        commonObjs = _ref18.commonObjs,
        operatorList = _ref18.operatorList,
        pageIndex = _ref18.pageIndex,
        canvasFactory = _ref18.canvasFactory,
        webGLContext = _ref18.webGLContext,
        _ref18$useRequestAnim = _ref18.useRequestAnimationFrame,
        useRequestAnimationFrame = _ref18$useRequestAnim === void 0 ? false : _ref18$useRequestAnim,
        _ref18$pdfBug = _ref18.pdfBug,
        pdfBug = _ref18$pdfBug === void 0 ? false : _ref18$pdfBug;
      _classCallCheck(this, InternalRenderTask);
      this.callback = callback;
      this.params = params;
      this.objs = objs;
      this.commonObjs = commonObjs;
      this.operatorListIdx = null;
      this.operatorList = operatorList;
      this._pageIndex = pageIndex;
      this.canvasFactory = canvasFactory;
      this.webGLContext = webGLContext;
      this._pdfBug = pdfBug;
      this.running = false;
      this.graphicsReadyCallback = null;
      this.graphicsReady = false;
      this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
      this.cancelled = false;
      this.capability = (0, _util.createPromiseCapability)();
      this.task = new RenderTask(this);
      this._continueBound = this._continue.bind(this);
      this._scheduleNextBound = this._scheduleNext.bind(this);
      this._nextBound = this._next.bind(this);
      this._canvas = params.canvasContext.canvas;
    }
    return _createClass(InternalRenderTask, [{
      key: "completed",
      get: function get() {
        return this.capability.promise["catch"](function () {});
      }
    }, {
      key: "initializeGraphics",
      value: function initializeGraphics(_ref19) {
        var _globalThis$StepperMa;
        var _ref19$transparency = _ref19.transparency,
          transparency = _ref19$transparency === void 0 ? false : _ref19$transparency,
          optionalContentConfig = _ref19.optionalContentConfig;
        if (this.cancelled) {
          return;
        }
        if (this._canvas) {
          if (canvasInRendering.has(this._canvas)) {
            throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
          }
          canvasInRendering.add(this._canvas);
        }
        if (this._pdfBug && (_globalThis$StepperMa = globalThis.StepperManager) !== null && _globalThis$StepperMa !== void 0 && _globalThis$StepperMa.enabled) {
          this.stepper = globalThis.StepperManager.create(this._pageIndex);
          this.stepper.init(this.operatorList);
          this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
        }
        var _this$params = this.params,
          canvasContext = _this$params.canvasContext,
          viewport = _this$params.viewport,
          transform = _this$params.transform,
          imageLayer = _this$params.imageLayer,
          background = _this$params.background;
        this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer, optionalContentConfig);
        this.gfx.beginDrawing({
          transform: transform,
          viewport: viewport,
          transparency: transparency,
          background: background
        });
        this.operatorListIdx = 0;
        this.graphicsReady = true;
        if (this.graphicsReadyCallback) {
          this.graphicsReadyCallback();
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.running = false;
        this.cancelled = true;
        if (this.gfx) {
          this.gfx.endDrawing();
        }
        if (this._canvas) {
          canvasInRendering["delete"](this._canvas);
        }
        this.callback(error || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex + 1), "canvas"));
      }
    }, {
      key: "operatorListChanged",
      value: function operatorListChanged() {
        if (!this.graphicsReady) {
          if (!this.graphicsReadyCallback) {
            this.graphicsReadyCallback = this._continueBound;
          }
          return;
        }
        if (this.stepper) {
          this.stepper.updateOperatorList(this.operatorList);
        }
        if (this.running) {
          return;
        }
        this._continue();
      }
    }, {
      key: "_continue",
      value: function _continue() {
        this.running = true;
        if (this.cancelled) {
          return;
        }
        if (this.task.onContinue) {
          this.task.onContinue(this._scheduleNextBound);
        } else {
          this._scheduleNext();
        }
      }
    }, {
      key: "_scheduleNext",
      value: function _scheduleNext() {
        var _this16 = this;
        if (this._useRequestAnimationFrame) {
          window.requestAnimationFrame(function () {
            _this16._nextBound()["catch"](_this16.cancel.bind(_this16));
          });
        } else {
          Promise.resolve().then(this._nextBound)["catch"](this.cancel.bind(this));
        }
      }
    }, {
      key: "_next",
      value: function () {
        var _next2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.cancelled) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
                if (this.operatorListIdx === this.operatorList.argsArray.length) {
                  this.running = false;
                  if (this.operatorList.lastChunk) {
                    this.gfx.endDrawing();
                    if (this._canvas) {
                      canvasInRendering["delete"](this._canvas);
                    }
                    this.callback();
                  }
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function _next() {
          return _next2.apply(this, arguments);
        }
        return _next;
      }()
    }]);
  }();
  return InternalRenderTask;
}();
var version = exports.version = '2.7.39';
var build = exports.build = '4dcdae2e5';

/***/ }),
/* 188 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FontLoader = exports.FontFaceObject = void 0;
var _util = __w_pdfjs_require__(2);
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BaseFontLoader = /*#__PURE__*/function () {
  function BaseFontLoader(_ref) {
    var docId = _ref.docId,
      onUnsupportedFeature = _ref.onUnsupportedFeature,
      _ref$ownerDocument = _ref.ownerDocument,
      ownerDocument = _ref$ownerDocument === void 0 ? globalThis.document : _ref$ownerDocument;
    _classCallCheck(this, BaseFontLoader);
    if (this.constructor === BaseFontLoader) {
      (0, _util.unreachable)("Cannot initialize BaseFontLoader.");
    }
    this.docId = docId;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this._document = ownerDocument;
    this.nativeFontFaces = [];
    this.styleElement = null;
  }
  return _createClass(BaseFontLoader, [{
    key: "addNativeFontFace",
    value: function addNativeFontFace(nativeFontFace) {
      this.nativeFontFaces.push(nativeFontFace);
      this._document.fonts.add(nativeFontFace);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule) {
      var styleElement = this.styleElement;
      if (!styleElement) {
        styleElement = this.styleElement = this._document.createElement("style");
        styleElement.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId);
        this._document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement);
      }
      var styleSheet = styleElement.sheet;
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this = this;
      this.nativeFontFaces.forEach(function (nativeFontFace) {
        _this._document.fonts["delete"](nativeFontFace);
      });
      this.nativeFontFaces.length = 0;
      if (this.styleElement) {
        this.styleElement.remove();
        this.styleElement = null;
      }
    }
  }, {
    key: "bind",
    value: function () {
      var _bind = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(font) {
        var _this2 = this;
        var nativeFontFace, rule;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(font.attached || font.missingFile)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              font.attached = true;
              if (!this.isFontLoadingAPISupported) {
                _context.next = 19;
                break;
              }
              nativeFontFace = font.createNativeFontFace();
              if (!nativeFontFace) {
                _context.next = 18;
                break;
              }
              this.addNativeFontFace(nativeFontFace);
              _context.prev = 7;
              _context.next = 10;
              return nativeFontFace.loaded;
            case 10:
              _context.next = 18;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](7);
              this._onUnsupportedFeature({
                featureId: _util.UNSUPPORTED_FEATURES.errorFontLoadNative
              });
              (0, _util.warn)("Failed to load font '".concat(nativeFontFace.family, "': '").concat(_context.t0, "'."));
              font.disableFontFace = true;
              throw _context.t0;
            case 18:
              return _context.abrupt("return");
            case 19:
              rule = font.createFontFaceRule();
              if (!rule) {
                _context.next = 26;
                break;
              }
              this.insertRule(rule);
              if (!this.isSyncFontLoadingSupported) {
                _context.next = 24;
                break;
              }
              return _context.abrupt("return");
            case 24:
              _context.next = 26;
              return new Promise(function (resolve) {
                var request = _this2._queueLoadingCallback(resolve);
                _this2._prepareFontLoadEvent([rule], [font], request);
              });
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[7, 12]]);
      }));
      function bind(_x) {
        return _bind.apply(this, arguments);
      }
      return bind;
    }()
  }, {
    key: "_queueLoadingCallback",
    value: function _queueLoadingCallback(callback) {
      (0, _util.unreachable)("Abstract method `_queueLoadingCallback`.");
    }
  }, {
    key: "isFontLoadingAPISupported",
    get: function get() {
      var _this$_document;
      return (0, _util.shadow)(this, "isFontLoadingAPISupported", !!((_this$_document = this._document) !== null && _this$_document !== void 0 && _this$_document.fonts));
    }
  }, {
    key: "isSyncFontLoadingSupported",
    get: function get() {
      (0, _util.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
    }
  }, {
    key: "_loadTestFont",
    get: function get() {
      (0, _util.unreachable)("Abstract method `_loadTestFont`.");
    }
  }, {
    key: "_prepareFontLoadEvent",
    value: function _prepareFontLoadEvent(rules, fontsToLoad, request) {
      (0, _util.unreachable)("Abstract method `_prepareFontLoadEvent`.");
    }
  }]);
}();
var FontLoader;
{
  exports.FontLoader = FontLoader = /*#__PURE__*/function (_BaseFontLoader) {
    function GenericFontLoader(params) {
      var _this3;
      _classCallCheck(this, GenericFontLoader);
      _this3 = _callSuper(this, GenericFontLoader, [params]);
      _this3.loadingContext = {
        requests: [],
        nextRequestId: 0
      };
      _this3.loadTestFontId = 0;
      return _this3;
    }
    _inherits(GenericFontLoader, _BaseFontLoader);
    return _createClass(GenericFontLoader, [{
      key: "isSyncFontLoadingSupported",
      get: function get() {
        var supported = false;
        if (typeof navigator === "undefined") {
          supported = true;
        } else {
          var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
          if ((m === null || m === void 0 ? void 0 : m[1]) >= 14) {
            supported = true;
          }
        }
        return (0, _util.shadow)(this, "isSyncFontLoadingSupported", supported);
      }
    }, {
      key: "_queueLoadingCallback",
      value: function _queueLoadingCallback(callback) {
        function completeRequest() {
          (0, _util.assert)(!request.done, "completeRequest() cannot be called twice.");
          request.done = true;
          while (context.requests.length > 0 && context.requests[0].done) {
            var otherRequest = context.requests.shift();
            setTimeout(otherRequest.callback, 0);
          }
        }
        var context = this.loadingContext;
        var request = {
          id: "pdfjs-font-loading-".concat(context.nextRequestId++),
          done: false,
          complete: completeRequest,
          callback: callback
        };
        context.requests.push(request);
        return request;
      }
    }, {
      key: "_loadTestFont",
      get: function get() {
        var getLoadTestFont = function getLoadTestFont() {
          return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
        };
        return (0, _util.shadow)(this, "_loadTestFont", getLoadTestFont());
      }
    }, {
      key: "_prepareFontLoadEvent",
      value: function _prepareFontLoadEvent(rules, fonts, request) {
        var _this4 = this;
        function int32(data, offset) {
          return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
        }
        function spliceString(s, offset, remove, insert) {
          var chunk1 = s.substring(0, offset);
          var chunk2 = s.substring(offset + remove);
          return chunk1 + insert + chunk2;
        }
        var i, ii;
        var canvas = this._document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        var ctx = canvas.getContext("2d");
        var called = 0;
        function isFontReady(name, callback) {
          called++;
          if (called > 30) {
            (0, _util.warn)("Load test font never loaded.");
            callback();
            return;
          }
          ctx.font = "30px " + name;
          ctx.fillText(".", 0, 20);
          var imageData = ctx.getImageData(0, 0, 1, 1);
          if (imageData.data[3] > 0) {
            callback();
            return;
          }
          setTimeout(isFontReady.bind(null, name, callback));
        }
        var loadTestFontId = "lt".concat(Date.now()).concat(this.loadTestFontId++);
        var data = this._loadTestFont;
        var COMMENT_OFFSET = 976;
        data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
        var CFF_CHECKSUM_OFFSET = 16;
        var XXXX_VALUE = 0x58585858;
        var checksum = int32(data, CFF_CHECKSUM_OFFSET);
        for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
        }
        if (i < loadTestFontId.length) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
        }
        data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
        var url = "url(data:font/opentype;base64,".concat(btoa(data), ");");
        var rule = "@font-face {font-family:\"".concat(loadTestFontId, "\";src:").concat(url, "}");
        this.insertRule(rule);
        var names = [];
        for (i = 0, ii = fonts.length; i < ii; i++) {
          names.push(fonts[i].loadedName);
        }
        names.push(loadTestFontId);
        var div = this._document.createElement("div");
        div.style.visibility = "hidden";
        div.style.width = div.style.height = "10px";
        div.style.position = "absolute";
        div.style.top = div.style.left = "0px";
        for (i = 0, ii = names.length; i < ii; ++i) {
          var span = this._document.createElement("span");
          span.textContent = "Hi";
          span.style.fontFamily = names[i];
          div.appendChild(span);
        }
        this._document.body.appendChild(div);
        isFontReady(loadTestFontId, function () {
          _this4._document.body.removeChild(div);
          request.complete();
        });
      }
    }]);
  }(BaseFontLoader);
}
var FontFaceObject = exports.FontFaceObject = /*#__PURE__*/function () {
  function FontFaceObject(translatedData, _ref2) {
    var _ref2$isEvalSupported = _ref2.isEvalSupported,
      isEvalSupported = _ref2$isEvalSupported === void 0 ? true : _ref2$isEvalSupported,
      _ref2$disableFontFace = _ref2.disableFontFace,
      disableFontFace = _ref2$disableFontFace === void 0 ? false : _ref2$disableFontFace,
      _ref2$ignoreErrors = _ref2.ignoreErrors,
      ignoreErrors = _ref2$ignoreErrors === void 0 ? false : _ref2$ignoreErrors,
      _ref2$onUnsupportedFe = _ref2.onUnsupportedFeature,
      onUnsupportedFeature = _ref2$onUnsupportedFe === void 0 ? null : _ref2$onUnsupportedFe,
      _ref2$fontRegistry = _ref2.fontRegistry,
      fontRegistry = _ref2$fontRegistry === void 0 ? null : _ref2$fontRegistry;
    _classCallCheck(this, FontFaceObject);
    this.compiledGlyphs = Object.create(null);
    for (var i in translatedData) {
      this[i] = translatedData[i];
    }
    this.isEvalSupported = isEvalSupported !== false;
    this.disableFontFace = disableFontFace === true;
    this.ignoreErrors = ignoreErrors === true;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this.fontRegistry = fontRegistry;
  }
  return _createClass(FontFaceObject, [{
    key: "createNativeFontFace",
    value: function createNativeFontFace() {
      if (!this.data || this.disableFontFace) {
        return null;
      }
      var nativeFontFace = new FontFace(this.loadedName, this.data, {});
      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this);
      }
      return nativeFontFace;
    }
  }, {
    key: "createFontFaceRule",
    value: function createFontFaceRule() {
      if (!this.data || this.disableFontFace) {
        return null;
      }
      var data = (0, _util.bytesToString)(new Uint8Array(this.data));
      var url = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(data), ");");
      var rule = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(url, "}");
      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this, url);
      }
      return rule;
    }
  }, {
    key: "getPathGenerator",
    value: function getPathGenerator(objs, character) {
      if (this.compiledGlyphs[character] !== undefined) {
        return this.compiledGlyphs[character];
      }
      var cmds, current;
      try {
        cmds = objs.get(this.loadedName + "_path_" + character);
      } catch (ex) {
        if (!this.ignoreErrors) {
          throw ex;
        }
        if (this._onUnsupportedFeature) {
          this._onUnsupportedFeature({
            featureId: _util.UNSUPPORTED_FEATURES.errorFontGetPath
          });
        }
        (0, _util.warn)("getPathGenerator - ignoring character: \"".concat(ex, "\"."));
        return this.compiledGlyphs[character] = function (c, size) {};
      }
      if (this.isEvalSupported && _util.IsEvalSupportedCached.value) {
        var args,
          js = "";
        for (var i = 0, ii = cmds.length; i < ii; i++) {
          current = cmds[i];
          if (current.args !== undefined) {
            args = current.args.join(",");
          } else {
            args = "";
          }
          js += "c." + current.cmd + "(" + args + ");\n";
        }
        return this.compiledGlyphs[character] = new Function("c", "size", js);
      }
      return this.compiledGlyphs[character] = function (c, size) {
        for (var _i = 0, _ii = cmds.length; _i < _ii; _i++) {
          current = cmds[_i];
          if (current.cmd === "scale") {
            current.args = [size, -size];
          }
          c[current.cmd].apply(c, current.args);
        }
      };
    }
  }]);
}();

/***/ }),
/* 189 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NodeCanvasFactory = exports.NodeCMapReaderFactory = void 0;
var _display_utils = __w_pdfjs_require__(1);
var _is_node = __w_pdfjs_require__(4);
var _util = __w_pdfjs_require__(2);
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var NodeCanvasFactory = exports.NodeCanvasFactory = /*#__PURE__*/_createClass(function NodeCanvasFactory() {
  _classCallCheck(this, NodeCanvasFactory);
  (0, _util.unreachable)("Not implemented: NodeCanvasFactory");
});
var NodeCMapReaderFactory = exports.NodeCMapReaderFactory = /*#__PURE__*/_createClass(function NodeCMapReaderFactory() {
  _classCallCheck(this, NodeCMapReaderFactory);
  (0, _util.unreachable)("Not implemented: NodeCMapReaderFactory");
});
if (_is_node.isNodeJS) {
  exports.NodeCanvasFactory = NodeCanvasFactory = /*#__PURE__*/function (_BaseCanvasFactory) {
    function NodeCanvasFactory() {
      _classCallCheck(this, NodeCanvasFactory);
      return _callSuper(this, NodeCanvasFactory, arguments);
    }
    _inherits(NodeCanvasFactory, _BaseCanvasFactory);
    return _createClass(NodeCanvasFactory, [{
      key: "create",
      value: function create(width, height) {
        if (width <= 0 || height <= 0) {
          throw new Error("Invalid canvas size");
        }
        var Canvas = require("canvas");
        var canvas = Canvas.createCanvas(width, height);
        return {
          canvas: canvas,
          context: canvas.getContext("2d")
        };
      }
    }]);
  }(_display_utils.BaseCanvasFactory);
  exports.NodeCMapReaderFactory = NodeCMapReaderFactory = /*#__PURE__*/function (_BaseCMapReaderFactor) {
    function NodeCMapReaderFactory() {
      _classCallCheck(this, NodeCMapReaderFactory);
      return _callSuper(this, NodeCMapReaderFactory, arguments);
    }
    _inherits(NodeCMapReaderFactory, _BaseCMapReaderFactor);
    return _createClass(NodeCMapReaderFactory, [{
      key: "_fetchData",
      value: function _fetchData(url, compressionType) {
        return new Promise(function (resolve, reject) {
          var fs = require("fs");
          fs.readFile(url, function (error, data) {
            if (error || !data) {
              reject(new Error(error));
              return;
            }
            resolve({
              cMapData: new Uint8Array(data),
              compressionType: compressionType
            });
          });
        });
      }
    }]);
  }(_display_utils.BaseCMapReaderFactory);
}

/***/ }),
/* 190 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AnnotationStorage = void 0;
var _util = __w_pdfjs_require__(2);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AnnotationStorage = exports.AnnotationStorage = /*#__PURE__*/function () {
  function AnnotationStorage() {
    _classCallCheck(this, AnnotationStorage);
    this._storage = new Map();
    this._modified = false;
    this.onSetModified = null;
    this.onResetModified = null;
  }
  return _createClass(AnnotationStorage, [{
    key: "getOrCreateValue",
    value: function getOrCreateValue(key, defaultValue) {
      if (this._storage.has(key)) {
        return this._storage.get(key);
      }
      this._storage.set(key, defaultValue);
      return defaultValue;
    }
  }, {
    key: "setValue",
    value: function setValue(key, value) {
      var obj = this._storage.get(key);
      var modified = false;
      if (obj !== undefined) {
        for (var _i = 0, _Object$entries = Object.entries(value); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            entry = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
          if (obj[entry] !== val) {
            modified = true;
            obj[entry] = val;
          }
        }
      } else {
        this._storage.set(key, value);
        modified = true;
      }
      if (modified) {
        this._setModified();
      }
    }
  }, {
    key: "getAll",
    value: function getAll() {
      if (this._storage.size === 0) {
        return null;
      }
      return (0, _util.objectFromEntries)(this._storage);
    }
  }, {
    key: "size",
    get: function get() {
      return this._storage.size;
    }
  }, {
    key: "_setModified",
    value: function _setModified() {
      if (!this._modified) {
        this._modified = true;
        if (typeof this.onSetModified === "function") {
          this.onSetModified();
        }
      }
    }
  }, {
    key: "resetModified",
    value: function resetModified() {
      if (this._modified) {
        this._modified = false;
        if (typeof this.onResetModified === "function") {
          this.onResetModified();
        }
      }
    }
  }]);
}();

/***/ }),
/* 191 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.apiCompatibilityParams = void 0;
var _is_node = __w_pdfjs_require__(4);
var compatibilityParams = Object.create(null);
{
  (function checkFontFace() {
    if (_is_node.isNodeJS) {
      compatibilityParams.disableFontFace = true;
    }
  })();
}
var apiCompatibilityParams = exports.apiCompatibilityParams = Object.freeze(compatibilityParams);

/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CanvasGraphics = void 0;
var _util = __w_pdfjs_require__(2);
var _pattern_helper = __w_pdfjs_require__(193);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var MIN_FONT_SIZE = 16;
var MAX_FONT_SIZE = 100;
var MAX_GROUP_SIZE = 4096;
var COMPILE_TYPE3_GLYPHS = true;
var MAX_SIZE_TO_COMPILE = 1000;
var FULL_CHUNK_HEIGHT = 16;
function addContextCurrentTransform(ctx) {
  if (!ctx.mozCurrentTransform) {
    ctx._originalSave = ctx.save;
    ctx._originalRestore = ctx.restore;
    ctx._originalRotate = ctx.rotate;
    ctx._originalScale = ctx.scale;
    ctx._originalTranslate = ctx.translate;
    ctx._originalTransform = ctx.transform;
    ctx._originalSetTransform = ctx.setTransform;
    ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
    ctx._transformStack = [];
    Object.defineProperty(ctx, "mozCurrentTransform", {
      get: function getCurrentTransform() {
        return this._transformMatrix;
      }
    });
    Object.defineProperty(ctx, "mozCurrentTransformInverse", {
      get: function getCurrentTransformInverse() {
        var m = this._transformMatrix;
        var a = m[0],
          b = m[1],
          c = m[2],
          d = m[3],
          e = m[4],
          f = m[5];
        var ad_bc = a * d - b * c;
        var bc_ad = b * c - a * d;
        return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
      }
    });
    ctx.save = function ctxSave() {
      var old = this._transformMatrix;
      this._transformStack.push(old);
      this._transformMatrix = old.slice(0, 6);
      this._originalSave();
    };
    ctx.restore = function ctxRestore() {
      var prev = this._transformStack.pop();
      if (prev) {
        this._transformMatrix = prev;
        this._originalRestore();
      }
    };
    ctx.translate = function ctxTranslate(x, y) {
      var m = this._transformMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
      this._originalTranslate(x, y);
    };
    ctx.scale = function ctxScale(x, y) {
      var m = this._transformMatrix;
      m[0] = m[0] * x;
      m[1] = m[1] * x;
      m[2] = m[2] * y;
      m[3] = m[3] * y;
      this._originalScale(x, y);
    };
    ctx.transform = function ctxTransform(a, b, c, d, e, f) {
      var m = this._transformMatrix;
      this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];
      ctx._originalTransform(a, b, c, d, e, f);
    };
    ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
      this._transformMatrix = [a, b, c, d, e, f];
      ctx._originalSetTransform(a, b, c, d, e, f);
    };
    ctx.rotate = function ctxRotate(angle) {
      var cosValue = Math.cos(angle);
      var sinValue = Math.sin(angle);
      var m = this._transformMatrix;
      this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];
      this._originalRotate(angle);
    };
  }
}
var CachedCanvases = function CachedCanvasesClosure() {
  function CachedCanvases(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = Object.create(null);
  }
  CachedCanvases.prototype = {
    getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
      var canvasEntry;
      if (this.cache[id] !== undefined) {
        canvasEntry = this.cache[id];
        this.canvasFactory.reset(canvasEntry, width, height);
        canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        canvasEntry = this.canvasFactory.create(width, height);
        this.cache[id] = canvasEntry;
      }
      if (trackTransform) {
        addContextCurrentTransform(canvasEntry.context);
      }
      return canvasEntry;
    },
    clear: function clear() {
      for (var id in this.cache) {
        var canvasEntry = this.cache[id];
        this.canvasFactory.destroy(canvasEntry);
        delete this.cache[id];
      }
    }
  };
  return CachedCanvases;
}();
function compileType3Glyph(imgData) {
  var POINT_TO_PROCESS_LIMIT = 1000;
  var width = imgData.width,
    height = imgData.height,
    width1 = width + 1;
  var i, ii, j, j0;
  var points = new Uint8Array(width1 * (height + 1));
  var POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
  var lineSize = width + 7 & ~7,
    data0 = imgData.data;
  var data = new Uint8Array(lineSize * height);
  var pos = 0;
  for (i = 0, ii = data0.length; i < ii; i++) {
    var elem = data0[i];
    var mask = 128;
    while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
    }
  }
  var count = 0;
  pos = 0;
  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }
  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;
    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }
    var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }
      pos++;
    }
    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }
    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }
  pos = lineSize * (height - 1);
  j0 = i * width1;
  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }
  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }
  var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  var outlines = [];
  for (i = 0; count && i <= height; i++) {
    var p = i * width1;
    var end = p + width;
    while (p < end && !points[p]) {
      p++;
    }
    if (p === end) {
      continue;
    }
    var coords = [p % width1, i];
    var p0 = p;
    var type = points[p];
    do {
      var step = steps[type];
      do {
        p += step;
      } while (!points[p]);
      var pp = points[p];
      if (pp !== 5 && pp !== 10) {
        type = pp;
        points[p] = 0;
      } else {
        type = pp & 0x33 * type >> 4;
        points[p] &= type >> 2 | type << 2;
      }
      coords.push(p % width1);
      coords.push(p / width1 | 0);
      if (!points[p]) {
        --count;
      }
    } while (p0 !== p);
    outlines.push(coords);
    --i;
  }
  var drawOutline = function drawOutline(c) {
    c.save();
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.beginPath();
    for (var k = 0, kk = outlines.length; k < kk; k++) {
      var o = outlines[k];
      c.moveTo(o[0], o[1]);
      for (var l = 2, ll = o.length; l < ll; l += 2) {
        c.lineTo(o[l], o[l + 1]);
      }
    }
    c.fill();
    c.beginPath();
    c.restore();
  };
  return drawOutline;
}
var CanvasExtraState = function CanvasExtraStateClosure() {
  function CanvasExtraState() {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = _util.IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    this.leading = 0;
    this.x = 0;
    this.y = 0;
    this.lineX = 0;
    this.lineY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.textRise = 0;
    this.fillColor = "#000000";
    this.strokeColor = "#000000";
    this.patternFill = false;
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.resumeSMaskCtx = null;
    this.transferMaps = null;
  }
  CanvasExtraState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    }
  };
  return CanvasExtraState;
}();
var CanvasGraphics = exports.CanvasGraphics = function CanvasGraphicsClosure() {
  var EXECUTION_TIME = 15;
  var EXECUTION_STEPS = 10;
  function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer, optionalContentConfig) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState();
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.webGLContext = webGLContext;
    this.imageLayer = imageLayer;
    this.groupStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.contentVisible = true;
    this.markedContentStack = [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    if (canvasCtx) {
      addContextCurrentTransform(canvasCtx);
    }
    this._cachedGetSinglePixelWidth = null;
  }
  function putBinaryImageData(ctx, imgData) {
    var transferMaps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
    }
    var height = imgData.height,
      width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0,
      destPos;
    var src = imgData.data;
    var dest = chunkImgData.data;
    var i, j, thisChunkHeight, elemsInThisChunk;
    var transferMapRed, transferMapGreen, transferMapBlue, transferMapGray;
    if (transferMaps) {
      switch (transferMaps.length) {
        case 1:
          transferMapRed = transferMaps[0];
          transferMapGreen = transferMaps[0];
          transferMapBlue = transferMaps[0];
          transferMapGray = transferMaps[0];
          break;
        case 4:
          transferMapRed = transferMaps[0];
          transferMapGreen = transferMaps[1];
          transferMapBlue = transferMaps[2];
          transferMapGray = transferMaps[3];
          break;
      }
    }
    if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
      var srcLength = src.byteLength;
      var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = width + 7 >> 3;
      var white = 0xffffffff;
      var black = _util.IsLittleEndianCached.value ? 0xff000000 : 0x000000ff;
      if (transferMapGray) {
        if (transferMapGray[0] === 0xff && transferMapGray[0xff] === 0) {
          var _ref = [black, white];
          white = _ref[0];
          black = _ref[1];
        }
      }
      for (i = 0; i < totalChunks; i++) {
        thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
        destPos = 0;
        for (j = 0; j < thisChunkHeight; j++) {
          var srcDiff = srcLength - srcPos;
          var k = 0;
          var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
          var kEndUnrolled = kEnd & ~7;
          var mask = 0;
          var srcByte = 0;
          for (; k < kEndUnrolled; k += 8) {
            srcByte = src[srcPos++];
            dest32[destPos++] = srcByte & 128 ? white : black;
            dest32[destPos++] = srcByte & 64 ? white : black;
            dest32[destPos++] = srcByte & 32 ? white : black;
            dest32[destPos++] = srcByte & 16 ? white : black;
            dest32[destPos++] = srcByte & 8 ? white : black;
            dest32[destPos++] = srcByte & 4 ? white : black;
            dest32[destPos++] = srcByte & 2 ? white : black;
            dest32[destPos++] = srcByte & 1 ? white : black;
          }
          for (; k < kEnd; k++) {
            if (mask === 0) {
              srcByte = src[srcPos++];
              mask = 128;
            }
            dest32[destPos++] = srcByte & mask ? white : black;
            mask >>= 1;
          }
        }
        while (destPos < dest32DataLength) {
          dest32[destPos++] = 0;
        }
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
      var hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
      for (i = 0; i < fullChunks; i++) {
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        srcPos += elemsInThisChunk;
        if (hasTransferMaps) {
          for (var _k = 0; _k < elemsInThisChunk; _k += 4) {
            if (transferMapRed) {
              dest[_k + 0] = transferMapRed[dest[_k + 0]];
            }
            if (transferMapGreen) {
              dest[_k + 1] = transferMapGreen[dest[_k + 1]];
            }
            if (transferMapBlue) {
              dest[_k + 2] = transferMapBlue[dest[_k + 2]];
            }
          }
        }
        ctx.putImageData(chunkImgData, 0, j);
        j += FULL_CHUNK_HEIGHT;
      }
      if (i < totalChunks) {
        elemsInThisChunk = width * partialChunkHeight * 4;
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        if (hasTransferMaps) {
          for (var _k2 = 0; _k2 < elemsInThisChunk; _k2 += 4) {
            if (transferMapRed) {
              dest[_k2 + 0] = transferMapRed[dest[_k2 + 0]];
            }
            if (transferMapGreen) {
              dest[_k2 + 1] = transferMapGreen[dest[_k2 + 1]];
            }
            if (transferMapBlue) {
              dest[_k2 + 2] = transferMapBlue[dest[_k2 + 2]];
            }
          }
        }
        ctx.putImageData(chunkImgData, 0, j);
      }
    } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
      var _hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;
      for (i = 0; i < totalChunks; i++) {
        if (i >= fullChunks) {
          thisChunkHeight = partialChunkHeight;
          elemsInThisChunk = width * thisChunkHeight;
        }
        destPos = 0;
        for (j = elemsInThisChunk; j--;) {
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = 255;
        }
        if (_hasTransferMaps) {
          for (var _k3 = 0; _k3 < destPos; _k3 += 4) {
            if (transferMapRed) {
              dest[_k3 + 0] = transferMapRed[dest[_k3 + 0]];
            }
            if (transferMapGreen) {
              dest[_k3 + 1] = transferMapGreen[dest[_k3 + 1]];
            }
            if (transferMapBlue) {
              dest[_k3 + 2] = transferMapBlue[dest[_k3 + 2]];
            }
          }
        }
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else {
      throw new Error("bad image kind: ".concat(imgData.kind));
    }
  }
  function putBinaryImageMask(ctx, imgData) {
    var height = imgData.height,
      width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0;
    var src = imgData.data;
    var dest = chunkImgData.data;
    for (var i = 0; i < totalChunks; i++) {
      var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      var destPos = 3;
      for (var j = 0; j < thisChunkHeight; j++) {
        var elem = void 0,
          mask = 0;
        for (var k = 0; k < width; k++) {
          if (!mask) {
            elem = src[srcPos++];
            mask = 128;
          }
          dest[destPos] = elem & mask ? 0 : 255;
          destPos += 4;
          mask >>= 1;
        }
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  }
  function copyCtxState(sourceCtx, destCtx) {
    var properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
    for (var i = 0, ii = properties.length; i < ii; i++) {
      var property = properties[i];
      if (sourceCtx[property] !== undefined) {
        destCtx[property] = sourceCtx[property];
      }
    }
    if (sourceCtx.setLineDash !== undefined) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset = sourceCtx.lineDashOffset;
    }
  }
  function resetCtxToDefault(ctx) {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.fillRule = "nonzero";
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.miterLimit = 10;
    ctx.globalCompositeOperation = "source-over";
    ctx.font = "10px sans-serif";
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    }
  }
  function composeSMaskBackdrop(bytes, r0, g0, b0) {
    var length = bytes.length;
    for (var i = 3; i < length; i += 4) {
      var alpha = bytes[i];
      if (alpha === 0) {
        bytes[i - 3] = r0;
        bytes[i - 2] = g0;
        bytes[i - 1] = b0;
      } else if (alpha < 255) {
        var alpha_ = 255 - alpha;
        bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
        bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
        bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
      }
    }
  }
  function composeSMaskAlpha(maskData, layerData, transferMap) {
    var length = maskData.length;
    var scale = 1 / 255;
    for (var i = 3; i < length; i += 4) {
      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
      layerData[i] = layerData[i] * alpha * scale | 0;
    }
  }
  function composeSMaskLuminosity(maskData, layerData, transferMap) {
    var length = maskData.length;
    for (var i = 3; i < length; i += 4) {
      var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
      layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
    }
  }
  function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
    var hasBackdrop = !!backdrop;
    var r0 = hasBackdrop ? backdrop[0] : 0;
    var g0 = hasBackdrop ? backdrop[1] : 0;
    var b0 = hasBackdrop ? backdrop[2] : 0;
    var composeFn;
    if (subtype === "Luminosity") {
      composeFn = composeSMaskLuminosity;
    } else {
      composeFn = composeSMaskAlpha;
    }
    var PIXELS_TO_PROCESS = 1048576;
    var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
    for (var row = 0; row < height; row += chunkSize) {
      var chunkHeight = Math.min(chunkSize, height - row);
      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);
      if (hasBackdrop) {
        composeSMaskBackdrop(maskData.data, r0, g0, b0);
      }
      composeFn(maskData.data, layerData.data, transferMap);
      maskCtx.putImageData(layerData, 0, row);
    }
  }
  function composeSMask(ctx, smask, layerCtx, webGLContext) {
    var mask = smask.canvas;
    var maskCtx = smask.context;
    ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
    var backdrop = smask.backdrop || null;
    if (!smask.transferMap && webGLContext.isEnabled) {
      var composed = webGLContext.composeSMask({
        layer: layerCtx.canvas,
        mask: mask,
        properties: {
          subtype: smask.subtype,
          backdrop: backdrop
        }
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
    }
    genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
    ctx.drawImage(mask, 0, 0);
  }
  var LINE_CAP_STYLES = ["butt", "round", "square"];
  var LINE_JOIN_STYLES = ["miter", "round", "bevel"];
  var NORMAL_CLIP = {};
  var EO_CLIP = {};
  CanvasGraphics.prototype = {
    beginDrawing: function beginDrawing(_ref2) {
      var transform = _ref2.transform,
        viewport = _ref2.viewport,
        _ref2$transparency = _ref2.transparency,
        transparency = _ref2$transparency === void 0 ? false : _ref2$transparency,
        _ref2$background = _ref2.background,
        background = _ref2$background === void 0 ? null : _ref2$background;
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.ctx.save();
      this.ctx.fillStyle = background || "rgb(255, 255, 255)";
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();
      if (transparency) {
        var transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height, true);
        this.compositeCtx = this.ctx;
        this.transparentCanvas = transparentCanvas.canvas;
        this.ctx = transparentCanvas.context;
        this.ctx.save();
        this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
      }
      this.ctx.save();
      resetCtxToDefault(this.ctx);
      if (transform) {
        this.ctx.transform.apply(this.ctx, transform);
      }
      this.ctx.transform.apply(this.ctx, viewport.transform);
      this.baseTransform = this.ctx.mozCurrentTransform.slice();
      this._combinedScaleFactor = Math.hypot(this.baseTransform[0], this.baseTransform[2]);
      if (this.imageLayer) {
        this.imageLayer.beginLayout();
      }
    },
    executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;
      if (argsArrayLen === i) {
        return i;
      }
      var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;
      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;
      while (true) {
        if (stepper !== undefined && i === stepper.nextBreakPoint) {
          stepper.breakIt(i, continueCallback);
          return i;
        }
        fnId = fnArray[i];
        if (fnId !== _util.OPS.dependency) {
          this[fnId].apply(this, argsArray[i]);
        } else {
          var _iterator = _createForOfIteratorHelper(argsArray[i]),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var depObjId = _step.value;
              var objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
              if (!objsPool.has(depObjId)) {
                objsPool.get(depObjId, continueCallback);
                return i;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        i++;
        if (i === argsArrayLen) {
          return i;
        }
        if (chunkOperations && ++steps > EXECUTION_STEPS) {
          if (Date.now() > endTime) {
            continueCallback();
            return i;
          }
          steps = 0;
        }
      }
    },
    endDrawing: function CanvasGraphics_endDrawing() {
      while (this.stateStack.length || this.current.activeSMask !== null) {
        this.restore();
      }
      this.ctx.restore();
      if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.transparentCanvas = null;
      }
      this.cachedCanvases.clear();
      this.webGLContext.clear();
      if (this.imageLayer) {
        this.imageLayer.endLayout();
      }
    },
    setLineWidth: function CanvasGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
      this.ctx.lineWidth = width;
    },
    setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
    },
    setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
      var ctx = this.ctx;
      if (ctx.setLineDash !== undefined) {
        ctx.setLineDash(dashArray);
        ctx.lineDashOffset = dashPhase;
      }
    },
    setRenderingIntent: function setRenderingIntent(intent) {},
    setFlatness: function setFlatness(flatness) {},
    setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];
        switch (key) {
          case "LW":
            this.setLineWidth(value);
            break;
          case "LC":
            this.setLineCap(value);
            break;
          case "LJ":
            this.setLineJoin(value);
            break;
          case "ML":
            this.setMiterLimit(value);
            break;
          case "D":
            this.setDash(value[0], value[1]);
            break;
          case "RI":
            this.setRenderingIntent(value);
            break;
          case "FL":
            this.setFlatness(value);
            break;
          case "Font":
            this.setFont(value[0], value[1]);
            break;
          case "CA":
            this.current.strokeAlpha = state[1];
            break;
          case "ca":
            this.current.fillAlpha = state[1];
            this.ctx.globalAlpha = state[1];
            break;
          case "BM":
            this.ctx.globalCompositeOperation = value;
            break;
          case "SMask":
            if (this.current.activeSMask) {
              if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                this.suspendSMaskGroup();
              } else {
                this.endSMaskGroup();
              }
            }
            this.current.activeSMask = value ? this.tempSMask : null;
            if (this.current.activeSMask) {
              this.beginSMaskGroup();
            }
            this.tempSMask = null;
            break;
          case "TR":
            this.current.transferMaps = value;
        }
      }
    },
    beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
      var activeSMask = this.current.activeSMask;
      var drawnWidth = activeSMask.canvas.width;
      var drawnHeight = activeSMask.canvas.height;
      var cacheId = "smaskGroupAt" + this.groupLevel;
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var currentCtx = this.ctx;
      var currentTransform = currentCtx.mozCurrentTransform;
      this.ctx.save();
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
      this.ctx.restore();
      this.ctx.save();
      copyCtxState(groupCtx, this.ctx);
      this.current.resumeSMaskCtx = groupCtx;
      var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
      groupCtx.restore();
    },
    resumeSMaskGroup: function CanvasGraphics_resumeSMaskGroup() {
      var groupCtx = this.current.resumeSMaskCtx;
      var currentCtx = this.ctx;
      this.ctx = groupCtx;
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
      this.ctx.restore();
      copyCtxState(groupCtx, this.ctx);
      var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
    },
    save: function CanvasGraphics_save() {
      this.ctx.save();
      var old = this.current;
      this.stateStack.push(old);
      this.current = old.clone();
      this.current.resumeSMaskCtx = null;
    },
    restore: function CanvasGraphics_restore() {
      if (this.current.resumeSMaskCtx) {
        this.resumeSMaskGroup();
      }
      if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
        this.endSMaskGroup();
      }
      if (this.stateStack.length !== 0) {
        this.current = this.stateStack.pop();
        this.ctx.restore();
        this.pendingClip = null;
        this._cachedGetSinglePixelWidth = null;
      } else {
        this.current.activeSMask = null;
      }
    },
    transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
      this.ctx.transform(a, b, c, d, e, f);
      this._cachedGetSinglePixelWidth = null;
    },
    constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x,
        y = current.y;
      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
        switch (ops[i] | 0) {
          case _util.OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];
            var xw = x + width;
            var yh = y + height;
            ctx.moveTo(x, y);
            if (width === 0 || height === 0) {
              ctx.lineTo(xw, yh);
            } else {
              ctx.lineTo(xw, y);
              ctx.lineTo(xw, yh);
              ctx.lineTo(x, yh);
            }
            ctx.closePath();
            break;
          case _util.OPS.moveTo:
            x = args[j++];
            y = args[j++];
            ctx.moveTo(x, y);
            break;
          case _util.OPS.lineTo:
            x = args[j++];
            y = args[j++];
            ctx.lineTo(x, y);
            break;
          case _util.OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
            j += 6;
            break;
          case _util.OPS.curveTo2:
            ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
            x = args[j + 2];
            y = args[j + 3];
            j += 4;
            break;
          case _util.OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
            j += 4;
            break;
          case _util.OPS.closePath:
            ctx.closePath();
            break;
        }
      }
      current.setCurrentPoint(x, y);
    },
    closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
    },
    stroke: function CanvasGraphics_stroke(consumePath) {
      consumePath = typeof consumePath !== "undefined" ? consumePath : true;
      var ctx = this.ctx;
      var strokeColor = this.current.strokeColor;
      ctx.globalAlpha = this.current.strokeAlpha;
      if (this.contentVisible) {
        if (_typeof(strokeColor) === "object" && strokeColor !== null && strokeColor !== void 0 && strokeColor.getPattern) {
          ctx.save();
          var transform = ctx.mozCurrentTransform;
          var scale = _util.Util.singularValueDecompose2dScale(transform)[0];
          ctx.strokeStyle = strokeColor.getPattern(ctx, this);
          var lineWidth = this.getSinglePixelWidth();
          var scaledLineWidth = this.current.lineWidth * scale;
          if (lineWidth < 0 && -lineWidth >= scaledLineWidth) {
            ctx.resetTransform();
            ctx.lineWidth = Math.round(this._combinedScaleFactor);
          } else {
            ctx.lineWidth = Math.max(lineWidth, scaledLineWidth);
          }
          ctx.stroke();
          ctx.restore();
        } else {
          var _lineWidth = this.getSinglePixelWidth();
          if (_lineWidth < 0 && -_lineWidth >= this.current.lineWidth) {
            ctx.save();
            ctx.resetTransform();
            ctx.lineWidth = Math.round(this._combinedScaleFactor);
            ctx.stroke();
            ctx.restore();
          } else {
            ctx.lineWidth = Math.max(_lineWidth, this.current.lineWidth);
            ctx.stroke();
          }
        }
      }
      if (consumePath) {
        this.consumePath();
      }
      ctx.globalAlpha = this.current.fillAlpha;
    },
    closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },
    fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== "undefined" ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;
      if (isPatternFill) {
        ctx.save();
        if (this.baseTransform) {
          ctx.setTransform.apply(ctx, this.baseTransform);
        }
        ctx.fillStyle = fillColor.getPattern(ctx, this);
        needRestore = true;
      }
      if (this.contentVisible) {
        if (this.pendingEOFill) {
          ctx.fill("evenodd");
          this.pendingEOFill = false;
        } else {
          ctx.fill();
        }
      }
      if (needRestore) {
        ctx.restore();
      }
      if (consumePath) {
        this.consumePath();
      }
    },
    eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
    },
    fillStroke: function CanvasGraphics_fillStroke() {
      this.fill(false);
      this.stroke(false);
      this.consumePath();
    },
    eoFillStroke: function CanvasGraphics_eoFillStroke() {
      this.pendingEOFill = true;
      this.fillStroke();
    },
    closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },
    closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
      this.pendingEOFill = true;
      this.closePath();
      this.fillStroke();
    },
    endPath: function CanvasGraphics_endPath() {
      this.consumePath();
    },
    clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
    },
    eoClip: function CanvasGraphics_eoClip() {
      this.pendingClip = EO_CLIP;
    },
    beginText: function CanvasGraphics_beginText() {
      this.current.textMatrix = _util.IDENTITY_MATRIX;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    endText: function CanvasGraphics_endText() {
      var paths = this.pendingTextPaths;
      var ctx = this.ctx;
      if (paths === undefined) {
        ctx.beginPath();
        return;
      }
      ctx.save();
      ctx.beginPath();
      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        ctx.setTransform.apply(ctx, path.transform);
        ctx.translate(path.x, path.y);
        path.addToPath(ctx, path.fontSize);
      }
      ctx.restore();
      ctx.clip();
      ctx.beginPath();
      delete this.pendingTextPaths;
    },
    setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
    },
    setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
    },
    setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },
    setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },
    setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;
      if (!fontObj) {
        throw new Error("Can't find font for ".concat(fontRefName));
      }
      current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;
      if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
        (0, _util.warn)("Invalid font matrix for font " + fontRefName);
      }
      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }
      this.current.font = fontObj;
      this.current.fontSize = size;
      if (fontObj.isType3Font) {
        return;
      }
      var name = fontObj.loadedName || "sans-serif";
      var bold = "normal";
      if (fontObj.black) {
        bold = "900";
      } else if (fontObj.bold) {
        bold = "bold";
      }
      var italic = fontObj.italic ? "italic" : "normal";
      var typeface = "\"".concat(name, "\", ").concat(fontObj.fallbackName);
      var browserFontSize = size;
      if (size < MIN_FONT_SIZE) {
        browserFontSize = MIN_FONT_SIZE;
      } else if (size > MAX_FONT_SIZE) {
        browserFontSize = MAX_FONT_SIZE;
      }
      this.current.fontSizeScale = size / browserFontSize;
      this.ctx.font = "".concat(italic, " ").concat(bold, " ").concat(browserFontSize, "px ").concat(typeface);
    },
    setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
    },
    setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
    },
    moveText: function CanvasGraphics_moveText(x, y) {
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
    },
    setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },
    setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
      this.current.textMatrix = [a, b, c, d, e, f];
      this.current.textMatrixScale = Math.sqrt(a * a + b * b);
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },
    paintChar: function paintChar(character, x, y, patternTransform, resetLineWidthToOne) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
      var patternFill = current.patternFill && !font.missingFile;
      var addToPath;
      if (font.disableFontFace || isAddToPathSet || patternFill) {
        addToPath = font.getPathGenerator(this.commonObjs, character);
      }
      if (font.disableFontFace || patternFill) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        addToPath(ctx, fontSize);
        if (patternTransform) {
          ctx.setTransform.apply(ctx, patternTransform);
        }
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fill();
        }
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          if (resetLineWidthToOne) {
            ctx.resetTransform();
            ctx.lineWidth = Math.round(this._combinedScaleFactor);
          }
          ctx.stroke();
        }
        ctx.restore();
      } else {
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fillText(character, x, y);
        }
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          if (resetLineWidthToOne) {
            ctx.save();
            ctx.moveTo(x, y);
            ctx.resetTransform();
            ctx.lineWidth = Math.round(this._combinedScaleFactor);
            ctx.strokeText(character, 0, 0);
            ctx.restore();
          } else {
            ctx.strokeText(character, x, y);
          }
        }
      }
      if (isAddToPathSet) {
        var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
        paths.push({
          transform: ctx.mozCurrentTransform,
          x: x,
          y: y,
          fontSize: fontSize,
          addToPath: addToPath
        });
      }
    },
    get isFontSubpixelAAEnabled() {
      var _this$cachedCanvases$ = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10),
        ctx = _this$cachedCanvases$.context;
      ctx.scale(1.5, 1);
      ctx.fillText("I", 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;
      for (var i = 3; i < data.length; i += 4) {
        if (data[i] > 0 && data[i] < 255) {
          enabled = true;
          break;
        }
      }
      return (0, _util.shadow)(this, "isFontSubpixelAAEnabled", enabled);
    },
    showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      if (font.isType3Font) {
        return this.showType3Text(glyphs);
      }
      var fontSize = current.fontSize;
      if (fontSize === 0) {
        return undefined;
      }
      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
      ctx.save();
      var patternTransform;
      if (current.patternFill) {
        ctx.save();
        var pattern = current.fillColor.getPattern(ctx, this);
        patternTransform = ctx.mozCurrentTransform;
        ctx.restore();
        ctx.fillStyle = pattern;
      }
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);
      if (fontDirection > 0) {
        ctx.scale(textHScale, -1);
      } else {
        ctx.scale(textHScale, 1);
      }
      var lineWidth = current.lineWidth;
      var resetLineWidthToOne = false;
      var scale = current.textMatrixScale;
      if (scale === 0 || lineWidth === 0) {
        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          this._cachedGetSinglePixelWidth = null;
          lineWidth = this.getSinglePixelWidth();
          resetLineWidthToOne = lineWidth < 0;
        }
      } else {
        lineWidth /= scale;
      }
      if (fontSizeScale !== 1.0) {
        ctx.scale(fontSizeScale, fontSizeScale);
        lineWidth /= fontSizeScale;
      }
      ctx.lineWidth = lineWidth;
      var x = 0,
        i;
      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];
        if ((0, _util.isNum)(glyph)) {
          x += spacingDir * glyph * fontSize / 1000;
          continue;
        }
        var restoreNeeded = false;
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var character = glyph.fontChar;
        var accent = glyph.accent;
        var scaledX = void 0,
          scaledY = void 0;
        var width = glyph.width;
        if (vertical) {
          var vmetric = glyph.vmetric || defaultVMetrics;
          var vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
          var vy = vmetric[2] * widthAdvanceScale;
          width = vmetric ? -vmetric[0] : width;
          scaledX = vx / fontSizeScale;
          scaledY = (x + vy) / fontSizeScale;
        } else {
          scaledX = x / fontSizeScale;
          scaledY = 0;
        }
        if (font.remeasure && width > 0) {
          var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
          if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
            var characterScaleX = width / measuredWidth;
            restoreNeeded = true;
            ctx.save();
            ctx.scale(characterScaleX, 1);
            scaledX /= characterScaleX;
          } else if (width !== measuredWidth) {
            scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
          }
        }
        if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
          if (simpleFillText && !accent) {
            ctx.fillText(character, scaledX, scaledY);
          } else {
            this.paintChar(character, scaledX, scaledY, patternTransform, resetLineWidthToOne);
            if (accent) {
              var scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
              var scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
              this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform, resetLineWidthToOne);
            }
          }
        }
        var charWidth = void 0;
        if (vertical) {
          charWidth = width * widthAdvanceScale - spacing * fontDirection;
        } else {
          charWidth = width * widthAdvanceScale + spacing * fontDirection;
        }
        x += charWidth;
        if (restoreNeeded) {
          ctx.restore();
        }
      }
      if (vertical) {
        current.y -= x;
      } else {
        current.x += x * textHScale;
      }
      ctx.restore();
    },
    showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;
      if (isTextInvisible || fontSize === 0) {
        return;
      }
      this._cachedGetSinglePixelWidth = null;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);
      ctx.scale(textHScale, fontDirection);
      for (i = 0; i < glyphsLength; ++i) {
        glyph = glyphs[i];
        if ((0, _util.isNum)(glyph)) {
          spacingLength = spacingDir * glyph * fontSize / 1000;
          this.ctx.translate(spacingLength, 0);
          current.x += spacingLength * textHScale;
          continue;
        }
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var operatorList = font.charProcOperatorList[glyph.operatorListId];
        if (!operatorList) {
          (0, _util.warn)("Type3 character \"".concat(glyph.operatorListId, "\" is not available."));
          continue;
        }
        if (this.contentVisible) {
          this.processingType3 = glyph;
          this.save();
          ctx.scale(fontSize, fontSize);
          ctx.transform.apply(ctx, fontMatrix);
          this.executeOperatorList(operatorList);
          this.restore();
        }
        var transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);
        width = transformed[0] * fontSize + spacing;
        ctx.translate(width, 0);
        current.x += width * textHScale;
      }
      ctx.restore();
      this.processingType3 = null;
    },
    setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
    setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
      this.ctx.rect(llx, lly, urx - llx, ury - lly);
      this.clip();
      this.endPath();
    },
    getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var _this = this;
      var pattern;
      if (IR[0] === "TilingPattern") {
        var color = IR[1];
        var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
        var canvasGraphicsFactory = {
          createCanvasGraphics: function createCanvasGraphics(ctx) {
            return new CanvasGraphics(ctx, _this.commonObjs, _this.objs, _this.canvasFactory, _this.webGLContext);
          }
        };
        pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
      } else {
        pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
      }
      return pattern;
    },
    setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
      this.current.strokeColor = this.getColorN_Pattern(arguments);
    },
    setFillColorN: function CanvasGraphics_setFillColorN() {
      this.current.fillColor = this.getColorN_Pattern(arguments);
      this.current.patternFill = true;
    },
    setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
      var color = _util.Util.makeHexColor(r, g, b);
      this.ctx.strokeStyle = color;
      this.current.strokeColor = color;
    },
    setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = _util.Util.makeHexColor(r, g, b);
      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
    },
    shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      if (!this.contentVisible) {
        return;
      }
      var ctx = this.ctx;
      this.save();
      var pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);
      var inv = ctx.mozCurrentTransformInverse;
      if (inv) {
        var canvas = ctx.canvas;
        var width = canvas.width;
        var height = canvas.height;
        var bl = _util.Util.applyTransform([0, 0], inv);
        var br = _util.Util.applyTransform([0, height], inv);
        var ul = _util.Util.applyTransform([width, 0], inv);
        var ur = _util.Util.applyTransform([width, height], inv);
        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
        this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }
      this.restore();
    },
    beginInlineImage: function CanvasGraphics_beginInlineImage() {
      (0, _util.unreachable)("Should not call beginInlineImage");
    },
    beginImageData: function CanvasGraphics_beginImageData() {
      (0, _util.unreachable)("Should not call beginImageData");
    },
    paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
      if (!this.contentVisible) {
        return;
      }
      this.save();
      this.baseTransformStack.push(this.baseTransform);
      if (Array.isArray(matrix) && matrix.length === 6) {
        this.transform.apply(this, matrix);
      }
      this.baseTransform = this.ctx.mozCurrentTransform;
      if (bbox) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];
        this.ctx.rect(bbox[0], bbox[1], width, height);
        this.clip();
        this.endPath();
      }
    },
    paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
      if (!this.contentVisible) {
        return;
      }
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
    },
    beginGroup: function CanvasGraphics_beginGroup(group) {
      if (!this.contentVisible) {
        return;
      }
      this.save();
      var currentCtx = this.ctx;
      if (!group.isolated) {
        (0, _util.info)("TODO: Support non-isolated groups.");
      }
      if (group.knockout) {
        (0, _util.warn)("Knockout groups not supported.");
      }
      var currentTransform = currentCtx.mozCurrentTransform;
      if (group.matrix) {
        currentCtx.transform.apply(currentCtx, group.matrix);
      }
      if (!group.bbox) {
        throw new Error("Bounding box is required.");
      }
      var bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
      var canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
      bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1,
        scaleY = 1;
      if (drawnWidth > MAX_GROUP_SIZE) {
        scaleX = drawnWidth / MAX_GROUP_SIZE;
        drawnWidth = MAX_GROUP_SIZE;
      }
      if (drawnHeight > MAX_GROUP_SIZE) {
        scaleY = drawnHeight / MAX_GROUP_SIZE;
        drawnHeight = MAX_GROUP_SIZE;
      }
      var cacheId = "groupAt" + this.groupLevel;
      if (group.smask) {
        cacheId += "_smask_" + this.smaskCounter++ % 2;
      }
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      if (group.smask) {
        this.smaskStack.push({
          canvas: scratchCanvas.canvas,
          context: groupCtx,
          offsetX: offsetX,
          offsetY: offsetY,
          scaleX: scaleX,
          scaleY: scaleY,
          subtype: group.smask.subtype,
          backdrop: group.smask.backdrop,
          transferMap: group.smask.transferMap || null,
          startTransformInverse: null
        });
      } else {
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
      }
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
      this.current.activeSMask = null;
    },
    endGroup: function CanvasGraphics_endGroup(group) {
      if (!this.contentVisible) {
        return;
      }
      this.groupLevel--;
      var groupCtx = this.ctx;
      this.ctx = this.groupStack.pop();
      if (this.ctx.imageSmoothingEnabled !== undefined) {
        this.ctx.imageSmoothingEnabled = false;
      } else {
        this.ctx.mozImageSmoothingEnabled = false;
      }
      if (group.smask) {
        this.tempSMask = this.smaskStack.pop();
      } else {
        this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }
      this.restore();
    },
    beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();
      if (this.baseTransform) {
        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
    },
    endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
    },
    beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
      this.save();
      resetCtxToDefault(this.ctx);
      this.current = new CanvasExtraState();
      if (Array.isArray(rect) && rect.length === 4) {
        var width = rect[2] - rect[0];
        var height = rect[3] - rect[1];
        this.ctx.rect(rect[0], rect[1], width, height);
        this.clip();
        this.endPath();
      }
      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
    },
    endAnnotation: function CanvasGraphics_endAnnotation() {
      this.restore();
    },
    paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
      if (!this.contentVisible) {
        return;
      }
      var ctx = this.ctx;
      var width = img.width,
        height = img.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var glyph = this.processingType3;
      if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
        if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
          glyph.compiled = compileType3Glyph({
            data: img.data,
            width: width,
            height: height
          });
        } else {
          glyph.compiled = null;
        }
      }
      if (glyph !== null && glyph !== void 0 && glyph.compiled) {
        glyph.compiled(ctx);
        return;
      }
      var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = "source-in";
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      this.paintInlineImageXObject(maskCanvas.canvas);
    },
    paintImageMaskXObjectRepeat: function paintImageMaskXObjectRepeat(imgData, scaleX) {
      var skewX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var skewY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var scaleY = arguments.length > 4 ? arguments[4] : undefined;
      var positions = arguments.length > 5 ? arguments[5] : undefined;
      if (!this.contentVisible) {
        return;
      }
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, imgData);
      maskCtx.globalCompositeOperation = "source-in";
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      var ctx = this.ctx;
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        ctx.save();
        ctx.transform(scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
        ctx.restore();
      }
    },
    paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
      if (!this.contentVisible) {
        return;
      }
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      for (var i = 0, ii = images.length; i < ii; i++) {
        var image = images[i];
        var width = image.width,
          height = image.height;
        var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
        var maskCtx = maskCanvas.context;
        maskCtx.save();
        putBinaryImageMask(maskCtx, image);
        maskCtx.globalCompositeOperation = "source-in";
        maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
        maskCtx.fillRect(0, 0, width, height);
        maskCtx.restore();
        ctx.save();
        ctx.transform.apply(ctx, image.transform);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
        ctx.restore();
      }
    },
    paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      if (!this.contentVisible) {
        return;
      }
      var imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);
      if (!imgData) {
        (0, _util.warn)("Dependent image isn't ready yet");
        return;
      }
      this.paintInlineImageXObject(imgData);
    },
    paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
      if (!this.contentVisible) {
        return;
      }
      var imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);
      if (!imgData) {
        (0, _util.warn)("Dependent image isn't ready yet");
        return;
      }
      var width = imgData.width;
      var height = imgData.height;
      var map = [];
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        map.push({
          transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
          x: 0,
          y: 0,
          w: width,
          h: height
        });
      }
      this.paintInlineImageXObjectGroup(imgData, map);
    },
    paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
      if (!this.contentVisible) {
        return;
      }
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;
      this.save();
      ctx.scale(1 / width, -1 / height);
      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0],
        b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2],
        d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
      var imgToPaint, tmpCanvas, tmpCtx;
      if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
        imgToPaint = imgData;
      } else {
        tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
        tmpCtx = tmpCanvas.context;
        putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
        imgToPaint = tmpCanvas.canvas;
      }
      var paintWidth = width,
        paintHeight = height;
      var tmpCanvasId = "prescale1";
      while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
        var newWidth = paintWidth,
          newHeight = paintHeight;
        if (widthScale > 2 && paintWidth > 1) {
          newWidth = Math.ceil(paintWidth / 2);
          widthScale /= paintWidth / newWidth;
        }
        if (heightScale > 2 && paintHeight > 1) {
          newHeight = Math.ceil(paintHeight / 2);
          heightScale /= paintHeight / newHeight;
        }
        tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
        tmpCtx = tmpCanvas.context;
        tmpCtx.clearRect(0, 0, newWidth, newHeight);
        tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
        imgToPaint = tmpCanvas.canvas;
        paintWidth = newWidth;
        paintHeight = newHeight;
        tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
      }
      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
      if (this.imageLayer) {
        var position = this.getCanvasPosition(0, -height);
        this.imageLayer.appendImage({
          imgData: imgData,
          left: position[0],
          top: position[1],
          width: width / currentTransform[0],
          height: height / currentTransform[3]
        });
      }
      this.restore();
    },
    paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
      if (!this.contentVisible) {
        return;
      }
      var ctx = this.ctx;
      var w = imgData.width;
      var h = imgData.height;
      var tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
      var tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
      for (var i = 0, ii = map.length; i < ii; i++) {
        var entry = map[i];
        ctx.save();
        ctx.transform.apply(ctx, entry.transform);
        ctx.scale(1, -1);
        ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
        if (this.imageLayer) {
          var position = this.getCanvasPosition(entry.x, entry.y);
          this.imageLayer.appendImage({
            imgData: imgData,
            left: position[0],
            top: position[1],
            width: w,
            height: h
          });
        }
        ctx.restore();
      }
    },
    paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
      if (!this.contentVisible) {
        return;
      }
      this.ctx.fillRect(0, 0, 1, 1);
    },
    markPoint: function CanvasGraphics_markPoint(tag) {},
    markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
    beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
      this.markedContentStack.push({
        visible: true
      });
    },
    beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {
      if (tag === "OC") {
        this.markedContentStack.push({
          visible: this.optionalContentConfig.isVisible(properties)
        });
      } else {
        this.markedContentStack.push({
          visible: true
        });
      }
      this.contentVisible = this.isContentVisible();
    },
    endMarkedContent: function CanvasGraphics_endMarkedContent() {
      this.markedContentStack.pop();
      this.contentVisible = this.isContentVisible();
    },
    beginCompat: function CanvasGraphics_beginCompat() {},
    endCompat: function CanvasGraphics_endCompat() {},
    consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;
      if (this.pendingClip) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip("evenodd");
        } else {
          ctx.clip();
        }
        this.pendingClip = null;
      }
      ctx.beginPath();
    },
    getSinglePixelWidth: function getSinglePixelWidth() {
      if (this._cachedGetSinglePixelWidth === null) {
        var m = this.ctx.mozCurrentTransform;
        var absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
        var sqNorm1 = Math.pow(m[0], 2) + Math.pow(m[2], 2);
        var sqNorm2 = Math.pow(m[1], 2) + Math.pow(m[3], 2);
        var pixelHeight = Math.sqrt(Math.max(sqNorm1, sqNorm2)) / absDet;
        if (sqNorm1 !== sqNorm2 && this._combinedScaleFactor * pixelHeight > 1) {
          this._cachedGetSinglePixelWidth = -(this._combinedScaleFactor * pixelHeight);
        } else if (absDet > Number.EPSILON) {
          this._cachedGetSinglePixelWidth = pixelHeight * 1.0000001;
        } else {
          this._cachedGetSinglePixelWidth = 1;
        }
      }
      return this._cachedGetSinglePixelWidth;
    },
    getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
      var transform = this.ctx.mozCurrentTransform;
      return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
    },
    isContentVisible: function CanvasGraphics_isContentVisible() {
      for (var i = this.markedContentStack.length - 1; i >= 0; i--) {
        if (!this.markedContentStack[i].visible) {
          return false;
        }
      }
      return true;
    }
  };
  for (var op in _util.OPS) {
    CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
  }
  return CanvasGraphics;
}();

/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TilingPattern = void 0;
exports.getShadingPatternFromIR = getShadingPatternFromIR;
var _util = __w_pdfjs_require__(2);
var ShadingIRs = {};
function applyBoundingBox(ctx, bbox) {
  if (!bbox || typeof Path2D === "undefined") {
    return;
  }
  var width = bbox[2] - bbox[0];
  var height = bbox[3] - bbox[1];
  var region = new Path2D();
  region.rect(bbox[0], bbox[1], width, height);
  ctx.clip(region);
}
ShadingIRs.RadialAxial = {
  fromIR: function RadialAxial_fromIR(raw) {
    var type = raw[1];
    var bbox = raw[2];
    var colorStops = raw[3];
    var p0 = raw[4];
    var p1 = raw[5];
    var r0 = raw[6];
    var r1 = raw[7];
    return {
      getPattern: function RadialAxial_getPattern(ctx) {
        applyBoundingBox(ctx, bbox);
        var grad;
        if (type === "axial") {
          grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
        } else if (type === "radial") {
          grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
        }
        for (var i = 0, ii = colorStops.length; i < ii; ++i) {
          var c = colorStops[i];
          grad.addColorStop(c[0], c[1]);
        }
        return grad;
      }
    };
  }
};
var createMeshCanvas = function createMeshCanvasClosure() {
  function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
    var coords = context.coords,
      colors = context.colors;
    var bytes = data.data,
      rowSize = data.width * 4;
    var tmp;
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }
    if (coords[p2 + 1] > coords[p3 + 1]) {
      tmp = p2;
      p2 = p3;
      p3 = tmp;
      tmp = c2;
      c2 = c3;
      c3 = tmp;
    }
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }
    var x1 = (coords[p1] + context.offsetX) * context.scaleX;
    var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
    var x2 = (coords[p2] + context.offsetX) * context.scaleX;
    var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
    var x3 = (coords[p3] + context.offsetX) * context.scaleX;
    var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
    if (y1 >= y3) {
      return;
    }
    var c1r = colors[c1],
      c1g = colors[c1 + 1],
      c1b = colors[c1 + 2];
    var c2r = colors[c2],
      c2g = colors[c2 + 1],
      c2b = colors[c2 + 2];
    var c3r = colors[c3],
      c3g = colors[c3 + 1],
      c3b = colors[c3 + 2];
    var minY = Math.round(y1),
      maxY = Math.round(y3);
    var xa, car, cag, cab;
    var xb, cbr, cbg, cbb;
    for (var y = minY; y <= maxY; y++) {
      if (y < y2) {
        var _k = void 0;
        if (y < y1) {
          _k = 0;
        } else if (y1 === y2) {
          _k = 1;
        } else {
          _k = (y1 - y) / (y1 - y2);
        }
        xa = x1 - (x1 - x2) * _k;
        car = c1r - (c1r - c2r) * _k;
        cag = c1g - (c1g - c2g) * _k;
        cab = c1b - (c1b - c2b) * _k;
      } else {
        var _k2 = void 0;
        if (y > y3) {
          _k2 = 1;
        } else if (y2 === y3) {
          _k2 = 0;
        } else {
          _k2 = (y2 - y) / (y2 - y3);
        }
        xa = x2 - (x2 - x3) * _k2;
        car = c2r - (c2r - c3r) * _k2;
        cag = c2g - (c2g - c3g) * _k2;
        cab = c2b - (c2b - c3b) * _k2;
      }
      var k = void 0;
      if (y < y1) {
        k = 0;
      } else if (y > y3) {
        k = 1;
      } else {
        k = (y1 - y) / (y1 - y3);
      }
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      var x1_ = Math.round(Math.min(xa, xb));
      var x2_ = Math.round(Math.max(xa, xb));
      var j = rowSize * y + x1_ * 4;
      for (var x = x1_; x <= x2_; x++) {
        k = (xa - x) / (xa - xb);
        if (k < 0) {
          k = 0;
        } else if (k > 1) {
          k = 1;
        }
        bytes[j++] = car - (car - cbr) * k | 0;
        bytes[j++] = cag - (cag - cbg) * k | 0;
        bytes[j++] = cab - (cab - cbb) * k | 0;
        bytes[j++] = 255;
      }
    }
  }
  function drawFigure(data, figure, context) {
    var ps = figure.coords;
    var cs = figure.colors;
    var i, ii;
    switch (figure.type) {
      case "lattice":
        var verticesPerRow = figure.verticesPerRow;
        var rows = Math.floor(ps.length / verticesPerRow) - 1;
        var cols = verticesPerRow - 1;
        for (i = 0; i < rows; i++) {
          var q = i * verticesPerRow;
          for (var j = 0; j < cols; j++, q++) {
            drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
            drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
          }
        }
        break;
      case "triangles":
        for (i = 0, ii = ps.length; i < ii; i += 3) {
          drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
        }
        break;
      default:
        throw new Error("illegal figure");
    }
  }
  function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
    var EXPECTED_SCALE = 1.1;
    var MAX_PATTERN_SIZE = 3000;
    var BORDER_SIZE = 2;
    var offsetX = Math.floor(bounds[0]);
    var offsetY = Math.floor(bounds[1]);
    var boundsWidth = Math.ceil(bounds[2]) - offsetX;
    var boundsHeight = Math.ceil(bounds[3]) - offsetY;
    var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var scaleX = boundsWidth / width;
    var scaleY = boundsHeight / height;
    var context = {
      coords: coords,
      colors: colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    var paddedWidth = width + BORDER_SIZE * 2;
    var paddedHeight = height + BORDER_SIZE * 2;
    var canvas, tmpCanvas, i, ii;
    if (webGLContext.isEnabled) {
      canvas = webGLContext.drawFigures({
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        figures: figures,
        context: context
      });
      tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    } else {
      tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
      var tmpCtx = tmpCanvas.context;
      var data = tmpCtx.createImageData(width, height);
      if (backgroundColor) {
        var bytes = data.data;
        for (i = 0, ii = bytes.length; i < ii; i += 4) {
          bytes[i] = backgroundColor[0];
          bytes[i + 1] = backgroundColor[1];
          bytes[i + 2] = backgroundColor[2];
          bytes[i + 3] = 255;
        }
      }
      for (i = 0; i < figures.length; i++) {
        drawFigure(data, figures[i], context);
      }
      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    }
    return {
      canvas: canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }
  return createMeshCanvas;
}();
ShadingIRs.Mesh = {
  fromIR: function Mesh_fromIR(raw) {
    var coords = raw[2];
    var colors = raw[3];
    var figures = raw[4];
    var bounds = raw[5];
    var matrix = raw[6];
    var bbox = raw[7];
    var background = raw[8];
    return {
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
        applyBoundingBox(ctx, bbox);
        var scale;
        if (shadingFill) {
          scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
        } else {
          scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);
          if (matrix) {
            var matrixScale = _util.Util.singularValueDecompose2dScale(matrix);
            scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
          }
        }
        var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);
        if (!shadingFill) {
          ctx.setTransform.apply(ctx, owner.baseTransform);
          if (matrix) {
            ctx.transform.apply(ctx, matrix);
          }
        }
        ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
        ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
        return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
      }
    };
  }
};
ShadingIRs.Dummy = {
  fromIR: function Dummy_fromIR() {
    return {
      getPattern: function Dummy_fromIR_getPattern() {
        return "hotpink";
      }
    };
  }
};
function getShadingPatternFromIR(raw) {
  var shadingIR = ShadingIRs[raw[0]];
  if (!shadingIR) {
    throw new Error("Unknown IR type: ".concat(raw[0]));
  }
  return shadingIR.fromIR(raw);
}
var TilingPattern = exports.TilingPattern = function TilingPatternClosure() {
  var PaintType = {
    COLORED: 1,
    UNCOLORED: 2
  };
  var MAX_PATTERN_SIZE = 3000;
  function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
    this.operatorList = IR[2];
    this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.color = color;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
    this.ctx = ctx;
  }
  TilingPattern.prototype = {
    createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;
      (0, _util.info)("TilingType: " + tilingType);
      var x0 = bbox[0],
        y0 = bbox[1],
        x1 = bbox[2],
        y1 = bbox[3];
      var matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
      var curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);
      var combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
      var dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
      var dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
      var tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;
      this.setFillAndStrokeStyleToContext(graphics, paintType, color);
      graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
      graphics.transform(1, 0, 0, 1, -x0, -y0);
      this.clipBbox(graphics, bbox, x0, y0, x1, y1);
      graphics.executeOperatorList(operatorList);
      this.ctx.transform(1, 0, 0, 1, x0, y0);
      this.ctx.scale(1 / dimx.scale, 1 / dimy.scale);
      return tmpCanvas.canvas;
    },
    getSizeAndScale: function TilingPattern_getSizeAndScale(step, realOutputSize, scale) {
      step = Math.abs(step);
      var maxSize = Math.max(MAX_PATTERN_SIZE, realOutputSize);
      var size = Math.ceil(step * scale);
      if (size >= maxSize) {
        size = maxSize;
      } else {
        scale = size / step;
      }
      return {
        scale: scale,
        size: size
      };
    },
    clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (Array.isArray(bbox) && bbox.length === 4) {
        var bboxWidth = x1 - x0;
        var bboxHeight = y1 - y0;
        graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
        graphics.clip();
        graphics.endPath();
      }
    },
    setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
      var context = graphics.ctx,
        current = graphics.current;
      switch (paintType) {
        case PaintType.COLORED:
          var ctx = this.ctx;
          context.fillStyle = ctx.fillStyle;
          context.strokeStyle = ctx.strokeStyle;
          current.fillColor = ctx.fillStyle;
          current.strokeColor = ctx.strokeStyle;
          break;
        case PaintType.UNCOLORED:
          var cssColor = _util.Util.makeHexColor(color[0], color[1], color[2]);
          context.fillStyle = cssColor;
          context.strokeStyle = cssColor;
          current.fillColor = cssColor;
          current.strokeColor = cssColor;
          break;
        default:
          throw new _util.FormatError("Unsupported paint type: ".concat(paintType));
      }
    },
    getPattern: function TilingPattern_getPattern(ctx, owner) {
      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      var temporaryPatternCanvas = this.createPatternCanvas(owner);
      return ctx.createPattern(temporaryPatternCanvas, "repeat");
    }
  };
  return TilingPattern;
}();

/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GlobalWorkerOptions = void 0;
var GlobalWorkerOptions = exports.GlobalWorkerOptions = Object.create(null);
GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? "" : GlobalWorkerOptions.workerSrc;
GlobalWorkerOptions.isWorkerDisabled = GlobalWorkerOptions.isWorkerDisabled === undefined ? false : GlobalWorkerOptions.isWorkerDisabled;

/***/ }),
/* 195 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MessageHandler = void 0;
var _util = __w_pdfjs_require__(2);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var CallbackKind = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
};
var StreamKind = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function wrapReason(reason) {
  if (_typeof(reason) !== "object" || reason === null) {
    return reason;
  }
  switch (reason.name) {
    case "AbortException":
      return new _util.AbortException(reason.message);
    case "MissingPDFException":
      return new _util.MissingPDFException(reason.message);
    case "UnexpectedResponseException":
      return new _util.UnexpectedResponseException(reason.message, reason.status);
    case "UnknownErrorException":
      return new _util.UnknownErrorException(reason.message, reason.details);
    default:
      return new _util.UnknownErrorException(reason.message, reason.toString());
  }
}
var MessageHandler = exports.MessageHandler = /*#__PURE__*/function () {
  function MessageHandler(sourceName, targetName, comObj) {
    var _this = this;
    _classCallCheck(this, MessageHandler);
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.comObj = comObj;
    this.callbackId = 1;
    this.streamId = 1;
    this.postMessageTransfers = true;
    this.streamSinks = Object.create(null);
    this.streamControllers = Object.create(null);
    this.callbackCapabilities = Object.create(null);
    this.actionHandler = Object.create(null);
    this._onComObjOnMessage = function (event) {
      var data = event.data;
      if (data.targetName !== _this.sourceName) {
        return;
      }
      if (data.stream) {
        _this._processStreamMessage(data);
        return;
      }
      if (data.callback) {
        var callbackId = data.callbackId;
        var capability = _this.callbackCapabilities[callbackId];
        if (!capability) {
          throw new Error("Cannot resolve callback ".concat(callbackId));
        }
        delete _this.callbackCapabilities[callbackId];
        if (data.callback === CallbackKind.DATA) {
          capability.resolve(data.data);
        } else if (data.callback === CallbackKind.ERROR) {
          capability.reject(wrapReason(data.reason));
        } else {
          throw new Error("Unexpected callback case");
        }
        return;
      }
      var action = _this.actionHandler[data.action];
      if (!action) {
        throw new Error("Unknown action from worker: ".concat(data.action));
      }
      if (data.callbackId) {
        var cbSourceName = _this.sourceName;
        var cbTargetName = data.sourceName;
        new Promise(function (resolve) {
          resolve(action(data.data));
        }).then(function (result) {
          comObj.postMessage({
            sourceName: cbSourceName,
            targetName: cbTargetName,
            callback: CallbackKind.DATA,
            callbackId: data.callbackId,
            data: result
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName: cbSourceName,
            targetName: cbTargetName,
            callback: CallbackKind.ERROR,
            callbackId: data.callbackId,
            reason: wrapReason(reason)
          });
        });
        return;
      }
      if (data.streamId) {
        _this._createStreamSink(data);
        return;
      }
      action(data.data);
    };
    comObj.addEventListener("message", this._onComObjOnMessage);
  }
  return _createClass(MessageHandler, [{
    key: "on",
    value: function on(actionName, handler) {
      var ah = this.actionHandler;
      if (ah[actionName]) {
        throw new Error("There is already an actionName called \"".concat(actionName, "\""));
      }
      ah[actionName] = handler;
    }
  }, {
    key: "send",
    value: function send(actionName, data, transfers) {
      this._postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: actionName,
        data: data
      }, transfers);
    }
  }, {
    key: "sendWithPromise",
    value: function sendWithPromise(actionName, data, transfers) {
      var callbackId = this.callbackId++;
      var capability = (0, _util.createPromiseCapability)();
      this.callbackCapabilities[callbackId] = capability;
      try {
        this._postMessage({
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: actionName,
          callbackId: callbackId,
          data: data
        }, transfers);
      } catch (ex) {
        capability.reject(ex);
      }
      return capability.promise;
    }
  }, {
    key: "sendWithStream",
    value: function sendWithStream(actionName, data, queueingStrategy, transfers) {
      var _this2 = this;
      var streamId = this.streamId++;
      var sourceName = this.sourceName;
      var targetName = this.targetName;
      var comObj = this.comObj;
      return new ReadableStream({
        start: function start(controller) {
          var startCapability = (0, _util.createPromiseCapability)();
          _this2.streamControllers[streamId] = {
            controller: controller,
            startCall: startCapability,
            pullCall: null,
            cancelCall: null,
            isClosed: false
          };
          _this2._postMessage({
            sourceName: sourceName,
            targetName: targetName,
            action: actionName,
            streamId: streamId,
            data: data,
            desiredSize: controller.desiredSize
          }, transfers);
          return startCapability.promise;
        },
        pull: function pull(controller) {
          var pullCapability = (0, _util.createPromiseCapability)();
          _this2.streamControllers[streamId].pullCall = pullCapability;
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.PULL,
            streamId: streamId,
            desiredSize: controller.desiredSize
          });
          return pullCapability.promise;
        },
        cancel: function cancel(reason) {
          (0, _util.assert)(reason instanceof Error, "cancel must have a valid reason");
          var cancelCapability = (0, _util.createPromiseCapability)();
          _this2.streamControllers[streamId].cancelCall = cancelCapability;
          _this2.streamControllers[streamId].isClosed = true;
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.CANCEL,
            streamId: streamId,
            reason: wrapReason(reason)
          });
          return cancelCapability.promise;
        }
      }, queueingStrategy);
    }
  }, {
    key: "_createStreamSink",
    value: function _createStreamSink(data) {
      var self = this;
      var action = this.actionHandler[data.action];
      var streamId = data.streamId;
      var sourceName = this.sourceName;
      var targetName = data.sourceName;
      var comObj = this.comObj;
      var streamSink = {
        enqueue: function enqueue(chunk) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var transfers = arguments.length > 2 ? arguments[2] : undefined;
          if (this.isCancelled) {
            return;
          }
          var lastDesiredSize = this.desiredSize;
          this.desiredSize -= size;
          if (lastDesiredSize > 0 && this.desiredSize <= 0) {
            this.sinkCapability = (0, _util.createPromiseCapability)();
            this.ready = this.sinkCapability.promise;
          }
          self._postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.ENQUEUE,
            streamId: streamId,
            chunk: chunk
          }, transfers);
        },
        close: function close() {
          if (this.isCancelled) {
            return;
          }
          this.isCancelled = true;
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.CLOSE,
            streamId: streamId
          });
          delete self.streamSinks[streamId];
        },
        error: function error(reason) {
          (0, _util.assert)(reason instanceof Error, "error must have a valid reason");
          if (this.isCancelled) {
            return;
          }
          this.isCancelled = true;
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.ERROR,
            streamId: streamId,
            reason: wrapReason(reason)
          });
        },
        sinkCapability: (0, _util.createPromiseCapability)(),
        onPull: null,
        onCancel: null,
        isCancelled: false,
        desiredSize: data.desiredSize,
        ready: null
      };
      streamSink.sinkCapability.resolve();
      streamSink.ready = streamSink.sinkCapability.promise;
      this.streamSinks[streamId] = streamSink;
      new Promise(function (resolve) {
        resolve(action(data.data, streamSink));
      }).then(function () {
        comObj.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: StreamKind.START_COMPLETE,
          streamId: streamId,
          success: true
        });
      }, function (reason) {
        comObj.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: StreamKind.START_COMPLETE,
          streamId: streamId,
          reason: wrapReason(reason)
        });
      });
    }
  }, {
    key: "_processStreamMessage",
    value: function _processStreamMessage(data) {
      var streamId = data.streamId;
      var sourceName = this.sourceName;
      var targetName = data.sourceName;
      var comObj = this.comObj;
      switch (data.stream) {
        case StreamKind.START_COMPLETE:
          if (data.success) {
            this.streamControllers[streamId].startCall.resolve();
          } else {
            this.streamControllers[streamId].startCall.reject(wrapReason(data.reason));
          }
          break;
        case StreamKind.PULL_COMPLETE:
          if (data.success) {
            this.streamControllers[streamId].pullCall.resolve();
          } else {
            this.streamControllers[streamId].pullCall.reject(wrapReason(data.reason));
          }
          break;
        case StreamKind.PULL:
          if (!this.streamSinks[streamId]) {
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.PULL_COMPLETE,
              streamId: streamId,
              success: true
            });
            break;
          }
          if (this.streamSinks[streamId].desiredSize <= 0 && data.desiredSize > 0) {
            this.streamSinks[streamId].sinkCapability.resolve();
          }
          this.streamSinks[streamId].desiredSize = data.desiredSize;
          var onPull = this.streamSinks[data.streamId].onPull;
          new Promise(function (resolve) {
            resolve(onPull && onPull());
          }).then(function () {
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.PULL_COMPLETE,
              streamId: streamId,
              success: true
            });
          }, function (reason) {
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.PULL_COMPLETE,
              streamId: streamId,
              reason: wrapReason(reason)
            });
          });
          break;
        case StreamKind.ENQUEUE:
          (0, _util.assert)(this.streamControllers[streamId], "enqueue should have stream controller");
          if (this.streamControllers[streamId].isClosed) {
            break;
          }
          this.streamControllers[streamId].controller.enqueue(data.chunk);
          break;
        case StreamKind.CLOSE:
          (0, _util.assert)(this.streamControllers[streamId], "close should have stream controller");
          if (this.streamControllers[streamId].isClosed) {
            break;
          }
          this.streamControllers[streamId].isClosed = true;
          this.streamControllers[streamId].controller.close();
          this._deleteStreamController(streamId);
          break;
        case StreamKind.ERROR:
          (0, _util.assert)(this.streamControllers[streamId], "error should have stream controller");
          this.streamControllers[streamId].controller.error(wrapReason(data.reason));
          this._deleteStreamController(streamId);
          break;
        case StreamKind.CANCEL_COMPLETE:
          if (data.success) {
            this.streamControllers[streamId].cancelCall.resolve();
          } else {
            this.streamControllers[streamId].cancelCall.reject(wrapReason(data.reason));
          }
          this._deleteStreamController(streamId);
          break;
        case StreamKind.CANCEL:
          if (!this.streamSinks[streamId]) {
            break;
          }
          var onCancel = this.streamSinks[data.streamId].onCancel;
          new Promise(function (resolve) {
            resolve(onCancel && onCancel(wrapReason(data.reason)));
          }).then(function () {
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.CANCEL_COMPLETE,
              streamId: streamId,
              success: true
            });
          }, function (reason) {
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.CANCEL_COMPLETE,
              streamId: streamId,
              reason: wrapReason(reason)
            });
          });
          this.streamSinks[streamId].sinkCapability.reject(wrapReason(data.reason));
          this.streamSinks[streamId].isCancelled = true;
          delete this.streamSinks[streamId];
          break;
        default:
          throw new Error("Unexpected stream case");
      }
    }
  }, {
    key: "_deleteStreamController",
    value: function () {
      var _deleteStreamController2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(streamId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.allSettled([this.streamControllers[streamId].startCall, this.streamControllers[streamId].pullCall, this.streamControllers[streamId].cancelCall].map(function (capability) {
                return capability && capability.promise;
              }));
            case 2:
              delete this.streamControllers[streamId];
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _deleteStreamController(_x) {
        return _deleteStreamController2.apply(this, arguments);
      }
      return _deleteStreamController;
    }()
  }, {
    key: "_postMessage",
    value: function _postMessage(message, transfers) {
      if (transfers && this.postMessageTransfers) {
        this.comObj.postMessage(message, transfers);
      } else {
        this.comObj.postMessage(message);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.comObj.removeEventListener("message", this._onComObjOnMessage);
    }
  }]);
}();

/***/ }),
/* 196 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Metadata = void 0;
var _util = __w_pdfjs_require__(2);
var _xml_parser = __w_pdfjs_require__(197);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Metadata = exports.Metadata = /*#__PURE__*/function () {
  function Metadata(data) {
    _classCallCheck(this, Metadata);
    (0, _util.assert)(typeof data === "string", "Metadata: input is not a string");
    data = this._repair(data);
    var parser = new _xml_parser.SimpleXMLParser({
      lowerCaseName: true
    });
    var xmlDocument = parser.parseFromString(data);
    this._metadataMap = new Map();
    if (xmlDocument) {
      this._parse(xmlDocument);
    }
    this._data = data;
  }
  return _createClass(Metadata, [{
    key: "_repair",
    value: function _repair(data) {
      return data.replace(/^[^<]+/, "").replace(/>\\376\\377([^<]+)/g, function (all, codes) {
        var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
          return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
        }).replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
          switch (name) {
            case "amp":
              return "&";
            case "apos":
              return "'";
            case "gt":
              return ">";
            case "lt":
              return "<";
            case "quot":
              return '"';
          }
          throw new Error("_repair: ".concat(name, " isn't defined."));
        });
        var chars = "";
        for (var i = 0, ii = bytes.length; i < ii; i += 2) {
          var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
          if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
            chars += String.fromCharCode(code);
          } else {
            chars += "&#x" + (0x10000 + code).toString(16).substring(1) + ";";
          }
        }
        return ">" + chars;
      });
    }
  }, {
    key: "_getSequence",
    value: function _getSequence(entry) {
      var name = entry.nodeName;
      if (name !== "rdf:bag" && name !== "rdf:seq" && name !== "rdf:alt") {
        return null;
      }
      return entry.childNodes.filter(function (node) {
        return node.nodeName === "rdf:li";
      });
    }
  }, {
    key: "_getCreators",
    value: function _getCreators(entry) {
      if (entry.nodeName !== "dc:creator") {
        return false;
      }
      if (!entry.hasChildNodes()) {
        return true;
      }
      var seqNode = entry.childNodes[0];
      var authors = this._getSequence(seqNode) || [];
      this._metadataMap.set(entry.nodeName, authors.map(function (node) {
        return node.textContent.trim();
      }));
      return true;
    }
  }, {
    key: "_parse",
    value: function _parse(xmlDocument) {
      var rdf = xmlDocument.documentElement;
      if (rdf.nodeName !== "rdf:rdf") {
        rdf = rdf.firstChild;
        while (rdf && rdf.nodeName !== "rdf:rdf") {
          rdf = rdf.nextSibling;
        }
      }
      if (!rdf || rdf.nodeName !== "rdf:rdf" || !rdf.hasChildNodes()) {
        return;
      }
      var _iterator = _createForOfIteratorHelper(rdf.childNodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var desc = _step.value;
          if (desc.nodeName !== "rdf:description") {
            continue;
          }
          var _iterator2 = _createForOfIteratorHelper(desc.childNodes),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var entry = _step2.value;
              var name = entry.nodeName;
              if (name === "#text") {
                continue;
              }
              if (this._getCreators(entry)) {
                continue;
              }
              this._metadataMap.set(name, entry.textContent.trim());
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getRaw",
    value: function getRaw() {
      return this._data;
    }
  }, {
    key: "get",
    value: function get(name) {
      var _this$_metadataMap$ge;
      return (_this$_metadataMap$ge = this._metadataMap.get(name)) !== null && _this$_metadataMap$ge !== void 0 ? _this$_metadataMap$ge : null;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return (0, _util.objectFromEntries)(this._metadataMap);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this._metadataMap.has(name);
    }
  }]);
}();

/***/ }),
/* 197 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SimpleXMLParser = exports.SimpleDOMNode = void 0;
var _util = __w_pdfjs_require__(2);
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var XMLParserErrorCode = {
  NoError: 0,
  EndOfDocument: -1,
  UnterminatedCdat: -2,
  UnterminatedXmlDeclaration: -3,
  UnterminatedDoctypeDeclaration: -4,
  UnterminatedComment: -5,
  MalformedElement: -6,
  OutOfMemory: -7,
  UnterminatedAttributeValue: -8,
  UnterminatedElement: -9,
  ElementNeverBegun: -10
};
function isWhitespace(s, index) {
  var ch = s[index];
  return ch === " " || ch === "\n" || ch === "\r" || ch === "\t";
}
function isWhitespaceString(s) {
  for (var i = 0, ii = s.length; i < ii; i++) {
    if (!isWhitespace(s, i)) {
      return false;
    }
  }
  return true;
}
var XMLParserBase = /*#__PURE__*/function () {
  function XMLParserBase() {
    _classCallCheck(this, XMLParserBase);
  }
  return _createClass(XMLParserBase, [{
    key: "_resolveEntities",
    value: function _resolveEntities(s) {
      var _this = this;
      return s.replace(/&([^;]+);/g, function (all, entity) {
        if (entity.substring(0, 2) === "#x") {
          return String.fromCodePoint(parseInt(entity.substring(2), 16));
        } else if (entity.substring(0, 1) === "#") {
          return String.fromCodePoint(parseInt(entity.substring(1), 10));
        }
        switch (entity) {
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "amp":
            return "&";
          case "quot":
            return '"';
        }
        return _this.onResolveEntity(entity);
      });
    }
  }, {
    key: "_parseContent",
    value: function _parseContent(s, start) {
      var attributes = [];
      var pos = start;
      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
        ++pos;
      }
      var name = s.substring(start, pos);
      skipWs();
      while (pos < s.length && s[pos] !== ">" && s[pos] !== "/" && s[pos] !== "?") {
        skipWs();
        var attrName = "",
          attrValue = "";
        while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== "=") {
          attrName += s[pos];
          ++pos;
        }
        skipWs();
        if (s[pos] !== "=") {
          return null;
        }
        ++pos;
        skipWs();
        var attrEndChar = s[pos];
        if (attrEndChar !== '"' && attrEndChar !== "'") {
          return null;
        }
        var attrEndIndex = s.indexOf(attrEndChar, ++pos);
        if (attrEndIndex < 0) {
          return null;
        }
        attrValue = s.substring(pos, attrEndIndex);
        attributes.push({
          name: attrName,
          value: this._resolveEntities(attrValue)
        });
        pos = attrEndIndex + 1;
        skipWs();
      }
      return {
        name: name,
        attributes: attributes,
        parsed: pos - start
      };
    }
  }, {
    key: "_parseProcessingInstruction",
    value: function _parseProcessingInstruction(s, start) {
      var pos = start;
      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
        ++pos;
      }
      var name = s.substring(start, pos);
      skipWs();
      var attrStart = pos;
      while (pos < s.length && (s[pos] !== "?" || s[pos + 1] !== ">")) {
        ++pos;
      }
      var value = s.substring(attrStart, pos);
      return {
        name: name,
        value: value,
        parsed: pos - start
      };
    }
  }, {
    key: "parseXml",
    value: function parseXml(s) {
      var i = 0;
      while (i < s.length) {
        var ch = s[i];
        var j = i;
        if (ch === "<") {
          ++j;
          var ch2 = s[j];
          var q = void 0;
          switch (ch2) {
            case "/":
              ++j;
              q = s.indexOf(">", j);
              if (q < 0) {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }
              this.onEndElement(s.substring(j, q));
              j = q + 1;
              break;
            case "?":
              ++j;
              var pi = this._parseProcessingInstruction(s, j);
              if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== "?>") {
                this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                return;
              }
              this.onPi(pi.name, pi.value);
              j += pi.parsed + 2;
              break;
            case "!":
              if (s.substring(j + 1, j + 3) === "--") {
                q = s.indexOf("-->", j + 3);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedComment);
                  return;
                }
                this.onComment(s.substring(j + 3, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === "[CDATA[") {
                q = s.indexOf("]]>", j + 8);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedCdat);
                  return;
                }
                this.onCdata(s.substring(j + 8, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === "DOCTYPE") {
                var q2 = s.indexOf("[", j + 8);
                var complexDoctype = false;
                q = s.indexOf(">", j + 8);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                  return;
                }
                if (q2 > 0 && q > q2) {
                  q = s.indexOf("]>", j + 8);
                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                    return;
                  }
                  complexDoctype = true;
                }
                var doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                this.onDoctype(doctypeContent);
                j = q + (complexDoctype ? 2 : 1);
              } else {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }
              break;
            default:
              var content = this._parseContent(s, j);
              if (content === null) {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }
              var isClosed = false;
              if (s.substring(j + content.parsed, j + content.parsed + 2) === "/>") {
                isClosed = true;
              } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== ">") {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }
              this.onBeginElement(content.name, content.attributes, isClosed);
              j += content.parsed + (isClosed ? 2 : 1);
              break;
          }
        } else {
          while (j < s.length && s[j] !== "<") {
            j++;
          }
          var text = s.substring(i, j);
          this.onText(this._resolveEntities(text));
        }
        i = j;
      }
    }
  }, {
    key: "onResolveEntity",
    value: function onResolveEntity(name) {
      return "&".concat(name, ";");
    }
  }, {
    key: "onPi",
    value: function onPi(name, value) {}
  }, {
    key: "onComment",
    value: function onComment(text) {}
  }, {
    key: "onCdata",
    value: function onCdata(text) {}
  }, {
    key: "onDoctype",
    value: function onDoctype(doctypeContent) {}
  }, {
    key: "onText",
    value: function onText(text) {}
  }, {
    key: "onBeginElement",
    value: function onBeginElement(name, attributes, isEmpty) {}
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {}
  }, {
    key: "onError",
    value: function onError(code) {}
  }]);
}();
var SimpleDOMNode = exports.SimpleDOMNode = /*#__PURE__*/function () {
  function SimpleDOMNode(nodeName, nodeValue) {
    _classCallCheck(this, SimpleDOMNode);
    this.nodeName = nodeName;
    this.nodeValue = nodeValue;
    Object.defineProperty(this, "parentNode", {
      value: null,
      writable: true
    });
  }
  return _createClass(SimpleDOMNode, [{
    key: "firstChild",
    get: function get() {
      return this.childNodes && this.childNodes[0];
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var childNodes = this.parentNode.childNodes;
      if (!childNodes) {
        return undefined;
      }
      var index = childNodes.indexOf(this);
      if (index === -1) {
        return undefined;
      }
      return childNodes[index + 1];
    }
  }, {
    key: "textContent",
    get: function get() {
      if (!this.childNodes) {
        return this.nodeValue || "";
      }
      return this.childNodes.map(function (child) {
        return child.textContent;
      }).join("");
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes && this.childNodes.length > 0;
    }
  }, {
    key: "searchNode",
    value: function searchNode(paths, pos) {
      if (pos >= paths.length) {
        return this;
      }
      var component = paths[pos];
      var stack = [];
      var node = this;
      while (true) {
        if (component.name === node.nodeName) {
          if (component.pos === 0) {
            var res = node.searchNode(paths, pos + 1);
            if (res !== null) {
              return res;
            }
          } else if (stack.length === 0) {
            return null;
          } else {
            var _stack$pop = stack.pop(),
              _stack$pop2 = _slicedToArray(_stack$pop, 1),
              parent = _stack$pop2[0];
            var siblingPos = 0;
            var _iterator = _createForOfIteratorHelper(parent.childNodes),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                if (component.name === child.nodeName) {
                  if (siblingPos === component.pos) {
                    return child.searchNode(paths, pos + 1);
                  }
                  siblingPos++;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return node.searchNode(paths, pos + 1);
          }
        }
        if (node.childNodes && node.childNodes.length !== 0) {
          stack.push([node, 0]);
          node = node.childNodes[0];
        } else if (stack.length === 0) {
          return null;
        } else {
          while (stack.length !== 0) {
            var _stack$pop3 = stack.pop(),
              _stack$pop4 = _slicedToArray(_stack$pop3, 2),
              _parent = _stack$pop4[0],
              currentPos = _stack$pop4[1];
            var newPos = currentPos + 1;
            if (newPos < _parent.childNodes.length) {
              stack.push([_parent, newPos]);
              node = _parent.childNodes[newPos];
              break;
            }
          }
          if (stack.length === 0) {
            return null;
          }
        }
      }
    }
  }, {
    key: "dump",
    value: function dump(buffer) {
      if (this.nodeName === "#text") {
        buffer.push((0, _util.encodeToXmlString)(this.nodeValue));
        return;
      }
      buffer.push("<".concat(this.nodeName));
      if (this.attributes) {
        var _iterator2 = _createForOfIteratorHelper(this.attributes),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var attribute = _step2.value;
            buffer.push(" ".concat(attribute.name, "=\"").concat((0, _util.encodeToXmlString)(attribute.value), "\""));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (this.hasChildNodes()) {
        buffer.push(">");
        var _iterator3 = _createForOfIteratorHelper(this.childNodes),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var child = _step3.value;
            child.dump(buffer);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        buffer.push("</".concat(this.nodeName, ">"));
      } else if (this.nodeValue) {
        buffer.push(">".concat((0, _util.encodeToXmlString)(this.nodeValue), "</").concat(this.nodeName, ">"));
      } else {
        buffer.push("/>");
      }
    }
  }]);
}();
var SimpleXMLParser = exports.SimpleXMLParser = /*#__PURE__*/function (_XMLParserBase) {
  function SimpleXMLParser(_ref) {
    var _this2;
    var _ref$hasAttributes = _ref.hasAttributes,
      hasAttributes = _ref$hasAttributes === void 0 ? false : _ref$hasAttributes,
      _ref$lowerCaseName = _ref.lowerCaseName,
      lowerCaseName = _ref$lowerCaseName === void 0 ? false : _ref$lowerCaseName;
    _classCallCheck(this, SimpleXMLParser);
    _this2 = _callSuper(this, SimpleXMLParser);
    _this2._currentFragment = null;
    _this2._stack = null;
    _this2._errorCode = XMLParserErrorCode.NoError;
    _this2._hasAttributes = hasAttributes;
    _this2._lowerCaseName = lowerCaseName;
    return _this2;
  }
  _inherits(SimpleXMLParser, _XMLParserBase);
  return _createClass(SimpleXMLParser, [{
    key: "parseFromString",
    value: function parseFromString(data) {
      this._currentFragment = [];
      this._stack = [];
      this._errorCode = XMLParserErrorCode.NoError;
      this.parseXml(data);
      if (this._errorCode !== XMLParserErrorCode.NoError) {
        return undefined;
      }
      var _this$_currentFragmen = _slicedToArray(this._currentFragment, 1),
        documentElement = _this$_currentFragmen[0];
      if (!documentElement) {
        return undefined;
      }
      return {
        documentElement: documentElement
      };
    }
  }, {
    key: "onResolveEntity",
    value: function onResolveEntity(name) {
      switch (name) {
        case "apos":
          return "'";
      }
      return _superPropGet(SimpleXMLParser, "onResolveEntity", this, 3)([name]);
    }
  }, {
    key: "onText",
    value: function onText(text) {
      if (isWhitespaceString(text)) {
        return;
      }
      var node = new SimpleDOMNode("#text", text);
      this._currentFragment.push(node);
    }
  }, {
    key: "onCdata",
    value: function onCdata(text) {
      var node = new SimpleDOMNode("#text", text);
      this._currentFragment.push(node);
    }
  }, {
    key: "onBeginElement",
    value: function onBeginElement(name, attributes, isEmpty) {
      if (this._lowerCaseName) {
        name = name.toLowerCase();
      }
      var node = new SimpleDOMNode(name);
      node.childNodes = [];
      if (this._hasAttributes) {
        node.attributes = attributes;
      }
      this._currentFragment.push(node);
      if (isEmpty) {
        return;
      }
      this._stack.push(this._currentFragment);
      this._currentFragment = node.childNodes;
    }
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {
      this._currentFragment = this._stack.pop() || [];
      var lastElement = this._currentFragment[this._currentFragment.length - 1];
      if (!lastElement) {
        return;
      }
      for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
        lastElement.childNodes[i].parentNode = lastElement;
      }
    }
  }, {
    key: "onError",
    value: function onError(code) {
      this._errorCode = code;
    }
  }]);
}(XMLParserBase);

/***/ }),
/* 198 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OptionalContentConfig = void 0;
var _util = __w_pdfjs_require__(2);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var OptionalContentGroup = /*#__PURE__*/_createClass(function OptionalContentGroup(name, intent) {
  _classCallCheck(this, OptionalContentGroup);
  this.visible = true;
  this.name = name;
  this.intent = intent;
});
var OptionalContentConfig = exports.OptionalContentConfig = /*#__PURE__*/function () {
  function OptionalContentConfig(data) {
    _classCallCheck(this, OptionalContentConfig);
    this.name = null;
    this.creator = null;
    this._order = null;
    this._groups = new Map();
    if (data === null) {
      return;
    }
    this.name = data.name;
    this.creator = data.creator;
    this._order = data.order;
    var _iterator = _createForOfIteratorHelper(data.groups),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _group = _step.value;
        this._groups.set(_group.id, new OptionalContentGroup(_group.name, _group.intent));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (data.baseState === "OFF") {
      var _iterator2 = _createForOfIteratorHelper(this._groups),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var group = _step2.value;
          group.visible = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    var _iterator3 = _createForOfIteratorHelper(data.on),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var on = _step3.value;
        this._groups.get(on).visible = true;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(data.off),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var off = _step4.value;
        this._groups.get(off).visible = false;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  return _createClass(OptionalContentConfig, [{
    key: "isVisible",
    value: function isVisible(group) {
      if (group.type === "OCG") {
        if (!this._groups.has(group.id)) {
          (0, _util.warn)("Optional content group not found: ".concat(group.id));
          return true;
        }
        return this._groups.get(group.id).visible;
      } else if (group.type === "OCMD") {
        if (group.expression) {
          (0, _util.warn)("Visibility expression not supported yet.");
        }
        if (!group.policy || group.policy === "AnyOn") {
          var _iterator5 = _createForOfIteratorHelper(group.ids),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var id = _step5.value;
              if (!this._groups.has(id)) {
                (0, _util.warn)("Optional content group not found: ".concat(id));
                return true;
              }
              if (this._groups.get(id).visible) {
                return true;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return false;
        } else if (group.policy === "AllOn") {
          var _iterator6 = _createForOfIteratorHelper(group.ids),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _id = _step6.value;
              if (!this._groups.has(_id)) {
                (0, _util.warn)("Optional content group not found: ".concat(_id));
                return true;
              }
              if (!this._groups.get(_id).visible) {
                return false;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          return true;
        } else if (group.policy === "AnyOff") {
          var _iterator7 = _createForOfIteratorHelper(group.ids),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _id2 = _step7.value;
              if (!this._groups.has(_id2)) {
                (0, _util.warn)("Optional content group not found: ".concat(_id2));
                return true;
              }
              if (!this._groups.get(_id2).visible) {
                return true;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          return false;
        } else if (group.policy === "AllOff") {
          var _iterator8 = _createForOfIteratorHelper(group.ids),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _id3 = _step8.value;
              if (!this._groups.has(_id3)) {
                (0, _util.warn)("Optional content group not found: ".concat(_id3));
                return true;
              }
              if (this._groups.get(_id3).visible) {
                return false;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          return true;
        }
        (0, _util.warn)("Unknown optional content policy ".concat(group.policy, "."));
        return true;
      }
      (0, _util.warn)("Unknown group type ".concat(group.type, "."));
      return true;
    }
  }, {
    key: "setVisibility",
    value: function setVisibility(id) {
      var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this._groups.has(id)) {
        (0, _util.warn)("Optional content group not found: ".concat(id));
        return;
      }
      this._groups.get(id).visible = !!visible;
    }
  }, {
    key: "getOrder",
    value: function getOrder() {
      if (!this._groups.size) {
        return null;
      }
      if (this._order) {
        return this._order.slice();
      }
      return Array.from(this._groups.keys());
    }
  }, {
    key: "getGroups",
    value: function getGroups() {
      if (!this._groups.size) {
        return null;
      }
      return (0, _util.objectFromEntries)(this._groups);
    }
  }, {
    key: "getGroup",
    value: function getGroup(id) {
      return this._groups.get(id) || null;
    }
  }]);
}();

/***/ }),
/* 199 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFDataTransportStream = void 0;
var _util = __w_pdfjs_require__(2);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PDFDataTransportStream = exports.PDFDataTransportStream = /*#__PURE__*/function () {
  function PDFDataTransportStream(params, pdfDataRangeTransport) {
    var _this = this;
    _classCallCheck(this, PDFDataTransportStream);
    (0, _util.assert)(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    this._queuedChunks = [];
    this._progressiveDone = params.progressiveDone || false;
    var initialData = params.initialData;
    if ((initialData === null || initialData === void 0 ? void 0 : initialData.length) > 0) {
      var buffer = new Uint8Array(initialData).buffer;
      this._queuedChunks.push(buffer);
    }
    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !params.disableStream;
    this._isRangeSupported = !params.disableRange;
    this._contentLength = params.length;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
      _this._onReceiveData({
        begin: begin,
        chunk: chunk
      });
    });
    this._pdfDataRangeTransport.addProgressListener(function (loaded, total) {
      _this._onProgress({
        loaded: loaded,
        total: total
      });
    });
    this._pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
      _this._onReceiveData({
        chunk: chunk
      });
    });
    this._pdfDataRangeTransport.addProgressiveDoneListener(function () {
      _this._onProgressiveDone();
    });
    this._pdfDataRangeTransport.transportReady();
  }
  return _createClass(PDFDataTransportStream, [{
    key: "_onReceiveData",
    value: function _onReceiveData(args) {
      var buffer = new Uint8Array(args.chunk).buffer;
      if (args.begin === undefined) {
        if (this._fullRequestReader) {
          this._fullRequestReader._enqueue(buffer);
        } else {
          this._queuedChunks.push(buffer);
        }
      } else {
        var found = this._rangeReaders.some(function (rangeReader) {
          if (rangeReader._begin !== args.begin) {
            return false;
          }
          rangeReader._enqueue(buffer);
          return true;
        });
        (0, _util.assert)(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
      }
    }
  }, {
    key: "_progressiveDataLength",
    get: function get() {
      var _this$_fullRequestRea, _this$_fullRequestRea2;
      return (_this$_fullRequestRea = (_this$_fullRequestRea2 = this._fullRequestReader) === null || _this$_fullRequestRea2 === void 0 ? void 0 : _this$_fullRequestRea2._loaded) !== null && _this$_fullRequestRea !== void 0 ? _this$_fullRequestRea : 0;
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(evt) {
      if (evt.total === undefined) {
        var firstReader = this._rangeReaders[0];
        if (firstReader !== null && firstReader !== void 0 && firstReader.onProgress) {
          firstReader.onProgress({
            loaded: evt.loaded
          });
        }
      } else {
        var fullReader = this._fullRequestReader;
        if (fullReader !== null && fullReader !== void 0 && fullReader.onProgress) {
          fullReader.onProgress({
            loaded: evt.loaded,
            total: evt.total
          });
        }
      }
    }
  }, {
    key: "_onProgressiveDone",
    value: function _onProgressiveDone() {
      if (this._fullRequestReader) {
        this._fullRequestReader.progressiveDone();
      }
      this._progressiveDone = true;
    }
  }, {
    key: "_removeRangeReader",
    value: function _removeRangeReader(reader) {
      var i = this._rangeReaders.indexOf(reader);
      if (i >= 0) {
        this._rangeReaders.splice(i, 1);
      }
    }
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
      var queuedChunks = this._queuedChunks;
      this._queuedChunks = null;
      return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone);
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }
      var reader = new PDFDataTransportStreamRangeReader(this, begin, end);
      this._pdfDataRangeTransport.requestDataRange(begin, end);
      this._rangeReaders.push(reader);
      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeReaders.slice(0);
      readers.forEach(function (rangeReader) {
        rangeReader.cancel(reason);
      });
      this._pdfDataRangeTransport.abort();
    }
  }]);
}();
var PDFDataTransportStreamReader = /*#__PURE__*/function () {
  function PDFDataTransportStreamReader(stream, queuedChunks) {
    var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, PDFDataTransportStreamReader);
    this._stream = stream;
    this._done = progressiveDone || false;
    this._filename = null;
    this._queuedChunks = queuedChunks || [];
    this._loaded = 0;
    var _iterator = _createForOfIteratorHelper(this._queuedChunks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var chunk = _step.value;
        this._loaded += chunk.byteLength;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;
    this.onProgress = null;
  }
  return _createClass(PDFDataTransportStreamReader, [{
    key: "_enqueue",
    value: function _enqueue(chunk) {
      if (this._done) {
        return;
      }
      if (this._requests.length > 0) {
        var requestCapability = this._requests.shift();
        requestCapability.resolve({
          value: chunk,
          done: false
        });
      } else {
        this._queuedChunks.push(chunk);
      }
      this._loaded += chunk.byteLength;
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersReady;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._stream._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._stream._isStreamingSupported;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._stream._contentLength;
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var chunk, requestCapability;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this._queuedChunks.length > 0)) {
                _context.next = 3;
                break;
              }
              chunk = this._queuedChunks.shift();
              return _context.abrupt("return", {
                value: chunk,
                done: false
              });
            case 3:
              if (!this._done) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", {
                value: undefined,
                done: true
              });
            case 5:
              requestCapability = (0, _util.createPromiseCapability)();
              this._requests.push(requestCapability);
              return _context.abrupt("return", requestCapability.promise);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function read() {
        return _read.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
    }
  }, {
    key: "progressiveDone",
    value: function progressiveDone() {
      if (this._done) {
        return;
      }
      this._done = true;
    }
  }]);
}();
var PDFDataTransportStreamRangeReader = /*#__PURE__*/function () {
  function PDFDataTransportStreamRangeReader(stream, begin, end) {
    _classCallCheck(this, PDFDataTransportStreamRangeReader);
    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  return _createClass(PDFDataTransportStreamRangeReader, [{
    key: "_enqueue",
    value: function _enqueue(chunk) {
      if (this._done) {
        return;
      }
      if (this._requests.length === 0) {
        this._queuedChunk = chunk;
      } else {
        var requestsCapability = this._requests.shift();
        requestsCapability.resolve({
          value: chunk,
          done: false
        });
        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });
        this._requests = [];
      }
      this._done = true;
      this._stream._removeRangeReader(this);
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return false;
    }
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var chunk, requestCapability;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this._queuedChunk) {
                _context2.next = 4;
                break;
              }
              chunk = this._queuedChunk;
              this._queuedChunk = null;
              return _context2.abrupt("return", {
                value: chunk,
                done: false
              });
            case 4:
              if (!this._done) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", {
                value: undefined,
                done: true
              });
            case 6:
              requestCapability = (0, _util.createPromiseCapability)();
              this._requests.push(requestCapability);
              return _context2.abrupt("return", requestCapability.promise);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function read() {
        return _read2.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
      this._stream._removeRangeReader(this);
    }
  }]);
}();

/***/ }),
/* 200 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WebGLContext = void 0;
var _util = __w_pdfjs_require__(2);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var WebGLContext = exports.WebGLContext = /*#__PURE__*/function () {
  function WebGLContext(_ref) {
    var _ref$enable = _ref.enable,
      enable = _ref$enable === void 0 ? false : _ref$enable;
    _classCallCheck(this, WebGLContext);
    this._enabled = enable === true;
  }
  return _createClass(WebGLContext, [{
    key: "isEnabled",
    get: function get() {
      var enabled = this._enabled;
      if (enabled) {
        enabled = WebGLUtils.tryInitGL();
      }
      return (0, _util.shadow)(this, "isEnabled", enabled);
    }
  }, {
    key: "composeSMask",
    value: function composeSMask(_ref2) {
      var layer = _ref2.layer,
        mask = _ref2.mask,
        properties = _ref2.properties;
      return WebGLUtils.composeSMask(layer, mask, properties);
    }
  }, {
    key: "drawFigures",
    value: function drawFigures(_ref3) {
      var width = _ref3.width,
        height = _ref3.height,
        backgroundColor = _ref3.backgroundColor,
        figures = _ref3.figures,
        context = _ref3.context;
      return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
    }
  }, {
    key: "clear",
    value: function clear() {
      WebGLUtils.cleanup();
    }
  }]);
}();
var WebGLUtils = function WebGLUtilsClosure() {
  function loadShader(gl, code, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      var errorMsg = gl.getShaderInfoLog(shader);
      throw new Error("Error during shader compilation: " + errorMsg);
    }
    return shader;
  }
  function createVertexShader(gl, code) {
    return loadShader(gl, code, gl.VERTEX_SHADER);
  }
  function createFragmentShader(gl, code) {
    return loadShader(gl, code, gl.FRAGMENT_SHADER);
  }
  function createProgram(gl, shaders) {
    var program = gl.createProgram();
    for (var i = 0, ii = shaders.length; i < ii; ++i) {
      gl.attachShader(program, shaders[i]);
    }
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
      var errorMsg = gl.getProgramInfoLog(program);
      throw new Error("Error during program linking: " + errorMsg);
    }
    return program;
  }
  function createTexture(gl, image, textureId) {
    gl.activeTexture(textureId);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    return texture;
  }
  var currentGL, currentCanvas;
  function generateGL() {
    if (currentGL) {
      return;
    }
    currentCanvas = document.createElement("canvas");
    currentGL = currentCanvas.getContext("webgl", {
      premultipliedalpha: false
    });
  }
  var smaskVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ";
  var smaskFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ";
  var smaskCache = null;
  function initSmaskGL() {
    generateGL();
    var canvas = currentCanvas;
    currentCanvas = null;
    var gl = currentGL;
    currentGL = null;
    var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);
    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    cache.positionLocation = gl.getAttribLocation(program, "a_position");
    cache.backdropLocation = gl.getUniformLocation(program, "u_backdrop");
    cache.subtypeLocation = gl.getUniformLocation(program, "u_subtype");
    var texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
    var texLayerLocation = gl.getUniformLocation(program, "u_image");
    var texMaskLocation = gl.getUniformLocation(program, "u_mask");
    var texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1i(texLayerLocation, 0);
    gl.uniform1i(texMaskLocation, 1);
    smaskCache = cache;
  }
  function composeSMask(layer, mask, properties) {
    var width = layer.width,
      height = layer.height;
    if (!smaskCache) {
      initSmaskGL();
    }
    var cache = smaskCache,
      canvas = cache.canvas,
      gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);
    if (properties.backdrop) {
      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
    } else {
      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
    }
    gl.uniform1i(cache.subtypeLocation, properties.subtype === "Luminosity" ? 1 : 0);
    var texture = createTexture(gl, layer, gl.TEXTURE0);
    var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.flush();
    gl.deleteTexture(texture);
    gl.deleteTexture(maskTexture);
    gl.deleteBuffer(buffer);
    return canvas;
  }
  var figuresVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ";
  var figuresFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ";
  var figuresCache = null;
  function initFiguresGL() {
    generateGL();
    var canvas = currentCanvas;
    currentCanvas = null;
    var gl = currentGL;
    currentGL = null;
    var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);
    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    cache.scaleLocation = gl.getUniformLocation(program, "u_scale");
    cache.offsetLocation = gl.getUniformLocation(program, "u_offset");
    cache.positionLocation = gl.getAttribLocation(program, "a_position");
    cache.colorLocation = gl.getAttribLocation(program, "a_color");
    figuresCache = cache;
  }
  function drawFigures(width, height, backgroundColor, figures, context) {
    if (!figuresCache) {
      initFiguresGL();
    }
    var cache = figuresCache,
      canvas = cache.canvas,
      gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);
    var count = 0;
    for (var i = 0, ii = figures.length; i < ii; i++) {
      switch (figures[i].type) {
        case "lattice":
          var rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
          count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
          break;
        case "triangles":
          count += figures[i].coords.length;
          break;
      }
    }
    var coords = new Float32Array(count * 2);
    var colors = new Uint8Array(count * 3);
    var coordsMap = context.coords,
      colorsMap = context.colors;
    var pIndex = 0,
      cIndex = 0;
    for (var _i = 0, _ii = figures.length; _i < _ii; _i++) {
      var figure = figures[_i],
        ps = figure.coords,
        cs = figure.colors;
      switch (figure.type) {
        case "lattice":
          var cols = figure.verticesPerRow;
          var _rows = ps.length / cols | 0;
          for (var row = 1; row < _rows; row++) {
            var offset = row * cols + 1;
            for (var col = 1; col < cols; col++, offset++) {
              coords[pIndex] = coordsMap[ps[offset - cols - 1]];
              coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
              coords[pIndex + 2] = coordsMap[ps[offset - cols]];
              coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
              coords[pIndex + 4] = coordsMap[ps[offset - 1]];
              coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
              colors[cIndex] = colorsMap[cs[offset - cols - 1]];
              colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
              colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
              colors[cIndex + 3] = colorsMap[cs[offset - cols]];
              colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
              colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
              colors[cIndex + 6] = colorsMap[cs[offset - 1]];
              colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
              colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
              coords[pIndex + 6] = coords[pIndex + 2];
              coords[pIndex + 7] = coords[pIndex + 3];
              coords[pIndex + 8] = coords[pIndex + 4];
              coords[pIndex + 9] = coords[pIndex + 5];
              coords[pIndex + 10] = coordsMap[ps[offset]];
              coords[pIndex + 11] = coordsMap[ps[offset] + 1];
              colors[cIndex + 9] = colors[cIndex + 3];
              colors[cIndex + 10] = colors[cIndex + 4];
              colors[cIndex + 11] = colors[cIndex + 5];
              colors[cIndex + 12] = colors[cIndex + 6];
              colors[cIndex + 13] = colors[cIndex + 7];
              colors[cIndex + 14] = colors[cIndex + 8];
              colors[cIndex + 15] = colorsMap[cs[offset]];
              colors[cIndex + 16] = colorsMap[cs[offset] + 1];
              colors[cIndex + 17] = colorsMap[cs[offset] + 2];
              pIndex += 12;
              cIndex += 18;
            }
          }
          break;
        case "triangles":
          for (var j = 0, jj = ps.length; j < jj; j++) {
            coords[pIndex] = coordsMap[ps[j]];
            coords[pIndex + 1] = coordsMap[ps[j] + 1];
            colors[cIndex] = colorsMap[cs[j]];
            colors[cIndex + 1] = colorsMap[cs[j] + 1];
            colors[cIndex + 2] = colorsMap[cs[j] + 2];
            pIndex += 2;
            cIndex += 3;
          }
          break;
      }
    }
    if (backgroundColor) {
      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }
    gl.clear(gl.COLOR_BUFFER_BIT);
    var coordsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
    var colorsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.colorLocation);
    gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
    gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
    gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
    gl.drawArrays(gl.TRIANGLES, 0, count);
    gl.flush();
    gl.deleteBuffer(coordsBuffer);
    gl.deleteBuffer(colorsBuffer);
    return canvas;
  }
  return {
    tryInitGL: function tryInitGL() {
      try {
        generateGL();
        return !!currentGL;
      } catch (ex) {}
      return false;
    },
    composeSMask: composeSMask,
    drawFigures: drawFigures,
    cleanup: function cleanup() {
      var _smaskCache, _figuresCache;
      if ((_smaskCache = smaskCache) !== null && _smaskCache !== void 0 && _smaskCache.canvas) {
        smaskCache.canvas.width = 0;
        smaskCache.canvas.height = 0;
      }
      if ((_figuresCache = figuresCache) !== null && _figuresCache !== void 0 && _figuresCache.canvas) {
        figuresCache.canvas.width = 0;
        figuresCache.canvas.height = 0;
      }
      smaskCache = null;
      figuresCache = null;
    }
  };
}();

/***/ }),
/* 201 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AnnotationLayer = void 0;
var _display_utils = __w_pdfjs_require__(1);
var _util = __w_pdfjs_require__(2);
var _annotation_storage = __w_pdfjs_require__(190);
var _scripting_utils = __w_pdfjs_require__(202);
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AnnotationElementFactory = /*#__PURE__*/function () {
  function AnnotationElementFactory() {
    _classCallCheck(this, AnnotationElementFactory);
  }
  return _createClass(AnnotationElementFactory, null, [{
    key: "create",
    value: function create(parameters) {
      var subtype = parameters.data.annotationType;
      switch (subtype) {
        case _util.AnnotationType.LINK:
          return new LinkAnnotationElement(parameters);
        case _util.AnnotationType.TEXT:
          return new TextAnnotationElement(parameters);
        case _util.AnnotationType.WIDGET:
          var fieldType = parameters.data.fieldType;
          switch (fieldType) {
            case "Tx":
              return new TextWidgetAnnotationElement(parameters);
            case "Btn":
              if (parameters.data.radioButton) {
                return new RadioButtonWidgetAnnotationElement(parameters);
              } else if (parameters.data.checkBox) {
                return new CheckboxWidgetAnnotationElement(parameters);
              }
              return new PushButtonWidgetAnnotationElement(parameters);
            case "Ch":
              return new ChoiceWidgetAnnotationElement(parameters);
          }
          return new WidgetAnnotationElement(parameters);
        case _util.AnnotationType.POPUP:
          return new PopupAnnotationElement(parameters);
        case _util.AnnotationType.FREETEXT:
          return new FreeTextAnnotationElement(parameters);
        case _util.AnnotationType.LINE:
          return new LineAnnotationElement(parameters);
        case _util.AnnotationType.SQUARE:
          return new SquareAnnotationElement(parameters);
        case _util.AnnotationType.CIRCLE:
          return new CircleAnnotationElement(parameters);
        case _util.AnnotationType.POLYLINE:
          return new PolylineAnnotationElement(parameters);
        case _util.AnnotationType.CARET:
          return new CaretAnnotationElement(parameters);
        case _util.AnnotationType.INK:
          return new InkAnnotationElement(parameters);
        case _util.AnnotationType.POLYGON:
          return new PolygonAnnotationElement(parameters);
        case _util.AnnotationType.HIGHLIGHT:
          return new HighlightAnnotationElement(parameters);
        case _util.AnnotationType.UNDERLINE:
          return new UnderlineAnnotationElement(parameters);
        case _util.AnnotationType.SQUIGGLY:
          return new SquigglyAnnotationElement(parameters);
        case _util.AnnotationType.STRIKEOUT:
          return new StrikeOutAnnotationElement(parameters);
        case _util.AnnotationType.STAMP:
          return new StampAnnotationElement(parameters);
        case _util.AnnotationType.FILEATTACHMENT:
          return new FileAttachmentAnnotationElement(parameters);
        default:
          return new AnnotationElement(parameters);
      }
    }
  }]);
}();
var AnnotationElement = /*#__PURE__*/function () {
  function AnnotationElement(parameters) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$isRenderable = _ref.isRenderable,
      isRenderable = _ref$isRenderable === void 0 ? false : _ref$isRenderable,
      _ref$ignoreBorder = _ref.ignoreBorder,
      ignoreBorder = _ref$ignoreBorder === void 0 ? false : _ref$ignoreBorder,
      _ref$createQuadrilate = _ref.createQuadrilaterals,
      createQuadrilaterals = _ref$createQuadrilate === void 0 ? false : _ref$createQuadrilate;
    _classCallCheck(this, AnnotationElement);
    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.page = parameters.page;
    this.viewport = parameters.viewport;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderInteractiveForms = parameters.renderInteractiveForms;
    this.svgFactory = parameters.svgFactory;
    this.annotationStorage = parameters.annotationStorage;
    this.enableScripting = parameters.enableScripting;
    this.hasJSActions = parameters.hasJSActions;
    this._mouseState = parameters.mouseState;
    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
    if (createQuadrilaterals) {
      this.quadrilaterals = this._createQuadrilaterals(ignoreBorder);
    }
  }
  return _createClass(AnnotationElement, [{
    key: "_createContainer",
    value: function _createContainer() {
      var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = this.data,
        page = this.page,
        viewport = this.viewport;
      var container = document.createElement("section");
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      container.setAttribute("data-annotation-id", data.id);
      var rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
      container.style.transform = "matrix(".concat(viewport.transform.join(","), ")");
      container.style.transformOrigin = "".concat(-rect[0], "px ").concat(-rect[1], "px");
      if (!ignoreBorder && data.borderStyle.width > 0) {
        container.style.borderWidth = "".concat(data.borderStyle.width, "px");
        if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
          width = width - 2 * data.borderStyle.width;
          height = height - 2 * data.borderStyle.width;
        }
        var horizontalRadius = data.borderStyle.horizontalCornerRadius;
        var verticalRadius = data.borderStyle.verticalCornerRadius;
        if (horizontalRadius > 0 || verticalRadius > 0) {
          var radius = "".concat(horizontalRadius, "px / ").concat(verticalRadius, "px");
          container.style.borderRadius = radius;
        }
        switch (data.borderStyle.style) {
          case _util.AnnotationBorderStyleType.SOLID:
            container.style.borderStyle = "solid";
            break;
          case _util.AnnotationBorderStyleType.DASHED:
            container.style.borderStyle = "dashed";
            break;
          case _util.AnnotationBorderStyleType.BEVELED:
            (0, _util.warn)("Unimplemented border style: beveled");
            break;
          case _util.AnnotationBorderStyleType.INSET:
            (0, _util.warn)("Unimplemented border style: inset");
            break;
          case _util.AnnotationBorderStyleType.UNDERLINE:
            container.style.borderBottomStyle = "solid";
            break;
          default:
            break;
        }
        if (data.color) {
          container.style.borderColor = _util.Util.makeHexColor(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
        } else {
          container.style.borderWidth = 0;
        }
      }
      container.style.left = "".concat(rect[0], "px");
      container.style.top = "".concat(rect[1], "px");
      container.style.width = "".concat(width, "px");
      container.style.height = "".concat(height, "px");
      return container;
    }
  }, {
    key: "_createQuadrilaterals",
    value: function _createQuadrilaterals() {
      var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.data.quadPoints) {
        return null;
      }
      var quadrilaterals = [];
      var savedRect = this.data.rect;
      var _iterator = _createForOfIteratorHelper(this.data.quadPoints),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var quadPoint = _step.value;
          this.data.rect = [quadPoint[2].x, quadPoint[2].y, quadPoint[1].x, quadPoint[1].y];
          quadrilaterals.push(this._createContainer(ignoreBorder));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.data.rect = savedRect;
      return quadrilaterals;
    }
  }, {
    key: "_createPopup",
    value: function _createPopup(trigger, data) {
      var container = this.container;
      if (this.quadrilaterals) {
        trigger = trigger || this.quadrilaterals;
        container = this.quadrilaterals[0];
      }
      if (!trigger) {
        trigger = document.createElement("div");
        trigger.style.height = container.style.height;
        trigger.style.width = container.style.width;
        container.appendChild(trigger);
      }
      var popupElement = new PopupElement({
        container: container,
        trigger: trigger,
        color: data.color,
        title: data.title,
        modificationDate: data.modificationDate,
        contents: data.contents,
        hideWrapper: true
      });
      var popup = popupElement.render();
      popup.style.left = container.style.width;
      container.appendChild(popup);
    }
  }, {
    key: "_renderQuadrilaterals",
    value: function _renderQuadrilaterals(className) {
      this.quadrilaterals.forEach(function (quadrilateral) {
        quadrilateral.className = className;
      });
      return this.quadrilaterals;
    }
  }, {
    key: "render",
    value: function render() {
      (0, _util.unreachable)("Abstract method `AnnotationElement.render` called");
    }
  }]);
}();
var LinkAnnotationElement = /*#__PURE__*/function (_AnnotationElement) {
  function LinkAnnotationElement(parameters) {
    _classCallCheck(this, LinkAnnotationElement);
    var isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action || parameters.data.isTooltipOnly || parameters.data.actions && (parameters.data.actions.Action || parameters.data.actions["Mouse Up"] || parameters.data.actions["Mouse Down"]));
    return _callSuper(this, LinkAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      createQuadrilaterals: true
    }]);
  }
  _inherits(LinkAnnotationElement, _AnnotationElement);
  return _createClass(LinkAnnotationElement, [{
    key: "render",
    value: function render() {
      var data = this.data,
        linkService = this.linkService;
      var link = document.createElement("a");
      if (data.url) {
        (0, _display_utils.addLinkAttributes)(link, {
          url: data.url,
          target: data.newWindow ? _display_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
          rel: linkService.externalLinkRel,
          enabled: linkService.externalLinkEnabled
        });
      } else if (data.action) {
        this._bindNamedAction(link, data.action);
      } else if (data.dest) {
        this._bindLink(link, data.dest);
      } else if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
        this._bindJSAction(link, data);
      } else {
        this._bindLink(link, "");
      }
      if (this.quadrilaterals) {
        return this._renderQuadrilaterals("linkAnnotation").map(function (quadrilateral, index) {
          var linkElement = index === 0 ? link : link.cloneNode();
          quadrilateral.appendChild(linkElement);
          return quadrilateral;
        });
      }
      this.container.className = "linkAnnotation";
      this.container.appendChild(link);
      return this.container;
    }
  }, {
    key: "_bindLink",
    value: function _bindLink(link, destination) {
      var _this = this;
      link.href = this.linkService.getDestinationHash(destination);
      link.onclick = function () {
        if (destination) {
          _this.linkService.goToDestination(destination);
        }
        return false;
      };
      if (destination || destination === "") {
        link.className = "internalLink";
      }
    }
  }, {
    key: "_bindNamedAction",
    value: function _bindNamedAction(link, action) {
      var _this2 = this;
      link.href = this.linkService.getAnchorUrl("");
      link.onclick = function () {
        _this2.linkService.executeNamedAction(action);
        return false;
      };
      link.className = "internalLink";
    }
  }, {
    key: "_bindJSAction",
    value: function _bindJSAction(link, data) {
      var _this3 = this;
      link.href = this.linkService.getAnchorUrl("");
      var map = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
      var _loop = function _loop() {
        var name = _Object$keys[_i];
        var jsName = map.get(name);
        if (!jsName) {
          return 1; // continue
        }
        link[jsName] = function () {
          var _this3$linkService$ev;
          (_this3$linkService$ev = _this3.linkService.eventBus) === null || _this3$linkService$ev === void 0 || _this3$linkService$ev.dispatch("dispatcheventinsandbox", {
            source: _this3,
            detail: {
              id: data.id,
              name: name
            }
          });
          return false;
        };
      };
      for (var _i = 0, _Object$keys = Object.keys(data.actions); _i < _Object$keys.length; _i++) {
        if (_loop()) continue;
      }
      link.className = "internalLink";
    }
  }]);
}(AnnotationElement);
var TextAnnotationElement = /*#__PURE__*/function (_AnnotationElement2) {
  function TextAnnotationElement(parameters) {
    _classCallCheck(this, TextAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, TextAnnotationElement, [parameters, {
      isRenderable: isRenderable
    }]);
  }
  _inherits(TextAnnotationElement, _AnnotationElement2);
  return _createClass(TextAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "textAnnotation";
      var image = document.createElement("img");
      image.style.height = this.container.style.height;
      image.style.width = this.container.style.width;
      image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
      image.alt = "[{{type}} Annotation]";
      image.dataset.l10nId = "text_annotation_type";
      image.dataset.l10nArgs = JSON.stringify({
        type: this.data.name
      });
      if (!this.data.hasPopup) {
        this._createPopup(image, this.data);
      }
      this.container.appendChild(image);
      return this.container;
    }
  }]);
}(AnnotationElement);
var WidgetAnnotationElement = /*#__PURE__*/function (_AnnotationElement3) {
  function WidgetAnnotationElement() {
    _classCallCheck(this, WidgetAnnotationElement);
    return _callSuper(this, WidgetAnnotationElement, arguments);
  }
  _inherits(WidgetAnnotationElement, _AnnotationElement3);
  return _createClass(WidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      if (this.data.alternativeText) {
        this.container.title = this.data.alternativeText;
      }
      return this.container;
    }
  }, {
    key: "_getKeyModifier",
    value: function _getKeyModifier(event) {
      return navigator.platform.includes("Win") && event.ctrlKey || navigator.platform.includes("Mac") && event.metaKey;
    }
  }, {
    key: "_setEventListener",
    value: function _setEventListener(element, baseName, eventName, valueGetter) {
      var _this4 = this;
      if (baseName.includes("mouse")) {
        element.addEventListener(baseName, function (event) {
          var _this4$linkService$ev;
          (_this4$linkService$ev = _this4.linkService.eventBus) === null || _this4$linkService$ev === void 0 || _this4$linkService$ev.dispatch("dispatcheventinsandbox", {
            source: _this4,
            detail: {
              id: _this4.data.id,
              name: eventName,
              value: valueGetter(event),
              shift: event.shiftKey,
              modifier: _this4._getKeyModifier(event)
            }
          });
        });
      } else {
        element.addEventListener(baseName, function (event) {
          var _this4$linkService$ev2;
          (_this4$linkService$ev2 = _this4.linkService.eventBus) === null || _this4$linkService$ev2 === void 0 || _this4$linkService$ev2.dispatch("dispatcheventinsandbox", {
            source: _this4,
            detail: {
              id: _this4.data.id,
              name: eventName,
              value: event.target.checked
            }
          });
        });
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(element, names, getter) {
      var _iterator2 = _createForOfIteratorHelper(names),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _this$data$actions;
          var _step2$value = _slicedToArray(_step2.value, 2),
            baseName = _step2$value[0],
            eventName = _step2$value[1];
          if (eventName === "Action" || (_this$data$actions = this.data.actions) !== null && _this$data$actions !== void 0 && _this$data$actions[eventName]) {
            this._setEventListener(element, baseName, eventName, getter);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
}(AnnotationElement);
var TextWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem) {
  function TextWidgetAnnotationElement(parameters) {
    _classCallCheck(this, TextWidgetAnnotationElement);
    var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
    return _callSuper(this, TextWidgetAnnotationElement, [parameters, {
      isRenderable: isRenderable
    }]);
  }
  _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);
  return _createClass(TextWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var _this5 = this;
      var storage = this.annotationStorage;
      var id = this.data.id;
      this.container.className = "textWidgetAnnotation";
      var element = null;
      if (this.renderInteractiveForms) {
        var textContent = storage.getOrCreateValue(id, {
          value: this.data.fieldValue
        }).value;
        var elementData = {
          userValue: null,
          formattedValue: null,
          beforeInputSelectionRange: null,
          beforeInputValue: null
        };
        if (this.data.multiLine) {
          element = document.createElement("textarea");
          element.textContent = textContent;
        } else {
          element = document.createElement("input");
          element.type = "text";
          element.setAttribute("value", textContent);
        }
        elementData.userValue = textContent;
        element.setAttribute("id", id);
        element.addEventListener("input", function (event) {
          storage.setValue(id, {
            value: event.target.value
          });
        });
        var blurListener = function blurListener(event) {
          if (elementData.formattedValue) {
            event.target.value = elementData.formattedValue;
          }
          event.target.setSelectionRange(0, 0);
          elementData.beforeInputSelectionRange = null;
        };
        if (this.enableScripting && this.hasJSActions) {
          element.addEventListener("focus", function (event) {
            if (elementData.userValue) {
              event.target.value = elementData.userValue;
            }
          });
          element.addEventListener("updatefromsandbox", function (event) {
            var detail = event.detail;
            var actions = {
              value: function value() {
                elementData.userValue = detail.value || "";
                storage.setValue(id, {
                  value: elementData.userValue.toString()
                });
                if (!elementData.formattedValue) {
                  event.target.value = elementData.userValue;
                }
              },
              valueAsString: function valueAsString() {
                elementData.formattedValue = detail.valueAsString || "";
                if (event.target !== document.activeElement) {
                  event.target.value = elementData.formattedValue;
                }
                storage.setValue(id, {
                  formattedValue: elementData.formattedValue
                });
              },
              focus: function focus() {
                setTimeout(function () {
                  return event.target.focus({
                    preventScroll: false
                  });
                }, 0);
              },
              userName: function userName() {
                event.target.title = detail.userName;
              },
              hidden: function hidden() {
                event.target.style.visibility = detail.hidden ? "hidden" : "visible";
                storage.setValue(id, {
                  hidden: detail.hidden
                });
              },
              editable: function editable() {
                event.target.disabled = !detail.editable;
              },
              selRange: function selRange() {
                var _detail$selRange = _slicedToArray(detail.selRange, 2),
                  selStart = _detail$selRange[0],
                  selEnd = _detail$selRange[1];
                if (selStart >= 0 && selEnd < event.target.value.length) {
                  event.target.setSelectionRange(selStart, selEnd);
                }
              },
              strokeColor: function strokeColor() {
                var color = detail.strokeColor;
                event.target.style.color = _scripting_utils.ColorConverters["".concat(color[0], "_HTML")](color.slice(1));
              }
            };
            Object.keys(detail).filter(function (name) {
              return name in actions;
            }).forEach(function (name) {
              return actions[name]();
            });
          });
          if (this.data.actions) {
            element.addEventListener("keydown", function (event) {
              var _this5$linkService$ev;
              elementData.beforeInputValue = event.target.value;
              var commitKey = -1;
              if (event.key === "Escape") {
                commitKey = 0;
              } else if (event.key === "Enter") {
                commitKey = 2;
              } else if (event.key === "Tab") {
                commitKey = 3;
              }
              if (commitKey === -1) {
                return;
              }
              elementData.userValue = event.target.value;
              (_this5$linkService$ev = _this5.linkService.eventBus) === null || _this5$linkService$ev === void 0 || _this5$linkService$ev.dispatch("dispatcheventinsandbox", {
                source: _this5,
                detail: {
                  id: id,
                  name: "Keystroke",
                  value: event.target.value,
                  willCommit: true,
                  commitKey: commitKey,
                  selStart: event.target.selectionStart,
                  selEnd: event.target.selectionEnd
                }
              });
            });
            var _blurListener = blurListener;
            blurListener = null;
            element.addEventListener("blur", function (event) {
              if (_this5._mouseState.isDown) {
                var _this5$linkService$ev2;
                elementData.userValue = event.target.value;
                (_this5$linkService$ev2 = _this5.linkService.eventBus) === null || _this5$linkService$ev2 === void 0 || _this5$linkService$ev2.dispatch("dispatcheventinsandbox", {
                  source: _this5,
                  detail: {
                    id: id,
                    name: "Keystroke",
                    value: event.target.value,
                    willCommit: true,
                    commitKey: 1,
                    selStart: event.target.selectionStart,
                    selEnd: event.target.selectionEnd
                  }
                });
              }
              _blurListener(event);
            });
            element.addEventListener("mousedown", function (event) {
              elementData.beforeInputValue = event.target.value;
              elementData.beforeInputSelectionRange = null;
            });
            element.addEventListener("keyup", function (event) {
              if (event.target.selectionStart === event.target.selectionEnd) {
                elementData.beforeInputSelectionRange = null;
              }
            });
            element.addEventListener("select", function (event) {
              elementData.beforeInputSelectionRange = [event.target.selectionStart, event.target.selectionEnd];
            });
            if ("Keystroke" in this.data.actions) {
              element.addEventListener("input", function (event) {
                var _this5$linkService$ev3;
                var selStart = -1;
                var selEnd = -1;
                if (elementData.beforeInputSelectionRange) {
                  var _elementData$beforeIn = _slicedToArray(elementData.beforeInputSelectionRange, 2);
                  selStart = _elementData$beforeIn[0];
                  selEnd = _elementData$beforeIn[1];
                }
                (_this5$linkService$ev3 = _this5.linkService.eventBus) === null || _this5$linkService$ev3 === void 0 || _this5$linkService$ev3.dispatch("dispatcheventinsandbox", {
                  source: _this5,
                  detail: {
                    id: id,
                    name: "Keystroke",
                    value: elementData.beforeInputValue,
                    change: event.data,
                    willCommit: false,
                    selStart: selStart,
                    selEnd: selEnd
                  }
                });
              });
            }
            this._setEventListeners(element, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function (event) {
              return event.target.value;
            });
          }
        }
        if (blurListener) {
          element.addEventListener("blur", blurListener);
        }
        element.disabled = this.data.readOnly;
        element.name = this.data.fieldName;
        if (this.data.maxLen !== null) {
          element.maxLength = this.data.maxLen;
        }
        if (this.data.comb) {
          var fieldWidth = this.data.rect[2] - this.data.rect[0];
          var combWidth = fieldWidth / this.data.maxLen;
          element.classList.add("comb");
          element.style.letterSpacing = "calc(".concat(combWidth, "px - 1ch)");
        }
      } else {
        element = document.createElement("div");
        element.textContent = this.data.fieldValue;
        element.style.verticalAlign = "middle";
        element.style.display = "table-cell";
      }
      this._setTextStyle(element);
      this.container.appendChild(element);
      return this.container;
    }
  }, {
    key: "_setTextStyle",
    value: function _setTextStyle(element) {
      var TEXT_ALIGNMENT = ["left", "center", "right"];
      var _this$data$defaultApp = this.data.defaultAppearanceData,
        fontSize = _this$data$defaultApp.fontSize,
        fontColor = _this$data$defaultApp.fontColor;
      var style = element.style;
      if (fontSize) {
        style.fontSize = "".concat(fontSize, "px");
      }
      style.color = _util.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
      if (this.data.textAlignment !== null) {
        style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
      }
    }
  }]);
}(WidgetAnnotationElement);
var CheckboxWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem2) {
  function CheckboxWidgetAnnotationElement(parameters) {
    _classCallCheck(this, CheckboxWidgetAnnotationElement);
    return _callSuper(this, CheckboxWidgetAnnotationElement, [parameters, {
      isRenderable: parameters.renderInteractiveForms
    }]);
  }
  _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);
  return _createClass(CheckboxWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var storage = this.annotationStorage;
      var data = this.data;
      var id = data.id;
      var value = storage.getOrCreateValue(id, {
        value: data.fieldValue && data.fieldValue !== "Off"
      }).value;
      this.container.className = "buttonWidgetAnnotation checkBox";
      var element = document.createElement("input");
      element.disabled = data.readOnly;
      element.type = "checkbox";
      element.name = this.data.fieldName;
      if (value) {
        element.setAttribute("checked", true);
      }
      element.setAttribute("id", id);
      element.addEventListener("change", function (event) {
        var name = event.target.name;
        var _iterator3 = _createForOfIteratorHelper(document.getElementsByName(name)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var checkbox = _step3.value;
            if (checkbox !== event.target) {
              checkbox.checked = false;
              storage.setValue(checkbox.parentNode.getAttribute("data-annotation-id"), {
                value: false
              });
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        storage.setValue(id, {
          value: event.target.checked
        });
      });
      if (this.enableScripting && this.hasJSActions) {
        element.addEventListener("updatefromsandbox", function (event) {
          var detail = event.detail;
          var actions = {
            value: function value() {
              event.target.checked = detail.value !== "Off";
              storage.setValue(id, {
                value: event.target.checked
              });
            },
            focus: function focus() {
              setTimeout(function () {
                return event.target.focus({
                  preventScroll: false
                });
              }, 0);
            },
            hidden: function hidden() {
              event.target.style.visibility = detail.hidden ? "hidden" : "visible";
              storage.setValue(id, {
                hidden: detail.hidden
              });
            },
            editable: function editable() {
              event.target.disabled = !detail.editable;
            }
          };
          Object.keys(detail).filter(function (name) {
            return name in actions;
          }).forEach(function (name) {
            return actions[name]();
          });
        });
        this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function (event) {
          return event.target.checked;
        });
      }
      this.container.appendChild(element);
      return this.container;
    }
  }]);
}(WidgetAnnotationElement);
var RadioButtonWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem3) {
  function RadioButtonWidgetAnnotationElement(parameters) {
    _classCallCheck(this, RadioButtonWidgetAnnotationElement);
    return _callSuper(this, RadioButtonWidgetAnnotationElement, [parameters, {
      isRenderable: parameters.renderInteractiveForms
    }]);
  }
  _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);
  return _createClass(RadioButtonWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "buttonWidgetAnnotation radioButton";
      var storage = this.annotationStorage;
      var data = this.data;
      var id = data.id;
      var value = storage.getOrCreateValue(id, {
        value: data.fieldValue === data.buttonValue
      }).value;
      var element = document.createElement("input");
      element.disabled = data.readOnly;
      element.type = "radio";
      element.name = data.fieldName;
      if (value) {
        element.setAttribute("checked", true);
      }
      element.setAttribute("pdfButtonValue", data.buttonValue);
      element.setAttribute("id", id);
      element.addEventListener("change", function (event) {
        var target = event.target;
        var _iterator4 = _createForOfIteratorHelper(document.getElementsByName(target.name)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var radio = _step4.value;
            if (radio !== target) {
              storage.setValue(radio.getAttribute("id"), {
                value: false
              });
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        storage.setValue(id, {
          value: target.checked
        });
      });
      if (this.enableScripting && this.hasJSActions) {
        element.addEventListener("updatefromsandbox", function (event) {
          var detail = event.detail;
          var actions = {
            value: function value() {
              var fieldValue = detail.value;
              var _iterator5 = _createForOfIteratorHelper(document.getElementsByName(event.target.name)),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var radio = _step5.value;
                  var radioId = radio.getAttribute("id");
                  if (fieldValue === radio.getAttribute("pdfButtonValue")) {
                    radio.setAttribute("checked", true);
                    storage.setValue(radioId, {
                      value: true
                    });
                  } else {
                    storage.setValue(radioId, {
                      value: false
                    });
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            },
            focus: function focus() {
              setTimeout(function () {
                return event.target.focus({
                  preventScroll: false
                });
              }, 0);
            },
            hidden: function hidden() {
              event.target.style.visibility = detail.hidden ? "hidden" : "visible";
              storage.setValue(id, {
                hidden: detail.hidden
              });
            },
            editable: function editable() {
              event.target.disabled = !detail.editable;
            }
          };
          Object.keys(detail).filter(function (name) {
            return name in actions;
          }).forEach(function (name) {
            return actions[name]();
          });
        });
        this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function (event) {
          return event.target.checked;
        });
      }
      this.container.appendChild(element);
      return this.container;
    }
  }]);
}(WidgetAnnotationElement);
var PushButtonWidgetAnnotationElement = /*#__PURE__*/function (_LinkAnnotationElemen) {
  function PushButtonWidgetAnnotationElement() {
    _classCallCheck(this, PushButtonWidgetAnnotationElement);
    return _callSuper(this, PushButtonWidgetAnnotationElement, arguments);
  }
  _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);
  return _createClass(PushButtonWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var container = _superPropGet(PushButtonWidgetAnnotationElement, "render", this, 3)([]);
      container.className = "buttonWidgetAnnotation pushButton";
      if (this.data.alternativeText) {
        container.title = this.data.alternativeText;
      }
      return container;
    }
  }]);
}(LinkAnnotationElement);
var ChoiceWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem4) {
  function ChoiceWidgetAnnotationElement(parameters) {
    _classCallCheck(this, ChoiceWidgetAnnotationElement);
    return _callSuper(this, ChoiceWidgetAnnotationElement, [parameters, {
      isRenderable: parameters.renderInteractiveForms
    }]);
  }
  _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);
  return _createClass(ChoiceWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var _this6 = this;
      this.container.className = "choiceWidgetAnnotation";
      var storage = this.annotationStorage;
      var id = this.data.id;
      storage.getOrCreateValue(id, {
        value: this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : undefined
      });
      var selectElement = document.createElement("select");
      selectElement.disabled = this.data.readOnly;
      selectElement.name = this.data.fieldName;
      selectElement.setAttribute("id", id);
      if (!this.data.combo) {
        selectElement.size = this.data.options.length;
        if (this.data.multiSelect) {
          selectElement.multiple = true;
        }
      }
      var _iterator6 = _createForOfIteratorHelper(this.data.options),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var option = _step6.value;
          var optionElement = document.createElement("option");
          optionElement.textContent = option.displayValue;
          optionElement.value = option.exportValue;
          if (this.data.fieldValue.includes(option.exportValue)) {
            optionElement.setAttribute("selected", true);
          }
          selectElement.appendChild(optionElement);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      function getValue(event) {
        var options = event.target.options;
        return options[options.selectedIndex].value;
      }
      if (this.enableScripting && this.hasJSActions) {
        selectElement.addEventListener("updatefromsandbox", function (event) {
          var detail = event.detail;
          var actions = {
            value: function value() {
              var options = event.target.options;
              var value = detail.value;
              var i = options.indexOf(value);
              if (i !== -1) {
                options.selectedIndex = i;
                storage.setValue(id, {
                  value: value
                });
              }
            },
            focus: function focus() {
              setTimeout(function () {
                return event.target.focus({
                  preventScroll: false
                });
              }, 0);
            },
            hidden: function hidden() {
              event.target.style.visibility = detail.hidden ? "hidden" : "visible";
              storage.setValue(id, {
                hidden: detail.hidden
              });
            },
            editable: function editable() {
              event.target.disabled = !detail.editable;
            }
          };
          Object.keys(detail).filter(function (name) {
            return name in actions;
          }).forEach(function (name) {
            return actions[name]();
          });
        });
        selectElement.addEventListener("input", function (event) {
          var _this6$linkService$ev;
          var value = getValue(event);
          storage.setValue(id, {
            value: value
          });
          (_this6$linkService$ev = _this6.linkService.eventBus) === null || _this6$linkService$ev === void 0 || _this6$linkService$ev.dispatch("dispatcheventinsandbox", {
            source: _this6,
            detail: {
              id: id,
              name: "Keystroke",
              changeEx: value,
              willCommit: true,
              commitKey: 1,
              keyDown: false
            }
          });
        });
        this._setEventListeners(selectElement, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function (event) {
          return event.target.checked;
        });
      } else {
        selectElement.addEventListener("input", function (event) {
          storage.setValue(id, {
            value: getValue(event)
          });
        });
      }
      this.container.appendChild(selectElement);
      return this.container;
    }
  }]);
}(WidgetAnnotationElement);
var PopupAnnotationElement = /*#__PURE__*/function (_AnnotationElement4) {
  function PopupAnnotationElement(parameters) {
    _classCallCheck(this, PopupAnnotationElement);
    var isRenderable = !!(parameters.data.title || parameters.data.contents);
    return _callSuper(this, PopupAnnotationElement, [parameters, {
      isRenderable: isRenderable
    }]);
  }
  _inherits(PopupAnnotationElement, _AnnotationElement4);
  return _createClass(PopupAnnotationElement, [{
    key: "render",
    value: function render() {
      var IGNORE_TYPES = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
      this.container.className = "popupAnnotation";
      if (IGNORE_TYPES.includes(this.data.parentType)) {
        return this.container;
      }
      var selector = "[data-annotation-id=\"".concat(this.data.parentId, "\"]");
      var parentElements = this.layer.querySelectorAll(selector);
      if (parentElements.length === 0) {
        return this.container;
      }
      var popup = new PopupElement({
        container: this.container,
        trigger: Array.from(parentElements),
        color: this.data.color,
        title: this.data.title,
        modificationDate: this.data.modificationDate,
        contents: this.data.contents
      });
      var page = this.page;
      var rect = _util.Util.normalizeRect([this.data.parentRect[0], page.view[3] - this.data.parentRect[1] + page.view[1], this.data.parentRect[2], page.view[3] - this.data.parentRect[3] + page.view[1]]);
      var popupLeft = rect[0] + this.data.parentRect[2] - this.data.parentRect[0];
      var popupTop = rect[1];
      this.container.style.transformOrigin = "".concat(-popupLeft, "px ").concat(-popupTop, "px");
      this.container.style.left = "".concat(popupLeft, "px");
      this.container.style.top = "".concat(popupTop, "px");
      this.container.appendChild(popup.render());
      return this.container;
    }
  }]);
}(AnnotationElement);
var PopupElement = /*#__PURE__*/function () {
  function PopupElement(parameters) {
    _classCallCheck(this, PopupElement);
    this.container = parameters.container;
    this.trigger = parameters.trigger;
    this.color = parameters.color;
    this.title = parameters.title;
    this.modificationDate = parameters.modificationDate;
    this.contents = parameters.contents;
    this.hideWrapper = parameters.hideWrapper || false;
    this.pinned = false;
  }
  return _createClass(PopupElement, [{
    key: "render",
    value: function render() {
      var _this7 = this;
      var BACKGROUND_ENLIGHT = 0.7;
      var wrapper = document.createElement("div");
      wrapper.className = "popupWrapper";
      this.hideElement = this.hideWrapper ? wrapper : this.container;
      this.hideElement.setAttribute("hidden", true);
      var popup = document.createElement("div");
      popup.className = "popup";
      var color = this.color;
      if (color) {
        var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
        var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
        var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
        popup.style.backgroundColor = _util.Util.makeHexColor(r | 0, g | 0, b | 0);
      }
      var title = document.createElement("h1");
      title.textContent = this.title;
      popup.appendChild(title);
      var dateObject = _display_utils.PDFDateString.toDateObject(this.modificationDate);
      if (dateObject) {
        var modificationDate = document.createElement("span");
        modificationDate.textContent = "{{date}}, {{time}}";
        modificationDate.dataset.l10nId = "annotation_date_string";
        modificationDate.dataset.l10nArgs = JSON.stringify({
          date: dateObject.toLocaleDateString(),
          time: dateObject.toLocaleTimeString()
        });
        popup.appendChild(modificationDate);
      }
      var contents = this._formatContents(this.contents);
      popup.appendChild(contents);
      if (!Array.isArray(this.trigger)) {
        this.trigger = [this.trigger];
      }
      this.trigger.forEach(function (element) {
        element.addEventListener("click", _this7._toggle.bind(_this7));
        element.addEventListener("mouseover", _this7._show.bind(_this7, false));
        element.addEventListener("mouseout", _this7._hide.bind(_this7, false));
      });
      popup.addEventListener("click", this._hide.bind(this, true));
      wrapper.appendChild(popup);
      return wrapper;
    }
  }, {
    key: "_formatContents",
    value: function _formatContents(contents) {
      var p = document.createElement("p");
      var lines = contents.split(/(?:\r\n?|\n)/);
      for (var i = 0, ii = lines.length; i < ii; ++i) {
        var line = lines[i];
        p.appendChild(document.createTextNode(line));
        if (i < ii - 1) {
          p.appendChild(document.createElement("br"));
        }
      }
      return p;
    }
  }, {
    key: "_toggle",
    value: function _toggle() {
      if (this.pinned) {
        this._hide(true);
      } else {
        this._show(true);
      }
    }
  }, {
    key: "_show",
    value: function _show() {
      var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (pin) {
        this.pinned = true;
      }
      if (this.hideElement.hasAttribute("hidden")) {
        this.hideElement.removeAttribute("hidden");
        this.container.style.zIndex += 1;
      }
    }
  }, {
    key: "_hide",
    value: function _hide() {
      var unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (unpin) {
        this.pinned = false;
      }
      if (!this.hideElement.hasAttribute("hidden") && !this.pinned) {
        this.hideElement.setAttribute("hidden", true);
        this.container.style.zIndex -= 1;
      }
    }
  }]);
}();
var FreeTextAnnotationElement = /*#__PURE__*/function (_AnnotationElement5) {
  function FreeTextAnnotationElement(parameters) {
    _classCallCheck(this, FreeTextAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, FreeTextAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
  }
  _inherits(FreeTextAnnotationElement, _AnnotationElement5);
  return _createClass(FreeTextAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "freeTextAnnotation";
      if (!this.data.hasPopup) {
        this._createPopup(null, this.data);
      }
      return this.container;
    }
  }]);
}(AnnotationElement);
var LineAnnotationElement = /*#__PURE__*/function (_AnnotationElement6) {
  function LineAnnotationElement(parameters) {
    _classCallCheck(this, LineAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, LineAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
  }
  _inherits(LineAnnotationElement, _AnnotationElement6);
  return _createClass(LineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "lineAnnotation";
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var line = this.svgFactory.createElement("svg:line");
      line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
      line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
      line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
      line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
      line.setAttribute("stroke-width", data.borderStyle.width || 1);
      line.setAttribute("stroke", "transparent");
      svg.appendChild(line);
      this.container.append(svg);
      this._createPopup(line, data);
      return this.container;
    }
  }]);
}(AnnotationElement);
var SquareAnnotationElement = /*#__PURE__*/function (_AnnotationElement7) {
  function SquareAnnotationElement(parameters) {
    _classCallCheck(this, SquareAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, SquareAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
  }
  _inherits(SquareAnnotationElement, _AnnotationElement7);
  return _createClass(SquareAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "squareAnnotation";
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var square = this.svgFactory.createElement("svg:rect");
      square.setAttribute("x", borderWidth / 2);
      square.setAttribute("y", borderWidth / 2);
      square.setAttribute("width", width - borderWidth);
      square.setAttribute("height", height - borderWidth);
      square.setAttribute("stroke-width", borderWidth || 1);
      square.setAttribute("stroke", "transparent");
      square.setAttribute("fill", "none");
      svg.appendChild(square);
      this.container.append(svg);
      this._createPopup(square, data);
      return this.container;
    }
  }]);
}(AnnotationElement);
var CircleAnnotationElement = /*#__PURE__*/function (_AnnotationElement8) {
  function CircleAnnotationElement(parameters) {
    _classCallCheck(this, CircleAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, CircleAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
  }
  _inherits(CircleAnnotationElement, _AnnotationElement8);
  return _createClass(CircleAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "circleAnnotation";
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var circle = this.svgFactory.createElement("svg:ellipse");
      circle.setAttribute("cx", width / 2);
      circle.setAttribute("cy", height / 2);
      circle.setAttribute("rx", width / 2 - borderWidth / 2);
      circle.setAttribute("ry", height / 2 - borderWidth / 2);
      circle.setAttribute("stroke-width", borderWidth || 1);
      circle.setAttribute("stroke", "transparent");
      circle.setAttribute("fill", "none");
      svg.appendChild(circle);
      this.container.append(svg);
      this._createPopup(circle, data);
      return this.container;
    }
  }]);
}(AnnotationElement);
var PolylineAnnotationElement = /*#__PURE__*/function (_AnnotationElement9) {
  function PolylineAnnotationElement(parameters) {
    var _this8;
    _classCallCheck(this, PolylineAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    _this8 = _callSuper(this, PolylineAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
    _this8.containerClassName = "polylineAnnotation";
    _this8.svgElementName = "svg:polyline";
    return _this8;
  }
  _inherits(PolylineAnnotationElement, _AnnotationElement9);
  return _createClass(PolylineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var points = [];
      var _iterator7 = _createForOfIteratorHelper(data.vertices),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var coordinate = _step7.value;
          var x = coordinate.x - data.rect[0];
          var y = data.rect[3] - coordinate.y;
          points.push(x + "," + y);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      points = points.join(" ");
      var polyline = this.svgFactory.createElement(this.svgElementName);
      polyline.setAttribute("points", points);
      polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
      polyline.setAttribute("stroke", "transparent");
      polyline.setAttribute("fill", "none");
      svg.appendChild(polyline);
      this.container.append(svg);
      this._createPopup(polyline, data);
      return this.container;
    }
  }]);
}(AnnotationElement);
var PolygonAnnotationElement = /*#__PURE__*/function (_PolylineAnnotationEl) {
  function PolygonAnnotationElement(parameters) {
    var _this9;
    _classCallCheck(this, PolygonAnnotationElement);
    _this9 = _callSuper(this, PolygonAnnotationElement, [parameters]);
    _this9.containerClassName = "polygonAnnotation";
    _this9.svgElementName = "svg:polygon";
    return _this9;
  }
  _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);
  return _createClass(PolygonAnnotationElement);
}(PolylineAnnotationElement);
var CaretAnnotationElement = /*#__PURE__*/function (_AnnotationElement10) {
  function CaretAnnotationElement(parameters) {
    _classCallCheck(this, CaretAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, CaretAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
  }
  _inherits(CaretAnnotationElement, _AnnotationElement10);
  return _createClass(CaretAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "caretAnnotation";
      if (!this.data.hasPopup) {
        this._createPopup(null, this.data);
      }
      return this.container;
    }
  }]);
}(AnnotationElement);
var InkAnnotationElement = /*#__PURE__*/function (_AnnotationElement11) {
  function InkAnnotationElement(parameters) {
    var _this10;
    _classCallCheck(this, InkAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    _this10 = _callSuper(this, InkAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
    _this10.containerClassName = "inkAnnotation";
    _this10.svgElementName = "svg:polyline";
    return _this10;
  }
  _inherits(InkAnnotationElement, _AnnotationElement11);
  return _createClass(InkAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var _iterator8 = _createForOfIteratorHelper(data.inkLists),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var inkList = _step8.value;
          var points = [];
          var _iterator9 = _createForOfIteratorHelper(inkList),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var coordinate = _step9.value;
              var x = coordinate.x - data.rect[0];
              var y = data.rect[3] - coordinate.y;
              points.push("".concat(x, ",").concat(y));
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          points = points.join(" ");
          var polyline = this.svgFactory.createElement(this.svgElementName);
          polyline.setAttribute("points", points);
          polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
          polyline.setAttribute("stroke", "transparent");
          polyline.setAttribute("fill", "none");
          this._createPopup(polyline, data);
          svg.appendChild(polyline);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this.container.append(svg);
      return this.container;
    }
  }]);
}(AnnotationElement);
var HighlightAnnotationElement = /*#__PURE__*/function (_AnnotationElement12) {
  function HighlightAnnotationElement(parameters) {
    _classCallCheck(this, HighlightAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, HighlightAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true,
      createQuadrilaterals: true
    }]);
  }
  _inherits(HighlightAnnotationElement, _AnnotationElement12);
  return _createClass(HighlightAnnotationElement, [{
    key: "render",
    value: function render() {
      if (!this.data.hasPopup) {
        this._createPopup(null, this.data);
      }
      if (this.quadrilaterals) {
        return this._renderQuadrilaterals("highlightAnnotation");
      }
      this.container.className = "highlightAnnotation";
      return this.container;
    }
  }]);
}(AnnotationElement);
var UnderlineAnnotationElement = /*#__PURE__*/function (_AnnotationElement13) {
  function UnderlineAnnotationElement(parameters) {
    _classCallCheck(this, UnderlineAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, UnderlineAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true,
      createQuadrilaterals: true
    }]);
  }
  _inherits(UnderlineAnnotationElement, _AnnotationElement13);
  return _createClass(UnderlineAnnotationElement, [{
    key: "render",
    value: function render() {
      if (!this.data.hasPopup) {
        this._createPopup(null, this.data);
      }
      if (this.quadrilaterals) {
        return this._renderQuadrilaterals("underlineAnnotation");
      }
      this.container.className = "underlineAnnotation";
      return this.container;
    }
  }]);
}(AnnotationElement);
var SquigglyAnnotationElement = /*#__PURE__*/function (_AnnotationElement14) {
  function SquigglyAnnotationElement(parameters) {
    _classCallCheck(this, SquigglyAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, SquigglyAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true,
      createQuadrilaterals: true
    }]);
  }
  _inherits(SquigglyAnnotationElement, _AnnotationElement14);
  return _createClass(SquigglyAnnotationElement, [{
    key: "render",
    value: function render() {
      if (!this.data.hasPopup) {
        this._createPopup(null, this.data);
      }
      if (this.quadrilaterals) {
        return this._renderQuadrilaterals("squigglyAnnotation");
      }
      this.container.className = "squigglyAnnotation";
      return this.container;
    }
  }]);
}(AnnotationElement);
var StrikeOutAnnotationElement = /*#__PURE__*/function (_AnnotationElement15) {
  function StrikeOutAnnotationElement(parameters) {
    _classCallCheck(this, StrikeOutAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, StrikeOutAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true,
      createQuadrilaterals: true
    }]);
  }
  _inherits(StrikeOutAnnotationElement, _AnnotationElement15);
  return _createClass(StrikeOutAnnotationElement, [{
    key: "render",
    value: function render() {
      if (!this.data.hasPopup) {
        this._createPopup(null, this.data);
      }
      if (this.quadrilaterals) {
        return this._renderQuadrilaterals("strikeoutAnnotation");
      }
      this.container.className = "strikeoutAnnotation";
      return this.container;
    }
  }]);
}(AnnotationElement);
var StampAnnotationElement = /*#__PURE__*/function (_AnnotationElement16) {
  function StampAnnotationElement(parameters) {
    _classCallCheck(this, StampAnnotationElement);
    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _callSuper(this, StampAnnotationElement, [parameters, {
      isRenderable: isRenderable,
      ignoreBorder: true
    }]);
  }
  _inherits(StampAnnotationElement, _AnnotationElement16);
  return _createClass(StampAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "stampAnnotation";
      if (!this.data.hasPopup) {
        this._createPopup(null, this.data);
      }
      return this.container;
    }
  }]);
}(AnnotationElement);
var FileAttachmentAnnotationElement = /*#__PURE__*/function (_AnnotationElement17) {
  function FileAttachmentAnnotationElement(parameters) {
    var _this11$linkService$e;
    var _this11;
    _classCallCheck(this, FileAttachmentAnnotationElement);
    _this11 = _callSuper(this, FileAttachmentAnnotationElement, [parameters, {
      isRenderable: true
    }]);
    var _this11$data$file = _this11.data.file,
      filename = _this11$data$file.filename,
      content = _this11$data$file.content;
    _this11.filename = (0, _display_utils.getFilenameFromUrl)(filename);
    _this11.content = content;
    (_this11$linkService$e = _this11.linkService.eventBus) === null || _this11$linkService$e === void 0 || _this11$linkService$e.dispatch("fileattachmentannotation", {
      source: _this11,
      id: (0, _util.stringToPDFString)(filename),
      filename: filename,
      content: content
    });
    return _this11;
  }
  _inherits(FileAttachmentAnnotationElement, _AnnotationElement17);
  return _createClass(FileAttachmentAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = "fileAttachmentAnnotation";
      var trigger = document.createElement("div");
      trigger.style.height = this.container.style.height;
      trigger.style.width = this.container.style.width;
      trigger.addEventListener("dblclick", this._download.bind(this));
      if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
        this._createPopup(trigger, this.data);
      }
      this.container.appendChild(trigger);
      return this.container;
    }
  }, {
    key: "_download",
    value: function _download() {
      if (!this.downloadManager) {
        (0, _util.warn)("Download cannot be started due to unavailable download manager");
        return;
      }
      this.downloadManager.downloadData(this.content, this.filename, "");
    }
  }]);
}(AnnotationElement);
var AnnotationLayer = exports.AnnotationLayer = /*#__PURE__*/function () {
  function AnnotationLayer() {
    _classCallCheck(this, AnnotationLayer);
  }
  return _createClass(AnnotationLayer, null, [{
    key: "render",
    value: function render(parameters) {
      var sortedAnnotations = [],
        popupAnnotations = [];
      var _iterator10 = _createForOfIteratorHelper(parameters.annotations),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _data = _step10.value;
          if (!_data) {
            continue;
          }
          if (_data.annotationType === _util.AnnotationType.POPUP) {
            popupAnnotations.push(_data);
            continue;
          }
          sortedAnnotations.push(_data);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      if (popupAnnotations.length) {
        sortedAnnotations.push.apply(sortedAnnotations, popupAnnotations);
      }
      for (var _i2 = 0, _sortedAnnotations = sortedAnnotations; _i2 < _sortedAnnotations.length; _i2++) {
        var data = _sortedAnnotations[_i2];
        var element = AnnotationElementFactory.create({
          data: data,
          layer: parameters.div,
          page: parameters.page,
          viewport: parameters.viewport,
          linkService: parameters.linkService,
          downloadManager: parameters.downloadManager,
          imageResourcesPath: parameters.imageResourcesPath || "",
          renderInteractiveForms: typeof parameters.renderInteractiveForms === "boolean" ? parameters.renderInteractiveForms : true,
          svgFactory: new _display_utils.DOMSVGFactory(),
          annotationStorage: parameters.annotationStorage || new _annotation_storage.AnnotationStorage(),
          enableScripting: parameters.enableScripting,
          hasJSActions: parameters.hasJSActions,
          mouseState: parameters.mouseState || {
            isDown: false
          }
        });
        if (element.isRenderable) {
          var rendered = element.render();
          if (data.hidden) {
            rendered.style.visibility = "hidden";
          }
          if (Array.isArray(rendered)) {
            var _iterator11 = _createForOfIteratorHelper(rendered),
              _step11;
            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var renderedElement = _step11.value;
                parameters.div.appendChild(renderedElement);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          } else {
            if (element instanceof PopupAnnotationElement) {
              parameters.div.prepend(rendered);
            } else {
              parameters.div.appendChild(rendered);
            }
          }
        }
      }
    }
  }, {
    key: "update",
    value: function update(parameters) {
      var transform = "matrix(".concat(parameters.viewport.transform.join(","), ")");
      var _iterator12 = _createForOfIteratorHelper(parameters.annotations),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var data = _step12.value;
          var elements = parameters.div.querySelectorAll("[data-annotation-id=\"".concat(data.id, "\"]"));
          if (elements) {
            elements.forEach(function (element) {
              element.style.transform = transform;
            });
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      parameters.div.removeAttribute("hidden");
    }
  }]);
}();

/***/ }),
/* 202 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ColorConverters = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function makeColorComp(n) {
  return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
}
var ColorConverters = exports.ColorConverters = /*#__PURE__*/function () {
  function ColorConverters() {
    _classCallCheck(this, ColorConverters);
  }
  return _createClass(ColorConverters, null, [{
    key: "CMYK_G",
    value: function CMYK_G(_ref) {
      var _ref2 = _slicedToArray(_ref, 4),
        c = _ref2[0],
        y = _ref2[1],
        m = _ref2[2],
        k = _ref2[3];
      return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
    }
  }, {
    key: "G_CMYK",
    value: function G_CMYK(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
        g = _ref4[0];
      return ["CMYK", 0, 0, 0, 1 - g];
    }
  }, {
    key: "G_RGB",
    value: function G_RGB(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
        g = _ref6[0];
      return ["RGB", g, g, g];
    }
  }, {
    key: "G_HTML",
    value: function G_HTML(_ref7) {
      var _ref8 = _slicedToArray(_ref7, 1),
        g = _ref8[0];
      var G = makeColorComp(g);
      return "#".concat(G).concat(G).concat(G);
    }
  }, {
    key: "RGB_G",
    value: function RGB_G(_ref9) {
      var _ref10 = _slicedToArray(_ref9, 3),
        r = _ref10[0],
        g = _ref10[1],
        b = _ref10[2];
      return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
    }
  }, {
    key: "RGB_HTML",
    value: function RGB_HTML(_ref11) {
      var _ref12 = _slicedToArray(_ref11, 3),
        r = _ref12[0],
        g = _ref12[1],
        b = _ref12[2];
      var R = makeColorComp(r);
      var G = makeColorComp(g);
      var B = makeColorComp(b);
      return "#".concat(R).concat(G).concat(B);
    }
  }, {
    key: "T_HTML",
    value: function T_HTML() {
      return "#00000000";
    }
  }, {
    key: "CMYK_RGB",
    value: function CMYK_RGB(_ref13) {
      var _ref14 = _slicedToArray(_ref13, 4),
        c = _ref14[0],
        y = _ref14[1],
        m = _ref14[2],
        k = _ref14[3];
      return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
    }
  }, {
    key: "CMYK_HTML",
    value: function CMYK_HTML(components) {
      return this.RGB_HTML(this.CMYK_RGB(components));
    }
  }, {
    key: "RGB_CMYK",
    value: function RGB_CMYK(_ref15) {
      var _ref16 = _slicedToArray(_ref15, 3),
        r = _ref16[0],
        g = _ref16[1],
        b = _ref16[2];
      var c = 1 - r;
      var m = 1 - g;
      var y = 1 - b;
      var k = Math.min(c, m, y);
      return ["CMYK", c, m, y, k];
    }
  }]);
}();

/***/ }),
/* 203 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.renderTextLayer = void 0;
var _util = __w_pdfjs_require__(2);
var renderTextLayer = exports.renderTextLayer = function renderTextLayerClosure() {
  var MAX_TEXT_DIVS_TO_RENDER = 100000;
  var NonWhitespaceRegexp = /\S/;
  function isAllWhitespace(str) {
    return !NonWhitespaceRegexp.test(str);
  }
  function appendText(task, geom, styles) {
    var textDiv = document.createElement("span");
    var textDivProperties = {
      angle: 0,
      canvasWidth: 0,
      isWhitespace: false,
      originalTransform: null,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      scale: 1
    };
    task._textDivs.push(textDiv);
    if (isAllWhitespace(geom.str)) {
      textDivProperties.isWhitespace = true;
      task._textDivProperties.set(textDiv, textDivProperties);
      return;
    }
    var tx = _util.Util.transform(task._viewport.transform, geom.transform);
    var angle = Math.atan2(tx[1], tx[0]);
    var style = styles[geom.fontName];
    if (style.vertical) {
      angle += Math.PI / 2;
    }
    var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
    var fontAscent = fontHeight;
    if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
    } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
    }
    var left, top;
    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
    }
    textDiv.style.left = "".concat(left, "px");
    textDiv.style.top = "".concat(top, "px");
    textDiv.style.fontSize = "".concat(fontHeight, "px");
    textDiv.style.fontFamily = style.fontFamily;
    textDiv.textContent = geom.str;
    if (task._fontInspectorEnabled) {
      textDiv.dataset.fontName = geom.fontName;
    }
    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }
    var shouldScaleText = false;
    if (geom.str.length > 1) {
      shouldScaleText = true;
    } else if (geom.transform[0] !== geom.transform[3]) {
      var absScaleX = Math.abs(geom.transform[0]),
        absScaleY = Math.abs(geom.transform[3]);
      if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
        shouldScaleText = true;
      }
    }
    if (shouldScaleText) {
      if (style.vertical) {
        textDivProperties.canvasWidth = geom.height * task._viewport.scale;
      } else {
        textDivProperties.canvasWidth = geom.width * task._viewport.scale;
      }
    }
    task._textDivProperties.set(textDiv, textDivProperties);
    if (task._textContentStream) {
      task._layoutText(textDiv);
    }
    if (task._enhanceTextSelection) {
      var angleCos = 1,
        angleSin = 0;
      if (angle !== 0) {
        angleCos = Math.cos(angle);
        angleSin = Math.sin(angle);
      }
      var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
      var divHeight = fontHeight;
      var m, b;
      if (angle !== 0) {
        m = [angleCos, angleSin, -angleSin, angleCos, left, top];
        b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
      } else {
        b = [left, top, left + divWidth, top + divHeight];
      }
      task._bounds.push({
        left: b[0],
        top: b[1],
        right: b[2],
        bottom: b[3],
        div: textDiv,
        size: [divWidth, divHeight],
        m: m
      });
    }
  }
  function render(task) {
    if (task._canceled) {
      return;
    }
    var textDivs = task._textDivs;
    var capability = task._capability;
    var textDivsLength = textDivs.length;
    if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      task._renderingDone = true;
      capability.resolve();
      return;
    }
    if (!task._textContentStream) {
      for (var i = 0; i < textDivsLength; i++) {
        task._layoutText(textDivs[i]);
      }
    }
    task._renderingDone = true;
    capability.resolve();
  }
  function findPositiveMin(ts, offset, count) {
    var result = 0;
    for (var i = 0; i < count; i++) {
      var t = ts[offset++];
      if (t > 0) {
        result = result ? Math.min(t, result) : t;
      }
    }
    return result;
  }
  function expand(task) {
    var bounds = task._bounds;
    var viewport = task._viewport;
    var expanded = expandBounds(viewport.width, viewport.height, bounds);
    var _loop = function _loop() {
      var div = bounds[i].div;
      var divProperties = task._textDivProperties.get(div);
      if (divProperties.angle === 0) {
        divProperties.paddingLeft = bounds[i].left - expanded[i].left;
        divProperties.paddingTop = bounds[i].top - expanded[i].top;
        divProperties.paddingRight = expanded[i].right - bounds[i].right;
        divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
        task._textDivProperties.set(div, divProperties);
        return 1; // continue
      }
      var e = expanded[i],
        b = bounds[i];
      var m = b.m,
        c = m[0],
        s = m[1];
      var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
      var ts = new Float64Array(64);
      points.forEach(function (p, j) {
        var t = _util.Util.applyTransform(p, m);
        ts[j + 0] = c && (e.left - t[0]) / c;
        ts[j + 4] = s && (e.top - t[1]) / s;
        ts[j + 8] = c && (e.right - t[0]) / c;
        ts[j + 12] = s && (e.bottom - t[1]) / s;
        ts[j + 16] = s && (e.left - t[0]) / -s;
        ts[j + 20] = c && (e.top - t[1]) / c;
        ts[j + 24] = s && (e.right - t[0]) / -s;
        ts[j + 28] = c && (e.bottom - t[1]) / c;
        ts[j + 32] = c && (e.left - t[0]) / -c;
        ts[j + 36] = s && (e.top - t[1]) / -s;
        ts[j + 40] = c && (e.right - t[0]) / -c;
        ts[j + 44] = s && (e.bottom - t[1]) / -s;
        ts[j + 48] = s && (e.left - t[0]) / s;
        ts[j + 52] = c && (e.top - t[1]) / -c;
        ts[j + 56] = s && (e.right - t[0]) / s;
        ts[j + 60] = c && (e.bottom - t[1]) / -c;
      });
      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
      task._textDivProperties.set(div, divProperties);
    };
    for (var i = 0; i < expanded.length; i++) {
      if (_loop()) continue;
    }
  }
  function expandBounds(width, height, boxes) {
    var bounds = boxes.map(function (box, i) {
      return {
        x1: box.left,
        y1: box.top,
        x2: box.right,
        y2: box.bottom,
        index: i,
        x1New: undefined,
        x2New: undefined
      };
    });
    expandBoundsLTR(width, bounds);
    var expanded = new Array(boxes.length);
    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i] = {
        left: b.x1New,
        top: 0,
        right: b.x2New,
        bottom: 0
      };
    });
    boxes.map(function (box, i) {
      var e = expanded[i],
        b = bounds[i];
      b.x1 = box.top;
      b.y1 = width - e.right;
      b.x2 = box.bottom;
      b.y2 = width - e.left;
      b.index = i;
      b.x1New = undefined;
      b.x2New = undefined;
    });
    expandBoundsLTR(height, bounds);
    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i].top = b.x1New;
      expanded[i].bottom = b.x2New;
    });
    return expanded;
  }
  function expandBoundsLTR(width, bounds) {
    bounds.sort(function (a, b) {
      return a.x1 - b.x1 || a.index - b.index;
    });
    var fakeBoundary = {
      x1: -Infinity,
      y1: -Infinity,
      x2: 0,
      y2: Infinity,
      index: -1,
      x1New: 0,
      x2New: 0
    };
    var horizon = [{
      start: -Infinity,
      end: Infinity,
      boundary: fakeBoundary
    }];
    bounds.forEach(function (boundary) {
      var i = 0;
      while (i < horizon.length && horizon[i].end <= boundary.y1) {
        i++;
      }
      var j = horizon.length - 1;
      while (j >= 0 && horizon[j].start >= boundary.y2) {
        j--;
      }
      var horizonPart, affectedBoundary;
      var q,
        k,
        maxXNew = -Infinity;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        var xNew = void 0;
        if (affectedBoundary.x2 > boundary.x1) {
          xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
        } else if (affectedBoundary.x2New === undefined) {
          xNew = (affectedBoundary.x2 + boundary.x1) / 2;
        } else {
          xNew = affectedBoundary.x2New;
        }
        if (xNew > maxXNew) {
          maxXNew = xNew;
        }
      }
      boundary.x1New = maxXNew;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        if (affectedBoundary.x2New === undefined) {
          if (affectedBoundary.x2 > boundary.x1) {
            if (affectedBoundary.index > boundary.index) {
              affectedBoundary.x2New = affectedBoundary.x2;
            }
          } else {
            affectedBoundary.x2New = maxXNew;
          }
        } else if (affectedBoundary.x2New > maxXNew) {
          affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
        }
      }
      var changedHorizon = [];
      var lastBoundary = null;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
        if (lastBoundary === useBoundary) {
          changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
        } else {
          changedHorizon.push({
            start: horizonPart.start,
            end: horizonPart.end,
            boundary: useBoundary
          });
          lastBoundary = useBoundary;
        }
      }
      if (horizon[i].start < boundary.y1) {
        changedHorizon[0].start = boundary.y1;
        changedHorizon.unshift({
          start: horizon[i].start,
          end: boundary.y1,
          boundary: horizon[i].boundary
        });
      }
      if (boundary.y2 < horizon[j].end) {
        changedHorizon[changedHorizon.length - 1].end = boundary.y2;
        changedHorizon.push({
          start: boundary.y2,
          end: horizon[j].end,
          boundary: horizon[j].boundary
        });
      }
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        if (affectedBoundary.x2New !== undefined) {
          continue;
        }
        var used = false;
        for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
          used = horizon[k].boundary === affectedBoundary;
        }
        for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
          used = horizon[k].boundary === affectedBoundary;
        }
        for (k = 0; !used && k < changedHorizon.length; k++) {
          used = changedHorizon[k].boundary === affectedBoundary;
        }
        if (!used) {
          affectedBoundary.x2New = maxXNew;
        }
      }
      Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
    });
    horizon.forEach(function (horizonPart) {
      var affectedBoundary = horizonPart.boundary;
      if (affectedBoundary.x2New === undefined) {
        affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
      }
    });
  }
  function TextLayerRenderTask(_ref) {
    var _globalThis$FontInspe,
      _this = this;
    var textContent = _ref.textContent,
      textContentStream = _ref.textContentStream,
      container = _ref.container,
      viewport = _ref.viewport,
      textDivs = _ref.textDivs,
      textContentItemsStr = _ref.textContentItemsStr,
      enhanceTextSelection = _ref.enhanceTextSelection;
    this._textContent = textContent;
    this._textContentStream = textContentStream;
    this._container = container;
    this._document = container.ownerDocument;
    this._viewport = viewport;
    this._textDivs = textDivs || [];
    this._textContentItemsStr = textContentItemsStr || [];
    this._enhanceTextSelection = !!enhanceTextSelection;
    this._fontInspectorEnabled = !!((_globalThis$FontInspe = globalThis.FontInspector) !== null && _globalThis$FontInspe !== void 0 && _globalThis$FontInspe.enabled);
    this._reader = null;
    this._layoutTextLastFontSize = null;
    this._layoutTextLastFontFamily = null;
    this._layoutTextCtx = null;
    this._textDivProperties = new WeakMap();
    this._renderingDone = false;
    this._canceled = false;
    this._capability = (0, _util.createPromiseCapability)();
    this._renderTimer = null;
    this._bounds = [];
    this._capability.promise["finally"](function () {
      if (_this._layoutTextCtx) {
        _this._layoutTextCtx.canvas.width = 0;
        _this._layoutTextCtx.canvas.height = 0;
        _this._layoutTextCtx = null;
      }
    })["catch"](function () {});
  }
  TextLayerRenderTask.prototype = {
    get promise() {
      return this._capability.promise;
    },
    cancel: function TextLayer_cancel() {
      this._canceled = true;
      if (this._reader) {
        this._reader.cancel(new _util.AbortException("TextLayer task cancelled."));
        this._reader = null;
      }
      if (this._renderTimer !== null) {
        clearTimeout(this._renderTimer);
        this._renderTimer = null;
      }
      this._capability.reject(new Error("TextLayer task cancelled."));
    },
    _processItems: function _processItems(items, styleCache) {
      for (var i = 0, len = items.length; i < len; i++) {
        this._textContentItemsStr.push(items[i].str);
        appendText(this, items[i], styleCache);
      }
    },
    _layoutText: function _layoutText(textDiv) {
      var textDivProperties = this._textDivProperties.get(textDiv);
      if (textDivProperties.isWhitespace) {
        return;
      }
      var transform = "";
      if (textDivProperties.canvasWidth !== 0) {
        var _textDiv$style = textDiv.style,
          fontSize = _textDiv$style.fontSize,
          fontFamily = _textDiv$style.fontFamily;
        if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
          this._layoutTextCtx.font = "".concat(fontSize, " ").concat(fontFamily);
          this._layoutTextLastFontSize = fontSize;
          this._layoutTextLastFontFamily = fontFamily;
        }
        var _this$_layoutTextCtx$ = this._layoutTextCtx.measureText(textDiv.textContent),
          width = _this$_layoutTextCtx$.width;
        if (width > 0) {
          textDivProperties.scale = textDivProperties.canvasWidth / width;
          transform = "scaleX(".concat(textDivProperties.scale, ")");
        }
      }
      if (textDivProperties.angle !== 0) {
        transform = "rotate(".concat(textDivProperties.angle, "deg) ").concat(transform);
      }
      if (transform.length > 0) {
        if (this._enhanceTextSelection) {
          textDivProperties.originalTransform = transform;
        }
        textDiv.style.transform = transform;
      }
      this._textDivProperties.set(textDiv, textDivProperties);
      this._container.appendChild(textDiv);
    },
    _render: function TextLayer_render(timeout) {
      var _this2 = this;
      var capability = (0, _util.createPromiseCapability)();
      var styleCache = Object.create(null);
      var canvas = this._document.createElement("canvas");
      canvas.mozOpaque = true;
      this._layoutTextCtx = canvas.getContext("2d", {
        alpha: false
      });
      if (this._textContent) {
        var textItems = this._textContent.items;
        var textStyles = this._textContent.styles;
        this._processItems(textItems, textStyles);
        capability.resolve();
      } else if (this._textContentStream) {
        var _pump = function pump() {
          _this2._reader.read().then(function (_ref2) {
            var value = _ref2.value,
              done = _ref2.done;
            if (done) {
              capability.resolve();
              return;
            }
            Object.assign(styleCache, value.styles);
            _this2._processItems(value.items, styleCache);
            _pump();
          }, capability.reject);
        };
        this._reader = this._textContentStream.getReader();
        _pump();
      } else {
        throw new Error('Neither "textContent" nor "textContentStream"' + " parameters specified.");
      }
      capability.promise.then(function () {
        styleCache = null;
        if (!timeout) {
          render(_this2);
        } else {
          _this2._renderTimer = setTimeout(function () {
            render(_this2);
            _this2._renderTimer = null;
          }, timeout);
        }
      }, this._capability.reject);
    },
    expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
      if (!this._enhanceTextSelection || !this._renderingDone) {
        return;
      }
      if (this._bounds !== null) {
        expand(this);
        this._bounds = null;
      }
      var transformBuf = [],
        paddingBuf = [];
      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
        var div = this._textDivs[i];
        var divProps = this._textDivProperties.get(div);
        if (divProps.isWhitespace) {
          continue;
        }
        if (expandDivs) {
          transformBuf.length = 0;
          paddingBuf.length = 0;
          if (divProps.originalTransform) {
            transformBuf.push(divProps.originalTransform);
          }
          if (divProps.paddingTop > 0) {
            paddingBuf.push("".concat(divProps.paddingTop, "px"));
            transformBuf.push("translateY(".concat(-divProps.paddingTop, "px)"));
          } else {
            paddingBuf.push(0);
          }
          if (divProps.paddingRight > 0) {
            paddingBuf.push("".concat(divProps.paddingRight / divProps.scale, "px"));
          } else {
            paddingBuf.push(0);
          }
          if (divProps.paddingBottom > 0) {
            paddingBuf.push("".concat(divProps.paddingBottom, "px"));
          } else {
            paddingBuf.push(0);
          }
          if (divProps.paddingLeft > 0) {
            paddingBuf.push("".concat(divProps.paddingLeft / divProps.scale, "px"));
            transformBuf.push("translateX(".concat(-divProps.paddingLeft / divProps.scale, "px)"));
          } else {
            paddingBuf.push(0);
          }
          div.style.padding = paddingBuf.join(" ");
          if (transformBuf.length) {
            div.style.transform = transformBuf.join(" ");
          }
        } else {
          div.style.padding = null;
          div.style.transform = divProps.originalTransform;
        }
      }
    }
  };
  function renderTextLayer(renderParameters) {
    var task = new TextLayerRenderTask({
      textContent: renderParameters.textContent,
      textContentStream: renderParameters.textContentStream,
      container: renderParameters.container,
      viewport: renderParameters.viewport,
      textDivs: renderParameters.textDivs,
      textContentItemsStr: renderParameters.textContentItemsStr,
      enhanceTextSelection: renderParameters.enhanceTextSelection
    });
    task._render(renderParameters.timeout);
    return task;
  }
  return renderTextLayer;
}();

/***/ }),
/* 204 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SVGGraphics = void 0;
var _util = __w_pdfjs_require__(2);
var _display_utils = __w_pdfjs_require__(1);
var _is_node = __w_pdfjs_require__(4);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SVGGraphics = exports.SVGGraphics = function SVGGraphics() {
  throw new Error("Not implemented: SVGGraphics");
};
{
  var opListToTree = function opListToTree(opList) {
    var opTree = [];
    var tmp = [];
    var _iterator = _createForOfIteratorHelper(opList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var opListElement = _step.value;
        if (opListElement.fn === "save") {
          opTree.push({
            fnId: 92,
            fn: "group",
            items: []
          });
          tmp.push(opTree);
          opTree = opTree[opTree.length - 1].items;
          continue;
        }
        if (opListElement.fn === "restore") {
          opTree = tmp.pop();
        } else {
          opTree.push(opListElement);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return opTree;
  };
  var pf = function pf(value) {
    if (Number.isInteger(value)) {
      return value.toString();
    }
    var s = value.toFixed(10);
    var i = s.length - 1;
    if (s[i] !== "0") {
      return s;
    }
    do {
      i--;
    } while (s[i] === "0");
    return s.substring(0, s[i] === "." ? i : i + 1);
  };
  var pm = function pm(m) {
    if (m[4] === 0 && m[5] === 0) {
      if (m[1] === 0 && m[2] === 0) {
        if (m[0] === 1 && m[3] === 1) {
          return "";
        }
        return "scale(".concat(pf(m[0]), " ").concat(pf(m[3]), ")");
      }
      if (m[0] === m[3] && m[1] === -m[2]) {
        var a = Math.acos(m[0]) * 180 / Math.PI;
        return "rotate(".concat(pf(a), ")");
      }
    } else {
      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
        return "translate(".concat(pf(m[4]), " ").concat(pf(m[5]), ")");
      }
    }
    return "matrix(".concat(pf(m[0]), " ").concat(pf(m[1]), " ").concat(pf(m[2]), " ").concat(pf(m[3]), " ").concat(pf(m[4]), " ") + "".concat(pf(m[5]), ")");
  };
  var SVG_DEFAULTS = {
    fontStyle: "normal",
    fontWeight: "normal",
    fillColor: "#000000"
  };
  var XML_NS = "http://www.w3.org/XML/1998/namespace";
  var XLINK_NS = "http://www.w3.org/1999/xlink";
  var LINE_CAP_STYLES = ["butt", "round", "square"];
  var LINE_JOIN_STYLES = ["miter", "round", "bevel"];
  var convertImgDataToPng = function () {
    var PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    var CHUNK_WRAPPER_SIZE = 12;
    var crcTable = new Int32Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var h = 0; h < 8; h++) {
        if (c & 1) {
          c = 0xedb88320 ^ c >> 1 & 0x7fffffff;
        } else {
          c = c >> 1 & 0x7fffffff;
        }
      }
      crcTable[i] = c;
    }
    function crc32(data, start, end) {
      var crc = -1;
      for (var _i = start; _i < end; _i++) {
        var a = (crc ^ data[_i]) & 0xff;
        var b = crcTable[a];
        crc = crc >>> 8 ^ b;
      }
      return crc ^ -1;
    }
    function writePngChunk(type, body, data, offset) {
      var p = offset;
      var len = body.length;
      data[p] = len >> 24 & 0xff;
      data[p + 1] = len >> 16 & 0xff;
      data[p + 2] = len >> 8 & 0xff;
      data[p + 3] = len & 0xff;
      p += 4;
      data[p] = type.charCodeAt(0) & 0xff;
      data[p + 1] = type.charCodeAt(1) & 0xff;
      data[p + 2] = type.charCodeAt(2) & 0xff;
      data[p + 3] = type.charCodeAt(3) & 0xff;
      p += 4;
      data.set(body, p);
      p += body.length;
      var crc = crc32(data, offset + 4, p);
      data[p] = crc >> 24 & 0xff;
      data[p + 1] = crc >> 16 & 0xff;
      data[p + 2] = crc >> 8 & 0xff;
      data[p + 3] = crc & 0xff;
    }
    function adler32(data, start, end) {
      var a = 1;
      var b = 0;
      for (var _i2 = start; _i2 < end; ++_i2) {
        a = (a + (data[_i2] & 0xff)) % 65521;
        b = (b + a) % 65521;
      }
      return b << 16 | a;
    }
    function deflateSync(literals) {
      if (!_is_node.isNodeJS) {
        return deflateSyncUncompressed(literals);
      }
      try {
        var input;
        if (parseInt(process.versions.node) >= 8) {
          input = literals;
        } else {
          input = Buffer.from(literals);
        }
        var output = require("zlib").deflateSync(input, {
          level: 9
        });
        return output instanceof Uint8Array ? output : new Uint8Array(output);
      } catch (e) {
        (0, _util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
      }
      return deflateSyncUncompressed(literals);
    }
    function deflateSyncUncompressed(literals) {
      var len = literals.length;
      var maxBlockLength = 0xffff;
      var deflateBlocks = Math.ceil(len / maxBlockLength);
      var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
      var pi = 0;
      idat[pi++] = 0x78;
      idat[pi++] = 0x9c;
      var pos = 0;
      while (len > maxBlockLength) {
        idat[pi++] = 0x00;
        idat[pi++] = 0xff;
        idat[pi++] = 0xff;
        idat[pi++] = 0x00;
        idat[pi++] = 0x00;
        idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
        pi += maxBlockLength;
        pos += maxBlockLength;
        len -= maxBlockLength;
      }
      idat[pi++] = 0x01;
      idat[pi++] = len & 0xff;
      idat[pi++] = len >> 8 & 0xff;
      idat[pi++] = ~len & 0xffff & 0xff;
      idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
      idat.set(literals.subarray(pos), pi);
      pi += literals.length - pos;
      var adler = adler32(literals, 0, literals.length);
      idat[pi++] = adler >> 24 & 0xff;
      idat[pi++] = adler >> 16 & 0xff;
      idat[pi++] = adler >> 8 & 0xff;
      idat[pi++] = adler & 0xff;
      return idat;
    }
    function encode(imgData, kind, forceDataSchema, isMask) {
      var width = imgData.width;
      var height = imgData.height;
      var bitDepth, colorType, lineSize;
      var bytes = imgData.data;
      switch (kind) {
        case _util.ImageKind.GRAYSCALE_1BPP:
          colorType = 0;
          bitDepth = 1;
          lineSize = width + 7 >> 3;
          break;
        case _util.ImageKind.RGB_24BPP:
          colorType = 2;
          bitDepth = 8;
          lineSize = width * 3;
          break;
        case _util.ImageKind.RGBA_32BPP:
          colorType = 6;
          bitDepth = 8;
          lineSize = width * 4;
          break;
        default:
          throw new Error("invalid format");
      }
      var literals = new Uint8Array((1 + lineSize) * height);
      var offsetLiterals = 0,
        offsetBytes = 0;
      for (var y = 0; y < height; ++y) {
        literals[offsetLiterals++] = 0;
        literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
        offsetBytes += lineSize;
        offsetLiterals += lineSize;
      }
      if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
        offsetLiterals = 0;
        for (var _y = 0; _y < height; _y++) {
          offsetLiterals++;
          for (var _i3 = 0; _i3 < lineSize; _i3++) {
            literals[offsetLiterals++] ^= 0xff;
          }
        }
      }
      var ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
      var idat = deflateSync(literals);
      var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
      var data = new Uint8Array(pngLength);
      var offset = 0;
      data.set(PNG_HEADER, offset);
      offset += PNG_HEADER.length;
      writePngChunk("IHDR", ihdr, data, offset);
      offset += CHUNK_WRAPPER_SIZE + ihdr.length;
      writePngChunk("IDATA", idat, data, offset);
      offset += CHUNK_WRAPPER_SIZE + idat.length;
      writePngChunk("IEND", new Uint8Array(0), data, offset);
      return (0, _util.createObjectURL)(data, "image/png", forceDataSchema);
    }
    return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
      var kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
      return encode(imgData, kind, forceDataSchema, isMask);
    };
  }();
  var SVGExtraState = /*#__PURE__*/function () {
    function SVGExtraState() {
      _classCallCheck(this, SVGExtraState);
      this.fontSizeScale = 1;
      this.fontWeight = SVG_DEFAULTS.fontWeight;
      this.fontSize = 0;
      this.textMatrix = _util.IDENTITY_MATRIX;
      this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
      this.leading = 0;
      this.textRenderingMode = _util.TextRenderingMode.FILL;
      this.textMatrixScale = 1;
      this.x = 0;
      this.y = 0;
      this.lineX = 0;
      this.lineY = 0;
      this.charSpacing = 0;
      this.wordSpacing = 0;
      this.textHScale = 1;
      this.textRise = 0;
      this.fillColor = SVG_DEFAULTS.fillColor;
      this.strokeColor = "#000000";
      this.fillAlpha = 1;
      this.strokeAlpha = 1;
      this.lineWidth = 1;
      this.lineJoin = "";
      this.lineCap = "";
      this.miterLimit = 0;
      this.dashArray = [];
      this.dashPhase = 0;
      this.dependencies = [];
      this.activeClipUrl = null;
      this.clipGroup = null;
      this.maskId = "";
    }
    return _createClass(SVGExtraState, [{
      key: "clone",
      value: function clone() {
        return Object.create(this);
      }
    }, {
      key: "setCurrentPoint",
      value: function setCurrentPoint(x, y) {
        this.x = x;
        this.y = y;
      }
    }]);
  }();
  var clipCount = 0;
  var maskCount = 0;
  var shadingCount = 0;
  exports.SVGGraphics = SVGGraphics = /*#__PURE__*/function () {
    function SVGGraphics(commonObjs, objs) {
      var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      _classCallCheck(this, SVGGraphics);
      this.svgFactory = new _display_utils.DOMSVGFactory();
      this.current = new SVGExtraState();
      this.transformMatrix = _util.IDENTITY_MATRIX;
      this.transformStack = [];
      this.extraStack = [];
      this.commonObjs = commonObjs;
      this.objs = objs;
      this.pendingClip = null;
      this.pendingEOFill = false;
      this.embedFonts = false;
      this.embeddedFonts = Object.create(null);
      this.cssStyle = null;
      this.forceDataSchema = !!forceDataSchema;
      this._operatorIdMapping = [];
      for (var op in _util.OPS) {
        this._operatorIdMapping[_util.OPS[op]] = op;
      }
    }
    return _createClass(SVGGraphics, [{
      key: "save",
      value: function save() {
        this.transformStack.push(this.transformMatrix);
        var old = this.current;
        this.extraStack.push(old);
        this.current = old.clone();
      }
    }, {
      key: "restore",
      value: function restore() {
        this.transformMatrix = this.transformStack.pop();
        this.current = this.extraStack.pop();
        this.pendingClip = null;
        this.tgrp = null;
      }
    }, {
      key: "group",
      value: function group(items) {
        this.save();
        this.executeOpTree(items);
        this.restore();
      }
    }, {
      key: "loadDependencies",
      value: function loadDependencies(operatorList) {
        var _this = this;
        var fnArray = operatorList.fnArray;
        var argsArray = operatorList.argsArray;
        for (var i = 0, ii = fnArray.length; i < ii; i++) {
          if (fnArray[i] !== _util.OPS.dependency) {
            continue;
          }
          var _iterator2 = _createForOfIteratorHelper(argsArray[i]),
            _step2;
          try {
            var _loop = function _loop() {
              var obj = _step2.value;
              var objsPool = obj.startsWith("g_") ? _this.commonObjs : _this.objs;
              var promise = new Promise(function (resolve) {
                objsPool.get(obj, resolve);
              });
              _this.current.dependencies.push(promise);
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        return Promise.all(this.current.dependencies);
      }
    }, {
      key: "transform",
      value: function transform(a, b, c, d, e, f) {
        var transformMatrix = [a, b, c, d, e, f];
        this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
        this.tgrp = null;
      }
    }, {
      key: "getSVG",
      value: function getSVG(operatorList, viewport) {
        var _this2 = this;
        this.viewport = viewport;
        var svgElement = this._initialize(viewport);
        return this.loadDependencies(operatorList).then(function () {
          _this2.transformMatrix = _util.IDENTITY_MATRIX;
          _this2.executeOpTree(_this2.convertOpList(operatorList));
          return svgElement;
        });
      }
    }, {
      key: "convertOpList",
      value: function convertOpList(operatorList) {
        var operatorIdMapping = this._operatorIdMapping;
        var argsArray = operatorList.argsArray;
        var fnArray = operatorList.fnArray;
        var opList = [];
        for (var i = 0, ii = fnArray.length; i < ii; i++) {
          var fnId = fnArray[i];
          opList.push({
            fnId: fnId,
            fn: operatorIdMapping[fnId],
            args: argsArray[i]
          });
        }
        return opListToTree(opList);
      }
    }, {
      key: "executeOpTree",
      value: function executeOpTree(opTree) {
        var _iterator3 = _createForOfIteratorHelper(opTree),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var opTreeElement = _step3.value;
            var fn = opTreeElement.fn;
            var fnId = opTreeElement.fnId;
            var args = opTreeElement.args;
            switch (fnId | 0) {
              case _util.OPS.beginText:
                this.beginText();
                break;
              case _util.OPS.dependency:
                break;
              case _util.OPS.setLeading:
                this.setLeading(args);
                break;
              case _util.OPS.setLeadingMoveText:
                this.setLeadingMoveText(args[0], args[1]);
                break;
              case _util.OPS.setFont:
                this.setFont(args);
                break;
              case _util.OPS.showText:
                this.showText(args[0]);
                break;
              case _util.OPS.showSpacedText:
                this.showText(args[0]);
                break;
              case _util.OPS.endText:
                this.endText();
                break;
              case _util.OPS.moveText:
                this.moveText(args[0], args[1]);
                break;
              case _util.OPS.setCharSpacing:
                this.setCharSpacing(args[0]);
                break;
              case _util.OPS.setWordSpacing:
                this.setWordSpacing(args[0]);
                break;
              case _util.OPS.setHScale:
                this.setHScale(args[0]);
                break;
              case _util.OPS.setTextMatrix:
                this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                break;
              case _util.OPS.setTextRise:
                this.setTextRise(args[0]);
                break;
              case _util.OPS.setTextRenderingMode:
                this.setTextRenderingMode(args[0]);
                break;
              case _util.OPS.setLineWidth:
                this.setLineWidth(args[0]);
                break;
              case _util.OPS.setLineJoin:
                this.setLineJoin(args[0]);
                break;
              case _util.OPS.setLineCap:
                this.setLineCap(args[0]);
                break;
              case _util.OPS.setMiterLimit:
                this.setMiterLimit(args[0]);
                break;
              case _util.OPS.setFillRGBColor:
                this.setFillRGBColor(args[0], args[1], args[2]);
                break;
              case _util.OPS.setStrokeRGBColor:
                this.setStrokeRGBColor(args[0], args[1], args[2]);
                break;
              case _util.OPS.setStrokeColorN:
                this.setStrokeColorN(args);
                break;
              case _util.OPS.setFillColorN:
                this.setFillColorN(args);
                break;
              case _util.OPS.shadingFill:
                this.shadingFill(args[0]);
                break;
              case _util.OPS.setDash:
                this.setDash(args[0], args[1]);
                break;
              case _util.OPS.setRenderingIntent:
                this.setRenderingIntent(args[0]);
                break;
              case _util.OPS.setFlatness:
                this.setFlatness(args[0]);
                break;
              case _util.OPS.setGState:
                this.setGState(args[0]);
                break;
              case _util.OPS.fill:
                this.fill();
                break;
              case _util.OPS.eoFill:
                this.eoFill();
                break;
              case _util.OPS.stroke:
                this.stroke();
                break;
              case _util.OPS.fillStroke:
                this.fillStroke();
                break;
              case _util.OPS.eoFillStroke:
                this.eoFillStroke();
                break;
              case _util.OPS.clip:
                this.clip("nonzero");
                break;
              case _util.OPS.eoClip:
                this.clip("evenodd");
                break;
              case _util.OPS.paintSolidColorImageMask:
                this.paintSolidColorImageMask();
                break;
              case _util.OPS.paintImageXObject:
                this.paintImageXObject(args[0]);
                break;
              case _util.OPS.paintInlineImageXObject:
                this.paintInlineImageXObject(args[0]);
                break;
              case _util.OPS.paintImageMaskXObject:
                this.paintImageMaskXObject(args[0]);
                break;
              case _util.OPS.paintFormXObjectBegin:
                this.paintFormXObjectBegin(args[0], args[1]);
                break;
              case _util.OPS.paintFormXObjectEnd:
                this.paintFormXObjectEnd();
                break;
              case _util.OPS.closePath:
                this.closePath();
                break;
              case _util.OPS.closeStroke:
                this.closeStroke();
                break;
              case _util.OPS.closeFillStroke:
                this.closeFillStroke();
                break;
              case _util.OPS.closeEOFillStroke:
                this.closeEOFillStroke();
                break;
              case _util.OPS.nextLine:
                this.nextLine();
                break;
              case _util.OPS.transform:
                this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                break;
              case _util.OPS.constructPath:
                this.constructPath(args[0], args[1]);
                break;
              case _util.OPS.endPath:
                this.endPath();
                break;
              case 92:
                this.group(opTreeElement.items);
                break;
              default:
                (0, _util.warn)("Unimplemented operator ".concat(fn));
                break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "setWordSpacing",
      value: function setWordSpacing(wordSpacing) {
        this.current.wordSpacing = wordSpacing;
      }
    }, {
      key: "setCharSpacing",
      value: function setCharSpacing(charSpacing) {
        this.current.charSpacing = charSpacing;
      }
    }, {
      key: "nextLine",
      value: function nextLine() {
        this.moveText(0, this.current.leading);
      }
    }, {
      key: "setTextMatrix",
      value: function setTextMatrix(a, b, c, d, e, f) {
        var current = this.current;
        current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
        current.textMatrixScale = Math.sqrt(a * a + b * b);
        current.x = current.lineX = 0;
        current.y = current.lineY = 0;
        current.xcoords = [];
        current.ycoords = [];
        current.tspan = this.svgFactory.createElement("svg:tspan");
        current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
        current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
        current.tspan.setAttributeNS(null, "y", pf(-current.y));
        current.txtElement = this.svgFactory.createElement("svg:text");
        current.txtElement.appendChild(current.tspan);
      }
    }, {
      key: "beginText",
      value: function beginText() {
        var current = this.current;
        current.x = current.lineX = 0;
        current.y = current.lineY = 0;
        current.textMatrix = _util.IDENTITY_MATRIX;
        current.lineMatrix = _util.IDENTITY_MATRIX;
        current.textMatrixScale = 1;
        current.tspan = this.svgFactory.createElement("svg:tspan");
        current.txtElement = this.svgFactory.createElement("svg:text");
        current.txtgrp = this.svgFactory.createElement("svg:g");
        current.xcoords = [];
        current.ycoords = [];
      }
    }, {
      key: "moveText",
      value: function moveText(x, y) {
        var current = this.current;
        current.x = current.lineX += x;
        current.y = current.lineY += y;
        current.xcoords = [];
        current.ycoords = [];
        current.tspan = this.svgFactory.createElement("svg:tspan");
        current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
        current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
        current.tspan.setAttributeNS(null, "y", pf(-current.y));
      }
    }, {
      key: "showText",
      value: function showText(glyphs) {
        var current = this.current;
        var font = current.font;
        var fontSize = current.fontSize;
        if (fontSize === 0) {
          return;
        }
        var fontSizeScale = current.fontSizeScale;
        var charSpacing = current.charSpacing;
        var wordSpacing = current.wordSpacing;
        var fontDirection = current.fontDirection;
        var textHScale = current.textHScale * fontDirection;
        var vertical = font.vertical;
        var spacingDir = vertical ? 1 : -1;
        var defaultVMetrics = font.defaultVMetrics;
        var widthAdvanceScale = fontSize * current.fontMatrix[0];
        var x = 0;
        var _iterator4 = _createForOfIteratorHelper(glyphs),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var glyph = _step4.value;
            if (glyph === null) {
              x += fontDirection * wordSpacing;
              continue;
            } else if ((0, _util.isNum)(glyph)) {
              x += spacingDir * glyph * fontSize / 1000;
              continue;
            }
            var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
            var character = glyph.fontChar;
            var scaledX = void 0,
              scaledY = void 0;
            var width = glyph.width;
            if (vertical) {
              var vx = void 0;
              var vmetric = glyph.vmetric || defaultVMetrics;
              vx = glyph.vmetric ? vmetric[1] : width * 0.5;
              vx = -vx * widthAdvanceScale;
              var vy = vmetric[2] * widthAdvanceScale;
              width = vmetric ? -vmetric[0] : width;
              scaledX = vx / fontSizeScale;
              scaledY = (x + vy) / fontSizeScale;
            } else {
              scaledX = x / fontSizeScale;
              scaledY = 0;
            }
            if (glyph.isInFont || font.missingFile) {
              current.xcoords.push(current.x + scaledX);
              if (vertical) {
                current.ycoords.push(-current.y + scaledY);
              }
              current.tspan.textContent += character;
            } else {}
            var charWidth = void 0;
            if (vertical) {
              charWidth = width * widthAdvanceScale - spacing * fontDirection;
            } else {
              charWidth = width * widthAdvanceScale + spacing * fontDirection;
            }
            x += charWidth;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
        if (vertical) {
          current.tspan.setAttributeNS(null, "y", current.ycoords.map(pf).join(" "));
        } else {
          current.tspan.setAttributeNS(null, "y", pf(-current.y));
        }
        if (vertical) {
          current.y -= x;
        } else {
          current.x += x * textHScale;
        }
        current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
        current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
        if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
          current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
        }
        if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
          current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
        }
        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          if (current.fillColor !== SVG_DEFAULTS.fillColor) {
            current.tspan.setAttributeNS(null, "fill", current.fillColor);
          }
          if (current.fillAlpha < 1) {
            current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
          }
        } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
          current.tspan.setAttributeNS(null, "fill", "transparent");
        } else {
          current.tspan.setAttributeNS(null, "fill", "none");
        }
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          var lineWidthScale = 1 / (current.textMatrixScale || 1);
          this._setStrokeAttributes(current.tspan, lineWidthScale);
        }
        var textMatrix = current.textMatrix;
        if (current.textRise !== 0) {
          textMatrix = textMatrix.slice();
          textMatrix[5] += current.textRise;
        }
        current.txtElement.setAttributeNS(null, "transform", "".concat(pm(textMatrix), " scale(").concat(pf(textHScale), ", -1)"));
        current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
        current.txtElement.appendChild(current.tspan);
        current.txtgrp.appendChild(current.txtElement);
        this._ensureTransformGroup().appendChild(current.txtElement);
      }
    }, {
      key: "setLeadingMoveText",
      value: function setLeadingMoveText(x, y) {
        this.setLeading(-y);
        this.moveText(x, y);
      }
    }, {
      key: "addFontStyle",
      value: function addFontStyle(fontObj) {
        if (!fontObj.data) {
          throw new Error("addFontStyle: No font data available, " + 'ensure that the "fontExtraProperties" API parameter is set.');
        }
        if (!this.cssStyle) {
          this.cssStyle = this.svgFactory.createElement("svg:style");
          this.cssStyle.setAttributeNS(null, "type", "text/css");
          this.defs.appendChild(this.cssStyle);
        }
        var url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
        this.cssStyle.textContent += "@font-face { font-family: \"".concat(fontObj.loadedName, "\";") + " src: url(".concat(url, "); }\n");
      }
    }, {
      key: "setFont",
      value: function setFont(details) {
        var current = this.current;
        var fontObj = this.commonObjs.get(details[0]);
        var size = details[1];
        current.font = fontObj;
        if (this.embedFonts && !fontObj.missingFile && !this.embeddedFonts[fontObj.loadedName]) {
          this.addFontStyle(fontObj);
          this.embeddedFonts[fontObj.loadedName] = fontObj;
        }
        current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;
        var bold = "normal";
        if (fontObj.black) {
          bold = "900";
        } else if (fontObj.bold) {
          bold = "bold";
        }
        var italic = fontObj.italic ? "italic" : "normal";
        if (size < 0) {
          size = -size;
          current.fontDirection = -1;
        } else {
          current.fontDirection = 1;
        }
        current.fontSize = size;
        current.fontFamily = fontObj.loadedName;
        current.fontWeight = bold;
        current.fontStyle = italic;
        current.tspan = this.svgFactory.createElement("svg:tspan");
        current.tspan.setAttributeNS(null, "y", pf(-current.y));
        current.xcoords = [];
        current.ycoords = [];
      }
    }, {
      key: "endText",
      value: function endText() {
        var _current$txtElement;
        var current = this.current;
        if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && (_current$txtElement = current.txtElement) !== null && _current$txtElement !== void 0 && _current$txtElement.hasChildNodes()) {
          current.element = current.txtElement;
          this.clip("nonzero");
          this.endPath();
        }
      }
    }, {
      key: "setLineWidth",
      value: function setLineWidth(width) {
        if (width > 0) {
          this.current.lineWidth = width;
        }
      }
    }, {
      key: "setLineCap",
      value: function setLineCap(style) {
        this.current.lineCap = LINE_CAP_STYLES[style];
      }
    }, {
      key: "setLineJoin",
      value: function setLineJoin(style) {
        this.current.lineJoin = LINE_JOIN_STYLES[style];
      }
    }, {
      key: "setMiterLimit",
      value: function setMiterLimit(limit) {
        this.current.miterLimit = limit;
      }
    }, {
      key: "setStrokeAlpha",
      value: function setStrokeAlpha(strokeAlpha) {
        this.current.strokeAlpha = strokeAlpha;
      }
    }, {
      key: "setStrokeRGBColor",
      value: function setStrokeRGBColor(r, g, b) {
        this.current.strokeColor = _util.Util.makeHexColor(r, g, b);
      }
    }, {
      key: "setFillAlpha",
      value: function setFillAlpha(fillAlpha) {
        this.current.fillAlpha = fillAlpha;
      }
    }, {
      key: "setFillRGBColor",
      value: function setFillRGBColor(r, g, b) {
        this.current.fillColor = _util.Util.makeHexColor(r, g, b);
        this.current.tspan = this.svgFactory.createElement("svg:tspan");
        this.current.xcoords = [];
        this.current.ycoords = [];
      }
    }, {
      key: "setStrokeColorN",
      value: function setStrokeColorN(args) {
        this.current.strokeColor = this._makeColorN_Pattern(args);
      }
    }, {
      key: "setFillColorN",
      value: function setFillColorN(args) {
        this.current.fillColor = this._makeColorN_Pattern(args);
      }
    }, {
      key: "shadingFill",
      value: function shadingFill(args) {
        var width = this.viewport.width;
        var height = this.viewport.height;
        var inv = _util.Util.inverseTransform(this.transformMatrix);
        var bl = _util.Util.applyTransform([0, 0], inv);
        var br = _util.Util.applyTransform([0, height], inv);
        var ul = _util.Util.applyTransform([width, 0], inv);
        var ur = _util.Util.applyTransform([width, height], inv);
        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
        var rect = this.svgFactory.createElement("svg:rect");
        rect.setAttributeNS(null, "x", x0);
        rect.setAttributeNS(null, "y", y0);
        rect.setAttributeNS(null, "width", x1 - x0);
        rect.setAttributeNS(null, "height", y1 - y0);
        rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));
        if (this.current.fillAlpha < 1) {
          rect.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
        }
        this._ensureTransformGroup().appendChild(rect);
      }
    }, {
      key: "_makeColorN_Pattern",
      value: function _makeColorN_Pattern(args) {
        if (args[0] === "TilingPattern") {
          return this._makeTilingPattern(args);
        }
        return this._makeShadingPattern(args);
      }
    }, {
      key: "_makeTilingPattern",
      value: function _makeTilingPattern(args) {
        var color = args[1];
        var operatorList = args[2];
        var matrix = args[3] || _util.IDENTITY_MATRIX;
        var _args$ = _slicedToArray(args[4], 4),
          x0 = _args$[0],
          y0 = _args$[1],
          x1 = _args$[2],
          y1 = _args$[3];
        var xstep = args[5];
        var ystep = args[6];
        var paintType = args[7];
        var tilingId = "shading".concat(shadingCount++);
        var _Util$applyTransform = _util.Util.applyTransform([x0, y0], matrix),
          _Util$applyTransform2 = _slicedToArray(_Util$applyTransform, 2),
          tx0 = _Util$applyTransform2[0],
          ty0 = _Util$applyTransform2[1];
        var _Util$applyTransform3 = _util.Util.applyTransform([x1, y1], matrix),
          _Util$applyTransform4 = _slicedToArray(_Util$applyTransform3, 2),
          tx1 = _Util$applyTransform4[0],
          ty1 = _Util$applyTransform4[1];
        var _Util$singularValueDe = _util.Util.singularValueDecompose2dScale(matrix),
          _Util$singularValueDe2 = _slicedToArray(_Util$singularValueDe, 2),
          xscale = _Util$singularValueDe2[0],
          yscale = _Util$singularValueDe2[1];
        var txstep = xstep * xscale;
        var tystep = ystep * yscale;
        var tiling = this.svgFactory.createElement("svg:pattern");
        tiling.setAttributeNS(null, "id", tilingId);
        tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
        tiling.setAttributeNS(null, "width", txstep);
        tiling.setAttributeNS(null, "height", tystep);
        tiling.setAttributeNS(null, "x", "".concat(tx0));
        tiling.setAttributeNS(null, "y", "".concat(ty0));
        var svg = this.svg;
        var transformMatrix = this.transformMatrix;
        var fillColor = this.current.fillColor;
        var strokeColor = this.current.strokeColor;
        var bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
        this.svg = bbox;
        this.transformMatrix = matrix;
        if (paintType === 2) {
          var cssColor = _util.Util.makeHexColor.apply(_util.Util, _toConsumableArray(color));
          this.current.fillColor = cssColor;
          this.current.strokeColor = cssColor;
        }
        this.executeOpTree(this.convertOpList(operatorList));
        this.svg = svg;
        this.transformMatrix = transformMatrix;
        this.current.fillColor = fillColor;
        this.current.strokeColor = strokeColor;
        tiling.appendChild(bbox.childNodes[0]);
        this.defs.appendChild(tiling);
        return "url(#".concat(tilingId, ")");
      }
    }, {
      key: "_makeShadingPattern",
      value: function _makeShadingPattern(args) {
        switch (args[0]) {
          case "RadialAxial":
            var shadingId = "shading".concat(shadingCount++);
            var colorStops = args[3];
            var gradient;
            switch (args[1]) {
              case "axial":
                var point0 = args[4];
                var point1 = args[5];
                gradient = this.svgFactory.createElement("svg:linearGradient");
                gradient.setAttributeNS(null, "id", shadingId);
                gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                gradient.setAttributeNS(null, "x1", point0[0]);
                gradient.setAttributeNS(null, "y1", point0[1]);
                gradient.setAttributeNS(null, "x2", point1[0]);
                gradient.setAttributeNS(null, "y2", point1[1]);
                break;
              case "radial":
                var focalPoint = args[4];
                var circlePoint = args[5];
                var focalRadius = args[6];
                var circleRadius = args[7];
                gradient = this.svgFactory.createElement("svg:radialGradient");
                gradient.setAttributeNS(null, "id", shadingId);
                gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                gradient.setAttributeNS(null, "cx", circlePoint[0]);
                gradient.setAttributeNS(null, "cy", circlePoint[1]);
                gradient.setAttributeNS(null, "r", circleRadius);
                gradient.setAttributeNS(null, "fx", focalPoint[0]);
                gradient.setAttributeNS(null, "fy", focalPoint[1]);
                gradient.setAttributeNS(null, "fr", focalRadius);
                break;
              default:
                throw new Error("Unknown RadialAxial type: ".concat(args[1]));
            }
            var _iterator5 = _createForOfIteratorHelper(colorStops),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var colorStop = _step5.value;
                var stop = this.svgFactory.createElement("svg:stop");
                stop.setAttributeNS(null, "offset", colorStop[0]);
                stop.setAttributeNS(null, "stop-color", colorStop[1]);
                gradient.appendChild(stop);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            this.defs.appendChild(gradient);
            return "url(#".concat(shadingId, ")");
          case "Mesh":
            (0, _util.warn)("Unimplemented pattern Mesh");
            return null;
          case "Dummy":
            return "hotpink";
          default:
            throw new Error("Unknown IR type: ".concat(args[0]));
        }
      }
    }, {
      key: "setDash",
      value: function setDash(dashArray, dashPhase) {
        this.current.dashArray = dashArray;
        this.current.dashPhase = dashPhase;
      }
    }, {
      key: "constructPath",
      value: function constructPath(ops, args) {
        var current = this.current;
        var x = current.x,
          y = current.y;
        var d = [];
        var j = 0;
        var _iterator6 = _createForOfIteratorHelper(ops),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var op = _step6.value;
            switch (op | 0) {
              case _util.OPS.rectangle:
                x = args[j++];
                y = args[j++];
                var width = args[j++];
                var height = args[j++];
                var xw = x + width;
                var yh = y + height;
                d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                break;
              case _util.OPS.moveTo:
                x = args[j++];
                y = args[j++];
                d.push("M", pf(x), pf(y));
                break;
              case _util.OPS.lineTo:
                x = args[j++];
                y = args[j++];
                d.push("L", pf(x), pf(y));
                break;
              case _util.OPS.curveTo:
                x = args[j + 4];
                y = args[j + 5];
                d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                j += 6;
                break;
              case _util.OPS.curveTo2:
                d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                x = args[j + 2];
                y = args[j + 3];
                j += 4;
                break;
              case _util.OPS.curveTo3:
                x = args[j + 2];
                y = args[j + 3];
                d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                j += 4;
                break;
              case _util.OPS.closePath:
                d.push("Z");
                break;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        d = d.join(" ");
        if (current.path && ops.length > 0 && ops[0] !== _util.OPS.rectangle && ops[0] !== _util.OPS.moveTo) {
          d = current.path.getAttributeNS(null, "d") + d;
        } else {
          current.path = this.svgFactory.createElement("svg:path");
          this._ensureTransformGroup().appendChild(current.path);
        }
        current.path.setAttributeNS(null, "d", d);
        current.path.setAttributeNS(null, "fill", "none");
        current.element = current.path;
        current.setCurrentPoint(x, y);
      }
    }, {
      key: "endPath",
      value: function endPath() {
        var current = this.current;
        current.path = null;
        if (!this.pendingClip) {
          return;
        }
        if (!current.element) {
          this.pendingClip = null;
          return;
        }
        var clipId = "clippath".concat(clipCount++);
        var clipPath = this.svgFactory.createElement("svg:clipPath");
        clipPath.setAttributeNS(null, "id", clipId);
        clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
        var clipElement = current.element.cloneNode(true);
        if (this.pendingClip === "evenodd") {
          clipElement.setAttributeNS(null, "clip-rule", "evenodd");
        } else {
          clipElement.setAttributeNS(null, "clip-rule", "nonzero");
        }
        this.pendingClip = null;
        clipPath.appendChild(clipElement);
        this.defs.appendChild(clipPath);
        if (current.activeClipUrl) {
          current.clipGroup = null;
          this.extraStack.forEach(function (prev) {
            prev.clipGroup = null;
          });
          clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
        }
        current.activeClipUrl = "url(#".concat(clipId, ")");
        this.tgrp = null;
      }
    }, {
      key: "clip",
      value: function clip(type) {
        this.pendingClip = type;
      }
    }, {
      key: "closePath",
      value: function closePath() {
        var current = this.current;
        if (current.path) {
          var d = "".concat(current.path.getAttributeNS(null, "d"), "Z");
          current.path.setAttributeNS(null, "d", d);
        }
      }
    }, {
      key: "setLeading",
      value: function setLeading(leading) {
        this.current.leading = -leading;
      }
    }, {
      key: "setTextRise",
      value: function setTextRise(textRise) {
        this.current.textRise = textRise;
      }
    }, {
      key: "setTextRenderingMode",
      value: function setTextRenderingMode(textRenderingMode) {
        this.current.textRenderingMode = textRenderingMode;
      }
    }, {
      key: "setHScale",
      value: function setHScale(scale) {
        this.current.textHScale = scale / 100;
      }
    }, {
      key: "setRenderingIntent",
      value: function setRenderingIntent(intent) {}
    }, {
      key: "setFlatness",
      value: function setFlatness(flatness) {}
    }, {
      key: "setGState",
      value: function setGState(states) {
        var _iterator7 = _createForOfIteratorHelper(states),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _step7$value = _slicedToArray(_step7.value, 2),
              key = _step7$value[0],
              value = _step7$value[1];
            switch (key) {
              case "LW":
                this.setLineWidth(value);
                break;
              case "LC":
                this.setLineCap(value);
                break;
              case "LJ":
                this.setLineJoin(value);
                break;
              case "ML":
                this.setMiterLimit(value);
                break;
              case "D":
                this.setDash(value[0], value[1]);
                break;
              case "RI":
                this.setRenderingIntent(value);
                break;
              case "FL":
                this.setFlatness(value);
                break;
              case "Font":
                this.setFont(value);
                break;
              case "CA":
                this.setStrokeAlpha(value);
                break;
              case "ca":
                this.setFillAlpha(value);
                break;
              default:
                (0, _util.warn)("Unimplemented graphic state operator ".concat(key));
                break;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }, {
      key: "fill",
      value: function fill() {
        var current = this.current;
        if (current.element) {
          current.element.setAttributeNS(null, "fill", current.fillColor);
          current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
          this.endPath();
        }
      }
    }, {
      key: "stroke",
      value: function stroke() {
        var current = this.current;
        if (current.element) {
          this._setStrokeAttributes(current.element);
          current.element.setAttributeNS(null, "fill", "none");
          this.endPath();
        }
      }
    }, {
      key: "_setStrokeAttributes",
      value: function _setStrokeAttributes(element) {
        var lineWidthScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var current = this.current;
        var dashArray = current.dashArray;
        if (lineWidthScale !== 1 && dashArray.length > 0) {
          dashArray = dashArray.map(function (value) {
            return lineWidthScale * value;
          });
        }
        element.setAttributeNS(null, "stroke", current.strokeColor);
        element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
        element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
        element.setAttributeNS(null, "stroke-linecap", current.lineCap);
        element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
        element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
        element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
        element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
      }
    }, {
      key: "eoFill",
      value: function eoFill() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
        }
        this.fill();
      }
    }, {
      key: "fillStroke",
      value: function fillStroke() {
        this.stroke();
        this.fill();
      }
    }, {
      key: "eoFillStroke",
      value: function eoFillStroke() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
        }
        this.fillStroke();
      }
    }, {
      key: "closeStroke",
      value: function closeStroke() {
        this.closePath();
        this.stroke();
      }
    }, {
      key: "closeFillStroke",
      value: function closeFillStroke() {
        this.closePath();
        this.fillStroke();
      }
    }, {
      key: "closeEOFillStroke",
      value: function closeEOFillStroke() {
        this.closePath();
        this.eoFillStroke();
      }
    }, {
      key: "paintSolidColorImageMask",
      value: function paintSolidColorImageMask() {
        var rect = this.svgFactory.createElement("svg:rect");
        rect.setAttributeNS(null, "x", "0");
        rect.setAttributeNS(null, "y", "0");
        rect.setAttributeNS(null, "width", "1px");
        rect.setAttributeNS(null, "height", "1px");
        rect.setAttributeNS(null, "fill", this.current.fillColor);
        this._ensureTransformGroup().appendChild(rect);
      }
    }, {
      key: "paintImageXObject",
      value: function paintImageXObject(objId) {
        var imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);
        if (!imgData) {
          (0, _util.warn)("Dependent image with object ID ".concat(objId, " is not ready yet"));
          return;
        }
        this.paintInlineImageXObject(imgData);
      }
    }, {
      key: "paintInlineImageXObject",
      value: function paintInlineImageXObject(imgData, mask) {
        var width = imgData.width;
        var height = imgData.height;
        var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
        var cliprect = this.svgFactory.createElement("svg:rect");
        cliprect.setAttributeNS(null, "x", "0");
        cliprect.setAttributeNS(null, "y", "0");
        cliprect.setAttributeNS(null, "width", pf(width));
        cliprect.setAttributeNS(null, "height", pf(height));
        this.current.element = cliprect;
        this.clip("nonzero");
        var imgEl = this.svgFactory.createElement("svg:image");
        imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
        imgEl.setAttributeNS(null, "x", "0");
        imgEl.setAttributeNS(null, "y", pf(-height));
        imgEl.setAttributeNS(null, "width", pf(width) + "px");
        imgEl.setAttributeNS(null, "height", pf(height) + "px");
        imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / width), " ").concat(pf(-1 / height), ")"));
        if (mask) {
          mask.appendChild(imgEl);
        } else {
          this._ensureTransformGroup().appendChild(imgEl);
        }
      }
    }, {
      key: "paintImageMaskXObject",
      value: function paintImageMaskXObject(imgData) {
        var current = this.current;
        var width = imgData.width;
        var height = imgData.height;
        var fillColor = current.fillColor;
        current.maskId = "mask".concat(maskCount++);
        var mask = this.svgFactory.createElement("svg:mask");
        mask.setAttributeNS(null, "id", current.maskId);
        var rect = this.svgFactory.createElement("svg:rect");
        rect.setAttributeNS(null, "x", "0");
        rect.setAttributeNS(null, "y", "0");
        rect.setAttributeNS(null, "width", pf(width));
        rect.setAttributeNS(null, "height", pf(height));
        rect.setAttributeNS(null, "fill", fillColor);
        rect.setAttributeNS(null, "mask", "url(#".concat(current.maskId, ")"));
        this.defs.appendChild(mask);
        this._ensureTransformGroup().appendChild(rect);
        this.paintInlineImageXObject(imgData, mask);
      }
    }, {
      key: "paintFormXObjectBegin",
      value: function paintFormXObjectBegin(matrix, bbox) {
        if (Array.isArray(matrix) && matrix.length === 6) {
          this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        }
        if (bbox) {
          var width = bbox[2] - bbox[0];
          var height = bbox[3] - bbox[1];
          var cliprect = this.svgFactory.createElement("svg:rect");
          cliprect.setAttributeNS(null, "x", bbox[0]);
          cliprect.setAttributeNS(null, "y", bbox[1]);
          cliprect.setAttributeNS(null, "width", pf(width));
          cliprect.setAttributeNS(null, "height", pf(height));
          this.current.element = cliprect;
          this.clip("nonzero");
          this.endPath();
        }
      }
    }, {
      key: "paintFormXObjectEnd",
      value: function paintFormXObjectEnd() {}
    }, {
      key: "_initialize",
      value: function _initialize(viewport) {
        var svg = this.svgFactory.create(viewport.width, viewport.height);
        var definitions = this.svgFactory.createElement("svg:defs");
        svg.appendChild(definitions);
        this.defs = definitions;
        var rootGroup = this.svgFactory.createElement("svg:g");
        rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
        svg.appendChild(rootGroup);
        this.svg = rootGroup;
        return svg;
      }
    }, {
      key: "_ensureClipGroup",
      value: function _ensureClipGroup() {
        if (!this.current.clipGroup) {
          var clipGroup = this.svgFactory.createElement("svg:g");
          clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
          this.svg.appendChild(clipGroup);
          this.current.clipGroup = clipGroup;
        }
        return this.current.clipGroup;
      }
    }, {
      key: "_ensureTransformGroup",
      value: function _ensureTransformGroup() {
        if (!this.tgrp) {
          this.tgrp = this.svgFactory.createElement("svg:g");
          this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
          if (this.current.activeClipUrl) {
            this._ensureClipGroup().appendChild(this.tgrp);
          } else {
            this.svg.appendChild(this.tgrp);
          }
        }
        return this.tgrp;
      }
    }]);
  }();
}

/***/ }),
/* 205 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFNodeStream = void 0;
var _util = __w_pdfjs_require__(2);
var _network_utils = __w_pdfjs_require__(206);
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;
var fs = require("fs");
var http = require("http");
var https = require("https");
var url = require("url");
var fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
function parseUrl(sourceUrl) {
  var parsedUrl = url.parse(sourceUrl);
  if (parsedUrl.protocol === "file:" || parsedUrl.host) {
    return parsedUrl;
  }
  if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
    return url.parse("file:///".concat(sourceUrl));
  }
  if (!parsedUrl.host) {
    parsedUrl.protocol = "file:";
  }
  return parsedUrl;
}
var PDFNodeStream = exports.PDFNodeStream = /*#__PURE__*/function () {
  function PDFNodeStream(source) {
    _classCallCheck(this, PDFNodeStream);
    this.source = source;
    this.url = parseUrl(source.url);
    this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
    this.isFsUrl = this.url.protocol === "file:";
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  return _createClass(PDFNodeStream, [{
    key: "_progressiveDataLength",
    get: function get() {
      var _this$_fullRequestRea, _this$_fullRequestRea2;
      return (_this$_fullRequestRea = (_this$_fullRequestRea2 = this._fullRequestReader) === null || _this$_fullRequestRea2 === void 0 ? void 0 : _this$_fullRequestRea2._loaded) !== null && _this$_fullRequestRea !== void 0 ? _this$_fullRequestRea : 0;
    }
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
      this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(start, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }
      var rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
      this._rangeRequestReaders.push(rangeReader);
      return rangeReader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }]);
}();
var BaseFullReader = /*#__PURE__*/function () {
  function BaseFullReader(stream) {
    _classCallCheck(this, BaseFullReader);
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    var source = stream.source;
    this._contentLength = source.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._headersCapability = (0, _util.createPromiseCapability)();
  }
  return _createClass(BaseFullReader, [{
    key: "headersReady",
    get: function get() {
      return this._headersCapability.promise;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var chunk, buffer;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._readCapability.promise;
            case 2:
              if (!this._done) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", {
                value: undefined,
                done: true
              });
            case 4:
              if (!this._storedError) {
                _context.next = 6;
                break;
              }
              throw this._storedError;
            case 6:
              chunk = this._readableStream.read();
              if (!(chunk === null)) {
                _context.next = 10;
                break;
              }
              this._readCapability = (0, _util.createPromiseCapability)();
              return _context.abrupt("return", this.read());
            case 10:
              this._loaded += chunk.length;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded,
                  total: this._contentLength
                });
              }
              buffer = new Uint8Array(chunk).buffer;
              return _context.abrupt("return", {
                value: buffer,
                done: false
              });
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function read() {
        return _read.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);
        return;
      }
      this._readableStream.destroy(reason);
    }
  }, {
    key: "_error",
    value: function _error(reason) {
      this._storedError = reason;
      this._readCapability.resolve();
    }
  }, {
    key: "_setReadableStream",
    value: function _setReadableStream(readableStream) {
      var _this = this;
      this._readableStream = readableStream;
      readableStream.on("readable", function () {
        _this._readCapability.resolve();
      });
      readableStream.on("end", function () {
        readableStream.destroy();
        _this._done = true;
        _this._readCapability.resolve();
      });
      readableStream.on("error", function (reason) {
        _this._error(reason);
      });
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this._error(new _util.AbortException("streaming is disabled"));
      }
      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }]);
}();
var BaseRangeReader = /*#__PURE__*/function () {
  function BaseRangeReader(stream) {
    _classCallCheck(this, BaseRangeReader);
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    var source = stream.source;
    this._isStreamingSupported = !source.disableStream;
  }
  return _createClass(BaseRangeReader, [{
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var chunk, buffer;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this._readCapability.promise;
            case 2:
              if (!this._done) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", {
                value: undefined,
                done: true
              });
            case 4:
              if (!this._storedError) {
                _context2.next = 6;
                break;
              }
              throw this._storedError;
            case 6:
              chunk = this._readableStream.read();
              if (!(chunk === null)) {
                _context2.next = 10;
                break;
              }
              this._readCapability = (0, _util.createPromiseCapability)();
              return _context2.abrupt("return", this.read());
            case 10:
              this._loaded += chunk.length;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded
                });
              }
              buffer = new Uint8Array(chunk).buffer;
              return _context2.abrupt("return", {
                value: buffer,
                done: false
              });
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function read() {
        return _read2.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);
        return;
      }
      this._readableStream.destroy(reason);
    }
  }, {
    key: "_error",
    value: function _error(reason) {
      this._storedError = reason;
      this._readCapability.resolve();
    }
  }, {
    key: "_setReadableStream",
    value: function _setReadableStream(readableStream) {
      var _this2 = this;
      this._readableStream = readableStream;
      readableStream.on("readable", function () {
        _this2._readCapability.resolve();
      });
      readableStream.on("end", function () {
        readableStream.destroy();
        _this2._done = true;
        _this2._readCapability.resolve();
      });
      readableStream.on("error", function (reason) {
        _this2._error(reason);
      });
      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }]);
}();
function createRequestOptions(parsedUrl, headers) {
  return {
    protocol: parsedUrl.protocol,
    auth: parsedUrl.auth,
    host: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.path,
    method: "GET",
    headers: headers
  };
}
var PDFNodeStreamFullReader = /*#__PURE__*/function (_BaseFullReader) {
  function PDFNodeStreamFullReader(stream) {
    var _this3;
    _classCallCheck(this, PDFNodeStreamFullReader);
    _this3 = _callSuper(this, PDFNodeStreamFullReader, [stream]);
    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException("Missing PDF \"".concat(_this3._url, "\"."));
        _this3._storedError = error;
        _this3._headersCapability.reject(error);
        return;
      }
      _this3._headersCapability.resolve();
      _this3._setReadableStream(response);
      var getResponseHeader = function getResponseHeader(name) {
        return _this3._readableStream.headers[name.toLowerCase()];
      };
      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
          getResponseHeader: getResponseHeader,
          isHttp: stream.isHttp,
          rangeChunkSize: _this3._rangeChunkSize,
          disableRange: _this3._disableRange
        }),
        allowRangeRequests = _validateRangeRequest.allowRangeRequests,
        suggestedLength = _validateRangeRequest.suggestedLength;
      _this3._isRangeSupported = allowRangeRequests;
      _this3._contentLength = suggestedLength || _this3._contentLength;
      _this3._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
    };
    _this3._request = null;
    if (_this3._url.protocol === "http:") {
      _this3._request = http.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    } else {
      _this3._request = https.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    }
    _this3._request.on("error", function (reason) {
      _this3._storedError = reason;
      _this3._headersCapability.reject(reason);
    });
    _this3._request.end();
    return _this3;
  }
  _inherits(PDFNodeStreamFullReader, _BaseFullReader);
  return _createClass(PDFNodeStreamFullReader);
}(BaseFullReader);
var PDFNodeStreamRangeReader = /*#__PURE__*/function (_BaseRangeReader) {
  function PDFNodeStreamRangeReader(stream, start, end) {
    var _this4;
    _classCallCheck(this, PDFNodeStreamRangeReader);
    _this4 = _callSuper(this, PDFNodeStreamRangeReader, [stream]);
    _this4._httpHeaders = {};
    for (var property in stream.httpHeaders) {
      var value = stream.httpHeaders[property];
      if (typeof value === "undefined") {
        continue;
      }
      _this4._httpHeaders[property] = value;
    }
    _this4._httpHeaders.Range = "bytes=".concat(start, "-").concat(end - 1);
    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException("Missing PDF \"".concat(_this4._url, "\"."));
        _this4._storedError = error;
        return;
      }
      _this4._setReadableStream(response);
    };
    _this4._request = null;
    if (_this4._url.protocol === "http:") {
      _this4._request = http.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    } else {
      _this4._request = https.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    }
    _this4._request.on("error", function (reason) {
      _this4._storedError = reason;
    });
    _this4._request.end();
    return _this4;
  }
  _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);
  return _createClass(PDFNodeStreamRangeReader);
}(BaseRangeReader);
var PDFNodeStreamFsFullReader = /*#__PURE__*/function (_BaseFullReader2) {
  function PDFNodeStreamFsFullReader(stream) {
    var _this5;
    _classCallCheck(this, PDFNodeStreamFsFullReader);
    _this5 = _callSuper(this, PDFNodeStreamFsFullReader, [stream]);
    var path = decodeURIComponent(_this5._url.path);
    if (fileUriRegex.test(_this5._url.href)) {
      path = path.replace(/^\//, "");
    }
    fs.lstat(path, function (error, stat) {
      if (error) {
        if (error.code === "ENOENT") {
          error = new _util.MissingPDFException("Missing PDF \"".concat(path, "\"."));
        }
        _this5._storedError = error;
        _this5._headersCapability.reject(error);
        return;
      }
      _this5._contentLength = stat.size;
      _this5._setReadableStream(fs.createReadStream(path));
      _this5._headersCapability.resolve();
    });
    return _this5;
  }
  _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);
  return _createClass(PDFNodeStreamFsFullReader);
}(BaseFullReader);
var PDFNodeStreamFsRangeReader = /*#__PURE__*/function (_BaseRangeReader2) {
  function PDFNodeStreamFsRangeReader(stream, start, end) {
    var _this6;
    _classCallCheck(this, PDFNodeStreamFsRangeReader);
    _this6 = _callSuper(this, PDFNodeStreamFsRangeReader, [stream]);
    var path = decodeURIComponent(_this6._url.path);
    if (fileUriRegex.test(_this6._url.href)) {
      path = path.replace(/^\//, "");
    }
    _this6._setReadableStream(fs.createReadStream(path, {
      start: start,
      end: end - 1
    }));
    return _this6;
  }
  _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);
  return _createClass(PDFNodeStreamFsRangeReader);
}(BaseRangeReader);

/***/ }),
/* 206 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createResponseStatusError = createResponseStatusError;
exports.extractFilenameFromHeader = extractFilenameFromHeader;
exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
exports.validateResponseStatus = validateResponseStatus;
var _util = __w_pdfjs_require__(2);
var _content_disposition = __w_pdfjs_require__(207);
function validateRangeRequestCapabilities(_ref) {
  var getResponseHeader = _ref.getResponseHeader,
    isHttp = _ref.isHttp,
    rangeChunkSize = _ref.rangeChunkSize,
    disableRange = _ref.disableRange;
  (0, _util.assert)(rangeChunkSize > 0, "Range chunk size must be larger than zero");
  var returnValues = {
    allowRangeRequests: false,
    suggestedLength: undefined
  };
  var length = parseInt(getResponseHeader("Content-Length"), 10);
  if (!Number.isInteger(length)) {
    return returnValues;
  }
  returnValues.suggestedLength = length;
  if (length <= 2 * rangeChunkSize) {
    return returnValues;
  }
  if (disableRange || !isHttp) {
    return returnValues;
  }
  if (getResponseHeader("Accept-Ranges") !== "bytes") {
    return returnValues;
  }
  var contentEncoding = getResponseHeader("Content-Encoding") || "identity";
  if (contentEncoding !== "identity") {
    return returnValues;
  }
  returnValues.allowRangeRequests = true;
  return returnValues;
}
function extractFilenameFromHeader(getResponseHeader) {
  var contentDisposition = getResponseHeader("Content-Disposition");
  if (contentDisposition) {
    var filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
    if (filename.includes("%")) {
      try {
        filename = decodeURIComponent(filename);
      } catch (ex) {}
    }
    if (/\.pdf$/i.test(filename)) {
      return filename;
    }
  }
  return null;
}
function createResponseStatusError(status, url) {
  if (status === 404 || status === 0 && url.startsWith("file:")) {
    return new _util.MissingPDFException('Missing PDF "' + url + '".');
  }
  return new _util.UnexpectedResponseException("Unexpected server response (" + status + ') while retrieving PDF "' + url + '".', status);
}
function validateResponseStatus(status) {
  return status === 200 || status === 206;
}

/***/ }),
/* 207 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function getFilenameFromContentDispositionHeader(contentDisposition) {
  var needsEncodingFixup = true;
  var tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    var filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  tmp = rfc2231getparam(contentDisposition);
  if (tmp) {
    var _filename = rfc2047decode(tmp);
    return fixupEncoding(_filename);
  }
  tmp = toParamRegExp("filename", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    var _filename2 = rfc2616unquote(tmp);
    _filename2 = rfc2047decode(_filename2);
    return fixupEncoding(_filename2);
  }
  function toParamRegExp(attributePattern, flags) {
    return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
  }
  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }
      try {
        var decoder = new TextDecoder(encoding, {
          fatal: true
        });
        var bytes = Array.from(value, function (ch) {
          return ch.charCodeAt(0) & 0xff;
        });
        value = decoder.decode(new Uint8Array(bytes));
        needsEncodingFixup = false;
      } catch (e) {
        if (/^utf-?8$/i.test(encoding)) {
          try {
            value = decodeURIComponent(escape(value));
            needsEncodingFixup = false;
          } catch (err) {}
        }
      }
    }
    return value;
  }
  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode("utf-8", value);
      if (needsEncodingFixup) {
        value = textdecode("iso-8859-1", value);
      }
    }
    return value;
  }
  function rfc2231getparam(contentDispositionStr) {
    var matches = [];
    var match;
    var iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    while ((match = iter.exec(contentDispositionStr)) !== null) {
      var _match = match,
        _match2 = _slicedToArray(_match, 4),
        n = _match2[1],
        quot = _match2[2],
        part = _match2[3];
      n = parseInt(n, 10);
      if (n in matches) {
        if (n === 0) {
          break;
        }
        continue;
      }
      matches[n] = [quot, part];
    }
    var parts = [];
    for (var _n = 0; _n < matches.length; ++_n) {
      if (!(_n in matches)) {
        break;
      }
      var _matches$_n = _slicedToArray(matches[_n], 2),
        _quot = _matches$_n[0],
        _part = _matches$_n[1];
      _part = rfc2616unquote(_part);
      if (_quot) {
        _part = unescape(_part);
        if (_n === 0) {
          _part = rfc5987decode(_part);
        }
      }
      parts.push(_part);
    }
    return parts.join("");
  }
  function rfc2616unquote(value) {
    if (value.startsWith('"')) {
      var parts = value.slice(1).split('\\"');
      for (var i = 0; i < parts.length; ++i) {
        var quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }
        parts[i] = parts[i].replace(/\\(.)/g, "$1");
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extvalue) {
    var encodingend = extvalue.indexOf("'");
    if (encodingend === -1) {
      return extvalue;
    }
    var encoding = extvalue.slice(0, encodingend);
    var langvalue = extvalue.slice(encodingend + 1);
    var value = langvalue.replace(/^[^']*'/, "");
    return textdecode(encoding, value);
  }
  function rfc2047decode(value) {
    if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (matches, charset, encoding, text) {
      if (encoding === "q" || encoding === "Q") {
        text = text.replace(/_/g, " ");
        text = text.replace(/=([0-9a-fA-F]{2})/g, function (match, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        });
        return textdecode(charset, text);
      }
      try {
        text = atob(text);
      } catch (e) {}
      return textdecode(charset, text);
    });
  }
  return "";
}

/***/ }),
/* 208 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFNetworkStream = void 0;
var _util = __w_pdfjs_require__(2);
var _network_utils = __w_pdfjs_require__(206);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;
var OK_RESPONSE = 200;
var PARTIAL_CONTENT_RESPONSE = 206;
function getArrayBuffer(xhr) {
  var data = xhr.response;
  if (typeof data !== "string") {
    return data;
  }
  var array = (0, _util.stringToBytes)(data);
  return array.buffer;
}
var NetworkManager = /*#__PURE__*/function () {
  function NetworkManager(url, args) {
    _classCallCheck(this, NetworkManager);
    this.url = url;
    args = args || {};
    this.isHttp = /^https?:/i.test(url);
    this.httpHeaders = this.isHttp && args.httpHeaders || {};
    this.withCredentials = args.withCredentials || false;
    this.getXhr = args.getXhr || function NetworkManager_getXhr() {
      return new XMLHttpRequest();
    };
    this.currXhrId = 0;
    this.pendingRequests = Object.create(null);
  }
  return _createClass(NetworkManager, [{
    key: "requestRange",
    value: function requestRange(begin, end, listeners) {
      var args = {
        begin: begin,
        end: end
      };
      for (var prop in listeners) {
        args[prop] = listeners[prop];
      }
      return this.request(args);
    }
  }, {
    key: "requestFull",
    value: function requestFull(listeners) {
      return this.request(listeners);
    }
  }, {
    key: "request",
    value: function request(args) {
      var xhr = this.getXhr();
      var xhrId = this.currXhrId++;
      var pendingRequest = this.pendingRequests[xhrId] = {
        xhr: xhr
      };
      xhr.open("GET", this.url);
      xhr.withCredentials = this.withCredentials;
      for (var property in this.httpHeaders) {
        var value = this.httpHeaders[property];
        if (typeof value === "undefined") {
          continue;
        }
        xhr.setRequestHeader(property, value);
      }
      if (this.isHttp && "begin" in args && "end" in args) {
        xhr.setRequestHeader("Range", "bytes=".concat(args.begin, "-").concat(args.end - 1));
        pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
      } else {
        pendingRequest.expectedStatus = OK_RESPONSE;
      }
      xhr.responseType = "arraybuffer";
      if (args.onError) {
        xhr.onerror = function (evt) {
          args.onError(xhr.status);
        };
      }
      xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
      xhr.onprogress = this.onProgress.bind(this, xhrId);
      pendingRequest.onHeadersReceived = args.onHeadersReceived;
      pendingRequest.onDone = args.onDone;
      pendingRequest.onError = args.onError;
      pendingRequest.onProgress = args.onProgress;
      xhr.send(null);
      return xhrId;
    }
  }, {
    key: "onProgress",
    value: function onProgress(xhrId, evt) {
      var pendingRequest = this.pendingRequests[xhrId];
      if (!pendingRequest) {
        return;
      }
      if (pendingRequest.onProgress) {
        pendingRequest.onProgress(evt);
      }
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(xhrId, evt) {
      var pendingRequest = this.pendingRequests[xhrId];
      if (!pendingRequest) {
        return;
      }
      var xhr = pendingRequest.xhr;
      if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
        pendingRequest.onHeadersReceived();
        delete pendingRequest.onHeadersReceived;
      }
      if (xhr.readyState !== 4) {
        return;
      }
      if (!(xhrId in this.pendingRequests)) {
        return;
      }
      delete this.pendingRequests[xhrId];
      if (xhr.status === 0 && this.isHttp) {
        if (pendingRequest.onError) {
          pendingRequest.onError(xhr.status);
        }
        return;
      }
      var xhrStatus = xhr.status || OK_RESPONSE;
      var ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
      if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
        if (pendingRequest.onError) {
          pendingRequest.onError(xhr.status);
        }
        return;
      }
      var chunk = getArrayBuffer(xhr);
      if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
        var rangeHeader = xhr.getResponseHeader("Content-Range");
        var matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
        pendingRequest.onDone({
          begin: parseInt(matches[1], 10),
          chunk: chunk
        });
      } else if (chunk) {
        pendingRequest.onDone({
          begin: 0,
          chunk: chunk
        });
      } else if (pendingRequest.onError) {
        pendingRequest.onError(xhr.status);
      }
    }
  }, {
    key: "getRequestXhr",
    value: function getRequestXhr(xhrId) {
      return this.pendingRequests[xhrId].xhr;
    }
  }, {
    key: "isPendingRequest",
    value: function isPendingRequest(xhrId) {
      return xhrId in this.pendingRequests;
    }
  }, {
    key: "abortRequest",
    value: function abortRequest(xhrId) {
      var xhr = this.pendingRequests[xhrId].xhr;
      delete this.pendingRequests[xhrId];
      xhr.abort();
    }
  }]);
}();
var PDFNetworkStream = exports.PDFNetworkStream = /*#__PURE__*/function () {
  function PDFNetworkStream(source) {
    _classCallCheck(this, PDFNetworkStream);
    this._source = source;
    this._manager = new NetworkManager(source.url, {
      httpHeaders: source.httpHeaders,
      withCredentials: source.withCredentials
    });
    this._rangeChunkSize = source.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  return _createClass(PDFNetworkStream, [{
    key: "_onRangeRequestReaderClosed",
    value: function _onRangeRequestReaderClosed(reader) {
      var i = this._rangeRequestReaders.indexOf(reader);
      if (i >= 0) {
        this._rangeRequestReaders.splice(i, 1);
      }
    }
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
      this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      var reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
      reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
      this._rangeRequestReaders.push(reader);
      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }]);
}();
var PDFNetworkStreamFullRequestReader = /*#__PURE__*/function () {
  function PDFNetworkStreamFullRequestReader(manager, source) {
    _classCallCheck(this, PDFNetworkStreamFullRequestReader);
    this._manager = manager;
    var args = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = source.url;
    this._fullRequestId = manager.requestFull(args);
    this._headersReceivedCapability = (0, _util.createPromiseCapability)();
    this._disableRange = source.disableRange || false;
    this._contentLength = source.length;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = undefined;
    this._filename = null;
    this.onProgress = null;
  }
  return _createClass(PDFNetworkStreamFullRequestReader, [{
    key: "_onHeadersReceived",
    value: function _onHeadersReceived() {
      var fullRequestXhrId = this._fullRequestId;
      var fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
      var getResponseHeader = function getResponseHeader(name) {
        return fullRequestXhr.getResponseHeader(name);
      };
      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
          getResponseHeader: getResponseHeader,
          isHttp: this._manager.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange
        }),
        allowRangeRequests = _validateRangeRequest.allowRangeRequests,
        suggestedLength = _validateRangeRequest.suggestedLength;
      if (allowRangeRequests) {
        this._isRangeSupported = true;
      }
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
      if (this._isRangeSupported) {
        this._manager.abortRequest(fullRequestXhrId);
      }
      this._headersReceivedCapability.resolve();
    }
  }, {
    key: "_onDone",
    value: function _onDone(args) {
      if (args) {
        if (this._requests.length > 0) {
          var requestCapability = this._requests.shift();
          requestCapability.resolve({
            value: args.chunk,
            done: false
          });
        } else {
          this._cachedChunks.push(args.chunk);
        }
      }
      this._done = true;
      if (this._cachedChunks.length > 0) {
        return;
      }
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
    }
  }, {
    key: "_onError",
    value: function _onError(status) {
      var url = this._url;
      var exception = (0, _network_utils.createResponseStatusError)(status, url);
      this._storedError = exception;
      this._headersReceivedCapability.reject(exception);
      this._requests.forEach(function (requestCapability) {
        requestCapability.reject(exception);
      });
      this._requests = [];
      this._cachedChunks = [];
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(data) {
      if (this.onProgress) {
        this.onProgress({
          loaded: data.loaded,
          total: data.lengthComputable ? data.total : this._contentLength
        });
      }
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersReceivedCapability.promise;
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var chunk, requestCapability;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this._storedError) {
                _context.next = 2;
                break;
              }
              throw this._storedError;
            case 2:
              if (!(this._cachedChunks.length > 0)) {
                _context.next = 5;
                break;
              }
              chunk = this._cachedChunks.shift();
              return _context.abrupt("return", {
                value: chunk,
                done: false
              });
            case 5:
              if (!this._done) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", {
                value: undefined,
                done: true
              });
            case 7:
              requestCapability = (0, _util.createPromiseCapability)();
              this._requests.push(requestCapability);
              return _context.abrupt("return", requestCapability.promise);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function read() {
        return _read.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;
      this._headersReceivedCapability.reject(reason);
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
      if (this._manager.isPendingRequest(this._fullRequestId)) {
        this._manager.abortRequest(this._fullRequestId);
      }
      this._fullRequestReader = null;
    }
  }]);
}();
var PDFNetworkStreamRangeRequestReader = /*#__PURE__*/function () {
  function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
    _classCallCheck(this, PDFNetworkStreamRangeRequestReader);
    this._manager = manager;
    var args = {
      onDone: this._onDone.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._requestId = manager.requestRange(begin, end, args);
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this.onProgress = null;
    this.onClosed = null;
  }
  return _createClass(PDFNetworkStreamRangeRequestReader, [{
    key: "_close",
    value: function _close() {
      if (this.onClosed) {
        this.onClosed(this);
      }
    }
  }, {
    key: "_onDone",
    value: function _onDone(data) {
      var chunk = data.chunk;
      if (this._requests.length > 0) {
        var requestCapability = this._requests.shift();
        requestCapability.resolve({
          value: chunk,
          done: false
        });
      } else {
        this._queuedChunk = chunk;
      }
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
      this._close();
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(evt) {
      if (!this.isStreamingSupported && this.onProgress) {
        this.onProgress({
          loaded: evt.loaded
        });
      }
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return false;
    }
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var chunk, requestCapability;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._queuedChunk !== null)) {
                _context2.next = 4;
                break;
              }
              chunk = this._queuedChunk;
              this._queuedChunk = null;
              return _context2.abrupt("return", {
                value: chunk,
                done: false
              });
            case 4:
              if (!this._done) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", {
                value: undefined,
                done: true
              });
            case 6:
              requestCapability = (0, _util.createPromiseCapability)();
              this._requests.push(requestCapability);
              return _context2.abrupt("return", requestCapability.promise);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function read() {
        return _read2.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
      if (this._manager.isPendingRequest(this._requestId)) {
        this._manager.abortRequest(this._requestId);
      }
      this._close();
    }
  }]);
}();

/***/ }),
/* 209 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PDFFetchStream = void 0;
var _util = __w_pdfjs_require__(2);
var _network_utils = __w_pdfjs_require__(206);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;
function createFetchOptions(headers, withCredentials, abortController) {
  return {
    method: "GET",
    headers: headers,
    signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal,
    mode: "cors",
    credentials: withCredentials ? "include" : "same-origin",
    redirect: "follow"
  };
}
function createHeaders(httpHeaders) {
  var headers = new Headers();
  for (var property in httpHeaders) {
    var value = httpHeaders[property];
    if (typeof value === "undefined") {
      continue;
    }
    headers.append(property, value);
  }
  return headers;
}
var PDFFetchStream = exports.PDFFetchStream = /*#__PURE__*/function () {
  function PDFFetchStream(source) {
    _classCallCheck(this, PDFFetchStream);
    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  return _createClass(PDFFetchStream, [{
    key: "_progressiveDataLength",
    get: function get() {
      var _this$_fullRequestRea, _this$_fullRequestRea2;
      return (_this$_fullRequestRea = (_this$_fullRequestRea2 = this._fullRequestReader) === null || _this$_fullRequestRea2 === void 0 ? void 0 : _this$_fullRequestRea2._loaded) !== null && _this$_fullRequestRea !== void 0 ? _this$_fullRequestRea : 0;
    }
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
      this._fullRequestReader = new PDFFetchStreamReader(this);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }
      var reader = new PDFFetchStreamRangeReader(this, begin, end);
      this._rangeRequestReaders.push(reader);
      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }]);
}();
var PDFFetchStreamReader = /*#__PURE__*/function () {
  function PDFFetchStreamReader(stream) {
    var _this = this;
    _classCallCheck(this, PDFFetchStreamReader);
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    var source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._contentLength = source.length;
    this._headersCapability = (0, _util.createPromiseCapability)();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    if (typeof AbortController !== "undefined") {
      this._abortController = new AbortController();
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._headers = createHeaders(this._stream.httpHeaders);
    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }
      _this._reader = response.body.getReader();
      _this._headersCapability.resolve();
      var getResponseHeader = function getResponseHeader(name) {
        return response.headers.get(name);
      };
      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
          getResponseHeader: getResponseHeader,
          isHttp: _this._stream.isHttp,
          rangeChunkSize: _this._rangeChunkSize,
          disableRange: _this._disableRange
        }),
        allowRangeRequests = _validateRangeRequest.allowRangeRequests,
        suggestedLength = _validateRangeRequest.suggestedLength;
      _this._isRangeSupported = allowRangeRequests;
      _this._contentLength = suggestedLength || _this._contentLength;
      _this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
      if (!_this._isStreamingSupported && _this._isRangeSupported) {
        _this.cancel(new _util.AbortException("Streaming is disabled."));
      }
    })["catch"](this._headersCapability.reject);
    this.onProgress = null;
  }
  return _createClass(PDFFetchStreamReader, [{
    key: "headersReady",
    get: function get() {
      return this._headersCapability.promise;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$this$_reader$r, value, done, buffer;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._headersCapability.promise;
            case 2:
              _context.next = 4;
              return this._reader.read();
            case 4:
              _yield$this$_reader$r = _context.sent;
              value = _yield$this$_reader$r.value;
              done = _yield$this$_reader$r.done;
              if (!done) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return", {
                value: value,
                done: done
              });
            case 9:
              this._loaded += value.byteLength;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded,
                  total: this._contentLength
                });
              }
              buffer = new Uint8Array(value).buffer;
              return _context.abrupt("return", {
                value: buffer,
                done: false
              });
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function read() {
        return _read.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }
      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }]);
}();
var PDFFetchStreamRangeReader = /*#__PURE__*/function () {
  function PDFFetchStreamRangeReader(stream, begin, end) {
    var _this2 = this;
    _classCallCheck(this, PDFFetchStreamRangeReader);
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    var source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._isStreamingSupported = !source.disableStream;
    if (typeof AbortController !== "undefined") {
      this._abortController = new AbortController();
    }
    this._headers = createHeaders(this._stream.httpHeaders);
    this._headers.append("Range", "bytes=".concat(begin, "-").concat(end - 1));
    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }
      _this2._readCapability.resolve();
      _this2._reader = response.body.getReader();
    })["catch"](function (reason) {
      if ((reason === null || reason === void 0 ? void 0 : reason.name) === "AbortError") {
        return;
      }
      throw reason;
    });
    this.onProgress = null;
  }
  return _createClass(PDFFetchStreamRangeReader, [{
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$this$_reader$r2, value, done, buffer;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this._readCapability.promise;
            case 2:
              _context2.next = 4;
              return this._reader.read();
            case 4:
              _yield$this$_reader$r2 = _context2.sent;
              value = _yield$this$_reader$r2.value;
              done = _yield$this$_reader$r2.done;
              if (!done) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("return", {
                value: value,
                done: done
              });
            case 9:
              this._loaded += value.byteLength;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded
                });
              }
              buffer = new Uint8Array(value).buffer;
              return _context2.abrupt("return", {
                value: buffer,
                done: false
              });
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function read() {
        return _read2.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }
      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }]);
}();

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AnnotationLayer", ({
  enumerable: true,
  get: function get() {
    return _annotation_layer.AnnotationLayer;
  }
}));
Object.defineProperty(exports, "CMapCompressionType", ({
  enumerable: true,
  get: function get() {
    return _util.CMapCompressionType;
  }
}));
Object.defineProperty(exports, "GlobalWorkerOptions", ({
  enumerable: true,
  get: function get() {
    return _worker_options.GlobalWorkerOptions;
  }
}));
Object.defineProperty(exports, "InvalidPDFException", ({
  enumerable: true,
  get: function get() {
    return _util.InvalidPDFException;
  }
}));
Object.defineProperty(exports, "LinkTarget", ({
  enumerable: true,
  get: function get() {
    return _display_utils.LinkTarget;
  }
}));
Object.defineProperty(exports, "LoopbackPort", ({
  enumerable: true,
  get: function get() {
    return _api.LoopbackPort;
  }
}));
Object.defineProperty(exports, "MissingPDFException", ({
  enumerable: true,
  get: function get() {
    return _util.MissingPDFException;
  }
}));
Object.defineProperty(exports, "OPS", ({
  enumerable: true,
  get: function get() {
    return _util.OPS;
  }
}));
Object.defineProperty(exports, "PDFDataRangeTransport", ({
  enumerable: true,
  get: function get() {
    return _api.PDFDataRangeTransport;
  }
}));
Object.defineProperty(exports, "PDFDateString", ({
  enumerable: true,
  get: function get() {
    return _display_utils.PDFDateString;
  }
}));
Object.defineProperty(exports, "PDFWorker", ({
  enumerable: true,
  get: function get() {
    return _api.PDFWorker;
  }
}));
Object.defineProperty(exports, "PasswordResponses", ({
  enumerable: true,
  get: function get() {
    return _util.PasswordResponses;
  }
}));
Object.defineProperty(exports, "PermissionFlag", ({
  enumerable: true,
  get: function get() {
    return _util.PermissionFlag;
  }
}));
Object.defineProperty(exports, "RenderingCancelledException", ({
  enumerable: true,
  get: function get() {
    return _display_utils.RenderingCancelledException;
  }
}));
Object.defineProperty(exports, "SVGGraphics", ({
  enumerable: true,
  get: function get() {
    return _svg.SVGGraphics;
  }
}));
Object.defineProperty(exports, "UNSUPPORTED_FEATURES", ({
  enumerable: true,
  get: function get() {
    return _util.UNSUPPORTED_FEATURES;
  }
}));
Object.defineProperty(exports, "UnexpectedResponseException", ({
  enumerable: true,
  get: function get() {
    return _util.UnexpectedResponseException;
  }
}));
Object.defineProperty(exports, "Util", ({
  enumerable: true,
  get: function get() {
    return _util.Util;
  }
}));
Object.defineProperty(exports, "VerbosityLevel", ({
  enumerable: true,
  get: function get() {
    return _util.VerbosityLevel;
  }
}));
Object.defineProperty(exports, "addLinkAttributes", ({
  enumerable: true,
  get: function get() {
    return _display_utils.addLinkAttributes;
  }
}));
Object.defineProperty(exports, "apiCompatibilityParams", ({
  enumerable: true,
  get: function get() {
    return _api_compatibility.apiCompatibilityParams;
  }
}));
Object.defineProperty(exports, "build", ({
  enumerable: true,
  get: function get() {
    return _api.build;
  }
}));
Object.defineProperty(exports, "createObjectURL", ({
  enumerable: true,
  get: function get() {
    return _util.createObjectURL;
  }
}));
Object.defineProperty(exports, "createPromiseCapability", ({
  enumerable: true,
  get: function get() {
    return _util.createPromiseCapability;
  }
}));
Object.defineProperty(exports, "createValidAbsoluteUrl", ({
  enumerable: true,
  get: function get() {
    return _util.createValidAbsoluteUrl;
  }
}));
Object.defineProperty(exports, "getDocument", ({
  enumerable: true,
  get: function get() {
    return _api.getDocument;
  }
}));
Object.defineProperty(exports, "getFilenameFromUrl", ({
  enumerable: true,
  get: function get() {
    return _display_utils.getFilenameFromUrl;
  }
}));
Object.defineProperty(exports, "loadScript", ({
  enumerable: true,
  get: function get() {
    return _display_utils.loadScript;
  }
}));
Object.defineProperty(exports, "removeNullCharacters", ({
  enumerable: true,
  get: function get() {
    return _util.removeNullCharacters;
  }
}));
Object.defineProperty(exports, "renderTextLayer", ({
  enumerable: true,
  get: function get() {
    return _text_layer.renderTextLayer;
  }
}));
Object.defineProperty(exports, "shadow", ({
  enumerable: true,
  get: function get() {
    return _util.shadow;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _api.version;
  }
}));
var _display_utils = __w_pdfjs_require__(1);
var _api = __w_pdfjs_require__(187);
var _util = __w_pdfjs_require__(2);
var _annotation_layer = __w_pdfjs_require__(201);
var _api_compatibility = __w_pdfjs_require__(191);
var _worker_options = __w_pdfjs_require__(194);
var _text_layer = __w_pdfjs_require__(203);
var _svg = __w_pdfjs_require__(204);
var pdfjsVersion = '2.7.39';
var pdfjsBuild = '4dcdae2e5';
{
  var _require = __w_pdfjs_require__(4),
    isNodeJS = _require.isNodeJS;
  if (isNodeJS) {
    var PDFNodeStream = (__w_pdfjs_require__(205).PDFNodeStream);
    (0, _api.setPDFNetworkStreamFactory)(function (params) {
      return new PDFNodeStream(params);
    });
  } else {
    var PDFNetworkStream = (__w_pdfjs_require__(208).PDFNetworkStream);
    var PDFFetchStream;
    if ((0, _display_utils.isFetchSupported)()) {
      PDFFetchStream = (__w_pdfjs_require__(209).PDFFetchStream);
    }
    (0, _api.setPDFNetworkStreamFactory)(function (params) {
      if (PDFFetchStream && (0, _display_utils.isValidFetchUrl)(params.url)) {
        return new PDFFetchStream(params);
      }
      return new PDFNetworkStream(params);
    });
  }
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=pdf.js.map