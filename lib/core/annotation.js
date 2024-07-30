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
exports.MarkupAnnotation = exports.AnnotationFactory = exports.AnnotationBorderStyle = exports.Annotation = void 0;
exports.getQuadPoints = getQuadPoints;
var _util = require("../shared/util");
var _obj = require("./obj");
var _primitives = require("./primitives");
var _colorspace = require("./colorspace");
var _core_utils = require("./core_utils");
var _operator_list = require("./operator_list");
var _stream = require("./stream");
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AnnotationFactory = exports.AnnotationFactory = /*#__PURE__*/function () {
  function AnnotationFactory() {
    _classCallCheck(this, AnnotationFactory);
  }
  return _createClass(AnnotationFactory, null, [{
    key: "create",
    value: function create(xref, ref, pdfManager, idFactory) {
      return pdfManager.ensure(this, '_create', [xref, ref, pdfManager, idFactory]);
    }
  }, {
    key: "_create",
    value: function _create(xref, ref, pdfManager, idFactory) {
      var dict = xref.fetchIfRef(ref);
      if (!(0, _primitives.isDict)(dict)) {
        return undefined;
      }
      var id = (0, _primitives.isRef)(ref) ? ref.toString() : "annot_".concat(idFactory.createObjId());
      var subtype = dict.get('Subtype');
      subtype = (0, _primitives.isName)(subtype) ? subtype.name : null;
      var parameters = {
        xref: xref,
        dict: dict,
        subtype: subtype,
        id: id,
        pdfManager: pdfManager
      };
      switch (subtype) {
        case 'Link':
          return new LinkAnnotation(parameters);
        case 'Text':
          return new TextAnnotation(parameters);
        case 'Widget':
          var fieldType = (0, _core_utils.getInheritableProperty)({
            dict: dict,
            key: 'FT'
          });
          fieldType = (0, _primitives.isName)(fieldType) ? fieldType.name : null;
          switch (fieldType) {
            case 'Tx':
              return new TextWidgetAnnotation(parameters);
            case 'Btn':
              return new ButtonWidgetAnnotation(parameters);
            case 'Ch':
              return new ChoiceWidgetAnnotation(parameters);
          }
          (0, _util.warn)('Unimplemented widget field type "' + fieldType + '", ' + 'falling back to base field type.');
          return new WidgetAnnotation(parameters);
        case 'Popup':
          return new PopupAnnotation(parameters);
        case 'FreeText':
          return new FreeTextAnnotation(parameters);
        case 'Line':
          return new LineAnnotation(parameters);
        case 'Square':
          return new SquareAnnotation(parameters);
        case 'Circle':
          return new CircleAnnotation(parameters);
        case 'PolyLine':
          return new PolylineAnnotation(parameters);
        case 'Polygon':
          return new PolygonAnnotation(parameters);
        case 'Caret':
          return new CaretAnnotation(parameters);
        case 'Ink':
          return new InkAnnotation(parameters);
        case 'Highlight':
          return new HighlightAnnotation(parameters);
        case 'Underline':
          return new UnderlineAnnotation(parameters);
        case 'Squiggly':
          return new SquigglyAnnotation(parameters);
        case 'StrikeOut':
          return new StrikeOutAnnotation(parameters);
        case 'Stamp':
          return new StampAnnotation(parameters);
        case 'FileAttachment':
          return new FileAttachmentAnnotation(parameters);
        default:
          if (!subtype) {
            (0, _util.warn)('Annotation is missing the required /Subtype.');
          } else {
            (0, _util.warn)('Unimplemented annotation type "' + subtype + '", ' + 'falling back to base annotation.');
          }
          return new Annotation(parameters);
      }
    }
  }]);
}();
function getQuadPoints(dict, rect) {
  if (!dict.has('QuadPoints')) {
    return null;
  }
  var quadPoints = dict.getArray('QuadPoints');
  if (!Array.isArray(quadPoints) || quadPoints.length % 8 > 0) {
    return null;
  }
  var quadPointsLists = [];
  for (var i = 0, ii = quadPoints.length / 8; i < ii; i++) {
    quadPointsLists.push([]);
    for (var j = i * 8, jj = i * 8 + 8; j < jj; j += 2) {
      var x = quadPoints[j];
      var y = quadPoints[j + 1];
      if (x < rect[0] || x > rect[2] || y < rect[1] || y > rect[3]) {
        return null;
      }
      quadPointsLists[i].push({
        x: x,
        y: y
      });
    }
  }
  return quadPointsLists;
}
function getTransformMatrix(rect, bbox, matrix) {
  var _Util$getAxialAligned = _util.Util.getAxialAlignedBoundingBox(bbox, matrix),
    _Util$getAxialAligned2 = _slicedToArray(_Util$getAxialAligned, 4),
    minX = _Util$getAxialAligned2[0],
    minY = _Util$getAxialAligned2[1],
    maxX = _Util$getAxialAligned2[2],
    maxY = _Util$getAxialAligned2[3];
  if (minX === maxX || minY === maxY) {
    return [1, 0, 0, 1, rect[0], rect[1]];
  }
  var xRatio = (rect[2] - rect[0]) / (maxX - minX);
  var yRatio = (rect[3] - rect[1]) / (maxY - minY);
  return [xRatio, 0, 0, yRatio, rect[0] - minX * xRatio, rect[1] - minY * yRatio];
}
var Annotation = exports.Annotation = /*#__PURE__*/function () {
  function Annotation(params) {
    _classCallCheck(this, Annotation);
    var dict = params.dict;
    this.setContents(dict.get('Contents'));
    this.setModificationDate(dict.get('M'));
    this.setFlags(dict.get('F'));
    this.setRectangle(dict.getArray('Rect'));
    this.setColor(dict.getArray('C'));
    this.setBorderStyle(dict);
    this.setAppearance(dict);
    this.data = {
      annotationFlags: this.flags,
      borderStyle: this.borderStyle,
      color: this.color,
      contents: this.contents,
      hasAppearance: !!this.appearance,
      id: params.id,
      modificationDate: this.modificationDate,
      rect: this.rectangle,
      subtype: params.subtype
    };
  }
  return _createClass(Annotation, [{
    key: "_hasFlag",
    value: function _hasFlag(flags, flag) {
      return !!(flags & flag);
    }
  }, {
    key: "_isViewable",
    value: function _isViewable(flags) {
      return !this._hasFlag(flags, _util.AnnotationFlag.INVISIBLE) && !this._hasFlag(flags, _util.AnnotationFlag.HIDDEN) && !this._hasFlag(flags, _util.AnnotationFlag.NOVIEW);
    }
  }, {
    key: "_isPrintable",
    value: function _isPrintable(flags) {
      return this._hasFlag(flags, _util.AnnotationFlag.PRINT) && !this._hasFlag(flags, _util.AnnotationFlag.INVISIBLE) && !this._hasFlag(flags, _util.AnnotationFlag.HIDDEN);
    }
  }, {
    key: "viewable",
    get: function get() {
      if (this.flags === 0) {
        return true;
      }
      return this._isViewable(this.flags);
    }
  }, {
    key: "printable",
    get: function get() {
      if (this.flags === 0) {
        return false;
      }
      return this._isPrintable(this.flags);
    }
  }, {
    key: "setContents",
    value: function setContents(contents) {
      this.contents = (0, _util.stringToPDFString)(contents || '');
    }
  }, {
    key: "setModificationDate",
    value: function setModificationDate(modificationDate) {
      this.modificationDate = (0, _util.isString)(modificationDate) ? modificationDate : null;
    }
  }, {
    key: "setFlags",
    value: function setFlags(flags) {
      this.flags = Number.isInteger(flags) && flags > 0 ? flags : 0;
    }
  }, {
    key: "hasFlag",
    value: function hasFlag(flag) {
      return this._hasFlag(this.flags, flag);
    }
  }, {
    key: "setRectangle",
    value: function setRectangle(rectangle) {
      if (Array.isArray(rectangle) && rectangle.length === 4) {
        this.rectangle = _util.Util.normalizeRect(rectangle);
      } else {
        this.rectangle = [0, 0, 0, 0];
      }
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      var rgbColor = new Uint8ClampedArray(3);
      if (!Array.isArray(color)) {
        this.color = rgbColor;
        return;
      }
      switch (color.length) {
        case 0:
          this.color = null;
          break;
        case 1:
          _colorspace.ColorSpace.singletons.gray.getRgbItem(color, 0, rgbColor, 0);
          this.color = rgbColor;
          break;
        case 3:
          _colorspace.ColorSpace.singletons.rgb.getRgbItem(color, 0, rgbColor, 0);
          this.color = rgbColor;
          break;
        case 4:
          _colorspace.ColorSpace.singletons.cmyk.getRgbItem(color, 0, rgbColor, 0);
          this.color = rgbColor;
          break;
        default:
          this.color = rgbColor;
          break;
      }
    }
  }, {
    key: "setBorderStyle",
    value: function setBorderStyle(borderStyle) {
      this.borderStyle = new AnnotationBorderStyle();
      if (!(0, _primitives.isDict)(borderStyle)) {
        return;
      }
      if (borderStyle.has('BS')) {
        var dict = borderStyle.get('BS');
        var dictType = dict.get('Type');
        if (!dictType || (0, _primitives.isName)(dictType, 'Border')) {
          this.borderStyle.setWidth(dict.get('W'), this.rectangle);
          this.borderStyle.setStyle(dict.get('S'));
          this.borderStyle.setDashArray(dict.getArray('D'));
        }
      } else if (borderStyle.has('Border')) {
        var array = borderStyle.getArray('Border');
        if (Array.isArray(array) && array.length >= 3) {
          this.borderStyle.setHorizontalCornerRadius(array[0]);
          this.borderStyle.setVerticalCornerRadius(array[1]);
          this.borderStyle.setWidth(array[2], this.rectangle);
          if (array.length === 4) {
            this.borderStyle.setDashArray(array[3]);
          }
        }
      } else {
        this.borderStyle.setWidth(0);
      }
    }
  }, {
    key: "setAppearance",
    value: function setAppearance(dict) {
      this.appearance = null;
      var appearanceStates = dict.get('AP');
      if (!(0, _primitives.isDict)(appearanceStates)) {
        return;
      }
      var normalAppearanceState = appearanceStates.get('N');
      if ((0, _primitives.isStream)(normalAppearanceState)) {
        this.appearance = normalAppearanceState;
        return;
      }
      if (!(0, _primitives.isDict)(normalAppearanceState)) {
        return;
      }
      var as = dict.get('AS');
      if (!(0, _primitives.isName)(as) || !normalAppearanceState.has(as.name)) {
        return;
      }
      this.appearance = normalAppearanceState.get(as.name);
    }
  }, {
    key: "loadResources",
    value: function loadResources(keys) {
      return this.appearance.dict.getAsync('Resources').then(function (resources) {
        if (!resources) {
          return undefined;
        }
        var objectLoader = new _obj.ObjectLoader(resources, keys, resources.xref);
        return objectLoader.load().then(function () {
          return resources;
        });
      });
    }
  }, {
    key: "getOperatorList",
    value: function getOperatorList(evaluator, task, renderForms, forceRenderSigAnnot) {
      var _this = this;
      if (!this.appearance) {
        return Promise.resolve(new _operator_list.OperatorList());
      }
      var data = this.data;
      var appearanceDict = this.appearance.dict;
      var resourcesPromise = this.loadResources(['ExtGState', 'ColorSpace', 'Pattern', 'Shading', 'XObject', 'Font']);
      var bbox = appearanceDict.getArray('BBox') || [0, 0, 1, 1];
      var matrix = appearanceDict.getArray('Matrix') || [1, 0, 0, 1, 0, 0];
      var transform = getTransformMatrix(data.rect, bbox, matrix);
      return resourcesPromise.then(function (resources) {
        var opList = new _operator_list.OperatorList();
        opList.addOp(_util.OPS.beginAnnotation, [data.rect, transform, matrix]);
        return evaluator.getOperatorList({
          stream: _this.appearance,
          task: task,
          resources: resources,
          operatorList: opList
        }).then(function () {
          opList.addOp(_util.OPS.endAnnotation, []);
          _this.appearance.reset();
          return opList;
        });
      });
    }
  }]);
}();
var AnnotationBorderStyle = exports.AnnotationBorderStyle = /*#__PURE__*/function () {
  function AnnotationBorderStyle() {
    _classCallCheck(this, AnnotationBorderStyle);
    this.width = 1;
    this.style = _util.AnnotationBorderStyleType.SOLID;
    this.dashArray = [3];
    this.horizontalCornerRadius = 0;
    this.verticalCornerRadius = 0;
  }
  return _createClass(AnnotationBorderStyle, [{
    key: "setWidth",
    value: function setWidth(width) {
      var rect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0, 0];
      if ((0, _primitives.isName)(width)) {
        this.width = 0;
        return;
      }
      if (Number.isInteger(width)) {
        if (width > 0) {
          var maxWidth = (rect[2] - rect[0]) / 2;
          var maxHeight = (rect[3] - rect[1]) / 2;
          if (maxWidth > 0 && maxHeight > 0 && (width > maxWidth || width > maxHeight)) {
            (0, _util.warn)("AnnotationBorderStyle.setWidth - ignoring width: ".concat(width));
            width = 1;
          }
        }
        this.width = width;
      }
    }
  }, {
    key: "setStyle",
    value: function setStyle(style) {
      if (!(0, _primitives.isName)(style)) {
        return;
      }
      switch (style.name) {
        case 'S':
          this.style = _util.AnnotationBorderStyleType.SOLID;
          break;
        case 'D':
          this.style = _util.AnnotationBorderStyleType.DASHED;
          break;
        case 'B':
          this.style = _util.AnnotationBorderStyleType.BEVELED;
          break;
        case 'I':
          this.style = _util.AnnotationBorderStyleType.INSET;
          break;
        case 'U':
          this.style = _util.AnnotationBorderStyleType.UNDERLINE;
          break;
        default:
          break;
      }
    }
  }, {
    key: "setDashArray",
    value: function setDashArray(dashArray) {
      if (Array.isArray(dashArray) && dashArray.length > 0) {
        var isValid = true;
        var allZeros = true;
        var _iterator = _createForOfIteratorHelper(dashArray),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;
            var validNumber = +element >= 0;
            if (!validNumber) {
              isValid = false;
              break;
            } else if (element > 0) {
              allZeros = false;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (isValid && !allZeros) {
          this.dashArray = dashArray;
        } else {
          this.width = 0;
        }
      } else if (dashArray) {
        this.width = 0;
      }
    }
  }, {
    key: "setHorizontalCornerRadius",
    value: function setHorizontalCornerRadius(radius) {
      if (Number.isInteger(radius)) {
        this.horizontalCornerRadius = radius;
      }
    }
  }, {
    key: "setVerticalCornerRadius",
    value: function setVerticalCornerRadius(radius) {
      if (Number.isInteger(radius)) {
        this.verticalCornerRadius = radius;
      }
    }
  }]);
}();
var MarkupAnnotation = exports.MarkupAnnotation = /*#__PURE__*/function (_Annotation) {
  function MarkupAnnotation(parameters) {
    var _this2;
    _classCallCheck(this, MarkupAnnotation);
    _this2 = _callSuper(this, MarkupAnnotation, [parameters]);
    var dict = parameters.dict;
    if (dict.has('IRT')) {
      var rawIRT = dict.getRaw('IRT');
      _this2.data.inReplyTo = (0, _primitives.isRef)(rawIRT) ? rawIRT.toString() : null;
      var rt = dict.get('RT');
      _this2.data.replyType = (0, _primitives.isName)(rt) ? rt.name : _util.AnnotationReplyType.REPLY;
    }
    if (_this2.data.replyType === _util.AnnotationReplyType.GROUP) {
      var parent = dict.get('IRT');
      _this2.data.title = (0, _util.stringToPDFString)(parent.get('T') || '');
      _this2.setContents(parent.get('Contents'));
      _this2.data.contents = _this2.contents;
      if (!parent.has('CreationDate')) {
        _this2.data.creationDate = null;
      } else {
        _this2.setCreationDate(parent.get('CreationDate'));
        _this2.data.creationDate = _this2.creationDate;
      }
      if (!parent.has('M')) {
        _this2.data.modificationDate = null;
      } else {
        _this2.setModificationDate(parent.get('M'));
        _this2.data.modificationDate = _this2.modificationDate;
      }
      _this2.data.hasPopup = parent.has('Popup');
      if (!parent.has('C')) {
        _this2.data.color = null;
      } else {
        _this2.setColor(parent.getArray('C'));
        _this2.data.color = _this2.color;
      }
    } else {
      _this2.data.title = (0, _util.stringToPDFString)(dict.get('T') || '');
      _this2.setCreationDate(dict.get('CreationDate'));
      _this2.data.creationDate = _this2.creationDate;
      _this2.data.hasPopup = dict.has('Popup');
      if (!dict.has('C')) {
        _this2.data.color = null;
      }
    }
    return _this2;
  }
  _inherits(MarkupAnnotation, _Annotation);
  return _createClass(MarkupAnnotation, [{
    key: "setCreationDate",
    value: function setCreationDate(creationDate) {
      this.creationDate = (0, _util.isString)(creationDate) ? creationDate : null;
    }
  }]);
}(Annotation);
var WidgetAnnotation = /*#__PURE__*/function (_Annotation2) {
  function WidgetAnnotation(params) {
    var _this3;
    _classCallCheck(this, WidgetAnnotation);
    _this3 = _callSuper(this, WidgetAnnotation, [params]);
    var dict = params.dict;
    var data = _this3.data;
    data.annotationType = _util.AnnotationType.WIDGET;
    data.fieldName = _this3._constructFieldName(dict);
    data.fieldValue = (0, _core_utils.getInheritableProperty)({
      dict: dict,
      key: 'V',
      getArray: true
    });
    data.alternativeText = (0, _util.stringToPDFString)(dict.get('TU') || '');
    data.defaultAppearance = (0, _core_utils.getInheritableProperty)({
      dict: dict,
      key: 'DA'
    }) || '';
    var fieldType = (0, _core_utils.getInheritableProperty)({
      dict: dict,
      key: 'FT'
    });
    data.fieldType = (0, _primitives.isName)(fieldType) ? fieldType.name : null;
    _this3.fieldResources = (0, _core_utils.getInheritableProperty)({
      dict: dict,
      key: 'DR'
    }) || _primitives.Dict.empty;
    data.fieldFlags = (0, _core_utils.getInheritableProperty)({
      dict: dict,
      key: 'Ff'
    });
    if (!Number.isInteger(data.fieldFlags) || data.fieldFlags < 0) {
      data.fieldFlags = 0;
    }
    data.readOnly = _this3.hasFieldFlag(_util.AnnotationFieldFlag.READONLY);
    try {
      var actionDict = dict.get('A');
      if ((0, _primitives.isDict)(actionDict)) {
        data.actionDict = {
          S: actionDict.get('S') || '',
          JS: (0, _util.stringToPDFString)(actionDict.get('JS') || '')
        };
      }
    } catch (err) {
      console.warn('Failed to obtain action dictionary', err);
    }
    if (data.fieldType === 'Sig') {
      if (data.fieldValue && data.fieldValue.objId) {
        data.fieldValue = {
          sigId: data.fieldValue.objId
        };
      } else {
        data.fieldValue = null;
      }
    }
    return _this3;
  }
  _inherits(WidgetAnnotation, _Annotation2);
  return _createClass(WidgetAnnotation, [{
    key: "_constructFieldName",
    value: function _constructFieldName(dict) {
      if (!dict.has('T') && !dict.has('Parent')) {
        (0, _util.warn)('Unknown field name, falling back to empty field name.');
        return '';
      }
      if (!dict.has('Parent')) {
        return (0, _util.stringToPDFString)(dict.get('T'));
      }
      var fieldName = [];
      if (dict.has('T')) {
        fieldName.unshift((0, _util.stringToPDFString)(dict.get('T')));
      }
      var loopDict = dict;
      while (loopDict.has('Parent')) {
        loopDict = loopDict.get('Parent');
        if (!(0, _primitives.isDict)(loopDict)) {
          break;
        }
        if (loopDict.has('T')) {
          fieldName.unshift((0, _util.stringToPDFString)(loopDict.get('T')));
        }
      }
      return fieldName.join('.');
    }
  }, {
    key: "hasFieldFlag",
    value: function hasFieldFlag(flag) {
      return !!(this.data.fieldFlags & flag);
    }
  }, {
    key: "getOperatorList",
    value: function getOperatorList(evaluator, task, renderForms, forceRenderSigAnnot) {
      if (renderForms && (this.data.fieldType !== 'Sig' || !forceRenderSigAnnot)) {
        return Promise.resolve(new _operator_list.OperatorList());
      }
      return _superPropGet(WidgetAnnotation, "getOperatorList", this, 3)([evaluator, task, renderForms, forceRenderSigAnnot]);
    }
  }]);
}(Annotation);
var TextWidgetAnnotation = /*#__PURE__*/function (_WidgetAnnotation) {
  function TextWidgetAnnotation(params) {
    var _this4;
    _classCallCheck(this, TextWidgetAnnotation);
    _this4 = _callSuper(this, TextWidgetAnnotation, [params]);
    var dict = params.dict;
    _this4.data.fieldValue = (0, _util.stringToPDFString)(_this4.data.fieldValue || '');
    var alignment = (0, _core_utils.getInheritableProperty)({
      dict: dict,
      key: 'Q'
    });
    if (!Number.isInteger(alignment) || alignment < 0 || alignment > 2) {
      alignment = null;
    }
    _this4.data.textAlignment = alignment;
    var maximumLength = (0, _core_utils.getInheritableProperty)({
      dict: dict,
      key: 'MaxLen'
    });
    if (!Number.isInteger(maximumLength) || maximumLength < 0) {
      maximumLength = null;
    }
    _this4.data.maxLen = maximumLength;
    _this4.data.multiLine = _this4.hasFieldFlag(_util.AnnotationFieldFlag.MULTILINE);
    _this4.data.comb = _this4.hasFieldFlag(_util.AnnotationFieldFlag.COMB) && !_this4.hasFieldFlag(_util.AnnotationFieldFlag.MULTILINE) && !_this4.hasFieldFlag(_util.AnnotationFieldFlag.PASSWORD) && !_this4.hasFieldFlag(_util.AnnotationFieldFlag.FILESELECT) && _this4.data.maxLen !== null;
    return _this4;
  }
  _inherits(TextWidgetAnnotation, _WidgetAnnotation);
  return _createClass(TextWidgetAnnotation, [{
    key: "getOperatorList",
    value: function getOperatorList(evaluator, task, renderForms, forceRenderSigAnnot) {
      if (renderForms || this.appearance) {
        return _superPropGet(TextWidgetAnnotation, "getOperatorList", this, 3)([evaluator, task, renderForms, forceRenderSigAnnot]);
      }
      var operatorList = new _operator_list.OperatorList();
      if (!this.data.defaultAppearance) {
        return Promise.resolve(operatorList);
      }
      var stream = new _stream.Stream((0, _util.stringToBytes)(this.data.defaultAppearance));
      return evaluator.getOperatorList({
        stream: stream,
        task: task,
        resources: this.fieldResources,
        operatorList: operatorList
      }).then(function () {
        return operatorList;
      });
    }
  }]);
}(WidgetAnnotation);
var ButtonWidgetAnnotation = /*#__PURE__*/function (_WidgetAnnotation2) {
  function ButtonWidgetAnnotation(params) {
    var _this5;
    _classCallCheck(this, ButtonWidgetAnnotation);
    _this5 = _callSuper(this, ButtonWidgetAnnotation, [params]);
    _this5.data.checkBox = !_this5.hasFieldFlag(_util.AnnotationFieldFlag.RADIO) && !_this5.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);
    _this5.data.radioButton = _this5.hasFieldFlag(_util.AnnotationFieldFlag.RADIO) && !_this5.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);
    _this5.data.pushButton = _this5.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);
    if (_this5.data.checkBox) {
      _this5._processCheckBox(params);
    } else if (_this5.data.radioButton) {
      _this5._processRadioButton(params);
    } else if (_this5.data.pushButton) {
      _this5._processPushButton(params);
    } else {
      (0, _util.warn)('Invalid field flags for button widget annotation');
    }
    return _this5;
  }
  _inherits(ButtonWidgetAnnotation, _WidgetAnnotation2);
  return _createClass(ButtonWidgetAnnotation, [{
    key: "_processCheckBox",
    value: function _processCheckBox(params) {
      if ((0, _primitives.isName)(this.data.fieldValue)) {
        this.data.fieldValue = this.data.fieldValue.name;
      }
      var customAppearance = params.dict.get('AP');
      if (!(0, _primitives.isDict)(customAppearance)) {
        return;
      }
      var exportValueOptionsDict = customAppearance.get('D');
      if (!(0, _primitives.isDict)(exportValueOptionsDict)) {
        return;
      }
      var exportValues = exportValueOptionsDict.getKeys();
      var hasCorrectOptionCount = exportValues.length === 2;
      if (!hasCorrectOptionCount) {
        return;
      }
      this.data.exportValue = exportValues[0] === 'Off' ? exportValues[1] : exportValues[0];
    }
  }, {
    key: "_processRadioButton",
    value: function _processRadioButton(params) {
      this.data.fieldValue = this.data.buttonValue = null;
      var fieldParent = params.dict.get('Parent');
      if ((0, _primitives.isDict)(fieldParent) && fieldParent.has('V')) {
        var fieldParentValue = fieldParent.get('V');
        if ((0, _primitives.isName)(fieldParentValue)) {
          this.data.fieldValue = fieldParentValue.name;
        }
      }
      var appearanceStates = params.dict.get('AP');
      if (!(0, _primitives.isDict)(appearanceStates)) {
        return;
      }
      var normalAppearanceState = appearanceStates.get('N');
      if (!(0, _primitives.isDict)(normalAppearanceState)) {
        return;
      }
      var _iterator2 = _createForOfIteratorHelper(normalAppearanceState.getKeys()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          if (key !== 'Off') {
            this.data.buttonValue = key;
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_processPushButton",
    value: function _processPushButton(params) {
      if (!params.dict.has('A')) {
        (0, _util.warn)('Push buttons without action dictionaries are not supported');
        return;
      }
      _obj.Catalog.parseDestDictionary({
        destDict: params.dict,
        resultObj: this.data,
        docBaseUrl: params.pdfManager.docBaseUrl
      });
    }
  }]);
}(WidgetAnnotation);
var ChoiceWidgetAnnotation = /*#__PURE__*/function (_WidgetAnnotation3) {
  function ChoiceWidgetAnnotation(params) {
    var _this6;
    _classCallCheck(this, ChoiceWidgetAnnotation);
    _this6 = _callSuper(this, ChoiceWidgetAnnotation, [params]);
    _this6.data.options = [];
    var options = (0, _core_utils.getInheritableProperty)({
      dict: params.dict,
      key: 'Opt'
    });
    if (Array.isArray(options)) {
      var xref = params.xref;
      for (var i = 0, ii = options.length; i < ii; i++) {
        var option = xref.fetchIfRef(options[i]);
        var isOptionArray = Array.isArray(option);
        _this6.data.options[i] = {
          exportValue: isOptionArray ? xref.fetchIfRef(option[0]) : option,
          displayValue: (0, _util.stringToPDFString)(isOptionArray ? xref.fetchIfRef(option[1]) : option)
        };
      }
    }
    if (!Array.isArray(_this6.data.fieldValue)) {
      _this6.data.fieldValue = [_this6.data.fieldValue];
    }
    _this6.data.combo = _this6.hasFieldFlag(_util.AnnotationFieldFlag.COMBO);
    _this6.data.multiSelect = _this6.hasFieldFlag(_util.AnnotationFieldFlag.MULTISELECT);
    return _this6;
  }
  _inherits(ChoiceWidgetAnnotation, _WidgetAnnotation3);
  return _createClass(ChoiceWidgetAnnotation);
}(WidgetAnnotation);
var TextAnnotation = /*#__PURE__*/function (_MarkupAnnotation) {
  function TextAnnotation(parameters) {
    var _this7;
    _classCallCheck(this, TextAnnotation);
    var DEFAULT_ICON_SIZE = 22;
    _this7 = _callSuper(this, TextAnnotation, [parameters]);
    var dict = parameters.dict;
    _this7.data.annotationType = _util.AnnotationType.TEXT;
    if (_this7.data.hasAppearance) {
      _this7.data.name = 'NoIcon';
    } else {
      _this7.data.rect[1] = _this7.data.rect[3] - DEFAULT_ICON_SIZE;
      _this7.data.rect[2] = _this7.data.rect[0] + DEFAULT_ICON_SIZE;
      _this7.data.name = dict.has('Name') ? dict.get('Name').name : 'Note';
    }
    if (dict.has('State')) {
      _this7.data.state = dict.get('State') || null;
      _this7.data.stateModel = dict.get('StateModel') || null;
    } else {
      _this7.data.state = null;
      _this7.data.stateModel = null;
    }
    return _this7;
  }
  _inherits(TextAnnotation, _MarkupAnnotation);
  return _createClass(TextAnnotation);
}(MarkupAnnotation);
var LinkAnnotation = /*#__PURE__*/function (_Annotation3) {
  function LinkAnnotation(params) {
    var _this8;
    _classCallCheck(this, LinkAnnotation);
    _this8 = _callSuper(this, LinkAnnotation, [params]);
    _this8.data.annotationType = _util.AnnotationType.LINK;
    var quadPoints = getQuadPoints(params.dict, _this8.rectangle);
    if (quadPoints) {
      _this8.data.quadPoints = quadPoints;
    }
    _obj.Catalog.parseDestDictionary({
      destDict: params.dict,
      resultObj: _this8.data,
      docBaseUrl: params.pdfManager.docBaseUrl
    });
    return _this8;
  }
  _inherits(LinkAnnotation, _Annotation3);
  return _createClass(LinkAnnotation);
}(Annotation);
var PopupAnnotation = /*#__PURE__*/function (_Annotation4) {
  function PopupAnnotation(parameters) {
    var _this9;
    _classCallCheck(this, PopupAnnotation);
    _this9 = _callSuper(this, PopupAnnotation, [parameters]);
    _this9.data.annotationType = _util.AnnotationType.POPUP;
    var parentItem = parameters.dict.get('Parent');
    if (!parentItem) {
      (0, _util.warn)('Popup annotation has a missing or invalid parent annotation.');
      return _possibleConstructorReturn(_this9);
    }
    var parentSubtype = parentItem.get('Subtype');
    _this9.data.parentType = (0, _primitives.isName)(parentSubtype) ? parentSubtype.name : null;
    var rawParent = parameters.dict.getRaw('Parent');
    _this9.data.parentId = (0, _primitives.isRef)(rawParent) ? rawParent.toString() : null;
    var rt = parentItem.get('RT');
    if ((0, _primitives.isName)(rt, _util.AnnotationReplyType.GROUP)) {
      parentItem = parentItem.get('IRT');
    }
    if (!parentItem.has('M')) {
      _this9.data.modificationDate = null;
    } else {
      _this9.setModificationDate(parentItem.get('M'));
      _this9.data.modificationDate = _this9.modificationDate;
    }
    if (!parentItem.has('C')) {
      _this9.data.color = null;
    } else {
      _this9.setColor(parentItem.getArray('C'));
      _this9.data.color = _this9.color;
    }
    if (!_this9.viewable) {
      var parentFlags = parentItem.get('F');
      if (_this9._isViewable(parentFlags)) {
        _this9.setFlags(parentFlags);
      }
    }
    _this9.data.title = (0, _util.stringToPDFString)(parentItem.get('T') || '');
    _this9.data.contents = (0, _util.stringToPDFString)(parentItem.get('Contents') || '');
    return _this9;
  }
  _inherits(PopupAnnotation, _Annotation4);
  return _createClass(PopupAnnotation);
}(Annotation);
var FreeTextAnnotation = /*#__PURE__*/function (_MarkupAnnotation2) {
  function FreeTextAnnotation(parameters) {
    var _this10;
    _classCallCheck(this, FreeTextAnnotation);
    _this10 = _callSuper(this, FreeTextAnnotation, [parameters]);
    _this10.data.annotationType = _util.AnnotationType.FREETEXT;
    return _this10;
  }
  _inherits(FreeTextAnnotation, _MarkupAnnotation2);
  return _createClass(FreeTextAnnotation);
}(MarkupAnnotation);
var LineAnnotation = /*#__PURE__*/function (_MarkupAnnotation3) {
  function LineAnnotation(parameters) {
    var _this11;
    _classCallCheck(this, LineAnnotation);
    _this11 = _callSuper(this, LineAnnotation, [parameters]);
    _this11.data.annotationType = _util.AnnotationType.LINE;
    _this11.data.lineCoordinates = _util.Util.normalizeRect(parameters.dict.getArray('L'));
    return _this11;
  }
  _inherits(LineAnnotation, _MarkupAnnotation3);
  return _createClass(LineAnnotation);
}(MarkupAnnotation);
var SquareAnnotation = /*#__PURE__*/function (_MarkupAnnotation4) {
  function SquareAnnotation(parameters) {
    var _this12;
    _classCallCheck(this, SquareAnnotation);
    _this12 = _callSuper(this, SquareAnnotation, [parameters]);
    _this12.data.annotationType = _util.AnnotationType.SQUARE;
    return _this12;
  }
  _inherits(SquareAnnotation, _MarkupAnnotation4);
  return _createClass(SquareAnnotation);
}(MarkupAnnotation);
var CircleAnnotation = /*#__PURE__*/function (_MarkupAnnotation5) {
  function CircleAnnotation(parameters) {
    var _this13;
    _classCallCheck(this, CircleAnnotation);
    _this13 = _callSuper(this, CircleAnnotation, [parameters]);
    _this13.data.annotationType = _util.AnnotationType.CIRCLE;
    return _this13;
  }
  _inherits(CircleAnnotation, _MarkupAnnotation5);
  return _createClass(CircleAnnotation);
}(MarkupAnnotation);
var PolylineAnnotation = /*#__PURE__*/function (_MarkupAnnotation6) {
  function PolylineAnnotation(parameters) {
    var _this14;
    _classCallCheck(this, PolylineAnnotation);
    _this14 = _callSuper(this, PolylineAnnotation, [parameters]);
    _this14.data.annotationType = _util.AnnotationType.POLYLINE;
    var rawVertices = parameters.dict.getArray('Vertices');
    _this14.data.vertices = [];
    for (var i = 0, ii = rawVertices.length; i < ii; i += 2) {
      _this14.data.vertices.push({
        x: rawVertices[i],
        y: rawVertices[i + 1]
      });
    }
    return _this14;
  }
  _inherits(PolylineAnnotation, _MarkupAnnotation6);
  return _createClass(PolylineAnnotation);
}(MarkupAnnotation);
var PolygonAnnotation = /*#__PURE__*/function (_PolylineAnnotation) {
  function PolygonAnnotation(parameters) {
    var _this15;
    _classCallCheck(this, PolygonAnnotation);
    _this15 = _callSuper(this, PolygonAnnotation, [parameters]);
    _this15.data.annotationType = _util.AnnotationType.POLYGON;
    return _this15;
  }
  _inherits(PolygonAnnotation, _PolylineAnnotation);
  return _createClass(PolygonAnnotation);
}(PolylineAnnotation);
var CaretAnnotation = /*#__PURE__*/function (_MarkupAnnotation7) {
  function CaretAnnotation(parameters) {
    var _this16;
    _classCallCheck(this, CaretAnnotation);
    _this16 = _callSuper(this, CaretAnnotation, [parameters]);
    _this16.data.annotationType = _util.AnnotationType.CARET;
    return _this16;
  }
  _inherits(CaretAnnotation, _MarkupAnnotation7);
  return _createClass(CaretAnnotation);
}(MarkupAnnotation);
var InkAnnotation = /*#__PURE__*/function (_MarkupAnnotation8) {
  function InkAnnotation(parameters) {
    var _this17;
    _classCallCheck(this, InkAnnotation);
    _this17 = _callSuper(this, InkAnnotation, [parameters]);
    _this17.data.annotationType = _util.AnnotationType.INK;
    var xref = parameters.xref;
    var originalInkLists = parameters.dict.getArray('InkList');
    _this17.data.inkLists = [];
    for (var i = 0, ii = originalInkLists.length; i < ii; ++i) {
      _this17.data.inkLists.push([]);
      for (var j = 0, jj = originalInkLists[i].length; j < jj; j += 2) {
        _this17.data.inkLists[i].push({
          x: xref.fetchIfRef(originalInkLists[i][j]),
          y: xref.fetchIfRef(originalInkLists[i][j + 1])
        });
      }
    }
    return _this17;
  }
  _inherits(InkAnnotation, _MarkupAnnotation8);
  return _createClass(InkAnnotation);
}(MarkupAnnotation);
var HighlightAnnotation = /*#__PURE__*/function (_MarkupAnnotation9) {
  function HighlightAnnotation(parameters) {
    var _this18;
    _classCallCheck(this, HighlightAnnotation);
    _this18 = _callSuper(this, HighlightAnnotation, [parameters]);
    _this18.data.annotationType = _util.AnnotationType.HIGHLIGHT;
    var quadPoints = getQuadPoints(parameters.dict, _this18.rectangle);
    if (quadPoints) {
      _this18.data.quadPoints = quadPoints;
    }
    return _this18;
  }
  _inherits(HighlightAnnotation, _MarkupAnnotation9);
  return _createClass(HighlightAnnotation);
}(MarkupAnnotation);
var UnderlineAnnotation = /*#__PURE__*/function (_MarkupAnnotation10) {
  function UnderlineAnnotation(parameters) {
    var _this19;
    _classCallCheck(this, UnderlineAnnotation);
    _this19 = _callSuper(this, UnderlineAnnotation, [parameters]);
    _this19.data.annotationType = _util.AnnotationType.UNDERLINE;
    var quadPoints = getQuadPoints(parameters.dict, _this19.rectangle);
    if (quadPoints) {
      _this19.data.quadPoints = quadPoints;
    }
    return _this19;
  }
  _inherits(UnderlineAnnotation, _MarkupAnnotation10);
  return _createClass(UnderlineAnnotation);
}(MarkupAnnotation);
var SquigglyAnnotation = /*#__PURE__*/function (_MarkupAnnotation11) {
  function SquigglyAnnotation(parameters) {
    var _this20;
    _classCallCheck(this, SquigglyAnnotation);
    _this20 = _callSuper(this, SquigglyAnnotation, [parameters]);
    _this20.data.annotationType = _util.AnnotationType.SQUIGGLY;
    var quadPoints = getQuadPoints(parameters.dict, _this20.rectangle);
    if (quadPoints) {
      _this20.data.quadPoints = quadPoints;
    }
    return _this20;
  }
  _inherits(SquigglyAnnotation, _MarkupAnnotation11);
  return _createClass(SquigglyAnnotation);
}(MarkupAnnotation);
var StrikeOutAnnotation = /*#__PURE__*/function (_MarkupAnnotation12) {
  function StrikeOutAnnotation(parameters) {
    var _this21;
    _classCallCheck(this, StrikeOutAnnotation);
    _this21 = _callSuper(this, StrikeOutAnnotation, [parameters]);
    _this21.data.annotationType = _util.AnnotationType.STRIKEOUT;
    var quadPoints = getQuadPoints(parameters.dict, _this21.rectangle);
    if (quadPoints) {
      _this21.data.quadPoints = quadPoints;
    }
    return _this21;
  }
  _inherits(StrikeOutAnnotation, _MarkupAnnotation12);
  return _createClass(StrikeOutAnnotation);
}(MarkupAnnotation);
var StampAnnotation = /*#__PURE__*/function (_MarkupAnnotation13) {
  function StampAnnotation(parameters) {
    var _this22;
    _classCallCheck(this, StampAnnotation);
    _this22 = _callSuper(this, StampAnnotation, [parameters]);
    _this22.data.annotationType = _util.AnnotationType.STAMP;
    return _this22;
  }
  _inherits(StampAnnotation, _MarkupAnnotation13);
  return _createClass(StampAnnotation);
}(MarkupAnnotation);
var FileAttachmentAnnotation = /*#__PURE__*/function (_MarkupAnnotation14) {
  function FileAttachmentAnnotation(parameters) {
    var _this23;
    _classCallCheck(this, FileAttachmentAnnotation);
    _this23 = _callSuper(this, FileAttachmentAnnotation, [parameters]);
    var file = new _obj.FileSpec(parameters.dict.get('FS'), parameters.xref);
    _this23.data.annotationType = _util.AnnotationType.FILEATTACHMENT;
    _this23.data.file = file.serializable;
    return _this23;
  }
  _inherits(FileAttachmentAnnotation, _MarkupAnnotation14);
  return _createClass(FileAttachmentAnnotation);
}(MarkupAnnotation);