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
        return setShowPasssword();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWFibGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwic2V0U2hvd1Bhc3Nzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUM7QUFDN0JDLFFBQUksRUFBRSxFQUR1QjtBQUU3QkMsU0FBSyxFQUFFLEVBRnNCO0FBRzdCQyxZQUFRLEVBQUUsRUFIbUI7QUFJN0JDLE9BQUcsRUFBRSxFQUp3QjtBQUs3QkMsWUFBUSxFQUFFLEVBTG1CO0FBTTdCQyxXQUFPLEVBQUUsRUFOb0I7QUFPN0JDLFdBQU8sRUFBRSxFQVBvQjtBQVE3QkMsYUFBUyxFQUFFO0FBUmtCLEdBQUQsQ0FEbEI7QUFBQSxNQUNQQyxJQURPO0FBQUEsTUFDREMsT0FEQzs7QUFBQSxNQVlQVCxJQVpPLEdBWXVCUSxJQVp2QixDQVlQUixJQVpPO0FBQUEsTUFZREMsS0FaQyxHQVl1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UlYsVUFBSSxFQUFDLEtBREc7QUFFUjRCLGNBQVEsRUFBQyxJQUZEO0FBR1JDLFVBQUksRUFBQyxJQUhHO0FBSVJDLGFBQU8sRUFBQztBQUFBLGVBQUlDLGdCQUFnQixFQUFwQjtBQUFBO0FBSkEsS0FOeEI7QUFZWSxnQkFBWSxFQUFDLE1BWnpCO0FBYVksUUFBSSxFQUFFbEIsWUFBWSxHQUFDLE1BQUQsR0FBUSxVQWJ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJRLENBSkEsQ0FGQSxFQWlEQSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqREEsQ0FESjtBQXFESDs7R0FoRlFmLE07O0tBQUFBLE07QUFrRlQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjQxNDEzNDM2YWRkY2RhZTkyYzEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIFRleHRBcmVhLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcclxuXHJcbmltcG9ydCB7IEhlYWRlck1lc3NhZ2UsIEZvb3Rlck1lc3NhZ2V9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlJ1xyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgYmlvOiBcIlwiLFxyXG4gICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICBpbnN0YWdyYW06IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge25hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvfSA9IHVzZXJcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7fVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQgLHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gb25EaXNtaXNzPXsoKT0+c2V0RXJyb3JNc2cobnVsbCl9Lz5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiIFxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCIgXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbjxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3Nzd29yZCgpXHJcbiAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZD8ndGV4dCc6XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuXHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9