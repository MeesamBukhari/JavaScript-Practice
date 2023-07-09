var marks = prompt("Enter your marks:");
if (marks >= 40 && marks <= 100) {
   console.log("Passed");
   if (marks >= 90 && marks <= 100) {
      console.log("Reward $100");
   }
   else if (marks >= 80 && marks < 90) {
      console.log("Reward $80");
   }
   else if (marks >= 70 && marks < 80) {
      console.log("Reward $60");
   }
   else if (marks >= 60 && marks < 70) {
      console.log("Reward $40");
   }
   else if (marks >= 50 && marks < 60) {
      console.log("Reward $20");
   }
   else {
      console.log("Reward $10");
   }
}
else {
   console.log("Failed");
}