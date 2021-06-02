self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var name = user.name,
      email = user.email,
      password = user.password,
      bio = user.bio;

  var handleChange = function handleChange() {};

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showSocialLinks = _useState2[0],
      setShowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showPassword = _useState3[0],
      setShowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      formLoading = _useState5[0],
      setFormLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      username = _useState6[0],
      setUsername = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      usernameLoading = _useState7[0],
      setUsernameLoading = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      usernameAvailable = _useState8[0],
      setUsernameAvaiable = _useState8[1];

  var handleSubmit = function handleSubmit(e) {
    return e.preventDefault();
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_1__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return setErrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    label: "password",
    placeholder: "password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: function onClick() {
        return setShow;
      }
    },
    iconPosition: "left",
    type: showPassword ? 'text' : "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 1
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_1__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }));
}

_s(Signup, "OHQofTXXnpNG87CdQT31JUQrezs=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWFibGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwic2V0U2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUM7QUFDN0JDLFFBQUksRUFBRSxFQUR1QjtBQUU3QkMsU0FBSyxFQUFFLEVBRnNCO0FBRzdCQyxZQUFRLEVBQUUsRUFIbUI7QUFJN0JDLE9BQUcsRUFBRSxFQUp3QjtBQUs3QkMsWUFBUSxFQUFFLEVBTG1CO0FBTTdCQyxXQUFPLEVBQUUsRUFOb0I7QUFPN0JDLFdBQU8sRUFBRSxFQVBvQjtBQVE3QkMsYUFBUyxFQUFFO0FBUmtCLEdBQUQsQ0FEbEI7QUFBQSxNQUNQQyxJQURPO0FBQUEsTUFDREMsT0FEQzs7QUFBQSxNQVlQVCxJQVpPLEdBWXVCUSxJQVp2QixDQVlQUixJQVpPO0FBQUEsTUFZREMsS0FaQyxHQVl1Qk8sSUFadkIs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QUFDLEtBREc7QUFFUjRCLGNBQVEsRUFBQyxJQUZEO0FBR1JDLFVBQUksRUFBQyxJQUhHO0FBSVJDLGFBQU8sRUFBQztBQUFBLGVBQUlDLE9BQUo7QUFBQTtBQUpBLEtBTnhCO0FBWVksZ0JBQVksRUFBQyxNQVp6QjtBQWFZLFFBQUksRUFBRWxCLFlBQVksR0FBQyxNQUFELEdBQVEsVUFidEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCUSxDQUpBLENBRkEsRUFpREEsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakRBLENBREo7QUFxREg7O0dBaEZRZixNOztLQUFBQSxNO0FBa0ZULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC42YzRhMjliZjlkZGVjYWJhMWYwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBUZXh0QXJlYSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBIZWFkZXJNZXNzYWdlLCBGb290ZXJNZXNzYWdlfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZSdcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGJpbzogXCJcIixcclxuICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICB5b3V0dWJlOiBcIlwiLFxyXG4gICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgaW5zdGFncmFtOiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpb30gPSB1c2VyXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge31cclxuXHJcbiAgICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLCBzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkICxzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZm9ybUxvYWRpbmcsIHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLCBzZXRVc2VybmFtZUF2YWlhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XHJcbiAgICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17ZXJyb3JNc2d9IG9uRGlzbWlzcz17KCk9PnNldEVycm9yTXNnKG51bGwpfS8+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIiBcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cInVzZXJcIiBcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJlbnZlbG9wZVwiIFxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG48Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgZmx1aWQgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTpcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6KCk9PnNldFNob3dcclxuICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkPyd0ZXh0JzpcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuXHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=