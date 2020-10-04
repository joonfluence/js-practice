const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

/* 
UserName 저장하고 인사하기
    1. Name을 Load한다. 값이 입력되었을 때와 그렇지 않을 경우를 나눠서 생각한다.
    2. 사용자 정보가 입력된 경우엔, greeting.innerText를 통해 입력된 값을 그대로 화면에 보여준다. 
    3. 입력되지 않은 경우엔, form 태그를 통해 받은 값을 넘겨준다. 
    4. greeting.innerText를 통해 입력된 값을 그대로 화면에 보여준다.  
    5. 입력된 값을 localStorage에 저장하고 끝이 난다. 
*/

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 기본 이벤트로 지정된 것을 막아준다. 
    const currentValue = input.value; 
    paintGreeting(currentValue); // 사용자가 입력한 문자를 매개변수로 넘겨준다. 
    saveName(currentValue); 
}

function askForName(){
    form.classList.add(SHOWING_CN); // display: none;되었던 form을 다시 눈에 보이게 만들어준다. 
    form.addEventListener("submit", handleSubmit); 
}

// form 안에 있는 데이터를 전송하여, HTML에 글을 추가한다. 

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); 
    greeting.classList.add(SHOWING_CN); // h4 태그 값을 보이게 만들어준다. 
    greeting.innerText = `Hello ${text}`;
}

/* currentUser의 값이 눈에 보이지 않는다면, 그 값을 불러온다. 
   localStorage로부터 데이터를 가져온다. 또한 유저 값에 따라, 다르게 처리해준다. */

function loadName(){ 
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not
        askForName();
    } else {
        // she is 
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();