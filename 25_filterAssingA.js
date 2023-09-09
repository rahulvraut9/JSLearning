const array = [20,11,40,25,37,49,9,90,60,2,19];
const grater50 = array.filter((num)=>{
    return num>50;
})
console.log(`Grater Than 50: ${grater50}`);

const evenNums = array.filter((num)=>{
    return num%2==0;
})
console.log(`Even numbers in Array: ${evenNums}`);
const oddNums = array.filter((num)=>{
    return num%2!==0;
})
console.log(`Odd numbers in Array: ${oddNums}`);

const multof5 = array.filter((num)=>{
    return num%5==0;
})
console.log(`Multiple of 5 numbers in Array: ${multof5}`);

const range = array.filter((num)=>{
    return num<50 && num>20
})
console.log(`Numbers between 20 to 50 in Array: ${range}`);