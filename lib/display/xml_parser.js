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
exports.SimpleXMLParser = void 0;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var XMLParserErrorCode = {
  NoError: 0,
  EndOfDocument: -1,
  UnterminatedCdat: -2,
  UnterminatedXmlDeclaration: -3,
  UnterminatedDoctypeDeclaration: -4,
  UnterminatedComment: -5,
  MalformedElement: -6,
  OutOfMemory: -7,
  UnterminatedAttributeValue: -8,
  UnterminatedElement: -9,
  ElementNeverBegun: -10
};
function isWhitespace(s, index) {
  var ch = s[index];
  return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
}
function isWhitespaceString(s) {
  for (var i = 0, ii = s.length; i < ii; i++) {
    if (!isWhitespace(s, i)) {
      return false;
    }
  }
  return true;
}
var XMLParserBase = /*#__PURE__*/function () {
  function XMLParserBase() {
    _classCallCheck(this, XMLParserBase);
  }
  return _createClass(XMLParserBase, [{
    key: "_resolveEntities",
    value: function _resolveEntities(s) {
      var _this = this;
      return s.replace(/&([^;]+);/g, function (all, entity) {
        if (entity.substring(0, 2) === '#x') {
          return String.fromCharCode(parseInt(entity.substring(2), 16));
        } else if (entity.substring(0, 1) === '#') {
          return String.fromCharCode(parseInt(entity.substring(1), 10));
        }
        switch (entity) {
          case 'lt':
            return '<';
          case 'gt':
            return '>';
          case 'amp':
            return '&';
          case 'quot':
            return '\"';
        }
        return _this.onResolveEntity(entity);
      });
    }
  }, {
    key: "_parseContent",
    value: function _parseContent(s, start) {
      var pos = start,
        name,
        attributes = [];
      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }
      name = s.substring(start, pos);
      skipWs();
      while (pos < s.length && s[pos] !== '>' && s[pos] !== '/' && s[pos] !== '?') {
        skipWs();
        var attrName = '',
          attrValue = '';
        while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '=') {
          attrName += s[pos];
          ++pos;
        }
        skipWs();
        if (s[pos] !== '=') {
          return null;
        }
        ++pos;
        skipWs();
        var attrEndChar = s[pos];
        if (attrEndChar !== '\"' && attrEndChar !== '\'') {
          return null;
        }
        var attrEndIndex = s.indexOf(attrEndChar, ++pos);
        if (attrEndIndex < 0) {
          return null;
        }
        attrValue = s.substring(pos, attrEndIndex);
        attributes.push({
          name: attrName,
          value: this._resolveEntities(attrValue)
        });
        pos = attrEndIndex + 1;
        skipWs();
      }
      return {
        name: name,
        attributes: attributes,
        parsed: pos - start
      };
    }
  }, {
    key: "_parseProcessingInstruction",
    value: function _parseProcessingInstruction(s, start) {
      var pos = start,
        name,
        value;
      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }
      name = s.substring(start, pos);
      skipWs();
      var attrStart = pos;
      while (pos < s.length && (s[pos] !== '?' || s[pos + 1] !== '>')) {
        ++pos;
      }
      value = s.substring(attrStart, pos);
      return {
        name: name,
        value: value,
        parsed: pos - start
      };
    }
  }, {
    key: "parseXml",
    value: function parseXml(s) {
      var i = 0;
      while (i < s.length) {
        var ch = s[i];
        var j = i;
        if (ch === '<') {
          ++j;
          var ch2 = s[j];
          var q = void 0;
          switch (ch2) {
            case '/':
              ++j;
              q = s.indexOf('>', j);
              if (q < 0) {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }
              this.onEndElement(s.substring(j, q));
              j = q + 1;
              break;
            case '?':
              ++j;
              var pi = this._parseProcessingInstruction(s, j);
              if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== '?>') {
                this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                return;
              }
              this.onPi(pi.name, pi.value);
              j += pi.parsed + 2;
              break;
            case '!':
              if (s.substring(j + 1, j + 3) === '--') {
                q = s.indexOf('-->', j + 3);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedComment);
                  return;
                }
                this.onComment(s.substring(j + 3, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === '[CDATA[') {
                q = s.indexOf(']]>', j + 8);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedCdat);
                  return;
                }
                this.onCdata(s.substring(j + 8, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === 'DOCTYPE') {
                var q2 = s.indexOf('[', j + 8);
                var complexDoctype = false;
                q = s.indexOf('>', j + 8);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                  return;
                }
                if (q2 > 0 && q > q2) {
                  q = s.indexOf(']>', j + 8);
                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                    return;
                  }
                  complexDoctype = true;
                }
                var doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                this.onDoctype(doctypeContent);
                j = q + (complexDoctype ? 2 : 1);
              } else {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }
              break;
            default:
              var content = this._parseContent(s, j);
              if (content === null) {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }
              var isClosed = false;
              if (s.substring(j + content.parsed, j + content.parsed + 2) === '/>') {
                isClosed = true;
              } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== '>') {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }
              this.onBeginElement(content.name, content.attributes, isClosed);
              j += content.parsed + (isClosed ? 2 : 1);
              break;
          }
        } else {
          while (j < s.length && s[j] !== '<') {
            j++;
          }
          var text = s.substring(i, j);
          this.onText(this._resolveEntities(text));
        }
        i = j;
      }
    }
  }, {
    key: "onResolveEntity",
    value: function onResolveEntity(name) {
      return "&".concat(name, ";");
    }
  }, {
    key: "onPi",
    value: function onPi(name, value) {}
  }, {
    key: "onComment",
    value: function onComment(text) {}
  }, {
    key: "onCdata",
    value: function onCdata(text) {}
  }, {
    key: "onDoctype",
    value: function onDoctype(doctypeContent) {}
  }, {
    key: "onText",
    value: function onText(text) {}
  }, {
    key: "onBeginElement",
    value: function onBeginElement(name, attributes, isEmpty) {}
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {}
  }, {
    key: "onError",
    value: function onError(code) {}
  }]);
}();
var SimpleDOMNode = /*#__PURE__*/function () {
  function SimpleDOMNode(nodeName, nodeValue) {
    _classCallCheck(this, SimpleDOMNode);
    this.nodeName = nodeName;
    this.nodeValue = nodeValue;
    Object.defineProperty(this, 'parentNode', {
      value: null,
      writable: true
    });
  }
  return _createClass(SimpleDOMNode, [{
    key: "firstChild",
    get: function get() {
      return this.childNodes && this.childNodes[0];
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var childNodes = this.parentNode.childNodes;
      if (!childNodes) {
        return undefined;
      }
      var index = childNodes.indexOf(this);
      if (index === -1) {
        return undefined;
      }
      return childNodes[index + 1];
    }
  }, {
    key: "textContent",
    get: function get() {
      if (!this.childNodes) {
        return this.nodeValue || '';
      }
      return this.childNodes.map(function (child) {
        return child.textContent;
      }).join('');
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes && this.childNodes.length > 0;
    }
  }]);
}();
var SimpleXMLParser = exports.SimpleXMLParser = /*#__PURE__*/function (_XMLParserBase) {
  function SimpleXMLParser() {
    var _this2;
    _classCallCheck(this, SimpleXMLParser);
    _this2 = _callSuper(this, SimpleXMLParser);
    _this2._currentFragment = null;
    _this2._stack = null;
    _this2._errorCode = XMLParserErrorCode.NoError;
    return _this2;
  }
  _inherits(SimpleXMLParser, _XMLParserBase);
  return _createClass(SimpleXMLParser, [{
    key: "parseFromString",
    value: function parseFromString(data) {
      this._currentFragment = [];
      this._stack = [];
      this._errorCode = XMLParserErrorCode.NoError;
      this.parseXml(data);
      if (this._errorCode !== XMLParserErrorCode.NoError) {
        return undefined;
      }
      var _this$_currentFragmen = _slicedToArray(this._currentFragment, 1),
        documentElement = _this$_currentFragmen[0];
      if (!documentElement) {
        return undefined;
      }
      return {
        documentElement: documentElement
      };
    }
  }, {
    key: "onResolveEntity",
    value: function onResolveEntity(name) {
      switch (name) {
        case 'apos':
          return '\'';
      }
      return _superPropGet(SimpleXMLParser, "onResolveEntity", this, 3)([name]);
    }
  }, {
    key: "onText",
    value: function onText(text) {
      if (isWhitespaceString(text)) {
        return;
      }
      var node = new SimpleDOMNode('#text', text);
      this._currentFragment.push(node);
    }
  }, {
    key: "onCdata",
    value: function onCdata(text) {
      var node = new SimpleDOMNode('#text', text);
      this._currentFragment.push(node);
    }
  }, {
    key: "onBeginElement",
    value: function onBeginElement(name, attributes, isEmpty) {
      var node = new SimpleDOMNode(name);
      node.childNodes = [];
      this._currentFragment.push(node);
      if (isEmpty) {
        return;
      }
      this._stack.push(this._currentFragment);
      this._currentFragment = node.childNodes;
    }
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {
      this._currentFragment = this._stack.pop() || [];
      var lastElement = this._currentFragment[this._currentFragment.length - 1];
      if (!lastElement) {
        return;
      }
      for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
        lastElement.childNodes[i].parentNode = lastElement;
      }
    }
  }, {
    key: "onError",
    value: function onError(code) {
      this._errorCode = code;
    }
  }]);
}(XMLParserBase);