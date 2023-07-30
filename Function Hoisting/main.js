var total = sum(4,3);   // Calling before declaration
console.log("Total =",total);

function sum (a, b) {
   return a + b;
}



console.log("A before =",a);
var a = 6;
console.log("A after =",a);