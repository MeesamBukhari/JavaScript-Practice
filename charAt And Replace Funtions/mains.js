var a= "To be or not to be";
var b = a.charAt(7);    // returns r
console.log(b);

var str1 = "To be or not to be";
var str2 = str1.replace("be", "hello");
console.log(str2);

var str1 = "To be or not to be";
var str2 = str1.replace(/be/g, "hello");
console.log(str2);

var str1 = "To be or not to be";
var str2 = str1.replace("to", "hello");
console.log(str2);

var str1 = "To be or not to be";
var str2 = str1.replace(/to/i, "hello");
console.log(str2);

var str1 = "To be or not to be";
var str2 = str1.replace(/To/gi, "hello");
console.log(str2);