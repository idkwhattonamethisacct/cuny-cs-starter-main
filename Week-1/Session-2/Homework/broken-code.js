// Week 1 Session 2: Debug and Fix
// This file contains several errors. Find and fix them all!

// Error 1: Function syntax issue
func calculateSquare(num) {
    return num * num;
}

// Error 2: If/else logic problem
let temperature = 75;
if (temperature > 90) 
    console.log("Hot!");
    console.log("Stay hydrated!");
else 
    console.log("Not hot");

// Error 3: Loop error
for (i = 0, i < 5, i++) {
    console.log("Count: " + i);
}

// Error 4: Return statement issue
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    // Missing return for odd numbers
}

// Error 5: Scope problem
function doubleNumber(x) {
    let result = x * 2;
}
console.log(result); // This won't work

// Error 6: While loop infinite loop
let counter = 10;
while (counter > 0) {
    console.log(counter);
    // Forgot to decrement counter
}

// Error 7: Wrong comparison operator
let password = "secret123";
if (password = "secret123") {
    console.log("Access granted");
}

// Error 8: Parameter usage error
function greet() {
    console.log("Hello, " + name);
}
greet("Alice");