webpackHotUpdate("static/development/pages/login.js",{

/***/ "./static/template.js":
/*!****************************!*\
  !*** ./static/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
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
            var req, loggedInUser, origin, pageProperties;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = _ref.req;
                    console.log(req.protocol);

                    if (false) {}

                    _context.next = 5;
                    return Object(_static_auth__WEBPACK_IMPORTED_MODULE_4__["getTokenForBrowser"])();

                  case 5:
                    _context.t0 = _context.sent;
                    _context.next = 11;
                    break;

                  case 8:
                    _context.next = 10;
                    return Object(_static_auth__WEBPACK_IMPORTED_MODULE_4__["getTokenForServer"])(req);

                  case 10:
                    _context.t0 = _context.sent;

                  case 11:
                    loggedInUser = _context.t0;
                    origin = req && req.headers && req.headers.host ? req.protocol + '://' + req.headers.host : window.location.origin;
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

/***/ })

})
//# sourceMappingURL=login.js.f7a24a5986188a8888ff.hot-update.js.map