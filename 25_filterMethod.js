const array = [11,9,30,5,7,34];
const newArray = array.filter((currentValue) =>{
    return currentValue>10;
});
console.log(`Grater Than 10 values : ${newArray}`);