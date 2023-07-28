var str1 = "To be or not to be";
var str2 = str1.split(" ");    // split with space
console.log(str2);

var str1 = "To be or not to be";
var str2 = str1.split("");    // split after each character
console.log(str2);


var str = "To, be or|not to,be";
var a = str.split(",");
console.log(a);
var b = str.split(" ");
console.log(b);
var c = str.split("|");
console.log(c);