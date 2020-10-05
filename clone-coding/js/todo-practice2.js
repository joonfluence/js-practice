const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "ToDos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const deletedToDo = event.target.parentNode;
    console.log(deletedToDo.id);
    toDoList.removeChild(deletedToDo);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(deletedToDo.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDos(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const newId = toDos.length + 1;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.setAttribute("id", newId);
    toDoList.appendChild(li);
    
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerHTML = text;

    const toDoObj = {
        text : text,
        id : newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const textContent = toDoInput.value;
    paintToDos(textContent);
    toDoInput.value = '';
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDos(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();