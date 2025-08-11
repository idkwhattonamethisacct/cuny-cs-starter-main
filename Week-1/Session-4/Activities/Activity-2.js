// Week 1 Session 4: JSON Conversion Practice

// Challenge 1: Convert objects to JSON
// TODO: Convert this JavaScript object to a JSON string
let product = {
    id: 1001,
    name: "Laptop",
    price: 999.99,
    inStock: true,
    specs: {
        ram: "16GB",
        storage: "512GB SSD"
    }
};

// Your code here


// Challenge 2: Parse JSON strings
// TODO: Parse this JSON string into a JavaScript object
let jsonOrder = '{"orderId":5432,"customer":"Jane Smith","items":[{"name":"Book","quantity":2},{"name":"Pen","quantity":5}],"total":45.99}';

// Your code here


// Challenge 3: Handle conversion errors
// TODO: Safely parse these strings with error handling
let validJSON = '{"message": "Hello World"}';
let invalidJSON = '{message: Hello World}';  // Invalid - missing quotes

// Your code here


// BONUS CHALLENGES
// 1. Create a function that safely converts any input to JSON
// 2. Create a function that formats JSON with indentation
// 3. Create a function that validates if a string is valid JSON