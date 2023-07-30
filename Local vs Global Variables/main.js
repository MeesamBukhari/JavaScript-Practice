var a = 8;              // Global Variable
function sum1 () {
   var b = 5;           // Local Variable
   a = b + 6;           // Global Variable Updated
}
sum1 ();
console.log("A =",a);   // 11. Accessing Affected Global Variable

var a = 7;              // Global Variable
function sum2 () {
   var b = 6;           // Local Variable
   var c = a + b;
   console.log("C =",c);// 13. Accessing Global Variable
}
sum2 ();
console.log("A =",a);   // 7

var a = 7;              // Global Variable
function sum3 () {
   var b = 6;           // Local Variable
   a = b + 5;
   console.log("A =",a);// Accessing Global Variable
}
sum3 ();
console.log("A =",a);   // 11. Value of 'a' updated

var a = 7;              // Global Variable
function sum4 () {
   var a = 6;           // Local Variable 'a', same name as Global Variable
   a = 3 + 2;           // Local 'a' variable will be affected
   console.log("A =",a);// 5. Access Local Variable
}
sum4 ();
console.log("A =",a);   // 7. Access Global Variable