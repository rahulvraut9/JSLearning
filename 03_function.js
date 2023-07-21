// function change(n1,n2){
// console.log('Before Swap=>num1 is',num1,'and num2 is',num2);
// temp =n2;
// num2 =n1;
// num1 =temp;
// console.log('After swap=>num1 is',num1,'and num2 is',num2);
// }
// var num1 = 20;
// var num2 = 30;
// change(20,30);
// console.log("====================================================================");

// function swap(n1,n2,n3){
//     console.log('Before Swap=>num1 is',var1,'and num2 is',var2,'and num3 is',var3);
//     temp =n1;
//     var1 =n2;
//     var2 =n3;
//     var3 = temp;
//     console.log('After Swap=>num1 is',var1,'and num2 is',var2,'and num3 is',var3);
//     }
//     var var1 = 30;
//     var var2 = 40;
//     var var3 = 50;
//     swap(var1,var2,var3);



// console.log("====================================================================");
// // var num1 = "sweety"; // 200
// // var num2 = "quetty"; // 100
// // console.log('Before Swap','num1 is', num1,' num2 is',num2);
// // var temp = num1;
// // num1 = num2;
// // num2 = temp;
// // //console.log(temp, num1, num2);
// // console.log('After Swap','num1 is', num1,' num2 is',num2);

// Function with argument and no return value 
function checkType(value){ // var value;
    console.log('Value is', value);
    console.log('Type is: ', typeof value);
    console.log('-------------------------');
}
checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

// Function with argument and return value
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition(10, 23, 456);
console.log('Result is ', addition(10, 23, 456));
addition(-56, 239, 677);
console.log(addition(-56,239,677))