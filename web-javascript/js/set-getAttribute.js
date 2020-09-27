var t = document.getElementById('target');
        console.log(t.getAttribute('href')); //http://opentutorials.org
        t.setAttribute('title', 'opentutorials.org'); // title 속성의 값을 설정한다.
        console.log(t.hasAttribute('title')); // true, title 속성의 존재여부를 확인한다.
        t.removeAttribute('title'); // title 속성을 제거한다.
        console.log(t.hasAttribute('title')); // false, title 속성의 존재여부를 확인한다.