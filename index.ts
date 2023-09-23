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

const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2);//False
console.log(str1 !== str2);//True


//Lower case 
const text1: string = "Hello World";
const text2: string = "hello world";
console.log(text1.toLowerCase() === text2);//true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1: number = 20;
const num2: number = 10;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false


// Tests using "and" and "or" operators

const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z); // true, both condition true

console.log(x < y || y > z); // true, at least one is true

console.log(x > y && y < z);// false, both condition
console.log(x > y || y > z);// false, both condition

// • Test whether an item is in a array

const fruits: string[] =['apple','orange','mango','banana'];

console.log(fruits.includes('mango')); // True

console.log(fruits.includes('strawbery')); // False

// Test whether an item is not in a array

const colors: string[] = ['white','black','red','green',];

console.log(!colors.includes('blue')); // true

console.log(!colors.includes('red')); // false
 




