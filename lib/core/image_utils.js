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
exports.NativeImageDecoder = void 0;
var _colorspace = require("./colorspace");
var _jpeg_stream = require("./jpeg_stream");
var _stream = require("./stream");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NativeImageDecoder = exports.NativeImageDecoder = /*#__PURE__*/function () {
  function NativeImageDecoder(_ref) {
    var xref = _ref.xref,
      resources = _ref.resources,
      handler = _ref.handler,
      _ref$forceDataSchema = _ref.forceDataSchema,
      forceDataSchema = _ref$forceDataSchema === void 0 ? false : _ref$forceDataSchema,
      pdfFunctionFactory = _ref.pdfFunctionFactory;
    _classCallCheck(this, NativeImageDecoder);
    this.xref = xref;
    this.resources = resources;
    this.handler = handler;
    this.forceDataSchema = forceDataSchema;
    this.pdfFunctionFactory = pdfFunctionFactory;
  }
  return _createClass(NativeImageDecoder, [{
    key: "canDecode",
    value: function canDecode(image) {
      return image instanceof _jpeg_stream.JpegStream && NativeImageDecoder.isDecodable(image, this.xref, this.resources, this.pdfFunctionFactory);
    }
  }, {
    key: "decode",
    value: function decode(image) {
      var dict = image.dict;
      var colorSpace = dict.get('ColorSpace', 'CS');
      colorSpace = _colorspace.ColorSpace.parse(colorSpace, this.xref, this.resources, this.pdfFunctionFactory);
      return this.handler.sendWithPromise('JpegDecode', [image.getIR(this.forceDataSchema), colorSpace.numComps]).then(function (_ref2) {
        var data = _ref2.data,
          width = _ref2.width,
          height = _ref2.height;
        return new _stream.Stream(data, 0, data.length, dict);
      });
    }
  }], [{
    key: "isSupported",
    value: function isSupported(image, xref, res, pdfFunctionFactory) {
      var dict = image.dict;
      if (dict.has('DecodeParms') || dict.has('DP')) {
        return false;
      }
      var cs = _colorspace.ColorSpace.parse(dict.get('ColorSpace', 'CS'), xref, res, pdfFunctionFactory);
      return (cs.name === 'DeviceGray' || cs.name === 'DeviceRGB') && cs.isDefaultDecode(dict.getArray('Decode', 'D'));
    }
  }, {
    key: "isDecodable",
    value: function isDecodable(image, xref, res, pdfFunctionFactory) {
      var dict = image.dict;
      if (dict.has('DecodeParms') || dict.has('DP')) {
        return false;
      }
      var cs = _colorspace.ColorSpace.parse(dict.get('ColorSpace', 'CS'), xref, res, pdfFunctionFactory);
      var bpc = dict.get('BitsPerComponent', 'BPC') || 1;
      return (cs.numComps === 1 || cs.numComps === 3) && cs.isDefaultDecode(dict.getArray('Decode', 'D'), bpc);
    }
  }]);
}();