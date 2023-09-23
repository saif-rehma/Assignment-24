"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to
10. If you want to try more comparisons, write more tests. Have at least one True
and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater
than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); //False
console.log(str1 !== str2); //True
//Lower case 
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); //true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 20;
const num2 = 10;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
// Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); // true, both condition true
console.log(x < y || y > z); // true, at least one is true
console.log(x > y && y < z); // false, both condition
console.log(x > y || y > z); // false, both condition
// • Test whether an item is in a array
const fruits = ['apple', 'orange', 'mango', 'banana'];
console.log(fruits.includes('mango')); // True
console.log(fruits.includes('strawbery')); // False
// Test whether an item is not in a array
const colors = ['white', 'black', 'red', 'green',];
console.log(!colors.includes('blue')); // true
console.log(!colors.includes('red')); // false
