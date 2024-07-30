/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2019 Mozilla Foundation
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDataRangeTransport = exports.LoopbackPort = void 0;
exports.getDocument = getDocument;
exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
exports.version = void 0;
var _util = require("../shared/util");
var _display_utils = require("./display_utils");
var _font_loader = require("./font_loader");
var _api_compatibility = require("./api_compatibility");
var _canvas = require("./canvas");
var _global_scope = _interopRequireDefault(require("../shared/global_scope"));
var _worker_options = require("./worker_options");
var _message_handler = require("../shared/message_handler");
var _metadata = require("./metadata");
var _transport_stream = require("./transport_stream");
var _webgl = require("./webgl");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var fallbackWorkerSrc;
var fakeWorkerFilesLoader = null;
{
  var useRequireEnsure = true;
  var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
  fakeWorkerFilesLoader = useRequireEnsure ? function () {
    return new Promise(function (resolve, reject) {
      try {
        var worker;
        worker = require('../pdf.worker.js');
        resolve(worker.WorkerMessageHandler);
      } catch (ex) {
        reject(ex);
      }
    });
  } : dynamicLoaderSupported ? function () {
    return new Promise(function (resolve, reject) {
      requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
        try {
          resolve(worker.WorkerMessageHandler);
        } catch (ex) {
          reject(ex);
        }
      }, reject);
    });
  } : null;
  if (!fallbackWorkerSrc && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && 'currentScript' in document) {
    var pdfjsFilePath = document.currentScript && document.currentScript.src;
    if (pdfjsFilePath) {
      fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, '.worker$1$2');
    }
  }
}
var createPDFNetworkStream;
function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
  createPDFNetworkStream = pdfNetworkStreamFactory;
}
function getDocument(src) {
  var task = new PDFDocumentLoadingTask();
  var source;
  if (typeof src === 'string') {
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
    if (_typeof(src) !== 'object') {
      throw new Error('Invalid parameter in getDocument, ' + 'need either Uint8Array, string or a parameter object');
    }
    if (!src.url && !src.data && !src.range) {
      throw new Error('Invalid parameter object: need either .data, .range or .url');
    }
    source = src;
  }
  var params = Object.create(null);
  var rangeTransport = null,
    worker = null;
  for (var key in source) {
    if (key === 'url' && typeof window !== 'undefined') {
      params[key] = new _util.URL(source[key], window.location).href;
      continue;
    } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
    } else if (key === 'worker') {
      worker = source[key];
      continue;
    } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      var pdfBytes = source[key];
      if (typeof pdfBytes === 'string') {
        params[key] = (0, _util.stringToBytes)(pdfBytes);
      } else if (_typeof(pdfBytes) === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
        params[key] = new Uint8Array(pdfBytes);
      } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
        params[key] = new Uint8Array(pdfBytes);
      } else {
        throw new Error('Invalid PDF binary data: either typed array, ' + 'string or array-like object is expected in the ' + 'data property.');
      }
      continue;
    }
    params[key] = source[key];
  }
  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
  params.CMapReaderFactory = params.CMapReaderFactory || _display_utils.DOMCMapReaderFactory;
  params.ignoreErrors = params.stopAtErrors !== true;
  params.pdfBug = params.pdfBug === true;
  var NativeImageDecoderValues = Object.values(_util.NativeImageDecoding);
  if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
    params.nativeImageDecoderSupport = _api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport || _util.NativeImageDecoding.DECODE;
  }
  if (!Number.isInteger(params.maxImageSize)) {
    params.maxImageSize = -1;
  }
  if (typeof params.isEvalSupported !== 'boolean') {
    params.isEvalSupported = true;
  }
  if (typeof params.disableFontFace !== 'boolean') {
    params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
  }
  if (typeof params.disableRange !== 'boolean') {
    params.disableRange = false;
  }
  if (typeof params.disableStream !== 'boolean') {
    params.disableStream = false;
  }
  if (typeof params.disableAutoFetch !== 'boolean') {
    params.disableAutoFetch = false;
  }
  if (typeof params.disableCreateObjectURL !== 'boolean') {
    params.disableCreateObjectURL = _api_compatibility.apiCompatibilityParams.disableCreateObjectURL || false;
  }
  (0, _util.setVerbosityLevel)(params.verbosity);
  if (!worker) {
    var workerParams = {
      postMessageTransfers: params.postMessageTransfers,
      verbosity: params.verbosity,
      port: _worker_options.GlobalWorkerOptions.workerPort
    };
    worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
    task._worker = worker;
  }
  var docId = task.docId;
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error('Loading aborted');
    }
    return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
      if (task.destroyed) {
        throw new Error('Loading aborted');
      }
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
      var messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
      messageHandler.postMessageTransfers = worker.postMessageTransfers;
      var transport = new WorkerTransport(messageHandler, task, networkStream, params);
      task._transport = transport;
      messageHandler.send('Ready', null);
    });
  })["catch"](task._capability.reject);
  return task;
}
function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
  if (worker.destroyed) {
    return Promise.reject(new Error('Worker was destroyed'));
  }
  if (pdfDataRangeTransport) {
    source.length = pdfDataRangeTransport.length;
    source.initialData = pdfDataRangeTransport.initialData;
    source.progressiveDone = pdfDataRangeTransport.progressiveDone;
  }
  return worker.messageHandler.sendWithPromise('GetDocRequest', {
    docId: docId,
    apiVersion: '2.2.255',
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
    disableCreateObjectURL: source.disableCreateObjectURL,
    postMessageTransfers: worker.postMessageTransfers,
    docBaseUrl: source.docBaseUrl,
    nativeImageDecoderSupport: source.nativeImageDecoderSupport,
    ignoreErrors: source.ignoreErrors,
    isEvalSupported: source.isEvalSupported
  }).then(function (workerId) {
    if (worker.destroyed) {
      throw new Error('Worker was destroyed');
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
      this.docId = 'd' + nextDocumentId++;
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
    }, {
      key: "then",
      value: function then(onFulfilled, onRejected) {
        (0, _display_utils.deprecated)('PDFDocumentLoadingTask.then method, ' + 'use the `promise` getter instead.');
        return this.promise.then.apply(this.promise, arguments);
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
      (0, _util.unreachable)('Abstract method PDFDataRangeTransport.requestDataRange');
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
    key: "getOpenActionDestination",
    value: function getOpenActionDestination() {
      return this._transport.getOpenActionDestination();
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
    key: "getOutline",
    value: function getOutline() {
      return this._transport.getOutline();
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
      this._transport.startCleanup();
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
  }]);
}();
var PDFPageProxy = exports.PDFPageProxy = /*#__PURE__*/function () {
  function PDFPageProxy(pageIndex, pageInfo, transport) {
    var pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classCallCheck(this, PDFPageProxy);
    this.pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = transport;
    this._stats = pdfBug ? new _display_utils.StatTimer() : _display_utils.DummyStatTimer;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this.cleanupAfterRender = false;
    this.pendingCleanup = false;
    this.intentStates = Object.create(null);
    this.destroyed = false;
  }
  return _createClass(PDFPageProxy, [{
    key: "pageNumber",
    get: function get() {
      return this.pageIndex + 1;
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
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        scale = _ref.scale,
        _ref$rotation = _ref.rotation,
        rotation = _ref$rotation === void 0 ? this.rotate : _ref$rotation,
        _ref$dontFlip = _ref.dontFlip,
        dontFlip = _ref$dontFlip === void 0 ? false : _ref$dontFlip;
      if (arguments.length > 1 || typeof arguments[0] === 'number') {
        (0, _display_utils.deprecated)('getViewport is called with obsolete arguments.');
        scale = arguments[0];
        rotation = typeof arguments[1] === 'number' ? arguments[1] : this.rotate;
        dontFlip = typeof arguments[2] === 'boolean' ? arguments[2] : false;
      }
      return new _display_utils.PageViewport({
        viewBox: this.view,
        scale: scale,
        rotation: rotation,
        dontFlip: dontFlip
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$intent = _ref2.intent,
        intent = _ref2$intent === void 0 ? null : _ref2$intent;
      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
        this.annotationsPromise = this._transport.getAnnotations(this.pageIndex, intent);
        this.annotationsIntent = intent;
      }
      return this.annotationsPromise;
    }
  }, {
    key: "render",
    value: function render(_ref3) {
      var _this5 = this;
      var canvasContext = _ref3.canvasContext,
        viewport = _ref3.viewport,
        _ref3$intent = _ref3.intent,
        intent = _ref3$intent === void 0 ? 'display' : _ref3$intent,
        _ref3$enableWebGL = _ref3.enableWebGL,
        enableWebGL = _ref3$enableWebGL === void 0 ? false : _ref3$enableWebGL,
        _ref3$renderInteracti = _ref3.renderInteractiveForms,
        renderInteractiveForms = _ref3$renderInteracti === void 0 ? false : _ref3$renderInteracti,
        _ref3$transform = _ref3.transform,
        transform = _ref3$transform === void 0 ? null : _ref3$transform,
        _ref3$imageLayer = _ref3.imageLayer,
        imageLayer = _ref3$imageLayer === void 0 ? null : _ref3$imageLayer,
        _ref3$canvasFactory = _ref3.canvasFactory,
        canvasFactory = _ref3$canvasFactory === void 0 ? null : _ref3$canvasFactory,
        _ref3$background = _ref3.background,
        background = _ref3$background === void 0 ? null : _ref3$background,
        _ref3$forceRenderSigA = _ref3.forceRenderSigAnnot,
        forceRenderSigAnnot = _ref3$forceRenderSigA === void 0 ? false : _ref3$forceRenderSigA;
      var stats = this._stats;
      stats.time('Overall');
      this.pendingCleanup = false;
      var renderingIntent = intent === 'print' ? 'print' : 'display';
      var canvasFactoryInstance = canvasFactory || new _display_utils.DOMCanvasFactory();
      var webGLContext = new _webgl.WebGLContext({
        enable: enableWebGL
      });
      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      if (!intentState.displayReadyCapability) {
        intentState.receivingOperatorList = true;
        intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        stats.time('Page Request');
        this._transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageNumber - 1,
          intent: renderingIntent,
          renderInteractiveForms: renderInteractiveForms === true,
          forceRenderSigAnnot: forceRenderSigAnnot === true
        });
      }
      var complete = function complete(error) {
        var i = intentState.renderTasks.indexOf(internalRenderTask);
        if (i >= 0) {
          intentState.renderTasks.splice(i, 1);
        }
        if (_this5.cleanupAfterRender || renderingIntent === 'print') {
          _this5.pendingCleanup = true;
        }
        _this5._tryCleanup();
        if (error) {
          internalRenderTask.capability.reject(error);
        } else {
          internalRenderTask.capability.resolve();
        }
        stats.timeEnd('Rendering');
        stats.timeEnd('Overall');
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
        pageNumber: this.pageNumber,
        canvasFactory: canvasFactoryInstance,
        webGLContext: webGLContext,
        useRequestAnimationFrame: renderingIntent !== 'print',
        pdfBug: this._pdfBug
      });
      if (!intentState.renderTasks) {
        intentState.renderTasks = [];
      }
      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;
      intentState.displayReadyCapability.promise.then(function (transparency) {
        if (_this5.pendingCleanup) {
          complete();
          return;
        }
        stats.time('Rendering');
        internalRenderTask.initializeGraphics(transparency);
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
      var renderingIntent = 'oplist';
      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      var opListTask;
      if (!intentState.opListReadCapability) {
        opListTask = {};
        opListTask.operatorListChanged = operatorListChanged;
        intentState.receivingOperatorList = true;
        intentState.opListReadCapability = (0, _util.createPromiseCapability)();
        intentState.renderTasks = [];
        intentState.renderTasks.push(opListTask);
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        this._stats.time('Page Request');
        this._transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageIndex,
          intent: renderingIntent
        });
      }
      return intentState.opListReadCapability.promise;
    }
  }, {
    key: "streamTextContent",
    value: function streamTextContent() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$normalizeWhites = _ref4.normalizeWhitespace,
        normalizeWhitespace = _ref4$normalizeWhites === void 0 ? false : _ref4$normalizeWhites,
        _ref4$disableCombineT = _ref4.disableCombineTextItems,
        disableCombineTextItems = _ref4$disableCombineT === void 0 ? false : _ref4$disableCombineT;
      var TEXT_CONTENT_CHUNK_SIZE = 100;
      return this._transport.messageHandler.sendWithStream('GetTextContent', {
        pageIndex: this.pageNumber - 1,
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
          reader.read().then(function (_ref5) {
            var _textContent$items;
            var value = _ref5.value,
              done = _ref5.done;
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
      this._transport.pageCache[this.pageIndex] = null;
      var waitOn = [];
      Object.keys(this.intentStates).forEach(function (intent) {
        if (intent === 'oplist') {
          return;
        }
        var intentState = this.intentStates[intent];
        intentState.renderTasks.forEach(function (renderTask) {
          var renderCompleted = renderTask.capability.promise["catch"](function () {});
          waitOn.push(renderCompleted);
          renderTask.cancel();
        });
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.pendingCleanup = true;
      this._tryCleanup(resetStats);
    }
  }, {
    key: "_tryCleanup",
    value: function _tryCleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
        var intentState = this.intentStates[intent];
        return intentState.renderTasks.length !== 0 || intentState.receivingOperatorList;
      }, this)) {
        return;
      }
      Object.keys(this.intentStates).forEach(function (intent) {
        delete this.intentStates[intent];
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      if (resetStats && this._stats instanceof _display_utils.StatTimer) {
        this._stats = new _display_utils.StatTimer();
      }
      this.pendingCleanup = false;
    }
  }, {
    key: "_startRenderPage",
    value: function _startRenderPage(transparency, intent) {
      var intentState = this.intentStates[intent];
      if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.resolve(transparency);
      }
    }
  }, {
    key: "_renderPageChunk",
    value: function _renderPageChunk(operatorListChunk, intent) {
      var intentState = this.intentStates[intent];
      for (var i = 0, ii = operatorListChunk.length; i < ii; i++) {
        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
        intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
      }
      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
      for (var _i = 0; _i < intentState.renderTasks.length; _i++) {
        intentState.renderTasks[_i].operatorListChanged();
      }
      if (operatorListChunk.lastChunk) {
        intentState.receivingOperatorList = false;
        this._tryCleanup();
      }
    }
  }, {
    key: "stats",
    get: function get() {
      return this._stats instanceof _display_utils.StatTimer ? this._stats : null;
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
      var _this6 = this;
      function cloneValue(value) {
        if (_typeof(value) !== 'object' || value === null) {
          return value;
        }
        if (cloned.has(value)) {
          return cloned.get(value);
        }
        var buffer, result;
        if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
          var transferable = transfers && transfers.includes(buffer);
          if (value === buffer) {
            result = value;
          } else if (transferable) {
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
          if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
            continue;
          }
          result[i] = cloneValue(desc.value);
        }
        return result;
      }
      if (!this._defer) {
        this._listeners.forEach(function (listener) {
          listener.call(this, {
            data: obj
          });
        }, this);
        return;
      }
      var cloned = new WeakMap();
      var e = {
        data: cloneValue(obj)
      };
      this._deferred.then(function () {
        _this6._listeners.forEach(function (listener) {
          listener.call(this, e);
        }, _this6);
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
  var nextFakeWorkerId = 0;
  var fakeWorkerFilesLoadedCapability;
  function _getWorkerSrc() {
    if (_worker_options.GlobalWorkerOptions.workerSrc) {
      return _worker_options.GlobalWorkerOptions.workerSrc;
    }
    if (typeof fallbackWorkerSrc !== 'undefined') {
      return fallbackWorkerSrc;
    }
    return '';
  }
  function getMainThreadWorkerMessageHandler() {
    try {
      if (typeof window !== 'undefined') {
        return window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler;
      }
    } catch (ex) {}
    return null;
  }
  function setupFakeWorkerGlobal() {
    if (fakeWorkerFilesLoadedCapability) {
      return fakeWorkerFilesLoadedCapability.promise;
    }
    fakeWorkerFilesLoadedCapability = (0, _util.createPromiseCapability)();
    var mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
    if (mainWorkerMessageHandler) {
      fakeWorkerFilesLoadedCapability.resolve(mainWorkerMessageHandler);
      return fakeWorkerFilesLoadedCapability.promise;
    }
    var loader = fakeWorkerFilesLoader || function () {
      return (0, _display_utils.loadScript)(_getWorkerSrc()).then(function () {
        return window.pdfjsWorker.WorkerMessageHandler;
      });
    };
    loader().then(fakeWorkerFilesLoadedCapability.resolve, fakeWorkerFilesLoadedCapability.reject);
    return fakeWorkerFilesLoadedCapability.promise;
  }
  function createCDNWrapper(url) {
    var wrapper = 'importScripts(\'' + url + '\');';
    return _util.URL.createObjectURL(new Blob([wrapper]));
  }
  var PDFWorker = /*#__PURE__*/function () {
    function PDFWorker() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$name = _ref6.name,
        name = _ref6$name === void 0 ? null : _ref6$name,
        _ref6$port = _ref6.port,
        port = _ref6$port === void 0 ? null : _ref6$port,
        _ref6$postMessageTran = _ref6.postMessageTransfers,
        postMessageTransfers = _ref6$postMessageTran === void 0 ? true : _ref6$postMessageTran,
        _ref6$verbosity = _ref6.verbosity,
        verbosity = _ref6$verbosity === void 0 ? (0, _util.getVerbosityLevel)() : _ref6$verbosity;
      _classCallCheck(this, PDFWorker);
      if (port && pdfWorkerPorts.has(port)) {
        throw new Error('Cannot use more than one PDFWorker per port');
      }
      this.name = name;
      this.destroyed = false;
      this.postMessageTransfers = postMessageTransfers !== false;
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
        this._messageHandler = new _message_handler.MessageHandler('main', 'worker', port);
        this._messageHandler.on('ready', function () {});
        this._readyCapability.resolve();
      }
    }, {
      key: "_initialize",
      value: function _initialize() {
        var _this7 = this;
        if (typeof Worker !== 'undefined' && !_worker_options.GlobalWorkerOptions.isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
          var workerSrc = _getWorkerSrc();
          try {
            if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
              workerSrc = createCDNWrapper(new _util.URL(workerSrc, window.location).href);
            }
            var worker = new Worker(workerSrc);
            var messageHandler = new _message_handler.MessageHandler('main', 'worker', worker);
            var terminateEarly = function terminateEarly() {
              worker.removeEventListener('error', onWorkerError);
              messageHandler.destroy();
              worker.terminate();
              if (_this7.destroyed) {
                _this7._readyCapability.reject(new Error('Worker was destroyed'));
              } else {
                _this7._setupFakeWorker();
              }
            };
            var onWorkerError = function onWorkerError() {
              if (!_this7._webWorker) {
                terminateEarly();
              }
            };
            worker.addEventListener('error', onWorkerError);
            messageHandler.on('test', function (data) {
              worker.removeEventListener('error', onWorkerError);
              if (_this7.destroyed) {
                terminateEarly();
                return;
              }
              if (data && data.supportTypedArray) {
                _this7._messageHandler = messageHandler;
                _this7._port = worker;
                _this7._webWorker = worker;
                if (!data.supportTransfers) {
                  _this7.postMessageTransfers = false;
                }
                _this7._readyCapability.resolve();
                messageHandler.send('configure', {
                  verbosity: _this7.verbosity
                });
              } else {
                _this7._setupFakeWorker();
                messageHandler.destroy();
                worker.terminate();
              }
            });
            messageHandler.on('ready', function (data) {
              worker.removeEventListener('error', onWorkerError);
              if (_this7.destroyed) {
                terminateEarly();
                return;
              }
              try {
                sendTest();
              } catch (e) {
                _this7._setupFakeWorker();
              }
            });
            var sendTest = function sendTest() {
              var testObj = new Uint8Array([_this7.postMessageTransfers ? 255 : 0]);
              try {
                messageHandler.send('test', testObj, [testObj.buffer]);
              } catch (ex) {
                (0, _util.info)('Cannot use postMessage transfers');
                testObj[0] = 0;
                messageHandler.send('test', testObj);
              }
            };
            sendTest();
            return;
          } catch (e) {
            (0, _util.info)('The worker has been disabled.');
          }
        }
        this._setupFakeWorker();
      }
    }, {
      key: "_setupFakeWorker",
      value: function _setupFakeWorker() {
        var _this8 = this;
        if (!_worker_options.GlobalWorkerOptions.isWorkerDisabled) {
          (0, _util.warn)('Setting up fake worker.');
          _worker_options.GlobalWorkerOptions.isWorkerDisabled = true;
        }
        setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
          if (_this8.destroyed) {
            _this8._readyCapability.reject(new Error('Worker was destroyed'));
            return;
          }
          var port = new LoopbackPort();
          _this8._port = port;
          var id = 'fake' + nextFakeWorkerId++;
          var workerHandler = new _message_handler.MessageHandler(id + '_worker', id, port);
          WorkerMessageHandler.setup(workerHandler, port);
          var messageHandler = new _message_handler.MessageHandler(id, id + '_worker', port);
          _this8._messageHandler = messageHandler;
          _this8._readyCapability.resolve();
        })["catch"](function (reason) {
          _this8._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(reason.message, "\".")));
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
          throw new Error('PDFWorker.fromPort - invalid method signature.');
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
      onUnsupportedFeature: this._onUnsupportedFeature.bind(this)
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
    key: "destroy",
    value: function destroy() {
      var _this9 = this;
      if (this.destroyCapability) {
        return this.destroyCapability.promise;
      }
      this.destroyed = true;
      this.destroyCapability = (0, _util.createPromiseCapability)();
      if (this._passwordCapability) {
        this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
      }
      var waitOn = [];
      this.pageCache.forEach(function (page) {
        if (page) {
          waitOn.push(page._destroy());
        }
      });
      this.pageCache.length = 0;
      this.pagePromises.length = 0;
      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
      waitOn.push(terminated);
      Promise.all(waitOn).then(function () {
        _this9.fontLoader.clear();
        if (_this9._networkStream) {
          _this9._networkStream.cancelAllRequests();
        }
        if (_this9.messageHandler) {
          _this9.messageHandler.destroy();
          _this9.messageHandler = null;
        }
        _this9.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    }
  }, {
    key: "setupMessageHandler",
    value: function setupMessageHandler() {
      var messageHandler = this.messageHandler,
        loadingTask = this.loadingTask;
      messageHandler.on('GetReader', function (data, sink) {
        var _this10 = this;
        (0, _util.assert)(this._networkStream);
        this._fullReader = this._networkStream.getFullReader();
        this._fullReader.onProgress = function (evt) {
          _this10._lastProgress = {
            loaded: evt.loaded,
            total: evt.total
          };
        };
        sink.onPull = function () {
          _this10._fullReader.read().then(function (_ref7) {
            var value = _ref7.value,
              done = _ref7.done;
            if (done) {
              sink.close();
              return;
            }
            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };
        sink.onCancel = function (reason) {
          _this10._fullReader.cancel(reason);
        };
      }, this);
      messageHandler.on('ReaderHeadersReady', function (data) {
        var _this11 = this;
        var headersCapability = (0, _util.createPromiseCapability)();
        var fullReader = this._fullReader;
        fullReader.headersReady.then(function () {
          if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
            if (_this11._lastProgress && loadingTask.onProgress) {
              loadingTask.onProgress(_this11._lastProgress);
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
      }, this);
      messageHandler.on('GetRangeReader', function (data, sink) {
        (0, _util.assert)(this._networkStream);
        var rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
        if (!rangeReader) {
          sink.close();
          return;
        }
        sink.onPull = function () {
          rangeReader.read().then(function (_ref8) {
            var value = _ref8.value,
              done = _ref8.done;
            if (done) {
              sink.close();
              return;
            }
            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };
        sink.onCancel = function (reason) {
          rangeReader.cancel(reason);
        };
      }, this);
      messageHandler.on('GetDoc', function (_ref9) {
        var pdfInfo = _ref9.pdfInfo;
        this._numPages = pdfInfo.numPages;
        loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
      }, this);
      messageHandler.on('PasswordRequest', function (exception) {
        var _this12 = this;
        this._passwordCapability = (0, _util.createPromiseCapability)();
        if (loadingTask.onPassword) {
          var updatePassword = function updatePassword(password) {
            _this12._passwordCapability.resolve({
              password: password
            });
          };
          try {
            loadingTask.onPassword(updatePassword, exception.code);
          } catch (ex) {
            this._passwordCapability.reject(ex);
          }
        } else {
          this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
        }
        return this._passwordCapability.promise;
      }, this);
      messageHandler.on('PasswordException', function (exception) {
        loadingTask._capability.reject(new _util.PasswordException(exception.message, exception.code));
      }, this);
      messageHandler.on('InvalidPDF', function (exception) {
        loadingTask._capability.reject(new _util.InvalidPDFException(exception.message));
      }, this);
      messageHandler.on('MissingPDF', function (exception) {
        loadingTask._capability.reject(new _util.MissingPDFException(exception.message));
      }, this);
      messageHandler.on('UnexpectedResponse', function (exception) {
        loadingTask._capability.reject(new _util.UnexpectedResponseException(exception.message, exception.status));
      }, this);
      messageHandler.on('UnknownError', function (exception) {
        loadingTask._capability.reject(new _util.UnknownErrorException(exception.message, exception.details));
      }, this);
      messageHandler.on('DataLoaded', function (data) {
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.length,
            total: data.length
          });
        }
        this.downloadInfoCapability.resolve(data);
      }, this);
      messageHandler.on('StartRenderPage', function (data) {
        if (this.destroyed) {
          return;
        }
        var page = this.pageCache[data.pageIndex];
        page._stats.timeEnd('Page Request');
        page._startRenderPage(data.transparency, data.intent);
      }, this);
      messageHandler.on('RenderPageChunk', function (data) {
        if (this.destroyed) {
          return;
        }
        var page = this.pageCache[data.pageIndex];
        page._renderPageChunk(data.operatorList, data.intent);
      }, this);
      messageHandler.on('commonobj', function (data) {
        var _this13 = this;
        if (this.destroyed) {
          return;
        }
        var _data = _slicedToArray(data, 3),
          id = _data[0],
          type = _data[1],
          exportedData = _data[2];
        if (this.commonObjs.has(id)) {
          return;
        }
        switch (type) {
          case 'Font':
            var params = this._params;
            if ('error' in exportedData) {
              var exportedError = exportedData.error;
              (0, _util.warn)("Error during font loading: ".concat(exportedError));
              this.commonObjs.resolve(id, exportedError);
              break;
            }
            var fontRegistry = null;
            if (params.pdfBug && _global_scope["default"].FontInspector && _global_scope["default"].FontInspector.enabled) {
              fontRegistry = {
                registerFont: function registerFont(font, url) {
                  _global_scope["default"]['FontInspector'].fontAdded(font, url);
                }
              };
            }
            var font = new _font_loader.FontFaceObject(exportedData, {
              isEvalSupported: params.isEvalSupported,
              disableFontFace: params.disableFontFace,
              ignoreErrors: params.ignoreErrors,
              onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              fontRegistry: fontRegistry
            });
            this.fontLoader.bind(font).then(function () {
              _this13.commonObjs.resolve(id, font);
            }, function (reason) {
              messageHandler.sendWithPromise('FontFallback', {
                id: id
              })["finally"](function () {
                _this13.commonObjs.resolve(id, font);
              });
            });
            break;
          case 'FontPath':
          case 'FontType3Res':
            this.commonObjs.resolve(id, exportedData);
            break;
          default:
            throw new Error("Got unknown common object type ".concat(type));
        }
      }, this);
      messageHandler.on('obj', function (data) {
        if (this.destroyed) {
          return undefined;
        }
        var _data2 = _slicedToArray(data, 4),
          id = _data2[0],
          pageIndex = _data2[1],
          type = _data2[2],
          imageData = _data2[3];
        var pageProxy = this.pageCache[pageIndex];
        if (pageProxy.objs.has(id)) {
          return undefined;
        }
        switch (type) {
          case 'JpegStream':
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.onload = function () {
                resolve(img);
              };
              img.onerror = function () {
                reject(new Error('Error during JPEG image loading'));
                (0, _display_utils.releaseImageResources)(img);
              };
              img.src = imageData;
            }).then(function (img) {
              pageProxy.objs.resolve(id, img);
            });
          case 'Image':
            pageProxy.objs.resolve(id, imageData);
            var MAX_IMAGE_SIZE_TO_STORE = 8000000;
            if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
              pageProxy.cleanupAfterRender = true;
            }
            break;
          default:
            throw new Error("Got unknown object type ".concat(type));
        }
        return undefined;
      }, this);
      messageHandler.on('DocProgress', function (data) {
        if (this.destroyed) {
          return;
        }
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.loaded,
            total: data.total
          });
        }
      }, this);
      messageHandler.on('PageError', function (data) {
        if (this.destroyed) {
          return;
        }
        var page = this.pageCache[data.pageIndex];
        var intentState = page.intentStates[data.intent];
        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(new Error(data.error));
        } else {
          throw new Error(data.error);
        }
        if (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;
          for (var i = 0; i < intentState.renderTasks.length; i++) {
            intentState.renderTasks[i].operatorListChanged();
          }
        }
      }, this);
      messageHandler.on('UnsupportedFeature', this._onUnsupportedFeature, this);
      messageHandler.on('JpegDecode', function (data) {
        if (this.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }
        if (typeof document === 'undefined') {
          return Promise.reject(new Error('"document" is not defined.'));
        }
        var _data3 = _slicedToArray(data, 2),
          imageUrl = _data3[0],
          components = _data3[1];
        if (components !== 3 && components !== 1) {
          return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
        }
        return new Promise(function (resolve, reject) {
          var img = new Image();
          img.onload = function () {
            var width = img.width,
              height = img.height;
            var size = width * height;
            var rgbaLength = size * 4;
            var buf = new Uint8ClampedArray(size * components);
            var tmpCanvas = document.createElement('canvas');
            tmpCanvas.width = width;
            tmpCanvas.height = height;
            var tmpCtx = tmpCanvas.getContext('2d');
            tmpCtx.drawImage(img, 0, 0);
            var data = tmpCtx.getImageData(0, 0, width, height).data;
            if (components === 3) {
              for (var i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                buf[j] = data[i];
                buf[j + 1] = data[i + 1];
                buf[j + 2] = data[i + 2];
              }
            } else if (components === 1) {
              for (var _i2 = 0, _j = 0; _i2 < rgbaLength; _i2 += 4, _j++) {
                buf[_j] = data[_i2];
              }
            }
            resolve({
              data: buf,
              width: width,
              height: height
            });
            (0, _display_utils.releaseImageResources)(img);
            tmpCanvas.width = 0;
            tmpCanvas.height = 0;
            tmpCanvas = null;
            tmpCtx = null;
          };
          img.onerror = function () {
            reject(new Error('JpegDecode failed to load image'));
            (0, _display_utils.releaseImageResources)(img);
          };
          img.src = imageUrl;
        });
      }, this);
      messageHandler.on('FetchBuiltInCMap', function (data) {
        if (this.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }
        return this.CMapReaderFactory.fetch({
          name: data.name
        });
      }, this);
    }
  }, {
    key: "_onUnsupportedFeature",
    value: function _onUnsupportedFeature(_ref10) {
      var featureId = _ref10.featureId;
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
      return this.messageHandler.sendWithPromise('GetData', null);
    }
  }, {
    key: "getPage",
    value: function getPage(pageNumber) {
      var _this14 = this;
      if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
        return Promise.reject(new Error('Invalid page request'));
      }
      var pageIndex = pageNumber - 1;
      if (pageIndex in this.pagePromises) {
        return this.pagePromises[pageIndex];
      }
      var promise = this.messageHandler.sendWithPromise('GetPage', {
        pageIndex: pageIndex
      }).then(function (pageInfo) {
        if (_this14.destroyed) {
          throw new Error('Transport destroyed');
        }
        var page = new PDFPageProxy(pageIndex, pageInfo, _this14, _this14._params.pdfBug);
        _this14.pageCache[pageIndex] = page;
        return page;
      });
      this.pagePromises[pageIndex] = promise;
      return promise;
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex(ref) {
      return this.messageHandler.sendWithPromise('GetPageIndex', {
        ref: ref
      })["catch"](function (reason) {
        return Promise.reject(new Error(reason));
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations(pageIndex, intent) {
      return this.messageHandler.sendWithPromise('GetAnnotations', {
        pageIndex: pageIndex,
        intent: intent
      });
    }
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
    }
  }, {
    key: "getDestination",
    value: function getDestination(id) {
      if (typeof id !== 'string') {
        return Promise.reject(new Error('Invalid destination request.'));
      }
      return this.messageHandler.sendWithPromise('GetDestination', {
        id: id
      });
    }
  }, {
    key: "getPageLabels",
    value: function getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
    }
  }, {
    key: "getPageLayout",
    value: function getPageLayout() {
      return this.messageHandler.sendWithPromise('GetPageLayout', null);
    }
  }, {
    key: "getPageMode",
    value: function getPageMode() {
      return this.messageHandler.sendWithPromise('GetPageMode', null);
    }
  }, {
    key: "getViewerPreferences",
    value: function getViewerPreferences() {
      return this.messageHandler.sendWithPromise('GetViewerPreferences', null);
    }
  }, {
    key: "getOpenActionDestination",
    value: function getOpenActionDestination() {
      return this.messageHandler.sendWithPromise('GetOpenActionDestination', null);
    }
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
    }
  }, {
    key: "getJavaScript",
    value: function getJavaScript() {
      return this.messageHandler.sendWithPromise('GetJavaScript', null);
    }
  }, {
    key: "getOutline",
    value: function getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
    }
  }, {
    key: "getPermissions",
    value: function getPermissions() {
      return this.messageHandler.sendWithPromise('GetPermissions', null);
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      var _this15 = this;
      return this.messageHandler.sendWithPromise('GetMetadata', null).then(function (results) {
        return {
          info: results[0],
          metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
          contentDispositionFilename: _this15._fullReader ? _this15._fullReader.filename : null
        };
      });
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this.messageHandler.sendWithPromise('GetStats', null);
    }
  }, {
    key: "startCleanup",
    value: function startCleanup() {
      var _this16 = this;
      this.messageHandler.sendWithPromise('Cleanup', null).then(function () {
        for (var i = 0, ii = _this16.pageCache.length; i < ii; i++) {
          var page = _this16.pageCache[i];
          if (page) {
            page.cleanup();
          }
        }
        _this16.commonObjs.clear();
        _this16.fontLoader.clear();
      });
    }
  }, {
    key: "loadingParams",
    get: function get() {
      var params = this._params;
      return (0, _util.shadow)(this, 'loadingParams', {
        disableAutoFetch: params.disableAutoFetch,
        disableCreateObjectURL: params.disableCreateObjectURL,
        disableFontFace: params.disableFontFace,
        nativeImageDecoderSupport: params.nativeImageDecoderSupport
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
      return obj ? obj.resolved : false;
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
      for (var objId in this._objs) {
        var data = this._objs[objId].data;
        if (typeof Image !== 'undefined' && data instanceof Image) {
          (0, _display_utils.releaseImageResources)(data);
        }
      }
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
  }, {
    key: "then",
    value: function then(onFulfilled, onRejected) {
      (0, _display_utils.deprecated)('RenderTask.then method, use the `promise` getter instead.');
      return this.promise.then.apply(this.promise, arguments);
    }
  }]);
}();
var InternalRenderTask = function InternalRenderTaskClosure() {
  var canvasInRendering = new WeakSet();
  var InternalRenderTask = /*#__PURE__*/function () {
    function InternalRenderTask(_ref11) {
      var callback = _ref11.callback,
        params = _ref11.params,
        objs = _ref11.objs,
        commonObjs = _ref11.commonObjs,
        operatorList = _ref11.operatorList,
        pageNumber = _ref11.pageNumber,
        canvasFactory = _ref11.canvasFactory,
        webGLContext = _ref11.webGLContext,
        _ref11$useRequestAnim = _ref11.useRequestAnimationFrame,
        useRequestAnimationFrame = _ref11$useRequestAnim === void 0 ? false : _ref11$useRequestAnim,
        _ref11$pdfBug = _ref11.pdfBug,
        pdfBug = _ref11$pdfBug === void 0 ? false : _ref11$pdfBug;
      _classCallCheck(this, InternalRenderTask);
      this.callback = callback;
      this.params = params;
      this.objs = objs;
      this.commonObjs = commonObjs;
      this.operatorListIdx = null;
      this.operatorList = operatorList;
      this.pageNumber = pageNumber;
      this.canvasFactory = canvasFactory;
      this.webGLContext = webGLContext;
      this._pdfBug = pdfBug;
      this.running = false;
      this.graphicsReadyCallback = null;
      this.graphicsReady = false;
      this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== 'undefined';
      this.cancelled = false;
      this.capability = (0, _util.createPromiseCapability)();
      this.task = new RenderTask(this);
      this._continueBound = this._continue.bind(this);
      this._scheduleNextBound = this._scheduleNext.bind(this);
      this._nextBound = this._next.bind(this);
      this._canvas = params.canvasContext.canvas;
    }
    return _createClass(InternalRenderTask, [{
      key: "initializeGraphics",
      value: function initializeGraphics() {
        var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (this.cancelled) {
          return;
        }
        if (this._canvas) {
          if (canvasInRendering.has(this._canvas)) {
            throw new Error('Cannot use the same canvas during multiple render() operations. ' + 'Use different canvas or ensure previous operations were ' + 'cancelled or completed.');
          }
          canvasInRendering.add(this._canvas);
        }
        if (this._pdfBug && _global_scope["default"].StepperManager && _global_scope["default"].StepperManager.enabled) {
          this.stepper = _global_scope["default"].StepperManager.create(this.pageNumber - 1);
          this.stepper.init(this.operatorList);
          this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
        }
        var _this$params = this.params,
          canvasContext = _this$params.canvasContext,
          viewport = _this$params.viewport,
          transform = _this$params.transform,
          imageLayer = _this$params.imageLayer,
          background = _this$params.background;
        this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer);
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
        this.callback(error || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this.pageNumber), 'canvas'));
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
        var _this17 = this;
        if (this._useRequestAnimationFrame) {
          window.requestAnimationFrame(function () {
            _this17._nextBound()["catch"](_this17.cancel.bind(_this17));
          });
        } else {
          Promise.resolve().then(this._nextBound)["catch"](this.cancel.bind(this));
        }
      }
    }, {
      key: "_next",
      value: function () {
        var _next2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!this.cancelled) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
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
                return _context.stop();
            }
          }, _callee, this);
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
var version = exports.version = '2.2.255';
var build = exports.build = 'e4627c0c5';