var a = 3;
console.log(a == 6);    // result = false
console.log(a === 6);   // result = false
console.log(a != 6);    // result = true
console.log(a !== 6);   // result = true
console.log(a > 6);     // result = false
console.log(a < 6);     // result = true
console.log(a >= 6);    // result = false
console.log(a <= 6);    // result = true

// Output of comaprison operators is always in the form of boolean value i.e; true/false

var a = 3;
console.log(a == 3);    // result = true
console.log(a == "3");    // result = true
console.log(a == 6);    // result = false

console.log(a === 3);    // result = true
console.log(a === "3");    // result = false
console.log(a === 6);    // result = false


var a = 5;
var b = 6;
console.log(a == b);    // result = false
console.log(a != b);    // result = true
console.log(a > b);     // result = false
console.log(a < b);     // result = true
console.log(a >= b);    // result = false
console.log(a <= b);    // result = true


var a = 5;
var b = 5;
console.log(a == b);    // result = true
console.log(a != b);    // result = false
console.log(a > b);     // result = false
console.log(a < b);     // result = false
console.log(a >= b);    // result = true
console.log(a <= b);    // result = true


var a = 5;
var b = "5";
console.log(a == b);
console.log(a === b);


var a = 5;
var b = "Hello";
console.log(a == b);
console.log(a === b);


var a = 5;
var b = true;
console.log(a == b);
console.log(a === b);