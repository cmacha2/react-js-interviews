/**
 * Section 5: ES6 and Beyond
 * 
 * ES6, or ECMAScript 2015, introduced many features that have significantly improved JavaScript syntax and functionality.
 * We'll explore some of these key features, which are especially relevant in the context of React development.
 */

// Arrow Functions
// Arrow functions provide a concise syntax for writing functions and do not have their own `this` context.
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Promises
// Promises are used for asynchronous programming. A promise represents a value that may be available now, in the future, or never.
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
};
fetchData().then(data => console.log(data)); // Data fetched

// Async/Await
// `async` and `await` are syntactic sugar built on top of promises. They make asynchronous code look and behave a little more like synchronous code.
async function fetchDataAsync() {
    const data = await fetchData();
    console.log(data); // Data fetched
}
fetchDataAsync();

// Template Literals
// Template literals provide an easy way to interpolate variables and expressions into strings.
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!

// Modules
// JavaScript modules allow you to break up your code into separate files, making it more manageable and maintainable.
// Assuming you have another file named `math.js` with an exported function `add`.
import { add as addFunction } from './math';
console.log(addFunction(4, 5)); // Assuming add function adds two numbers.

// Exercises

// 1. Weather API Fetch
// Use `fetch` to retrieve weather data from a public API and display the result using template literals.
async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your_api_key`);
    const data = await response.json();
    console.log(`Weather in ${city}: ${data.weather[0].main}`);
}

// 2. Modules
// Create a simple module for math operations (add, subtract) and use it in your code.
// math.js
export const add1 = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import * as math from './math';
console.log(math.add(10, 5)); // 15
console.log(math.subtract(10, 5)); // 5

/**
 * End of Section 5.
 * With these ES6 features, you're well-equipped to write clean, efficient, and modern JavaScript code.
 * These concepts are particularly valuable in React development and other JavaScript-based frameworks and libraries.
 */
