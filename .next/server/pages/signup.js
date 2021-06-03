(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    type: "button",
    onClick: !showSocialLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    infosize: "small",
    header: "Social Media Links Are Optional!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : "",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }), "Drag n Drop or Click To Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\tjhut\\Desktop\\GitHub\\Social_Media_App\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_5___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (errorMsg !== null) setErrorMsg(null);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setErrorMsg("Username Not Available");
      setUsernameAvailable(false);
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8___default()(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error Uploading Image");
    }

    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 135,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 147,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Common_WelcomeMessage_js-utils_authUser_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0cy5qcyIsIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvQ29tbW9uL0ltYWdlRHJvcERpdi5qcyIsIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vdGFhai1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3RhYWotc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3RhYWotc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3RhYWotc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGFhai1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3RhYWotc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJDb21tb25JbnB1dHMiLCJ1c2VyIiwiYmlvIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ5b3V0dWJlIiwidHdpdHRlciIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsInJlZ2V4VXNlck5hbWUiLCJjYW5jZWwiLCJTaWdudXAiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwibWVkaWEiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2hlY2tVc2VybmFtZSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJyZXMiLCJiYXNlVXJsIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsImRhdGEiLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsInByb2ZpbGVQaWNVcmwiLCJ1cGxvYWRQaWMiLCJyZWdpc3RlclVzZXIiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVNBLFNBQVNBLFlBQVQsQ0FBc0I7QUFDcEJDLE1BQUksRUFBRTtBQUFFQyxPQUFGO0FB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QUFLLE1BZlA7QUFnQkUsUUFBSSxFQUFFRCxpQkFBaUIsR0FBRyxPQUFILEdBQWEsT0FoQnRDO0FBaUJFLGdCQUFZLEVBQUMsTUFqQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJERixFQXlFRSxNQUFDLG9FQUFEO0FBQ0UsUUFBSSxFQUFFckQsSUFEUjtBQUVFLG1CQUFlLEVBQUVPLGVBRm5CO0FBR0Usc0JBQWtCLEVBQUVDLGtCQUh0QjtBQUlFLGdCQUFZLEVBQUVGLFlBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6RUYsRUFnRkUsTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEZGLEVBaUZFLE1BQUMscURBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUMsUUFKUjtBQUtFLFlBQVEsRUFBRXlDLGNBQWMsSUFBSSxDQUFDTSxpQkFML0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpGRixDQVpGLENBRkYsRUF5R0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekdGLENBREY7QUE2R0Q7O0FBRUQsK0RBQWVyQixNQUFmLEU7Ozs7Ozs7Ozs7OztBQzVOQSxNQUFNb0MsT0FBTyxHQUFFLHVCQUFmO0FBRUEsK0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ29tbW9uSW5wdXRzKHtcclxuICB1c2VyOiB7IGJpbywgZmFjZWJvb2ssIGluc3RhZ3JhbSwgeW91dHViZSwgdHdpdHRlciB9LFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBzaG93U29jaWFsTGlua3MsXHJcbiAgc2V0U2hvd1NvY2lhbExpbmtzLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXJcclxuICAgICAgPjwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiXHJcbiAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgIGljb249XCJhdFwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17IXNob3dTb2NpYWxMaW5rc31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cImZhY2Vib29rIGZcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZhY2Vib29rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0d2l0dGVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5zdGFncmFtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICBpY29uPVwiYXR0ZW50aW9uXCJcclxuICAgICAgICAgICAgaW5mb3NpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGhlYWRlcj1cIlNvY2lhbCBNZWRpYSBMaW5rcyBBcmUgT3B0aW9uYWwhXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25JbnB1dHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCwgSW1hZ2UsIEljb24sIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KHtcclxuICBoaWdobGlnaHRlZCxcclxuICBzZXRIaWdobGlnaHRlZCxcclxuICBpbnB1dFJlZixcclxuICBoYW5kbGVDaGFuZ2UsXHJcbiAgbWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25EcmFnTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21lZGlhUHJldmlldyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9e2hpZ2hsaWdodGVkID8gXCJncmVlblwiIDogXCJcIn0gcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUgaW1hZ2Ugb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayBUbyBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIiBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0c1wiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXZcIjtcclxuaW1wb3J0IHtcclxuICBIZWFkZXJNZXNzYWdlLFxyXG4gIEZvb3Rlck1lc3NhZ2UsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBiaW86IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvIH0gPSB1c2VyO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWJtaXREaXNhYmxlZCwgc2V0U3VibWl0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9KS5ldmVyeSgoaXRlbSkgPT5cclxuICAgICAgQm9vbGVhbihpdGVtKVxyXG4gICAgKTtcclxuICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIGNvbnN0IGNoZWNrVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRVc2VybmFtZUxvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcblxyXG4gICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXAvJHt1c2VybmFtZX1gLCB7XHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbigoY2FuY2VsZXIpID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlcnJvck1zZyAhPT0gbnVsbCkgc2V0RXJyb3JNc2cobnVsbCk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEgPT09IFwiQXZhaWxhYmxlXCIpIHtcclxuICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICBzZXRVc2VyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VybmFtZSB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTXNnKFwiVXNlcm5hbWUgTm90IEF2YWlsYWJsZVwiKTtcclxuICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXNlcm5hbWUgPT09IFwiXCIgPyBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSkgOiBjaGVja1VzZXJuYW1lKCk7XHJcbiAgfSwgW3VzZXJuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRGb3JtTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBsZXQgcHJvZmlsZVBpY1VybDtcclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcclxuICAgICAgc2V0Rm9ybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gc2V0RXJyb3JNc2coXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcmVnaXN0ZXJVc2VyKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yTXNnLCBzZXRGb3JtTG9hZGluZyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbG9hZGluZz17Zm9ybUxvYWRpbmd9XHJcbiAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfVxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvck1zZyhudWxsKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgIDxJbWFnZURyb3BEaXZcclxuICAgICAgICAgICAgbWVkaWFQcmV2aWV3PXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9XHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZD17c2V0SGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJ1c2VyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyb3I9eyF1c2VybmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3VzZXJuYW1lQXZhaWxhYmxlID8gXCJjaGVja1wiIDogXCJjbG9zZVwifVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPENvbW1vbklucHV0c1xyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgaWNvbj1cInNpZ251cFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTaWdudXBcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJuYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=