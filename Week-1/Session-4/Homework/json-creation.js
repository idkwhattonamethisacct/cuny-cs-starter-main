// Week 1 Session 4 Homework: JSON Creation

// Task 1: Restaurant Menu JSON
// TODO: Create a JSON structure for a restaurant menu
// Include categories (appetizers, main courses, desserts) with items
// Each item should have: name, price, description, dietary info

let menuJSON = {
    "restaurant": "The Cozy Cafe",
    "categories": {
        // Fill in the structure here
    }
};

// Test your JSON structure
console.log(JSON.stringify(menuJSON, null, 2));


// Task 2: User Preferences JSON
// TODO: Create a JSON structure for user preferences
// Include settings for: theme, notifications, language, privacy

let preferencesJSON = {
    "username": "user123",
    "preferences": {
        // Fill in the structure here
    }
};

// Test your JSON structure
console.log(JSON.stringify(preferencesJSON, null, 2));


// Task 3: Shopping Cart JSON
// TODO: Create a JSON structure for a shopping cart
// Include: items (array), subtotal, tax, total, shipping info

let cartJSON = {
    "cartId": "ABC123",
    "items": [
        // Add some sample items here
    ],
    // Add other properties here
};

// Test your JSON structure
console.log(JSON.stringify(cartJSON, null, 2));