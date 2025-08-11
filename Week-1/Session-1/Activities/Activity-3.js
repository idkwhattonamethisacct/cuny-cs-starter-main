// Week 1 Session 1: Operators Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Challenge 1: Temperature Converter
// TODO: Convert Celsius to Fahrenheit
// Formula: F = C * 9/5 + 32
let celsius = 25;
// Your code here
let fahrenheit = celsius * 9/5 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);


// Challenge 2: Shopping Cart
// TODO: Calculate total with tax (8%)
let itemPrice = 19.99;
let quantity = 3;
let taxRate = 0.08;
// Your code here
let subtotal = itemPrice * quantity;
let total = subtotal * (1 + taxRate);       
console.log(`Total with tax: $${total.toFixed(2)}`);

// Challenge 3: Simple Logic
// TODO: Check if a number is even AND greater than 10
let number = 14;
// Your code here
let isEvenAndGreaterThanTen = (number % 2 === 0) && (number > 10);
console.log(`Is the number ${number} even and greater than 10? ${isEvenAndGreaterThanTen}`);    


// BONUS CHALLENGES
// 1. Create a tip calculator (15%, 18%, 20% options)
let billAmount = 50;
let tip15 = billAmount * 0.15;
let tip18 = billAmount * 0.18;
let tip20 = billAmount * 0.20;
console.log(`Tip options: 15% = $${tip15.toFixed(2)}, 18% = $${tip18.toFixed(2)}, 20% = $${tip20.toFixed(2)}`);
// 2. Check if a year is a leap year
let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(`Is ${year} a leap year? ${isLeapYear}`);       

// 3. Calculate BMI (weight in kg / height in meters squared)
let weight = 70; // kg
let height = 1.75; // meters
let bmi = weight / (height * height);
console.log(`BMI: ${bmi.toFixed(2)}`);