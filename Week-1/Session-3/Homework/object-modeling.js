// Week 1 Session 3 Homework: Object Modeling

// Task 1: Recipe Object
// TODO: Create a recipe object with ingredients list and instructions
let recipe = {
    name: "Chocolate Chip Cookies",
    servings: 24,
    // Add more properties here
};

// Test your object
console.log(`Recipe: ${recipe.name}`);
// Add more tests to display ingredients and instructions


// Task 2: Bank Account Object
// TODO: Create a bank account object with balance and transaction methods
let bankAccount = {
    accountNumber: "1234567890",
    balance: 1000,
    // Add more properties and methods here

    deposit: function (amount) {
        // Your code here
    },

    withdraw: function (amount) {
        // Your code here
    },

    getBalance: function () {
        // Your code here
    }
};

// Test your object
bankAccount.deposit(500);
console.log("Balance after deposit:", bankAccount.getBalance());
bankAccount.withdraw(200);
console.log("Balance after withdrawal:", bankAccount.getBalance());


// Task 3: Music Album Object
// TODO: Create a music album object with tracks and duration
let album = {
    title: "Greatest Hits",
    artist: "The Classics",
    // Add more properties here

    addTrack: function (trackName, duration) {
        // Your code here
    },

    getTotalDuration: function () {
        // Your code here
    }
};

// Test your object
album.addTrack("Song One", 3.5);
album.addTrack("Song Two", 4.2);
console.log("Total album duration:", album.getTotalDuration(), "minutes");


// BONUS CHALLENGES
// 1. Add a method to the recipe object to scale ingredients for different serving sizes
// 2. Add transaction history to the bank account object
// 3. Add a method to the album object to find tracks by name