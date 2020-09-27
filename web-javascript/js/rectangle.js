// body{
//     padding:0;.0
//     margin:0;
// }
// div{
//     border:50px solid #1065e6;
//     padding:50px;
//     margin:50px;
// }
// #target{
//     width:100px;
//     height:2000px;
// }

var t = document.getElementById('target');
setInterval(function(){
    console.log('getBoundingClientRect : ', t.getBoundingClientRect().top, 'pageYOffset:', window.pageYOffset);
}, 1000)
