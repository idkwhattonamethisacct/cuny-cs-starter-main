// Week 1 Session 1: Variables and Data Types Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Create variables for different data types
// TODO: Create a string variable for your name
let myName = "Evander";
// TODO: Create a number variable for your age
let myAge = 19;
// TODO: Create a boolean variable for whether you're a student
let isStudent = true;

// Task 2: Print variables to console
// TODO: Use console.log() to display each variable
console.log(myName);
console.log(myAge);
console.log(isStudent); 

// Task 3: Experiment with typeof operator
// TODO: Check the type of each variable using typeof
console.log(typeof myName);
console.log(typeof myage);
console.log(typeof isStudent);

// BONUS CHALLENGES
// 1. Create a variable that holds your favorite quote
let favoriteQuote = "Stay hungry, stay foolish.";
// 2. Create a variable that calculates days until the weekend
let today = new Date().getDay(); 
let daysuntilWeekend = (6 - today + 7) % 7; 
console.log("Days until weekend:", daysUntilWeekend);
// 3. Create a variable that checks if today is a weekday
let isWeekday = today >= 1 && today <= 5;
console.log("Is today a weekday?", isWeekday);