var i = 1;
while (i <= 10) {
   console.log("I =",i);
   i++;
}

var doContinue = true;
while (doContinue) {
   console.log("Hello World");
   var choice = prompt("Enter Y to continue or any other key to stop!");
   if (choice.toLowerCase() !== 'y') {
      doContinue = false;
   }
}
console.log("Loop Ended!");