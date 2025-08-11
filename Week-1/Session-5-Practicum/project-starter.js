// Week 1 Session 5: JavaScript Data Manipulation Project
// Student Name: [Your Name]
// Project Theme: [Choose one: Grade System, Library Catalog, Fitness Tracker, Recipe Manager, Budget Tracker]

// 1. Data Structure
// TODO: Modify this structure based on your chosen theme
let projectData = {
    projectName: "",  // Fill in your project name
    records: [
        // Sample record structure - modify based on your theme
        {
            id: 1,
            // Add properties relevant to your theme
        }
        // Add at least 4 more records
    ],
    metadata: {
        totalRecords: 0,
        lastUpdated: new Date().toISOString()
    }
};

// 2. Core Functions

// Add a new record
function addRecord(record) {
    // TODO: Generate unique ID
    // TODO: Validate the record
    // TODO: Add to projectData.records
    // TODO: Update metadata
}

// Remove a record by ID
function removeRecord(id) {
    // TODO: Find record by ID
    // TODO: Remove from array
    // TODO: Update metadata
}

// Update an existing record
function updateRecord(id, updates) {
    // TODO: Find record by ID
    // TODO: Apply updates
    // TODO: Update metadata
}

// Search records based on criteria
function searchRecords(criteria) {
    // TODO: Filter records based on criteria
    // TODO: Return matching records
}

// Calculate statistics or summary
function generateSummary() {
    // TODO: Calculate relevant statistics
    // TODO: Return summary object
}

// 3. Data Processing Functions

// Parse JSON string to object
function loadData(jsonString) {
    // TODO: Try to parse JSON
    // TODO: Handle errors
    // TODO: Validate data structure
}

// Convert object to JSON string
function saveData() {
    // TODO: Convert projectData to JSON
    // TODO: Return formatted string
}

// Validate a record before adding/updating
function validateRecord(record) {
    // TODO: Check required fields
    // TODO: Validate data types
    // TODO: Return true/false with error message
}

// 4. Display Functions

// Display all records
function displayRecords() {
    // TODO: Format and display records
    // TODO: Use console.log with clear formatting
}

// Display search results
function displaySearchResults(results) {
    // TODO: Format and display search results
    // TODO: Handle case where no results found
}

// Display summary statistics
function displaySummary(summary) {
    // TODO: Format and display summary data
    // TODO: Make numbers readable (e.g., averages, totals)
}

// 5. Main Program

function main() {
    console.log("=== [Your Project Name] ===\n");

    // Initialize with sample data
    console.log("Loading initial data...");

    // Test all functionality
    console.log("\nTesting core functions...\n");

    // Test 1: Display all records
    console.log("1. Displaying all records:");
    displayRecords();

    // Test 2: Add a new record
    console.log("\n2. Adding a new record:");
    let newRecord = {
        // Create a sample record based on your theme
    };
    addRecord(newRecord);
    displayRecords();

    // Test 3: Search for records
    console.log("\n3. Searching for records:");
    let searchResults = searchRecords(/* your criteria */);
    displaySearchResults(searchResults);

    // Test 4: Update a record
    console.log("\n4. Updating a record:");
    updateRecord(1, { /* your updates */ });
    displayRecords();

    // Test 5: Remove a record
    console.log("\n5. Removing a record:");
    removeRecord(1);
    displayRecords();

    // Test 6: Generate summary
    console.log("\n6. Generating summary:");
    let summary = generateSummary();
    displaySummary(summary);
}

// Start the program
main();

// 6. Test Cases
// TODO: Create at least 5 test cases demonstrating your functions work correctly
function runTests() {
    console.log("\n=== Running Tests ===");

    // Test 1: Add record
    // Test 2: Remove record
    // Test 3: Update record
    // Test 4: Search records
    // Test 5: Generate summary

    console.log("=== Tests Complete ===\n");
}

// Uncomment to run tests
// runTests();