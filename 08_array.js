let array = [10,20,30,50,20,10,80];
console.log(array);
console.log(`Type of array is ${typeof array}`);

console.log(`Total number of elements in array is ${array.length}`);
let element2 = array[2];
console.log(`Elemrent sorted as element2 is ${element2}`);

let element1 = array[0];
console.log(`Elemrent sorted as element1 is ${element1}`);
let arrayLength = array.length;
let elementLast = array[arrayLength-1];
console.log(`Last elemnt is ${elementLast}`);
console.log(`------------------------------`);
array[1] = 100;
console.log(array);

let isAvalabel = array.includes(80);
console.log(` is 80 Avalabel ${isAvalabel}`);

let indexofElement = array.indexOf(80);
console.log(` index of 80 is ${indexofElement}`);
console.log(`---------------Array  transform---------------`);

for(let index =0; index<array.length; index++){
    const element = array[index];
    console.log(element);
}
console.log(`---------------Array Reverse transform---------------`);

for(let index =array.length-1; index>=0; index--){
    const element = array[index];
    console.log(element);
}

console.log(`---------------log Even index element---------------`)

for(let index =0; index<array.length; index= index+2){
        const element = array[index];
        console.log(element);
}
console.log(`------ InsertElement at first and last element ----------`);
var arry = [20,30,40,50,70,60];
arry.push(20)
arry.push(26,30)
arry.unshift(40);
console.log(arry)

console.log(`------ remove at first and last element ----------`);
arry.pop()
arry.shift();
console.log(arry)
console.log(`------ getting slice from arry ----------`);
console.log(arry.slice(3));
console.log(arry.slice(3,6));
console.log(`------ performing remove element splice() in arra ----------`);
var aara = [20,30,40,50,60,70,80,90,20,10]
let removedElement = aara.splice(4);
console.log(aara);
console.log(removedElement);

var aara = [20,30,40,50,60,70,80,90,20,10]
let elementRemoved = aara.splice(4,3);
console.log(aara);
console.log(elementRemoved);
aara.splice(aara.length-2,2); ///Removing last 2 elements of arra

console.log(`------ adding  element bt splice() in arra ----------`);
var aara = [20,30,40,50,60,70,80,90,20,10]
let addEelements = aara.splice(4,0,75,37);
console.log(aara);
console.log("0 elements aded",addEelements);


console.log(`------ concat ----------`);
let array1 = [3, 4, 5, 6];
let array2 = [6, 7, 8, 9];
let array3 = array1.concat(array2);
console.log(array3);

console.log(`------ join ----------`);
let result = array1.join(",");
console.log(result);

console.log(`------ for of loop ----------`);
for (const element of array3) {
    console.log(element);
}
console.log(`------ array resize ----------`);
let array4 = [4, 5, 6, 7, 8, 9];
array4.length = 3;
console.log(array4);
console.log(`------ spread operator ... ----------`);
let array5 = [4, 5, 6, 7, 8, 9];
console.log(array5);
console.log(...array5);

