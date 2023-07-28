// Functions
console.log("Before Function");
function showMessage () {
    console.log("Hello World");
}
console.log("After Function");
showMessage();
console.log("After Function Call");


// Passing Data To Function
function multiply (num1, num2) {
    var num3 = num1 * num2;
    console.log("Num3 =",num3);
}
multiply(3,6);
multiply(4,2);


function showMessage (name) {
    console.log("Hello",name);
}
showMessage("Mike");
showMessage("John");


// Function Return
function test () {

}
var a = test();
console.log(a); // undefined

function test () {
    return 45;
}
var a = test(); // return 45
console.log(a); // 45


// Parameter Rules
function showMessage (name) {
    console.log("Hello",name);
}
showMessage("Mike");    // Hello Mike
showMessage(45);        // Hello 45
showMessage(true);      // Hello true
showMessage();          // Hello undefined
showMessage("Mike", 12);// Hello Mike

function sum (a,b) {
    console.log(a+b);
}
sum(2,4);
sum(5,3);
sum(6,4);
sum(12);


// Function Return
function calculateScore (sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3;
}
function findGrade (score) {
    if (score >= 80 && score <= 100) {
        console.log("Grade A1");
    }
    else if (score >= 70 && score < 80) {
        console.log("Grade A");
    }
    else if (score >= 60 && score < 70) {
        console.log("Grade B");
    }
    else if (score >= 50 && score < 60) {
        console.log("Grade C");
    }
    else if (score >= 40 && score < 50) {
        console.log("Grade D");
    }
    else {
        console.log("Grade F");
    }
}
// findGrade(56);
// findGrade(81);
// findGrade(20);
var score1 = calculateScore(45,67,89);
var score2 = calculateScore(85,95,72);
console.log("Score1 =",score1);
console.log("Score2 =",score2);
findGrade(score1);
findGrade(score2);


// Function in Expressions
function multiply (num1, num2) {
    return num1 * num2;
}
function sum (a, b) {
    return a + b;
}
var mul = multiply(2,5);
var add = sum(mul,5);
console.log("Product =",mul);
console.log("Sum =",add);

function multiply (num1, num2) {
    return num1 * num2;
}
var a = multiply(3,4) + 5;
console.log(a);

function multiply (num1, num2) {
    return num1 * num2;
}
function sum (a, b) {
    // result of multiply sum with value of b
    return multiply(a, b) + b;
}
var total = sum(3,4) + 6;
console.log(total);

function multiply (num1, num2) {
    return num1 * num2;
}
function sum (a, b) {
    // Call multiply first and result passed to sum
    return a + b;
}
var total = sum(multiply(3,4),2) + 6;
console.log(total);