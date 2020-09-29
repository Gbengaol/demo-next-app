webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/prices.js":
/*!******************************!*\
  !*** ./components/prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _custom_hooks_useData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-hooks/useData */ "./custom-hooks/useData.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\golufeyimi\\Desktop\\Gbenga\\Next Applications\\nextapp\\components\\prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var prices = function prices() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    res: []
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useData = Object(_custom_hooks_useData__WEBPACK_IMPORTED_MODULE_4__["default"])("https://jsonplaceholder.typicode.com/posts"),
      data = _useData.data,
      isError = _useData.isError;

  var deleteItem = function deleteItem(item) {
    var _data, newResult;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteItem$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a["delete"]("https://jsonplaceholder.typicode.com/users/".concat(item)));

          case 3:
            _data = _context.sent;

            if (!(_data.status === 200)) {
              _context.next = 8;
              break;
            }

            newResult = state.res.filter(function (res) {
              return res.id !== item;
            });
            setState(_objectSpread({}, state, {
              res: newResult
            }));
            return _context.abrupt("return");

          case 8:
            return _context.abrupt("return", alert("Unable to delete"));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            alert(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]], Promise);
  };

  if (!state.res.length && data) {
    setState(_objectSpread({}, state, {
      res: data
    }));
  }

  if (isError) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "failed to load");
  if (!data) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "loading...");
  return __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, state.res.map(function (each) {
    return __jsx("div", {
      className: "card-header d-flex justify-content-between m-2",
      key: each.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, each.title), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-danger mr-2",
      onClick: function onClick() {
        return deleteItem(each.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, " ", "X", " "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/[id]",
      as: "/".concat(each.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "View")))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (prices);

/***/ })

})
//# sourceMappingURL=index.js.f5d9c0f3920149581d7f.hot-update.js.map