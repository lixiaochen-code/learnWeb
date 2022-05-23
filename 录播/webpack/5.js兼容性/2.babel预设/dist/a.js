"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _module2 = _interopRequireDefault(require("./module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 1;

var b = function b() {
  console.log("b");
};

function method() {
  var _this = this;

  var c = function c() {
    console.log(_this);
  };

  c();
}

var counter = Math.pow(2, 3);
b();
method();
console.log(void 0);
new Promise(function (resove) {
  resove();
});