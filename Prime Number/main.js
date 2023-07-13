var num = prompt("Enter a number: (to check whether it's even or odd)");
var isPrime = true;
for (var i=2; i<num; i++) {
   var result = num % i;
   if (result == 0) {
      alert(num + " is not a Prime Number & " +num+ " was divided completely by " +i);
      isPrime = false;
      break;
   }
}
if (isPrime) {
   alert(num + " is a Prime Number");
}