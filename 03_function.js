function change(n1,n2){
console.log('Before Swap=>num1 is',num1,'and num2 is',num2);
temp =n2;
num2 =n1;
num1 =temp;
console.log('After swap=>num1 is',num1,'and num2 is',num2);
}
var num1 = 20;
var num2 = 30;
change(20,30);
console.log("====================================================================");

function swap(n1,n2,n3){
    console.log('Before Swap=>num1 is',var1,'and num2 is',var2,'and num3 is',var3);
    temp =n1;
    var1 =n2;
    var2 =n3;
    var3 = temp;
    console.log('After Swap=>num1 is',var1,'and num2 is',var2,'and num3 is',var3);
    }
    var var1 = 30;
    var var2 = 40;
    var var3 = 50;
    swap(var1,var2,var3);



console.log("====================================================================");
// var num1 = "sweety"; // 200
// var num2 = "quetty"; // 100
// console.log('Before Swap','num1 is', num1,' num2 is',num2);
// var temp = num1;
// num1 = num2;
// num2 = temp;
// //console.log(temp, num1, num2);
// console.log('After Swap','num1 is', num1,' num2 is',num2);