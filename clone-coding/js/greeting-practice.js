const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
USER_LS = "currentUser",
greeting = document.querySelector(".js-greetings"),
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const userName = localStorage.getItem(USER_LS);
    console.log(userName);
    if(userName === null) {
        askForName();
    } else {
        paintGreeting(userName);
    }
}

function init(){
    loadName();
}

init();

