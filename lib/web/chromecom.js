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
exports.ChromeCom = void 0;
var _app = require("./app");
var _app_options = require("./app_options");
var _preferences = require("./preferences");
var _download_manager = require("./download_manager");
var _genericl10n = require("./genericl10n");
var _pdf = require("../pdf");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
{
  throw new Error('Module "pdfjs-web/chromecom" shall not be used outside ' + 'CHROME build.');
}
var ChromeCom = exports.ChromeCom = {
  request: function request(action, data, callback) {
    var message = {
      action: action,
      data: data
    };
    if (!chrome.runtime) {
      console.error('chrome.runtime is undefined.');
      if (callback) {
        callback();
      }
    } else if (callback) {
      chrome.runtime.sendMessage(message, callback);
    } else {
      chrome.runtime.sendMessage(message);
    }
  },
  resolvePDFFile: function resolvePDFFile(file, overlayManager, callback) {
    file = file.replace(/^drive:/i, 'filesystem:' + location.origin + '/external/');
    if (/^https?:/.test(file)) {
      setReferer(file, function () {
        callback(file);
      });
      return;
    }
    if (/^file?:/.test(file)) {
      getEmbedderOrigin(function (origin) {
        if (origin && !/^file:|^chrome-extension:/.test(origin)) {
          _app.PDFViewerApplication.error('Blocked ' + origin + ' from loading ' + file + '. Refused to load a local file in a non-local page ' + 'for security reasons.');
          return;
        }
        isAllowedFileSchemeAccess(function (isAllowedAccess) {
          if (isAllowedAccess) {
            callback(file);
          } else {
            requestAccessToLocalFile(file, overlayManager, callback);
          }
        });
      });
      return;
    }
    callback(file);
  }
};
function getEmbedderOrigin(callback) {
  var origin = window === top ? location.origin : location.ancestorOrigins[0];
  if (origin === 'null') {
    getParentOrigin(callback);
  } else {
    callback(origin);
  }
}
function getParentOrigin(callback) {
  ChromeCom.request('getParentOrigin', null, callback);
}
function isAllowedFileSchemeAccess(callback) {
  ChromeCom.request('isAllowedFileSchemeAccess', null, callback);
}
function isRuntimeAvailable() {
  try {
    if (chrome.runtime && chrome.runtime.getManifest()) {
      return true;
    }
  } catch (e) {}
  return false;
}
function reloadIfRuntimeIsUnavailable() {
  if (!isRuntimeAvailable()) {
    location.reload();
  }
}
var chromeFileAccessOverlayPromise;
function requestAccessToLocalFile(fileUrl, overlayManager, callback) {
  var onCloseOverlay = null;
  if (top !== window) {
    window.addEventListener('focus', reloadIfRuntimeIsUnavailable);
    onCloseOverlay = function onCloseOverlay() {
      window.removeEventListener('focus', reloadIfRuntimeIsUnavailable);
      reloadIfRuntimeIsUnavailable();
      overlayManager.close('chromeFileAccessOverlay');
    };
  }
  if (!chromeFileAccessOverlayPromise) {
    chromeFileAccessOverlayPromise = overlayManager.register('chromeFileAccessOverlay', document.getElementById('chromeFileAccessOverlay'), onCloseOverlay, true);
  }
  chromeFileAccessOverlayPromise.then(function () {
    var iconPath = chrome.runtime.getManifest().icons[48];
    document.getElementById('chrome-pdfjs-logo-bg').style.backgroundImage = 'url(' + chrome.runtime.getURL(iconPath) + ')';
    var i18nFileAccessLabel = {
      "am": "\u1208\u134B\u12ED\u120D \u12E9\u12A0\u122D\u12A4\u120D\u12CE\u127D \u1218\u12F3\u1228\u123B \u134D\u1240\u12F5",
      "ar": "\u200F\u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 URL \u0644\u0644\u0645\u0644\u0641\u0627\u062A",
      "bg": "\u0414\u0430 \u0441\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0438 \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E URL \u0430\u0434\u0440\u0435\u0441\u0438\u0442\u0435 \u043D\u0430 \u0444\u0430\u0439\u043B\u043E\u0432\u0435\u0442\u0435",
      "bn": "\u09AB\u09BE\u0987\u09B2 URL\u0997\u09C1\u09B2\u09BF\u09A4\u09C7 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u09AE\u099E\u09CD\u099C\u09C1\u09B0 \u0995\u09B0\u09C1\u09A8",
      "ca": "Permet l'acc\xE9s als URL de fitxer",
      "cs": "Umo\u017Enit p\u0159\xEDstup k adres\xE1m URL soubor\u016F",
      "da": "Tillad adgang til webadresser p\xE5 filer",
      "de": "Zugriff auf Datei-URLs zulassen",
      "el": "\u039D\u03B1 \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B1\u03B9 \u03B7 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03B4\u03B9\u03B5\u03C5\u03B8\u03CD\u03BD\u03C3\u03B5\u03B9\u03C2 URL \u03B1\u03C1\u03C7\u03B5\u03AF\u03C9\u03BD",
      "en-GB": "Allow access to file URLs",
      "es": "Permitir acceso a URL de archivo",
      "es-419": "Permitir el acceso a las URL del archivo",
      "et": "Luba juurdep\xE4\xE4s failide URL-idele",
      "fa": "\u200F\u0627\u062C\u0627\u0632\u0647\u0654 \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 URL \u0647\u0627\u06CC \u0641\u0627\u06CC\u0644",
      "fi": "Salli tiedostojen URL-osoitteiden k\xE4ytt\xF6",
      "fil": "Payagan ang access na mag-file ng mga URL",
      "fr": "Autoriser l'acc\xE8s aux URL de fichier",
      "gu": "URL \u0AAB\u0ABE\u0A87\u0AB2 \u0A95\u0AB0\u0AB5\u0ABE \u0A8D\u0A95\u0ACD\u0AB8\u0AC7\u0AB8\u0AA8\u0AC0 \u0AAE\u0A82\u0A9C\u0AC2\u0AB0\u0AC0 \u0A86\u0AAA\u0ACB",
      "hi": "\u092B\u093C\u093E\u0907\u0932 URL \u0924\u0915 \u092A\u0939\u0941\u0902\u091A\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0926\u0947\u0902",
      "hr": "Dozvoli pristup URL-ovima datoteke",
      "hu": "F\xE1jl URL-ekhez val\xF3 hozz\xE1f\xE9r\xE9s enged\xE9lyez\xE9se",
      "id": "Izinkan akses ke URL file",
      "it": "Consenti l'accesso agli URL dei file",
      "iw": "\u05D0\u05E4\u05E9\u05E8 \u05D2\u05D9\u05E9\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D0\u05EA\u05E8\u05D9\u05DD \u05E9\u05DC \u05E7\u05D1\u05E6\u05D9\u05DD",
      "ja": "\u30D5\u30A1\u30A4\u30EB\u306E URL \u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF\u3059\u308B",
      "kn": "URL \u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAB\u0CC8\u0CB2\u0CCD\u200C\u0C97\u0CB3\u0CBF\u0C97\u0CC6 \u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CBF\u0CB8\u0CB2\u0CC1 \u0C85\u0CA8\u0CC1\u0CAE\u0CA4\u0CBF\u0CB8\u0CBF",
      "ko": "\uD30C\uC77C URL\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4 \uD5C8\uC6A9",
      "lt": "Leisti pasiekti failo URL",
      "lv": "At\u013Caut piek\u013Cuvi faila vietr\u0101\u017Eiem URL",
      "ml": "URL \u0D15\u0D33\u0D4D\u200D\u200C \u0D2B\u0D2F\u0D32\u0D4D\u200D\u200C \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D28\u0D4D\u0D28\u0D24\u0D3F\u0D28\u0D4D \u0D06\u0D15\u0D4D\u200D\u0D38\u0D38\u0D4D\u0D38\u0D4D \u0D05\u0D28\u0D41\u0D35\u0D26\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "mr": "\u092B\u093E\u0907\u0932 URL \u092E\u0927\u094D\u092F\u0947 \u092A\u094D\u0930\u0935\u0947\u0936\u093E\u0938 \u0905\u0928\u0941\u092E\u0924\u0940 \u0926\u094D\u092F\u093E",
      "ms": "Membenarkan akses ke URL fail",
      "nl": "Toegang tot bestand-URL's toestaan",
      "no": "Tillat tilgang til filnettadresser",
      "pl": "Zezwalaj na dost\u0119p do adres\xF3w URL plik\xF3w",
      "pt-BR": "Permitir acesso aos URLs do arquivo",
      "pt-PT": "Permitir acesso a URLs de ficheiro",
      "ro": "Permite accesul la adresele URL de fi\u0219iere",
      "ru": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0430\u043C",
      "sk": "Povoli\u0165 pr\xEDstup k webov\xFDm adres\xE1m s\xFAboru",
      "sl": "Dovoli dostop do URL-jev datoteke",
      "sr": "\u0414\u043E\u0437\u0432\u043E\u043B\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F URL \u0430\u0434\u0440\u0435\u0441\u0430\u043C\u0430 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0430",
      "sv": "Till\xE5t \xE5tkomst till webbadresser i filen",
      "sw": "Ruhusu kufikia URL za faili",
      "ta": "\u0B95\u0BCB\u0BAA\u0BCD\u0BAA\u0BC1  URL\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BC8 \u0B85\u0BA9\u0BC1\u0BAE\u0BA4\u0BBF",
      "te": "\u0C2B\u0C48\u0C32\u0C4D URL\u0C32\u0C15\u0C41 \u0C2A\u0C4D\u0C30\u0C3E\u0C2A\u0C4D\u0C24\u0C3F\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C2E\u0C24\u0C3F\u0C02\u0C1A\u0C41",
      "th": "\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E44\u0E1F\u0E25\u0E4C URL",
      "tr": "Dosya URL'lerine eri\u015Fime izin ver",
      "uk": "\u041D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E URL-\u0430\u0434\u0440\u0435\u0441 \u0444\u0430\u0439\u043B\u0443",
      "vi": "Cho ph\xE9p truy c\u1EADp v\xE0o c\xE1c URL c\u1EE7a t\u1EC7p",
      "zh-CN": "\u5141\u8BB8\u8BBF\u95EE\u6587\u4EF6\u7F51\u5740",
      "zh-TW": "\u5141\u8A31\u5B58\u53D6\u6A94\u6848\u7DB2\u5740"
    }[chrome.i18n.getUILanguage && chrome.i18n.getUILanguage()];
    if (i18nFileAccessLabel) {
      document.getElementById('chrome-file-access-label').textContent = i18nFileAccessLabel;
    }
    var link = document.getElementById('chrome-link-to-extensions-page');
    link.href = 'chrome://extensions/?id=' + chrome.runtime.id;
    link.onclick = function (e) {
      e.preventDefault();
      ChromeCom.request('openExtensionsPageForFileAccess', {
        newTab: e.ctrlKey || e.metaKey || e.button === 1 || window !== top
      });
    };
    document.getElementById('chrome-url-of-local-file').textContent = fileUrl;
    document.getElementById('chrome-file-fallback').onchange = function () {
      var file = this.files[0];
      if (file) {
        var originalFilename = decodeURIComponent(fileUrl.split('/').pop());
        var originalUrl = fileUrl;
        if (originalFilename !== file.name) {
          var msg = 'The selected file does not match the original file.' + '\nOriginal: ' + originalFilename + '\nSelected: ' + file.name + '\nDo you want to open the selected file?';
          if (!confirm(msg)) {
            this.value = '';
            return;
          }
          originalUrl = 'file:///fakepath/to/' + encodeURIComponent(file.name);
        }
        callback(_pdf.URL.createObjectURL(file), file.size, originalUrl);
        overlayManager.close('chromeFileAccessOverlay');
      }
    };
    overlayManager.open('chromeFileAccessOverlay');
  });
}
if (window === top) {
  addEventListener('unload', function () {
    if (!isRuntimeAvailable()) {
      localStorage.setItem('unload-' + Date.now() + '-' + document.hidden + '-' + location.href, JSON.stringify(history.state));
    }
  });
}
var port;
function setReferer(url, callback) {
  if (!port) {
    port = chrome.runtime.connect({
      name: 'chromecom-referrer'
    });
  }
  port.onDisconnect.addListener(onDisconnect);
  port.onMessage.addListener(onMessage);
  port.postMessage({
    referer: window.history.state && window.history.state.chromecomState,
    requestUrl: url
  });
  function onMessage(referer) {
    if (referer) {
      var state = window.history.state || {};
      state.chromecomState = referer;
      window.history.replaceState(state, '');
    }
    onCompleted();
  }
  function onDisconnect() {
    port = null;
    callback();
  }
  function onCompleted() {
    port.onDisconnect.removeListener(onDisconnect);
    port.onMessage.removeListener(onMessage);
    callback();
  }
}
var storageArea = chrome.storage.sync || chrome.storage.local;
var ChromePreferences = /*#__PURE__*/function (_BasePreferences) {
  function ChromePreferences() {
    _classCallCheck(this, ChromePreferences);
    return _callSuper(this, ChromePreferences, arguments);
  }
  _inherits(ChromePreferences, _BasePreferences);
  return _createClass(ChromePreferences, [{
    key: "_writeToStorage",
    value: function () {
      var _writeToStorage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(prefObj) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                if (prefObj === _this.defaults) {
                  var keysToRemove = Object.keys(_this.defaults);
                  storageArea.remove(keysToRemove, function () {
                    resolve();
                  });
                } else {
                  storageArea.set(prefObj, function () {
                    resolve();
                  });
                }
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function _writeToStorage(_x) {
        return _writeToStorage2.apply(this, arguments);
      }
      return _writeToStorage;
    }()
  }, {
    key: "_readFromStorage",
    value: function () {
      var _readFromStorage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(prefObj) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                var getPreferences = function getPreferences(defaultPrefs) {
                  if (chrome.runtime.lastError) {
                    defaultPrefs = _this2.defaults;
                  }
                  storageArea.get(defaultPrefs, function (readPrefs) {
                    resolve(readPrefs);
                  });
                };
                if (chrome.storage.managed) {
                  var defaultManagedPrefs = Object.assign({
                    enableHandToolOnLoad: false,
                    disableTextLayer: false,
                    enhanceTextSelection: false,
                    showPreviousViewOnLoad: true,
                    disablePageMode: false
                  }, _this2.defaults);
                  chrome.storage.managed.get(defaultManagedPrefs, function (items) {
                    items = items || defaultManagedPrefs;
                    if (items.enableHandToolOnLoad && !items.cursorToolOnLoad) {
                      items.cursorToolOnLoad = 1;
                    }
                    delete items.enableHandToolOnLoad;
                    if (items.textLayerMode !== 1) {
                      if (items.disableTextLayer) {
                        items.textLayerMode = 0;
                      } else if (items.enhanceTextSelection) {
                        items.textLayerMode = 2;
                      }
                    }
                    delete items.disableTextLayer;
                    delete items.enhanceTextSelection;
                    if (!items.showPreviousViewOnLoad && !items.viewOnLoad) {
                      items.viewOnLoad = 1;
                    }
                    delete items.showPreviousViewOnLoad;
                    delete items.disablePageMode;
                    getPreferences(items);
                  });
                } else {
                  getPreferences(_this2.defaults);
                }
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function _readFromStorage(_x2) {
        return _readFromStorage2.apply(this, arguments);
      }
      return _readFromStorage;
    }()
  }]);
}(_preferences.BasePreferences);
var ChromeExternalServices = Object.create(_app.DefaultExternalServices);
ChromeExternalServices.initPassiveLoading = function (callbacks) {
  var overlayManager = _app.PDFViewerApplication.overlayManager;
  ChromeCom.resolvePDFFile(_app_options.AppOptions.get('defaultUrl'), overlayManager, function (url, length, originalUrl) {
    callbacks.onOpenWithURL(url, length, originalUrl);
  });
};
ChromeExternalServices.createDownloadManager = function (options) {
  return new _download_manager.DownloadManager(options);
};
ChromeExternalServices.createPreferences = function () {
  return new ChromePreferences();
};
ChromeExternalServices.createL10n = function (options) {
  return new _genericl10n.GenericL10n(navigator.language);
};
_app.PDFViewerApplication.externalServices = ChromeExternalServices;