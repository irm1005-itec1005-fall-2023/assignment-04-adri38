let todoitems = [];

//create new item
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todoitems.push(todo);
    renderTodo(todo);
  
}
//form
const form = document.querySelector(".js-form");
//submit event listner
form.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.querySelector(".js-todo-input");
    //get value + remove whitespCE
    const text = input.value.trim();
    if (text !== "") {
        addTodo(text);
        input.value = "";
        input.focus();
    }
    
});

function renderTodo(todo) {
    localStorage.setItem("todoItemsRef", JSON.stringify(todoitems));

    //select first element
    const list = document.querySelector(".js-todo-list");
    const item = document.querySelector(`[data-key="${todo.id}"]`)

    if (todo.deleted) {
        item.remove();
        if (todoitems.length === 0) list.innerHTML = "";
        return
    }

    //ternanry operator to check if done is checked (true) if yes assign is Checked if not assign empty string
    const isChecked = todo.checked ? "done" : "";
    const node= document.createElement("li");
    //set class 
    node.setAttribute("class", `todo-item ${isChecked}`);
    node.setAttribute("data-key", todo.id);
    //set contents of li
    console.log(todo);
    node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    Delete
    </button>
    `;
   //if item is already in dom
   if (item) {
    list.replaceChild(node, item);
   }
   else {
    list.append(node);
   }
   
}

document.addEventListener("DOMContentLoaded", () => {
    const ref = localStorage.getItem("todoItemsRef");
    if (ref) {
        todoitems = JSON.parse(ref);
        todoitems.forEach(t => {
            renderTodo(t);
        });
       
        
    }
});

//mark task as completed
const list = document.querySelector(".js-todo-list");
list.addEventListener("click", event => {
    if (event.target.classList.contains("js-tick")) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
    if (event.target.classList.contains("js-delete-todo")) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
    
});

function toggleDone(key) {
    const index = todoitems.findIndex(item => item.id === Number(key));
    console.log(index);
    console.log(todoitems);
    todoitems[index].checked = !todoitems[index].checked;
    renderTodo(todoitems[index]);
  
    
}

function deleteTodo(key) {
    //find the right todo item
    const index = todoitems.findIndex(item => item.id === Number(key));
    //create new object with th esame properties and true deleted property
    const todo = {
        deleted: true,
        ...todoitems[index],
    };
    //filter out the item from the array
    todoitems = todoitems.filter(item => item.id !==Number(key));
    renderTodo(todo);
    
}
  

//References:
//I mostly used this tutorial since I didn't know where to start. I had to edit some of the code since it didn't work. Lots of trouble shooting.
//https://freshman.tech/todo-list/
//other refs:
//https://www.educative.io/answers/how-to-create-a-simple-to-do-list-with-html-css-and-js
//https://www.codingninjas.com/studio/library/building-a-todo-list-using-javascript
