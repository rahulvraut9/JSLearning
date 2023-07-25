console.log(`************************TASK 1**************************`);
var graterNuber = function(num1,num2){
    var result = num1>num2 ? num1 : num2;
    console.log(`The Grater number between ${num1} & ${num2} is ${result}`);
}
graterNuber(10,-10);
graterNuber(800,899);
console.log(`************************TASK 2**************************`);
var isEvenOrOddNumber = function(...num){
    for(i=0;i<num.length;i++){
        res = num[i]%2==0 ? "EVEN" : "ODD";
        console.log(`The Given Number ${num[i]} is : ${res}`);
    }
}
isEvenOrOddNumber(29,44,0,101);
console.log(`************************TASK 3**************************`);
var worldLength = function(word){
   res = word.length%2==0 ? "EVEN" : "ODD";
   console.log(`The length of ${word} is ${res}`);
}
worldLength("Javascript");
worldLength("Developer");
worldLength("Google");

