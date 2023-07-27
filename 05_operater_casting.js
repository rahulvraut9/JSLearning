console.log(`Implicit conversion to string:- \n`);
console.log(`Operations               Result                                 Reason`);
//console.log(`Numeric string used  with + gives strin type`);

let result;
result = '3' + 2;
console.log(`'3'+ 2           The result  is: ${result}             &      2 is converted to string`);

result = '3' + true;
console.log(`'3'+ true        The result  is: ${result}          &      true is converted to string`);

result = '3' + undefined;
console.log(`'3'+ undefined   The result  is: ${result}     &      undefined is converted to string`);

result = '3' + null;
console.log(`'3'+ null        The result  is: ${result}          &      null is converted to string\n`);

console.log(`Implicit boolean conversion to number :- \n`);
//if boolean is used, true is 1, false is 0 
console.log(`Operations               Result                                 Reason`);

let res;
res = '4' - true;
console.log(`'4'- true        The result  is: ${res}              &      true is converted to number`);

res = 4 + true;
console.log(` 4 + true        The result  is: ${res}              &      true is converted to number`);

res = 4 + false;
console.log(` 4 + false       The result  is: ${res}              &      false is converted to number\n`);

console.log(`Implicit string conversion to number\n:-`);
//Numeric string used with -,/,+.,* rseults number type
console.log(`Operations               Result                                 Reason`);

let res2;
res2 = '4' - '2';
console.log(`'4' - '2'        The result  is: ${res2}              &      '4'and'2' is converted to number`);

res2 = '4' - 2;
console.log(`'4' -  2         The result  is: ${res2}              &      '4' is converted to number`);

res2 = '4' * 2;
console.log(`'4' *  2         The result  is: ${res2}              &      '4' is converted to number`);

res2 = '4' / 2;
console.log(`'4' /  2         The result  is: ${res2}              &      '4' is converted to number`);

