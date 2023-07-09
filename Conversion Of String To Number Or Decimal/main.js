var a = 6;
var b = "5";
var c = a + parseInt(b);
console.log(c);

// OR

var a = 6;
var b = "5";
var c = parseInt(b);
var d = a + c;
console.log(d);

var a = 6;
var b = "5.5";
var c = parseInt(b);
var d = a + c;
console.log(c);
console.log(d);

var a = 6;
var b = "5.5";
var c = parseFloat(b);
var d = a + c;
console.log(c);
console.log(d);

var a = 6;
var b = prompt("What is your age?");
var c = parseInt(b);
var d = a + c;
console.log(c);
console.log(d);

var a = 6;
var b = prompt("What is your age?");
var c = parseFloat(b);
var d = a + c;
console.log(c);
console.log(d);

var a = 6;
var b = prompt("What is your age?");
var c = Number(b);
var d = a + c;
console.log(c);
console.log(d);

console.log(Number("Hello"));

console.log(Number("9 9"));

console.log(Number(true));

console.log(Number(false));