/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


let todoItems = [];

//pushes text entered into todoItems array
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  todoItems.push(todo);
  console.log(todoItems);
}
const form = document.querySelector('.js-form')
//submit event listner
form.addEventListener('submit', function(event) {
  //prevents page reload
  event.preventDefault();
  //select text input
  const input = document.querySelector('.js-todo-input');

}
)


























//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();