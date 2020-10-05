const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
let toDos = [];

// JSON.stringify(toDos)를 통해, Object 형식의 값을 String으로 바꿔준다. localStorage는 사용자가 입력한 데이터가 String이 아니면 저장하지 못하기 때문이다. 

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// ToDoList는 사용자가 입력한 값을 바탕으로 새롭게 값을 추가하여야 하므로, createElement()로 HTML 태그를 만들어주고, 사용자가 입력한 값을 해당 태그 안에 입력해준다. 또한 DOM 구조 상, ul 태그 위에 li, li 태그 안에 span과 button을 넣어준다. (ul 태그는 기존에 존재하던 요소이다.)


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "✔";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    span.innerText = text;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

// event.target을 사용하면, 해당하는 요소의 값을 불러온다. 

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

// handleSubmit을 통해, 사용자가 입력한 값을 text로 건네주고 화면에 추가하는 일을 한다. 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// JSON.parse(loadedToDos)를 통해, String으로 변환됐던 값들을 다시 Object로 변환하였고 이제 해당하는 값들을 화면 상에 출력할 수 있게 되었음. 

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
      });
    }
  }

function init(){ 
    loadToDos(); // load할 ToDo가 있어야 실행됨 
    toDoForm.addEventListener("submit", handleSubmit); // load할 ToDo가 없어도 실행됨 
}

init();

