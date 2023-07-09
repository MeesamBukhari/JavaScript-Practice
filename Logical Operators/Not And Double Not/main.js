console.log(!1);     // result = false
console.log(!0);     // result = true
console.log(!!1);    // result = true
console.log(!!0);     // result = false
console.log(!!45);     // result = true

var a = 6;
var b = !a;
var c = !!a;
console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);

var a = 0;
var b = !a;
var c = !!a;
console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);

var a = -5;
var b = !a;
var c = !!a;
console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);