const array = [2,4,7,9,11];
let sum = 0;
for(const element of array){
    sum=sum+element;
}
console.log(sum);

const totalSum = array.reduce((runningTotal,element)=>{
    return runningTotal+element;
})
console.log("Total Sum Using Reduce"+totalSum);

const totalMult = array.reduce((runningTotal,element)=>{
    return runningTotal+element;
})
console.log("Total Multiplication Using Reduce " +totalMult);

const starSum = array.reduce((runningTotal,element)=>{
    return runningTotal*element;
});
console.log("Total Multiplication Using Reduce "+starSum); 

const startSum = array.reduce((runningTotal,element)=>{
    return runningTotal+element;
},100)
console.log("Total Sum Using Reduce adding Acumaltor Value "+startSum); // by changing Accumalator value