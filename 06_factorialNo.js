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

//recursion

// function factoral(num){
//     var res = num * factoral(num-1) //recursion example
var factres =1;
// } 
function fact(num){
    if(num==2){
        console.log(factres);  
    }else{
         factres = num * fact(num-1);
    }
}
fact(5)

function factoril(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factoril(n - 1);
    }
}

const number = 5; // Change this number to calculate the factorial of a different value
const resut = factoril(number);
console.log(`Factorial of ${number} is ${resut}`);
