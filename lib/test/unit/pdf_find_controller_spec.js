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
var _test_utils = require("./test_utils");
var _ui_utils = require("../../web/ui_utils");
var _api = require("../../display/api");
var _pdf_find_controller = require("../../web/pdf_find_controller");
var _pdf_link_service = require("../../web/pdf_link_service");
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
var MockLinkService = /*#__PURE__*/function (_SimpleLinkService) {
  function MockLinkService() {
    var _this;
    _classCallCheck(this, MockLinkService);
    _this = _callSuper(this, MockLinkService);
    _this._page = 1;
    _this._pdfDocument = null;
    return _this;
  }
  _inherits(MockLinkService, _SimpleLinkService);
  return _createClass(MockLinkService, [{
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      this._pdfDocument = pdfDocument;
    }
  }, {
    key: "pagesCount",
    get: function get() {
      return this._pdfDocument.numPages;
    }
  }, {
    key: "page",
    get: function get() {
      return this._page;
    },
    set: function set(value) {
      this._page = value;
    }
  }]);
}(_pdf_link_service.SimpleLinkService);
describe('pdf_find_controller', function () {
  var eventBus;
  var pdfFindController;
  beforeEach(function (done) {
    var loadingTask = (0, _api.getDocument)((0, _test_utils.buildGetDocumentParams)('tracemonkey.pdf'));
    loadingTask.promise.then(function (pdfDocument) {
      eventBus = new _ui_utils.EventBus();
      var linkService = new MockLinkService();
      linkService.setDocument(pdfDocument);
      pdfFindController = new _pdf_find_controller.PDFFindController({
        linkService: linkService,
        eventBus: eventBus
      });
      pdfFindController.setDocument(pdfDocument);
      done();
    });
  });
  afterEach(function () {
    eventBus = null;
    pdfFindController = null;
  });
  function testSearch(_ref) {
    var parameters = _ref.parameters,
      matchesPerPage = _ref.matchesPerPage,
      selectedMatch = _ref.selectedMatch;
    return new Promise(function (resolve) {
      pdfFindController.executeCommand('find', parameters);
      var totalPages = matchesPerPage.length;
      for (var i = totalPages - 1; i >= 0; i--) {
        if (matchesPerPage[i] > 0) {
          totalPages = i + 1;
          break;
        }
      }
      var totalMatches = matchesPerPage.reduce(function (a, b) {
        return a + b;
      });
      eventBus.on('updatefindmatchescount', function onUpdateFindMatchesCount(evt) {
        if (pdfFindController.pageMatches.length !== totalPages) {
          return;
        }
        eventBus.off('updatefindmatchescount', onUpdateFindMatchesCount);
        expect(evt.matchesCount.total).toBe(totalMatches);
        for (var _i = 0; _i < totalPages; _i++) {
          expect(pdfFindController.pageMatches[_i].length).toEqual(matchesPerPage[_i]);
        }
        expect(pdfFindController.selected.pageIdx).toEqual(selectedMatch.pageIndex);
        expect(pdfFindController.selected.matchIdx).toEqual(selectedMatch.matchIndex);
        resolve();
      });
    });
  }
  it('performs a normal search', function (done) {
    testSearch({
      parameters: {
        query: 'Dynamic',
        caseSensitive: false,
        entireWord: false,
        phraseSearch: true,
        findPrevious: false
      },
      matchesPerPage: [11, 5, 0, 3, 0, 0, 0, 1, 1, 1, 0, 3, 4, 4],
      selectedMatch: {
        pageIndex: 0,
        matchIndex: 0
      }
    }).then(done);
  });
  it('performs a normal search and finds the previous result', function (done) {
    testSearch({
      parameters: {
        query: 'conference',
        caseSensitive: false,
        entireWord: false,
        phraseSearch: true,
        findPrevious: true
      },
      matchesPerPage: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
      selectedMatch: {
        pageIndex: 13,
        matchIndex: 4
      }
    }).then(done);
  });
  it('performs a case sensitive search', function (done) {
    testSearch({
      parameters: {
        query: 'Dynamic',
        caseSensitive: true,
        entireWord: false,
        phraseSearch: true,
        findPrevious: false
      },
      matchesPerPage: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3],
      selectedMatch: {
        pageIndex: 0,
        matchIndex: 0
      }
    }).then(done);
  });
  it('performs an entire word search', function (done) {
    testSearch({
      parameters: {
        query: 'Government',
        caseSensitive: false,
        entireWord: true,
        phraseSearch: true,
        findPrevious: false
      },
      matchesPerPage: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      selectedMatch: {
        pageIndex: 12,
        matchIndex: 0
      }
    }).then(done);
  });
  it('performs a multiple term (no phrase) search', function (done) {
    testSearch({
      parameters: {
        query: 'alternate solution',
        caseSensitive: false,
        entireWord: false,
        phraseSearch: false,
        findPrevious: false
      },
      matchesPerPage: [0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 0],
      selectedMatch: {
        pageIndex: 5,
        matchIndex: 0
      }
    }).then(done);
  });
});