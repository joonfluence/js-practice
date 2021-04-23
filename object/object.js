// let juno = {
//     firstname : 'joonho',
//     lastname : 'lee',
//     body : {
//        height : 174,
//        weight : 63 
//     },
//     hobby : ['boxing', 'cooking', 'programming']
//     , 
//     eat(food){
//         console.log(food+"을 먹는다")
//     }
// }

function Person(firstname, lastname, body, hobby, food){
    this.firstname = firstname,
    this.lastname = lastname,
    this.body = { height : body.height,
                  weight : body.weight                
    },
    this.hobby = hobby,
    this.eat = function() {
        return console.log(food+"를 먹는다")
    }
}

Person.prototype.grade = null;
let juno = new Person('joonho', 'lee', {height : 174, weight: 63}, ['boxing', 'cooking', 'eating'], 'hamburger');
let paul = new Person('paul', 'kim', {height : 168, weight: 65}, ['playing basketball', 'computer gaming'], 'pizza');

console.log(Person);
console.log(juno);
console.log(paul);
paul.eat();
juno.eat();
