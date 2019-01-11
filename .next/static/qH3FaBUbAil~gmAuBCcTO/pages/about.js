(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{30:function(e,t,n){"use strict";var r=n(8),o=n.n(r),a=n(0),i=n.n(a),c=n(27),s=n.n(c),l=n(14),u=n(10);n(65),n(66),n(67),n(68),n(69);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){g(e,t,n[t])})}return e}function h(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){return function(t){function n(e){var t,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,o=b(n).call(this,e),t=!o||"object"!==f(o)&&"function"!=typeof o?v(r):o,g(v(v(t)),"handleWindowSizeChange",function(){t.setState({width:window.innerWidth})}),t.state=m({},e),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(n,i.a.Component),y(n,null,[{key:"getInitialProps",value:function(){var t,n=(t=o.a.mark(function t(n){var r,a,i,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.req,console.log(r.protocol),t.next=5,Object(u.b)();case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,Object(u.c)(r);case 10:t.t0=t.sent;case 11:return a=t.t0,i=r&&r.headers&&r.headers.host?r.protocol+"://"+r.headers.host:window.location.origin,t.next=15,e.getInitialProps;case 15:if(t.t1=t.sent,!t.t1){t.next=20;break}return t.next=19,e.getInitialProps(r);case 19:t.t1=t.sent;case 20:return c=t.t1,t.abrupt("return",m({},c,{loggedInUser:a,origin:i,isLoggedIn:!!a}));case 22:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e){h(a,r,o,i,c,"next",e)}function c(e){h(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return n.apply(this,arguments)}}()}]),y(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentDidMount",value:function(){this.setState({width:window.innerWidth,isMobile:window.innerWidth<=500})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return i.a.createElement("div",{id:"app"},i.a.createElement(s.a,null,i.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1",charSet:"utf-8"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Space+Mono:700",rel:"stylesheet"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Work+Sans:100,200,300",rel:"stylesheet"})),i.a.createElement(l.a,this.state),i.a.createElement("main",{id:"page-wrap"},i.a.createElement(e,p({className:"page-wrap"},this.state))))}}]),n}()}},412:function(e,t,n){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=n(413),{page:e.exports.default}})},413:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),i=n.n(a),c=(n(91),n(6),n(10),n(30));t.default=Object(c.a)(function(e){e.isLoggedIn;return o.a.createElement("div",{className:"home-page"},o.a.createElement("div",{className:"text-section"},o.a.createElement("h1",{className:"title text-block"},"About"),o.a.createElement("div",{className:"text-block"},"Heatseeker is a tool to help people find rare pieces from almost every marketplace on the web."),o.a.createElement("div",{className:"text-block"},"Whenever a new item pops up we'll send you an email with a link!"),o.a.createElement("div",{className:"text-block"},"Heatseeker is in beta now, which means its completely free."),o.a.createElement("div",{className:"text-block"},"Please email me at hello@heatseeker.io if you have any questions or suggestions for the site!"),o.a.createElement("div",{className:"text-block"},"- Zack")),o.a.createElement(i.a,{href:"/signup"},o.a.createElement("div",{className:"go"},o.a.createElement("div",{className:"index-button button"},o.a.createElement("span",{className:"button__mask"}),o.a.createElement("span",{className:"button__text"},"Sign Up"),o.a.createElement("span",{className:"button__text button__text--bis"},"Go")))))})},91:function(e,t,n){"use strict";n(0),n(9),n(14)}},[[412,1,0]]]);