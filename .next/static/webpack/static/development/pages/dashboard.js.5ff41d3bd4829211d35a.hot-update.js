webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_secure_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/secure-template */ "./static/secure-template.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function titleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

function truncateString(str, len) {
  if (str.length > len) return str.substring(0, len) + '...';else return str;
}

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      if (evt.key === 'Enter') {
        _this.submitNewQuery(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "open", function () {
      return _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      return _this.setState({
        open: false
      });
    });

    _this.state = {
      newQuery: '',
      data: [],
      open: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitNewQuery = _this.submitNewQuery.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.turnOnAlert = _this.turnOnAlert.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.turnOffAlert = _this.turnOffAlert.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.isLoggedIn) {
        fetch(this.props.origin + '/fetch_dashboard', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            user: this.props.loggedInUser
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data['success']) {
            _this2.setState({
              data: data['data']
            });
          } else {
            _this2.setState({
              data: []
            });
          }
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      this.setState(_defineProperty({}, evt.target.name, evt.target.value));
    }
  }, {
    key: "submitNewQuery",
    value: function submitNewQuery(evt) {
      evt.preventDefault();

      if (this.state.newQuery.length) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/checkout?q=".concat(this.state.newQuery), "/checkout/".concat(this.state.newQuery));
      } else {}
    }
  }, {
    key: "turnOnAlert",
    value: function turnOnAlert(id) {
      var _this3 = this;

      console.log(id);
      fetch(origin + '/queries/activate', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          query_id: id,
          user: this.props.loggedInUser
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data['success']) {
          _this3.setState({
            data: data['data'],
            open: false
          });
        } else {
          console.log('error when activating query!');

          _this3.setState({
            open: false
          });
        }
      });
    }
  }, {
    key: "turnOffAlert",
    value: function turnOffAlert(id) {
      var _this4 = this;

      console.log(id);
      fetch(origin + '/queries/deactivate', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          query_id: id,
          user: this.props.loggedInUser
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data['success']) {
          _this4.setState({
            data: data['data'],
            open: false
          });
        } else {
          console.log('error when deactivating query!');

          _this4.setState({
            open: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          data = _this$state.data;
      var items = [];

      for (var i = 0; i < data.length; i++) {
        (function (that, i) {
          var x = data[i];
          items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
            key: x._id
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"], {
            href: x.recent_results.length ? x.recent_results[0]['listing_link'] : ''
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
            size: "mini",
            floated: "left",
            src: x.recent_results.length ? x.recent_results[0].image_link : 'http://react.semantic-ui.com/images/wireframe/image.png'
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Header, null, titleCase(x.searchQuery)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, x.recent_results.length ? truncateString(x.recent_results[0]['name'], 42) : ''), x.recent_results.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, ~x.recent_results[0].new_price ? '$' + x.recent_results[0].new_price : '$' + x.recent_results[0].original_price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, 'Found on ' + x.recent_results[0].source), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, moment__WEBPACK_IMPORTED_MODULE_5___default()(x.recent_results[0].found_time).format("dddd, MMMM Do, h:mm a"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "No searches yet!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))))));
        })(this, i);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-field",
        id: "newQuery",
        onKeyPress: this.handleKeyPress,
        onChange: this.handleChange,
        type: "text",
        name: "newQuery",
        value: this.state.newQuery,
        placeholder: "Raf Simons Closer Parka"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "newQueryButton button",
        onClick: this.submitNewQuery
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "button__mask"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "button__text",
        id: "query_button"
      }, "Monitor Item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        stackable: true,
        relaxed: true,
        columns: 3
      }, items)));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_static_secure_template__WEBPACK_IMPORTED_MODULE_2__["default"])(Dashboard));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dashboard")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=dashboard.js.5ff41d3bd4829211d35a.hot-update.js.map