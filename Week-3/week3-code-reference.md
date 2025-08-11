# Week 3 Code Reference - DOM Manipulation and Web Applications

This document contains all the code examples from Week 3 sessions for easy reference and copy/paste.

## Session 1: DOM Manipulation with JavaScript

### Lesson 1: DOM Element Selection Methods

#### Selecting Elements by ID

```html
<!-- HTML -->
<h1 id="main-title">Welcome</h1>
<p>This is a paragraph.</p>
```

```javascript
// JavaScript
const title = document.getElementById('main-title');
console.log(title.textContent); // "Welcome"

// Change the text
title.textContent = 'Hello JavaScript!';
```

#### Selecting Elements with querySelector

```html
<!-- HTML -->
<p>First paragraph</p>
<p class="highlight">Second paragraph</p>
<input type="email" placeholder="Enter email">
```

```javascript
// JavaScript
// Select by tag name
const firstParagraph = document.querySelector('p');

// Select by class name
const highlight = document.querySelector('.highlight');

// Select by attribute
const emailInput = document.querySelector('input[type="email"]');

console.log(firstParagraph.textContent);
```

#### Selecting Multiple Elements

```html
<!-- HTML -->
<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>
```

```javascript
// JavaScript
// Select all paragraphs
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs.length); // 3

// Loop through all elements
allParagraphs.forEach(paragraph => {
  paragraph.style.color = 'blue';
});
```

### Lesson 2: Dynamic Element Creation and Manipulation

#### Changing Element Content

```html
<!-- HTML -->
<h1 id="title">Old Title</h1>
<div class="content">Old content</div>
<img id="photo" src="old.jpg" alt="Old description">
```

```javascript
// JavaScript
// Change text content
const heading = document.querySelector('#title');
heading.textContent = 'New Title!';

// Change HTML content
const container = document.querySelector('.content');
container.innerHTML = '<p>New <strong>formatted</strong> content</p>';

// Change attributes
const image = document.querySelector('#photo');
image.src = 'new.jpg';
image.alt = 'New description';
```

#### Creating New Elements

```html
<!-- HTML -->
<div id="container">
  <p>Existing paragraph</p>
</div>
```

```javascript
// JavaScript
// Create a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';

// Add classes and attributes
newParagraph.className = 'highlight';
newParagraph.id = 'special-paragraph';

// Create an image
const newImage = document.createElement('img');
newImage.src = 'https://via.placeholder.com/150';
newImage.alt = 'A placeholder image';

console.log('Elements created but not yet visible');
```

#### Adding Elements to the Page

```html
<!-- HTML -->
<div id="container">
  <button id="existing-button">Existing Button</button>
</div>
```

```javascript
// JavaScript
// Create and configure element
const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
newButton.className = 'primary-button';

// Add to the end of the container
const container = document.querySelector('#container');
container.appendChild(newButton);

// Create another button and add to the beginning
const firstButton = document.createElement('button');
firstButton.textContent = 'First Button';
container.prepend(firstButton);
```

#### Removing Elements

```javascript
// Remove an element
const elementToRemove = document.querySelector('.delete-me');
elementToRemove.remove();

// Remove all children from a container
const container = document.querySelector('.clear-me');
container.innerHTML = '';

// Remove specific child
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
parent.removeChild(child);
```

### Lesson 3: JavaScript Event Handling

#### Adding Event Listeners

```html
<!-- HTML -->
<button id="my-button">Click Me!</button>
<p id="message">No clicks yet</p>
```

```javascript
// JavaScript
// Select an element
const button = document.querySelector('#my-button');
const message = document.querySelector('#message');

// Add an event listener
button.addEventListener('click', function() {
  message.textContent = 'Button was clicked!';
});

// Using arrow function syntax
button.addEventListener('click', () => {
  console.log('Button clicked in console too!');
});
```

#### Common Event Types

