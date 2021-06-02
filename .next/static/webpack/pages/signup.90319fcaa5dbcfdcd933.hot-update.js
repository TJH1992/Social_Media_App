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
    setUser(prev);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2Iiwic2hvd1NvY2lhbExpbmtzIiwic2V0U2hvd1NvY2lhbExpbmtzIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImZvcm1Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlhYmxlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwic2V0U2hvd1Bhc3Nzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUM7QUFDN0JDLFFBQUksRUFBRSxFQUR1QjtBQUU3QkMsU0FBSyxFQUFFLEVBRnNCO0FBRzdCQyxZQUFRLEVBQUUsRUFIbUI7QUFJN0JDLE9BQUcsRUFBRSxFQUp3QjtBQUs3QkMsWUFBUSxFQUFFLEVBTG1CO0FBTTdCQyxXQUFPLEVBQUUsRUFOb0I7QUFPN0JDLFdBQU8sRUFBRSxFQVBvQjtBQVE3QkMsYUFBUyxFQUFFO0FBUmtCLEdBQUQsQ0FEbEI7QUFBQSxNQUNQQyxJQURPO0FBQUEsTUFDREMsT0FEQzs7QUFBQSxNQVlQVCxJQVpPLEdBWXVCUSxJQVp2QixDQVlQUixJQVpPO0FBQUEsTUFZREMsS0FaQyxHQVl1Qk8sSUFadkIsQ0FZRFAsS0FaQztBQUFBLE1BWU1DLFFBWk4sR0FZdUJNLElBWnZCLENBWU1OLFFBWk47QUFBQSxNQVlnQkMsR0FaaEIsR0FZdUJLLElBWnZCLENBWWdCTCxHQVpoQjs7QUFjZCxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUEsb0JBQ0RDLENBQUMsQ0FBQ0MsTUFERDtBQUFBLFFBQ2hCWixJQURnQixhQUNoQkEsSUFEZ0I7QUFBQSxRQUNWYSxLQURVLGFBQ1ZBLEtBRFU7QUFHdkJKLFdBQU8sQ0FBQ0ssSUFBRCxDQUFQO0FBRUgsR0FMRDs7QUFkYyxtQkFxQmdDZiwrQ0FBUSxDQUFDLEtBQUQsQ0FyQnhDO0FBQUEsTUFxQlBnQixlQXJCTztBQUFBLE1BcUJVQyxrQkFyQlY7O0FBQUEsbUJBc0IwQmpCLCtDQUFRLENBQUMsS0FBRCxDQXRCbEM7QUFBQSxNQXNCUGtCLFlBdEJPO0FBQUEsTUFzQk9DLGVBdEJQOztBQUFBLG1CQXVCa0JuQiwrQ0FBUSxDQUFDLElBQUQsQ0F2QjFCO0FBQUEsTUF1QlBvQixRQXZCTztBQUFBLE1BdUJHQyxXQXZCSDs7QUFBQSxtQkF3QndCckIsK0NBQVEsQ0FBQyxLQUFELENBeEJoQztBQUFBLE1Bd0JQc0IsV0F4Qk87QUFBQSxNQXdCTUMsY0F4Qk47O0FBQUEsbUJBMEJrQnZCLCtDQUFRLENBQUMsRUFBRCxDQTFCMUI7QUFBQSxNQTBCUHdCLFFBMUJPO0FBQUEsTUEwQkdDLFdBMUJIOztBQUFBLG1CQTJCZ0N6QiwrQ0FBUSxDQUFDLEtBQUQsQ0EzQnhDO0FBQUEsTUEyQlAwQixlQTNCTztBQUFBLE1BMkJVQyxrQkEzQlY7O0FBQUEsbUJBNEJtQzNCLCtDQUFRLENBQUMsS0FBRCxDQTVCM0M7QUFBQSxNQTRCUDRCLGlCQTVCTztBQUFBLE1BNEJZQyxtQkE1Qlo7O0FBOEJkLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFsQixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDbUIsY0FBRixFQUFKO0FBQUEsR0FBdEI7O0FBRUEsU0FDSSxxRUFDQSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsbURBQUQ7QUFBTSxXQUFPLEVBQUVULFdBQWY7QUFBNEIsU0FBSyxFQUFFRixRQUFRLEtBQUssSUFBaEQ7QUFBc0QsWUFBUSxFQUFFVSxZQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFTLFNBQUssTUFBZDtBQUFlLFVBQU0sRUFBQyxPQUF0QjtBQUE4QixXQUFPLEVBQUVWLFFBQXZDO0FBQWlELGFBQVMsRUFBRTtBQUFBLGFBQUlDLFdBQVcsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFJQSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLHlEQUFEO0FBQ0EsU0FBSyxFQUFDLE1BRE47QUFFQSxlQUFXLEVBQUMsTUFGWjtBQUdBLFFBQUksRUFBQyxNQUhMO0FBSUEsU0FBSyxFQUFFcEIsSUFKUDtBQUtBLFlBQVEsRUFBRVUsWUFMVjtBQU1BLFNBQUssTUFOTDtBQU1NLFFBQUksRUFBQyxNQU5YO0FBT0EsZ0JBQVksRUFBQyxNQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVlJLE1BQUMseURBQUQ7QUFDQSxTQUFLLEVBQUMsT0FETjtBQUVBLGVBQVcsRUFBQyxPQUZaO0FBR0EsUUFBSSxFQUFDLE9BSEw7QUFJQSxTQUFLLEVBQUVULEtBSlA7QUFLQSxZQUFRLEVBQUVTLFlBTFY7QUFNQSxTQUFLLE1BTkw7QUFNTSxRQUFJLEVBQUMsVUFOWDtBQU9BLGdCQUFZLEVBQUMsTUFQYjtBQVFBLFFBQUksRUFBQyxPQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQXVCUixNQUFDLHlEQUFEO0FBQ1ksU0FBSyxFQUFDLFVBRGxCO0FBRVksZUFBVyxFQUFDLFVBRnhCO0FBR1ksUUFBSSxFQUFDLFVBSGpCO0FBSVksU0FBSyxFQUFFUixRQUpuQjtBQUtZLFlBQVEsRUFBRVEsWUFMdEI7QUFNWSxTQUFLLE1BTmpCO0FBTWtCLFFBQUksRUFBRTtBQUNSVixVQUFJLEVBQUMsS0FERztBQUVSK0IsY0FBUSxFQUFDLElBRkQ7QUFHUkMsVUFBSSxFQUFDLElBSEc7QUFJUkMsYUFBTyxFQUFDO0FBQUEsZUFBSUMsZ0JBQWdCLENBQUMsQ0FBQ2pCLFlBQUYsQ0FBcEI7QUFBQTtBQUpBLEtBTnhCO0FBWVksZ0JBQVksRUFBQyxNQVp6QjtBQWFZLFFBQUksRUFBRUEsWUFBWSxHQUFDLE1BQUQsR0FBUSxVQWJ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJRLENBSkEsQ0FGQSxFQWlEQSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqREEsQ0FESjtBQXFESDs7R0FyRlFuQixNOztLQUFBQSxNO0FBdUZULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC45MDMxOWZjYWE1ZGJjZmRjZDkzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBUZXh0QXJlYSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBIZWFkZXJNZXNzYWdlLCBGb290ZXJNZXNzYWdlfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZSdcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGJpbzogXCJcIixcclxuICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICB5b3V0dWJlOiBcIlwiLFxyXG4gICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgaW5zdGFncmFtOiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpb30gPSB1c2VyXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxyXG5cclxuICAgICAgICBzZXRVc2VyKHByZXYpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQgLHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gb25EaXNtaXNzPXsoKT0+c2V0RXJyb3JNc2cobnVsbCl9Lz5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiIFxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCIgXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbjxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3Nzd29yZCghc2hvd1Bhc3N3b3JkKVxyXG4gICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==