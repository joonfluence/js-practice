function traverse(target, callback){
    if(target.nodeType === 1){
        if(target.nodeName === 'A')
        callback(target);
        var c = target.childNodes;
        for(var i=0; i<c.length; i++){
            traverse(c[i], callback);       
        }
    }
}

traverse(document.getElementById('start'), function(elem){
    console.log(elem);
});