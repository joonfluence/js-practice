function sum(base){
    var inClosure = base;
    console.log("base", base); // 출력 
    return function (adder){
        console.log("adder", adder); // 출력 
        return inClosure+adder;
    };
};

var fiveAdder = sum(5);
// console.log("1", fiveAdder);
console.log("hi", fiveAdder(3)); 
var threeAdder = sum(3);
console.log(threeAdder());