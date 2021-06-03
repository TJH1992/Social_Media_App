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
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function ImageDropDiv(highlighted, setHighlighted, inputRef, handleChange, mediaPreview, setMediaPreview, setMedia) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  });
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


/***/ }),

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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_tjhut_Desktop_GitHub_Social_Media_App_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

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

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_tjhut_Desktop_GitHub_Social_Media_App_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));
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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      submitDisabled = _useState6[0],
      setSubmitDisabled = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      username = _useState7[0],
      setUsername = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      usernameLoading = _useState8[0],
      setUsernameLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      usernameAvailable = _useState9[0],
      setUsernameAvaiable = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      media = _useState10[0],
      setMedia = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      mediaPreview = _useState11[0],
      setMediaPreview = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      highlighted = _useState12[0],
      setHighlighted = _useState12[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var handleSubmit = function handleSubmit(e) {
    return e.preventDefault();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var isUser = Object.values({
      name: name,
      email: email,
      password: password,
      bio: bio
    }).every(function (item) {
      return Boolean(item);
    });
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return setErrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    required: true,
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
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    required: true,
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
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    required: true,
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
    type: showPassword ? "text" : "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: function onChange(e) {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvaiable(true);
      } else {
        setUsernameAvaiable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user,
    showSocialLinks: setShowSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }));
}

_s(Signup, "batXJPlDOOC1bH/o2KGUkjTvGic=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwiaGFuZGxlQ2hhbmdlIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJyZWdleFVzZXJOYW1lIiwiU2lnbnVwIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJpbyIsImZhY2Vib29rIiwieW91dHViZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJ1c2VyIiwic2V0VXNlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlhYmxlIiwibWVkaWEiLCJ1c2VSZWYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiaXRlbSIsIkJvb2xlYW4iLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwic2V0U2hvd1Bhc3Nzd29yZCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVQsQ0FDRUMsV0FERixFQUVFQyxj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QWdHRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoR0YsQ0FERjtBQW9HRDs7R0FoSlE5QixNOztLQUFBQSxNO0FBa0pULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5kN2I0MjYzMmZlZDg2YjQxMjAxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KFxyXG4gIGhpZ2hsaWdodGVkLFxyXG4gIHNldEhpZ2hsaWdodGVkLFxyXG4gIGlucHV0UmVmLFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBtZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhXHJcbikge1xyXG4gIHJldHVybiA8ZGl2PjwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgTWVzc2FnZSxcclxuICBTZWdtZW50LFxyXG4gIFRleHRBcmVhLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHNcIjtcclxuaW1wb3J0IEltYWdlRHJvcERpdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEhlYWRlck1lc3NhZ2UsXHJcbiAgRm9vdGVyTWVzc2FnZSxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGJpbzogXCJcIixcclxuICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgeW91dHViZTogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzZXRVc2VyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLCBzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZm9ybUxvYWRpbmcsIHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldFN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLCBzZXRVc2VybmFtZUF2YWlhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9KS5ldmVyeSgoaXRlbSkgPT5cclxuICAgICAgQm9vbGVhbihpdGVtKVxyXG4gICAgKTtcclxuICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2cobnVsbCl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldFNob3dQYXNzc3dvcmQoIXNob3dQYXNzd29yZCksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnJvcj17IXVzZXJuYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3VzZXJuYW1lQXZhaWxhYmxlID8gXCJjaGVja1wiIDogXCJjbG9zZVwifVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPENvbW1vbklucHV0c1xyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgaWNvbj1cInNpZ251cFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTaWdudXBcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJuYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=