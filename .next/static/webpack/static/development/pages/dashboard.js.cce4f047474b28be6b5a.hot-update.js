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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      if (evt.key === 'Enter') {
        _this.submitNewQuery(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "turnOnAlert", function (id) {
      _this.setState({
        clickedId: id,
        intention: 'activate'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "turnOffAlert", function (id) {
      _this.setState({
        clickedId: id,
        intention: 'deactivate'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deleteAlert", function (id) {
      _this.setState({
        clickedId: id,
        intention: 'delete'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConfirmation", function () {
      fetch(origin + '/queries/' + _this.state.intention, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          query_id: _this.state.clickedId,
          user: _this.props.loggedInUser
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data['success']) {
          _this.setState({
            data: data['data'],
            isOpen: false
          });
        } else {
          console.log('error when querying ' + _this.state.intention);

          _this.setState({
            isOpen: false
          });
        }
      });
    });

    _this.state = {
      newQuery: '',
      data: [],
      clickedId: '',
      intention: '',
      isOpen: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitNewQuery = _this.submitNewQuery.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.turnOnAlert = this.turnOnAlert.bind(this)
    // this.turnOffAlert = this.turnOffAlert.bind(this)

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
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/checkout?q=".concat(encodeURIComponent(this.state.newQuery)), "/checkout/".concat(encodeURIComponent(this.state.newQuery)));
      } else {}
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      var items = [];

      for (var i = 0; i < data.length; i++) {
        (function (that, i) {
          var x = data[i];
          items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
            textAlign: "left",
            float: "right",
            key: x._id
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
            size: "mini",
            floated: "left",
            src: x.recent_results.length ? x.recent_results[0].image_link : 'http://react.semantic-ui.com/images/wireframe/image.png'
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Header, null, titleCase(x.searchQuery)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: x.recent_results.length ? x.recent_results[0]['listing_link'] : ''
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, x.recent_results.length ? truncateString(x.recent_results[0]['name'], 42) : ''))), x.recent_results.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, ~x.recent_results[0].new_price ? '$' + x.recent_results[0].new_price : '$' + x.recent_results[0].original_price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'Found on ' + x.recent_results[0].source + ' at'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, moment__WEBPACK_IMPORTED_MODULE_5___default()(x.recent_results[0].found_time).format("dddd, MMMM Do, h:mm a"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "No new items have been found yet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, {
            extra: true
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ui two buttons attached"
          }, x.active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Popup"], {
            trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              inverted: true,
              color: "green",
              icon: "toggle on",
              content: "On",
              onClick: that.turnOffAlert.bind(that, x._id)
            }),
            content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              color: "green",
              onClick: that.handleConfirmation,
              content: "Confirm"
            }),
            open: that.state.isOpen,
            on: "click",
            position: "top right",
            onClose: that.handleClose
          }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Popup"], {
            trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              inverted: true,
              color: "red",
              icon: "toggle off",
              content: "Off",
              onClick: that.turnOnAlert.bind(that, x._id)
            }),
            content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              color: "green",
              onClick: that.handleConfirmation,
              content: "Confirm"
            }),
            on: "click",
            position: "top right",
            onClose: that.handleClose
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Popup"], {
            trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              color: "red",
              icon: "delete",
              onClick: that.deleteAlert.bind(that, x._id),
              content: "Delete"
            }),
            content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              color: "green",
              onClick: that.handleConfirmation,
              content: "Confirm"
            }),
            on: "click",
            position: "top right",
            onClose: that.handleClose
          }))))));
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
        placeholder: "Maison Margiela Tabi"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "newQueryButton button",
        onClick: this.submitNewQuery
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "button__mask"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "button__text",
        id: "query_button"
      }, "Monitor Item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "My Items"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        stackable: true,
        centered: true,
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
//# sourceMappingURL=dashboard.js.cce4f047474b28be6b5a.hot-update.js.map