console.log(`-------------------Task 1------------------------`);
let personalDetails ={
  name : "Rahul Raut",
  education : "B.E CSE",
  course : "Angular",
  language : "javascript"
}
let collegeDetails = {
    collegeName : "M.s.s CET",
    address : "Jalna",
    dteCode : "2138"
}
let merge = Object.assign({},personalDetails,collegeDetails);
console.log(merge);

console.log(`-------------------Task 2------------------------`);

let friendName = ["Mangalsing","Gopal","Shaker"];
Object.freeze(friendName);
for(let list of friendName){
    console.log(list)
}
console.log(`-------------------Task 3------------------------`);

let company = "Codemind Technology"
let name = company.split(" ");
operation = name[1];
res = "";
for(i=operation.length-1;i>=0;i--){
    res = res + operation[i]
}
console.log(`The Result is : ${name[0]} ${res}`);