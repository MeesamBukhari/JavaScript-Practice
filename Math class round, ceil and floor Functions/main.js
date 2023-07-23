// Math.round(x) returns the value of x rounded to its nearest integer.
// Math.round
var average = (15 + 23 + 39) / 3;      // 25.6666
var roundedAverage = Math.round(average);    // 26
console.log(roundedAverage);

var a = Math.round(4.7);      // 5
console.log(a);
var b = Math.round(4.1);      // 4
console.log(b);
var c = Math.round(4.5);      // 5
console.log(c);
var d = Math.round(-4.1);     //-4
console.log(d);
var e = Math.round(-4.7);     // -5
console.log(e);
var f = Math.round(-4.5);     // -4
console.log(f);
var g = Math.round(5);        // 5
console.log(g);

// Math.ceil(x) returns the value of x rounded up to its nearest integer.
// Math.ceil
var a = Math.ceil(4.7);      // 5
console.log(a);
var b = Math.ceil(4.1);      // 5
console.log(b);
var c = Math.ceil(-4.1);      // -4
console.log(c);
var d = Math.ceil(-4.7);     //-4
console.log(d);

// Math.floor(x) returns the value of x rounded down to its nearest integer.
// Math.floor
var a = Math.floor(4.7);      // 4
console.log(a);
var b = Math.floor(4.1);      // 4
console.log(b);
var c = Math.floor(-4.1);      // -5
console.log(c);
var d = Math.floor(-4.7);     // -5
console.log(d);