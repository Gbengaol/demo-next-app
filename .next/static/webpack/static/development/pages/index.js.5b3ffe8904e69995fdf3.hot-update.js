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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");


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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])("https://jsonplaceholder.typicode.com/posts", _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["fetcher"]),
      data = _useSWR.data,
      error = _useSWR.error;

  console.log(data);

  var deleteItem = function deleteItem(item) {
    var _data, newResult;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteItem$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Axios["delete"]("https://jsonplaceholder.typicode.com/users/".concat(item)));

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

  return __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, state.res.map(function (each) {
    return __jsx("div", {
      className: "card-header d-flex justify-content-between m-2",
      key: each.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, each.title), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-danger mr-2",
      onClick: function onClick() {
        return deleteItem(each.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, " ", "X", " "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/[id]",
      as: "/".concat(each.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "View")))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (prices);

/***/ }),

/***/ "./utils/fetcher.js":
/*!**************************!*\
  !*** ./utils/fetcher.js ***!
  \**************************/
/*! exports provided: fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcher", function() { return fetcher; });
var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

/***/ })

})
//# sourceMappingURL=index.js.5b3ffe8904e69995fdf3.hot-update.js.map