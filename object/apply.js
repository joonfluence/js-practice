var example = function (a, b, c){
    return console.log(a + b + c);
};

example(1, 2, 3);
example.call(null, 1, 2, 3);
example.apply(null, [1, 2, 3]);

var obj = {
    string: 'zero',
    yell: function(){
        console.log(this.string);
    }
}

var obj2 = {
    string: 'what?'
}

obj.yell();
obj.yell.call(obj2);

function example(){
    console.log(arguments);
}

example(1, 'string', true);

function example3(){
    console.log(Array.prototype.join.call(arguments));
}

example3(1, 'string', true);