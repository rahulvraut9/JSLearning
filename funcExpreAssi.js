console.log(`--------------------STEP 1-----------------------------`);
var square = function cal(num){

        console.log(`The Square of ${num} is ${num*num}`);
}
square(3);
square(4);
square(5);
console.log(`--------------------STEP 2-----------------------------`);
console.log(`The type of function is ${typeof square}`);
console.log(`--------------------STEP 3-----------------------------`);

var plot = function size(length,height){
        console.log(`Area length: ${length} and ${height} and area is ${length*height} sqFeet`);
}
plot(20,20);
console.log(`--------------------STEP 4-----------------------------`);
var swapValues = function swap(val1,val2){
    temp = val1;
    val3= val2;
    val4 = temp;
    console.log(`Before swap : Value 1 is ${val1} and Value 2 is ${val2}`);
    console.log(`After Swap : Value 1 is ${val3} and Value 2 is ${val4}`);
}
swapValues(5,7)
swapValues("Angular","React");
console.log(`--------------------STEP 5-----------------------------`);
var fun = function opra(string){
        console.log(`A The total charecter Availabel in string: ${string.length}`);
        console.log(`B Charecter at index 7 is ${string.charAt(7)}`);
        console.log(`C Charecter at index 12 is ${string.charAt(12)}`);
        console.log(`D The Last Chareter of string is ${string.charAt(string.length-1)}`);
        console.log(`D The First Chareter of string is ${string.charAt(0)}`);
        console.log(`Total Number of words in string is ${string.split(" ").length}`);
        console.log(`The square of total number of words is ${string.split(" ").length*string.split(" ").length}`);
}
fun("JS the most popular language of internet");
