const input = document.querySelector('input');
const addBtn = document.querySelector('.addTask > button');

// Event listener for the "Add" button click
addBtn.addEventListener('click', addList);

// Event listener for the Enter key press in the input field
input.addEventListener('keyup', (e) => {
    // Check if Enter key is pressed (key code 13)
    // If yes, call the addList function
    (e.keyCode === 13 ? addList(e) : null);
});

function addList(e) {
    // Get references to the "not completed" and "completed" task lists
    const notCompleted = document.querySelector('.notComplete');
    const completed = document.querySelector('.completed');

    // Create new elements for the task item, check button, delete button, and edit button
    const newList = document.createElement('li');
    const checkBt = document.createElement('button');
    const delBt = document.createElement('button');
    const editBt = document.createElement('button'); // Add an edit button

    // Set inner HTML of buttons to include icons
    checkBt.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; // check icon
    delBt.innerHTML = '<i class="fa-solid fa-trash"></i>'; // delete icon
    editBt.innerHTML = '<i class="fa-solid fa-edit"></i>'; // Edit icon

    // Check if input value is not empty before adding a new task
    if (input.value.trim() !== '') {
        // Set text content of the new task item to the input value
        newList.textContent = input.value;
        // Clear the input field after adding the task
        input.value = '';
        // Append new task item and buttons to the "not completed" list
        notCompleted.appendChild(newList);
        newList.appendChild(checkBt);
        newList.appendChild(editBt); // Append edit button
        newList.appendChild(delBt);
    } else {
        // Alert the user if they try to add an empty task
        alert('Please write something before adding a task.');
    }

    // Event listener for the check button click
    checkBt.addEventListener('click', function () {
        const parent = this.parentNode;
        // Remove task item from "not completed" list
        parent.remove();
        // Move task item to "completed" list
        completed.appendChild(parent);
        // Hide the check button
        checkBt.style.display = 'none';
    });

    // Event listener for the delete button click
    delBt.addEventListener('click', function () {
        const parent = this.parentNode;
        // Remove task item from the list
        parent.remove();
    });

    // Event listener for the edit button click
    editBt.addEventListener('click', function () {
        const parent = this.parentNode;
        // Prompt user to edit the task description
        const newText = prompt('Edit task:', parent.firstChild.textContent.trim());
        // Update task description if user provides new text
        if (newText !== null) {
            parent.firstChild.textContent = newText;
        }
    });
}
