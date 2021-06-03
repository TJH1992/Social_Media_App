self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css */ "./node_modules/semantic-ui-css/semantic.js");
/* harmony import */ var semantic_ui_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv(highlighted, setHighlighted, inputRef, handleChange, mediaPreview, setMediaPreview, setMedia) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_css__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_css__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_css__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : "",
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_css__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_css__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return inputRef.current.click();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)))));
}

_c = ImageDropDiv;
/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

var _c;

$RefreshReg$(_c, "ImageDropDiv");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FDRUMsV0FERixFQUVFQyxjQUZGLEVBR0VDLFFBSEYsRUFJRUMsWUFKRixFQUtFQyxZQUxGLEVBTUVDLGVBTkYsRUFPRUMsUUFQRixFQVFFO0FBQ0EsU0FDRSxxRUFDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQVMsZUFBVyxNQUFwQjtBQUFxQixTQUFLLE1BQTFCO0FBQTJCLGFBQVMsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFVBQU0sRUFBQyxTQUhUO0FBSUUsWUFBUSxFQUFFSixZQUpaO0FBS0UsUUFBSSxFQUFDLE9BTFA7QUFNRSxPQUFHLEVBQUVELFFBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxZQUFZLEtBQUssSUFBakIsR0FDQyxxRUFDRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFFSixXQUFXLEdBQUcsT0FBSCxHQUFhLEVBRGpDO0FBRUUsZUFBVyxNQUZiO0FBR0UsU0FBSyxNQUhQO0FBSUUsYUFBUyxNQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLG1EQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQ0UsUUFBSSxFQUFDLG9CQURQO0FBRUUsU0FBSyxFQUFFO0FBQUVRLFlBQU0sRUFBRTtBQUFWLEtBRlQ7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNTixRQUFRLENBQUNPLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQU47QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREYsQ0FERCxHQWtCQyxvRUFuQkosQ0FWRixDQURGLENBREYsQ0FERjtBQXVDRDs7S0FoRFFYLFk7QUFrRFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjY2NzhiNDYzOWQ0Mzc4MDI3YWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBJbWFnZURyb3BEaXYoXHJcbiAgaGlnaGxpZ2h0ZWQsXHJcbiAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgaW5wdXRSZWYsXHJcbiAgaGFuZGxlQ2hhbmdlLFxyXG4gIG1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFcclxuKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgIDxTZWdtZW50IHBsYWNlaG9sZGVyIGJhc2ljIHNlY29uZGFyeT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwibWVkaWFcIlxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17aGlnaGxpZ2h0ZWQgPyBcImdyZWVuXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICBiYXNpY1xyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlciBpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=