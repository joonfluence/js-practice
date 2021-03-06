const clock = document.querySelector('.js-clock'),
clockContent = clock.querySelector('h1');

function loadTime(){
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const day = time.getDay();
    let returnDay = daySelect(day);
    clockContent.textContent = `${month < 10 ? `0${month}` : month}월 ${date < 10 ? `0${date}` : date}일 ${hour < 10 ? `0${hour}시` : `${hour}시`} ${minute < 10 ? `0${minute}` : `${minute}분` } ${seconds < 10 ? `0${seconds}` : seconds}초 ${returnDay}`;
}

function daySelect(dayNum){
    switch(dayNum){
        case 0:
            dayNum = "일요일";
            break;
        case 1:
            dayNum = "월요일";
            break;
        case 2:
            dayNum = "화요일";
            break;
        case 3:
            dayNum = "수요일";
            break;
        case 4:
            dayNum = "목요일";
            break;
        case 5:
            dayNum = "금요일";
            break;
        case 6:
            dayNum = "토요일";
            break;
    }
    return dayNum;
}

function init(){
    setInterval(loadTime, 1000);
}

init();