```html
<!-- HTML -->
<button id="click-btn">Click Event</button>
<input id="text-input" placeholder="Type here for input event">
<div id="hover-area" style="padding: 20px; background: lightblue;">
  Hover over me!
</div>
<p id="event-log">Event log will appear here</p>
```

```javascript
// JavaScript
const clickBtn = document.querySelector('#click-btn');
const textInput = document.querySelector('#text-input');
const hoverArea = document.querySelector('#hover-area');
const eventLog = document.querySelector('#event-log');

// Click events
clickBtn.addEventListener('click', () => {
  eventLog.textContent = 'Button was clicked!';
});

// Input events
textInput.addEventListener('input', () => {
  eventLog.textContent = `You typed: ${textInput.value}`;
});

// Mouse events
hoverArea.addEventListener('mouseenter', () => {
  eventLog.textContent = 'Mouse entered the area!';
  hoverArea.style.background = 'lightgreen';
});
```

#### Event Object and Information

```javascript
// Event object contains information about the event
button.addEventListener('click', function(event) {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Mouse position:', event.clientX, event.clientY);
});

// Prevent default behavior
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form from submitting normally
  console.log('Form would have submitted');
});
```

#### Event Delegation

```javascript
// Instead of adding listeners to many elements...
// Add one listener to the parent
const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === 'LI') {
    console.log('Clicked item:', event.target.textContent);
  }
});

// This works even for dynamically added items!
```

## Session 2: Interactive Forms and Form Validation

### Lesson 1: Interactive Forms with Real-time Feedback

#### Getting Text from Input Fields

```html
<!-- HTML -->
<input type="text" id="name-input" placeholder="Type your name">
<div id="greeting">Your greeting will appear here</div>
```

```javascript
// JavaScript
const nameInput = document.getElementById('name-input');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('input', function() {
  greeting.textContent = 'Hello ' + nameInput.value + '!';
});
```

#### Handling Form Submission

```html
<!-- HTML -->
<form id="message-form">
  <input type="text" id="user-message" placeholder="Enter your message">
  <button type="submit">Send Message</button>
</form>
<div id="result">Messages will appear here</div>
```

```javascript
// JavaScript
const form = document.getElementById('message-form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page reload
  
  const message = document.getElementById('user-message').value;
  result.textContent = 'You said: ' + message;
});
```

### Lesson 2: Client-Side Form Validation

#### Simple Length Validation

```html
<!-- HTML -->
<input type="text" id="username" placeholder="Username (min 3 characters)">
<div id="username-message"></div>
```

```javascript
// JavaScript
const usernameInput = document.getElementById('username');
const usernameMessage = document.getElementById('username-message');

usernameInput.addEventListener('input', function() {
  const username = usernameInput.value;
  
  if (username.length < 3) {
    usernameMessage.textContent = 'Username too short';
  } else {
    usernameMessage.textContent = 'Username looks good!';
  }
});
```

#### Email Format Checking

```html
<!-- HTML -->
<input type="email" id="email" placeholder="Enter your email">
<div id="email-message"></div>
```

```javascript
// JavaScript
const emailInput = document.getElementById('email');
const emailMessage = document.getElementById('email-message');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  
  if (email.includes('@')) {
    emailMessage.textContent = '✓ Email looks good';
  } else {
    emailMessage.textContent = '✗ Email needs an @ symbol';
  }
});
```

### Lesson 3: Processing Form Data Dynamically

#### Collecting Multiple Form Fields

```html
<!-- HTML -->
<form id="profile-form">
  <input type="text" id="first-name" placeholder="First name">
  <input type="text" id="last-name" placeholder="Last name">
  <input type="number" id="age" placeholder="Age">
  <button type="submit">Create Profile</button>
</form>
<div id="profile-result"></div>
```

```javascript
// JavaScript
const form = document.getElementById('profile-form');
const profileResult = document.getElementById('profile-result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const age = document.getElementById('age').value;
  
  profileResult.textContent = `Hello ${firstName} ${lastName}, you are ${age} years old!`;
});
```

#### Creating Lists from Form Input

