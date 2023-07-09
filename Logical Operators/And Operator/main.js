var a = 60;
var b = a > 50 && a < 70;
console.log(b);   // result = true

var c = 80;
var d = c > 50 && c < 70;
console.log(d);   // result = false

var a = 5;
var b = 6;
var c = a > b && b < 10;
console.log(c);

var a = 5;
var b = 6;
var c = a < b && b < 10;
console.log(c);

var a = 5;
var b = 6;
var c = a < b && b < 10 && b > 4;
console.log(c);

var a = 5;
var b = 6;
var c = a < b && b < 10 && b == 6;
console.log(c);

var a = 5;
var b = 6;
var c = a < b && b < 10 && b > 8;
console.log(c);