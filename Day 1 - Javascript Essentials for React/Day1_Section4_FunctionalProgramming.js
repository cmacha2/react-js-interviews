/**
 * Section 4: Functional Programming in JS
 * 
 * Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions 
 * and avoids changing-state and mutable data.
 */

// Higher-Order Functions
// A higher-order function is a function that takes another function as an argument or returns a function as a result.
const numbers = [1, 2, 3, 4, 5];

const double = n => n * 2;
const doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Closures
// A closure is a function that remembers its outer variables and can access them.
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}
const greetHello = createGreeting("Hello");
console.log(greetHello("John")); // Hello, John!

// Pure Functions
// A pure function is a function where the return value is determined only by its input values, without observable side effects.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// Exercises

// 1. Filtering Users by Age
// Given an array of user objects, write a higher-order function that filters users by age.
const users = [
    { name: "John", age: 25 },
    { name: "Linda", age: 32 },
    { name: "Fred", age: 18 },
    { name: "James", age: 24 }
];

function filterUsersByAge(users, minAge) {
    return users.filter(user => user.age >= minAge);
}

// 2. Function Cache
// Implement a cache for a function that memorizes the result of expensive function calls.
function cacheFunction(func) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

/**
 * End of Section 4.
 * This section introduced the basics of functional programming in JavaScript, covering higher-order functions, closures, 
 * and pure functions. These concepts are instrumental in writing clean, efficient, and bug-free code.
 * 
 * 
 * 
 * 
 * 
 * 
 * Básico: Contador con Closures
Crea una función crearContador que utilice closures para crear instancias de contadores independientes. Cada instancia debe tener su propio estado y métodos para incrementar, decrementar y obtener el valor actual del contador.

javascript
Copy code
function crearContador() {
    // Tu código aquí
}

// Ejemplo de uso:
const contador1 = crearContador();
console.log(contador1.valor()); // Debe mostrar 0
contador1.incrementar();
console.log(contador1.valor()); // Debe mostrar 1
contador1.decrementar();
console.log(contador1.valor()); // Debe volver a 0

const contador2 = crearContador();
console.log(contador2.valor()); // Debe mostrar 0, independiente del contador1
Medio: Función de Memoización Genérica
Mejora la función cacheFunction para que pueda manejar no solo argumentos primitivos sino también objetos y otras estructuras complejas como argumentos de forma más eficiente. Considera el uso de una forma más sofisticada de generar claves para el caché que pueda diferenciar, por ejemplo, {a: 1, b: 2} de {b: 2, a: 1}.

javascript
Copy code
function cacheFunction(func) {
    // Tu código aquí, mejorando el manejo de objetos y estructuras complejas como argumentos
}

// Función para probar tu implementación
function sumaCompleja(obj) {
    console.log("Calculando...");
    return Object.values(obj).reduce((sum, val) => sum + val, 0);
}

const cachedSumaCompleja = cacheFunction(sumaCompleja);
console.log(cachedSumaCompleja({a: 1, b: 2})); // Calcula
console.log(cachedSumaCompleja({b: 2, a: 1})); // Usa caché, no recalcula
Avanzado: Secuenciador de Funciones con Closures
Crea una función crearSecuenciador que acepte un valor inicial y una función de operación. La función retornada por crearSecuenciador debe, cuando se llama, aplicar la función de operación al valor actual, comenzando por el valor inicial, y retornar el resultado. Cada llamada subsiguiente debe usar el resultado de la llamada anterior como su nuevo valor actual.

javascript
Copy code
function crearSecuenciador(valorInicial, operacion) {
    // Tu código aquí
}

// Ejemplo de uso:
const secuenciador = crearSecuenciador(1, valor => valor * 2);
console.log(secuenciador()); // Debe mostrar 2
console.log(secuenciador()); // Debe mostrar 4
console.log(secuenciador()); // Debe mostrar 8
 */


