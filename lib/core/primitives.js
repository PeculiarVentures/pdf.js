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
exports.RefSetCache = exports.RefSet = exports.Ref = exports.Name = exports.EOF = exports.Dict = exports.Cmd = void 0;
exports.clearPrimitiveCaches = clearPrimitiveCaches;
exports.isCmd = isCmd;
exports.isDict = isDict;
exports.isEOF = isEOF;
exports.isName = isName;
exports.isRef = isRef;
exports.isRefsEqual = isRefsEqual;
exports.isStream = isStream;
var _util = require("../shared/util");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var EOF = exports.EOF = {};
var Name = exports.Name = function NameClosure() {
  var nameCache = Object.create(null);
  function Name(name) {
    this.name = name;
  }
  Name.prototype = {};
  Name.get = function Name_get(name) {
    var nameValue = nameCache[name];
    return nameValue ? nameValue : nameCache[name] = new Name(name);
  };
  Name._clearCache = function () {
    nameCache = Object.create(null);
  };
  return Name;
}();
var Cmd = exports.Cmd = function CmdClosure() {
  var cmdCache = Object.create(null);
  function Cmd(cmd) {
    this.cmd = cmd;
  }
  Cmd.prototype = {};
  Cmd.get = function Cmd_get(cmd) {
    var cmdValue = cmdCache[cmd];
    return cmdValue ? cmdValue : cmdCache[cmd] = new Cmd(cmd);
  };
  Cmd._clearCache = function () {
    cmdCache = Object.create(null);
  };
  return Cmd;
}();
var Dict = exports.Dict = function DictClosure() {
  var nonSerializable = function nonSerializableClosure() {
    return nonSerializable;
  };
  function Dict(xref) {
    this._map = Object.create(null);
    this.xref = xref;
    this.objId = null;
    this.suppressEncryption = false;
    this.__nonSerializable__ = nonSerializable;
  }
  Dict.prototype = {
    assignXref: function Dict_assignXref(newXref) {
      this.xref = newXref;
    },
    get: function get(key1, key2, key3) {
      var value = this._map[key1];
      if (value === undefined && !(key1 in this._map) && key2 !== undefined) {
        value = this._map[key2];
        if (value === undefined && !(key2 in this._map) && key3 !== undefined) {
          value = this._map[key3];
        }
      }
      if (value instanceof Ref && this.xref) {
        return this.xref.fetch(value, this.suppressEncryption);
      }
      return value;
    },
    getAsync: function getAsync(key1, key2, key3) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var value;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              value = _this._map[key1];
              if (value === undefined && !(key1 in _this._map) && key2 !== undefined) {
                value = _this._map[key2];
                if (value === undefined && !(key2 in _this._map) && key3 !== undefined) {
                  value = _this._map[key3];
                }
              }
              if (!(value instanceof Ref && _this.xref)) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", _this.xref.fetchAsync(value, _this.suppressEncryption));
            case 4:
              return _context.abrupt("return", value);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getArray: function getArray(key1, key2, key3) {
      var value = this.get(key1, key2, key3);
      if (!Array.isArray(value) || !this.xref) {
        return value;
      }
      value = value.slice();
      for (var i = 0, ii = value.length; i < ii; i++) {
        if (!(value[i] instanceof Ref)) {
          continue;
        }
        value[i] = this.xref.fetch(value[i], this.suppressEncryption);
      }
      return value;
    },
    getRaw: function Dict_getRaw(key) {
      return this._map[key];
    },
    getKeys: function Dict_getKeys() {
      return Object.keys(this._map);
    },
    set: function Dict_set(key, value) {
      this._map[key] = value;
    },
    has: function Dict_has(key) {
      return key in this._map;
    },
    forEach: function Dict_forEach(callback) {
      for (var key in this._map) {
        callback(key, this.get(key));
      }
    }
  };
  Dict.empty = new Dict(null);
  Dict.merge = function (xref, dictArray) {
    var mergedDict = new Dict(xref);
    for (var i = 0, ii = dictArray.length; i < ii; i++) {
      var dict = dictArray[i];
      if (!isDict(dict)) {
        continue;
      }
      for (var keyName in dict._map) {
        if (mergedDict._map[keyName] !== undefined) {
          continue;
        }
        mergedDict._map[keyName] = dict._map[keyName];
      }
    }
    return mergedDict;
  };
  return Dict;
}();
var Ref = exports.Ref = function RefClosure() {
  var refCache = Object.create(null);
  function Ref(num, gen) {
    this.num = num;
    this.gen = gen;
  }
  Ref.prototype = {
    toString: function Ref_toString() {
      if (this.gen === 0) {
        return "".concat(this.num, "R");
      }
      return "".concat(this.num, "R").concat(this.gen);
    }
  };
  Ref.get = function (num, gen) {
    var key = gen === 0 ? "".concat(num, "R") : "".concat(num, "R").concat(gen);
    var refValue = refCache[key];
    return refValue ? refValue : refCache[key] = new Ref(num, gen);
  };
  Ref._clearCache = function () {
    refCache = Object.create(null);
  };
  return Ref;
}();
var RefSet = exports.RefSet = function RefSetClosure() {
  function RefSet() {
    this.dict = Object.create(null);
  }
  RefSet.prototype = {
    has: function RefSet_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSet_put(ref) {
      this.dict[ref.toString()] = true;
    },
    remove: function RefSet_remove(ref) {
      delete this.dict[ref.toString()];
    }
  };
  return RefSet;
}();
var RefSetCache = exports.RefSetCache = function RefSetCacheClosure() {
  function RefSetCache() {
    this.dict = Object.create(null);
  }
  RefSetCache.prototype = {
    get: function RefSetCache_get(ref) {
      return this.dict[ref.toString()];
    },
    has: function RefSetCache_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSetCache_put(ref, obj) {
      this.dict[ref.toString()] = obj;
    },
    putAlias: function RefSetCache_putAlias(ref, aliasRef) {
      this.dict[ref.toString()] = this.get(aliasRef);
    },
    forEach: function RefSetCache_forEach(fn, thisArg) {
      for (var i in this.dict) {
        fn.call(thisArg, this.dict[i]);
      }
    },
    clear: function RefSetCache_clear() {
      this.dict = Object.create(null);
    }
  };
  return RefSetCache;
}();
function isEOF(v) {
  return v === EOF;
}
function isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}
function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}
function isDict(v, type) {
  return v instanceof Dict && (type === undefined || isName(v.get('Type'), type));
}
function isRef(v) {
  return v instanceof Ref;
}
function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}
function isStream(v) {
  return _typeof(v) === 'object' && v !== null && v.getBytes !== undefined;
}
function clearPrimitiveCaches() {
  Cmd._clearCache();
  Name._clearCache();
  Ref._clearCache();
}