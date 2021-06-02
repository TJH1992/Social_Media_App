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

  var handleChange = function handleChange() {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setUser();
  };

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
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 47,
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
      lineNumber: 57,
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
        return setShowPasssword(!showPassword);
      }
    },
    iconPosition: "left",
    type: showPassword ? 'text' : "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 1
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_1__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWFibGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJzZXRTaG93UGFzc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDVUMsK0NBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxTQUFLLEVBQUUsRUFGc0I7QUFHN0JDLFlBQVEsRUFBRSxFQUhtQjtBQUk3QkMsT0FBRyxFQUFFLEVBSndCO0FBSzdCQyxZQUFRLEVBQUUsRUFMbUI7QUFNN0JDLFdBQU8sRUFBRSxFQU5vQjtBQU83QkMsV0FBTyxFQUFFLEVBUG9CO0FBUTdCQyxhQUFTLEVBQUU7QUFSa0IsR0FBRCxDQURsQjtBQUFBLE1BQ1BDLElBRE87QUFBQSxNQUNEQyxPQURDOztBQUFBLE1BWVBULElBWk8sR0FZdUJRLElBWnZCLENBWVBSLElBWk87QUFB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RVksZUFBVyxFQUFDLFVBRnhCO0FBR1ksUUFBSSxFQUFDLFVBSGpCO0FBSVksU0FBSyxFQUFFUixRQUpuQjtBQUtZLFlBQVEsRUFBRVEsWUFMdEI7QUFNWSxTQUFLLE1BTmpCO0FBTWtCLFFBQUksRUFBRTtBQUNSVixVQUFJLEVBQUMsS0FERztBQUVSOEIsY0FBUSxFQUFDLElBRkQ7QUFHUkMsVUFBSSxFQUFDLElBSEc7QUFJUkMsYUFBTyxFQUFDO0FBQUEsZUFBSUMsZ0JBQWdCLENBQUMsQ0FBQ2pCLFlBQUYsQ0FBcEI7QUFBQTtBQUpBLEtBTnhCO0FBWVksZ0JBQVksRUFBQyxNQVp6QjtBQWFZLFFBQUksRUFBRUEsWUFBWSxHQUFDLE1BQUQsR0FBUSxVQWJ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJRLENBSkEsQ0FGQSxFQWlEQSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqREEsQ0FESjtBQXFESDs7R0FyRlFsQixNOztLQUFBQSxNO0FBdUZULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC44NDU2YmUxOWNhY2E3YWQ4MzVlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBUZXh0QXJlYSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBIZWFkZXJNZXNzYWdlLCBGb290ZXJNZXNzYWdlfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZSdcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGJpbzogXCJcIixcclxuICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICB5b3V0dWJlOiBcIlwiLFxyXG4gICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgaW5zdGFncmFtOiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpb30gPSB1c2VyXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxyXG5cclxuICAgICAgICBzZXRVc2VyKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCAsc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSwgc2V0VXNlcm5hbWVBdmFpYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSBvbkRpc21pc3M9eygpPT5zZXRFcnJvck1zZyhudWxsKX0vPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJ1c2VyXCIgXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwiZW52ZWxvcGVcIiBcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIGZsdWlkIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOnRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOnRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOigpPT5zZXRTaG93UGFzc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZD8ndGV4dCc6XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuXHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9