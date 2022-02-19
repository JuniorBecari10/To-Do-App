const todoBar = document.getElementById("todo");
const btn = document.getElementById("add");
const todos = document.getElementById("todos");

const todoHTMLElements = document.getElementsByClassName("el");

var todoElements = []

class TodoElement {
    constructor(name) {
        this.name = name;
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
    
    var e = new TodoElement(name);
    
    todoElements.push(e);
    
    var element = document.createElement("div");
    element.classList.add("el");
    element.innerHTML = "<input type='text' value='" + e.name + "'></input>";
    
    var chk = document.createElement("input");
    chk.type = "checkbox";
    
    var close = document.createElement("i");
    close.classList.add("fas");
    close.classList.add("fa-times");
    
    chk.addEventListener("change", () => {
        if (chk.checked)
            chk.parentNode.classList.add("done");
        else
            chk.parentNode.classList.remove("done");
    });
    
    close.addEventListener("click", () => {
        close.parentNode.remove();
        //todoElements.remove(e);
    });
    
    element.appendChild(chk);
    element.appendChild(close);
    
    todos.appendChild(element);
}
