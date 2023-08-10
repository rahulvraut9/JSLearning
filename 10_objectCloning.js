let hdfcBank = {
    bankName : "HDFC",
    location : "pune",
    ifsc : 4539,
    countrry : "india" 
}

let sbiBank = hdfcBank;
sbiBank.bankName = "SBI Bank";

console.log(`hdfcBank Referance : ${hdfcBank.bankName}`);
console.log(`SbiBank Nmae Reference : ${sbiBank.bankName}`);

let studentElon = {
    fullName : "Elon Musk",
    age : 22,
    city : "Pune",
    college : "COEP pune",
    marks : {
        physics : 89,
        math : 91,
        science : 88
    }
}

let studentSteave = studentElon;
 
let studentSew = Object.assign({},studentElon);
studentSew.fullName = "Sew Jobs"
console.log(studentElon.fullName);
console.log(studentSew.fullName);

let studentJhon = {...studentElon};
studentJhon.fullName = "Jhon";
console.log(`Ellon name : ${studentElon.fullName}`);
console.log(`Jhon name : ${studentJhon.fullName}`);