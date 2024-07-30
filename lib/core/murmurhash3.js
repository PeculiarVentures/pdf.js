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
exports.MurmurHash3_64 = void 0;
var _util = require("../shared/util");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SEED = 0xc3d2e1f0;
var MASK_HIGH = 0xffff0000;
var MASK_LOW = 0xffff;
var MurmurHash3_64 = exports.MurmurHash3_64 = /*#__PURE__*/function () {
  function MurmurHash3_64(seed) {
    _classCallCheck(this, MurmurHash3_64);
    this.h1 = seed ? seed & 0xffffffff : SEED;
    this.h2 = seed ? seed & 0xffffffff : SEED;
  }
  return _createClass(MurmurHash3_64, [{
    key: "update",
    value: function update(input) {
      var data, length;
      if ((0, _util.isString)(input)) {
        data = new Uint8Array(input.length * 2);
        length = 0;
        for (var i = 0, ii = input.length; i < ii; i++) {
          var code = input.charCodeAt(i);
          if (code <= 0xff) {
            data[length++] = code;
          } else {
            data[length++] = code >>> 8;
            data[length++] = code & 0xff;
          }
        }
      } else if ((0, _util.isArrayBuffer)(input)) {
        data = input;
        length = data.byteLength;
      } else {
        throw new Error('Wrong data format in MurmurHash3_64_update. ' + 'Input must be a string or array.');
      }
      var blockCounts = length >> 2;
      var tailLength = length - blockCounts * 4;
      var dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
      var k1 = 0,
        k2 = 0;
      var h1 = this.h1,
        h2 = this.h2;
      var C1 = 0xcc9e2d51,
        C2 = 0x1b873593;
      var C1_LOW = C1 & MASK_LOW,
        C2_LOW = C2 & MASK_LOW;
      for (var _i = 0; _i < blockCounts; _i++) {
        if (_i & 1) {
          k1 = dataUint32[_i];
          k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
          k1 = k1 << 15 | k1 >>> 17;
          k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
          h1 ^= k1;
          h1 = h1 << 13 | h1 >>> 19;
          h1 = h1 * 5 + 0xe6546b64;
        } else {
          k2 = dataUint32[_i];
          k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
          k2 = k2 << 15 | k2 >>> 17;
          k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
          h2 ^= k2;
          h2 = h2 << 13 | h2 >>> 19;
          h2 = h2 * 5 + 0xe6546b64;
        }
      }
      k1 = 0;
      switch (tailLength) {
        case 3:
          k1 ^= data[blockCounts * 4 + 2] << 16;
        case 2:
          k1 ^= data[blockCounts * 4 + 1] << 8;
        case 1:
          k1 ^= data[blockCounts * 4];
          k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
          k1 = k1 << 15 | k1 >>> 17;
          k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
          if (blockCounts & 1) {
            h1 ^= k1;
          } else {
            h2 ^= k1;
          }
      }
      this.h1 = h1;
      this.h2 = h2;
    }
  }, {
    key: "hexdigest",
    value: function hexdigest() {
      var h1 = this.h1,
        h2 = this.h2;
      h1 ^= h2 >>> 1;
      h1 = h1 * 0xed558ccd & MASK_HIGH | h1 * 0x8ccd & MASK_LOW;
      h2 = h2 * 0xff51afd7 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xafd7ed55 & MASK_HIGH) >>> 16;
      h1 ^= h2 >>> 1;
      h1 = h1 * 0x1a85ec53 & MASK_HIGH | h1 * 0xec53 & MASK_LOW;
      h2 = h2 * 0xc4ceb9fe & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xb9fe1a85 & MASK_HIGH) >>> 16;
      h1 ^= h2 >>> 1;
      var hex1 = (h1 >>> 0).toString(16),
        hex2 = (h2 >>> 0).toString(16);
      return hex1.padStart(8, '0') + hex2.padStart(8, '0');
    }
  }]);
}();