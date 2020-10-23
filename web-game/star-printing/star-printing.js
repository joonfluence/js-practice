// 1씩 증가하기, 다양한 경우에 활용될 수 있기 위해선 repeat 함수를 사용하는 것이 더 낫다. 

let star = "*";
let i;


for(i=0; i<5;i++){
    console.log(star+"\n");
    star += "*";
}

for(var star = 1; star <= 5; star += 1){
    console.log('*'.repeat(star));
}

// 2씩 감소하기 

for(var star = 10; star > 0; star -=2){
    console.log('*'.repeat(star));
}

// 2배씩 증가하기 

for(var star=1; star <=16; star*=2){
    console.log('*'.repeat(star));
}
