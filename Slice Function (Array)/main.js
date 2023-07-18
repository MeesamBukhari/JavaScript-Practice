var foods = ["Pizza", "Burger", "Snacks", "Sandwich", "Fries"];
console.log(foods);  // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"
var arr = foods.slice(1,3);
console.log(foods);  // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"
console.log(arr);    // "Burger", "Snacks"

var foods = ["Pizza", "Burger", "Snacks", "Sandwich", "Fries"];
console.log(foods);  // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"
var arr = foods.slice(2);  // Just start index
console.log(foods);     // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"
console.log(arr);    // "Snacks", "Sandwich", "Fries"