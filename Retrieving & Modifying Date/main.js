// Retrieving Date Components
var today = new Date("June 14 2050 10:45:25");
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours);
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime);

// Modifying Date Components
var today1 = new Date("June 14 2050 10:45:25");
console.log(today1);
today1.setFullYear(2060);
console.log(today1);

var today2 = new Date();
console.log(today2);
today2.setFullYear(2030);
today2.setHours(15);
console.log(today2);