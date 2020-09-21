{/* 

    <p id="target">Cording everybody!</p>
<p> data : <input type="text" id="datasource" value="JavaScript" /></p>
<p>   start :<input type="text" id="start" value="5" /></p>
<p> end : <input type="text" id="end" value="5" /></p>
<p><input type="button" value="appendData(data)" onclick="callAppendData()" />
<input type="button" value="deleteData(start,end)" onclick="callDeleteData()" />
<input type="button" value="insertData(start,data)" onclick="callInsertData()" />
<input type="button" value="replaceData(start,end,data)" onclick="callReplaceData()" />
<input type="button" value="substringData(start,end)" onclick="callSubstringData()" /></p> 

*/}

var target = document.getElementById('target').firstChild;
var data = document.getElementById('datasource');
var start = document.getElementById('start');
var end = document.getElementById('end');
function callAppendData(){
    target.appendData(data.value);
}
function callDeleteData(){
    target.deleteData(start.value, end.value);
}
function callInsertData(){
    target.insertData(start.value, data.value); 
}
function callReplaceData(){
    target.replaceData(start.value, end.value, data.value);
}
function callSubstringData(){
    alert(target.substringData(start.value, end.value));
}
