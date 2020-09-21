function callAppendChild(){
    var target = document.getElementById('target');
    var li = document.createElement('li');
    var text = document.createTextNode('JavaScript');
    li.appendChild(text);
    target.appendChild(li);
}
 
function callInsertBefore(){
    var target = document.getElementById('target');
    var li = document.createElement('li');
    var text = document.createTextNode('jQuery');
    li.appendChild(text);
    target.insertBefore(li, target.firstChild);
}
