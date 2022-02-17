const todoBar = document.getElementById("todo");
const btn = document.getElementById("add");
const todos = document.getElementById("todos");

const todoHTMLElements = document.getElementsByClassName("el");

var todoElements = []

class TodoElement {
    constructor(name, done) {
        this.name = name;
        this.done = done;
    }
}

window.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) { // enter
        addToList(todoBar.value);
    }
});

btn.onclick = () => {
    addToList(todoBar.value);
};

function addToList(name) {
    if (todoBar.value === "") return;
    
    todoBar.value = "";
    
    var e = new TodoElement(name, false);
    
    todoElements.push(e);
    
    var element = document.createElement("div");
    element.classList.add("el");
    element.innerHTML = "<input type='text' value='" + e.name + "'></input>";
    
    var chk = document.createElement("input");
    chk.type = "checkbox";
    
    chk.addEventListener("change", () => {
        if (chk.checked)
            chk.parentNode.classList.add("done");
        else
            chk.parentNode.classList.remove("done");
    });
    
    element.appendChild(chk);
    
    todos.appendChild(element);
}
