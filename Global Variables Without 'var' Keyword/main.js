a = 7;                  // Without 'var', stil Global Variable
function sum1 () {
   var b = 6;           // Local Variable
   a = b + 5;
   console.log("A =",a);// Accessing Global Variable
}
sum1 ();
console.log("A =",a);   // 11. Value of 'a' Updated

var a = 7;              // Without 'var', stil Global Variable
function sum2 () {
   b = 2;               // Global Variable, because it's without 'var'
   a = b + 5;
   console.log("A =",a);// Accessing global Variable
}
sum2 ();
console.log("B =",b);   // 'b' available outside of function, because Global Variable