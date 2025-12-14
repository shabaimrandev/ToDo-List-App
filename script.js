// STEP 1: Get the HTML elements we need using DOM
let taskInput = document.getElementById('taskInput');
let addButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');

// STEP 2: Add a click event to the button
addButton.addEventListener('click', function() {
    // Get the text typed in the input box
    let taskText = taskInput.value;

    // Prevent empty tasks from being added
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // STEP 3: Create a new <li> element
    let newItem = document.createElement('li');

    // Add the task text inside the <li>
    newItem.textContent = taskText;

    // STEP 4: Add a "remove on click" feature
    newItem.addEventListener('click', function() {
        taskList.removeChild(newItem);
    });

    // STEP 5: Add the new <li> to the <ul>
    taskList.appendChild(newItem);

    // Clear the input box
    taskInput.value = '';
});
