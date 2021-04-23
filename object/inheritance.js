function Person(name){
    this.name = name;
}

function Programmer(name){
    this.name = name;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function (){
    return console.log("코딩은 재밌다.");
}

let egoing = new Programmer();
console.log(Person);
console.log(egoing.coding());