```html
<!-- HTML -->
<form id="todo-form">
  <input type="text" id="todo-input" placeholder="Enter a task">
  <button type="submit">Add Task</button>
</form>
<ul id="todo-list"></ul>
```

```javascript
// JavaScript
const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskText = todoInput.value;
  
  // Create new list item
  const newTask = document.createElement('li');
  newTask.textContent = taskText;
  
  // Add to list
  todoList.appendChild(newTask);
  
  // Clear the input
  todoInput.value = '';
});
```

## Session 3: Working with External Data

### Lesson 1: Using the Fetch API

#### Basic Fetch Example

```html
<!-- HTML -->
<button id="get-data">Get Random Fact</button>
<div id="fact-display">Click the button to get a fun fact!</div>
```

```javascript
// JavaScript
const button = document.getElementById('get-data');
const display = document.getElementById('fact-display');

button.addEventListener('click', function() {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
      display.textContent = data.text;
    });
});
```

### Lesson 2: Processing JSON Responses

#### Understanding JSON Structure

```html
<!-- HTML -->
<button id="get-joke">Get Random Joke</button>
<div id="joke-display">Click for a joke!</div>
```

```javascript
// JavaScript
const button = document.getElementById('get-joke');
const display = document.getElementById('joke-display');

button.addEventListener('click', function() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      // data looks like: {setup: "Why...", punchline: "Because...", type: "general"}
      display.innerHTML = `<p><strong>${data.setup}</strong></p><p>${data.punchline}</p>`;
    });
});
```

#### Working with Arrays in JSON

```html
<!-- HTML -->
<button id="get-users">Get Random Users</button>
<div id="users-list">Click to see users!</div>
```

```javascript
// JavaScript
const button = document.getElementById('get-users');
const usersList = document.getElementById('users-list');

button.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      // users is an array of user objects
      usersList.innerHTML = ''; // Clear previous results
      
      // Show first 3 users
      for (let i = 0; i < 3; i++) {
        const user = users[i];
        const userDiv = document.createElement('div');
        userDiv.textContent = `${user.name} - ${user.email}`;
        usersList.appendChild(userDiv);
      }
    });
});
```

### Lesson 3: Displaying External Data Dynamically

#### Creating Dynamic Content

```html
<!-- HTML -->
<button id="get-user">Get Random User</button>
<div id="user-display">Click to see user info!</div>
```

```javascript
// JavaScript
const button = document.getElementById('get-user');
const display = document.getElementById('user-display');

button.addEventListener('click', function() {
  // Using JSONPlaceholder for reliable demo data
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      display.innerHTML = `
        <h3>User Profile</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company.name}</p>
      `;
    })
    .catch(error => {
      display.textContent = 'Sorry, could not get user data right now.';
    });
});
```

#### Building Lists from External Data

```html
<!-- HTML -->
<button id="get-posts">Get Latest Posts</button>
<div id="posts-container">Click to see posts!</div>
```

```javascript
// JavaScript
const button = document.getElementById('get-posts');
const container = document.getElementById('posts-container');

button.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(posts => {
      container.innerHTML = '<h3>Latest Posts</h3>';
      
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
          <h4>${post.title}</h4>
          <p>${post.body.substring(0, 200)}...</p>
        `;
        postDiv.style.border = '1px solid #ddd';
        postDiv.style.padding = '10px';
        postDiv.style.margin = '10px 0';
        
        container.appendChild(postDiv);
      });
    });
});
```

## Session 4: Building a Complete Web Application

### Lesson 1: Integrating HTML, CSS, and JavaScript

#### Connecting Components Together

```html
<!-- HTML: Clear structure and IDs -->
<div class="weather-app">
  <form id="weather-form" class="search-form">
    <input type="text" id="city-input" placeholder="Enter city name">
    <button type="submit" class="search-btn">Get Weather</button>
  </form>
  <div id="weather-display" class="weather-card">
    <p>Enter a city to see weather information</p>
  </div>
