const input = document.querySelector("#todo-input");
//input field

//add button listener
document.querySelector("#submit").addEventListener('click', () => {
    //input field vlaue
    const inputData = input.value;
    input.value = "";

    //make to do item
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item");

    const todoElContent = document.createElement("div");
    todoElement.appendChild(todoElContent);

    const todoElInput = document.createElement("input");
    todoElInput.classList.add("text");
    todoElInput.type = "text";
    todoElInput.value = inputData;
    todoElInput.setAttribute("readonly", "readonly");

    todoElContent.appendChild(todoElInput);

    const todoactionsel = document.createElement("div");
    todoactionsel.classList.add("action-items");

    const todoDoneEl = document.createElement("i");
    todoDoneEl.classList.add("fa-solid");
    todoDoneEl.classList.add("fa-check");

    const todoEditEl = document.createElement("i");
    todoEditEl.classList.add("fa-solid");
    todoEditEl.classList.add("fa-pen-to-square");
    todoEditEl.classList("edit");

    const todoDeleteEl = document.createElement("i");
    todoDeleteEl.classList.add("fa-solid");
    todoDeleteEl.classList.add("fa-trash");

    todoactionsel.appendChild(todoDoneEl);
    todoactionsel.appendChild(todoEditEl);
    todoactionsel.appendChild(todoDeleteEl);

    todoElement.appendChild(todoactionsel);
        console.log(todoElement);
//add item to list
    document.querySelector(".todo-lists").appendChild(todoelement);

    //done function
    todoDoneEl.addEventListener("click", () => {
        todoElInput.classList.add("done");
        todoelement.removeChild(todoactionsel);
    });


    //edit function
    todoEditEl.addEventListener("click", () => {
        if (todoEditEl.classList.contains("edit")) {
            todoEditEl.classList.remove("edit");
            todoEditEl.classList.remove("fa-pen-to-square");
            todoEditEl.classList.add("fa-x");
            todoEditEl.classList.add("save");
            todoEditEl.removeAttribute("readonly");
            todoElInput.focus();
            }

        else {
            todoEditEl.classList.remove("save");
            todoEditEl.classList.remove("fa-x");
            todoEditEl.classList.add("fa-pen-to-square");
            todoEditEl.classList.add("edit");
            todoElInput.setAttribute("readonly", "readonly");
        }
    });

    //delete function

    todoDeleteEl.addEventListener("click", (e) => {
        console.log(todoelement);
        document.querySelector(".todo-lists").removeChild(todoelement);
    });

})