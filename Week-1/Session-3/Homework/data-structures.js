// Week 1 Session 3 Homework: Combined Practice

// Task 1: Class Roster
// TODO: Create an array of objects representing a class roster
let classRoster = [
    {
        id: 1,
        name: "Alice Johnson",
        grade: 90,
        attendance: 95
    },
    {
        id: 2,
        name: "Bob Smith",
        grade: 85,
        attendance: 92
    }
    // Add more students here
];

// Task 2: Roster Management Functions
// TODO: Write a function to add a student
function addStudent(id, name, grade, attendance) {
    // Your code here
}

// TODO: Write a function to remove a student by ID
function removeStudent(id) {
    // Your code here
}

// TODO: Write a function to calculate class average grade
function calculateClassAverage() {
    // Your code here
}

// Task 3: Search Functions
// TODO: Write a function to find students by name
function findStudentByName(name) {
    // Your code here
}

// TODO: Write a function to find students with grade above certain threshold
function findStudentsAboveGrade(threshold) {
    // Your code here
}

// Test your functions
console.log("Initial roster:", classRoster);
addStudent(3, "Carol Davis", 88, 97);
console.log("After adding student:", classRoster);
console.log("Class average:", calculateClassAverage());
console.log("Students above 85:", findStudentsAboveGrade(85));


// BONUS CHALLENGES
// 1. Add a function to update a student's grade
// 2. Create a function to sort students by grade or name
// 3. Add a method to calculate attendance averages