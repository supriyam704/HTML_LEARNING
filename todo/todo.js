// var a= document.createElement("div")
// console.log(a);
// a.textContent= "this is new div"
// console.log(a);
// a.style.backgroundColor= "red"
// a.style.color="white"
// a.style.width="100px"
// a.style.height="50px"
// a.style.padding="5px"
// a.style.margin="3px"
// a.style.border="1px solid black"
// a.className="myClass"
// document.body.appendChild(a)
var button= document.createElement("button")
button.textContent= "add button"
document.body.appendChild(button);
button.addEventListener('click', ()=> {
    // code to be executed when the button is clicked
    console.log('Button clicked!');
    creatediv();
  });
function creatediv(){
   var div= document.createElement("div")
   div.textContent="this is new div"
   div.className="myClass"
   document.body.appendChild(div)
}