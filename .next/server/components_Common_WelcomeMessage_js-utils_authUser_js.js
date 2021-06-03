exports.id = "components_Common_WelcomeMessage_js-utils_authUser_js";
exports.ids = ["components_Common_WelcomeMessage_js-utils_authUser_js"];
exports.modules = {

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\components\\Common\\WelcomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    color: "teal",
    attached: true,
    header: signupRoute ? "Get Started" : "Welcome Back",
    icon: signupRoute ? "settings" : "privacy",
    content: signupRoute ? "Create New Account" : "Login with Email and Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), "Existing User? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 28
    }
  }, "Login Here Instead")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Forgot Password?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), "New User? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 23
    }
  }, "Signup Here"), " Instead", " ")));
};

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regexUserName": function() { return /* binding */ regexUserName; }
/* harmony export */ });
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlLmpzIiwid2VicGFjazovL3RhYWotc29jaWFsLW1lZGlhLy4vdXRpbHMvYXV0aFVzZXIuanMiLCJ3ZWJwYWNrOi8vdGFhai1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXHRqaHV0XFxEZXNrdG9wXFxHaXRIdWJcXFNvY2lhbF9NZWRpYV9BcHBcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJIZWFkZXJNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsIkZvb3Rlck1lc3NhZ2UiLCJyZWdleFVzZXJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUNqQyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRixNQUFNLENBQUNHLFFBQVAsS0FBb0IsU0FBeEM7QUFFQSxTQUNFLE1BQUMsc0RBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLFlBQVEsTUFGVjtBQUdFLFVBQU0sRUFBRUQsV0FBVyxHQUFHLGFBQUgsR0FBbUIsY0FIeEM7QUFJRSxRQUFJLEVBQUVBLFdBQVcsR0FBRyxVQUFILEdBQWdCLFNBSm5DO0FBS0UsV0FBTyxFQUFFQSxXQUFXLEdBQUcsb0JBQUgsR0FBMEIsK0JBTGhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVNELENBYk07QUFlQSxNQUFNRSxhQUFhLEdBQUcsTUFBTTtBQUNqQyxRQUFNSixNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRixNQUFNLENBQUNHLFFBQVAsS0FBb0IsU0FBeEM7QUFFQSxTQUNFLHFFQUNHRCxXQUFXLEdBQ1YscUVBQ0UsTUFBQyxzREFBRDtBQUFTLFlBQVEsRUFBQyxRQUFsQjtBQUEyQixXQUFPLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLHFCQUVpQixNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGakIsQ0FERixFQUtFLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBRFUsR0FTVixxRUFDRSxNQUFDLHNEQUFEO0FBQVMsWUFBUSxFQUFDLFFBQWxCO0FBQTJCLFFBQUksTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixDQURGLEVBTUUsTUFBQyxzREFBRDtBQUFTLFlBQVEsRUFBQyxRQUFsQjtBQUEyQixXQUFPLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGdCQUVZLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZaLGNBRTRELEdBRjVELENBTkYsQ0FWSixDQURGO0FBeUJELENBN0JNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxNQUFNRyxhQUFhLEdBQUcsdUNBQXRCLEM7Ozs7Ozs7Ozs7QUNBUCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfQ29tbW9uX1dlbGNvbWVNZXNzYWdlX2pzLXV0aWxzX2F1dGhVc2VyX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbiwgTWVzc2FnZSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlck1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NpZ251cFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lc3NhZ2VcclxuICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgYXR0YWNoZWRcclxuICAgICAgaGVhZGVyPXtzaWdudXBSb3V0ZSA/IFwiR2V0IFN0YXJ0ZWRcIiA6IFwiV2VsY29tZSBCYWNrXCJ9XHJcbiAgICAgIGljb249e3NpZ251cFJvdXRlID8gXCJzZXR0aW5nc1wiIDogXCJwcml2YWN5XCJ9XHJcbiAgICAgIGNvbnRlbnQ9e3NpZ251cFJvdXRlID8gXCJDcmVhdGUgTmV3IEFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBFbWFpbCBhbmQgUGFzc3dvcmRcIn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9zaWdudXBcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaWdudXBSb3V0ZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XHJcbiAgICAgICAgICAgIEV4aXN0aW5nIFVzZXI/IDxMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbiBIZXJlIEluc3RlYWQ8L0xpbms+XHJcbiAgICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiBpbmZvPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9ja1wiIC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzZXRcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZXNzYWdlPlxyXG5cclxuICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxyXG4gICAgICAgICAgICBOZXcgVXNlcj8gPExpbmsgaHJlZj1cIi9zaWdudXBcIj5TaWdudXAgSGVyZTwvTGluaz4gSW5zdGVhZHtcIiBcIn1cclxuICAgICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07IiwiZXhwb3J0IGNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9