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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
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

  var handleChange = function handleChange() {
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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
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

  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_3__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return setErrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
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
      lineNumber: 67,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
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
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
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
      lineNumber: 92,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: function onChange(e) {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvaiable(ture);
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
      lineNumber: 110,
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
      lineNumber: 130,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    content: "Signup",
    type: "sumbit",
    color: "orange",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_3__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }));
}

_s(Signup, "mIFPZuBuJKmL28LCdpEzw55AQro=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldiIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldFVzZXJuYW1lTG9hZGluZyIsInVzZXJuYW1lQXZhaWxhYmxlIiwic2V0VXNlcm5hbWVBdmFpYWJsZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInNldFNob3dQYXNzc3dvcmQiLCJ0ZXN0IiwidHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUVBO0FBS0EsSUFBTUEsYUFBYSxHQUFHLHVDQUF0Qjs7QUFFQSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxZQUFRLEVBQUUsRUFIcUI7QUFJL0JDLE9BQUcsRUFBRSxFQUowQjtBQUsvQkMsWUFBUSxFQUFFLEVBTHFCO0FBTS9CQyxXQUFPLEVBQUUsRUFOc0I7QUFPL0JDLFdBQU8sRUFBRSxFQVBzQjtBQVEvQkMsYUFBUyxFQUFFO0FBUm9CLEdBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFBQSxNQVlSVCxJQVpRLEdBWXVCUSxJQVp2QixDQVlSUixJQVpRO0FBQUEsTUFZRkMsS0FaRSxHQVl1Qk8sSUFadkIsQ0FZRlAsS0FaRTtBQUFBLE1BWUtDLFFBWkwsR0FZdUJNLElBWnZCLENBWUtOLFFBWkw7QUFBQSxNQVllQyxHQVpmLEdBWXVCSyxJQVp2QixDQVllTCxHQVpmOztBQWNoQixNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUEsb0JBQ0RDLENBQUMsQ0FBQ0MsTUFERDtBQUFBLFFBQ2pCWixJQURpQixhQUNqQkEsSUFEaUI7QUFBQSxRQUNYYSxLQURXLGFBQ1hBLEtBRFc7QUFHekJKLFdBQU8sQ0FBQyxVQUFDSyxJQUFEO0FBQUEsNkNBQWdCQSxJQUFoQix3SkFBdUJkLElBQXZCLEVBQThCYSxLQUE5QjtBQUFBLEtBQUQsQ0FBUDtBQUNELEdBSkQ7O0FBZGdCLG1CQW9COEJkLCtDQUFRLENBQUMsS0FBRCxDQXBCdEM7QUFBQSxNQW9CVGdCLGVBcEJTO0FBQUEsTUFvQlFDLGtCQXBCUjs7QUFBQSxtQkFxQndCakIsK0NBQVEsQ0FBQyxLQUFELENBckJoQztBQUFBLE1BcUJUa0IsWUFyQlM7QUFBQSxNQXFCS0MsZUFyQkw7O0FBQUEsbUJBc0JnQm5CLCtDQUFRLENBQUMsSUFBRCxDQXRCeEI7QUFBQSxNQXNCVG9CLFFBdEJTO0FBQUEsTUFzQkNDLFdBdEJEOztBQUFBLG1CQXVCc0JyQiwrQ0FBUSxDQUFDLEtBQUQsQ0F2QjlCO0FBQUEsTUF1QlRzQixXQXZCUztBQUFBLE1BdUJJQyxjQXZCSjs7QUFBQSxtQkF5QmdCdkIsK0NBQVEsQ0FBQyxFQUFELENBekJ4QjtBQUFBLE1BeUJUd0IsUUF6QlM7QUFBQSxNQXlCQ0MsV0F6QkQ7O0FBQUEsbUJBMEI4QnpCLCtDQUFRLENBQUMsS0FBRCxDQTFCdEM7QUFBQSxNQTBCVDBCLGVBMUJTO0FBQUEsTUEwQlFDLGtCQTFCUjs7QUFBQSxtQkEyQmlDM0IsK0NBQVEsQ0FBQyxLQUFELENBM0J6QztBQUFBLE1BMkJUNEIsaUJBM0JTO0FBQUEsTUEyQlVDLG1CQTNCVjs7QUE2QmhCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNsQixDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDbUIsY0FBRixFQUFQO0FBQUEsR0FBckI7O0FBRUEsU0FDRSxxRUFDRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsbURBQUQ7QUFDRSxXQUFPLEVBQUVULFdBRFg7QUFFRSxTQUFLLEVBQUVGLFFBQVEsS0FBSyxJQUZ0QjtBQUdFLFlBQVEsRUFBRVUsWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxzREFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLFVBQU0sRUFBQyxPQUZUO0FBR0UsV0FBTyxFQUFFVixRQUhYO0FBSUUsYUFBUyxFQUFFO0FBQUEsYUFBTUMsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxLQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQVlFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxTQUFLLEVBQUMsTUFGUjtBQUdFLGVBQVcsRUFBQyxNQUhkO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxTQUFLLEVBQUVwQixJQUxUO0FBTUUsWUFBUSxFQUFFVSxZQU5aO0FBT0UsU0FBSyxNQVBQO0FBUUUsUUFBSSxFQUFDLE1BUlA7QUFTRSxnQkFBWSxFQUFDLE1BVGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBYUUsTUFBQyx5REFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFNBQUssRUFBQyxPQUZSO0FBR0UsZUFBVyxFQUFDLE9BSGQ7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLFNBQUssRUFBRVQsS0FMVDtBQU1FLFlBQVEsRUFBRVMsWUFOWjtBQU9FLFNBQUssTUFQUDtBQVFFLFFBQUksRUFBQyxVQVJQO0FBU0UsZ0JBQVksRUFBQyxNQVRmO0FBVUUsUUFBSSxFQUFDLE9BVlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBMEJFLE1BQUMseURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLGVBQVcsRUFBQyxVQUhkO0FBSUUsUUFBSSxFQUFDLFVBSlA7QUFLRSxTQUFLLEVBQUVSLFFBTFQ7QUFNRSxZQUFRLEVBQUVRLFlBTlo7QUFPRSxTQUFLLE1BUFA7QUFRRSxRQUFJLEVBQUU7QUFDSlYsVUFBSSxFQUFFLEtBREY7QUFFSitCLGNBQVEsRUFBRSxJQUZOO0FBR0pDLFVBQUksRUFBRSxJQUhGO0FBSUpDLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGdCQUFnQixDQUFDLENBQUNqQixZQUFGLENBQXRCO0FBQUE7QUFKTCxLQVJSO0FBY0UsZ0JBQVksRUFBQyxNQWRmO0FBZUUsUUFBSSxFQUFFQSxZQUFZLEdBQUcsTUFBSCxHQUFZLFVBZmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsRUE0Q0UsTUFBQyx5REFBRDtBQUNFLFdBQU8sRUFBRVEsZUFEWDtBQUVFLFNBQUssRUFBRSxDQUFDRSxpQkFGVjtBQUdFLFlBQVEsTUFIVjtBQUlFLFNBQUssRUFBQyxVQUpSO0FBS0UsZUFBVyxFQUFDLFVBTGQ7QUFNRSxTQUFLLEVBQUVKLFFBTlQ7QUFPRSxZQUFRLEVBQUUsa0JBQUNaLENBQUQsRUFBTztBQUNmYSxpQkFBVyxDQUFDYixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYOztBQUNBLFVBQUloQixhQUFhLENBQUNzQyxJQUFkLENBQW1CeEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTVCLENBQUosRUFBd0M7QUFDdENlLDJCQUFtQixDQUFDUSxJQUFELENBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xSLDJCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDRDtBQUNGLEtBZEg7QUFlRSxTQUFLLE1BZlA7QUFnQkUsUUFBSSxFQUFFRCxpQkFBaUIsR0FBRyxPQUFILEdBQWEsT0FoQnRDO0FBaUJFLGdCQUFZLEVBQUMsTUFqQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDRixFQWdFRSxNQUFDLG9FQUFEO0FBQ0UsUUFBSSxFQUFFbkIsSUFEUjtBQUVFLG1CQUFlLEVBQUVRLGtCQUZuQjtBQUdFLHNCQUFrQixFQUFFQSxrQkFIdEI7QUFJRSxnQkFBWSxFQUFFTixZQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEVGLEVBdUVFLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZFRixFQXdFRSxNQUFDLHFEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQXlCLFFBQUksRUFBQyxRQUE5QjtBQUF1QyxTQUFLLEVBQUMsUUFBN0M7QUFBc0QsWUFBUSxNQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEVGLENBWkYsQ0FGRixFQTBGRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExRkYsQ0FERjtBQThGRDs7R0E3SFFaLE07O0tBQUFBLE07QUErSFQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjczNDFiNjIwYWNmOTA4ZjdkODY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgTWVzc2FnZSxcclxuICBTZWdtZW50LFxyXG4gIFRleHRBcmVhLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyTWVzc2FnZSxcclxuICBGb290ZXJNZXNzYWdlLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgcmVnZXhVc2VyTmFtZSA9IC9eKD8hLipcXC5cXC4pKD8hLipcXC4kKVteXFxXXVtcXHcuXXswLDI5fSQvO1xyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgYmlvOiBcIlwiLFxyXG4gICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICB5b3V0dWJlOiBcIlwiLFxyXG4gICAgdHdpdHRlcjogXCJcIixcclxuICAgIGluc3RhZ3JhbTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgc2V0VXNlcigocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsb2FkaW5nPXtmb3JtTG9hZGluZ31cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3N3b3JkKCFzaG93UGFzc3dvcmQpLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyb3I9eyF1c2VybmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpYWJsZSh0dXJlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt1c2VybmFtZUF2YWlsYWJsZSA/IFwiY2hlY2tcIiA6IFwiY2xvc2VcIn1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxDb21tb25JbnB1dHNcclxuICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJTaWdudXBcIiB0eXBlPVwic3VtYml0XCIgY29sb3I9XCJvcmFuZ2VcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==