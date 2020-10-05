const form = {
    do : document.querySelector(".do-form"),
    decide : document.querySelector(".decide-form"),
    delegate : document.querySelector(".delegate-form"),
    delete : document.querySelector(".delete-form")
}

const btn = {
    do : form.do.querySelector(".do-btn"),
    decide : form.decide.querySelector(".decide-btn"),
    delegate : form.delegate.querySelector(".delegate-btn"),
    delete : form.delete.querySelector(".delete-btn")
}

const input = {
    do : form.do.querySelector(".do-input"),
    decide : form.decide.querySelector(".decide-input"),
    delegate : form.delegate.querySelector(".delegate-input"),
    delete : form.delete.querySelector(".delete-input")
}

doToDoList = document.querySelector(".do-toDoList");
const doToDo_LS = "Do-ToDos";
let doToDos = [];

function saveToDos(){
    localStorage.setItem(doToDo_LS, JSON.stringify(doToDos));
}

function paintToDos(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const newId = doToDos.length + 1;
    doToDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.setAttribute("id", newId);
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDos);
    span.innerHTML = text;
    const toDoObj = {
        text: text,
        id: newId
    }
    doToDos.push(toDoObj);
    saveToDos();
}

function deleteToDos(event){
    const li = event.target.parentNode;
    doToDoList.removeChild(li);
    const cleanToDos = doToDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });

    doToDos = cleanToDos;
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const textContent = doInput.value;
    paintToDos(textContent);
    doInput.value = "";
    doInput.classList.remove("showing");
}

function handleClick(event){
    const clicked = event.target.classList[0];
    var clicked_select = clicked.split("-",1)[0];
    
    switch(clicked_select){
        case 'do':
            input.do.classList.add("showing");
            form.do.addEventListener("submit", handleSubmit);        
        case 'decide':
            input.decide.classList.add("showing");
            form.decide.addEventListener("submit", handleSubmit);
        case 'delegate':
            
            ;
        case 'delete':
            ;

    }
}

function loadToDos(){
    const loaded_doTodos = localStorage.getItem(doToDo_LS);
    if(loaded_doTodos !== null){
        const parsed_doTodos = JSON.parse(loaded_doTodos);
        parsed_doTodos.forEach(function(toDo){
            paintToDos(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    btn.do.addEventListener("click", handleClick);
    btn.decide.addEventListener("click", handleClick);
    btn.delegate.addEventListener("click", handleClick);
    btn.delete.addEventListener("click", handleClick);
}

init();
