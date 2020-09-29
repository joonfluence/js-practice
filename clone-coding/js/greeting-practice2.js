const form = document.querySelector('.js-form'),
input = form.querySelector('input'),
user_LS = "currentUser",
greeting = document.querySelector('.js-greetings'),
SHOWING_CN = "showing",
BLIND_CN = "blind";

function saveName(text){
    localStorage.setItem(user_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello, ${text}`;
}

function loadName(){
    const userName = localStorage.getItem(user_LS);
    if(userName === null){
        askForName();
    } else {
        paintGreeting(userName);
    }
}

function init(){
    loadName();
}  

init();

