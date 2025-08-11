// Week 1 Session 4: JSON Data Manipulation

// Sample JSON data
let companyData = {
    "company": "Tech Solutions Inc",
    "employees": [
        {
            "id": 1,
            "name": "Alice Johnson",
            "department": "Engineering",
            "skills": ["JavaScript", "Python", "SQL"]
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "department": "Marketing",
            "skills": ["SEO", "Content Writing", "Analytics"]
        }
    ],
    "departments": {
        "Engineering": {
            "budget": 500000,
            "headCount": 50
        },
        "Marketing": {
            "budget": 200000,
            "headCount": 20
        }
    }
};

// Challenge 1: Access nested values
// TODO: Access and display:
// - Company name
// - First employee's name
// - Engineering department budget


// Challenge 2: Modify JSON structure
// TODO: Add a new employee to the employees array
// New employee: {id: 3, name: "Carol Davis", department: "HR", skills: ["Recruitment", "Training"]}


// Challenge 3: Work with arrays in JSON
// TODO: Find all employees in the Engineering department
// TODO: Count total number of skills across all employees


// BONUS CHALLENGES
// 1. Add a new department to the departments object
// 2. Find the employee with the most skills
// 3. Calculate total budget across all departments