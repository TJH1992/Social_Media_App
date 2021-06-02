self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_tjhut_Desktop_GitHub_Social_Media_App_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_tjhut_Desktop_GitHub_Social_Media_App_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
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
    setUser(function (prev) {
      return _objectSpread({}, prev);
    });
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showSocialLinks = _useState2[0],
      setShowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showPassword = _useState3[0],
      setShowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      formLoading = _useState5[0],
      setFormLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      username = _useState6[0],
      setUsername = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      usernameLoading = _useState7[0],
      setUsernameLoading = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      usernameAvailable = _useState8[0],
      setUsernameAvaiable = _useState8[1];

  var handleSubmit = function handleSubmit(e) {
    return e.preventDefault();
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
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
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2Iiwic2hvd1NvY2lhbExpbmtzIiwic2V0U2hvd1NvY2lhbExpbmtzIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImZvcm1Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlhYmxlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwic2V0U2hvd1Bhc3Nzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDVUMsK0NBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxTQUFLLEVBQUUsRUFGc0I7QUFHN0JDLFlBQVEsRUFBRSxFQUhtQjtBQUk3QkMsT0FBRyxFQUFFLEVBSndCO0FBSzdCQyxZQUFRLEVBQUUsRUFMbUI7QUFNN0JDLFdBQU8sRUFBRSxFQU5vQjtBQU83QkMsV0FBTyxFQUFFLEVBUG9CO0FBUTdCQyxhQUFTLEVBQUU7QUFSa0IsR0FBRCxDQURsQjtBQUFBLE1BQ1BDLElBRE87QUFBQSxNQUNEQyxPQURDOztBQUFBLE1BWVBULElBWk8sR0FZdUJRLElBWnZC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QUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUF1QlIsTUFBQyx5REFBRDtBQUNZLFNBQUssRUFBQyxVQURsQjtBQUVZLGVBQVcsRUFBQyxVQUZ4QjtBQUdZLFFBQUksRUFBQyxVQUhqQjtBQUlZLFNBQUssRUFBRVIsUUFKbkI7QUFLWSxZQUFRLEVBQUVRLFlBTHRCO0FBTVksU0FBSyxNQU5qQjtBQU1rQixRQUFJLEVBQUU7QUFDUlYsVUFBSSxFQUFDLEtBREc7QUFFUitCLGNBQVEsRUFBQyxJQUZEO0FBR1JDLFVBQUksRUFBQyxJQUhHO0FBSVJDLGFBQU8sRUFBQztBQUFBLGVBQUlDLGdCQUFnQixDQUFDLENBQUNqQixZQUFGLENBQXBCO0FBQUE7QUFKQSxLQU54QjtBQVlZLGdCQUFZLEVBQUMsTUFaekI7QUFhWSxRQUFJLEVBQUVBLFlBQVksR0FBQyxNQUFELEdBQVEsVUFidEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCUSxDQUpBLENBRkEsRUFpREEsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakRBLENBREo7QUFxREg7O0dBckZRbkIsTTs7S0FBQUEsTTtBQXVGVCwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuZGI5MTc0Mjc4ZjBhODM4ODQ3NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgVGV4dEFyZWEsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxyXG5cclxuaW1wb3J0IHsgSGVhZGVyTWVzc2FnZSwgRm9vdGVyTWVzc2FnZX0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UnXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBiaW86IFwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgeW91dHViZTogXCJcIixcclxuICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgIGluc3RhZ3JhbTogXCJcIlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW99ID0gdXNlclxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcclxuXHJcbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsfSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQgLHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gb25EaXNtaXNzPXsoKT0+c2V0RXJyb3JNc2cobnVsbCl9Lz5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiIFxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCIgXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbjxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3Nzd29yZCghc2hvd1Bhc3N3b3JkKVxyXG4gICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==