</div>
```

```css
/* CSS: Visual styling */
.weather-app { max-width: 400px; margin: 0 auto; }
.search-form { display: flex; gap: 10px; margin-bottom: 20px; }
.weather-card { padding: 20px; background: #f0f8ff; border-radius: 8px; }
.search-btn { background: #007acc; color: white; border: none; padding: 10px; }
```

```javascript
// JavaScript: Interactive behavior
document.getElementById('weather-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('city-input').value;
  const display = document.getElementById('weather-display');
  
  // Simple demo without external API
  if (city) {
    display.innerHTML = `
      <h3>Weather for ${city}</h3>
      <p>Temperature: 22°C</p>
      <p>Condition: Sunny</p>
      <p><em>This is demo data - in a real app, this would come from a weather API</em></p>
    `;
  } else {
    display.innerHTML = '<p>Please enter a city name</p>';
  }
});
```

### Lesson 2: Simple State Management

#### Simple State with Variables

```html
<!-- HTML -->
<div class="counter-app">
  <h3>Counter: <span id="counter-display">0</span></h3>
  <button id="increase-btn">+1</button>
  <button id="decrease-btn">-1</button>
  <button id="reset-btn">Reset</button>
</div>
```

```javascript
// JavaScript: State management
let currentCount = 0; // This is our state!

const display = document.getElementById('counter-display');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
  display.textContent = currentCount;
}

increaseBtn.addEventListener('click', function() {
  currentCount = currentCount + 1; // Change state
  updateDisplay(); // Update what user sees
});

decreaseBtn.addEventListener('click', function() {
  currentCount = currentCount - 1; // Change state
  updateDisplay(); // Update what user sees
});

resetBtn.addEventListener('click', function() {
  currentCount = 0; // Reset state
  updateDisplay(); // Update what user sees
});
```

#### Managing Multiple Pieces of State

```html
<!-- HTML -->
<div class="todo-app">
  <form id="todo-form">
    <input type="text" id="todo-input" placeholder="Enter a task">
    <button type="submit">Add Task</button>
  </form>
  <div id="todo-list"></div>
  <div id="todo-stats">Tasks: <span id="task-count">0</span></div>
</div>
```

```javascript
// JavaScript: Multiple state variables
let tasks = []; // Array to store all tasks
let nextId = 1; // Counter for unique task IDs

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const counter = document.getElementById('task-count');

function updateDisplay() {
  // Clear and rebuild the list
  list.innerHTML = '';
  
  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.textContent = task.text;
    taskDiv.style.padding = '8px';
    taskDiv.style.margin = '4px 0';
    taskDiv.style.background = '#f0f8ff';
    list.appendChild(taskDiv);
  });
  
  // Update counter
  counter.textContent = tasks.length;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Add to state
  tasks.push({
    id: nextId++,
    text: input.value
  });
  
  // Update display and clear input
  updateDisplay();
  input.value = '';
});
```

### Lesson 3: Responsive Design and Polish

#### Making Your App Work on All Devices

```css
/* Mobile-first approach */
.app-container {
  padding: 10px;
  max-width: 100%;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Tablet and larger screens */
@media (min-width: 768px) {
  .app-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .search-form {
    flex-direction: row;
  }
}

/* Desktop screens */
@media (min-width: 1024px) {
  .app-container {
    max-width: 800px;
  }
}
```

#### Professional Finishing Touches

```css
/* Loading states */
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.loading::after {
  content: "Loading...";
  display: block;
  text-align: center;
  color: #666;
}

/* Error states */
.error {
  background: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid #c62828;
}

/* Success states */
.success {
  background: #e8f5e8;
  color: #2e7d32;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid #2e7d32;
}

/* Smooth transitions */
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

```javascript
// Using the styles in JavaScript
function showLoading(element) {
  element.classList.add('loading');
}

function hideLoading(element) {
  element.classList.remove('loading');
}

function showSuccess(element, message) {
  element.className = 'success fade-in';
  element.textContent = message;
}
