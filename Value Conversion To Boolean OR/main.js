var a1 = "Cat" || "Dog";      // true || true, returns "Cat"
console.log(a1);
var a2 = false || "Cat";      // false || true, returns "Cat"
console.log(a2);
var a3 = "Cat" || false;      // true || false, returns "Cat"
console.log(a3);
var a4 = "" || false;         // false || false, returns false
console.log(a4);
var a5 = false || "";         // false || false, returns ""
console.log(a5);
var a6 = 0 || 1;              // false || true, returns 1
console.log(a6);
var a7 = 1 || false;          // true || false, returns 1
console.log(a7);
var a8 = true || {};          // true || true, returns true
console.log(a8);
var a9 = false || {};         // false || true, returns {}
console.log(a9);
var a10 = "Cat" || (3 == 4);  // true || false, returns "Cat"
console.log(a10);
var a11 = "Cat" || 0;         // true || false, returns "Cat"
console.log(a11);
var a12 = undefined || "Cat";  // false || true, returns "Cat"
console.log(a12);