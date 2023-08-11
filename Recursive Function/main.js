function factorial (n) {
   if (n <= 1) {
      // Recursion will stop when this condition match
      return 1;
   }
   else {
      return n * factorial (n-1);   // calling itself
   }
}
console.log(factorial(3));
console.log(factorial(6));