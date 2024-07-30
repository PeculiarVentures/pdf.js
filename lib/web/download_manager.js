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
exports.DownloadManager = void 0;
var _pdf = require("../pdf");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;
var DISABLE_CREATE_OBJECT_URL = _pdf.apiCompatibilityParams.disableCreateObjectURL || false;
function _download(blobUrl, filename) {
  var a = document.createElement('a');
  if (!a.click) {
    throw new Error('DownloadManager: "a.click()" is not supported.');
  }
  a.href = blobUrl;
  a.target = '_parent';
  if ('download' in a) {
    a.download = filename;
  }
  (document.body || document.documentElement).appendChild(a);
  a.click();
  a.remove();
}
var DownloadManager = exports.DownloadManager = /*#__PURE__*/function () {
  function DownloadManager(_ref) {
    var _ref$disableCreateObj = _ref.disableCreateObjectURL,
      disableCreateObjectURL = _ref$disableCreateObj === void 0 ? DISABLE_CREATE_OBJECT_URL : _ref$disableCreateObj;
    _classCallCheck(this, DownloadManager);
    this.disableCreateObjectURL = disableCreateObjectURL;
  }
  return _createClass(DownloadManager, [{
    key: "downloadUrl",
    value: function downloadUrl(url, filename) {
      if (!(0, _pdf.createValidAbsoluteUrl)(url, 'http://example.com')) {
        return;
      }
      _download(url + '#pdfjs.action=download', filename);
    }
  }, {
    key: "downloadData",
    value: function downloadData(data, filename, contentType) {
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(new Blob([data], {
          type: contentType
        }), filename);
        return;
      }
      var blobUrl = (0, _pdf.createObjectURL)(data, contentType, this.disableCreateObjectURL);
      _download(blobUrl, filename);
    }
  }, {
    key: "download",
    value: function download(blob, url, filename) {
      if (navigator.msSaveBlob) {
        if (!navigator.msSaveBlob(blob, filename)) {
          this.downloadUrl(url, filename);
        }
        return;
      }
      if (this.disableCreateObjectURL) {
        this.downloadUrl(url, filename);
        return;
      }
      var blobUrl = URL.createObjectURL(blob);
      _download(blobUrl, filename);
    }
  }]);
}();