var num = 5;
function changeValue (a) {
   a = 7;      // change to 'a' will not affect 'num'
}
changeValue(num);
console.log(num); // 5. 'num' will be updated

var arr = [5,6,7,8];
function updateArray (val) {  // array received in 'val'
   val [1] = 57;    // updating 'val' will also update arr
}
console.log(arr[1]);    // 6. before calling function
updateArray(arr);
console.log(arr[1]);    // 57. after calling function

var obj = { name: "John", age: 56 };
function updateObject (val) {    // object received in 'val'
   val.age = 40;     // updating 'val' will also update 'arr'
}
console.log(obj.age);   // 56. before calling function
updateObject(obj);
console.log(obj.age);   // 40. before calling function

var a = 67;
function test(num) {
   console.log("Num before =",num);
   num = 4;
   console.log("Num after =",num);
}
test (a);
console.log("A after =",a);

var b = [45,5,9,2];
function test (val1) {
   console.log("Val before =",val1);
   val1 [2] = 12;
   console.log("Val before =",val1);
}
test (b);
console.log("A after =",b);

var b = [45,5,9,2];
function test (val1) {
   console.log("Val before =",val1);
   val1 = [2,1,8,3];
   val1 [2] = 88;
   console.log("Val after =",val1);
}
test (b);
console.log("A after =",b);