var greet = "Good Morning Dude";
var lengthGreet= greet.length;
console.log(greet,'Length of String is:', lengthGreet);

var chartAt0 = greet.charAt(0);
console.log(`${greet} - char at 0th index is ${chartAt0}`);
var charAtlastindex = greet.charAt(lengthGreet-1);
console.log(`Last char ${charAtlastindex} of index is ${lengthGreet}`);
console.log(`------------------------------------------------------------`);

var firstn = "Rahul";
var lastn = "Raut";
var full = firstn + lastn;
console.log(`conactination of string is ${full}`);
var result = firstn.concat(lastn);
console.log(`my full name is ${result}`);
console.log(`------------------------------------------------------------`);
var result = greet.indexOf('M');
console.log(`index of char M is ${result}`);
var result = greet.indexOf('Dude');
console.log(`index of char Dude is ${result}`);
console.log(`------------------------------------------------------------`);
var result = greet.includes('Dude');
console.log(`index of char Dude is ${result}`);
console.log(`------------------------------------------------------------`);
var result = greet.split(' ');
var words = result.length;
console.log(`the number of words ${words} result is ${result}`);
console.log(`------------------------------------------------------------`);
var string = "       Good Morning its a sky        ";
var result = string.trim();
console.log(`Before trim the length is ${string.length} after trim length is ${result.length} and result is ${result}` );
console.log(`------------------------------------------------------------`);
var resultTrimEnd = string.trimEnd();
var trimEndLength = resultTrimEnd.length;
var endspace = string.length - trimEndLength;
console.log(`the end spaces is:${endspace}`);
console.log(`------------------------------------------------------------`);
var string = "Good Morning"
var rep = string.replace(' ','-');
console.log(`Before replace ${string} aftter replace ${rep}`);
console.log(`------------------------------------------------------------`);
var result = string.slice(5,12);
console.log(result);







 