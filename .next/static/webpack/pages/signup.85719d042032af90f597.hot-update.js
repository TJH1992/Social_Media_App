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
      link: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWFibGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjaXJjdWxhciIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNVQywrQ0FBUSxDQUFDO0FBQzdCQyxRQUFJLEVBQUUsRUFEdUI7QUFFN0JDLFNBQUssRUFBRSxFQUZzQjtBQUc3QkMsWUFBUSxFQUFFLEVBSG1CO0FBSTdCQyxPQUFHLEVBQUUsRUFKd0I7QUFLN0JDLFlBQVEsRUFBRSxFQUxtQjtBQU03QkMsV0FBTyxFQUFFLEVBTm9CO0FBTzdCQyxXQUFPLEVBQUUsRUFQb0I7QUFRN0JDLGFBQVMsRUFBRTtBQVJrQixHQUFELENBRGxCO0FBQUEsTUFDUEMsSUFETztBQUFBLE1BQ0RDLE9BREM7O0FBQUEsTUFZUFQsSUFaTyxHQVl1QlEsSUFadkIsQ0FZUFIsSUFaTztBQUFBLE1BWURDLEtBWkMsR0FZdUJPLElBWnZCLENBWURQLEtBWkM7QUFBQSxNQVlN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LEVBQUMsSUFGRDtBQUdSQyxVQUFJLEVBQUM7QUFIRyxLQU54QjtBQVlZLGdCQUFZLEVBQUMsTUFaekI7QUFhWSxRQUFJLEVBQUVoQixZQUFZLEdBQUMsTUFBRCxHQUFRLFVBYnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QlEsQ0FKQSxDQUZBLEVBaURBLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpEQSxDQURKO0FBcURIOztHQWhGUWYsTTs7S0FBQUEsTTtBQWtGVCwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuODU3MTlkMDQyMDMyYWY5MGY1OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgVGV4dEFyZWEsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxyXG5cclxuaW1wb3J0IHsgSGVhZGVyTWVzc2FnZSwgRm9vdGVyTWVzc2FnZX0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UnXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBiaW86IFwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgeW91dHViZTogXCJcIixcclxuICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgIGluc3RhZ3JhbTogXCJcIlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW99ID0gdXNlclxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHt9XHJcblxyXG4gICAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCAsc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSwgc2V0VXNlcm5hbWVBdmFpYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSBvbkRpc21pc3M9eygpPT5zZXRFcnJvck1zZyhudWxsKX0vPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJ1c2VyXCIgXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwiZW52ZWxvcGVcIiBcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIGZsdWlkIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOnRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOnRydWUsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkPyd0ZXh0JzpcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuXHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=