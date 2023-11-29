let todoitems = [];

//create new item
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todoitems.push(todo);
    renderTodo(todoitems);
}
//form
const form = document.querySelector(".js-form");
//submit event listner
form.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.querySelector(".js-todo-input");
    //get value + remove whitespCE
    const text = input.ariaValueMax.trim();
    if (text !== "") {
        addTodo(text);
        input.value = "";
        input.focus();
    }
});

function renderTodo(todo) {
    //select first element
    const list = document.querySelector(".js-todo-list");
    //ternanry operator to check if done is checked (true) if yes assign is Checked if not assign empty string
    const isChecked = todo.checked ? "done" : "";
    const node= document.createElement("li");
    //set class 
    node.setAttribute("class", `todo-item ${isChecked}`);
    node.setAttribute("data-key", todo.id);
    //set contents of li
    node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
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

//mark task as completed
const list = document.querySelector(".js-todo-list");
list.addEventListener("click", event => {
    if (event.target.classList.contains("js-tick")) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
});

function toggleDone(key) {
    const index = todoitems.findIndex(item => item.id === Number(key));
    todoitems[index].checked = !todoitems[index].checked;
    renderTodo(todoitems[index]);
}

  