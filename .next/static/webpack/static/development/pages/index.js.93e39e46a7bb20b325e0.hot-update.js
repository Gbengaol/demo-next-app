webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./custom-hooks/usePosts.js":
/*!**********************************!*\
  !*** ./custom-hooks/usePosts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePosts; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _require = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js"),
    fetcher = _require.fetcher;


function usePosts(url) {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(url, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

/***/ })

})
//# sourceMappingURL=index.js.93e39e46a7bb20b325e0.hot-update.js.map