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
exports.PDFCursorTools = exports.CursorTool = void 0;
var _grab_to_pan = require("./grab_to_pan");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CursorTool = exports.CursorTool = {
  SELECT: 0,
  HAND: 1,
  ZOOM: 2
};
var PDFCursorTools = exports.PDFCursorTools = /*#__PURE__*/function () {
  function PDFCursorTools(_ref) {
    var _this = this;
    var container = _ref.container,
      eventBus = _ref.eventBus,
      _ref$cursorToolOnLoad = _ref.cursorToolOnLoad,
      cursorToolOnLoad = _ref$cursorToolOnLoad === void 0 ? CursorTool.SELECT : _ref$cursorToolOnLoad;
    _classCallCheck(this, PDFCursorTools);
    this.container = container;
    this.eventBus = eventBus;
    this.active = CursorTool.SELECT;
    this.activeBeforePresentationMode = null;
    this.handTool = new _grab_to_pan.GrabToPan({
      element: this.container
    });
    this._addEventListeners();
    Promise.resolve().then(function () {
      _this.switchTool(cursorToolOnLoad);
    });
  }
  return _createClass(PDFCursorTools, [{
    key: "activeTool",
    get: function get() {
      return this.active;
    }
  }, {
    key: "switchTool",
    value: function switchTool(tool) {
      var _this2 = this;
      if (this.activeBeforePresentationMode !== null) {
        return;
      }
      if (tool === this.active) {
        return;
      }
      var disableActiveTool = function disableActiveTool() {
        switch (_this2.active) {
          case CursorTool.SELECT:
            break;
          case CursorTool.HAND:
            _this2.handTool.deactivate();
            break;
          case CursorTool.ZOOM:
        }
      };
      switch (tool) {
        case CursorTool.SELECT:
          disableActiveTool();
          break;
        case CursorTool.HAND:
          disableActiveTool();
          this.handTool.activate();
          break;
        case CursorTool.ZOOM:
        default:
          console.error("switchTool: \"".concat(tool, "\" is an unsupported value."));
          return;
      }
      this.active = tool;
      this._dispatchEvent();
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent() {
      this.eventBus.dispatch('cursortoolchanged', {
        source: this,
        tool: this.active
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this3 = this;
      this.eventBus.on('switchcursortool', function (evt) {
        _this3.switchTool(evt.tool);
      });
      this.eventBus.on('presentationmodechanged', function (evt) {
        if (evt.switchInProgress) {
          return;
        }
        var previouslyActive;
        if (evt.active) {
          previouslyActive = _this3.active;
          _this3.switchTool(CursorTool.SELECT);
          _this3.activeBeforePresentationMode = previouslyActive;
        } else {
          previouslyActive = _this3.activeBeforePresentationMode;
          _this3.activeBeforePresentationMode = null;
          _this3.switchTool(previouslyActive);
        }
      });
    }
  }]);
}();