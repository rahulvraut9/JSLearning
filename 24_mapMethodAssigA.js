console.log(`---------Addition of 10 in Array---------`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
arrayAddition = arrayNumbers.map((num)=>{
   return num+10;
})
console.log(`Additon of 10 in Array is : ${arrayAddition}`);
console.log(`---------Cube of Array---------`);
arrayCube = arrayNumbers.map((num)=>{
   return num*num*num;
})
console.log(`Cube of Array is : ${arrayCube}`);
console.log(`---------Adding Index Value in Array---------`);
arrayIndex = arrayNumbers.map((num,index)=>{
   return num+index;
})
console.log(`Adding Index value in Array : ${arrayIndex}`);


