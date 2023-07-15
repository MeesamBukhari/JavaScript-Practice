var arr1 = ["Hello", "World", "Bye"];
console.log(arr1[2], arr1[0]);
var arr2 = [29, 38, 16, 22];
console.log(arr2[0]);
var arr3 = [true, false, true, false, false];
console.log(arr3[3]);
var arr4 = [23.2, 45.8, 98.12];
console.log(arr4[1]);
var arr5 = [{name: "John"}, {name: "Jason"}];
console.log(arr5[1]);
var arr6 = [74, "Hello", true, {name: "John"}];
console.log(arr6[3]);
var  foods = ["Pizza", "Burger", "Sandwich"];
console.log(foods[1]);
var  foods1 = ["Pizza", "Burger", "Sandwich", "Fries"];
console.log(foods1);

// Add/Update Elements
var foods = [];
console.log(foods);
foods[0] = "Pizza";
foods[1] = "Burger";
foods[2] = "Snacks";
console.log(foods);
console.log(foods[1]);
console.log(foods[5]);
foods[7] = "Sandwich";
console.log(foods);
console.log(foods[4]);
console.log(foods[7]);
foods[7] = "Fries";
console.log(foods[7]);
   
// Length Property
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods.length);
var arr = [];
console.log(arr.length);

// Push Function
var foods = [];
foods.push("Pizza");
foods.push();
foods.push("Burger", "Snacks");
foods.push("Sandwich");
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods[3]);

var countries = [];
countries.push("Pakistan");
countries.push("China");
countries.push("Japan", "Korea");
countries.push("Iran");
console.log(countries);
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);
console.log(countries[4]);

// Array Data Structure
var foods = [];
foods.push(prompt("Enter first value:"));
foods.push(prompt("Enter second value:"));
foods.push(prompt("Enter third value:"));
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods);