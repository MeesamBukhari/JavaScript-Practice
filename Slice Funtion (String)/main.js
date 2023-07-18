var a = "Hello World";
var b = a.slice(6,9);   // 6 to (9-1)
console.log(b);         // returns Wor

var a = "Hello World";
var b = a.slice(6);     // 6 to end
console.log(b);         // returns World

var a = "Hello World";
var b = a.slice(-5,-2); // -5 to -3
console.log(b);         // returns Wor