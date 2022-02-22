const todoBar = document.getElementById("todo");
const add = document.getElementById("add");
const todos = document.getElementById("todos");
const clear = document.getElementById("clear");
const empty = document.getElementById("empty");

const todoHTMLElements = document.getElementsByClassName("el");

var todoElements = []
var functions = []

class TodoElement {
    constructor(name) {
        this.name = name;
    }
}

window.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) { // enter
        addToList(todoBar.value);
        todoBar.focus();
    }
});

updatePositions();

function updatePositions() {
    var rect = todoBar.getBoundingClientRect();
    
    add.style.left = "" + (rect.left + rect.width - 50) + "px"
    //clear.style.left = "" + (parseInt(add.style.left) + 50) + "px";
    
    for (let f of functions) {
        f();
    }
    
    setTimeout(updatePositions, 1);
}

add.onclick = () => {
    addToList(todoBar.value);
};
    
clear.onclick = () => {
    todos.innerHTML = "";
    todoElements.length = 0;
    
    todoBar.value = "";
    
    empty.style.display = "";
};

function addToList(name) {
    if (todoBar.value === "") return;
    
    empty.style.display = "none";
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
        if (todos.innerHTML === "") {
            empty.style.display = "";
        }
        
        close.parentNode.remove();
        //todoElements.remove(e);
    });
    
    functions.push(() => {
        var rect = chk.getBoundingClientRect();
        
        //close.left = (rect.left - 30) + "px";
    });
    
    element.appendChild(chk);
    element.appendChild(close);
    
    todos.appendChild(element);
}
