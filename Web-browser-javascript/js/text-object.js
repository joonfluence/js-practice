var t1 = document.getElementById('target1').firstChild;
var t2 = document.getElementById('target2').firstChild;

console.log(t1.firstChild.nodeValue);

try{
    console.log(t2.firstChild.nodeValue);   
} catch(e){
    console.log(e);
}

console.log(t2.nextSibling.firstChild.nodeValue);

