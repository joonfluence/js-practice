const clockContainer = document.querySelector('.js-clock'),
clockContent = document.querySelector('h1');

function loadTime(){
    const clock = new Date(),
    year = clock.getFullYear(),
    month = clock.getMonth(),
    date = clock.getDate(),
    hours = clock.getHours(),
    minutes = clock.getMinutes(),
    seconds = clock.getSeconds(),
    day = clock.getDay(),
    day_2 = daySelect(day);

    // 2020/09/29/06:30'30
    
    clockContent.textContent = `${year}/${month < 10 ? `0${month}` : month}/${date < 10 ? `0${date}` : date}/${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}'${seconds < 10 ? `0${seconds}` : seconds} ${day_2}day`;
}

function daySelect(day){
    if (day==0){
        day = 'Mon';
        return day;
    } else if (day==1){
        day = 'Tues';
        return day;
    } else if (day==2){
        day = 'Wednes';
        return day;      
    } else if (day==3){
        day = 'Thurs';
        return day;
    } else if (day==4){
        day = 'Fri';
        return day;
    } else if (day==5){
        day = 'Satur';
        return day;
    } else if (day==6){
        day = 'Sun';
        return day;
    }
}

function init(){
    setInterval(loadTime, 1000);
}

init();

