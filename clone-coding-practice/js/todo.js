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

const ToDoList = {
    do : document.querySelector(".do-toDoList"),
    decide : document.querySelector(".decide-toDoList"),
    delegate : document.querySelector(".delegate-toDoList"),
    delete : document.querySelector(".delete-toDoList")
}

const ToDo_LS = {
    do : "do-ToDos",
    decide : "decide-ToDos",
    delegate : "delegate-ToDos",
    delete : "delete-ToDOs"
}

let toDos = [[], [], [], []];

function saveToDos(){
    localStorage.setItem(ToDo_LS.do, JSON.stringify(toDos[0]));
}

function paintToDos(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const newId = toDos[0].length + 1;

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

    ToDoList.do.appendChild(li);
    toDos[0].push(toDoObj);    
    saveToDos();
}


function deleteToDos(event){
    const li = event.target.parentNode;

    ToDoList.do.removeChild(li);
        const cleanToDos_do = toDos[0].filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos.do = cleanToDos_do;
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const clicked = event.target.classList[0];
    console.log(clicked);
    let clicked_select = clicked.split("-",1)[0];
    console.log(clicked_select);
    switch(clicked_select){
        case 'do':
            const textContent = input.do.value;
            paintToDos(textContent);
            input.do.value = "";
            input.do.classList.remove("showing");
            break;
        case 'decide':
            const textContent_decide = input.decide.value;
            paintToDos_decide(textContent_decide);
            input.decide.value = "";
            input.decide.classList.remove("showing");
            break;
        case 'delegate':
            const textContent_delegate = input.delegate.value;
            paintToDos_delegate(textContent_delegate);
            input.delegate.value = "";
            input.delegate.classList.remove("showing");
            break;
        case 'delete':
            const textContent_delete = input.delete.value;
            paintToDos_delete(textContent_delete);
            input.delete.value = "";
            input.delete.classList.remove("showing");
            break;
    }
}

function handleClick(event){
    const clicked = event.target.classList[0];
    let clicked_select = clicked.split("-",1)[0];  

    switch(clicked_select){
        case 'do':
            input.do.classList.add("showing");
            form.do.addEventListener("submit", handleSubmit);
            break;      
        case 'decide':
            input.decide.classList.add("showing");
            form.decide.addEventListener("submit", handleSubmit);
            break;
        case 'delegate':
            input.delegate.classList.add("showing");
            form.delegate.addEventListener("submit", handleSubmit);
            break;
        case 'delete':
            input.delete.classList.add("showing");
            form.delete.addEventListener("submit", handleSubmit);
            break;
    }
}

function loadToDos(){
    const loaded_doTodos = localStorage.getItem(ToDo_LS.do);
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
}

init();
