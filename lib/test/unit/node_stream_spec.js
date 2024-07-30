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

var _util = require("../../shared/util");
var _is_node = _interopRequireDefault(require("../../shared/is_node"));
var _node_stream = require("../../display/node_stream");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
(0, _util.assert)((0, _is_node["default"])());
var path = require('path');
var url = require('url');
var http = require('http');
var fs = require('fs');
describe('node_stream', function () {
  var server = null;
  var port = null;
  var pdf = url.parse(encodeURI('file://' + path.join(process.cwd(), './test/pdfs/tracemonkey.pdf'))).href;
  var pdfLength = 1016315;
  beforeAll(function (done) {
    server = http.createServer(function (request, response) {
      var filePath = process.cwd() + '/test/pdfs' + request.url;
      fs.lstat(filePath, function (error, stat) {
        if (error) {
          response.writeHead(404);
          response.end("File ".concat(request.url, " not found!"));
          return;
        }
        if (!request.headers['range']) {
          var contentLength = stat.size;
          var stream = fs.createReadStream(filePath);
          response.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Length': contentLength,
            'Accept-Ranges': 'bytes'
          });
          stream.pipe(response);
        } else {
          var _request$headers$rang = request.headers['range'].split('=')[1].split('-').map(function (x) {
              return Number(x);
            }),
            _request$headers$rang2 = _slicedToArray(_request$headers$rang, 2),
            start = _request$headers$rang2[0],
            end = _request$headers$rang2[1];
          var _stream = fs.createReadStream(filePath, {
            start: start,
            end: end
          });
          response.writeHead(206, {
            'Content-Type': 'application/pdf'
          });
          _stream.pipe(response);
        }
      });
    }).listen(0);
    port = server.address().port;
    done();
  });
  afterAll(function (done) {
    server.close();
    done();
  });
  it('read both http(s) and filesystem pdf files', function (done) {
    var stream1 = new _node_stream.PDFNodeStream({
      url: "http://127.0.0.1:".concat(port, "/tracemonkey.pdf"),
      rangeChunkSize: 65536,
      disableStream: true,
      disableRange: true
    });
    var stream2 = new _node_stream.PDFNodeStream({
      url: pdf,
      rangeChunkSize: 65536,
      disableStream: true,
      disableRange: true
    });
    var fullReader1 = stream1.getFullReader();
    var fullReader2 = stream2.getFullReader();
    var isStreamingSupported1, isRangeSupported1;
    var promise1 = fullReader1.headersReady.then(function () {
      isStreamingSupported1 = fullReader1.isStreamingSupported;
      isRangeSupported1 = fullReader1.isRangeSupported;
    });
    var isStreamingSupported2, isRangeSupported2;
    var promise2 = fullReader2.headersReady.then(function () {
      isStreamingSupported2 = fullReader2.isStreamingSupported;
      isRangeSupported2 = fullReader2.isRangeSupported;
    });
    var len1 = 0,
      len2 = 0;
    var _read = function read1() {
      return fullReader1.read().then(function (result) {
        if (result.done) {
          return undefined;
        }
        len1 += result.value.byteLength;
        return _read();
      });
    };
    var _read2 = function read2() {
      return fullReader2.read().then(function (result) {
        if (result.done) {
          return undefined;
        }
        len2 += result.value.byteLength;
        return _read2();
      });
    };
    var readPromise = Promise.all([_read(), _read2(), promise1, promise2]);
    readPromise.then(function (result) {
      expect(isStreamingSupported1).toEqual(false);
      expect(isRangeSupported1).toEqual(false);
      expect(isStreamingSupported2).toEqual(false);
      expect(isRangeSupported2).toEqual(false);
      expect(len1).toEqual(pdfLength);
      expect(len1).toEqual(len2);
      done();
    })["catch"](function (reason) {
      done.fail(reason);
    });
  });
  it('read custom ranges for both http(s) and filesystem urls', function (done) {
    var rangeSize = 32768;
    var stream1 = new _node_stream.PDFNodeStream({
      url: "http://127.0.0.1:".concat(port, "/tracemonkey.pdf"),
      length: pdfLength,
      rangeChunkSize: rangeSize,
      disableStream: true,
      disableRange: false
    });
    var stream2 = new _node_stream.PDFNodeStream({
      url: pdf,
      length: pdfLength,
      rangeChunkSize: rangeSize,
      disableStream: true,
      disableRange: false
    });
    var fullReader1 = stream1.getFullReader();
    var fullReader2 = stream2.getFullReader();
    var isStreamingSupported1, isRangeSupported1, fullReaderCancelled1;
    var isStreamingSupported2, isRangeSupported2, fullReaderCancelled2;
    var promise1 = fullReader1.headersReady.then(function () {
      isStreamingSupported1 = fullReader1.isStreamingSupported;
      isRangeSupported1 = fullReader1.isRangeSupported;
      fullReader1.cancel('Don\'t need full reader');
      fullReaderCancelled1 = true;
    });
    var promise2 = fullReader2.headersReady.then(function () {
      isStreamingSupported2 = fullReader2.isStreamingSupported;
      isRangeSupported2 = fullReader2.isRangeSupported;
      fullReader2.cancel('Don\'t need full reader');
      fullReaderCancelled2 = true;
    });
    var tailSize = pdfLength % rangeSize || rangeSize;
    var range11Reader = stream1.getRangeReader(pdfLength - tailSize - rangeSize, pdfLength - tailSize);
    var range12Reader = stream1.getRangeReader(pdfLength - tailSize, pdfLength);
    var range21Reader = stream2.getRangeReader(pdfLength - tailSize - rangeSize, pdfLength - tailSize);
    var range22Reader = stream2.getRangeReader(pdfLength - tailSize, pdfLength);
    var result11 = {
        value: 0
      },
      result12 = {
        value: 0
      };
    var result21 = {
        value: 0
      },
      result22 = {
        value: 0
      };
    var _read3 = function read(reader, lenResult) {
      return reader.read().then(function (result) {
        if (result.done) {
          return undefined;
        }
        lenResult.value += result.value.byteLength;
        return _read3(reader, lenResult);
      });
    };
    var readPromises = Promise.all([_read3(range11Reader, result11), _read3(range12Reader, result12), _read3(range21Reader, result21), _read3(range22Reader, result22), promise1, promise2]);
    readPromises.then(function () {
      expect(result11.value).toEqual(rangeSize);
      expect(result12.value).toEqual(tailSize);
      expect(result21.value).toEqual(rangeSize);
      expect(result22.value).toEqual(tailSize);
      expect(isStreamingSupported1).toEqual(false);
      expect(isRangeSupported1).toEqual(true);
      expect(fullReaderCancelled1).toEqual(true);
      expect(isStreamingSupported2).toEqual(false);
      expect(isRangeSupported2).toEqual(true);
      expect(fullReaderCancelled2).toEqual(true);
      done();
    })["catch"](function (reason) {
      done.fail(reason);
    });
  });
});