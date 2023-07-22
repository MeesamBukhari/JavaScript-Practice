var a = Math.random();                 // range = 0-0.9999999999999
console.log("A = " +a);

var a = Math.random() * 10;            // range = 0-9, gives a number greater than 0 too
console.log("A = " +a);

var a = Math.floor(Math.random() * 10); // range = 0-9, gives a whole number value
console.log("A = " +a);

var a = Math.floor(Math.random() * 11);   // range = 0-10
console.log("A = " +a);

var a = Math.floor(Math.random() * 116);   // range = 0-115
console.log("A = " +a);

var a = Math.floor(Math.random() * 10) + 1;  // range = 1-10
console.log("A = " +a);

var a = Math.floor(Math.random() * 116) + 1;  // range = 1-115
console.log("A = " +a);

var a = Math.floor(Math.random() * (25 - 15)) + 15;  // range = 15-24
//                          (max num - min num) + min num
console.log("A = " +a);




var x = Math.random();                             // range = 0-0.9999999999999
console.log("Before Calculation = " +x);
x = x * (9999 - 1000) + 1000;                      // range = 1000-9999 (means 4-digit OTP)
console.log("After Calculation = " + x);
console.log("Floor Calculation = " + Math.floor(x));  // decimal values removed, only whole numbers will be generated