const array = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array is: ${array}`)
const sum = array.reduce((runningEl,Value)=>runningEl+Value);
console.log(`The Sum Of All Elements using reduce(): ${sum}`);

const divi = array.filter(five=> five%5==0).reduce((accu,val)=>accu+val);
console.log(`Sum of multiple of 5 Elements Using Chaining: ${divi}`);
console.log(`Avrage Of all Elements: ${sum/array.length}`);
let avrage = null;
const sum2 = array.reduce((runningTotal,value,index)=>{
    runningTotal+=value;
    if(index==array.length-1){
        avrage = runningTotal/array.length;
    }
    return runningTotal;
});

console.log(`Sum2 all elements unsing reduce() : ${sum2}`);