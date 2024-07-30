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
exports.ChunkedStreamManager = exports.ChunkedStream = void 0;
var _util = require("../shared/util");
var _core_utils = require("./core_utils");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ChunkedStream = exports.ChunkedStream = /*#__PURE__*/function () {
  function ChunkedStream(length, chunkSize, manager) {
    _classCallCheck(this, ChunkedStream);
    this.bytes = new Uint8Array(length);
    this.start = 0;
    this.pos = 0;
    this.end = length;
    this.chunkSize = chunkSize;
    this.loadedChunks = [];
    this.numChunksLoaded = 0;
    this.numChunks = Math.ceil(length / chunkSize);
    this.manager = manager;
    this.progressiveDataLength = 0;
    this.lastSuccessfulEnsureByteChunk = -1;
  }
  return _createClass(ChunkedStream, [{
    key: "getMissingChunks",
    value: function getMissingChunks() {
      var chunks = [];
      for (var chunk = 0, n = this.numChunks; chunk < n; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          chunks.push(chunk);
        }
      }
      return chunks;
    }
  }, {
    key: "getBaseStreams",
    value: function getBaseStreams() {
      return [this];
    }
  }, {
    key: "allChunksLoaded",
    value: function allChunksLoaded() {
      return this.numChunksLoaded === this.numChunks;
    }
  }, {
    key: "onReceiveData",
    value: function onReceiveData(begin, chunk) {
      var chunkSize = this.chunkSize;
      if (begin % chunkSize !== 0) {
        throw new Error("Bad begin offset: ".concat(begin));
      }
      var end = begin + chunk.byteLength;
      if (end % chunkSize !== 0 && end !== this.bytes.length) {
        throw new Error("Bad end offset: ".concat(end));
      }
      this.bytes.set(new Uint8Array(chunk), begin);
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      for (var curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    }
  }, {
    key: "onReceiveProgressiveData",
    value: function onReceiveProgressiveData(data) {
      var position = this.progressiveDataLength;
      var beginChunk = Math.floor(position / this.chunkSize);
      this.bytes.set(new Uint8Array(data), position);
      position += data.byteLength;
      this.progressiveDataLength = position;
      var endChunk = position >= this.end ? this.numChunks : Math.floor(position / this.chunkSize);
      for (var curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    }
  }, {
    key: "ensureByte",
    value: function ensureByte(pos) {
      if (pos < this.progressiveDataLength) {
        return;
      }
      var chunk = Math.floor(pos / this.chunkSize);
      if (chunk === this.lastSuccessfulEnsureByteChunk) {
        return;
      }
      if (!this.loadedChunks[chunk]) {
        throw new _core_utils.MissingDataException(pos, pos + 1);
      }
      this.lastSuccessfulEnsureByteChunk = chunk;
    }
  }, {
    key: "ensureRange",
    value: function ensureRange(begin, end) {
      if (begin >= end) {
        return;
      }
      if (end <= this.progressiveDataLength) {
        return;
      }
      var chunkSize = this.chunkSize;
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          throw new _core_utils.MissingDataException(begin, end);
        }
      }
    }
  }, {
    key: "nextEmptyChunk",
    value: function nextEmptyChunk(beginChunk) {
      var numChunks = this.numChunks;
      for (var i = 0; i < numChunks; ++i) {
        var chunk = (beginChunk + i) % numChunks;
        if (!this.loadedChunks[chunk]) {
          return chunk;
        }
      }
      return null;
    }
  }, {
    key: "hasChunk",
    value: function hasChunk(chunk) {
      return !!this.loadedChunks[chunk];
    }
  }, {
    key: "length",
    get: function get() {
      return this.end - this.start;
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return this.length === 0;
    }
  }, {
    key: "getByte",
    value: function getByte() {
      var pos = this.pos;
      if (pos >= this.end) {
        return -1;
      }
      this.ensureByte(pos);
      return this.bytes[this.pos++];
    }
  }, {
    key: "getUint16",
    value: function getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    }
  }, {
    key: "getInt32",
    value: function getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    }
  }, {
    key: "getBytes",
    value: function getBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var bytes = this.bytes;
      var pos = this.pos;
      var strEnd = this.end;
      if (!length) {
        this.ensureRange(pos, strEnd);
        var _subarray = bytes.subarray(pos, strEnd);
        return forceClamped ? new Uint8ClampedArray(_subarray) : _subarray;
      }
      var end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.ensureRange(pos, end);
      this.pos = end;
      var subarray = bytes.subarray(pos, end);
      return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
    }
  }, {
    key: "peekByte",
    value: function peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    }
  }, {
    key: "peekBytes",
    value: function peekBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var bytes = this.getBytes(length, forceClamped);
      this.pos -= bytes.length;
      return bytes;
    }
  }, {
    key: "getByteRange",
    value: function getByteRange(begin, end) {
      this.ensureRange(begin, end);
      return this.bytes.subarray(begin, end);
    }
  }, {
    key: "skip",
    value: function skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.pos = this.start;
    }
  }, {
    key: "moveStart",
    value: function moveStart() {
      this.start = this.pos;
    }
  }, {
    key: "makeSubStream",
    value: function makeSubStream(start, length, dict) {
      if (length) {
        this.ensureRange(start, start + length);
      } else {
        this.ensureByte(start);
      }
      function ChunkedStreamSubstream() {}
      ChunkedStreamSubstream.prototype = Object.create(this);
      ChunkedStreamSubstream.prototype.getMissingChunks = function () {
        var chunkSize = this.chunkSize;
        var beginChunk = Math.floor(this.start / chunkSize);
        var endChunk = Math.floor((this.end - 1) / chunkSize) + 1;
        var missingChunks = [];
        for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
          if (!this.loadedChunks[chunk]) {
            missingChunks.push(chunk);
          }
        }
        return missingChunks;
      };
      var subStream = new ChunkedStreamSubstream();
      subStream.pos = subStream.start = start;
      subStream.end = start + length || this.end;
      subStream.dict = dict;
      return subStream;
    }
  }]);
}();
var ChunkedStreamManager = exports.ChunkedStreamManager = /*#__PURE__*/function () {
  function ChunkedStreamManager(pdfNetworkStream, args) {
    _classCallCheck(this, ChunkedStreamManager);
    this.length = args.length;
    this.chunkSize = args.rangeChunkSize;
    this.stream = new ChunkedStream(this.length, this.chunkSize, this);
    this.pdfNetworkStream = pdfNetworkStream;
    this.disableAutoFetch = args.disableAutoFetch;
    this.msgHandler = args.msgHandler;
    this.currRequestId = 0;
    this.chunksNeededByRequest = Object.create(null);
    this.requestsByChunk = Object.create(null);
    this.promisesByRequest = Object.create(null);
    this.progressiveDataLength = 0;
    this.aborted = false;
    this._loadedStreamCapability = (0, _util.createPromiseCapability)();
  }
  return _createClass(ChunkedStreamManager, [{
    key: "onLoadedStream",
    value: function onLoadedStream() {
      return this._loadedStreamCapability.promise;
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(begin, end) {
      var _this = this;
      var rangeReader = this.pdfNetworkStream.getRangeReader(begin, end);
      if (!rangeReader.isStreamingSupported) {
        rangeReader.onProgress = this.onProgress.bind(this);
      }
      var chunks = [],
        loaded = 0;
      var promise = new Promise(function (resolve, reject) {
        var _readChunk = function readChunk(chunk) {
          try {
            if (!chunk.done) {
              var data = chunk.value;
              chunks.push(data);
              loaded += (0, _util.arrayByteLength)(data);
              if (rangeReader.isStreamingSupported) {
                _this.onProgress({
                  loaded: loaded
                });
              }
              rangeReader.read().then(_readChunk, reject);
              return;
            }
            var chunkData = (0, _util.arraysToBytes)(chunks);
            chunks = null;
            resolve(chunkData);
          } catch (e) {
            reject(e);
          }
        };
        rangeReader.read().then(_readChunk, reject);
      });
      promise.then(function (data) {
        if (_this.aborted) {
          return;
        }
        _this.onReceiveData({
          chunk: data,
          begin: begin
        });
      });
    }
  }, {
    key: "requestAllChunks",
    value: function requestAllChunks() {
      var missingChunks = this.stream.getMissingChunks();
      this._requestChunks(missingChunks);
      return this._loadedStreamCapability.promise;
    }
  }, {
    key: "_requestChunks",
    value: function _requestChunks(chunks) {
      var requestId = this.currRequestId++;
      var chunksNeeded = Object.create(null);
      this.chunksNeededByRequest[requestId] = chunksNeeded;
      var _iterator = _createForOfIteratorHelper(chunks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _chunk = _step.value;
          if (!this.stream.hasChunk(_chunk)) {
            chunksNeeded[_chunk] = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if ((0, _util.isEmptyObj)(chunksNeeded)) {
        return Promise.resolve();
      }
      var capability = (0, _util.createPromiseCapability)();
      this.promisesByRequest[requestId] = capability;
      var chunksToRequest = [];
      for (var chunk in chunksNeeded) {
        chunk = chunk | 0;
        if (!(chunk in this.requestsByChunk)) {
          this.requestsByChunk[chunk] = [];
          chunksToRequest.push(chunk);
        }
        this.requestsByChunk[chunk].push(requestId);
      }
      if (!chunksToRequest.length) {
        return capability.promise;
      }
      var groupedChunksToRequest = this.groupChunks(chunksToRequest);
      var _iterator2 = _createForOfIteratorHelper(groupedChunksToRequest),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var groupedChunk = _step2.value;
          var begin = groupedChunk.beginChunk * this.chunkSize;
          var end = Math.min(groupedChunk.endChunk * this.chunkSize, this.length);
          this.sendRequest(begin, end);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return capability.promise;
    }
  }, {
    key: "getStream",
    value: function getStream() {
      return this.stream;
    }
  }, {
    key: "requestRange",
    value: function requestRange(begin, end) {
      end = Math.min(end, this.length);
      var beginChunk = this.getBeginChunk(begin);
      var endChunk = this.getEndChunk(end);
      var chunks = [];
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        chunks.push(chunk);
      }
      return this._requestChunks(chunks);
    }
  }, {
    key: "requestRanges",
    value: function requestRanges() {
      var ranges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var chunksToRequest = [];
      var _iterator3 = _createForOfIteratorHelper(ranges),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var range = _step3.value;
          var beginChunk = this.getBeginChunk(range.begin);
          var endChunk = this.getEndChunk(range.end);
          for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
            if (!chunksToRequest.includes(chunk)) {
              chunksToRequest.push(chunk);
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      chunksToRequest.sort(function (a, b) {
        return a - b;
      });
      return this._requestChunks(chunksToRequest);
    }
  }, {
    key: "groupChunks",
    value: function groupChunks(chunks) {
      var groupedChunks = [];
      var beginChunk = -1;
      var prevChunk = -1;
      for (var i = 0, ii = chunks.length; i < ii; ++i) {
        var chunk = chunks[i];
        if (beginChunk < 0) {
          beginChunk = chunk;
        }
        if (prevChunk >= 0 && prevChunk + 1 !== chunk) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: prevChunk + 1
          });
          beginChunk = chunk;
        }
        if (i + 1 === chunks.length) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: chunk + 1
          });
        }
        prevChunk = chunk;
      }
      return groupedChunks;
    }
  }, {
    key: "onProgress",
    value: function onProgress(args) {
      this.msgHandler.send('DocProgress', {
        loaded: this.stream.numChunksLoaded * this.chunkSize + args.loaded,
        total: this.length
      });
    }
  }, {
    key: "onReceiveData",
    value: function onReceiveData(args) {
      var chunk = args.chunk;
      var isProgressive = args.begin === undefined;
      var begin = isProgressive ? this.progressiveDataLength : args.begin;
      var end = begin + chunk.byteLength;
      var beginChunk = Math.floor(begin / this.chunkSize);
      var endChunk = end < this.length ? Math.floor(end / this.chunkSize) : Math.ceil(end / this.chunkSize);
      if (isProgressive) {
        this.stream.onReceiveProgressiveData(chunk);
        this.progressiveDataLength = end;
      } else {
        this.stream.onReceiveData(begin, chunk);
      }
      if (this.stream.allChunksLoaded()) {
        this._loadedStreamCapability.resolve(this.stream);
      }
      var loadedRequests = [];
      for (var _chunk2 = beginChunk; _chunk2 < endChunk; ++_chunk2) {
        var requestIds = this.requestsByChunk[_chunk2] || [];
        delete this.requestsByChunk[_chunk2];
        var _iterator4 = _createForOfIteratorHelper(requestIds),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var requestId = _step4.value;
            var chunksNeeded = this.chunksNeededByRequest[requestId];
            if (_chunk2 in chunksNeeded) {
              delete chunksNeeded[_chunk2];
            }
            if (!(0, _util.isEmptyObj)(chunksNeeded)) {
              continue;
            }
            loadedRequests.push(requestId);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (!this.disableAutoFetch && (0, _util.isEmptyObj)(this.requestsByChunk)) {
        var nextEmptyChunk;
        if (this.stream.numChunksLoaded === 1) {
          var lastChunk = this.stream.numChunks - 1;
          if (!this.stream.hasChunk(lastChunk)) {
            nextEmptyChunk = lastChunk;
          }
        } else {
          nextEmptyChunk = this.stream.nextEmptyChunk(endChunk);
        }
        if (Number.isInteger(nextEmptyChunk)) {
          this._requestChunks([nextEmptyChunk]);
        }
      }
      for (var _i = 0, _loadedRequests = loadedRequests; _i < _loadedRequests.length; _i++) {
        var _requestId = _loadedRequests[_i];
        var capability = this.promisesByRequest[_requestId];
        delete this.promisesByRequest[_requestId];
        capability.resolve();
      }
      this.msgHandler.send('DocProgress', {
        loaded: this.stream.numChunksLoaded * this.chunkSize,
        total: this.length
      });
    }
  }, {
    key: "onError",
    value: function onError(err) {
      this._loadedStreamCapability.reject(err);
    }
  }, {
    key: "getBeginChunk",
    value: function getBeginChunk(begin) {
      return Math.floor(begin / this.chunkSize);
    }
  }, {
    key: "getEndChunk",
    value: function getEndChunk(end) {
      return Math.floor((end - 1) / this.chunkSize) + 1;
    }
  }, {
    key: "abort",
    value: function abort() {
      this.aborted = true;
      if (this.pdfNetworkStream) {
        this.pdfNetworkStream.cancelAllRequests('abort');
      }
      for (var requestId in this.promisesByRequest) {
        this.promisesByRequest[requestId].reject(new Error('Request was aborted'));
      }
    }
  }]);
}();