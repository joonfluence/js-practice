const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
const toDos = [];

// JSON.stringify(toDos)를 통해, Object 형식의 값을 String으로 바꿔준다. localStorage는 사용자가 입력한 데이터가 String이 아니면 저장하지 못하기 때문이다. 

function saveToDos(toDoObj){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoObj));
}

// ToDoList는 사용자가 입력한 값을 바탕으로 새롭게 값을 추가하여야 하므로, createElement()로 HTML 태그를 만들어주고, 사용자가 입력한 값을 해당 태그 안에 입력해준다. 또한 DOM 구조 상, ul 태그 위에 li, li 태그 안에 span과 button을 넣어준다. (ul 태그는 기존에 존재하던 요소이다.)

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "✔";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(toDoObj);
}

function filterFn(toDo){
    return toDo.id === 1;
}

function deleteToDo(event){
    const btn = event.target; // 클릭한 버튼의 값을 반환해준다. 
    const li = btn.parentNode; // 
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

// JSON.parse(loadedToDos)를 통해, String으로 변환됐던 값들을 다시 Object로 변환하였고 이제 해당하는 값들을 읽어올 수 있게 되었음. 

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
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
}

init();

