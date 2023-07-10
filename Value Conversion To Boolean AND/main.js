var a1 = "Cat" && "Dog";   // true && fasle, returns "Dog"
console.log(a1);
var a2 = false && "Cat";   // false && true, returns false
console.log(a2);
var a3 = "Cat" && false;   // true && false, returns false
console.log(a3);
var a4 = "" && false;      // false && false, returns ""
console.log(a4);
var a5 = false && "";      // false && false, returns false
console.log(a5);
var a6 = 0 && 1;           // false && true, returns 0
console.log(a6);
var a7 = 1 && false;       // true && false, returns false
console.log(a7);
var a8 = true && {};       // true and true, returns {}
console.log(a8);
var a9 = false && {};      // false && true, returns false
console.log(a9);
var a10 = "Cat" && 0;      // true && false, returns 0
console.log(a10);
var a11 = "Cat" && 0;      // true && false, returns 0
console.log(a11);
var a12 = undefined && "Cat"; // false && true, returns undefined
console.log(a12);