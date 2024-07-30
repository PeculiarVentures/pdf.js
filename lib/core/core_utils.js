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
exports.XRefParseException = exports.XRefEntryException = exports.MissingDataException = void 0;
exports.getInheritableProperty = getInheritableProperty;
exports.getLookupTableFactory = getLookupTableFactory;
exports.toRomanNumerals = toRomanNumerals;
var _util = require("../shared/util");
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
function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
var MissingDataException = exports.MissingDataException = /*#__PURE__*/function (_BaseException) {
  function MissingDataException(begin, end) {
    var _this;
    _classCallCheck(this, MissingDataException);
    _this = _callSuper(this, MissingDataException, ["Missing data [".concat(begin, ", ").concat(end, ")")]);
    _this.begin = begin;
    _this.end = end;
    return _this;
  }
  _inherits(MissingDataException, _BaseException);
  return _createClass(MissingDataException);
}(_util.BaseException);
var XRefEntryException = exports.XRefEntryException = /*#__PURE__*/function (_BaseException2) {
  function XRefEntryException() {
    _classCallCheck(this, XRefEntryException);
    return _callSuper(this, XRefEntryException, arguments);
  }
  _inherits(XRefEntryException, _BaseException2);
  return _createClass(XRefEntryException);
}(_util.BaseException);
var XRefParseException = exports.XRefParseException = /*#__PURE__*/function (_BaseException3) {
  function XRefParseException() {
    _classCallCheck(this, XRefParseException);
    return _callSuper(this, XRefParseException, arguments);
  }
  _inherits(XRefParseException, _BaseException3);
  return _createClass(XRefParseException);
}(_util.BaseException);
function getInheritableProperty(_ref) {
  var dict = _ref.dict,
    key = _ref.key,
    _ref$getArray = _ref.getArray,
    getArray = _ref$getArray === void 0 ? false : _ref$getArray,
    _ref$stopWhenFound = _ref.stopWhenFound,
    stopWhenFound = _ref$stopWhenFound === void 0 ? true : _ref$stopWhenFound;
  var LOOP_LIMIT = 100;
  var loopCount = 0;
  var values;
  while (dict) {
    var value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      if (!values) {
        values = [];
      }
      values.push(value);
    }
    if (++loopCount > LOOP_LIMIT) {
      (0, _util.warn)("getInheritableProperty: maximum loop count exceeded for \"".concat(key, "\""));
      break;
    }
    dict = dict.get('Parent');
  }
  return values;
}
var ROMAN_NUMBER_MAP = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
function toRomanNumerals(number) {
  var lowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  (0, _util.assert)(Number.isInteger(number) && number > 0, 'The number should be a positive integer.');
  var pos,
    romanBuf = [];
  while (number >= 1000) {
    number -= 1000;
    romanBuf.push('M');
  }
  pos = number / 100 | 0;
  number %= 100;
  romanBuf.push(ROMAN_NUMBER_MAP[pos]);
  pos = number / 10 | 0;
  number %= 10;
  romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
  romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
  var romanStr = romanBuf.join('');
  return lowerCase ? romanStr.toLowerCase() : romanStr;
}