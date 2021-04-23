function Person(name, job){
    this.name = name,
    this.job = job
}

const joonho = new Person("joonho", "programmer");
Person.prototype.sayHi = function(){
    console.log(this.name+"이며, 직업은 "+this.job+" 입니다");
}

joonho.sayHi();

function Programmer(name, job, maxtyping){
    Person.apply(this, arguments)
    this.maxtyping = maxtyping;
}

Programmer.prototype = new Person();

const paul = new Programmer("Joonho", "Programmer", 350);
Programmer.prototype.coding = function (){
    console.log("오늘도 저는 코딩 중이며, 최대 타자수는 "+this.maxtyping);
}
paul.coding();
paul.sayHi();