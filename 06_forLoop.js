// write a program to print 0 to 10 numbers

var num = 10;
var num2 = num++;
console.log(`value of num: ${num}`);
console.log(`value of num2: ${num2}`);

num3 = 20;
num4 = ++num3;
console.log(`value of num3: ${num3}`);
console.log(`value of num4: ${num4}`);

num5 = 30;
num6 = num5--;
console.log(`value of num5: ${num5}`);
console.log(`value of num6: ${num6}`);

num7 = 40;
num8 = --num7;
console.log(`value of num7: ${num7}`);
console.log(`value of num8: ${num8}`);


console.log(`==========================================`)
// log number 5 to 20
for(let i=5; i<=10;i++){
    console.log(i);
}
// log number 10 to 1
console.log(`log number 10 to 1`);
for(let i=10; i>=1;i--){
    console.log(i);
}
// 5 table
console.log(`Table of 5`);
for(let i=5; i<=50;i=i+5){
    console.log(i);
}
// 7 table in reverse order
console.log(`7 table in reverse order`);
for(let i=70; i>=7;i=i-7){
    console.log(i);
}
// Infinte Loop
// for(i=10;i>=0;i++){
//     console.log(i)
// }

console.log(`-----------while loop-----------`);
//Number form 1 to 10
var i =1;
while(i<=10){
    console.log(i);
    i++;
}
