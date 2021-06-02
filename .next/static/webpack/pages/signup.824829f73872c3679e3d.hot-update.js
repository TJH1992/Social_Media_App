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
      link: link
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
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWFibGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjaXJjdWxhciIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNVQywrQ0FBUSxDQUFDO0FBQzdCQyxRQUFJLEVBQUUsRUFEdUI7QUFFN0JDLFNBQUssRUFBRSxFQUZzQjtBQUc3QkMsWUFBUSxFQUFFLEVBSG1CO0FBSTdCQyxPQUFHLEVBQUUsRUFKd0I7QUFLN0JDLFlBQVEsRUFBRSxFQUxtQjtBQU03QkMsV0FBTyxFQUFFLEVBTm9CO0FBTzdCQyxXQUFPLEVBQUUsRUFQb0I7QUFRN0JDLGFBQVMsRUFBRTtBQVJrQixHQUFELENBRGxCO0FBQUEsTUFDUEMsSUFETztBQUFBLE1BQ0RDLE9BREM7O0FBQUEsTUFZUFQsSUFaTyxHQVl1QlEsSUFadkIsQ0FZUFIsSUFaTztBQUFBLE1BWURDLEtBWkMsR0FZdUJPLElBWnZCLENBWURQLEtBWkM7QUFBQSxNQVlN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LEVBQUMsSUFGRDtBQUdSQyxVQUFJLEVBQUpBO0FBSFEsS0FOeEI7QUFXWSxnQkFBWSxFQUFDLE1BWHpCO0FBWVksUUFBSSxFQUFFaEIsWUFBWSxHQUFDLE1BQUQsR0FBUSxVQVp0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJRLENBSkEsQ0FGQSxFQWdEQSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoREEsQ0FESjtBQW9ESDs7R0EvRVFmLE07O0tBQUFBLE07QUFpRlQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjgyNDgyOWY3Mzg3MmMzNjc5ZTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIFRleHRBcmVhLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcclxuXHJcbmltcG9ydCB7IEhlYWRlck1lc3NhZ2UsIEZvb3Rlck1lc3NhZ2V9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlJ1xyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgYmlvOiBcIlwiLFxyXG4gICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICBpbnN0YWdyYW06IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge25hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvfSA9IHVzZXJcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7fVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQgLHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gb25EaXNtaXNzPXsoKT0+c2V0RXJyb3JNc2cobnVsbCl9Lz5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiIFxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCIgXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbjxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==