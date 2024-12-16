"use strict";
// Q No. 1:
// Calculate your age based on the current year and your birth year.
var birthYear = 1990;
var currentYear = 2024;
var age = currentYear - birthYear;
console.log("Your age is: " + age);
// Q No. 2:
// Write a program that calculates the area of a rectangle using length and width variables.
var length = 5;
var width = 3;
var area = length * width;
console.log("The area of the rectangle is: " + area);
// Q No. 3:
//  Write a program that calculates the area of a circle.
var radius = 7;
var area = Math.PI * radius * radius;
console.log("The area of the circle is: " + area);
// Q No. 4:
// Write a program that calculates the area of the cube.
var side = 4;
var area = 6 * side * side;
console.log("The surface area of the cube is: " + area);
// Q No. 5:
// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
var tempInF = 98;
var tempInC = ((tempInF - 32) * 5) / 9;
console.log(tempInF + "°F is " + tempInC.toFixed(2) + "°C");
var tempInC2 = 37;
var tempInF2 = (tempInC2 * 9) / 5 + 32;
console.log(tempInC2 + "°C is " + tempInF2.toFixed(2) + "°F");
// Q No. 6:
// Convert a given number of seconds into minutes and seconds using variables.
var totalSeconds = 130;
var minutes = Math.floor(totalSeconds / 60);
var seconds = totalSeconds % 60;
console.log(totalSeconds +
    " seconds = " +
    minutes +
    " minutes and " +
    seconds +
    " seconds");
// Q No. 7:
// Write a program that calculates the percentage.
var obtainedMarks = 450;
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;
console.log("The percentage is: " + percentage.toFixed(2) + "%");
// Increment and Decrement Operator Questions
// Q1:
var a = 2;
var b = ++a * 2;
console.log(b);
// Q2:
var x = 5;
var y = x-- + 2;
console.log(y);
// Q3:
var x = 3;
var y = ++x + x++ + ++x;
console.log(y);
// Q4:
var m = 2;
var n = ++m * m++ * --m;
console.log(n);
// Q5:
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log(result);
// Q6:
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log(m, n, p);
// Q7:
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = (++a * (b-- + c)) / --d;
console.log(a, b, c, d, result);
// Q8:
var m = 2;
var n = 3;
var o = 4;
var result = (m++ * (--n + m)) / (o-- - n);
console.log(m, n, o, result);
