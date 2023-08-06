let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech Lead",
    city: "Pune",
    isMarried: true,
    empId: 2233,
    show: function(){
        console.log("`Function Show");
    }
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);  
personGK.city = "Mumbai";
console.log(`${personGK.city}`);
delete personGK.designation;
console.log(personGK);

let emptyObject = { 

}
emptyObject.addProprty = "proprty";
console.log(emptyObject)
personGK.show();

let bank = {
    bankName : "SBI",
    accNum : "1234567",
    ifsc : "SBIN00003456",
    address : {
        street : "Pali Road",
        pin : 1234,
        landmark : "abc",
        telephone : "021-2455",
        city :"Beed",
        state : "Mahashtra",
        country : "India"
    },
    empNames : ["Jhon","Steave","Henry","Marko"]
}

console.log(bank.address.city);
bank.address.country = "Mahashtra";
console.log(bank.address.country);
bank.empNames.push("bill");
bank.empNames.unshift("mark");
console.log(bank.empNames);

let student = {
    rollNumber : "37",
    state :"Mahashtra",
    city : "Beed",
    collage: "Mss's"
}
 
let keyStydent = Object.keys(student);
console.log(keyStydent);
let valuesStudent = Object.values(student);
console.log(valuesStudent);

console.log(`-------------Traversing Objecrt-------------`);
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`Key : ${key}, Values : ${element}`);
    }
}

isAvailabel = "collage" in student;
console.log(isAvailabel);

console.log(`-------------Frezzing Object--------------`);
const employee = {
    id : 1234,
    name : "Rahul Raut",
    company : "Infosys",
}

Object.freeze(employee);
employee.id = 4321;  // not run beacuse of freezing the object
employee.name = " James Bond";
console.log(employee)