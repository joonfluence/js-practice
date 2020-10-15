let toDos = [[], [], [], []];

function saveToDos(){
    localStorage.setItem(toDos_LS.do, JSON.stringify(toDos[0]));
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

    first.ToDoList.appendChild(li);
    toDos[0].push(toDoObj);    
    saveToDos();
}

function deleteToDos(event){
    const li = event.target.parentNode;
    first.ToDoList.removeChild(li);
        const cleanToDos_do = toDos[0].filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos[0] = cleanToDos_do;
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const clicked = event.target.classList[0];
    let clicked_select = clicked.split("-",1)[0];
    
    switch(clicked_select){
        case 'do':
            const textContent = first.input.value;
            paintToDos(first, 0, textContent);
            input.value = "";
            input.classList.remove("showing");
            break;
        // case 'decide':
        //     const textContent_decide = input.decide.value;
        //     second.paintToDos_decide(textContent_decide);
        //     input.decide.value = "";
        //     input.decide.classList.remove("showing");
        //     break;
        // case 'delegate':
        //     const textContent_delegate = input.delegate.value;
        //     third.paintToDos_delegate(textContent_delegate);
        //     input.delegate.value = "";
        //     input.delegate.classList.remove("showing");
        //     break;
        // case 'delete':
        //     const textContent_delete = input.delete.value;
        //     fourth.paintToDos_delete(textContent_delete);
        //     input.delete.value = "";
        //     input.delete.classList.remove("showing");
        //     break;
    }
}

function handleClick(event){
    const click = event.target;
    console.log(click);
    const clicked = event.target.classList[0];
    console.log(clicked);
    let clicked_select = clicked.split("-",1)[0];  

    switch(clicked_select){
        case 'do':
            first.input.classList.add("showing");
            first.form.addEventListener("submit", handleSubmit);
            break;      
        // case 'decide':
        //     second.input.classList.add("showing");
        //     second.form.addEventListener("submit", handleSubmit);
        //     break;
        // case 'delegate':
        //     third.input.classList.add("showing");
        //     third.form.addEventListener("submit", handleSubmit);
        //     break;
        // case 'delete':
        //     fourth.input.classList.add("showing");
        //     fourth.form.addEventListener("submit", handleSubmit);
        //     break;
    }
}

function loadToDos(section){
    const loaded_doTodos = localStorage.getItem(toDos_LS.section);
    if(loaded_doTodos !== null){
        const parsed_doTodos = JSON.parse(loaded_doTodos);
        parsed_doTodos.forEach(function(toDo){
            section.paintToDos(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    btn.addEventListener("click", handleClick);

    /*
    second.btn.addEventListener("click", handleSubmit);
    third.btn.addEventListener("click", handleSubmit);
    fourth.btn.addEventListener("click", handleSubmit);
    */
}

init();
