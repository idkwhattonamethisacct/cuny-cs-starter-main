// Week 1 Session 1 Homework: Multi-Conversion Program
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Temperature Conversion
// TODO: Convert Celsius to Fahrenheit
// Formula: F = C * 9/5 + 32
// Your code here
let temperatureCelsius = 25;
let temperatureFahrenheit = temperatureCelsius * 9/5 + 32;

// Display the result
console.log("Temperature conversion: " + temperatureCelsius + " °C = " + temperatureFahrenheit.toFixed(2) + " °F");


// Task 2: Distance Conversion
// TODO: Convert miles to kilometers
// Formula: 1 mile = 1.60934 kilometers
// Your code here
let distanceMiles = 5;
let distanceKilometers = distanceMiles * 1.60934;

// Display the result
// console.log("Distance conversion: ??? miles = ??? kilometers");


// Task 3: Currency Conversion
// TODO: Convert USD to EUR
// Use fixed rate: 1 USD = 0.92 EUR
// Your code here
let amountUSD = 100;
let amountEUR = amountUSD * 0.92;

// Display the result
// console.log("Currency conversion: $??? = €???");
console.log("Currency conversion: $" + amountUSD + " = €" + amountEUR.toFixed(2));

// BONUS CHALLENGES
// 1. Add reverse conversions (Fahrenheit to Celsius, etc.)
// 2. Format numbers to 2 decimal places
// 3. Create a function for each conversion