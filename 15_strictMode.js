'use strict'

let myName = "Rahul"
console.log(myName);

// var age = 22;
// delete age; // it wont allowed

let student = {
    fullname : "Rahul Raut",
    age : 27,
    score : 89
}

// delete student; // it wont allowed
delete student.score; // it allowed

// function show(num1 ,num1){
//     console.log(num1,num1) // strict mode not allowed this
// }
// show(2,3)