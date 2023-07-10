var age = 45;
// 45 will be converted to true, if will be executed
if (age) {
   console.log("In if, Age = " + age);
}
else {
   console.log("In else, Age = " + age);
}

var name1 = null;
// null will be converted to false, else will be executed
if (name1) {
   console.log("In if, Name = " + name1);
}
else {
   console.log("In else, Name = " + name1);
}

var name1 = "Hello";
// Hello will be converted to true, if will be executed
if (name1) {
   console.log("In if, Name = " + name1);
}
else {
   console.log("In else, Name = " + name1);
}

var name1 = "";
// it will be converted to false, else will be executed
if (name1) {
   console.log("In if, Name = " + name1);
}
else {
   console.log("In else, Name = " + name1);
}

var name1; // default value is undefined
// it will be converted to false, else will be executed
if (name1) {
   console.log("In if, Name = " + name1);
}
else {
   console.log("In else, Name = " + name1);
}