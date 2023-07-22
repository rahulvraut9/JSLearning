string = "      Hey you are doing Good, keep it up     "
function stringHandsOn(){
    console.log('--------------------STEP 1----------------------');
    console.log(`String Before trim: ${string}`)
    console.log('--------------------STEP 2----------------------');
    console.log(`String Length is: ${string.length}`);
    console.log('--------------------STEP 3----------------------');
    console.log(`Now Trimed string is : ${string.trim()} and its length is: ${string.trim().length}`);
    console.log('--------------------STEP 4----------------------');
    console.log(`Removed Space Count is: ${string.length-string.trim().length}`);
    console.log('--------------------STEP 5----------------------');
    console.log(`The First Charector after trim is: ${string.trim().charAt(0)}`);
    console.log(`The Last Charector after trim is: ${string.trim().charAt(string.trim().length-1)}`);
    console.log('--------------------STEP 6----------------------');
    console.log(`Total words after trim: ${string.trim().split(' ').length}`);
    console.log('--------------------STEP 7----------------------');
    console.log(`The index of "good" is ${string.indexOf('Good')}`);
    console.log('--------------------STEP 8----------------------');
    console.log(`The string substring starting from index 22 is: ${string.substring(22)}`);
    console.log(`The string slice starting from index 22 is: ${string.slice(22)}`);
    console.log('--------------------STEP 9----------------------');
    console.log(`is string ends with up? ${string.trim().endsWith('up')}`);
    console.log('--------------------STEP 10----------------------');
    console.log(`is string starts with Hey? ${string.trim().startsWith('Hey')}`);
}
stringHandsOn();