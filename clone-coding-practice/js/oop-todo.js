function ToDoList(formName, btnName, inputName, listName){
    this.form = document.querySelector(formName),
    this.btn = this.form.querySelector(btnName),
    this.input = this.form.querySelector(inputName),
    this.ToDoList = document.querySelector(listName),
    this.paintToDos = function(section, num, text){
        const li = document.createElement('li');
        const span = document.createElement('span');
        const delBtn = document.createElement('button');
        const newId = toDos[num].length + 1;
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
        section.ToDoList.appendChild(li);
        toDos[num].push(toDoObj);    
        saveToDos(num);
    }
    this.saveToDos = function(num){
        localStorage.setItem(ToDo_LS.do, JSON.stringify(toDos[num]));
    }
    this.deleteToDos = function(section, num){
        const li = event.target.parentNode;
        section.ToDoList.removeChild(li);
            const cleanToDos_do = toDos[num].filter(function(toDo){
            return toDo.id !== parseInt(li.id);
        });
        toDos[num] = cleanToDos_do;
        saveToDos();
    }
}

const first = new ToDoList(".do-form", ".do-btn", ".do-input", ".do-toDoList");
const second = new ToDoList(".decide-form", ".decide-btn", ".decide-input", ".decide-toDoList");
const third = new ToDoList(".delegate-form", ".delegate-btn", ".delegate-input", ".delegate-toDoList");
const fourth = new ToDoList(".delete-form", ".delete-btn", ".delete-input", ".delete-toDoList");

let toDos = [[], [], [], []];

function loadToDos(){
    
}



function init(){
    loadToDos();
    
}

