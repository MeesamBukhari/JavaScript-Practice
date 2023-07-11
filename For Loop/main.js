for (var i = 0; i < 3; i++) {
   console.log(i);
}

for (i = 5; i <= 8; i++) {
   console.log(i);
}

for (var i = 0; i < 5; i++) {
   console.log(i);
}

// Creating Table Of 3 Using For Loop
var num = 3;
for ( var i=1; i<=10; i++) {
   console.log(num+ " x " +i+ " = " +(num*i));
}

var num = prompt("Enter a number to generate a table for:");
num = parseInt(num);
for (var i=1; i<=10; i++) {
   console.log(num+ " x " +i+ " = " +(num*i));
}