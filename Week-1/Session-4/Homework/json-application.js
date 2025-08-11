// Week 1 Session 4 Homework: JSON Application

// Sample configuration file (as if loaded from a file)
let configJSON = `{
    "appName": "MyAwesomeApp",
    "version": "1.0.0",
    "settings": {
        "theme": "light",
        "language": "en",
        "notifications": {
            "email": true,
            "push": false,
            "sms": false
        },
        "privacy": {
            "shareData": false,
            "trackingAllowed": false
        }
    },
    "features": {
        "darkMode": true,
        "autoSave": true,
        "spellCheck": true
    }
}`;

// Task 1: Load and Parse Configuration
// TODO: Parse the JSON configuration string into an object
let config;
try {
    // Your code here
} catch (error) {
    console.log("Error parsing config:", error);
}


// Task 2: Update Settings
// TODO: Write a function to update a setting
function updateSetting(category, setting, value) {
    // Example: updateSetting("settings", "theme", "dark")
    // Your code here
}

// TODO: Write a function to toggle a feature
function toggleFeature(featureName) {
    // Example: toggleFeature("darkMode")
    // Your code here
}


// Task 3: Save Configuration
// TODO: Write a function to save the modified configuration back as JSON
function saveConfig() {
    // Convert the config object back to a formatted JSON string
    // Your code here
}


// Test your functions
console.log("Initial theme:", config?.settings?.theme);
updateSetting("settings", "theme", "dark");
console.log("Updated theme:", config?.settings?.theme);

console.log("Dark mode enabled:", config?.features?.darkMode);
toggleFeature("darkMode");
console.log("Dark mode enabled:", config?.features?.darkMode);

console.log("Saved config:", saveConfig());