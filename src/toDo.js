const toDoForm = document.querySelector("#toDo-form");
const toDoInput = document.querySelector("#toDo-form input");
const toDoList = document.querySelector("#toDo-list");

let toDos = [];
const TODOS = "todos";

function savedToDo(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const list = event.target.parentElement;
    list.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
    savedToDo();
}

function paintToDo(newDoing){
    const doingList = document.createElement("li");
    const span = document.createElement("span");
    const Xbtn = document.createElement("input");
    doingList.id = newDoing.id;
    span.id = 'list-id';
    span.innerText = newDoing.text;
    Xbtn.id = 'Xbtn';
    Xbtn.setAttribute("type", "checkbox");
    Xbtn.addEventListener("click", deleteToDo);
    doingList.appendChild(Xbtn);
    doingList.appendChild(span);
    toDoList.appendChild(doingList);
}

function ToDoSubmit(evnet){
    evnet.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newObj);
    paintToDo(newObj);
    savedToDo();
}

function init(){
    toDoForm.addEventListener("submit",ToDoSubmit);
    const saveThings = localStorage.getItem(TODOS);
    if(saveThings !== null){
        
        const parsedToDos = JSON.parse(saveThings);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }
}

init();