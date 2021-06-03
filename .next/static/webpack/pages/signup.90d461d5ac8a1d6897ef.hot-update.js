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
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      setHighlighted(true);
      console.log(e.dataTransfer.files);
    },
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
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 21
    }
  }), "Drag n Drop or Click To Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsInN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FDRUMsV0FERixFQUVFQyxjQUZGLEVBR0VDLFFBSEYsRUFJRUMsWUFKRixFQUtFQyxZQUxGLEVBTUVDLGVBTkYsRUFPRUMsUUFQRixFQVFFO0FBQ0EsU0FDRSxxRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVMsZUFBVyxNQUFwQjtBQUFxQixTQUFLLE1BQTFCO0FBQTJCLGFBQVMsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFVBQU0sRUFBQyxTQUhUO0FBSUUsWUFBUSxFQUFFSixZQUpaO0FBS0UsUUFBSSxFQUFDLE9BTFA7QUFNRSxPQUFHLEVBQUVELFFBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFDRSxjQUFVLEVBQUUsb0JBQUNNLENBQUQsRUFBTztBQUNqQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0QsS0FKSDtBQUtFLGVBQVcsRUFBRSxxQkFBQ08sQ0FBRCxFQUFPO0FBQ2xCQSxPQUFDLENBQUNDLGNBQUY7QUFDQVIsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxLQVJIO0FBU0UsVUFBTSxFQUFFLGdCQUFDTyxDQUFELEVBQU87QUFDYkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFDLENBQUNJLFlBQUYsQ0FBZUMsS0FBM0I7QUFDRCxLQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlR1QsWUFBWSxLQUFLLElBQWpCLEdBQ0MscUVBQ0UsTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBRUosV0FBVyxHQUFHLE9BQUgsR0FBYSxFQUF4QztBQUE0QyxlQUFXLE1BQXZEO0FBQXdELFNBQUssTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSxRQUFJLEVBQUMsb0JBRFA7QUFFRSxTQUFLLEVBQUU7QUFBRWMsWUFBTSxFQUFFO0FBQVYsS0FGVDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1aLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkMsS0FBakIsRUFBTjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLHlDQURGLENBREYsQ0FERCxHQWNDLHFFQUNFLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLE9BQUcsRUFBRVosWUFEUDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsWUFBUSxNQUhWO0FBSUUsU0FBSyxFQUFFO0FBQUVVLFlBQU0sRUFBRTtBQUFWLEtBSlQ7QUFLRSxXQUFPLEVBQUU7QUFBQSxhQUFNWixRQUFRLENBQUNlLE9BQVQsQ0FBaUJELEtBQWpCLEVBQU47QUFBQSxLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBN0JKLENBVkYsQ0FERixDQURGLENBREY7QUEyREQ7O0tBcEVRakIsWTtBQXNFVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuOTBkNDYxZDVhYzhhMWQ2ODk3ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCwgSW1hZ2UsIEljb24sIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KFxyXG4gIGhpZ2hsaWdodGVkLFxyXG4gIHNldEhpZ2hsaWdodGVkLFxyXG4gIGlucHV0UmVmLFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBtZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhXHJcbikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25EcmFnTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttZWRpYVByZXZpZXcgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiXCJ9IHBsYWNlaG9sZGVyIGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZyBuIERyb3Agb3IgQ2xpY2sgVG8gVXBsb2FkIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cImdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLnN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9