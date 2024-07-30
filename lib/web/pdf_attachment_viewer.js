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
exports.PDFAttachmentViewer = void 0;
var _pdf = require("../pdf");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PDFAttachmentViewer = exports.PDFAttachmentViewer = /*#__PURE__*/function () {
  function PDFAttachmentViewer(_ref) {
    var container = _ref.container,
      eventBus = _ref.eventBus,
      downloadManager = _ref.downloadManager;
    _classCallCheck(this, PDFAttachmentViewer);
    this.container = container;
    this.eventBus = eventBus;
    this.downloadManager = downloadManager;
    this.reset();
    this.eventBus.on('fileattachmentannotation', this._appendAttachment.bind(this));
  }
  return _createClass(PDFAttachmentViewer, [{
    key: "reset",
    value: function reset() {
      var keepRenderedCapability = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.attachments = null;
      this.container.textContent = '';
      if (!keepRenderedCapability) {
        this._renderedCapability = (0, _pdf.createPromiseCapability)();
      }
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(attachmentsCount) {
      this._renderedCapability.resolve();
      this.eventBus.dispatch('attachmentsloaded', {
        source: this,
        attachmentsCount: attachmentsCount
      });
    }
  }, {
    key: "_bindPdfLink",
    value: function _bindPdfLink(button, content, filename) {
      if (this.downloadManager.disableCreateObjectURL) {
        throw new Error('bindPdfLink: Unsupported "disableCreateObjectURL" value.');
      }
      var blobUrl;
      button.onclick = function () {
        if (!blobUrl) {
          blobUrl = (0, _pdf.createObjectURL)(content, 'application/pdf');
        }
        var viewerUrl;
        viewerUrl = '?file=' + encodeURIComponent(blobUrl + '#' + filename);
        window.open(viewerUrl);
        return false;
      };
    }
  }, {
    key: "_bindLink",
    value: function _bindLink(button, content, filename) {
      var _this = this;
      button.onclick = function () {
        _this.downloadManager.downloadData(content, filename, '');
        return false;
      };
    }
  }, {
    key: "render",
    value: function render(_ref2) {
      var attachments = _ref2.attachments,
        _ref2$keepRenderedCap = _ref2.keepRenderedCapability,
        keepRenderedCapability = _ref2$keepRenderedCap === void 0 ? false : _ref2$keepRenderedCap;
      var attachmentsCount = 0;
      if (this.attachments) {
        this.reset(keepRenderedCapability === true);
      }
      this.attachments = attachments || null;
      if (!attachments) {
        this._dispatchEvent(attachmentsCount);
        return;
      }
      var names = Object.keys(attachments).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      attachmentsCount = names.length;
      for (var i = 0; i < attachmentsCount; i++) {
        var item = attachments[names[i]];
        var filename = (0, _pdf.removeNullCharacters)((0, _pdf.getFilenameFromUrl)(item.filename));
        var div = document.createElement('div');
        div.className = 'attachmentsItem';
        var button = document.createElement('button');
        button.textContent = filename;
        if (/\.pdf$/i.test(filename) && !this.downloadManager.disableCreateObjectURL) {
          this._bindPdfLink(button, item.content, filename);
        } else {
          this._bindLink(button, item.content, filename);
        }
        div.appendChild(button);
        this.container.appendChild(div);
      }
      this._dispatchEvent(attachmentsCount);
    }
  }, {
    key: "_appendAttachment",
    value: function _appendAttachment(_ref3) {
      var _this2 = this;
      var id = _ref3.id,
        filename = _ref3.filename,
        content = _ref3.content;
      this._renderedCapability.promise.then(function () {
        var attachments = _this2.attachments;
        if (!attachments) {
          attachments = Object.create(null);
        } else {
          for (var name in attachments) {
            if (id === name) {
              return;
            }
          }
        }
        attachments[id] = {
          filename: filename,
          content: content
        };
        _this2.render({
          attachments: attachments,
          keepRenderedCapability: true
        });
      });
    }
  }]);
}();