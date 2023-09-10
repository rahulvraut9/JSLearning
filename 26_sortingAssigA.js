const array = [113,45,56,11,32,45,109,799,56,45];
array.reverse();
console.log(`Reversed Array is: ${array}`);
array.sort();
console.log(`Just Sort: ${array}`);
array.sort((n1,n2)=>n1>n2 ? 1 :-1)
console.log(`Assending Order Sort: ${array}`);
console.log(`Gratest Number of Array: ${array[array.length-1]}`);
console.log(`Smallest Number of Array: ${array[0]}`);
const array2 =[];
// for(i=0;i<array.length;i++){
//     if(!array2.includes(array[i])){
//         array2.push(array[i]);
//     }
// }

for(let arr of array){
    if(!array2.includes(arr)){
        array2.push(arr)
    }
}
console.log(`Removed Duplicate numbers froom Array : ${array2}`)




