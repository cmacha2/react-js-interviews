/**
 * Section 1: Fundamentals of JavaScript
 * 
 * In this section, we'll review the basic fundamentals of JavaScript that are essential
 * for working efficiently with React and in web development in general.
 */

// Variables
// In JavaScript, you can declare variables using `let`, `const`, or `var` (less recommended in ES6+).
let variableLet = 'This can be changed';
const variableConst = 'This is constant';

// Data Types
// JavaScript is a dynamically typed language, which means you don't need to declare the type of a variable.
let number = 10; // Number
let string = "Hello world"; // String
let boolean = true; // Boolean
let nullValue = null; // Null
let undefinedValue; // Undefined
let object = { name: "John", age: 30 }; // Object

// Operators
// JavaScript includes arithmetic (+, -, *, /), comparison (==, ===, !=, !==, >, <) and logical (&&, ||, !) operators.
let sum = 5 + 5;
let isEqual = 10 === "10"; // This will be false due to strict comparison.

// Functions
// Functions can be declared or expressed. Function expression can be anonymous and can also use arrow functions.
function declaredFunction() {
    return "Hello from a declared function";
}
const expressedFunction = function() {
    return "Hello from an expressed function";
};
const arrowFunction = () => "Hello from an arrow function";

// Exercises

// 1. Area Calculation
// Write a function to calculate the area of a rectangle.
function rectangleArea(base, height) {
    return base * height;
}

// 2. Word Sorter
// Create a function that takes a string and returns the words sorted alphabetically.
function sortWords(sentence) {
    return sentence.split(' ').sort().join(' ');
}

/**
 * End of Section 1.
 * Continue with Section 2 for more exercises and explanations.
 */
