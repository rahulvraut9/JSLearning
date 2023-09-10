const array = ["Stew","Jenny","Bill","Larry","Vivek"];
array.sort();
console.log(array);
array.reverse();
console.log(array);

const arraNum = [34,3,5,11,21,9,42];
arraNum.sort((n1,n2)=>n1>n2 ? 1 : -1) // sort assending 
console.log(arraNum);

const arraNum2 = [34,3,5,11,21,9,42];
arraNum2.sort((n1,n2)=>n1>n2 ? -1 : 1) // sort dssending 
console.log(arraNum2);

arraNum.reverse();     // sort desendinf by reverse()
console.log(arraNum);


