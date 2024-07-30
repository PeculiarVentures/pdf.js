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
exports.PDFOutlineViewer = void 0;
var _pdf = require("../pdf");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DEFAULT_TITLE = "\u2013";
var PDFOutlineViewer = exports.PDFOutlineViewer = /*#__PURE__*/function () {
  function PDFOutlineViewer(_ref) {
    var container = _ref.container,
      linkService = _ref.linkService,
      eventBus = _ref.eventBus;
    _classCallCheck(this, PDFOutlineViewer);
    this.container = container;
    this.linkService = linkService;
    this.eventBus = eventBus;
    this.reset();
    eventBus.on('toggleoutlinetree', this.toggleOutlineTree.bind(this));
  }
  return _createClass(PDFOutlineViewer, [{
    key: "reset",
    value: function reset() {
      this.outline = null;
      this.lastToggleIsShow = true;
      this.container.textContent = '';
      this.container.classList.remove('outlineWithDeepNesting');
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(outlineCount) {
      this.eventBus.dispatch('outlineloaded', {
        source: this,
        outlineCount: outlineCount
      });
    }
  }, {
    key: "_bindLink",
    value: function _bindLink(element, _ref2) {
      var url = _ref2.url,
        newWindow = _ref2.newWindow,
        dest = _ref2.dest;
      var linkService = this.linkService;
      if (url) {
        (0, _pdf.addLinkAttributes)(element, {
          url: url,
          target: newWindow ? _pdf.LinkTarget.BLANK : linkService.externalLinkTarget,
          rel: linkService.externalLinkRel,
          enabled: linkService.externalLinkEnabled
        });
        return;
      }
      element.href = linkService.getDestinationHash(dest);
      element.onclick = function () {
        if (dest) {
          linkService.navigateTo(dest);
        }
        return false;
      };
    }
  }, {
    key: "_setStyles",
    value: function _setStyles(element, _ref3) {
      var bold = _ref3.bold,
        italic = _ref3.italic;
      var styleStr = '';
      if (bold) {
        styleStr += 'font-weight: bold;';
      }
      if (italic) {
        styleStr += 'font-style: italic;';
      }
      if (styleStr) {
        element.setAttribute('style', styleStr);
      }
    }
  }, {
    key: "_addToggleButton",
    value: function _addToggleButton(div, _ref4) {
      var _this = this;
      var count = _ref4.count,
        items = _ref4.items;
      var toggler = document.createElement('div');
      toggler.className = 'outlineItemToggler';
      if (count < 0 && Math.abs(count) === items.length) {
        toggler.classList.add('outlineItemsHidden');
      }
      toggler.onclick = function (evt) {
        evt.stopPropagation();
        toggler.classList.toggle('outlineItemsHidden');
        if (evt.shiftKey) {
          var shouldShowAll = !toggler.classList.contains('outlineItemsHidden');
          _this._toggleOutlineItem(div, shouldShowAll);
        }
      };
      div.insertBefore(toggler, div.firstChild);
    }
  }, {
    key: "_toggleOutlineItem",
    value: function _toggleOutlineItem(root) {
      var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.lastToggleIsShow = show;
      var _iterator = _createForOfIteratorHelper(root.querySelectorAll('.outlineItemToggler')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var toggler = _step.value;
          toggler.classList.toggle('outlineItemsHidden', !show);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "toggleOutlineTree",
    value: function toggleOutlineTree() {
      if (!this.outline) {
        return;
      }
      this._toggleOutlineItem(this.container, !this.lastToggleIsShow);
    }
  }, {
    key: "render",
    value: function render(_ref5) {
      var outline = _ref5.outline;
      var outlineCount = 0;
      if (this.outline) {
        this.reset();
      }
      this.outline = outline || null;
      if (!outline) {
        this._dispatchEvent(outlineCount);
        return;
      }
      var fragment = document.createDocumentFragment();
      var queue = [{
        parent: fragment,
        items: this.outline
      }];
      var hasAnyNesting = false;
      while (queue.length > 0) {
        var levelData = queue.shift();
        var _iterator2 = _createForOfIteratorHelper(levelData.items),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            var div = document.createElement('div');
            div.className = 'outlineItem';
            var element = document.createElement('a');
            this._bindLink(element, item);
            this._setStyles(element, item);
            element.textContent = (0, _pdf.removeNullCharacters)(item.title) || DEFAULT_TITLE;
            div.appendChild(element);
            if (item.items.length > 0) {
              hasAnyNesting = true;
              this._addToggleButton(div, item);
              var itemsDiv = document.createElement('div');
              itemsDiv.className = 'outlineItems';
              div.appendChild(itemsDiv);
              queue.push({
                parent: itemsDiv,
                items: item.items
              });
            }
            levelData.parent.appendChild(div);
            outlineCount++;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (hasAnyNesting) {
        this.container.classList.add('outlineWithDeepNesting');
        this.lastToggleIsShow = fragment.querySelectorAll('.outlineItemsHidden').length === 0;
      }
      this.container.appendChild(fragment);
      this._dispatchEvent(outlineCount);
    }
  }]);
}();