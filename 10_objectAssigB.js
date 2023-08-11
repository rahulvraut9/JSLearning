let bankSbi= {
    name : "SBI Bank",
    ifsc : "SBIN007",
    origin : "India",
    level : "National"
}
let bankLocation = {
    strret : "FC Road",
    city : "Pune",
    pincode : "434456"
}
console.log(`-------------------Object Assign Cloning------------------------`);

let objectClone = Object.assign({},bankSbi,bankLocation);
console.log(`Object.assign() Clone : ${JSON.stringify(objectClone)}`);
console.log(`-------------------Cloning Using Spread Operater------------------------`);
let spredClone = {...bankSbi,...bankLocation};
console.log(`Spread Clone ${JSON.stringify(spredClone)}`);

let rateOfInterrest = {
    homeLoanInterest: "8%",
    personalLoanInterest : "12%",
    duelInterest : "16%"
}
console.log(`-------------------Merge 3 Objects Using Spread Operater------------------------`);

let sbiDetails = {...bankSbi,...bankLocation,...rateOfInterrest};
console.log(`3 Object merged : ${JSON.stringify(sbiDetails)}`);

console.log(`-------------------Travese Object using For In------------------------`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        let element = sbiDetails[key];
console.log(`Key : ${key} values :${element}`);
        
    }
}



   