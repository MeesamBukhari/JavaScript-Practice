var daysList = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var date = new Date();
var day = date.getDay();
var nameOfDay = daysList[day];
console.log("Today is",nameOfDay)