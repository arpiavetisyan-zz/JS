// 1 Swap 2 variables using arithmetic operators.

let a = 8; //10 
let b = 12; //20 
a += b;
b = a - b;
a = a - b;
console.log(`After swapping a = ${a} and b = ${b}.`)

// 2 Declare variable. Initialize it with the value, which shows temperature in degrees Celsius.
// Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to
// Fahrenheit use the following formula: ° C * 1.8 +32 = °F .

let c = -40; //0
let f = (c * 1.8) + 32;
console.log(`°F = ${f}.`)

// 3 Given a number (n). Calculate sum of all numbers between 1 and n.

let n = 8; // 8,4,12
let a = (n * (n + 1)) / 2;
console.log(`Sum of "n" is ${a}.`)

// 4 Given 2 variables which are the angles of the triangle. Find the third angle of the triangle.
// (Sum of the angles of a triangle equals 180 degrees).

let a = 45; //30
let b = 90; // 30
let c = 180 - (a + b);
console.log(`The 3rd angle is ${c} degrees.`)

// 5 Given number n (positive integer). Print the value of n + nn + nnn (not multiplication).

let n = 3;
let nn = n + n;
let nnn = n + n + n;
let result = +`${n}${nn}${nnn}`
console.log(`The value is ${result} `)

// 6 Given five numbers as input. Calculate and print the average of the numbers(without using arrays).

let a = 45; // 7
let b = -12; // 52
let c = 0; // -23
let d = 3; // 9
let e = -15; // -81
let n = 5;
let average = (a + b + c + d + e) / n;
console.log(`The average of the numbers is ${average}.`)

// 7 Given the base and height of a triangle. Calculate its area. Area = (base * height) / 2;

let bs = 3; // 10
let hgt = 2; // 10
let s = (bs * hgt) / 2;
console.log(`The area is ${s}.`)