exports.id = "utils_authUser_js";
exports.ids = ["utils_authUser_js"];
exports.modules = {

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

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

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = (error, displayError) => {
  let errorMsg = {};

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  displayError(errorMsg);
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2F1dGhVc2VyLmpzIiwid2VicGFjazovL3RhYWotc29jaWFsLW1lZGlhLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly90YWFqLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL3RhYWotc29jaWFsLW1lZGlhL2lnbm9yZWR8QzpcXFVzZXJzXFx0amh1dFxcRGVza3RvcFxcR2l0SHViXFxTb2NpYWxfTWVkaWFfQXBwXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsicmVnaXN0ZXJVc2VyIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJzZXRFcnJvciIsInNldExvYWRpbmciLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJzZXRUb2tlbiIsImRhdGEiLCJlcnJvciIsImVycm9yTXNnIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJyZWRpcmVjdFVzZXIiLCJjdHgiLCJsb2NhdGlvbiIsInJlcSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiUm91dGVyIiwidG9rZW4iLCJjb29raWUiLCJkaXNwbGF5RXJyb3IiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUcsT0FDMUJDLElBRDBCLEVBRTFCQyxhQUYwQixFQUcxQkMsUUFIMEIsRUFJMUJDLFVBSjBCLEtBS3ZCO0FBQ0gsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxpREFBQSxDQUFZLEdBQUVDLDZDQUFRLGFBQXRCLEVBQW9DO0FBQ3BETixVQURvRDtBQUVwREM7QUFGb0QsS0FBcEMsQ0FBbEI7QUFLQU0sWUFBUSxDQUFDSCxHQUFHLENBQUNJLElBQUwsQ0FBUjtBQUNELEdBUEQsQ0FPRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDs7QUFDRFAsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELENBbEJNO0FBb0JBLE1BQU1TLFNBQVMsR0FBRyxPQUFPWixJQUFQLEVBQWFFLFFBQWIsRUFBdUJDLFVBQXZCLEtBQXNDO0FBQzdEQSxZQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsaURBQUEsQ0FBWSxHQUFFQyw2Q0FBUSxXQUF0QixFQUFrQztBQUFFTjtBQUFGLEtBQWxDLENBQWxCO0FBRUFPLFlBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFDRCxHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0Q7O0FBQ0RQLFlBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxDQVhNO0FBYUEsTUFBTVUsWUFBWSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsUUFBTixLQUFtQjtBQUM3QyxNQUFJRCxHQUFHLENBQUNFLEdBQVIsRUFBYTtBQUNYRixPQUFHLENBQUNWLEdBQUosQ0FBUWEsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUFFQyxjQUFRLEVBQUVIO0FBQVosS0FBdkI7QUFDQUQsT0FBRyxDQUFDVixHQUFKLENBQVFlLEdBQVI7QUFDRCxHQUhELE1BR087QUFDTEMsMkRBQUEsQ0FBWUwsUUFBWjtBQUNEO0FBQ0YsQ0FQTTs7QUFTUCxNQUFNUixRQUFRLEdBQUljLEtBQUQsSUFBVztBQUMxQkMsc0RBQUEsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNBRCx5REFBQSxDQUFZLEdBQVo7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7OztBQ2hEQSxNQUFNZCxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNSyxXQUFXLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRYyxZQUFSLEtBQXlCO0FBQzNDLE1BQUliLFFBQVEsR0FBRyxFQUFmOztBQUVBLE1BQUlELEtBQUssQ0FBQ2UsUUFBVixFQUFvQjtBQUNsQjtBQUVBZCxZQUFRLEdBQUdELEtBQUssQ0FBQ2UsUUFBTixDQUFlaEIsSUFBMUI7QUFFQWlCLFdBQU8sQ0FBQ2hCLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJRCxLQUFLLENBQUNpQixPQUFWLEVBQW1CO0FBQ3hCO0FBQ0FoQixZQUFRLEdBQUdELEtBQUssQ0FBQ2lCLE9BQWpCO0FBRUFELFdBQU8sQ0FBQ2hCLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBR0QsS0FBSyxDQUFDa0IsT0FBakI7QUFFQUYsV0FBTyxDQUFDaEIsS0FBUixDQUFjQyxRQUFkO0FBQ0Q7O0FBQ0RhLGNBQVksQ0FBQ2IsUUFBRCxDQUFaO0FBQ0QsQ0FyQkQ7O0FBdUJBLCtEQUFlQyxXQUFmLEU7Ozs7Ozs7Ozs7QUN2QkEsZSIsImZpbGUiOiJ1dGlsc19hdXRoVXNlcl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKFxyXG4gIHVzZXIsXHJcbiAgcHJvZmlsZVBpY1VybCxcclxuICBzZXRFcnJvcixcclxuICBzZXRMb2FkaW5nXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXBgLCB7XHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHByb2ZpbGVQaWNVcmwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAodXNlciwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwgeyB1c2VyIH0pO1xyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsIGxvY2F0aW9uKSA9PiB7XHJcbiAgaWYgKGN0eC5yZXEpIHtcclxuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogbG9jYXRpb24gfSk7XHJcbiAgICBjdHgucmVzLmVuZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2V0VG9rZW4gPSAodG9rZW4pID0+IHtcclxuICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufTtcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gKGVycm9yLCBkaXNwbGF5RXJyb3IpID0+IHtcbiAgbGV0IGVycm9yTXNnID0ge307XG5cbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxuXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfVxuICBkaXNwbGF5RXJyb3IoZXJyb3JNc2cpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9