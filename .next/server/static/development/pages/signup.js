module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      isLoggedIn: props.isLoggedIn,
      menuOpen: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      event.preventDefault(); // Using the parent component's state to keep track of the menu

      this.setState({
        menuOpen: false
      });
      Router.push("/checkout?q=".concat(this.state.newQuery), "/checkout/".concat(this.state.newQuery));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          menuOpen = _this$state.menuOpen,
          isLoggedIn = _this$state.isLoggedIn;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-component"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "logo-link"
      }, "heatseeker"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__["push"], {
        noOverlay: true,
        isOpen: menuOpen,
        pageWrapId: "page-wrap"
      }, isLoggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/dashboard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/features"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "Features"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/logout"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "Logout")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/features"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "Features"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/signup"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "menu-item"
      }, "Login")))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Header.propTypes = {
  isLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.scss":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/template */ "./static/template.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Signup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    var _this;

    _classCallCheck(this, Signup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this, props));
    _this.state = {
      username: '',
      password: '',
      v_password: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitSignup = _this.submitSignup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Signup, [{
    key: "handleChange",
    value: function handleChange(evt) {
      this.setState(_defineProperty({}, evt.target.name, evt.target.value));
    }
  }, {
    key: "submitSignup",
    value: function submitSignup(evt) {
      evt.preventDefault(); //Send form data to server
      //Copy of state

      var stateCopy = _objectSpread({}, this.state);

      if (stateCopy.username.length === 0 || ~stateCopy.password.length === 0 || ~stateCopy.v_password.length === 0) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default()({
          title: 'Darn',
          text: 'Please fill out all the fields',
          type: 'error',
          confirmButtonText: 'Cool'
        });
      }

      if (stateCopy.password === stateCopy.v_password) {
        fetch(this.props.origin + '/register', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(stateCopy)
        }).then(function (response) {
          return response.json();
        }).then(function (json) {
          return json['success'] ? next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
            pathname: '/thankyou'
          }) : sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Darn',
            text: json['message'],
            type: 'error',
            confirmButtonText: 'Cool'
          });
        });
      } else {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default()({
          title: 'Darn',
          text: 'Passwords dont match',
          type: 'error',
          confirmButtonText: 'Cool'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-text"
      }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "marginBottomFive"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-field",
        onChange: this.handleChange,
        type: "text",
        name: "username",
        value: this.state.username,
        placeholder: "Email"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-field",
        onChange: this.handleChange,
        type: "password",
        name: "password",
        value: this.state.password,
        placeholder: "Password"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-field",
        onChange: this.handleChange,
        type: "password",
        name: "v_password",
        value: this.state.v_password,
        placeholder: "Confirm password"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "checkid",
        style: {
          wordWrap: 'break-word'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "checkid",
        className: "checkbox",
        type: "checkbox",
        value: "test"
      }), "Only send emails about clothing alerts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "marginBottomFive"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button",
        onClick: this.submitSignup
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "button__mask"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "button__text"
      }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "button__text button__text--bis"
      }, "Go"))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_static_template__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup));

/***/ }),

/***/ "./settings.js":
/*!*********************!*\
  !*** ./settings.js ***!
  \*********************/
/*! exports provided: clientID, domain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientID", function() { return clientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
var clientID = process.env.CLIENTID || 'mb083dxopiw3Z0NLuR6MXttAr5jQdDah'; // your clientID

var domain = process.env.DOMAIN || 'http://localhost:3000'; // your domain



/***/ }),

/***/ "./static/auth.js":
/*!************************!*\
  !*** ./static/auth.js ***!
  \************************/
/*! exports provided: saveToken, deleteToken, getTokenForBrowser, getTokenForServer, verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToken", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteToken", function() { return deleteToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenForBrowser", function() { return getTokenForBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenForServer", function() { return getTokenForServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings */ "./settings.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






function getJWK() {
  return _getJWK.apply(this, arguments);
}

function _getJWK() {
  _getJWK = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, jwk;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://".concat(_settings__WEBPACK_IMPORTED_MODULE_4__["domain"], "/.well-known/jwks.json"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            jwk = _context.sent;
            return _context.abrupt("return", jwk);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getJWK.apply(this, arguments);
}

function saveToken(token) {
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', token, {
    expires: 21
  });
}

;

function deleteToken() {
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');
}

;

function verifyToken(_x) {
  return _verifyToken.apply(this, arguments);
}

function _verifyToken() {
  _verifyToken = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", true);

          case 2:
            return _context2.abrupt("return", false);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _verifyToken.apply(this, arguments);
}

