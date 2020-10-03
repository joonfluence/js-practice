const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(toDo){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDo));
}

function paintToDos(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length+1;
    delBtn.innerText = "✔";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    
    toDos.push(toDoObj);
    saveToDos(toDoObj);
};

function handleSubmit(event){
    event.preventDefault();
    const text = toDoInput.value;
    paintToDos(text);
    toDoInput.value = '';
};

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // String -> Object 형 변환 해줄 것임 
            const parsedToDos = JSON.parse(loadedToDos);

        // Object로 변환된 것을 배열 안에 넣어 줄 것임. 
            parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
};

init();
