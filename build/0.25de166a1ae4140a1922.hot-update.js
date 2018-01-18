webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app2 = new _vue2.default({
  el: '#app',
  data: {
    message: 'Live long and prosper'
  }
});

var app2 = new _vue2.default({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new _vue2.default({
  el: '#app-3',
  data: {
    seen: false //set to false to hide
  }
});

var app4 = new _vue2.default({
  el: '#app-4',
  data: {
    todos: [{ text: 'Create Project' }, { text: 'Add packages' }, { text: 'Build everything' }, { text: 'Have fun learning' }]
  }
});

/***/ })

})