// Create a new input element to get user input
const input = document.createElement("input");
input.className = "task-input";
document.body.appendChild(input);

// Create a new button element to add tasks
const addBtn = document.createElement('button');
addBtn.textContent = "Add Task";
addBtn.addEventListener("click", addTask);
document.body.appendChild(addBtn);

// Create an array to store tasks
const tasks = ["task1", "task2", "task3", "task4", "task5", "task6"];

// Function to add a new task to the list
function addTask() {
  // Get the input value from the input element
  const inputValue = document.querySelector('.task-input').value;
  
  // Add the input value to the tasks array
  tasks.push(inputValue);
  
  // Remove the existing task list from the document body
  const existingList = document.querySelector('.tasklist');
  if (existingList) {
    document.body.removeChild(existingList);
  }
  
  // Render the updated task list
  setTimeout(() => {
    renderTaskList();
  
    // Clear the input field
    document.querySelector('.task-input').value = '';
  
  }, 2000);
}

// Function to render the task list
function renderTaskList() {
  // Create a new ordered list element
  const ol = document.createElement("ol");
  ol.className = "tasklist";
  
  // Iterate over the tasks array and create a list item for each task
  tasks.forEach((task, index) => {
    // Create a new list item element
    const taskList = createTaskElement(task, index);
    
    // Append the list item to the ordered list
    ol.appendChild(taskList);
  });
  
  // Append the ordered list to the document body
  document.body.appendChild(ol);
}

// Function to create a new task element
/**
 * Creates a new list item element with the given text.
 * 
 * @param {string} text - The text content of the list item.
 * @param {number} index - The index of the task in the tasks array.
 * @returns {HTMLLIElement} The created list item element.
 */
function createTaskElement(text, index) {
  // Create a new list item element
  const list = document.createElement("li");
  
  // Set the text content of the list item
  list.textContent = text + "             ";
  
  // Create a new delete button element
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete " + index;
  
  // Add an event listener to the delete button
  deleteBtn.addEventListener("click", () => {
    // Remove the task from the tasks array
    tasks.splice(index, 1);
    
    // Remove the existing task list from the document body
    const existingList = document.querySelector('.tasklist');
    document.body.removeChild(existingList);
    
    // Render the updated task list
    renderTaskList();
  });
  
  // Append the delete button to the list item
  list.appendChild(deleteBtn);
  
  // Return the created list item element
  return list;
}

// Render the initial task list
renderTaskList();