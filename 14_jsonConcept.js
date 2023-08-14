let addressStr = `{
    "flatNo" : 407,
    "building" : "A",
    "sreet" : "Marunji Road",
    "location" : "Hinjwadi",
    "pin" : 411057,
    "oweners" : ["Bindhast Lala","Barbad Pashya"]
}`
console.log(`type of addressStr==> ${typeof addressStr}`);

const address = JSON.parse(addressStr); // it converts json format to object
console.log(`type of address ==> ${typeof address}`);
console.log(address);
console.log(address.location);
console.log(address.oweners);

console.log(`---------------------------`);
let student = {
    rollNo : 123,
    fullname : "Jenny Jobs",
    marks : "90%",
    award : {
        hsc : "school topper",
        ssc : "Division topper",
        graduation : "gold medelist"
    }
}

let studentStr = JSON.stringify(student); // conversts object json
console.log(studentStr);