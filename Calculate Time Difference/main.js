var d1 = new Date("June 14 2050 10:45:25");
console.log(d1);
var d2 = new Date("June 28 2050 10:45:25");
console.log(d2);
var timeDiff = d2.getTime() - d1.getTime();
console.log("Time Difference Is",timeDiff);
var timeInDay = 24 * 60 * 60 * 1000;
// hours in 1 day * minutes in 1 hour * seconds in 1 hour * milliseconds in 1 day
console.log("Time In One Day Is",timeInDay);
var days = timeDiff / timeInDay;
console.log("Time Difference in Days is:",days);