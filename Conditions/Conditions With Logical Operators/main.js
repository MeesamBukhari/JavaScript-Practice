// And Logical Operator
var marks = prompt("Enter your marks:");
if (marks >= 80 && marks <= 100) {
   console.log("Grade A1");
}
else if (marks >= 70 && marks < 80) {
   console.log("Grade A");
}
else if (marks >= 60 && marks < 70) {
   console.log("Grade B");
}
else if (marks >= 50 && marks < 60) {
   console.log("Grade C");
}
else if (marks >= 40 && marks < 50) {
   console.log("Grade D");
}
else {
   console.log("Grade F");
}

// Or Logical Operator
var input = prompt("Enter any letter: (a-z or A-Z) (to check whether it is vowel or a consonant)");
input = input.toUpperCase();
if (input == "A" || input == "E" || input == "I" || input == "O" || input == "U") {
   console.log("It's a Vowel");
}
else {
   console.log("It's a Consonant");
}