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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv(highlighted, setHighlighted, inputRef, handleChange, mediaPreview, setMediaPreview, setMedia) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
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
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : "",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
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
      lineNumber: 31,
      columnNumber: 21
    }
  }), "Drag n Drop or Click To Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return inputRef.surrent.click();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsInN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FDRUMsV0FERixFQUVFQyxjQUZGLEVBR0VDLFFBSEYsRUFJRUMsWUFKRixFQUtFQyxZQUxGLEVBTUVDLGVBTkYsRUFPRUMsUUFQRixFQVFFO0FBQ0EsU0FDRSxxRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVMsZUFBVyxNQUFwQjtBQUFxQixTQUFLLE1BQTFCO0FBQTJCLGFBQVMsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFVBQU0sRUFBQyxTQUhUO0FBSUUsWUFBUSxFQUFFSixZQUpaO0FBS0UsUUFBSSxFQUFDLE9BTFA7QUFNRSxPQUFHLEVBQUVELFFBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxZQUFZLEtBQUssSUFBakIsR0FDQyxxRUFDRSxNQUFDLHNEQUFEO0FBQVMsU0FBSyxFQUFFSixXQUFXLEdBQUcsT0FBSCxHQUFhLEVBQXhDO0FBQTRDLGVBQVcsTUFBdkQ7QUFBd0QsU0FBSyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUNFLFFBQUksRUFBQyxvQkFEUDtBQUVFLFNBQUssRUFBRTtBQUFFUSxZQUFNLEVBQUU7QUFBVixLQUZUO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTU4sUUFBUSxDQUFDTyxPQUFULENBQWlCQyxLQUFqQixFQUFOO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYseUNBREYsQ0FERixDQURELEdBY0MscUVBQ0UsTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQ0UsT0FBRyxFQUFFTixZQURQO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxZQUFRLE1BSFY7QUFJRSxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFO0FBQVYsS0FKVDtBQUtFLFdBQU8sRUFBRTtBQUFBLGFBQU1OLFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQkQsS0FBakIsRUFBTjtBQUFBLEtBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FmSixDQVZGLENBREYsQ0FERixDQURGO0FBNkNEOztLQXREUVgsWTtBQXdEVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuNzgyOWMxZDU2OTU1YzJjZDU4YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCwgSW1hZ2UsIEljb24sIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KFxyXG4gIGhpZ2hsaWdodGVkLFxyXG4gIHNldEhpZ2hsaWdodGVkLFxyXG4gIGlucHV0UmVmLFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBtZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhXHJcbikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge21lZGlhUHJldmlldyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9e2hpZ2hsaWdodGVkID8gXCJncmVlblwiIDogXCJcIn0gcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUgaW1hZ2Ugb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayBUbyBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuc3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=