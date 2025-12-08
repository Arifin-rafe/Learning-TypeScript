const firstName = "World";
let lastName = "Doe";
let age = 30;
let isMarried = true;

lastName = 70; // This line will cause a compilation error because 'lastName' is declared as a string
age = "thirty"; // This line will cause a compilation error because 'age' is declared as a number
firstName = "TypeScript"; // This line will cause a compilation error because 'firstName' is a constant
console.log(`Hello, ${firstName}!`);