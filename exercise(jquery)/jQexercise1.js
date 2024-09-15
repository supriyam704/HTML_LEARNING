// Document ready event handler
$(() => {
    // Create a new unordered list element with class "task-list"
    const ul1 = $("<ul>", { class: "task-list" });
  
    // Define an array to store tasks
    const tasks = ["task1", "task2", "task3"];
  
    // Create a new button element with class "add-task-btn" and text "Add a task"
    const btn = $("<button>", { class: "add-task-btn fas fa-plus" }).text("Add a task");
  
    // Create a new input element with class "input-task"
    const taskInput = $("<input>", { class: "input-task" });
  
    // Create a new div element with class "add-grp" to group the button and input
    const addGrp = $("<div>", { class: "add-grp" });
    addGrp.append(btn);
    addGrp.append(taskInput);
  
    // Append the add group to the body of the HTML document
    $("body").append(addGrp);
  
    // Event handler for the add task button click
    btn.on("click", () => {
      // Get the value of the input field
      const inputVal = $(".input-task").val();
      console.log("click add btn", inputVal);
  
      // Add the input value to the tasks array
      tasks.push(inputVal);
  
      // Call the addTask function to add the new task to the list
      addTask(inputVal, tasks.length - 1);
    });
  
    // Function to add a task to the list
    const addTask = (task, index) => {
      // Create a new list item element with the task text
      const list = $("<li>").text(task);
  
      // Create a new delete button element with class "delete-btn" and text "delete" + index
      const deleteBtn = $("<i>", { class: "delete-btn fas fa-trash" });
  
      // Event handler for the delete button click
      deleteBtn.on("click", () => {
        console.log("delete", index);
  
        // Remove the task from the tasks array
        tasks.splice(index, 1);
  
        // Empty the unordered list
        ul1.empty();
  
        // Call the renderTaskList function to re-render the task list
        renderTaskList();
      });
  
      // Create a new div element with class "list-grp" to group the list item and delete button
      const listGrp = $("<div>", { class: "list-grp" });
      listGrp.append(list, deleteBtn);
  
      // Append the list group to the unordered list
      ul1.append(listGrp);
    };
  
    // Function to render the task list
    const renderTaskList = () => {
        $("body").append(ul1);

      // Iterate over the tasks array and call the addTask function for each task
      tasks.forEach((task, index) => {
        console.log(task, index);
        addTask(task, index);
      });
  
      // Append the unordered list to the body of the HTML document
    };
  
    // Call the renderTaskList function to initially render the task list
    renderTaskList();
  });