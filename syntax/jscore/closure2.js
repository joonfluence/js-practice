outer = () => {
    var count = 0;
    var inner = () => {
        console.log("count ", ++count);
        return count;
    };
    return inner;
}

var increase = outer();
console.log(increase());
console.log(increase());

var hello = outer();
console.log(hello());
