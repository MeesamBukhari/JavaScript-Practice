var foods = "sanDWICH";
var updatedfoods = foods.toLowerCase();
console.log(foods);
console.log(updatedfoods);

var foods = "sanDWICH";
var updatedfoods = foods.toUpperCase();
console.log(foods);
console.log(updatedfoods);

var food = "Pizza";
var input = "pIzZA";
console.log(food);
console.log(input);
console.log(food.toLowerCase());
console.log(input.toUpperCase());

var food = "Pizza";
var input ="pIzZA";
if (food === input) {
   console.log("Matched");
}
else {
   console.log("Not Matched");
}

var food = "Pizza";
var input ="pIzZA";
if (food.toLowerCase() === input.toLowerCase()) {
   console.log("Matched");
}
else {
   console.log("Not Matched");
}