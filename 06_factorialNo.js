let result  = 1;
for (i=1; i<=5; i++){
    result  = result * i;
}
console.log(`5! is ${result}`);



function factorial(num){
    let res =  1;
    for (i=1; i<=num; i++){
        res  = res * i;
    }
    console.log(`${num}! of is ${res} `);
   
}

factorial(5);
factorial(9);
factorial(11);
factorial(7);

