// let array = [4,5,4,5,8,5,7,8,9,7,8];
// var sort = [];
// for(i=0;i<=array.length-1;i++){
//   for(j=1; j<=array.length-1;j++){
//     if(array[i]==array[j+1]){
//        array.splice(array[j-1],1)
//     }
//   }
  
// }
// console.log(array);
let array = [4,5,4,5,8,5,7,8,9,7,8];
var sort = [];
for(i=0;i<=array.length-1;i++){
    if(!sort.includes(array[i])){
sort.push(array[i]);
    }
}
console.log(sort)