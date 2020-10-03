const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

/* 

입력한 값을 HTML 태그로 추가해주는 함수 & 배열로 바꿔주는 함수
    - 새롭게 값을 추가해줘야하므로 document.createElement를 사용하여, 추가해준다. 
    - 해당 요소들을 태그 목록에 추가해준다. 

*/

function deleteToDos(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){

    })
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.textContent = "✔";
    span.textContent = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.setAttribute('id', newId);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(toDoObj);
}

/* 
    submit 동작을 처리하는 함수 
        1) submit의 기본 동작을 막는다. 
        2) paint 함수 동작을 의뢰한다. 
*/

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// LocalStorage에 저장된 데이터를 가져오는 함수 

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach()
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();