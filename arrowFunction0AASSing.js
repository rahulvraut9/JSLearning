let message = ()=>{
    console.log(`Good Morning, Today is Monday`);
}
message();

let multiply =(num1,num2,num3=1)=>{
    if(num3!==1){
     console.log(`Multiplication of ${num1}, ${num2} & ${num3} is: ${num1*num2*num3}`);
    }else{
     console.log(`Multiplication of ${num1} & ${num2} is: ${num1*num2*num3}`);
    }
}
multiply(5,5,2);
multiply(10,4);

let addition = (val1,val2,val3,val4,val5)=>{
   console.log(`Addition of ${val1} ${val2} ${val3} ${val4} ${val5} is: ${val1 +val2 +val3 +val4 + val5} `);
}
addition(1,2,3,4,5);
addition(100,100,200,349,756);
addition("I am","learning","ES6","feature","in depth")