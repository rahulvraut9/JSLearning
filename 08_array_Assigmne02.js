const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`The given array is ${arrayNumbers}`);
console.log(`The first element is "${arrayNumbers[0]}" and Last is "${arrayNumbers[arrayNumbers.length-1]}"`);
console.log(`Third last element is ${arrayNumbers[arrayNumbers.length-3]}`);

var evenNum =[];
for(i=0;i<=arrayNumbers.length-1;i++){
    if(arrayNumbers[i]%2==0){
        evenNum.push(arrayNumbers[i])
    }
}
console.log(`Even Numbers in array is ${evenNum}`);

var oddNum =[];
for(i=0;i<=arrayNumbers.length-1;i++){
    if(arrayNumbers[i]%2==1){
        oddNum.push(arrayNumbers[i])
    }
}
console.log(`odd Numbers in array is ${oddNum}`);

var evenPositionNum = 0;
for (let i = 0; i <=arrayNumbers.length-1; i=i+2) {
    evenPositionNum =evenPositionNum+ arrayNumbers[i]
}
console.log(`sum of Even position index numbers is ${evenPositionNum}`);

var oddPositionNum = 0;
for (let i = 1; i <=arrayNumbers.length-1; i=i+2) {
    oddPositionNum =oddPositionNum+ arrayNumbers[i]
}
console.log(`sum of odd position index numbers is ${oddPositionNum}`);

var allEvenNum = 0;
for(i = 0 ; i<= arrayNumbers.length-1;i++){
    allEvenNum = allEvenNum + arrayNumbers[i];
}
console.log(`The sum of all Array Numbers is ${allEvenNum}`);

var multipleof5num =[];
for(i=0;i<=arrayNumbers.length-1;i++){
    if(arrayNumbers[i]%5==0){
        multipleof5num.push(arrayNumbers[i])
    }
}
console.log(`The Multiple of 5 Numbers in array is ${multipleof5num}`);
var presenta = arrayNumbers.includes(115)
console.log(`is 115 avalabels in arrayNumbers : ${presenta}`);

var presentb = arrayNumbers.includes(23)
console.log(`is 23 avalabels in arrayNumbers : ${presentb}`);
arrayNumbers.splice(2,0,55,66);
console.log(`55 & 66 inserted before index 3 & result is : ${arrayNumbers}`);
arrayNumbers.splice(3,3);
console.log(`Deleted 3 elementd starting index is 4 : ${arrayNumbers}`);