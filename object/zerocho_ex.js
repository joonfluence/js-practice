// 생성자 함수(클래스) : Vehicle 

function Vehicle(name, speed){
    this.name = name,
    this.speed = speed
}

// 공통 요소 : Prototype 

Vehicle.prototype.drive = function(){
    console.log(this.name + ' runs at ' + this.speed)
}

// Vehicle의 객체(인스턴스) : tico

let tico = new Vehicle('tico', 50);
tico.drive();

// Vehicle의 자식 클래스 : Sedan 

function Sedan(name, speed, maxSpeed){
    Vehicle.apply(this, arguments)
    this.maxSpeed = maxSpeed;
}

Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;

// Sedan 클래스에서 활용되는 요소 

Sedan.prototype.boost = function (){
    console.log(this.name + ' boosts its speed at ' + this.maxSpeed);
}

// Sedan 객체(인스턴스) : sonata 

let sonata = new Sedan('sonata', 100, 200);
sonata.drive();
sonata.boost();

function Truck(name, speed, capacity){
    Vehicle.apply(this, arguments);
    this.capacity = capacity;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.load = function (weight){
    if(weight > this.capacity){
        return console.error("아이고 무거워!");
    } return console.log('짐을 실었습니다!');
}

let boongboong = new Truck('boongboong', 40, 100);
boongboong.drive();
boongboong.load(120);