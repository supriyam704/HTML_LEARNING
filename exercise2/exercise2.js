// Create a new div element
let element = document.createElement("div");
element.textContent = "hello";
document.body.appendChild(element);
element.classList.add("main");

// Create a new button element
const newButton = document.createElement("button");
newButton.textContent = "edit";

// Add event listener to the button
newButton.addEventListener("click", () => {
  console.log("click");
  
  // Toggle background color of the div element
  if (element.style.background == "red") {
    element.style.background = "blue";
  } else {
    element.style.background = "red";
  }
  
  // Create a new input text element
  let inputText = document.createElement("input");
  document.body.appendChild(inputText);
  inputText.classList.add("input-text");
  
  // Create a new save button element
  let saveBtn = document.createElement("button");
  saveBtn.textContent = "save";
  saveBtn.id = "savebtn";
  
  // Add event listener to the save button
  saveBtn.addEventListener("click", () => {
    console.log("click save");
    const mainDiv = document.querySelector(".main");
    mainDiv.textContent = inputText.value;
    console.log(mainDiv);
  });
  
  document.body.appendChild(saveBtn);
  
  // Create a new close button element
  let closeBtn = document.createElement("button");
  closeBtn.textContent = "close";
  
  // Add event listener to the close button
  closeBtn.addEventListener("click", () => {
    console.log("close btn", inputText);
    document.body.removeChild(inputText);
    const saveNode = document.querySelector("#savebtn");
    document.body.removeChild(saveNode);
    document.body.removeChild(closeBtn);
  });
  
  document.body.appendChild(closeBtn);
});

// Add the new button to the document body
document.body.appendChild(newButton);


// element.addEventListener("mouseover",()=>{
//     console.log("mouse over")
//     element.classList.add("main")
// })


// element.addEventListener("mouseout",()=>{
//     console.log("mouse out")
//     element.classList.add("second")

// })
