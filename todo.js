// STEP 1: select the items using DOM SELECTROS;
let taskInput = document.getElementById("inputTaskBox");
let addButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

// STEP 2: add an event listener to the button;
// addEventListener is part of DOM methods: "click" is the event we
// want to listen to, while the second parameter after the comma is
// the function you want to run when that button was clicked.
addButton.addEventListener("click", function() {
    // Get the text typed in the input box
    let taskText = taskInput.value;

    // Prevent empty tasks from being added
    if (taskText === "") {
        alert("Please input a task");
        return
    }

    // STEP 3: Create a new <li> element
    let newItem = document.createElement("li");

    // Add the task text inside the <li>
    newItem.textContent = taskText;

    // STEP 4: Add the new <li> to the <ul>
    taskList.appendChild(newItem);

    // Clear the input box
    taskInput.value = "";
});















// taskInput.addEventListener("keydown", function() {
//     alert("you just typed a letter.");
// });
