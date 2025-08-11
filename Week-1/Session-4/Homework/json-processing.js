// Week 1 Session 4 Homework: JSON Processing

// Sample JSON data to work with
let schoolData = {
    "school": "Lincoln High",
    "classes": [
        {
            "id": "MATH101",
            "name": "Algebra I",
            "teacher": "Ms. Smith",
            "students": 25,
            "room": "201"
        },
        {
            "id": "ENG102",
            "name": "English Literature",
            "teacher": "Mr. Johnson",
            "students": 22,
            "room": "103"
        },
        {
            "id": "SCI103",
            "name": "Biology",
            "teacher": "Dr. Lee",
            "students": 28,
            "room": "305"
        }
    ],
    "facilities": {
        "library": {
            "books": 15000,
            "computers": 30
        },
        "cafeteria": {
            "capacity": 200,
            "staff": 8
        }
    }
};

// Task 1: Extract Data
// TODO: Write a function to find a class by ID
function findClassById(classId) {
    // Your code here
}

// TODO: Write a function to get all class names
function getAllClassNames() {
    // Your code here
}


// Task 2: Modify JSON
// TODO: Write a function to add a new class
function addClass(newClass) {
    // Your code here
}

// TODO: Write a function to update student count for a class
function updateStudentCount(classId, newCount) {
    // Your code here
}


// Task 3: Validate JSON
// TODO: Write a function to check if a string is valid JSON
function isValidJSON(str) {
    // Your code here
}

// Test your functions
console.log(findClassById("MATH101"));
console.log(getAllClassNames());
// Add more tests as needed