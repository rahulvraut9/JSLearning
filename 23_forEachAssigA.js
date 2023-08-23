console.log(`-------Log Array Elements With Its Index------`);
const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumber.forEach((value,index)=>{
   console.log(`Value : ${value}, Index : ${index}`)
});
console.log(`-------Positive Numbers in Array------`);
arrayNumber.forEach((value)=>{
    if(value>0){
        console.log(`${value} is Positive Numbers`);
    }
});
console.log(`-------Negative Numbers with New Array------`);
arr = [];
arrayNumber.forEach((value)=>{
    if(value<0){
        arr.push(value);
    }
    
});
console.log(`New Array is ${arr}`);
console.log(`-------Even Numbers in Array------`);
arrayNumber.forEach((value)=>{
    if(value%2==0){
        console.log(`${value} is Even Numbers`);
    }
});
console.log(`-------Sum of all Numbers in Array------`);
let sum = 0;
arrayNumber.forEach((value)=>{
    sum += value;
});
console.log(`Sum of All Elements is ${sum}`);
console.log(`-------Even Index in Value Array------`);
arrayNumber.forEach((value,index)=>{
   if(index%2==0){
    console.log(`Even Index Value ${value}`)
   }
});
