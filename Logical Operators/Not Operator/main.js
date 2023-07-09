var a = 60;
var b = !(a < 50);
console.log(b);      // result = true

var c = 80;
var d = !(c > 50);
console.log(d);      // result = false

var a = 60;
var b = a > 100;
var c = !b;
var d = !(a > 100);
console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);
console.log("D = " + d);

var a = 60;
var b = a < 100;
var c = !b;
var d = !(a < 100);
console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);
console.log("D = " + d);

var e = !true;
console.log("E = " + e);