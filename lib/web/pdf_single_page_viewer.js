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
exports.PDFSinglePageViewer = void 0;
var _base_viewer = require("./base_viewer");
var _pdf = require("../pdf");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var PDFSinglePageViewer = exports.PDFSinglePageViewer = /*#__PURE__*/function (_BaseViewer) {
  function PDFSinglePageViewer(options) {
    var _this;
    _classCallCheck(this, PDFSinglePageViewer);
    _this = _callSuper(this, PDFSinglePageViewer, [options]);
    _this.eventBus.on('pagesinit', function (evt) {
      _this._ensurePageViewVisible();
    });
    return _this;
  }
  _inherits(PDFSinglePageViewer, _BaseViewer);
  return _createClass(PDFSinglePageViewer, [{
    key: "_setDocumentViewerElement",
    get: function get() {
      return (0, _pdf.shadow)(this, '_setDocumentViewerElement', this._shadowViewer);
    }
  }, {
    key: "_resetView",
    value: function _resetView() {
      _superPropGet(PDFSinglePageViewer, "_resetView", this, 3)([]);
      this._previousPageNumber = 1;
      this._shadowViewer = document.createDocumentFragment();
      this._updateScrollDown = null;
    }
  }, {
    key: "_ensurePageViewVisible",
    value: function _ensurePageViewVisible() {
      var pageView = this._pages[this._currentPageNumber - 1];
      var previousPageView = this._pages[this._previousPageNumber - 1];
      var viewerNodes = this.viewer.childNodes;
      switch (viewerNodes.length) {
        case 0:
          this.viewer.appendChild(pageView.div);
          break;
        case 1:
          if (viewerNodes[0] !== previousPageView.div) {
            throw new Error('_ensurePageViewVisible: Unexpected previously visible page.');
          }
          if (pageView === previousPageView) {
            break;
          }
          this._shadowViewer.appendChild(previousPageView.div);
          this.viewer.appendChild(pageView.div);
          this.container.scrollTop = 0;
          break;
        default:
          throw new Error('_ensurePageViewVisible: Only one page should be visible at a time.');
      }
      this._previousPageNumber = this._currentPageNumber;
    }
  }, {
    key: "_scrollUpdate",
    value: function _scrollUpdate() {
      if (this._updateScrollDown) {
        this._updateScrollDown();
      }
      _superPropGet(PDFSinglePageViewer, "_scrollUpdate", this, 3)([]);
    }
  }, {
    key: "_scrollIntoView",
    value: function _scrollIntoView(_ref) {
      var _this2 = this;
      var pageDiv = _ref.pageDiv,
        _ref$pageSpot = _ref.pageSpot,
        pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
        _ref$pageNumber = _ref.pageNumber,
        pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;
      if (pageNumber) {
        this._setCurrentPageNumber(pageNumber);
      }
      var scrolledDown = this._currentPageNumber >= this._previousPageNumber;
      this._ensurePageViewVisible();
      this.update();
      _superPropGet(PDFSinglePageViewer, "_scrollIntoView", this, 3)([{
        pageDiv: pageDiv,
        pageSpot: pageSpot,
        pageNumber: pageNumber
      }]);
      this._updateScrollDown = function () {
        _this2.scroll.down = scrolledDown;
        _this2._updateScrollDown = null;
      };
    }
  }, {
    key: "_getVisiblePages",
    value: function _getVisiblePages() {
      return this._getCurrentVisiblePage();
    }
  }, {
    key: "_updateHelper",
    value: function _updateHelper(visiblePages) {}
  }, {
    key: "_isScrollModeHorizontal",
    get: function get() {
      return (0, _pdf.shadow)(this, '_isScrollModeHorizontal', false);
    }
  }, {
    key: "_updateScrollMode",
    value: function _updateScrollMode() {}
  }, {
    key: "_updateSpreadMode",
    value: function _updateSpreadMode() {}
  }]);
}(_base_viewer.BaseViewer);