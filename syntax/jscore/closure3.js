function outer(){
    var count = 0;
    return {
        increase: function(){
            return ++count;
        },
        decrease: function(){
            return --count;
        }
    };
}

var counter = outer();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());

var counter2 = outer();
console.log(counter2.increase());