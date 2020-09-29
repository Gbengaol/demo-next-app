webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./custom-hooks/usePosts.js":
/*!**********************************!*\
  !*** ./custom-hooks/usePosts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useData; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _require = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js"),
    fetcher = _require.fetcher;


function useData(url) {
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
//# sourceMappingURL=index.js.1a727b8e522ca7932338.hot-update.js.map