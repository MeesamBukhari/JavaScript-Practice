var a = 6;
console.log(a);
--a;
console.log(a);
++a;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);

var b = 2;
var c = b++;
console.log(b);
console.log(c);

var d = 4;
var e = d--;
console.log(d);
console.log(e);

var f = 8;
var g = 5;
var h = ++f - --g + --f;
console.log(f);
console.log(g);
console.log(h);

var i = 12;
console.log(i);
i = i + 1;     // 12
console.log(i);
i = i - 1;     // 12
console.log(i);
var j = 12;
console.log(j);
i += 1;        // 13
console.log(j);
i -+ 1;     // 13
console.log(j);

// Prefix Increment & Decrement
var age = 12;
++age;
console.log(age);    // result = 13
--age;
console.log(age);    // result = 12

// Postfix Increment & Decrement
var age = 12;
age++;
console.log(age);     // result = 12; same as prefix
age--;
console.log(age);    // result = 12; same as postfix

// Prefix Increment
var age = 12;
var newAge = ++age;
console.log(age);    // result = 13
console.log(newAge);    // result = 13

// postfix Increment
var age = 12;
var newAge = age++;
console.log(age);    // result = 13
console.log(newAge);    // result = 12, see the difference

// Example 1:
var a = 4;
var b = 2;
var c = a++ - b;  // first value of a placed here, which is 4, then increase by 1 in a. so will become 5.
console.log(a);      // 5
console.log(b);      // 2
console.log(c);      // 2

// Example 2:
var a = 4;
var b = 2;
var c = ++a + b;  // first value of a increased, so will become 5, then value of a will be placed here, 5.
console.log(a);      // 5
console.log(b);      // 2
console.log(c);      // 7

// Example 3:
var a = 4;
var b = 3;
var c = a++ + --b - --a;
console.log(a);      // 4
console.log(b);      // 2
console.log(c);      // 2