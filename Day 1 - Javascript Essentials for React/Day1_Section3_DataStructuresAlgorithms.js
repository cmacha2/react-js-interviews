/**
 * Section 3: Data Structures and Algorithms
 * 
 * Data structures are ways to organize and store data in your programs. Algorithms are procedures or formulas for solving problems.
 */

// Arrays
// Arrays in JavaScript can hold multiple values under a single name, and you can access the values by referring to an index number.
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Outputs: Banana

// Array Methods: map, filter, reduce
// These methods are used to manipulate arrays without modifying the original array.

// map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// filter
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

// Objects
// Objects in JavaScript are collections of key/value pairs.
const person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};
person.greet(); // Outputs: Hello, my name is John Doe!

// Destructuring
// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
const { name, age } = person;
console.log(name, age); // Outputs: John Doe 30

// Exercises

// 1. Inventory Management
// Given an array of objects representing products (with properties `name` and `quantity`), write functions to add, remove, and update products.
let inventory = [
    { name: "Apples", quantity: 2 },
    { name: "Bananas", quantity: 0 },
    { name: "Cherries", quantity: 5 }
];

function addToInventory(product) {
    inventory.push(product);
}

function removeFromInventory(productName) {
    inventory = inventory.filter(product => product.name !== productName);
}

function updateInventory(productName, quantity) {
    const product = inventory.find(product => product.name === productName);
    if (product) {
        product.quantity = quantity;
    }
}

// 2. Object to Array Conversion
// Write a function that converts an object into an array of key-value pairs.
function objectToArray(obj) {
    return Object.entries(obj);
}

/**
 * End of Section 3.
 * Continue to Section 4 for more advanced topics and exercises.
 */
