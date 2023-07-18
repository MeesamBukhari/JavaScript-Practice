var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);  // "Pizza", "Burger", "Snacks"
foods.splice(1, 0, "Sandwich");
console.log(foods);  // "Pizza", "Sandwich", "Burger", "Snacks"
// This will add 1 element on index 1 and move all elements one index forward

var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);  // "Pizza", "Burger", "Snacks"
foods.splice(1, 0, "Sandwich", "Fries");
console.log(foods);  // "Pizza", "Sandwich", "Fries", "Burger", "Snacks"
// This will add 2 elements on index 1 and 2 and move all elements two index forward

var foods = ["Pizza", "Burger", "Snacks", "Fries"];
console.log(foods);
var arr = foods.splice(1, 2, "Sandwich");
console.log(foods);
console.log(arr);