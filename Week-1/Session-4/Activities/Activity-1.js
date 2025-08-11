// Week 1 Session 4: JSON Structure Practice

// Challenge 1: Create JSON for a book
// TODO: Create a valid JSON structure (as a string) for a book
// Include: title, author, pages, genres (array), publication year
let bookJSON = ''; // Create your JSON string here

// Test your JSON
try {
    let book = JSON.parse(bookJSON);
    console.log("Valid JSON! Book title:", book.title);
} catch (error) {
    console.log("Invalid JSON format");
}


// Challenge 2: Create JSON for a movie
// TODO: Create a valid JSON structure for a movie
// Include: title, director, cast (array), rating, runtime
let movieJSON = ''; // Create your JSON string here


// Challenge 3: Identify invalid JSON
// TODO: Fix these invalid JSON strings
let invalid1 = '{name: "John", age: 30}'; // Missing quotes on keys
let invalid2 = '{"hobbies": ["reading", "gaming",]}'; // Trailing comma
let invalid3 = "{'city': 'New York'}"; // Wrong quote types


// BONUS CHALLENGES
// 1. Create JSON for a restaurant with menu items
// 2. Create JSON for a social media profile
// 3. Create nested JSON for a school with classes and students