function getTokenForBrowser() {
  return _getTokenForBrowser.apply(this, arguments);
}

function _getTokenForBrowser() {
  _getTokenForBrowser = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('user'));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getTokenForBrowser.apply(this, arguments);
}

function getTokenForServer(_x2) {
  return _getTokenForServer.apply(this, arguments);
}

function _getTokenForServer() {
  _getTokenForServer = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req) {
    var jwtFromCookie, token, validToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.headers.cookie) {
              _context4.next = 13;
              break;
            }

            jwtFromCookie = req.headers.cookie.split(';').find(function (c) {
              return c.trim().startsWith('user=');
            });

            if (jwtFromCookie) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", undefined);

          case 4:
            token = jwtFromCookie.split('=')[1];
            _context4.next = 7;
            return verifyToken(token);

          case 7:
            validToken = _context4.sent;

            if (!validToken) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt("return", token);

          case 12:
            return _context4.abrupt("return", undefined);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getTokenForServer.apply(this, arguments);
}



/***/ }),

/***/ "./static/template.js":
/*!****************************!*\
  !*** ./static/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _static_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/auth */ "./static/auth.js");
/* harmony import */ var _stylesheets_empty_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/empty.css */ "./stylesheets/empty.css");
/* harmony import */ var _stylesheets_empty_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_empty_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stylesheets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stylesheets/index.css */ "./stylesheets/index.css");
/* harmony import */ var _stylesheets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stylesheets_index_mobile_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stylesheets/index-mobile.css */ "./stylesheets/index-mobile.css");
/* harmony import */ var _stylesheets_index_mobile_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_index_mobile_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* harmony default export */ __webpack_exports__["default"] = (function (Page) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(Template, _React$Component);

      _createClass(Template, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
            var req, loggedInUser, protocol, origin, pageProperties;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = _ref.req;

                    if (true) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return Object(_static_auth__WEBPACK_IMPORTED_MODULE_4__["getTokenForBrowser"])();

                  case 4:
                    _context.t0 = _context.sent;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return Object(_static_auth__WEBPACK_IMPORTED_MODULE_4__["getTokenForServer"])(req);

                  case 9:
                    _context.t0 = _context.sent;

                  case 10:
                    loggedInUser = _context.t0;
                    protocol = req && req.secure ? 'https' : 'http';
                    origin = req && req.headers && req.headers.host ? protocol + '://' + req.headers.host : window.location.origin;
                    _context.next = 15;
                    return Page.getInitialProps;

                  case 15:
                    _context.t1 = _context.sent;

                    if (!_context.t1) {
                      _context.next = 20;
                      break;
                    }

                    _context.next = 19;
                    return Page.getInitialProps(req);

                  case 19:
                    _context.t1 = _context.sent;

                  case 20:
                    pageProperties = _context.t1;
                    return _context.abrupt("return", _objectSpread({}, pageProperties, {
                      loggedInUser: loggedInUser,
                      origin: origin,
                      isLoggedIn: !!loggedInUser
                    }));

                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      function Template(props) {
        var _this;

        _classCallCheck(this, Template);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Template).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWindowSizeChange", function () {
          _this.setState({
            width: window.innerWidth
          });
        });

        _this.state = _objectSpread({}, props);
        return _this;
      }

      _createClass(Template, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener('resize', this.handleWindowSizeChange);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.setState({
            width: window.innerWidth,
            isMobile: window.innerWidth <= 500
          });
        } // make sure to remove the listener
        // when the component is not mounted anymore

      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.handleWindowSizeChange);
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "app"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1",
            charSet: "utf-8"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
            href: "https://fonts.googleapis.com/css?family=Space+Mono:700",
            rel: "stylesheet"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
            href: "https://fonts.googleapis.com/css?family=Work+Sans:100,200,300",
            rel: "stylesheet"
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], this.state), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
            id: "page-wrap"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Page, _extends({
            className: "page-wrap"
          }, this.state))));
        }
      }]);

      return Template;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ }),

/***/ "./stylesheets/empty.css":
/*!*******************************!*\
  !*** ./stylesheets/empty.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./stylesheets/index-mobile.css":
/*!**************************************!*\
  !*** ./stylesheets/index-mobile.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./stylesheets/index.css":
/*!*******************************!*\
  !*** ./stylesheets/index.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 8:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "sweetalert2/dist/sweetalert2.js":
/*!**************************************************!*\
  !*** external "sweetalert2/dist/sweetalert2.js" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2/dist/sweetalert2.js");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map