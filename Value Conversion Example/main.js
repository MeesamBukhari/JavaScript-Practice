var a = 6;
var b = 8;
var c = a && b;
console.log("C = " + c);

var a = 0;
var b = 8;
var c = a && b;
console.log("C = " + c);

var c = true && 0;
console.log("C = " + c);

var c = true && false;
console.log("C = " + c);

var c = true && "";
console.log("C = " + c);

var c = true && null;
console.log("C = " + c);

var c = true && {};
console.log("C = " + c);

var c = false && {};
console.log("C = " + c);

var c = true && null && "Cat";
console.log("C = " + c);

var c = true && 0 && "Cat";
console.log("C = " + c);

var c = true && 1 && "Hello";
console.log("C = " + c);

var c = true || 0 || "Cat";
console.log("C = " + c);

var c = "" || "Cat" || 0;
console.log("C = " + c);