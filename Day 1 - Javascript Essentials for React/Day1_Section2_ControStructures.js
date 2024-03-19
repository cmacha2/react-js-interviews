/**
 * Section 2: Control Structures
 * 
 * Control structures are fundamental in programming, allowing you to dictate the flow of your program's execution.
 */

// Conditional Statements
// `if`, `else if`, and `else` are used to execute code blocks based on boolean conditions.
const age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Switch Statement
// The `switch` statement can be used for multiple condition checks.
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("Middle of the work week.");
}

// Loops
// Loops are used to execute a block of code multiple times.

// `for` loop
for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

// `while` loop
let i = 0;
while (i < 5) {
    console.log(`While loop iteration: ${i}`);
    i++;
}

// Error Handling
// `try-catch` blocks are used to catch and handle errors in code execution.
try {
    throw new Error("This is an error message.");
} catch (error) {
    console.error(error.message);
}

// Exercises

// 1. Simple Calculator
// Implement a simple calculator that uses conditional statements to perform basic operations (add, subtract, multiply, divide).
function simpleCalculator(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error("Cannot divide by zero.");
            return a / b;
        default:
            return "Invalid operation";
    }
}

// 2. Even Number Iterator
// Write a loop that iterates over a range from 1 to 100 and prints only even numbers.
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) console.log(num);
}

/**
 * End of Section 2.
 * Move on to Section 3 for further exercises and explanations.
 */
