const form = document.querySelector('.js-form'),
input = form.querySelector('input'),
greeting = document.querySelector('.js-greetings'),
user_LS = "currentUser",
SHOWING_CN = 'shwoing',
BLIND_CN = 'blind';

function saveName(text){
    localStorage.setItem(user_LS,`${text}`);
}

function handleSubmit(event){
    event.preventDefault();
    const submitText = input.value;
    saveName(submitText);
    paintGreeting(submitText);
}

function askForName(){
    form.classList.remove(BLIND_CN);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text){
    greeting.classList.remove(BLIND_CN);
    form.classList.add(BLIND_CN);
    greeting.textContent = `Hello, ${text}`;
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