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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerTask = exports.WorkerMessageHandler = void 0;
var _util = require("../shared/util");
var _primitives = require("./primitives");
var _pdf_manager = require("./pdf_manager");
var _is_node = _interopRequireDefault(require("../shared/is_node"));
var _message_handler = require("../shared/message_handler");
var _worker_stream = require("./worker_stream");
var _core_utils = require("./core_utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var WorkerTask = exports.WorkerTask = function WorkerTaskClosure() {
  function WorkerTask(name) {
    this.name = name;
    this.terminated = false;
    this._capability = (0, _util.createPromiseCapability)();
  }
  WorkerTask.prototype = {
    get finished() {
      return this._capability.promise;
    },
    finish: function finish() {
      this._capability.resolve();
    },
    terminate: function terminate() {
      this.terminated = true;
    },
    ensureNotTerminated: function ensureNotTerminated() {
      if (this.terminated) {
        throw new Error('Worker task was terminated');
      }
    }
  };
  return WorkerTask;
}();
var WorkerMessageHandler = exports.WorkerMessageHandler = {
  setup: function setup(handler, port) {
    var testMessageProcessed = false;
    handler.on('test', function wphSetupTest(data) {
      if (testMessageProcessed) {
        return;
      }
      testMessageProcessed = true;
      if (!(data instanceof Uint8Array)) {
        handler.send('test', null);
        return;
      }
      var supportTransfers = data[0] === 255;
      handler.postMessageTransfers = supportTransfers;
      handler.send('test', {
        supportTransfers: supportTransfers
      });
    });
    handler.on('configure', function wphConfigure(data) {
      (0, _util.setVerbosityLevel)(data.verbosity);
    });
    handler.on('GetDocRequest', function wphSetupDoc(data) {
      return WorkerMessageHandler.createDocumentHandler(data, port);
    });
  },
  createDocumentHandler: function createDocumentHandler(docParams, port) {
    var pdfManager;
    var terminated = false;
    var cancelXHRs = null;
    var WorkerTasks = [];
    var verbosity = (0, _util.getVerbosityLevel)();
    var apiVersion = docParams.apiVersion;
    var workerVersion = '2.3.229';
    if (apiVersion !== workerVersion) {
      throw new Error("The API version \"".concat(apiVersion, "\" does not match ") + "the Worker version \"".concat(workerVersion, "\"."));
    }
    var docId = docParams.docId;
    var docBaseUrl = docParams.docBaseUrl;
    var workerHandlerName = docParams.docId + '_worker';
    var handler = new _message_handler.MessageHandler(workerHandlerName, docId, port);
    handler.postMessageTransfers = docParams.postMessageTransfers;
    function ensureNotTerminated() {
      if (terminated) {
        throw new Error('Worker was terminated');
      }
    }
    function startWorkerTask(task) {
      WorkerTasks.push(task);
    }
    function finishWorkerTask(task) {
      task.finish();
      var i = WorkerTasks.indexOf(task);
      WorkerTasks.splice(i, 1);
    }
    function loadDocument(_x) {
      return _loadDocument.apply(this, arguments);
    }
    function _loadDocument() {
      _loadDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(recoveryMode) {
        var _yield$Promise$all, _yield$Promise$all2, numPages, fingerprint;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pdfManager.ensureDoc('checkHeader');
            case 2:
              _context.next = 4;
              return pdfManager.ensureDoc('parseStartXRef');
            case 4:
              _context.next = 6;
              return pdfManager.ensureDoc('parse', [recoveryMode]);
            case 6:
              if (recoveryMode) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return pdfManager.ensureDoc('checkFirstPage');
            case 9:
              _context.next = 11;
              return Promise.all([pdfManager.ensureDoc('numPages'), pdfManager.ensureDoc('fingerprint')]);
            case 11:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              numPages = _yield$Promise$all2[0];
              fingerprint = _yield$Promise$all2[1];
              return _context.abrupt("return", {
                numPages: numPages,
                fingerprint: fingerprint
              });
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _loadDocument.apply(this, arguments);
    }
    function getPdfManager(data, evaluatorOptions) {
      var pdfManagerCapability = (0, _util.createPromiseCapability)();
      var pdfManager;
      var source = data.source;
      if (source.data) {
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, source.data, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        return pdfManagerCapability.promise;
      }
      var pdfStream,
        cachedChunks = [];
      try {
        pdfStream = new _worker_stream.PDFWorkerStream(handler);
      } catch (ex) {
        pdfManagerCapability.reject(ex);
        return pdfManagerCapability.promise;
      }
      var fullRequest = pdfStream.getFullReader();
      fullRequest.headersReady.then(function () {
        if (!fullRequest.isRangeSupported) {
          return;
        }
        var disableAutoFetch = source.disableAutoFetch || fullRequest.isStreamingSupported;
        pdfManager = new _pdf_manager.NetworkPdfManager(docId, pdfStream, {
          msgHandler: handler,
          password: source.password,
          length: fullRequest.contentLength,
          disableAutoFetch: disableAutoFetch,
          rangeChunkSize: source.rangeChunkSize
        }, evaluatorOptions, docBaseUrl);
        for (var i = 0; i < cachedChunks.length; i++) {
          pdfManager.sendProgressiveData(cachedChunks[i]);
        }
        cachedChunks = [];
        pdfManagerCapability.resolve(pdfManager);
        cancelXHRs = null;
      })["catch"](function (reason) {
        pdfManagerCapability.reject(reason);
        cancelXHRs = null;
      });
      var loaded = 0;
      var flushChunks = function flushChunks() {
        var pdfFile = (0, _util.arraysToBytes)(cachedChunks);
        if (source.length && pdfFile.length !== source.length) {
          (0, _util.warn)('reported HTTP length is different from actual');
        }
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, pdfFile, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        cachedChunks = [];
      };
      var readPromise = new Promise(function (resolve, reject) {
        var _readChunk = function readChunk(chunk) {
          try {
            ensureNotTerminated();
            if (chunk.done) {
              if (!pdfManager) {
                flushChunks();
              }
              cancelXHRs = null;
              return;
            }
            var data = chunk.value;
            loaded += (0, _util.arrayByteLength)(data);
            if (!fullRequest.isStreamingSupported) {
              handler.send('DocProgress', {
                loaded: loaded,
                total: Math.max(loaded, fullRequest.contentLength || 0)
              });
            }
            if (pdfManager) {
              pdfManager.sendProgressiveData(data);
            } else {
              cachedChunks.push(data);
            }
            fullRequest.read().then(_readChunk, reject);
          } catch (e) {
            reject(e);
          }
        };
        fullRequest.read().then(_readChunk, reject);
      });
      readPromise["catch"](function (e) {
        pdfManagerCapability.reject(e);
        cancelXHRs = null;
      });
      cancelXHRs = function cancelXHRs(reason) {
        pdfStream.cancelAllRequests(reason);
      };
      return pdfManagerCapability.promise;
    }
    function setupDoc(data) {
      function onSuccess(doc) {
        ensureNotTerminated();
        handler.send('GetDoc', {
          pdfInfo: doc
        });
      }
      function onFailure(e) {
        ensureNotTerminated();
        if (e instanceof _util.PasswordException) {
          var task = new WorkerTask('PasswordException: response ' + e.code);
          startWorkerTask(task);
          handler.sendWithPromise('PasswordRequest', e).then(function (data) {
            finishWorkerTask(task);
            pdfManager.updatePassword(data.password);
            pdfManagerReady();
          })["catch"](function (boundException) {
            finishWorkerTask(task);
            handler.send('PasswordException', boundException);
          }.bind(null, e));
        } else if (e instanceof _util.InvalidPDFException) {
          handler.send('InvalidPDF', e);
        } else if (e instanceof _util.MissingPDFException) {
          handler.send('MissingPDF', e);
        } else if (e instanceof _util.UnexpectedResponseException) {
          handler.send('UnexpectedResponse', e);
        } else {
          handler.send('UnknownError', new _util.UnknownErrorException(e.message, e.toString()));
        }
      }
      function pdfManagerReady() {
        ensureNotTerminated();
        loadDocument(false).then(onSuccess, function loadFailure(ex) {
          ensureNotTerminated();
          if (!(ex instanceof _core_utils.XRefParseException)) {
            onFailure(ex);
            return;
          }
          pdfManager.requestLoadedStream();
          pdfManager.onLoadedStream().then(function () {
            ensureNotTerminated();
            loadDocument(true).then(onSuccess, onFailure);
          });
        }, onFailure);
      }
      ensureNotTerminated();
      var evaluatorOptions = {
        forceDataSchema: data.disableCreateObjectURL,
        maxImageSize: data.maxImageSize,
        disableFontFace: data.disableFontFace,
        nativeImageDecoderSupport: data.nativeImageDecoderSupport,
        ignoreErrors: data.ignoreErrors,
        isEvalSupported: data.isEvalSupported
      };
      getPdfManager(data, evaluatorOptions).then(function (newPdfManager) {
        if (terminated) {
          newPdfManager.terminate(new _util.AbortException('Worker was terminated.'));
          throw new Error('Worker was terminated');
        }
        pdfManager = newPdfManager;
        pdfManager.onLoadedStream().then(function (stream) {
          handler.send('DataLoaded', {
            length: stream.bytes.byteLength
          });
        });
      }).then(pdfManagerReady, onFailure);
    }
    handler.on('GetPage', function wphSetupGetPage(data) {
      return pdfManager.getPage(data.pageIndex).then(function (page) {
        return Promise.all([pdfManager.ensure(page, 'rotate'), pdfManager.ensure(page, 'ref'), pdfManager.ensure(page, 'userUnit'), pdfManager.ensure(page, 'view')]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 4),
            rotate = _ref2[0],
            ref = _ref2[1],
            userUnit = _ref2[2],
            view = _ref2[3];
          return {
            rotate: rotate,
            ref: ref,
            userUnit: userUnit,
            view: view
          };
        });
      });
    });
    handler.on('GetPageIndex', function wphSetupGetPageIndex(data) {
      var ref = _primitives.Ref.get(data.ref.num, data.ref.gen);
      var catalog = pdfManager.pdfDocument.catalog;
      return catalog.getPageIndex(ref);
    });
    handler.on('GetDestinations', function wphSetupGetDestinations(data) {
      return pdfManager.ensureCatalog('destinations');
    });
    handler.on('GetDestination', function wphSetupGetDestination(data) {
      return pdfManager.ensureCatalog('getDestination', [data.id]);
    });
    handler.on('GetPageLabels', function wphSetupGetPageLabels(data) {
      return pdfManager.ensureCatalog('pageLabels');
    });
    handler.on('GetPageLayout', function wphSetupGetPageLayout(data) {
      return pdfManager.ensureCatalog('pageLayout');
    });
    handler.on('GetPageMode', function wphSetupGetPageMode(data) {
      return pdfManager.ensureCatalog('pageMode');
    });
    handler.on('GetViewerPreferences', function (data) {
      return pdfManager.ensureCatalog('viewerPreferences');
    });
    handler.on('GetOpenActionDestination', function (data) {
      return pdfManager.ensureCatalog('openActionDestination');
    });
    handler.on('GetAttachments', function wphSetupGetAttachments(data) {
      return pdfManager.ensureCatalog('attachments');
    });
    handler.on('GetJavaScript', function wphSetupGetJavaScript(data) {
      return pdfManager.ensureCatalog('javaScript');
    });
    handler.on('GetOutline', function wphSetupGetOutline(data) {
      return pdfManager.ensureCatalog('documentOutline');
    });
    handler.on('GetPermissions', function (data) {
      return pdfManager.ensureCatalog('permissions');
    });
    handler.on('GetMetadata', function wphSetupGetMetadata(data) {
      return Promise.all([pdfManager.ensureDoc('documentInfo'), pdfManager.ensureCatalog('metadata')]);
    });
    handler.on('GetData', function wphSetupGetData(data) {
      pdfManager.requestLoadedStream();
      return pdfManager.onLoadedStream().then(function (stream) {
        return stream.bytes;
      });
    });
    handler.on('GetStats', function wphSetupGetStats(data) {
      return pdfManager.pdfDocument.xref.stats;
    });
    handler.on('GetAnnotations', function (_ref3) {
      var pageIndex = _ref3.pageIndex,
        intent = _ref3.intent;
      return pdfManager.getPage(pageIndex).then(function (page) {
        return page.getAnnotationsData(intent);
      });
    });
    handler.on('GetOperatorList', function wphSetupRenderPage(data, sink) {
      var pageIndex = data.pageIndex;
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask("GetOperatorList: page ".concat(pageIndex));
        startWorkerTask(task);
        var start = verbosity >= _util.VerbosityLevel.INFOS ? Date.now() : 0;
        page.getOperatorList({
          handler: handler,
          sink: sink,
          task: task,
          intent: data.intent,
          renderInteractiveForms: data.renderInteractiveForms,
          forceRenderSigAnnot: data.forceRenderSigAnnot
        }).then(function (operatorListInfo) {
          finishWorkerTask(task);
          if (start) {
            (0, _util.info)("page=".concat(pageIndex + 1, " - getOperatorList: time=") + "".concat(Date.now() - start, "ms, len=").concat(operatorListInfo.length));
          }
          sink.close();
        }, function (reason) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          handler.send('UnsupportedFeature', {
            featureId: _util.UNSUPPORTED_FEATURES.unknown
          });
          sink.error(reason);
        });
      });
    }, this);
    handler.on('GetTextContent', function wphExtractText(data, sink) {
      var pageIndex = data.pageIndex;
      sink.onPull = function (desiredSize) {};
      sink.onCancel = function (reason) {};
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask('GetTextContent: page ' + pageIndex);
        startWorkerTask(task);
        var start = verbosity >= _util.VerbosityLevel.INFOS ? Date.now() : 0;
        page.extractTextContent({
          handler: handler,
          task: task,
          sink: sink,
          normalizeWhitespace: data.normalizeWhitespace,
          combineTextItems: data.combineTextItems
        }).then(function () {
          finishWorkerTask(task);
          if (start) {
            (0, _util.info)("page=".concat(pageIndex + 1, " - getTextContent: time=") + "".concat(Date.now() - start, "ms"));
          }
          sink.close();
        }, function (reason) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          sink.error(reason);
        });
      });
    });
    handler.on('FontFallback', function (data) {
      return pdfManager.fontFallback(data.id, handler);
    });
    handler.on('Cleanup', function wphCleanup(data) {
      return pdfManager.cleanup();
    });
    handler.on('Terminate', function wphTerminate(data) {
      terminated = true;
      if (pdfManager) {
        pdfManager.terminate(new _util.AbortException('Worker was terminated.'));
        pdfManager = null;
      }
      if (cancelXHRs) {
        cancelXHRs(new _util.AbortException('Worker was terminated.'));
      }
      (0, _primitives.clearPrimitiveCaches)();
      var waitOn = [];
      WorkerTasks.forEach(function (task) {
        waitOn.push(task.finished);
        task.terminate();
      });
      return Promise.all(waitOn).then(function () {
        handler.destroy();
        handler = null;
      });
    });
    handler.on('Ready', function wphReady(data) {
      setupDoc(docParams);
      docParams = null;
    });
    return workerHandlerName;
  },
  initializeFromPort: function initializeFromPort(port) {
    var handler = new _message_handler.MessageHandler('worker', 'main', port);
    WorkerMessageHandler.setup(handler, port);
    handler.send('ready', null);
  }
};
function isMessagePort(maybePort) {
  return typeof maybePort.postMessage === 'function' && 'onmessage' in maybePort;
}
if (typeof window === 'undefined' && !(0, _is_node["default"])() && typeof self !== 'undefined' && isMessagePort(self)) {
  WorkerMessageHandler.initializeFromPort(self);
}