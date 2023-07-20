console.log('=======================================');
var salary = null;
console.log(typeof salary);
salary = 40000.50; // 
var typeOfSalary = typeof salary;
console.log('salary=>', salary, 'typeof salary =>', typeOfSalary);
salary = "Forty Thousand";
var salaryTypeOf = typeof salary;
console.log('salary=>', salary, 'typeof=>', salaryTypeOf);

var num1 = 100; // 200
var num2 = 200; // 100
console.log( 'Before Swap' ,'num1 - ', num1, ' num2 - ', num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log(temp, num1, num2);
console.log( 'After Swap' ,'num1 - ', num1, ' num2 - ', num2);

var num1 = "sweety"; // 200
var num2 = "quetty"; // 100
console.log( 'Before Swap' ,'num1 - ', num1, ' num2 - ', num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log(temp, num1, num2);
console.log( 'After Swap' ,'num1 - ', num1, ' num2 - ', num2);